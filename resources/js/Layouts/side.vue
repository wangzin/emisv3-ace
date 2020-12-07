<template>
    <div>
        <div class="sidebar-shortcuts" id="sidebar-shortcuts">
            <div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
                <span class="btn btn-success">MOE </span>
                 <span class="btn btn-success"><b>>></b> </span>
                <button class="btn btn-success">
                    EMIS
                </button>
            </div>

            <div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
                <span class="btn btn-success"></span>
            </div>
        </div>
        <ul class="nav nav-list">
            <li class="active" id="dashboard">
                <a href="/userdashboard">
                    <i class="menu-icon fa fa-tachometer"></i>
                    <span class="menu-text"> Dashboard </span>
                </a>
                <b class="arrow"></b>
            </li>

            <li class="" id="globalid">
                <a href="#" class="dropdown-toggle">
                    <i class="menu-icon fa fa-database"></i>
                    <span class="menu-text">
                       Global Masters
                    </span>
                    <b class="arrow fa fa-angle-down"></b>
                </a>
                <b class="arrow"></b>
                <ul class="submenu" id="globalmastersub">
                    <li class="" id="dzongkhaglink" @click="manageclasses('globalid','globalmastersub','','','dzongkhaglink')"> 
                        <router-link to="/dzongmasters"   class="dropdown-toggle" data-toggle="awesome_tooltip" title="Organization">
                            <i class="menu-icon fa fa-caret-right"></i>
                            <span class="">
                                <b>&nbsp;&nbsp;Dzongkhag Master</b>
                            </span> 
                        </router-link>
                    </li>
                     <li class="" id="gewogmasters" @click="manageclasses('globalid','globalmastersub','','','gewogmasters')">
                        <router-link to="/gewogmasters" class="dropdown-toggle" data-toggle="awesome_tooltip" title="Organization">
                            <i class="menu-icon fa fa-caret-right"></i>
                            <span class="">
                                <b>&nbsp;&nbsp;Gewog Master</b>
                            </span> 
                        </router-link>
                    </li>
                </ul>
            </li>
             <li class="" id="administrationid">
                <a href="#" class="dropdown-toggle">
                    <i class="menu-icon fa fa-area-chart"></i>
                    <span class="menu-text">
                       Adminstration
                    </span>
                    <b class="arrow fa fa-angle-down"></b>
                </a>
                <b class="arrow"></b>
                <ul class="submenu" id="administrationsubmenuid">
                    <li class="" id="rolesAndPreviledges" @click="manageclasses('administrationid','administrationsubmenuid','','','rolesAndPreviledges')">
                        <router-link to="/rolesAndPriviledges" class="dropdown-toggle" data-toggle="awesome_tooltip" title="Staff">
                            <i class="menu-icon fa fa-caret-right"></i>
                            <span class="menu-text">
                                <b>&nbsp;&nbsp;Roles and priviledges</b>
                            </span>
                        </router-link>
                    </li>  
                    <li class="" id="userRegistration" @click="manageclasses('administrationid','administrationsubmenuid','','','userRegistration')">
                        <router-link to="/usermanagement" class="dropdown-toggle" data-toggle="awesome_tooltip" title="Staff User">
                            <i class="menu-icon fa fa-caret-right"></i>
                            <span class="">
                                <b>User Registration</b>
                            </span> 
                            <b class="arrow fa fa-folder-open"></b>
                        </router-link>
                       
                    </li>
                    <li class="" id="workFlow" @click="manageclasses('','','','','')">
                        <router-link to="/workFlow" class="dropdown-toggle" data-toggle="awesome_tooltip" title="Wok Flow">
                            <i class="menu-icon fa fa-caret-right"></i>
                            <span class="menu-text">
                                <b>&nbsp;&nbsp;Work Flow</b>
                            </span>
                        </router-link>
                    </li>
                </ul>

            </li>
            <li class="" id="organizationmenu">
                <a href="#" class="dropdown-toggle">
                    <i class="menu-icon fa fa-home"></i>
                    <span class="menu-text">
                       Organization
                    </span>
                    <b class="arrow fa fa-angle-down"></b>
                </a>
                <b class="arrow"></b>
                <ul class="submenu" id="organizationsubmenu">
                    <li class="" id="orgmaster" @click="manageclasses('organizationmenu','organizationsubmenu','','','orgmaster')">
                        <router-link to="/orgmastermanagement" class="dropdown-toggle" data-toggle="awesome_tooltip" title="Organization">
                            <i class="menu-icon fa fa-caret-right"></i>
                            <span class="">
                                <b>&nbsp;&nbsp;Org. Mastersl</b>
                            </span> 
                            <b class="arrow fa fa-folder-open"></b>
                        </router-link>
                        <b class="arrow"></b>
                    </li>
                    <li class="" id="schoolId" @click="manageclasses('organizationmenu','organizationsubmenu','','','schoolId')">
                        <router-link to="/schoolIndex" class="dropdown-toggle" data-toggle="awesome_tooltip" title="Organization">
                            <i class="menu-icon fa fa-caret-right"></i>
                            <span class="menu-text">
                                <b>&nbsp;&nbsp;Org. & Schools</b>
                            </span>
                        </router-link>
                    </li>
                     <li class="">
                        <a href="#" class="dropdown-toggle">
                            <i class="menu-icon fa fa-caret-right"></i>
                            ECR & ECCD
                        </a>
                    </li>
                    <li class="">
                        <a href="#" class="dropdown-toggle">
                            <i class="menu-icon fa fa-caret-right"></i>
                            Head Quaters & Others
                        </a>
                    </li>
                </ul>
            </li>

            <li class="" id="stafflink">
                <a href="#" class="dropdown-toggle">
                    <i class="menu-icon fa fa-users"></i>
                    <span class="menu-text">
                       Staff
                    </span>
                    <b class="arrow fa fa-angle-down"></b>
                </a>
                <b class="arrow"></b>
                <ul class="submenu" id="staffsubmenu">
                    <li class="" id="staffmanagent"  @click="manageclasses('stafflink','staffsubmenu','','','staffmanagent')">
                        <a href="#" class="dropdown-toggle">
                            <i class="menu-icon fa fa-caret-right"></i>
                            <b>Staff Masters</b>
                            <b class="arrow fa fa-angle-down"></b>
                        </a>
                        <b class="arrow"></b>
                        <ul class="submenu" id="staffMasterSubmenu">
                            <li class="" id="serviceType" @click="manageclasses('','','','','')">
                                <router-link to="/serviceType" class="dropdown-toggle" data-toggle="awesome_tooltip" title="Staff">
                                    <i class="menu-icon fa fa-caret-right"></i>
                                    <span class="">
                                        <b>&nbsp;&nbsp;Service Type</b>
                                    </span> 
                                </router-link>
                                <b class="arrow"></b>
                            </li>
                        </ul>
                    </li>
                    <li class="" id="schoolId" @click="manageclasses('','','','','')">
                        <router-link to="/" class="dropdown-toggle" data-toggle="awesome_tooltip" title="Staff">
                            <i class="menu-icon fa fa-caret-right"></i>
                            <span class="menu-text">
                                <b>&nbsp;&nbsp;Staff Information</b>
                            </span>
                        </router-link>
                    </li>

                </ul>

            </li>
            
            <li class="">
                <a href="/insethome">
                    <i class="menu-icon fa fa-bank"></i>
                    <span class="menu-text"> INSET Module</span>
                </a>
            </li>
            <li class="">
                <a href="#" class="dropdown-toggle">
                    <i class="menu-icon fa fa-book"></i>
                    <span class="menu-text"> Result Processing</span>
                </a>
            </li>
            <li class="" id="mdcalist" @click="manageclasses('','','','','mdcalist')">
                <a href="#" class="dropdown-toggle">
                    <i class="menu-icon fa fa-database"></i>
                    <span class="menu-text"> MDCA</span>
                </a>
            </li>
        </ul>
        <div class="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
            <i id="sidebar-toggle-icon" class="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
        </div>
    </div> 
</template> 
<script>
export default {
    methods: {
		manageclasses(mainmenuid,mainulid,submenuid,subulid,linkid){
            $('#dashboard').removeClass('active');
            
            $('#globalid').removeClass('active open');
            $('#globalmastersub').hide();
            $('#dzongkhaglink').removeClass('active');
            $('#gewogmasters').removeClass('active');
     
            $('#administrationid').removeClass('active open');
            $('#administrationsubmenuid').hide();
            $('#organizationmenu').removeClass('active open');
            $('#organizationsubmenu').hide();
            $('#userRegistration').removeClass('active');
            $('#rolesAndPreviledges').removeClass('active');
            $('#orgmaster').removeClass('active');
            // $('#orglocationmaster').removeClass('active');
            // $('#roadtype').removeClass('active');
            $('#schoolId').removeClass('active');
            $('#mdcalist').removeClass('active');

            $('#stafflink').removeClass('active open');
            $('#staffsubmenu').hide();
            $('#staffmanagent').removeClass('active');
            

            $('#'+mainmenuid).addClass('active open');
            $('#'+mainulid).show();
            $('#'+submenuid).addClass('active open');
            $('#'+subulid).show();
            $('#'+linkid).addClass('active');
		},
    },
    
}
</script>