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
    { path: '/orgmastermanagement', name: 'Organization Master Management',
        component: require('./Pages/organization/masters/orgmasterindex.vue').default,
        children: [
            { path: '', component: require('./Pages/organization/masters/orgmasterdata.vue').default },
            { path: '/orgmasterlevel', name: 'Level Master', component: require('./Pages/organization/masters/masterlevel.vue').default },
            { path: '/orglocationmaster', name: 'Location Master', component: require('./Pages/organization/masters/locationmaster.vue').default },
            { path: '/orgstatus', name: 'Status Master', component: require('./Pages/organization/masters/orgstatus.vue').default },
            { path: '/climatetype', name: 'Climate Master', component: require('./Pages/organization/masters/climatetype.vue').default },
            { path: '/roadtype', name: 'Roadtype Master', component: require('./Pages/organization/masters/roadtype.vue').default },
        ]    
    }, 
    { path: '/dzongmasters', name: 'Dzongkhag Master', component: require('./Pages/globalmaster/dzongmasters.vue').default },
    { path: '/gewogmasters', name: 'Gewog Master', component: require('./Pages/globalmaster/gewogmasters.vue').default },
    { path: '/serviceType', name: 'Service Type', component: require('./Pages/staff/masters/serviceType.vue').default },
    { path: '/usermanagement', name: 'Staff User', 
        component: require('./Pages/administration/usermanagement/usermanagement.vue').default,
        children: [
            { path: '/', component: require('./Pages/administration/usermanagement/usermanagementindex.vue').default },
            { path: '/internaluser', component: require('./Pages/administration/usermanagement/staff.vue').default },
            { path: '/externaluser', name: 'Level Master', component: require('./Pages/administration/usermanagement/external.vue').default },
        ] 
    },
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
