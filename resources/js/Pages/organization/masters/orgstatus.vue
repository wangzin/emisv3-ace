<template>
    <div> 
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ul class="breadcrumb">
                <li>
                    <i class="ace-icon fa fa-home home-icon"></i>
                    <a href="#">Home</a>
                </li>
                <li class="active">Master Management</li>
				<li class="active">Organization Status</li>
            </ul>
            <div class="pull-right">
               <button class="btn btn-success btn-sm" type="button" @click="showmodal()"><span class="fa fa-plus"> Add New Status</span></button>
            </div>
        </div>
        <div class="page-content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="clearfix">
                        <div class="pull-right tableTools-container"></div>
                    </div> 
                    <div class="table-header">
                        Existing Organization Status
                    </div>
					<table id="dynamic-table" class="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th >No.</th>
                                <th >Status Name</th>
                                <th >Status</th>
                                <th >Last Action Date</th>
                                <th >Action</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="record1">
                                <td>1</td>
                                <td>Open</td>
                                <td><span class="label label-success label-sm">Active</span></td>
                                <td>2019-10-12</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>
                            <tr id="record2">
                                <td class="">2</td>
                                <td class="">Close</td>
                                <td class=""><span class="label label-danger label-sm">In Active</span></td>
                                <td class="">2019-10-12</td>
                                <td class="">
                                    <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('2')"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>
							<tr id="record3"> 
                                <td class="">3</td>
                                <td class="">Bifurcated</td>
                                <td class=""><span class="label label-success label-sm">Active</span></td>
                                <td class="">2019-10-12</td>
                                <td class="">
                                    <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('3')"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>
							<tr id="record4">
                                <td class="">4</td>
                                <td class="">Merge</td>
                                <td class=""><span class="label label-success label-sm">Active</span></td>
                                <td class="">2019-10-12</td>
                                <td class="">
                                    <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('4')"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
		<div class="modal fade" id="samplemodal" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="bootbox-close-button close" data-dismiss="modal" aria-hidden="true">×</button>
						<h4 class="modal-title">Adding New Organization Status</h4>
					</div>
					<div class="modal-body">
						<div class="bootbox-body">
							<form class="bootbox-form">
								<div class="row">
									<div class="col-xs-12">
										<label>Status Name</label> 
										<input class="bootbox-input bootbox-input-text form-control" autocomplete="off" id="newlevelname" type="text">
									</div>
								</div>
							</form>
						</div>
					</div>
					<div class="modal-footer">
						<button data-bb-handler="cancel" type="button" data-dismiss="modal" class="btn btn-default">Cancel</button>
						<button data-bb-handler="confirm" @click="addrecords()" type="button" class="btn btn-primary">OK</button>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade" id="deletemodal" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="bootbox-close-button close" data-dismiss="modal" aria-hidden="true">×</button>
						<h4 class="modal-title">Deleting Organization Status</h4>
					</div>
					<div class="modal-body">
						<div class="bootbox-body">
							<form class="bootbox-form">
								<div class="row">
									<div class="col-xs-12 alert alert-danger">
										<span class="">Are you sure you wish to delete the selected Status?</span>
										<input type="hidden" id="deleterecordid"/>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div class="modal-footer">
						<button data-bb-handler="cancel" type="button" data-dismiss="modal" class="btn btn-default">No</button>
						<button data-bb-handler="confirm" @click="deleterecords()" type="button" class="btn btn-primary">Yes</button>
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
			count:4,
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

