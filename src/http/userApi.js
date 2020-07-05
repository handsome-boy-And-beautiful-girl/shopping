import baseApi from'./baseApi'

export default 　{
    UserRegister(username,phone,password,nikeName,email){
      return baseApi.post("/user/insertUser",{
        UserName: username,
        Phone: phone,
        PassWord: password,
        NikeName: nikeName,
        Email: email
      })
    }
}