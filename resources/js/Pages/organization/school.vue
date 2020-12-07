<template>
    <div> 
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ul class="breadcrumb">
                <li>
                    <i class="ace-icon fa fa-home home-icon"></i>
                    <a href="#">Home</a>
                </li>
                <li class="active">Organization Details</li>
            </ul>
            <div class="nav-search">
               <button class="btn-success" @click="showmodal()"> Add New Organiation</button>
            </div>
        </div>
        <div class="page-content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="clearfix">
                        <div class="pull-right tableTools-container"></div>
                    </div> 
                    <div class="table-header">
                        Results for Existing School
                    </div>
                    <table id="dynamic-table" class="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th >Sl No.</th>
                                <th >Dzongkhag</th>
                                <th >Gewog</th>
                                <th >School Name</th>
                                <th >Category</th>
                                <th >School Code</th>
                                <th >School Status</th>
                                <th >Contact</th>
                                <th >Action</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="">1</td>
                                <td class="">Bumthang</td>
                                <td class="">Chokhor</td>
                                <td class="">Jakar HSS</td>
                                <td class="">Public Schools</td>
                                <td class="">028.201.00001</td>
                                <td class="">Opened</td>
                                <td class="">631115</td>
                                <td class="">
                                    <button @click="showdetails('professional')" class="btn btn-primary btn-xs">
                                        <i class="fa fa-eye"></i> View Details
                                    </button>
                                    <button @click="showdetails('edit')" class="btn btn-success btn-xs">
                                        <i class="fa fa-edit"></i> Edit Details
                                    </button>
                                    <button @click="showdetails('edit')" class="btn btn-info btn-xs">
                                        <i class="fa fa-edit"></i> Update Status
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="">2</td>
                                <td class="">Chhukha</td>
                                <td class="">Bjachho</td>
                                <td class="">Chukha Central School HSS</td>
                                <td class="">Public Schools</td>
                                <td class="">028.201.00019</td>
                                <td class="">Opened</td>
                                <td class="">08478413</td>
                                <td class="">
                                    <button @click="showdetails('professional')" class="btn btn-primary btn-xs">
                                        <i class="fa fa-eye"></i> View Details
                                    </button>
                                    <button @click="showdetails('edit')" class="btn btn-success btn-xs">
                                        <i class="fa fa-edit"></i> Edit Details
                                    </button>
                                    <button @click="showdetails('edit')" class="btn btn-info btn-xs">
                                        <i class="fa fa-edit"></i> Update Status
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="">3</td>
                                <td class="">Bumthang</td>
                                <td class="">Chokhor</td>
                                <td class="">Jakar HSS</td>
                                <td class="">Public Schools</td>
                                <td class="">028.201.00001</td>
                                <td class="">Opened</td>
                                <td class="">631115</td>
                                <td class="">
                                    <button @click="showdetails('professional')" class="btn btn-primary btn-xs">
                                        <i class="fa fa-eye"></i> View Details
                                    </button>
                                    <button @click="showdetails('edit')" class="btn btn-success btn-xs">
                                        <i class="fa fa-edit"></i> Edit Details
                                    </button>
                                    <button @click="showdetails('edit')" class="btn btn-info btn-xs">
                                        <i class="fa fa-edit"></i> Update Status
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal fade" id="addmodal" tabindex="-1" role="dialog">
			<div class="modal-dialog width-auto">
				<div class="modal-content">
					<div class="modal-body">
						<div class="bootbox-body">
							<form class="bootbox-form">
								<div class="row">
                                    <div class="col-xs-12">
                                        <div class="widget-box">
                                            <div class="widget-header widget-header-blue widget-header-flat">
                                                <button type="button" class="bootbox-close-button close" data-dismiss="modal" aria-hidden="true">×</button>
                                                <h4 class="widget-title lighter">Adding New Organization</h4>
                                            </div>
                                            <div class="widget-body">
                                                <div class="widget-main">
                                                    <div id="fuelux-wizard-container">
                                                        <div>
                                                            <ul class="steps">
                                                                <li data-step="1" class="active">
                                                                    <span class="step">1</span>
                                                                    <span class="title">Basic Details</span>
                                                                </li>
                                                                <li data-step="2">
                                                                    <span class="step">2</span>
                                                                    <span class="title">Structure</span>
                                                                </li>
                                                                <li data-step="3">
                                                                    <span class="step">3</span>
                                                                    <span class="title">Equipment</span>
                                                                </li>
                                                                <li data-step="4">
                                                                    <span class="step">4</span>
                                                                    <span class="title">Facility</span>
                                                                </li>
                                                                <li data-step="5">
                                                                    <span class="step">5</span>
                                                                    <span class="title">Class Composition</span>
                                                                </li>
                                                                <li data-step="6">
                                                                    <span class="step">6</span>
                                                                    <span class="title">Wash Facilities</span>
                                                                </li>
                                                                <li data-step="7">
                                                                    <span class="step">7</span>
                                                                    <span class="title">Accessibility</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <hr />
                                                        <div class="step-content pos-rel">
                                                            <div class="step-pane active" data-step="1">
                                                                <form class="form-horizontal" id="sample-form">
                                                                    <div class="row form-group has-info">
                                                                        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                                                            <label>School Category</label>
                                                                            <div>
                                                                                <label class="line-height-1 blue">
                                                                                    <input name="schoolcategory" value="Private" type="radio" class="ace" />
                                                                                    <span class="lbl"> Private Schools</span>
                                                                                </label>
                                                                                &nbsp;&nbsp;&nbsp;
                                                                                <label class="line-height-1 blue">
                                                                                    <input name="schoolcategory" value="Public" type="radio" class="ace" />
                                                                                    <span class="lbl"> Public Schools</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                                                            <label>School Code (13 letters, like 028.201.00001, defined by MoE)</label>
                                                                             <input type="text" id="schoolcode" name="schoolcode" class="width-100" />
                                                                        </div>
                                                                        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                                                            <label>School Name (please do not mention level)</label>
                                                                            <input type="text" id="schoolname" name="schoolname" class="width-100" />
                                                                        </div>
                                                                    </div>
                                                                    <br>
                                                                    <div class="row form-group has-info">
                                                                        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                                                            <label>School Level</label>
                                                                            <select name="schoollevel" id="schoollevel" class="width-100">
                                                                                <option value=""> Select </option>
                                                                                <option value="1" label="Community Primary School [01]">Community Primary School [01]</option>
                                                                                <option value="2" label="Primary School [02]">Primary School [02]</option>
                                                                                <option value="3" label="Lower Secondary School [03]">Lower Secondary School [03]</option>
                                                                                <option value="4" label="Middle Secondary School [04]">Middle Secondary School [04]</option>
                                                                                <option value="5" label="Higher Secondary School [05]">Higher Secondary School [05]</option>
                                                                                <option value="7" label="Special Institute [06]">Special Institute [06]</option>
                                                                                <option value="8" label="Extended Classroom [07]">Extended Classroom [07]</option>
                                                                                <option value="9" label="Early Childhood Care &amp; Development [09]">Early Childhood Care &amp; Development [09]</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                                                            <label>School Location</label>
                                                                            <span class="block input-icon input-icon-right">
                                                                               <select name="MastersLocationID" id="MastersLocationID" class="width-100">
                                                                                    <option value="" label="- Please Select -">- Please Select -</option>
                                                                                    <option value="1" label="Urban Grade 1 [01]">Urban Grade 1 [01]</option>
                                                                                    <option value="2" label="Urban Grade 2 [02]">Urban Grade 2 [02]</option>
                                                                                    <option value="3" label="Semi-Urban [03]">Semi-Urban [03]</option>
                                                                                    <option value="4" label="Semi-Remote [04]">Semi-Remote [04]</option>
                                                                                    <option value="5" label="Remote [05]">Remote [05]</option>
                                                                                    <option value="6" label="Very-Remote [06]">Very-Remote [06]</option>
                                                                                    <option value="7" label="Difficult [07]">Difficult [07]</option>
                                                                                    <option value="9" label="Rural [08]">Rural [08]</option>
                                                                                    <option value="10" label="Semi-Rural [09]">Semi-Rural [09]</option>
                                                                                    <option value="11" label="Urban [10]">Urban [10]</option>
                                                                                    <option value="8" label="Unknown [99]">Unknown [99]</option>
                                                                                </select>
                                                                            </span>
                                                                        </div>
                                                                        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                                                            <label>School Status</label>
                                                                            <span class="block input-icon input-icon-right">
                                                                                <select name="MastersOrgStatusID" id="MastersOrgStatusID" class="width-100 select2">
                                                                                    <option value="" label="- Please Select -">- Please Select -</option>
                                                                                    <option value="1" label="Opened [1]">Opened [1]</option>
                                                                                    <option value="2" label="Closed [2]">Closed [2]</option>
                                                                                    <option value="3" label="Bifurcated [3]">Bifurcated [3]</option>
                                                                                    <option value="4" label="Merged [4]">Merged [4]</option>
                                                                                </select>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </form>

                                                                <form class="form-horizontal hide" id="validation-form" method="get">
                                                                    <div class="form-group">
                                                                        <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="email">Email Address:</label>

                                                                        <div class="col-xs-12 col-sm-9">
                                                                            <div class="clearfix">
                                                                                <input type="email" name="email" id="email" class="col-xs-12 col-sm-6" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="space-2"></div>

                                                                    <div class="form-group">
                                                                        <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="password">Password:</label>

                                                                        <div class="col-xs-12 col-sm-9">
                                                                            <div class="clearfix">
                                                                                <input type="password" name="password" id="password" class="col-xs-12 col-sm-4" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="space-2"></div>

                                                                    <div class="form-group">
                                                                        <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="password2">Confirm Password:</label>

                                                                        <div class="col-xs-12 col-sm-9">
                                                                            <div class="clearfix">
                                                                                <input type="password" name="password2" id="password2" class="col-xs-12 col-sm-4" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="hr hr-dotted"></div>

                                                                    <div class="form-group">
                                                                        <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="name">Company Name:</label>

                                                                        <div class="col-xs-12 col-sm-9">
                                                                            <div class="clearfix">
                                                                                <input type="text" id="name" name="name" class="col-xs-12 col-sm-5" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="space-2"></div>

                                                                    <div class="form-group">
                                                                        <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="phone">Phone Number:</label>

                                                                        <div class="col-xs-12 col-sm-9">
                                                                            <div class="input-group">
                                                                                <span class="input-group-addon">
                                                                                    <i class="ace-icon fa fa-phone"></i>
                                                                                </span>

                                                                                <input type="tel" id="phone" name="phone" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="space-2"></div>

                                                                    <div class="form-group">
                                                                        <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="url">Company URL:</label>

                                                                        <div class="col-xs-12 col-sm-9">
                                                                            <div class="clearfix">
                                                                                <input type="url" id="url" name="url" class="col-xs-12 col-sm-8" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="hr hr-dotted"></div>

                                                                    <div class="form-group">
                                                                        <label class="control-label col-xs-12 col-sm-3 no-padding-right">Subscribe to</label>

                                                                        <div class="col-xs-12 col-sm-9">
                                                                            <div>
                                                                                <label>
                                                                                    <input name="subscription" value="1" type="checkbox" class="ace" />
                                                                                    <span class="lbl"> Latest news and announcements</span>
                                                                                </label>
                                                                            </div>

                                                                            <div>
                                                                                <label>
                                                                                    <input name="subscription" value="2" type="checkbox" class="ace" />
                                                                                    <span class="lbl"> Product offers and discounts</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="space-2"></div>

                                                                    <div class="form-group">
                                                                        <label class="control-label col-xs-12 col-sm-3 no-padding-right">Gender</label>

                                                                        <div class="col-xs-12 col-sm-9">
                                                                            <div>
                                                                                <label class="line-height-1 blue">
                                                                                    <input name="gender" value="1" type="radio" class="ace" />
                                                                                    <span class="lbl"> Male</span>
                                                                                </label>
                                                                            </div>

                                                                            <div>
                                                                                <label class="line-height-1 blue">
                                                                                    <input name="gender" value="2" type="radio" class="ace" />
                                                                                    <span class="lbl"> Female</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="hr hr-dotted"></div>

                                                                    <div class="form-group">
                                                                        <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="state">State</label>

                                                                        <div class="col-xs-12 col-sm-9">
                                                                            <select id="state" name="state" class="select2" data-placeholder="Click to Choose...">
                                                                                <option value="">&nbsp;</option>
                                                                                <option value="AL">Alabama</option>
                                                                                <option value="AK">Alaska</option>
                                                                                <option value="AZ">Arizona</option>
                                                                                <option value="AR">Arkansas</option>
                                                                                <option value="CA">California</option>
                                                                                <option value="CO">Colorado</option>
                                                                                <option value="CT">Connecticut</option>
                                                                                <option value="DE">Delaware</option>
                                                                                <option value="FL">Florida</option>
                                                                                <option value="GA">Georgia</option>
                                                                                <option value="HI">Hawaii</option>
                                                                                <option value="ID">Idaho</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="space-2"></div>
                                                                    <div class="form-group">
                                                                        <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="platform">Platform</label>
                                                                        <div class="col-xs-12 col-sm-9">
                                                                            <div class="clearfix">
                                                                                <select class="input-medium" id="platform" name="platform">
                                                                                    <option value="">------------------</option>
                                                                                    <option value="linux">Linux</option>
                                                                                    <option value="windows">Windows</option>
                                                                                    <option value="mac">Mac OS</option>
                                                                                    <option value="ios">iOS</option>
                                                                                    <option value="android">Android</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="space-2"></div>
                                                                    <div class="form-group">
                                                                        <label class="control-label col-xs-12 col-sm-3 no-padding-right" for="comment">Comment</label>
                                                                        <div class="col-xs-12 col-sm-9">
                                                                            <div class="clearfix">
                                                                                <textarea class="input-xlarge" name="comment" id="comment"></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="space-8"></div>
                                                                    <div class="form-group">
                                                                        <div class="col-xs-12 col-sm-4 col-sm-offset-3">
                                                                            <label>
                                                                                <input name="agree" id="agree" type="checkbox" class="ace" />
                                                                                <span class="lbl"> I accept the policy</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>

                                                            <div class="step-pane" data-step="2">
                                                                <div>
                                                                    <div class="alert alert-success">
                                                                        <button type="button" class="close" data-dismiss="alert">
                                                                            <i class="ace-icon fa fa-times"></i>
                                                                        </button>

                                                                        <strong>
                                                                            <i class="ace-icon fa fa-check"></i>
                                                                            Well done!
                                                                        </strong>

                                                                        You successfully read this important alert message.
                                                                        <br />
                                                                    </div>

                                                                    <div class="alert alert-danger">
                                                                        <button type="button" class="close" data-dismiss="alert">
                                                                            <i class="ace-icon fa fa-times"></i>
                                                                        </button>

                                                                        <strong>
                                                                            <i class="ace-icon fa fa-times"></i>
                                                                            Oh snap!
                                                                        </strong>

                                                                        Change a few things up and try submitting again.
                                                                        <br />
                                                                    </div>

                                                                    <div class="alert alert-warning">
                                                                        <button type="button" class="close" data-dismiss="alert">
                                                                            <i class="ace-icon fa fa-times"></i>
                                                                        </button>
                                                                        <strong>Warning!</strong>

                                                                        Best check yo self, you're not looking too good.
                                                                        <br />
                                                                    </div>

                                                                    <div class="alert alert-info">
                                                                        <button type="button" class="close" data-dismiss="alert">
                                                                            <i class="ace-icon fa fa-times"></i>
                                                                        </button>
                                                                        <strong>Heads up!</strong>

                                                                        This alert needs your attention, but it's not super important.
                                                                        <br />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="step-pane" data-step="3">
                                                                <div class="center">
                                                                    <h3 class="blue lighter">This is step 3</h3>
                                                                </div>
                                                            </div>

                                                            <div class="step-pane" data-step="4">
                                                                <div class="center">
                                                                    <h3 class="green">Congrats!</h3>
                                                                    Your product is ready to ship! Click finish to continue!
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <hr />
                                                    <div class="wizard-actions">
                                                        <button class="btn btn-prev">
                                                            <i class="ace-icon fa fa-arrow-left"></i>
                                                            Prev
                                                        </button>

                                                        <button class="btn btn-success btn-next" data-last="Finish">
                                                            Next
                                                            <i class="ace-icon fa fa-arrow-right icon-on-right"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
import Input from '../../Jetstream/Input.vue';
export default {
    components: {
        Input
    },
    data() {
        return {
			count:10,
        }
    },
    methods: {
        showmodal:function(){
            $('#addmodal').modal('show');
		},
		addrecords: function(){
			let tablestr="";
			this.count++;
			let today = new Date();
			let dd = String(today.getDate()).padStart(2, '0');
			let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			let yyyy = today.getFullYear();
			today =   yyyy+'-'+mm+'-'+dd;
			tablestr="<tr id='record"+this.count+"'><td>"+this.count+"</td><td>"+$('#dzongkahgid').val()+"</td><td>"+$('#newlevelname').val()+"</td><td><span class='label label-success label-sm'>Active</span></td><td>"+today+"</td><td> <button class='btn btn-primary btn-xs'><i class='fa fa-edit'></i> Edit</button><button class='btn btn-danger btn-xs'><i class='fa fa-trash'></i> Delete</button></td></tr>";
			$('#dynamic-table').append(tablestr);
			$('#addmodal').modal('hide');
		}, 
		showdelete: function(id){
			$('#deleterecordid').val(id);
			$('#deletemodal').modal('show');
		},
		deleterecords(){
			$('#record'+$('#deleterecordid').val()).remove();
			$('#deletemodal').modal('hide');
		},
    },
    mounted() {
        $('[data-rel=tooltip]').tooltip();
        jQuery(function($) {
			var myTable = $('#dynamic-table')
			.DataTable( {
				bAutoWidth: false,
				"aoColumns": [
					{ "bSortable": false },
					null, null,null, null,null, null,null,
					{ "bSortable": false }
				],
				"aaSorting": [], 
				select: {
					style: 'multi'
				}
			} );
		} );	
    },
    
}
</script>

