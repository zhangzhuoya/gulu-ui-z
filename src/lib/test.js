import Swiper from "./Swiper.vue";
import CarItem from "./CarItem.vue";

let JsppUI = {}
// 使用install注册
JsppUI.install = function(Vue){
    Vue.component(Swiper.name,Swiper);
    Vue.component(CarItem.name,CarItem);

}
// 导出
export default JsppUI;
