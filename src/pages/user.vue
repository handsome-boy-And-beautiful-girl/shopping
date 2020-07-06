<template>
  <div>
    <div class="userList">
      <el-table ref="filterTable" :data="userList" style="width: 100%">
        <el-table-column type="index" label="序号" width="120"></el-table-column>
        <el-table-column prop="userName" label="姓名" width="120"></el-table-column>
        <el-table-column prop="gender" label="性别" width="120"></el-table-column>
        <el-table-column prop="phone" label="电话" width="120"></el-table-column>
        <el-table-column prop="nikeName" label="昵称" width="120"></el-table-column>
        <el-table-column prop="email" label="邮件" width="120"></el-table-column>
        <el-table-column prop="address" label="收货地址" width="120"></el-table-column>
        <el-table-column label="操作" width="350">
          <template slot-scope="scope">
                    <button>编辑</button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <span class="prev">上</span>
        <span class="pager" v-for="(item,index) in navigatepageNums" :key="index" @click="handpage(item)" :class="{pageclass: pageNum === item}">{{item}}</span>
        <span class="next">下</span>
      </div>
    </div>
  </div>
</template>

<script>
  import userApi from '../http/userApi.js'
  export default {
    data() {
      return {
        userList: [],
        pageNum: 1,
        navigatepageNums: [],
        nextPage: null
      }
    },
    mounted() {
      userApi.getUserList(this.pageNum).then(res => {
        this.userList = res.data.list
        this.navigatepageNums = res.data.navigatepageNums
        this.nextPage = res.data.list.nextPage
        console.log(this.userList)
      })
    },
    methods: {
      handpage(item) {
        this.pageNum = item
        userApi.getUserList(this.pageNum).then(res => {
          if (res.code === 0) {
            this.userList = res.data.list
            this.navigatepageNums = res.data.navigatepageNums
            this.nextPage = res.data.list.nextPage
            console.log(this.userList)
          }
        })
      },
    }
  }
</script>
<style>
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
</style>
