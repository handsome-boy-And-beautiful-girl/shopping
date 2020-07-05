<template>
  <div>
    <!-- 首页 -->
    <div>
      <div class="shopAdd" @click="dialogTableVisible=true">添加商品</div>
      <el-table ref="filterTable" :data="list" style="width: 100%">
        <el-table-column prop="" label="序号" width="120"></el-table-column>
        <el-table-column prop="shopName" label="商品名" width="120"></el-table-column>
        <el-table-column prop="id" label="商品编号" width="120"></el-table-column>
        <el-table-column prop="price" label="商品价格" width="120"></el-table-column>
        <el-table-column prop="shopNumber" label="商品数量" width="120"></el-table-column>
        <el-table-column prop="category" label="商品类别" width="120"></el-table-column>
        <el-table-column prop="describe" label="描述" width="180"></el-table-column>
        <el-table-column label="操作" width="350">
          <button>编辑</button>
          <button>删除</button>
          <button>添加到推荐</button>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pagination">
        <span class="prev">上</span>
        <span class="pager" v-for="(item,index) in navigatepageNums" :key="index" @click="handpage(item)" :class="{pageclass: pageNum === item}">{{item}}</span>
        <span class="next">下</span>
      </div>
      <!-- 提示框 -->
      <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
        215
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import shopApi from '../http/shopApi.js'
  export default {
    data() {
      return {
        list: null,
        pageNum: 1,
        navigatepageNums: [],
        nextPage: null,
        dialogTableVisible: false
      }
    },
    mounted() {
      shopApi.getShop(this.pageNum).then(res => {
        if (res.code === 0) {
          this.list = res.data.list
          this.navigatepageNums = res.data.navigatepageNums
          this.nextPage = res.data.list.nextPage
        }
      })
    },
    methods: {
      handpage(item) {
        shopApi.getShop(item).then(res => {
          this.pageNum = item
          if (res.code === 0) {
            this.list = res.data.list
            this.navigatepageNums = res.data.navigatepageNums
          }
        })
      }
    }
  }
</script>
<style>
  .box {
    width: 100%;
    height: 50px;
    background: gray;
  }
  .pagination {
    margin-top: 15px;
  }
  .pagination span {
    display: inline-block;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border: 1px solid #adadad;
    cursor: pointer;
    border-radius: 2px;
  }
  .pager {
    margin: 0px 5px
  }
  .pageclass {
    background: #33CCFF;
    color: white;
    border: none
  }
  .shopAdd {
    position: absolute;
    right: 15px;
    z-index: 999;
    width: 150px;
    height: 25px;
    border: 1px solid #333;
    cursor: pointer;
  }
</style>
