import Vue from 'vue';
import Router from 'vue-router';//1 引入vue-router模块
// 4 引入对应的vue组件，@表示的是src文件路径
import Goods from '@/components/goods/goods.vue';
import Ratings from '@/components/ratings/ratings.vue';
import Seller from '@/components/seller/seller.vue';


Vue.use(Router)//2 注册vue-router
//3 创建路由对象并配置路由规则
export default new Router({
  routes: [
    // {
    //   path: '/',//到时候地址栏会显示的路径
    //   name: 'header',//感觉有没有没啥影响
    //   component: Header// Header是组件的名字，这个路由对应跳转到的组件。注意component没有加“s”.
    // },
    { path:'/',redirect:'/goods'},//路径    重定向（路径） 具体路径
    { path:'/goods',name:'goods',component:Goods},//注意这个path，指的不是文件的路径，指的是地址栏会出现的地址
    { path:'/ratings',name:'ratings',component:Ratings},
    { path:'/seller',name:'seller',component:Seller}
  ],
  linkActiveClass:'active',
  linkExactActiveClass:'active'
})




