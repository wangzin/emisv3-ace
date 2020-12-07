<template>
     <div>
         <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ul class="breadcrumb">
                <li>
                    <i class="ace-icon fa fa-home home-icon"></i>
                    <a href="#">Home</a>
                </li>
                <li class="active">Security Administration</li>
				<li class="active">External User</li>
            </ul>
            
        </div>

        <div class="page-content">
           <div class="row">
              <div class="col-xs-12">
                  <div class="clearfix">
                        <div class="pull-right tableTools-container"></div>
                  </div> 
                  <div class="table-header">
                       External User
                 </div>
                        <form class="form-horizontal" role="form">
                            <div class="space-4"></div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="name"> Name: </label>

                                <div class="col-sm-9">
                                    <input type="text" id="name" placeholder="Name" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="name"> Email: </label>

                                <div class="col-sm-9">
                                    <input type="text" id="userName" placeholder="User Name" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="name"> Description: </label>

                                <div class="col-sm-9">
                                    <input type="text" id="description" placeholder="Description" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="name"> Role: </label>

                                <div class="col-sm-9">
                                    <select name="role" id="roles" class="col-md-5">
                                        <option value="">--- Please Select ---</option>
                                        <option value="admin">Admin</option>
                                        <option value="teacher">Teacher</option>
                                        <option value="deo">DEO</option>
                                        <option value="director">Director</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="name"> Status: </label>

                                <div class="col-sm-9">
                                    <input type="text" id="role" placeholder="Status" class="col-xs-10 col-sm-5" />
                                </div>
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