<template>
  <div class="box">
    <div class="header">在线超市系统</div>
    <div class="center"></div>
    <!-- 购物车 -->
    <div>
      <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu v-for="(item,index) in list" :key="index">
      <el-submenu :index="String(index)">
        <template slot="title"  >
          <div  @click="handpages(item.path)" style="widht:100%;height:100%">
            <i :class="item.icon"></i>{{item.name}}
          </div>
        </template>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <!-- <el-header style="text-align: right; font-size: 12px">
     154
    </el-header> -->
    
    <el-main style="border:5px solid #333;">
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [

        {
          name: '商品管理',
          index: 1,
          path: 'Aindex/shopList',
          icon: 'el-icon-message'
        },
        {
          name: '用户管理',
          index: 1,
          path: '/shopLit',
          icon: 'el-icon-menu'
        },
        {
          name: '订单管理',
          index: 1,
          path: '/shopLit',
          icon: 'el-icon-setting'
        }
      ]
    }
  },
  methods:{
    handpages(url){
      console.log(url)
      this.$router.push({path:url})
    }
  }
}
</script>

<style>
.box{
  width: 100%;
  height: 100%;
}
.header{
  width: 100%;
  height:80px;
  line-height:80px;
  background: #1d80dd;
  border:1px solid #3333;
  text-align:left;
  padding-left:15px;
  font-size:25px;
  font-weight:550;
  color: white;
  overflow: 0.6;
}
</style>
