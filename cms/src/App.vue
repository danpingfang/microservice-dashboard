<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body,header,section,footer,div,ul,ol,li,img,a,span,em,del,legend,center,strong,var,fieldset,form,label,dl,dt,dd,cite,hr,time,input，mark,code,figcaption,figure,textarea,h1,h2,h3,h4,h5,h6,p{
    margin:0;
    border:0;
    padding:0;
    outline:0;
    font-style:normal;
}
ol,ul{
    list-style:none
}
i{
    font-style: normal;
}
img{
    border:none
}
table{
    border-collapse:collapse;
    border-spacing:0
}
body{
    height:100%; 
    font:14px/18px "Microsoft Yahei", Tahoma, Helvetica, Arial, Verdana, "\5b8b\4f53", sans-serif; 
    color:#51555C; 
}

@font-face {
  font-family: 'iconfont';  /* project id 239356 */
  src: url('//at.alicdn.com/t/font_bhp67937jhouhaor.eot');
  src: url('//at.alicdn.com/t/font_bhp67937jhouhaor.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_bhp67937jhouhaor.woff') format('woff'),
  url('//at.alicdn.com/t/font_bhp67937jhouhaor.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_bhp67937jhouhaor.svg#iconfont') format('svg');
}
.icon {
  font-size: 16px;
  font-family: "iconfont" !important;
  font-style: normal;
  line-height: 1;
  text-align: center;
  color: #b7c0c8;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.icon-set:before {
  content: "\e600";
}
.icon-logout:before {
  content: "\e621";
}
.icon-mine:before {
  content: "\e623";
}
.icon-location {
  content: "\e619";
}
.icon-homepage {
  content: "\e61f";
}
.icon-footprint {
  content: "\e69d";
}
</style>
