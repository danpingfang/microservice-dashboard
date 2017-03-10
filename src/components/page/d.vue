<template>
<div class="table">
    <div class="current-page">
      <h3 class="project"><i class="icon icon-logout"></i> 表格管理</h3>
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
                    <tr v-for="item in table">
                        <td>{{item.num}}</td>
                        <td>{{item.domainName}}</td>
                        <td>{{item.totalStatus}}</td>
                        <td>{{item.appName}}</td>
                        <td>{{item.runTime}}</td>
                        <td>{{item.caseNum}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery';
    export default {
        data() {
            return {
                keywords : '',
                matching : true,
                table : [
                   {  
                      num : '1',  
                      domainName : 'node-dev.example',  
                      totalStatus : 'ok',
                      appName : 'xxxxx-xxxx',
                      runTime : '3s',
                      caseNum : '3'
                    },
                    {
                      num : '2',  
                      domainName : '3333',  
                      totalStatus : 'ok',
                      appName : 'xxxxx-xxxx',
                      runTime : '5s',
                      caseNum : '5'
                    },
                    {
                      num : '3',  
                      domainName : '444',  
                      totalStatus : 'failed',
                      appName : 'xxxxx-xxxx',
                      runTime : '5s',
                      caseNum : '5'
                    }
                ]
            }
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
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.$message('编辑第'+(index+1)+'行');
            },
            handleDelete(index, row) {
                this.$message.error('删除第'+(index+1)+'行');
            }
        }
    }
</script>

<style>
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
</style>