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
                       Personal Information
                 </div>
                        <form class="form-horizontal" role="form">
                            <div class="space-4"></div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="name"> Name </label>

                                <div class="col-sm-9">
                                    <input type="text" id="name" placeholder="Name" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="dateOfBirth"> DOB </label>

                                <div class="col-sm-9">
                                    <input type="text" id="dateOfBirth" placeholder="DOB" class="col-xs-10 col-sm-5 date-picker" />
                                   
                                </div>
                            </div>

                             <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="gender"> Gender </label>

                                <label for="male" class="col-md-1">
                                    <input type="radio" id="male" name="gender" value="male" checked> Male
                                </label>
                                <label for="female">
                                    <input type="radio" id="female" name="gender" value="female"> Female
                                </label>
                            </div>

                             <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="gender"> Marital Status </label>

                                <div class="col-sm-9">
                                    <input type="text" id="maritalStatus" placeholder="maritalStatus" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                             <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="nationality"> Nationality </label>

                                <div class="col-sm-9">
                                    <input type="text" id="nationality" placeholder="nationality" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                             <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="cid"> CID </label>

                                <div class="col-sm-9">
                                    <input type="text" id="cid" placeholder="CID" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                             <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="workPermitNo"> Workpermit No. </label>

                                <div class="col-sm-9">
                                    <input type="text" id="workPermitNo" placeholder="workPermitNo" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                             <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="dzongkhag"> Dzongkhag </label>

                                <div class="col-sm-9">
                                    <input type="text" id="dzongkhag" placeholder="dzongkhag" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                             <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="gewog"> Gewog </label>

                                <div class="col-sm-9">
                                    <input type="text" id="gewog" placeholder="gewog" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                             <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="village"> Village </label>

                                <div class="col-sm-9">
                                    <input type="text" id="village" placeholder="village" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                             <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="houseNo"> House No. </label>

                                <div class="col-sm-9">
                                    <input type="text" id="houseNo" placeholder="houseNo" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                             <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="houseNo"> Thram No. </label>

                                <div class="col-sm-9">
                                    <input type="text" id="thramNo" placeholder="thramNo" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="contactNo"> Contact No. </label>

                                <div class="col-sm-9">
                                    <input type="text" id="contactNo" placeholder="contactNo" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="emailAddress"> Email Addresss </label>

                                <div class="col-sm-9">
                                    <input type="text" id="emailAddress" placeholder="emailAddress" class="col-xs-10 col-sm-5" />
                                </div>
                            </div>

                             <div class="form-group">
                                <label class="col-sm-2 control-label no-padding-right" for="remarks"> Remarks </label>

                                <div class="col-sm-9">
                                    <textarea id="remarks" placeholder="remarks" class="col-xs-10 col-sm-5"></textarea>
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

    },
    methods:{

    },
    mounted (){
        
    }
}
</script>