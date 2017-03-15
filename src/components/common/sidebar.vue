<template>
    <div class="sidebar">
        <nav class="navbar-default navbar-side" role="navigation">
          <div class="sidebar-collapse">
            <ul class="nav" id="main-menu">
              <li @click="goBaseTable()">
                  <a class="active-menu waves-effect waves-dark">微服务</a>
              </li>
              <li @click="goBaseForm()">
                  <a class="waves-effect waves-dark">表单管理</a>
              </li>
              <li>
                  <a class="waves-effect waves-dark">图标管理</a>
              </li>
              <li @click="goVueTable()">
                  <a class="waves-effect waves-dark">vue表格管理</a>
              </li>
              <li>
                  <a class="waves-effect waves-dark" v-on:click="upDown()">其它<span class="glyphicon glyphicon-chevron-down"></span></a>
                  <ul class="nav nav-second-level">
                    <li>
                      <a>Second Level Link</a>
                    </li>
                    <li>
                      <a>Second Level Link</a>
                    </li>
                  </ul>
              </li>
            </ul>
          </div>
        </nav>      
    </div>
</template>
<script>
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        methods: {     
            upDown() {
              var secondLevel = document.querySelector(".nav-second-level");
              var arrow = document.querySelector(".glyphicon-chevron-down");
              if ($('.nav-second-level').is(":hidden")){
                $('.nav-second-level').slideDown(200);
                $('.glyphicon-chevron-down').addClass('glyphicon-chevron-down-roate')
              }else {
                $('.nav-second-level').slideUp(200);
                $('.glyphicon-chevron-down').removeClass('glyphicon-chevron-down-roate')
              }
            },
            goBaseTable() {
                const self = this;
                self.$router.push('/basetable');   
            },
            goBaseForm() {
                const self = this;
                self.$router.push('/baseform');   
            },
            goVueTable() {
                const self = this;
                self.$router.push('/vuetable');
            }
        }
    }
</script>
<style scoped>
  @media (min-width: 768px){
    .navbar-side {
      width: 240px;
      z-index: 1;
    }
  }  
  .navbar-default {
    border: 0px solid black;
  }
  .navbar-side {
    height:100%;
    background: #2c445a;
    z-index: 2;
    position: fixed;
    width: 240px;
    top: 65px;
    box-shadow: none;
  }
  .sidebar-collapse > .nav > li {
    border-bottom: 2px solid rgba(107, 108, 109, 0.19);
  }
  .sidebar-collapse > .nav > li > a {
    padding: 14px 14px 14px 20px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.47);
    background: transparent;
    text-shadow: none;   
  }
  .glyphicon-chevron-down {
    float: right;
    margin-top:2px;
    transition: all .2s;
    -webkit-transition: all .2s;
  }
  .glyphicon-chevron-down-roate {
    transform:rotate(180deg);
    -moz-transform:rotate(180deg);
    -webkit-transform:rotate(180deg); 
    -o-transform:rotate(180deg); 
  }
  ul.nav.nav-second-level{
    display:none;
  }
</style>
