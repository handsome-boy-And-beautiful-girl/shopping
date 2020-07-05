import baseApi from'./baseApi'

export default 　{
    UserLogin(Account,password){
        return baseApi.post("/login", {
          Phone: Account,
          PassWord: password
        })
    }
}