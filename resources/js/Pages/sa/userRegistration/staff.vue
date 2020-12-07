<template>
     <div>
         <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ul class="breadcrumb">
                <li>
                    <i class="ace-icon fa fa-home home-icon"></i>
                    <a href="#">Home</a>
                </li>
                <li class="active">Security Administration</li>
				<li class="active">Staff User</li>
            </ul>
            
        </div>

        <div class="page-content">
           <div class="row">
              <div class="col-xs-12">
                  <div class="clearfix">
                        <div class="pull-right tableTools-container"></div>
                  </div> 
                  <div class="table-header">
                       Staff User
                 </div>
                        <form class="form-horizontal" role="form">
                            <div class="space-4"></div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="name"> Employee ID: </label>

                                <div class="col-sm-9">
                                    <input type="text" id="employeeID" class="col-xs-10 col-sm-5" @change="employeeDetail()" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="name"> Name: </label>

                                <div class="col-sm-9">
                                    <input type="text" id="name" class="col-xs-10 col-sm-5" readonly/>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="email"> Email: </label>

                                <div class="col-sm-9">
                                    <input type="text" id="email" class="col-xs-10 col-sm-5"  readonly/>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="positionTitle"> Position Title: </label>

                                <div class="col-sm-9">
                                    <input type="text" id="positionTitle" class="col-xs-10 col-sm-5" readonly/>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="organizationUnit"> Organiation Unit: </label>

                                <div class="col-sm-9">
                                    <input type="text" id="organizationUnit" class="col-xs-10 col-sm-5" readonly/>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="role"> Role: </label>

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
                                <label class="col-sm-2 control-label no-padding-right" for="role"> Status: </label>

                               <label for="male" class="col-md-1">
                                    <input type="radio" id="male" name="status" checked> Active
                                </label>
                                <label for="female">
                                    <input type="radio" id="female" name="status"> Inactive
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

<script>
export default {
     data(){
         return{

         }
    },
    methods:{
        employeeDetail: function(){
            $('#name').val('Ugyen Rinzin');
                        $('#email').val('Ugyen@gmail.com');
            $('#organizationUnit').val('Yangchenphug HSS');
            $('#positionTitle').val('Teacher');

        }

    },
    mounted (){
        
    }
}
</script>