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
          <template slot-scope="scope">
            <button>编辑</button>
            <button @click="deleteshop(scope.$index, list)">删除</button>
            <button @click=" Remmend(scope.$index, list)">添加到推荐</button>
</template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pagination">
        <span class="prev">上</span>
        <span class="pager" v-for="(item,index) in navigatepageNums" :key="index" @click="handpage(item)" :class="{pageclass: pageNum === item}">{{item}}</span>
        <span class="next">下</span>
      </div>
      <!-- 提示框 -->
      <el-dialog title="添加商品" :visible.sync="dialogTableVisible">
        <el-form>
          <div class="picture">
            <!--图片上传-->
            <form enctype="multipart/form-data" method="post">
              <input type="file" accept="image/jpeg,image/x-png,image/gif" multiple="multiple" @change="onChange" />
            </form>
            <img id="avatar" :src="ImgPath" class="avatar" style="width:150px; height:150px;" />
            <div class="shopInfo">
              <label>商品名称</label><input v-model="shop.shopName" type="text" placeholder="请输入商品名称" /><br>
              <label>商品价格</label><input v-model="shop.price" type="text" placeholder="请输入商品价格" /><br>
              <label>商品数量</label><input v-model="shop.quantity" type="text" placeholder="请输入商品数量" /><br>
              <label>商品类别</label><input v-model="shop.category" type="text" placeholder="请输入商品类别" /><br>
              <label>商品描述</label><input v-model="shop.summarize" type="text" placeholder="请输入商品描述" /><br>
              <button type="button" @click=" shopAdd">添加商品</button>
            </div>
          </div>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import shopApi from '../http/shopApi.js'
  import uploadApi from '../http/uploadApi.js'
  import baseApi from '../http/baseApi.js';
  export default {
    data() {
      return {
        list: null,
        pageNum: 1,
        navigatepageNums: [],
        nextPage: null,
        dialogTableVisible: false,
        ImgPath: null,
        file: null,
        shop: {
          id: null,
          shopName: null,
          shopNumber: null,
          shopImg: null,
          summarize: null,
          category: null,
          price: null,
          quantity: null
        },
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
      },
      onChange(e) {
        const that = this
        this.file = e.target.files[0]
        console.log(this.file)
        const size = this.file.size / 1014 / 1024
        uploadApi.updateFile(this.file).then(res => {
          if (res.code === 0) {
            this.ImgPath = res.data
          }
        })
      },
      shopAdd() {
        this.shop.shopImg = this.ImgPath
        shopApi.insertShop(this.shop).then(res => {
          if (res.code === 0) {
            console.log(res)
            this.dialogTableVisible = false
            this.$message({
              message: '商品添加成功',
              type: 'success'
            });
          }
        })
      },
      Remmend(index, list) {
        console.log(index)
        console.log(list[index])
        const shopRecommend = {
          id: list[index].id,
          shopName: list[index].shopName,
          shopNumber: list[index].shopNumber,
          shopImg: list[index].shopImg,
          summarize: list[index].summarize,
          category: list[index].category,
          price: list[index].price,
          quantity: list[index].quantity,
          recommendId: null,
          typeId: null
        }
        shopApi.insertShopRecommend(shopRecommend).then(res => {
          if (res.code === 0) {
            console.log(res)
          }
        })
      },
      deleteshop(index, list) {
        const id = list[index].id
        console.log(id)
        shopApi.shopDelete(id).then(res => {
          if (res.code === 0) {
            this.$message({
              message: "删除成功",
              type: 'success'
            });
            shopApi.getShop(this.pageNum).then(res => {
              if (res.code === 0) {
                this.list = res.data.list
                this.navigatepageNums = res.data.navigatepageNums
                this.nextPage = res.data.list.nextPage
                this.pageNum = res.data.pageNum
              }
            })
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
  .shopInfo label,
  input {
    margin: 10px 5px;
  }
  .shopInfo input {
    width: 300px;
    height: 22px;
    padding-left: 10px;
  }
  .shopInfo button {
    width: 150px;
    height: 25px;
    background: #33CCFF;
    border: none;
    outline: none;
    color: white;
  }
</style>
