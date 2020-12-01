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

            let bootstrap = document.createElement('script');
            bootstrap.setAttribute('src', 'assets/js/bootstrap.min.js');
            document.head.appendChild(bootstrap);

            let jui=document.createElement('script');
            jui.setAttribute('src', 'assets/js/jquery-ui.custom.min.js');
            document.head.appendChild(jui);
            
            let bootstraptag = document.createElement('script');
            let hotkey=document.createElement('script');
            let wysiwyg=document.createElement('script');
            let aceelement=document.createElement('script');
            let acejs=document.createElement('script');
            let externalScript = document.createElement('script');
            let juitouch=document.createElement('script');
            let easychart=document.createElement('script');
            let sparkline=document.createElement('script');
            let flot=document.createElement('script');
            let pie=document.createElement('script');
            let resize=document.createElement('script');
            let dashboard=document.createElement('script');
            
            

            juitouch.setAttribute('src', 'assets/js/jquery.ui.touch-punch.min.js');
            easychart.setAttribute('src', 'assets/js/jquery.easypiechart.min.js');
            sparkline.setAttribute('src', 'assets/js/jquery.sparkline.index.min.js');
            pie.setAttribute('src', 'assets/js/jquery.flot.pie.min.js');
            flot.setAttribute('src', 'assets/js/jquery.flot.min.js');
            resize.setAttribute('src', 'assets/js/jquery.flot.resize.min.js');
            aceelement.setAttribute('src', 'assets/js/ace-elements.min.js');
            acejs.setAttribute('src', 'assets/js/ace.min.js');
            //dashboard.setAttribute('src', 'assets/dashboard.js');

            // externalScript.setAttribute('src', 'assets/js/ace-extra.min.js');
            // bootstraptag.setAttribute('src', 'assets/js/bootstrap-tag.min.js');
            // hotkey.setAttribute('src', 'assets/js/jquery.hotkeys.index.min.js');
            // wysiwyg.setAttribute('src', 'assets/js/bootstrap-wysiwyg.min.js');

            //document.head.appendChild(externalScript);
            
            document.head.appendChild(juitouch);
            document.head.appendChild(easychart);
            document.head.appendChild(sparkline);
            document.head.appendChild(pie);
            document.head.appendChild(flot);
            document.head.appendChild(resize);           
            //document.head.appendChild(bootstraptag);
            //document.head.appendChild(hotkey);
            //document.head.appendChild(wysiwyg);
            document.head.appendChild(aceelement);
            document.head.appendChild(acejs);
            //document.head.appendChild(dashboard);
        },
    }
</script>
