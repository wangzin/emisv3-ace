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
            <li class="active">
                <a href="/userdashboard">
                    <i class="menu-icon fa fa-tachometer"></i>
                    <span class="menu-text"> Dashboard </span>
                </a>
                <b class="arrow"></b>
            </li>
            <li class="">
                <a href="#" class="dropdown-toggle">
                    <i class="menu-icon fa fa-home"></i>
                    <span class="menu-text">
                       Organization
                    </span>
                    <b class="arrow fa fa-angle-down"></b>
                </a>
                <b class="arrow"></b>
                <ul class="submenu">
                    <li class="">
                        <router-link to="/schoolIndex" class="dropdown-toggle" data-toggle="awesome_tooltip" title="Organization">
                            <i class="menu-icon fa fa-caret-right"></i>
                            <span class="menu-text">
                                <i class="menu-icon fa fa-home"></i>
                                <b>&nbsp;&nbsp;School</b>
                            </span>
                        </router-link>
                        <!-- <a href="#" class="dropdown-toggle">
                            <i class="menu-icon fa fa-caret-right"></i>
                            School
                        </a> -->
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

            <li class="">
                <a href="#" class="dropdown-toggle">
                    <i class="menu-icon fa fa-users"></i>
                    <span class="menu-text">
                       Staff and Students
                    </span>
                    <b class="arrow fa fa-angle-down"></b>
                </a>
                <b class="arrow"></b>
                <ul class="submenu">
                    <li class="">
                        <a href="#" class="dropdown-toggle">
                            <i class="menu-icon fa fa-caret-right"></i>
                            Staff Management
                        </a>
                    </li>
                     <li class="">
                        <a href="#" class="dropdown-toggle">
                            <i class="menu-icon fa fa-caret-right"></i>
                            Student Management
                        </a>
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
            <li class="">
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