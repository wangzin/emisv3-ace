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
               <button class="btn-success"> Add New Organiation</button>
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
			tablestr="<tr id='record"+this.count+"'><td>"+this.count+"</td><td>"+$('#dzongkahgid').val()+"</td><td>"+$('#newlevelname').val()+"</td><td><span class='label label-success label-sm'>Active</span></td><td>"+today+"</td><td> <button class='btn btn-primary btn-xs'><i class='fa fa-edit'></i> Edit</button><button class='btn btn-danger btn-xs'><i class='fa fa-trash'></i> Delete</button></td></tr>";
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

