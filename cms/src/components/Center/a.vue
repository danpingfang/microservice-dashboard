<template>
  <div class="CenterA">
    <div class="current-page">
      <h3 class="project"><i class="icon icon-logout"></i> 控制面板</h3>
    </div>
    <h4>{{ msg }}</h4>
  </div>
</template>

<script>
export default {
  name: 'CenterA',
  data () {
    return {
      msg: '控制面板内容'
    }
  }
}
</script>

<style>
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
  
</style>
