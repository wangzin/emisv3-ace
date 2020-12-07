<template>
    <div>
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ul class="breadcrumb">
                <li>
                    <i class="ace-icon fa fa-home home-icon"></i>
                    <a href="#">Home</a>
                </li>
                <li class="active">Master Management</li>
				<li class="active">Service Type</li>
            </ul>
            <div class="pull-right">
               <button class="btn btn-success btn-sm" type="button" @click="showmodal()"><span class="fa fa-plus"> Add Service Type</span></button>
            </div>
        </div>

        <!-- Service type list-->
        <div class="page-content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="clearfix">
                        <div class="pull-right tableTools-container"></div>
                    </div> 
                    <div class="table-header">
                        Service Type
                    </div>
					<table id="dynamic-table" class="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th >No.</th>
                                <th >Service Type</th>
                                <th >Action</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="record1">
                                <td>1</td>
                                <td>Civil Servant</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>

                            <tr id="record2">
                                <td>2</td>
                                <td>Consolidated Contract</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>

                             <tr id="record3">
                                <td>3</td>
                                <td>Contract ex-pats</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>

                             <tr id="record4">
                                <td>4</td>
                                <td>General Service Personnel</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>

                             <tr id="record5">
                                <td>5</td>
                                <td>Elementary Service Personnel</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>

                            <tr id="record6">
                                <td>6</td>
                                <td>Volunteer</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>

                            <tr id="record6">
                                <td>7</td>
                                <td>Civil servants on secondment with Education</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>

                             <tr id="record6">
                                <td>8</td>
                                <td>NFE-instructors</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>

                            <tr id="record6">
                                <td>9</td>
                                <td>Temporary</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>

                             <tr id="record6">
                                <td>10</td>
                                <td>CBT</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>

                            <tr id="record6">
                                <td>11</td>
                                <td>Regular Contract</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>

                            <tr id="record6">
                                <td>12</td>
                                <td>Earmarked Contract</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>

                            <tr id="record6">
                                <td>13</td>
                                <td>Eccd facilators</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>

                            <tr id="record6">
                                <td>14</td>
                                <td>Private School Teacher</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
									<button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                </td>
                            </tr>                           
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

         <!-- Service type modal-->
        <div class="modal fade" id="serviceTypeModal" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="bootbox-close-button close" data-dismiss="modal" aria-hidden="true">×</button>
						<h4 class="modal-title">Service Type</h4>
					</div>
					<div class="modal-body">
						<div class="bootbox-body">
							<form class="bootbox-form">
								<div class="row">
									<div class="col-xs-12">
										<label>Service Type</label> 
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

        <!-- delete modal -->
        <div class="modal fade" id="deletemodal" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="bootbox-close-button close" data-dismiss="modal" aria-hidden="true">×</button>
						<h4 class="modal-title">Deleting Service Type</h4>
					</div>
					<div class="modal-body">
						<div class="bootbox-body">
							<form class="bootbox-form">
								<div class="row">
									<div class="col-xs-12 alert alert-danger">
										<span class="">Are you sure you wish to delete the Service Type?</span>
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
			// count: 5
        }
    },
    methods: {
        showmodal() {
            $('#serviceTypeModal').modal('show');
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
			var myTable = $('#dynamic-table').DataTable( {
				bAutoWidth: false,
				"aoColumns": [
					{ "bSortable": false },
					null, 
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