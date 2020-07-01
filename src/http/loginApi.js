import baseApi from'./baseApi'

export default 　{
    UserLogin(){
        return baseApi.post("/doLogin",loginData)
    }
}