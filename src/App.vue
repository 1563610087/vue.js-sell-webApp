<template>
  <div>
    <!-- v-bind可以简写:"seller" -->
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
            <!-- 采用两种方式使用router-link -->
            <!-- 方法1 -->
    	<div class="tab-item">    
          <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
         <!--  方法2 -->
          <router-link :to="{name:'ratings'}">评论</router-link>
      </div>
      <div class="tab-item">
          <router-link :to="{name:'seller'}">商家</router-link>
      </div>
    </div>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view :seller="seller"></router-view>
        
  </div>
</template>

<script type="text/ecmascript-6">
	import header from './components/header/header.vue';
    const ERR_OK=0;
    const debug = process.env.NODE_ENV !== 'production';

	export default{
        data() { 
            return {
                seller:{}
            };
        },
        created() {
          
            this.$http.get('/api/seller').then((response) => {
               response=response.body;
                if(response.errno===ERR_OK){
                    this.seller=response.data;
                    
                }
            });
        },
		components:{
			'v-header':header//这应该是自定义组件名
		}
	};
</script>
<!-- =========================== -->
<style lang="stylus" rel="stylesheet/stylus">
//@import是stylus的语法，可以引入外部的stylus文件
@import "./common/stylus/mixin.styl"
    .tab
        display:flex 
        width:100%
        height:40px
        line-height:40px
        border-1px(rgba(7,17,27,0.1))
        .tab-item
            flex:1
            text-align:center
            &>a
                display:block
                font-size:14px
                color:rgb(77,85,93)
                &.active
                    color:rgb(240,20,20)

</style>
