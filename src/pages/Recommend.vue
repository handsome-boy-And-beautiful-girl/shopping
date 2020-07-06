<template>
  <div>
    <div>
      <el-table ref="filterTable" :data="list" style="width: 100%">
        <el-table-column type="index" label="序号" width="120"></el-table-column>
        <el-table-column prop="shopName" label="商品名称" width="120"></el-table-column>
        <el-table-column prop="shopId" label="商品Id" width="120"></el-table-column>
        <el-table-column prop="shopNumber" label="商品编号" width="120"></el-table-column>
        <el-table-column prop="price" label="价格" width="120"></el-table-column>
        <el-table-column prop="quantity" label="数量" width="120"></el-table-column>
        <el-table-column prop="summarize" label="描述" width="120"></el-table-column>
        <el-table-column label="操作" width="350">
          <template slot-scope="scope">
              <button @click="delete(scope.$index, list)">删除</button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import RecommendApi from '../http/recommendApi.js'
  export default {
    data() {
      return {
        list: [],
        pageNum: 1,
        navigatepageNums: [],
        nextPage: null
      }
    },
    mounted() {
      RecommendApi.getShopRecommendList(this.pageNum).then(res => {
        if (res.code === 0) {
          this.list = res.data.list
          this.navigatepageNums = res.data.navigatepageNums
          this.nextPage = res.data.list.nextPage
          console.log(this.list)
        }
      })
    },
    methods: {
      delete(index, list) {
        const recommendId = list[index].recommendId
        RecommendApi.deleteShopRecommend(recommendId).then(res => {
          if(res.code === 0) {
            this.$message({
              message: "删除成功",
              type: 'success'
            });
            RecommendApi.getShopRecommendList(1).then(res => {
              if(res.code === 0) {
                this.list = res.data.list
                this.navigatepageNums = res.data.navigatepageNums
                this.nextPage = res.data.list.nextPage
                console.log(this.list)
              }
            })
          }
        })
      }
    }
  }
</script>
<style>

</style>
