<template>
  <div>
    <!-- 首页 -->
    首页
    <div>
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>
        <i class="iconfont">&#xe63e;</i>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
.box{
  width: 100%;
  height: 50px;
  /* background:gray; */
}
</style>
