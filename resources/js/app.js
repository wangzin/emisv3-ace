require('./bootstrap');

require('moment');

import Vue from 'vue';  

import { InertiaApp } from '@inertiajs/inertia-vue';
import { InertiaForm } from 'laravel-jetstream';
import PortalVue from 'portal-vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.mixin({ methods: { route } });
Vue.use(InertiaApp);
Vue.use(InertiaForm);
Vue.use(PortalVue);

let routes = [
    { path: '/', name: 'Dashboard', component: require('./Pages/dashboard_data.vue').default },
    { path: '/schoolIndex', name: 'School Index', component: require('./Pages/organization/school.vue').default },
    { path: '/orgmasterlevel', name: 'Level Master', component: require('./Pages/organization/masters/masterlevel.vue').default },
    { path: '/orglocationmaster', name: 'Location Master', component: require('./Pages/organization/masters/locationmaster.vue').default },
    { path: '/orgstatus', name: 'Status Master', component: require('./Pages/organization/masters/orgstatus.vue').default },
    { path: '/climatetype', name: 'Climate Master', component: require('./Pages/organization/masters/climatetype.vue').default },
    { path: '/roadtype', name: 'Roadtype Master', component: require('./Pages/organization/masters/roadtype.vue').default },
    { path: '/dzongmasters', name: 'Roadtype Master', component: require('./Pages/globalmaster/dzongmasters.vue').default },
]
const router = new VueRouter({
    routes // short for `routes: routes`
});
const app = document.getElementById('app');

Vue.component('headcss', require('./Layouts/head.vue').default);
Vue.component('headnav', require('./Layouts/nav.vue').default);
Vue.component('sidenav', require('./Layouts/side.vue').default);
Vue.component('footerpage', require('./Layouts/footer.vue').default);
  
new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
        router
}).$mount(app);
