 // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径。
如果是模块名，不带有路径，那么必须有配置文件，告诉js引擎该模块的位置*/
import Vue from 'vue';//加载vue模块，并赋值给变量Vue
import App from './App';
import Router from './router/index.js';//引入路由对应的组件的位置,这样写是为了将路由单独弄成一个文件夹
import VueResource from 'vue-resource';//加载vue-resource模块

import './common/stylus/index.styl';
Vue.use(VueResource);//vue-resource注册


Vue.config.productionTip = false;
/*productionTip 2.2.0 新增
类型： boolean
默认值： true
用法：
设置为 false 以阻止 vue 在启动时生成生产提示*/
//==============================================
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:Router,//这是简写，全写router：Router，后面的这个是路由名字，如果都是小写，则可以简写为router，
  components: { App },//根组件
  template: '<App/>'
});
