<template>
     <div>
      <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ul class="breadcrumb">
                <li>
                    <i class="ace-icon fa fa-home home-icon"></i>
                    <a href="#">Home</a>
                </li>
                <li class="active">Staff Module</li>
            </ul>
        </div>
        
        <div class="page-content">
           <div class="row">
              <div class="col-xs-12">
                  <div class="clearfix">
                        <div class="pull-right tableTools-container"></div>
                  </div> 
                  <div class="table-header">
                       Appointment
                 </div>
                        <form class="form-horizontal" role="form">
                            <div class="space-4"></div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="typeOfService"> Type of Service </label>

                                <div class="col-sm-9">
                                    <input type="text" id="typeOfService" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="appointmentType"> Appointment Type </label>

                                <div class="col-sm-9">
                                    <input type="text" id="appointmentType" class="col-xs-10 col-sm-5" />
                                   
                                </div>
                            </div>


                             <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="employeeID"> Employee ID </label>

                                <div class="col-sm-9">
                                    <input type="text" id="employeeID" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                             <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="appointmentDate"> Appointment Date </label>

                                <div class="col-sm-9">
                                    <input type="text" id="appointmentDate" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right"> RCSC Selected </label>

                                <label for="yes" class="col-md-1">
                                    <input type="radio" id="yes" name="gender" value="yes" checked> Yes
                                </label>
                                <label for="no">
                                    <input type="radio" id="no" name="gender" value="no"> No
                                </label>
                            </div>
                            <div class="space-4"></div>                        

                            <div class="clearfix form-actions">
                                <div class="col-md-offset-2 col-md-9">
                                    <button class="btn btn-info" type="button">
                                        <i class="ace-icon fa fa-check bigger-110"></i>
                                        Submit
                                    </button>

                                    &nbsp; &nbsp; &nbsp;
                                    <button class="btn" type="reset">
                                        <i class="ace-icon fa fa-undo bigger-110"></i>
                                        Reset
                                    </button>
                                </div>
                            </div>              

                        </form>                 
              </div>
           </div>
        </div>
  </div>
</template>