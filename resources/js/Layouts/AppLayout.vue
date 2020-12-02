<template>
    <div>
        <headcss/>
        <body class="no-skin">
            <headnav />
            <div class="main-container ace-save-state" id="main-container">
                <div id="sidebar" class="sidebar responsive ace-save-state">
                    <sidenav />
                </div>
                <div class="main-content">
                    <div class="main-content-inner">
                        <main><slot></slot></main> 
                    </div>
                    <div class="footer">
                        <div class="footer-inner">
                            <footerpage />
                        </div>
                    </div>  
                </div>   
                <portal-target name="modal" multiple>
                </portal-target>
            </div>
        </body>
    </div>
</template>

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

           
        },
    }
</script>
