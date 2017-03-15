<template>
  <div class="header">
    <div class="admin-login-box">
      <h3>后台管理中心</h3>
    </div>
    <ul class="layui-nav">
      <!-- <li>控制面板</li>
      <li>表格管理</li>  -->
      <a>
      <li class="header-user">
        <img src="../../../static/img/img.jpg" alt="photo"/>
        <span>{{username}}</span>
        <span class="bottom-arrow"></span>
        <dl class="layui-nav-child">
          <dd>
            <a><i class="icon icon-mine"></i> 个人信息</a>
          </dd>
          <dd>
            <a><i class="icon icon-set"></i> 设置</a>
          </dd>
          <dd @click="loginOut()">
            <a><i class="icon icon-logout"></i> 注销</a>
          </dd>
        </dl>
      </li>
      </a>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
          username: 'fangdanping'
      }
    },
    computed:{
      username(){
          let username = localStorage.getItem('ms_username');
          return username ? username : this.name;
      }
    },
    methods:{
      handleCommand(command) {
        if(command == 'loginout'){
            localStorage.removeItem('ms_username')
            this.$router.push('/login');
        }
      },
      loginOut() {
        this.$router.push('/login');
      }
    }
  }
</script>
<style scoped>
h3{
  margin:0;
  padding:0;
}
.header{
  position:relative;
  border-bottom: 5px solid #1AA094;
  background-color:#b5cfd9;
}
.admin-login-box {
  width: 185px;
  height: 60px;
  position: relative;
  border:1px solid transparent;
  margin-left:15px
}
.admin-login-box>h3{
  text-align:left;
  font-size:22px;
  line-height:60px;
}
.header .layui-nav {
  position: absolute;
  right: 15px;
  top: 0;
  padding: 0;
  box-sizing: border-box!important;
}
.layui-nav li{
  display:inline-block;
  padding:0 20px;
  margin: 0 10px;
  line-height: 61px;
  font-size:16px;
  color:#999;
}
.layui-nav li:hover {
  border-bottom:5px solid #354;
  color:#333;
}
.header-user img{
  width:40px;
  height:40px;
  border:none;
  border-radius:100%;
  vertical-align: middle;
}
.bottom-arrow {
  content: '';
  width: 0;
  height: 0;
  border-style: solid dashed dashed;
  border-color: #999 transparent transparent;
  overflow: hidden;
  cursor: pointer;
  transition: all .2s;
  -webkit-transition: all .2s;
  position: absolute;
  top: 30px;
  right: 10px;
  border-width: 6px;
}
.layui-nav-child {
  display:none;
  position: absolute;
  right: 12px;
  width:142px;
  top: 65px;
  line-height: 36px;
  border: 1px solid #d2d2d2;
  background-color: #fff;
  z-index: 100;
  border-radius: 2px;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0,0,0,.12);
}
.layui-nav li:hover .layui-nav-child {
  display:inline-block;
}
.layui-nav li:hover .bottom-arrow {
  border-color: #333 transparent transparent;
  top:25px;
  transform:rotate(180deg);
  -moz-transform:rotate(180deg);
  -webkit-transform:rotate(180deg); 
  -o-transform:rotate(180deg); 
}
.layui-nav-child>dd{
  padding-left:20px;
  font-size:14px;
  color:#999;
  line-height:36px;
}
.layui-nav-child>dd:hover {
  /*background-color:#8fbc8f;*/
  background-color:#d3d3d3;
}
.layui-nav-child>dd i{
  font-size:16px;
  color:#999;  
}
.layui-nav-child a{
  color:#999;
  text-decoration:none;
}
</style>

