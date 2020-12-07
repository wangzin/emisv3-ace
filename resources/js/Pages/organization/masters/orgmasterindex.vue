<template>
    <div> 
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ul class="breadcrumb">
                <li>
                    <i class="ace-icon fa fa-home home-icon"></i>
                    <a href="#">Home</a>
                </li>
                <li class="active">Master Management</li>
            </ul>
            
        </div>
        <div class="page-content">
            <div class="row">
                <div class="col-xs-12">
					<div class="tabbable">
						<ul class="nav nav-tabs" id="myTab">
							<li class="dropdown">
								<a data-toggle="dropdown" class="dropdown-toggle" href="#" aria-expanded="false">
									<i class="green ace-icon fa fa-database bigger-120"></i>
									Organization Master Management &nbsp;
									<i class="ace-icon fa fa-caret-down bigger-110 width-auto"></i>
								</a>
								<ul class="dropdown-menu dropdown-info">
									<li>
										<a data-toggle="tab" href="#dropdown1">School Level</a>
									</li>
									<li>
										<a data-toggle="tab" href="#dropdown2">Ogganization Location Type</a>
									</li>
									<li>
										<a data-toggle="tab" href="#dropdown2">Ogganization/School Stauts</a>
									</li>
								</ul>
							</li>
						</ul>
						<div class="tab-content">
							<div id="ogrmastermanagement" class="tab-pane fade active in">
								<div class="clearfix">
									<div class="pull-right tableTools-container"></div>
								</div> 
								<div class="table-header">
									Manage all organization masters from here!
								</div>
							</div>
						</div>
					</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Input from '../../../Jetstream/Input.vue';
import Label from '../../../Jetstream/Label.vue';
if('ontouchstart' in document.documentElement) document.write("<script src='assets/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
export default {
    components: {
        Input
    },
    data() {
        return {
			count:5,
        }
    },
    methods: {
        showmodal:function(){
            $('#samplemodal').modal('show');
		},
		addrecords: function(){
			let tablestr="";
			this.count++;
			let today = new Date();
			let dd = String(today.getDate()).padStart(2, '0');
			let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			let yyyy = today.getFullYear();
			today =   yyyy+'-'+mm+'-'+dd;
			tablestr="<tr id='record"+this.count+"'><td>"+this.count+"</td><td>"+$('#newlevelname').val()+"</td><td><span class='label label-success label-sm'>Active</span></td><td>"+today+"</td><td> <button class='btn btn-primary btn-xs'><i class='fa fa-edit'></i> Edit</button><button class='btn btn-danger btn-xs'><i class='fa fa-trash'></i> Delete</button></td></tr>";
			$('#dynamic-table').append(tablestr);
			$('#samplemodal').modal('hide');
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
        jQuery(function($) {
			var myTable = $('#dynamic-table')
			.DataTable( {
				bAutoWidth: false,
				"aoColumns": [
					{ "bSortable": false },
					null, null,null, 
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

