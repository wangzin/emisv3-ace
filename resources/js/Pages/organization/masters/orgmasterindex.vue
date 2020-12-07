<template>
    <div> 
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
										<router-link to="/orgmasterlevel" data-toggle="awesome_tooltip" title="Level">
											<i class="menu-icon fa fa-caret-right"></i>
											<span class="">
												<b>&nbsp;&nbsp;School Level</b>
											</span> 
										</router-link>
									</li>
									<li>
										<router-link to="/orglocationmaster" data-toggle="awesome_tooltip" title="Location">
											<i class="menu-icon fa fa-caret-right"></i>
											<span class="">
												<b>&nbsp;&nbsp;Org Location Type</b>
											</span> 
										</router-link>
									</li>
									<li>
										<router-link to="/orgstatus" data-toggle="awesome_tooltip" title="Status">
											<i class="menu-icon fa fa-caret-right"></i>
											<span class="">
												<b>&nbsp;&nbsp; School/Org Status</b>
											</span> 
										</router-link>
									</li>
									<li>
										<router-link to="/climatetype" data-toggle="awesome_tooltip" title="Organization">
											<i class="menu-icon fa fa-caret-right"></i>
											<span class="">
												<b>&nbsp;&nbsp;  Climate Type</b>
											</span> 
										</router-link>
									</li>
									<li>
										<router-link to="/roadtype" data-toggle="awesome_tooltip" title="Organization">
											<i class="menu-icon fa fa-caret-right"></i>
											<span class="">
												<b>&nbsp;&nbsp; Road Type</b>
											</span> 
										</router-link>
									</li>
								</ul>
							</li>
						</ul>
						<div class="tab-content">
							<router-view></router-view>
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

