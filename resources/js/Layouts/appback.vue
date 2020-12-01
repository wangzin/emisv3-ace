<template>
    <div>
        <headcss/>
        <body class="no-skin">
            <headnav />
            <div class="main-container ace-save-state" id="main-container">
                <div id="sidebar" class="sidebar responsive ace-save-state">
                     <sidenav />
                </div>
                <main>
                    <slot></slot>
                </main>
                <portal-target name="modal" multiple>
                </portal-target>
            </div>
            
        </body>
    </div>
</template>
<script src="assets/js/ace-extra.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/bootstrap-tag.min.js"></script>
<script src="assets/js/jquery.hotkeys.index.min.js"></script>
<script src="assets/js/bootstrap-wysiwyg.min.js"></script>
<script src="assets/js/ace-elements.min.js"></script>
<script src="assets/js/ace.min.js"></script>
<script src="assets/dashboard.js"></script>
<script>
    import JetApplicationMark from '@/Jetstream/ApplicationMark'
    import JetDropdown from '@/Jetstream/Dropdown'
    import JetDropdownLink from '@/Jetstream/DropdownLink'
    import JetNavLink from '@/Jetstream/NavLink'
    import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink'

    export default {
        components: {
            JetApplicationMark,
            JetDropdown,
            JetDropdownLink,
            JetNavLink,
            JetResponsiveNavLink,
        },

        data() {
            return {
                showingNavigationDropdown: false,
            }
        },

        methods: {
            switchToTeam(team) {
                this.$inertia.put(route('current-team.update'), {
                    'team_id': team.id
                }, {
                    preserveState: false
                })
            },

            logout() {
                axios.post(route('logout').url()).then(response => {
                    window.location = '/';
                })
            },
        },
        mounted() {
            let externalScript = document.createElement('script');
            let bootstrap = document.createElement('script');
            let bootstraptag = document.createElement('script');
            let hotkey=document.createElement('script');
            let wysiwyg=document.createElement('script');
            let aceelement=document.createElement('script');
            let acejs=document.createElement('script');
            let scrip=document.createElement('script');

            externalScript.setAttribute('src', 'assets/js/ace-extra.min.js');
            bootstrap.setAttribute('src', 'assets/js/bootstrap.min.js');
            bootstraptag.setAttribute('src', 'assets/js/bootstrap-tag.min.js');
            hotkey.setAttribute('src', 'assets/js/jquery.hotkeys.index.min.js');
            wysiwyg.setAttribute('src', 'assets/js/bootstrap-wysiwyg.min.js');
            aceelement.setAttribute('src', 'assets/js/ace-elements.min.js');
            acejs.setAttribute('src', 'assets/js/ace.min.js');
            scrip.setAttribute('src', 'assets/dashboard.js');
            
            document.head.appendChild(externalScript);
            document.head.appendChild(bootstrap);
            document.head.appendChild(bootstraptag);
            document.head.appendChild(hotkey);
            document.head.appendChild(wysiwyg);
            document.head.appendChild(aceelement);
            document.head.appendChild(acejs);
            document.head.appendChild(scrip);
        },
    }
</script>
