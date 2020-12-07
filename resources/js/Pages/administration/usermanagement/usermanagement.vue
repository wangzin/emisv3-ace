<template>
     <div>
         <!-- <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ul class="breadcrumb">
                <li>
                    <i class="ace-icon fa fa-home home-icon"></i>
                    <a href="#">Home</a>
                </li>
                <li class="active">Administration</li>
				<li class="active">User Management</li>
            </ul>
        </div> -->
        <div class="page-content">
            <div class="row">
                <div class="col-xs-12">
					<div class="tabbable">
						<ul class="nav nav-tabs" id="myTab">
							<li class="dropdown">
								<a data-toggle="dropdown" class="dropdown-toggle" href="#" aria-expanded="false">
									<i class="green ace-icon fa fa-users bigger-120"></i>
									User Management &nbsp;
									<i class="ace-icon fa fa-caret-down bigger-110 width-auto"></i>
								</a>
								<ul class="dropdown-menu dropdown-info">
									<li>
                                        <router-link to="/internaluser" data-toggle="awesome_tooltip" title="Staff User">
                                            <i class="menu-icon fa fa-caret-right"></i>
                                            <span class="">
                                                <b>&nbsp;&nbsp;Staff/Internal User</b>
                                            </span> 
                                        </router-link>
                                        <b class="arrow"></b>
                                    </li>                           
                                    <li>
                                        <router-link to="/externalUser" data-toggle="awesome_tooltip" title="Other User">
                                            <i class="menu-icon fa fa-caret-right"></i>
                                            <span class="">
                                                <b>&nbsp;&nbsp; External User</b>
                                            </span> 
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/externalUser" data-toggle="awesome_tooltip" title="Other User">
                                            <i class="menu-icon fa fa-caret-right"></i>
                                            <span class="">
                                                <b>&nbsp;&nbsp; User List</b>
                                            </span> 
                                        </router-link>
                                    </li>
								</ul>
							</li>
						</ul>
						<div class="tab-content">
							<router-view></router-view>
						</div>
					</div>
                </div>
            </div>
        </div>
     </div>
</template>
