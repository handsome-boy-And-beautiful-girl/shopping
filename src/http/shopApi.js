// 商品接口
import baseApi from './baseApi'

export default {
  getShop(num){
    return baseApi.post("/shop/getShopList",{pageNum: num})
  }
}