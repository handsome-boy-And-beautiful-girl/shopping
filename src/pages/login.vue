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
            <input class="Account" v-model="Account"   placeholder="账号"/><br>
            <input class="password" v-model="password" type="password" placeholder="密码"/><br>
            <button class="login-btn" type="submit"  @click="login">登陆</button>
            <button class="login-btn2" @click="handRegister">注册</button>
        </from>
      </div>
      <div class="register">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      Account: null,
      password: null,
      title: null
    }
  },
  mounted(){

  },
  methods: {
    login(){
      console.log(this.Account)
      console.log(this.password)
      const lengs = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|4|5|6|7|8|9])\d{8}$/
      const paw = /^ [a-zA-Z]\w{5,17}$/ // 长度为5-17 密码为数字和字符
      if(!lengs.test(this.Account || !this.Account != null)){
        alert("账号格式不正确")
      }else if(this.password == null){
        alert("密码格式不正确")
      }else{
        this.$router.push({path:'/Aindex'})
      }
    },
    handRegister(){
      this.$router.push({path:'/register'})
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
  z-index: 9999;
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
.register{
 position:absolute;
  top:0;
  right:300px;
  width:350px;
  height:400px;
  border:1px solid #333;
  margin-right: 150px;
  background: white;

}


</style>
