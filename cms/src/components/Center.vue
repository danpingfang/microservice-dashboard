<template>
  <div class="center">
    <div class="header">
      <div class="admin-login-box">
        <h3>后台管理中心</h3>
      </div>
      <ul class="layui-nav">
        <router-link to="/Center/a" >
          <li>控制面板</li>
        </router-link>
        <router-link to="/Center/b" >
          <li>表格管理</li>
        </router-link>
        <li class="header-user">
          <img src="../assets/user-photo.jpg" alt="photo"/>
          <span>beginner</span>
          <span class="bottom-arrow"></span>
          <dl class="layui-nav-child">
            <dd>
              <i class="icon icon-mine"></i> 个人信息
            </dd>
            <dd>
              <i class="icon icon-set"></i> 设置
            </dd>
            <dd>
              <i class="icon icon-logout"></i> 注销  
            </dd>
          </dl>
        </li>      
      </ul>
    </div> 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedProject: '控制面板'
    }
  }
}
</script>

<style>
h3{
  margin:0;
  padding:0;
}
.header{
  position:relative;
  border-bottom: 5px solid #1AA094;
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
  border-color: #c2c2c2 transparent transparent;
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
  top: 67px;
  line-height: 36px;
  padding: 5px 0;
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
}
.layui-nav-child>dd i{
  font-size:16px;
  color:#999;  
}

</style>

