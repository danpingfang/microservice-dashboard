<template>
<div class="baseTable">

    <div class="whole-page "></div>
    <div class="current-page">
      <h3 class="project"><i class="icon icon-logout"></i> 微服务</h3>
    </div>
    <div class="card-content">
        <form role="form">
            <input type="text" class="form-control search-text" id="name" placeholder="输入关键词" v-model="keywords">
            <button type="submit" class="btn btn-default button-search" @click="onSearch()">搜索</button>
        </form>
        <div class="table-responsive" >
            <table class="table table-striped table-bordered table-hover" id="dataTables">
                <thead>
                    <tr class="success">
                        <th>序号</th>
                        <th>域名</th>
                        <th>状态</th>
                        <th>服务名</th>
                        <th>运行时间</th>
                        <th>实例个数</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data,index) in List">
                        <td>{{index+1}}</td>
                        <td> 
                          <a data-toggle="modal" :data-target="'#' + index" style="width:100%; display: inline-block; height:100%" >{{data.domain_name}} </a>
                          
                          <!-- Modal -->
                          <div class="modal fade" :id="index" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
                                  <h4>应用运行详情</h4>
                                </div>
                                <div class="table-responsive" >
                                  <table class="table table-striped table-bordered table-hover" id="dataTables">
                                      <thead>
                                          <tr class="success">
                                              <th>Url</th>
                                              <th>Status</th>
                                              <th>Lastmodified</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr v-for="item in data.address">
                                            <td>{{item.url}}</td>
                                            <td>{{item.status}}</td>
                                            <td>{{item.lastmodified}}</td>               
                                          </tr>
                                      </tbody>
                                  </table>
                                </div>  
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{{data.total_status}}</td>
                        <td> 
                           <a data-toggle="modal" :data-target="'#first-' + index" style="width:100%; display: inline-block; height:100%" >{{data.deploy_info.app_name}}</a>

                            <!-- Modal -->
                          <div class="modal fade" :id="'first-'+index" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
                                  <h4>应用发布详情</h4>
                                </div>
                                <div class="table-responsive" >
                                  <table class="table table-striped table-bordered table-hover" id="dataTables">
                                      <thead>
                                          <tr class="success">
                                              <th>DeployUser</th>
                                              <th>ImageName</th>
                                              <th>AppEnv</th>
                                              <th>GitUrl</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                            <td>{{data.deploy_info.deploy_user}}</td>
                                            <td>{{data.deploy_info.image_name}}</td>
                                            <td>{{data.deploy_info.app_env}}</td>
                                            <td>{{data.deploy_info.git_url}}</td>               
                                          </tr>
                                      </tbody>
                                  </table>
                                </div>  
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{{data.deploy_info.deploy_time}}</td>
                        <td>{{data.address.length}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.js';
    export default {
        data() {
            return {
                keywords : '',
                List : []
               
            }
        },
        created: function(){
           this.getData()
        },
        methods: {
            onSearch() {
              var keywords = this.keywords;
              var dataTables = document.getElementById("dataTables");
              for(var i=0;i<dataTables.tBodies[0].rows.length;i++){
                  var str1=dataTables.tBodies[0].rows[i].cells[1].innerHTML.toUpperCase();
                  var str2=dataTables.tBodies[0].rows[i].cells[2].innerHTML.toUpperCase();
                  var str3=dataTables.tBodies[0].rows[i].cells[3].innerHTML.toUpperCase();
                  var str4=dataTables.tBodies[0].rows[i].cells[4].innerHTML.toUpperCase();
                  var str5=dataTables.tBodies[0].rows[i].cells[5].innerHTML.toUpperCase();
                  var str=keywords.toUpperCase();
                  if(str1.search(str)==-1 && str2.search(str)==-1 && str3.search(str)==-1 && str4.search(str)==-1 && str5.search(str)==-1){
                       dataTables.tBodies[0].rows[i].style.display='none';
                  }
              }
            },
            getData() {
              $.ajax({
                type:"get",
                url: `http://gateway.zs/services`,
                dataType: 'json'
              }).done((response) => {
                this.List = this.List.concat(response);
                // console.log(this.List[2].deploy_info.deploy_time)
                for(var i=0; i<this.List.length; i++){
                  if(this.List[i].deploy_info !=''){
                     console.log(this.List[i].deploy_info.deploy_time)
                    var dateOnce = this.List[i].deploy_info.deploy_time;
                    var dateNow = new Date();    //结束时间
                    var time = dateNow.getTime() - new Date(dateOnce).getTime();   //时间差的毫秒数
                    var days=Math.floor(time/(24*3600*1000));
                    var leave1=time%(24*3600*1000);
                    var hours=Math.floor(leave1/(3600*1000));
                    var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
                    var minutes=Math.floor(leave2/(60*1000)) ;
                    var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
                    var seconds=Math.round(leave3/1000);
                    this.List[i].deploy_info.deploy_time = days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒";
                  }
                }
              });
            }         
        }
    }
</script>

<style>
  .page-opacity{
    position:fixed;
    width:100%;
    height: 100%;
    background-color:rgba(0,0,0,0.5);
    z-index: 1000;
  }
  h3{
    margin: 0;
    padding:0;
  }
  .card-content{
    padding:4px;
  }
  .current-page{
    border-bottom:1px solid #1AA094;
  }
  .project{
    padding-left:15px;
    line-height:40px;
    text-align:left;
    background-color:#b5cfd9;
    width:120px;
    font-size:18px;
  }
  .project>i{
    color:#333;
  }
  th,td{
    text-align: center;
  }
  .card-content .search-text{
    width:240px;
    height: 36px;
    display: inline-block;
    margin-right: 10px;
  }
  .table-responsive{
    margin-top: 10px;
  }

  .domain-list{
    display: none;
    position: absolute;
    width: 100%;
    max-height: 100%;
    top:0;
    padding:20%;
    z-index: 10000;
  }
  .app-list{
    display: none;
    position: absolute;
    width: 100%;
    max-height: 100%;
    top:0;
    padding:20%;
    z-index: 10000;
  }
  .modal-header{
    border-bottom: 0;
  }

</style>