<template>
  <div class="box">
    <!-- 购物车 -->
    <div class="header">在线超市系统</div>
    <div class="conter">
      <img src="../assets/image/picture3.png">
      <div class="login">
        <div class="login_title">用户登录</div>
        <p>请输入用户名密码进入系统</p>
        <from>
            <input class="Account"   placeholder="账号"/><br>
            <input class="password"  placeholder="密码"/><br>
            <button class="login-btn" type="submit">登陆</button>
            <button class="login-btn2">注册</button>
        </from>
      </div>
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
  font-weight:550;
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
.login{
  position:absolute;
  top:0;
  right:300px;
  width:350px;
  height:400px;
  border:1px solid #333;
  margin-right: 150px;
  background: white;
}
.login_title{
  margin-top:15px;
  font-size: 20px;
  text-align:left;
  padding-left:15px;
  font-weight: 500;
  color: #333;
  margin-bottom:15px;
}
.login p{
  margin-top:15px;
  font-size:14px;
  text-align:left;
  padding-left:15px;
  color: #adadad;
  margin-bottom:15px;
}
.Account,.password{
   width:80%;
   height:30px;
   padding-left:5px;
 } 
.Account{
  margin:15px auto;
}
.login-btn,.login-btn2{
  width:35%;
  height:28px;
  margin-top:15px;
  color:white;
  border:none;
}
.login-btn{
  background:#2d90e4;
}
.login-btn2{
    background:#99CC33;
}

</style>
