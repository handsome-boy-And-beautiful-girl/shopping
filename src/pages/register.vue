<template>
  <div class="box1">
    <!-- 首页 -->
    <div class="header">在线超市系统</div>
    <div class="conter">
      <img src="../assets/image/picture3.png">
      <div class="register">
        <div class="register_title">用户注册</div>
        <p>请输入填写个人信息</p>
        <form>
          <label>用户名：</label><input v-model="username"  type="text" /><br>
          <label>昵称：</label><input  v-model="nikeName" type="text" /><br>
          <label>电话：</label><input  v-model="phone" type="text" /><br>
          <label>邮箱：</label><input  v-model="email" type="text" /><br>
          <label>密码：</label><input  v-model="password" type="password" /><br>
          <button class="btn" @click="backPages"> 上一页</button>
          <button class="register_btn" type="button" @click="register"> 注册</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import userApi from '../http/userApi.js'
export default {
  data () {
    return {
      username: null,
      phone: null,
      password: null,
      nikeName: null,
      email: null
    }
  },
  methods:{
    backPages(){
      window.history.back()
    },
    register(){
      userApi.UserRegister(this.username,this.phone,this.password,this.email).then(res=>{
        if(res.code === 0){
          console.log(res)
          this.$router.push({path:'/login'})
        }else{
          alert("注册失败")
        }
      }).catch({})
    }
  }
}
</script>
<style>
.box1{
  width:100%;
  height:100%;
}
.header{
  width: 100%;
  height:80px;
  line-height:80px;
  background: #ffffff;
  border:1px solid #3333;
  text-align:left;
  padding-left:15px;
  font-size:25px;
  font-weight:bolder;
}
.conter{
  position:relative;
  width:100%;
  height:700px;
  border:1px solid #333;
  text-align:center;
  background: #1d80dd;
}
.img{
  float:left;
  right:300px;
  width:350px;
  height:400px;
  border:1px solid #333;
  margin-right: 150px;
  background: white;
  background-image: url('../assets/image/picture3.png')
}
.register{
  position:absolute;
  top:0;
  right:300px;
  width:350px;
  height:65%;
  border:1px solid #333;
  margin-right: 150px;
  background: white;

}
.register_title{
  margin-top:15px;
  font-size: 20px;
  text-align:left;
  padding-left:15px;
  font-weight: 500;
  color: #333;
  margin-bottom:15px;
}
.register p{
  margin-top:15px;
  font-size:14px;
  text-align:left;
  padding-left:15px;
  color: #adadad;
  margin-bottom:15px;
}
label,input{
  margin: 10px 0;
}
input{
  display: inline-block;
  width: 75%;
  height: 30px;
  text-align: left;
}
label{
  display: inline-block;
  text-align: right;
}
.register_btn{
  width:35%;
  height:28px;
  margin-top:15px;
  color:white;
  border:none;
  background:#99CC33;
}
.btn{
   width:35%;
  height:28px;
  margin-top:15px;
  color:white;
  border:none;
  background:#1d80dd;
}
</style>
