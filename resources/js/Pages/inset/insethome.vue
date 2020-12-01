<template>
    <app-layout>
        <div> 
            <div class="breadcrumbs ace-save-state" id="breadcrumbs">
                <ul class="breadcrumb">
                    <li>
                        <i class="ace-icon fa fa-home home-icon"></i>
                        <a href="#">Home</a>
                    </li>
                    <li class="active">INSET</li>
                </ul>
            </div>
            <div class="page-content">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="clearfix">
                            <div class="pull-right tableTools-container"></div>
                        </div> 
                        <div class="table-header">
                            Results for "Latest Registered Domains"
                        </div>
                        <table id="dynamic-table" class="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th >No.</th>
                                    <th >Level</th>
                                    <th >Training/worksho Name</th>
                                    <th >Institute/Vanue</th>
                                    <th >Start Date</th>
                                    <th >End Date</th>
                                    <th >Action</th> 
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="">1</td>
                                    <td class="">Professional Development Program</td>
                                    <td class="">Training Name</td>
                                    <td class="">Training Institution Name</td>
                                    <td class="">2019-10-12</td>
                                    <td class="">2020-10-12</td>
                                    <td class="">
                                        <button @click="showdetails('professional')" class="btn btn-block btn-primary btn-sm"><i class="fa fa-eye"></i> View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="">2</td>
                                    <td class="">Aualification Upgradation</td>
                                    <td class="">Further Study</td>
                                    <td class="">University Name</td>
                                    <td class="">2018-10-12</td>
                                    <td class="">2020-10-12</td>
                                    <td class="">
                                        <button @click="showdetails('qualification')" class="btn btn-block btn-primary btn-sm"><i class="fa fa-eye"></i> View</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    </app-layout>
</template>
<script>
    import AppLayout from '@/Layouts/AppLayout'
    export default {
        components: {
            AppLayout,
        },
        props: ['data', 'errors'],
        data() {
            return {
            }
        },
        methods: {
            showdetails: function(){
               window.location="/trainingdetails";
            },
        },
          
    }
</script>
