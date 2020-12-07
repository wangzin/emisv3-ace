<template>
     <div>
         <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ul class="breadcrumb">
                <li>
                    <i class="ace-icon fa fa-home home-icon"></i>
                    <a href="#">Home</a>
                </li>
                <li class="active">Administration</li>
				<li class="active">User Management</li>
                <li class="active">Add Internal Users</li>
            </ul>
        </div>
        <div class="page-content">
           <div class="row">
              <div class="col-xs-12">
                  <div class="clearfix">
                        <div class="pull-right tableTools-container"></div>
                  </div> 
                  <div class="table-header">
                       Adding New Staff/Internal User
                 </div>
                <form class="form-horizontal" role="form">
                    <br>
                    <div class="row form-group">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <label> Employee ID: </label>
                            <input type="text" id="employeeID" class="width-40" @change="employeeDetail()" />
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <label> Name: </label>
                            <input type="text" id="name" class="width-100" readonly/>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <label> Email: </label>
                            <input type="text" id="email" class="width-100"  readonly/>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <label> Position Title: </label>
                            <input type="text" id="positionTitle" class="width-100" readonly/>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <label> Organiation Unit: </label>
                            <input type="text" id="organizationUnit" class="width-100"  readonly/>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <label> Role: </label>
                            <select name="role" id="roles" class="width-100">
                                <option value="">--- Please Select ---</option>
                                <option value="admin">Admin</option>
                                <option value="teacher">Teacher</option>
                                <option value="deo">DEO</option>
                                <option value="director">Director</option>
                            </select>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <label> Status: </label>
                            <div>
                                <label class="line-height-1 blue">
                                    <input name="schoolcategory" value="Active" type="radio" class="ace" />
                                    <span class="lbl">Active</span>
                                </label>
                                &nbsp;&nbsp;&nbsp;
                                <label class="line-height-1 blue">
                                    <input name="schoolcategory" value="Inactive" type="radio" class="ace" />
                                    <span class="lbl"> Inactive</span>
                                </label>
                            </div>
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