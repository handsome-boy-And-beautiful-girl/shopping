// 商品接口
import baseApi from './baseApi'

export default {
  getShop(num){
    return baseApi.post("/shop/getShopList",{pageNum: num})
  },
  insertShop(shop){
    return baseApi.post("/shop/insertShop",shop)
  },
  insertShopRecommend(shopRecommend){
    return baseApi.post("/shopRecommend/insertShopRecommend",shopRecommend)
  },
  shopDelete(id){
    return baseApi.post("/shop/deleteShop",{id:id})
  }
}