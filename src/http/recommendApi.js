import baseApi from './baseApi'

export default {
  getShopRecommendList(num){
    return baseApi.post("/shopRecommend/getShopRecommendList",{pageNum: num})
  },
  deleteShopRecommend(id){
    return baseApi.post("/shopRecommend/deleteShopRecommend",{recommendId:id})
  }
}