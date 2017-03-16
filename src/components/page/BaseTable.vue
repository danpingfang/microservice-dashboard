<template>
  <div class="baseTable">
    <div class="whole-page "></div>
    <div class="current-page">
      <h3 class="project"><i class="glyphicon glyphicon-map-marker"></i> 微服务</h3>
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
          <tr v-for="(data,index) in List" v-if="index < end && index >= start" >
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
            <td :class="data.total_status === 'error' ? 'returnRed' : ''">{{data.total_status}}</td>
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
            <td>{{formatTime((timeNow - data.deploy_info.deploy_time))}}</td>
            <td>{{data.address.length}}</td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <td colspan="6">
              <div class="pull-right">
                <nav class="boot-nav">
                  <ul class="pagination boot-page">
                    <li>
                      <a href="javascript:void(0)" aria-label="Previous" @click="onFirstClick()">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" aria-label="Next" @click="onPrevClick()">
                        <span aria-hidden="true">‹</span>
                      </a>
                    </li>
                    <li v-for="(n, index) in pageTotal" :class="activeNum === index ? 'active' : ''">
                      <a href="javascript:void(0)" @click="onPageClick(index)">{{n}}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" aria-label="Next" @click="onNextClick()">
                        <span aria-hidden="true">›</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" aria-label="Next" @click="onLastClick()">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                  <div class="page-total">
                    共 <span v-text="pageTotal"></span> 页
                  </div>
                </nav>
                <!--<span class="rows"> 显示行数</span>-->
                <!--<input class="form-control boot-select" v-model="len" type="text" @input="onChangeLen(len)"/>-->
                <select class="form-control boot-select" v-model="len" @change="onChangeLen(len)">
                  <option v-for="(arr,index) in lens" :value="arr">{{arr}}</option>
                </select>
              </div>
            </td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">点我弹出/隐藏弹出框</button>
    <a tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">可消失的弹出框</a>
  </div>
</template>

<script>
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.js';
  export default {
    data() {
      return {
        keywords : '',
        len : 10,                 // 每页显示个数
        lens : [10, 20, 30],     // 显示个数数组
        pageTotal : '',            // 总页数
        pages : [],              // 页码
        activeNum : 0,           // 页码数组下标
        sourceList : [],
        List : [],
        timeNow: new Date().getTime(),
        interval: null
      }
    },
    computed: {
      end(){
        return this.start + this.len;
      },
      start(){
        return (this.activeNum) * this.len;
      }
    },
    created: function(){
      this.getData();
      this.interval = setInterval(()=>{
        this.timeNow = new Date().getTime();
      }, 1000)
    },
    beforeDestroy: function(){
      this.interval && clearInterval(this.interval)
    },
    methods: {
      onChangeLen: function(len){
        this.pageTotal = Math.ceil(this.List.length / this.len);
        this.start = 0;
        this.activeNum = 0;
      },
      onSearch() {
        this.List = this.sourceList.filter(item => {
          return ~JSON.stringify(item).toUpperCase().indexOf(this.keywords.toUpperCase());
        });
        this.pageTotal = Math.ceil(this.List.length / this.len);
      },
      getData() {
        $.ajax({
          type:"get",
          url: `http://gateway.zs/services`,
          dataType: 'json'
        }).done((response) => {
          for(var i=0; i<response.length; i++){
            response[i].jsonString = JSON.stringify(response[i]).toUpperCase();
            if(!response[i].deploy_info.deploy_time) continue;
            response[i].deploy_info.deploy_time = new Date(response[i].deploy_info.deploy_time).getTime();
          }
          this.List = response;
          this.sourceList = response;
          this.pageTotal = Math.ceil(this.List.length / this.len);
        });
      },
      formatTime(time) {
        if(!time || Number.isNaN(time)) {
          return '';
        }
        var days=Math.floor(time/(24*3600*1000));
        var leave1=time%(24*3600*1000);
        var hours=Math.floor(leave1/(3600*1000));
        var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
        var minutes=Math.floor(leave2/(60*1000)) ;
        var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
        var seconds=Math.round(leave3/1000);
        return days+"天 "+hours+"小时 "+minutes+"分钟 "+seconds+"秒 ";
      },
      // 点击页码刷新数据
      onPageClick (index) {
        this.activeNum = index;
        console.log(this.activeNum);
      },
      // 上一页
      onPrevClick () {
        // 当前页是否为当前最小页码
        if (this.activeNum > 0) {
          this.activeNum = this.activeNum - 1
        } else {
          alert("当前已经是首页");
        }
      },
      // 下一页
      onNextClick () {
        // 当前页是否为当前最大页码
        if (this.activeNum < this.pageTotal - 1) {
          this.activeNum = this.activeNum + 1
        } else {
          alert("当前已经是最后页");
        }
      },
      // 第一页
      onFirstClick () {
        this.activeNum = 0
      },
      // 最后一页
      onLastClick () {
        this.activeNum = this.pageTotal-1;
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
  .boot-select {
    float: right;
    width: 80px;
  }

  .boot-nav {
    float: right;
  }

  .boot-page {
    display: inline-block;
    margin: 2px 10px 0 20px;
    vertical-align: middle;
  }

  .page-total {
    display: inline-block;
    vertical-align: middle;
  }
  .rows{
    line-height:34px;
    padding-right:10px;
  }
  .returnRed{
    color:red;
  }
  a{
    cursor:pointer;
  }
</style>