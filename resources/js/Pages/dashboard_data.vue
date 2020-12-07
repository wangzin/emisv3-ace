<template>
    <div>
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ul class="breadcrumb">
                <li>
                    <i class="ace-icon fa fa-home home-icon"></i>
                    <a href="#">Home</a>
                </li>
                <li class="active">Dashboard</li>
            </ul>
            <div class="nav-search" id="nav-search">
                <!-- <form class="form-search">
                    <span class="input-icon">
                        <input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off" />
                        <i class="ace-icon fa fa-search nav-search-icon"></i>
                    </span>
                </form> -->
            </div>
        </div>

        <div class="page-content">
            <div class="page-header">
                <h1>
                    Dashboard
                    <small>
                        <i class="ace-icon fa fa-angle-double-right"></i>
                        overview 
                    </small>
                </h1>
            </div>

            <div class="row">
                <div class="col-xs-12">
                    <div class="row">
                        <div class="col-sm-6 infobox-container"> 
                           <div class="infobox infobox-black infobox-small infobox-dark width-95">
                                <div class="infobox-icon">  
                                    <i class="ace-icon fa fa-bank"></i> 
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">609</span>
                                    <div class="infobox-content">Organizations</div>
                                </div>
                            </div> 
                            <div class="space-6"></div> 
                            <div class="infobox infobox-green width-45">
                                <div class="infobox-icon"> 
                                    <i class="ace-icon fa fa-home"></i>
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">570</span>
                                    <div class="infobox-content">Public Schools</div>
                                </div>
                            </div>
                            <div class="infobox infobox-blue width-50">
                                <div class="infobox-icon"> 
                                    <i class="ace-icon fa fa-home"></i>
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">39</span>
                                    <div class="infobox-content">Private Schools</div>
                                </div>
                            </div>
                            <div class="infobox infobox-pink width-45">
                                <div class="infobox-icon">
                                    <i class="ace-icon fa fa-home"></i>
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">23</span>
                                    <div class="infobox-content">ECCD Centers </div>
                                </div>
                            </div>
                            <div class="infobox infobox-red width-50">
                                <div class="infobox-icon">
                                    <i class="ace-icon fa fa-home"></i>
                                </div>
                                <div class="infobox-data"> 
                                    <span class="infobox-data-number">43</span>
                                    <div class="infobox-content">Other Organizations</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-sm-6 infobox-container"> 
                           <div class="infobox infobox-green2 infobox-small infobox-dark width-95">
                                <div class="infobox-icon"> 
                                    <i class="ace-icon fa fa-book"></i> 
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">10106</span>
                                    <div class="infobox-content">Teachers</div>
                                </div>
                            </div> 
                            <div class="space-6"></div> 
                            <div class="infobox infobox-green width-45">
                                <div class="infobox-icon"> 
                                    <i class="ace-icon fa fa-user"></i>
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">10106</span>
                                    <div class="infobox-content">Public Teacher</div>
                                </div>
                            </div>
                            <div class="infobox infobox-blue width-50">
                                <div class="infobox-icon"> 
                                    <i class="ace-icon fa fa-user"></i>
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">12438</span>
                                    <div class="infobox-content">Private Teachers</div>
                                </div>
                            </div>
                            <div class="infobox infobox-pink width-45">
                                <div class="infobox-icon">
                                    <i class="ace-icon fa fa-user"></i>
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">600</span>
                                    <div class="infobox-content">Teachers with Disability</div>
                                </div>
                            </div>
                            <div class="infobox infobox-red width-50">
                                <div class="infobox-icon">
                                    <i class="ace-icon fa fa-user"></i>
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">400</span>
                                    <div class="infobox-content">ECCD & ECR Teachers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hr hr32 hr-dotted"></div>
                    <div class="row">
                        <div class="col-sm-6 infobox-container"> 
                            <div class="infobox infobox-blue infobox-small infobox-dark width-95">
                                <div class="infobox-icon"> 
                                    <i class="ace-icon fa fa-graduation-cap"></i> 
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">170725</span>
                                    <div class="infobox-content">Students</div>
                                </div>
                            </div> 
                            <div class="space-6"></div> 
                            <div class="infobox infobox-green width-45">
                                <div class="infobox-icon"> 
                                    <i class="ace-icon fa fa-users"></i>
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">158287</span>
                                    <div class="infobox-content">Regular Students</div>
                                </div>
                            </div>
                            <div class="infobox infobox-blue width-50">
                                <div class="infobox-icon"> 
                                    <i class="ace-icon fa fa-users"></i>
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">12438</span>
                                    <div class="infobox-content">Private Students</div>
                                </div>
                            </div>
                            <div class="infobox infobox-pink width-45">
                                <div class="infobox-icon">
                                    <i class="ace-icon fa fa-users"></i>
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">600</span>
                                    <div class="infobox-content">Student with Disability</div>
                                </div>
                            </div>
                            <div class="infobox infobox-red width-50">
                                <div class="infobox-icon">
                                    <i class="ace-icon fa fa-users"></i>
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">400</span>
                                    <div class="infobox-content">ECCD & ECR Students</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 infobox-container"> 
                            <div class="infobox infobox-green infobox-small infobox-dark width-95">
                                <div class="infobox-icon"> 
                                    <i class="ace-icon fa fa-list"></i> 
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">Others</span>
                                </div>
                            </div> 
                            <div class="space-6"></div> 
                            <div class="infobox infobox-green width-45">
                                <div class="infobox-icon"> 
                                    <i class="ace-icon fa fa-users"></i>
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">158287</span>
                                    <div class="infobox-content">Regular Students</div>
                                </div>
                            </div>
                            <div class="infobox infobox-blue width-50">
                                <div class="infobox-icon"> 
                                    <i class="ace-icon fa fa-users"></i>
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">12438</span>
                                    <div class="infobox-content">Private Students</div>
                                </div>
                            </div>
                            <div class="infobox infobox-pink width-45">
                                <div class="infobox-icon">
                                    <i class="ace-icon fa fa-users"></i>
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">600</span>
                                    <div class="infobox-content">Student with Disability</div>
                                </div>
                            </div>
                            <div class="infobox infobox-red width-50">
                                <div class="infobox-icon">
                                    <i class="ace-icon fa fa-users"></i>
                                </div>
                                <div class="infobox-data">
                                    <span class="infobox-data-number">400</span>
                                    <div class="infobox-content">ECCD & ECR Students</div>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div class="hr hr32 hr-dotted"></div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="widget-box transparent" id="recent-box">
                                <div class="widget-header">
                                    <h4 class="widget-title lighter smaller">
                                        <i class="ace-icon fa fa-database orange"></i>Reports
                                    </h4>
                                    <div class="widget-toolbar no-border">
                                        <ul class="nav nav-tabs" id="recent-tab">
                                            <li class="active">
                                                <a data-toggle="tab" href="#task-tab">Reports on Staff</a>
                                            </li>

                                            <li>
                                                <a data-toggle="tab" href="#member-tab">Reports on ECCCD</a>
                                            </li>
                                            <li>
                                                <a data-toggle="tab" href="#comment-tab">Reports on Organisation</a>
                                            </li>
                                            <li>
                                                <a data-toggle="tab" href="#student-tab">Reports on Student</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="widget-body">
                                    <div class="widget-main padding-4">
                                        <div class="tab-content padding-8">
                                            <div id="task-tab" class="tab-pane active">
                                                <table class="table table-bordered table-striped">
                                                    <thead class="thin-border-bottom">
                                                        <tr>
                                                            <th>
                                                                <i class="ace-icon fa fa-caret-right blue"></i>Report Name
                                                            </th>
                                                            <th>
                                                                <i class="ace-icon fa fa-caret-right blue"></i>Overall Count
                                                            </th>
                                                            <th class="hidden-480">
                                                                <i class="ace-icon fa fa-caret-right blue"></i>Action
                                                            </th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr>
                                                            <td>List of DEO/TEOs with Contact Details</td>
                                                            <td>
                                                                <b class="green">58</b>
                                                            </td>
                                                            <td class="hidden-480">
                                                                <button class="btn btn-xs btn-primary">Generete</button>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>Principal List</td>
                                                            <td>
                                                                <b class="blue">102</b>
                                                            </td>
                                                            <td class="hidden-480">
                                                                <button class="btn btn-xs btn-primary">Generete</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Vice Principal List</td>
                                                            <td>
                                                                <b class="blue">102</b>
                                                            </td>
                                                            <td class="hidden-480">
                                                                <button class="btn btn-xs btn-primary">Generete</button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div id="member-tab" class="tab-pane">
                                                <table class="table table-bordered table-striped">
                                                    <thead class="thin-border-bottom">
                                                        <tr>
                                                            <th>
                                                                <i class="ace-icon fa fa-caret-right blue"></i>Report Name
                                                            </th>
                                                            <th>
                                                                <i class="ace-icon fa fa-caret-right blue"></i>Overall Count
                                                            </th>
                                                            <th class="hidden-480">
                                                                <i class="ace-icon fa fa-caret-right blue"></i>Action
                                                            </th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr>
                                                            <td>ECCD Centers</td>
                                                            <td>
                                                                <b class="green">58</b>
                                                            </td>
                                                            <td class="hidden-480">
                                                                <button class="btn btn-xs btn-primary">Generete</button>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>ECCD Facilitators</td>
                                                            <td>
                                                                <b class="blue">102</b>
                                                            </td>
                                                            <td class="hidden-480">
                                                                <button class="btn btn-xs btn-primary">Generete</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2019 ECCD Enrollment</td>
                                                            <td>
                                                                <b class="blue">102</b>
                                                            </td>
                                                            <td class="hidden-480">
                                                                <button class="btn btn-xs btn-primary">Generete</button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="hr hr-double hr8"></div>
                                            </div><!-- /.#member-tab -->

                                            <div id="comment-tab" class="tab-pane">
                                                <div class="comments">
                                                    <div class="itemdiv commentdiv">
                                                        <div class="user">
                                                            <img alt="Bob Doe's Avatar" src="assets/images/avatars/avatar.png" />
                                                        </div>

                                                        <div class="body">
                                                            <div class="name">
                                                                <a href="#">Bob Doe</a>
                                                            </div>

                                                            <div class="time">
                                                                <i class="ace-icon fa fa-clock-o"></i>
                                                                <span class="green">6 min</span>
                                                            </div>

                                                            <div class="text">
                                                                <i class="ace-icon fa fa-quote-left"></i>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo massa sed ipsum porttitor facilisis &hellip;
                                                            </div>
                                                        </div>

                                                        <div class="tools">
                                                            <div class="inline position-relative">
                                                                <button class="btn btn-minier bigger btn-yellow dropdown-toggle" data-toggle="dropdown">
                                                                    <i class="ace-icon fa fa-angle-down icon-only bigger-120"></i>
                                                                </button>

                                                                <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                                    <li>
                                                                        <a href="#" class="tooltip-success" data-rel="tooltip" title="Approve">
                                                                            <span class="green">
                                                                                <i class="ace-icon fa fa-check bigger-110"></i>
                                                                            </span>
                                                                        </a>
                                                                    </li>

                                                                    <li>
                                                                        <a href="#" class="tooltip-warning" data-rel="tooltip" title="Reject">
                                                                            <span class="orange">
                                                                                <i class="ace-icon fa fa-times bigger-110"></i>
                                                                            </span>
                                                                        </a>
                                                                    </li>

                                                                    <li>
                                                                        <a href="#" class="tooltip-error" data-rel="tooltip" title="Delete">
                                                                            <span class="red">
                                                                                <i class="ace-icon fa fa-trash-o bigger-110"></i>
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="itemdiv commentdiv">
                                                        <div class="user">
                                                            <img alt="Jennifer's Avatar" src="assets/images/avatars/avatar1.png" />
                                                        </div>

                                                        <div class="body">
                                                            <div class="name">
                                                                <a href="#">Jennifer</a>
                                                            </div>

                                                            <div class="time">
                                                                <i class="ace-icon fa fa-clock-o"></i>
                                                                <span class="blue">15 min</span>
                                                            </div>

                                                            <div class="text">
                                                                <i class="ace-icon fa fa-quote-left"></i>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo massa sed ipsum porttitor facilisis &hellip;
                                                            </div>
                                                        </div>

                                                        <div class="tools">
                                                            <div class="action-buttons bigger-125">
                                                                <a href="#">
                                                                    <i class="ace-icon fa fa-pencil blue"></i>
                                                                </a>

                                                                <a href="#">
                                                                    <i class="ace-icon fa fa-trash-o red"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="itemdiv commentdiv">
                                                        <div class="user">
                                                            <img alt="Joe's Avatar" src="assets/images/avatars/avatar2.png" />
                                                        </div>

                                                        <div class="body">
                                                            <div class="name">
                                                                <a href="#">Joe</a>
                                                            </div>

                                                            <div class="time">
                                                                <i class="ace-icon fa fa-clock-o"></i>
                                                                <span class="orange">22 min</span>
                                                            </div>

                                                            <div class="text">
                                                                <i class="ace-icon fa fa-quote-left"></i>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo massa sed ipsum porttitor facilisis &hellip;
                                                            </div>
                                                        </div>

                                                        <div class="tools">
                                                            <div class="action-buttons bigger-125">
                                                                <a href="#">
                                                                    <i class="ace-icon fa fa-pencil blue"></i>
                                                                </a>

                                                                <a href="#">
                                                                    <i class="ace-icon fa fa-trash-o red"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="itemdiv commentdiv">
                                                        <div class="user">
                                                            <img alt="Rita's Avatar" src="assets/images/avatars/avatar3.png" />
                                                        </div>

                                                        <div class="body">
                                                            <div class="name">
                                                                <a href="#">Rita</a>
                                                            </div>

                                                            <div class="time">
                                                                <i class="ace-icon fa fa-clock-o"></i>
                                                                <span class="red">50 min</span>
                                                            </div>

                                                            <div class="text">
                                                                <i class="ace-icon fa fa-quote-left"></i>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo massa sed ipsum porttitor facilisis &hellip;
                                                            </div>
                                                        </div>

                                                        <div class="tools">
                                                            <div class="action-buttons bigger-125">
                                                                <a href="#">
                                                                    <i class="ace-icon fa fa-pencil blue"></i>
                                                                </a>

                                                                <a href="#">
                                                                    <i class="ace-icon fa fa-trash-o red"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="hr hr8"></div>

                                                <div class="center">
                                                    <i class="ace-icon fa fa-comments-o fa-2x green middle"></i>

                                                    &nbsp;
                                                    <a href="#" class="btn btn-sm btn-white btn-info">
                                                        See all comments &nbsp;
                                                        <i class="ace-icon fa fa-arrow-right"></i>
                                                    </a>
                                                </div>

                                                <div class="hr hr-double hr8"></div>
                                            </div>
                                        </div>
                                    </div><!-- /.widget-main -->
                                </div><!-- /.widget-body -->
                            </div><!-- /.widget-box -->
                        </div><!-- /.col -->

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
