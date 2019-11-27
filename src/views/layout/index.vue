<template>
    
    <el-container>
        
        <nav-item></nav-item>
        <el-container class="elContainer">
            <div :style="'width: 100%;background-color: #f8f8f8;padding:20px;'">
                <div class="contentRoute">
                    <div class="mainBackground" :style="'background-color: #fff;padding:20px;'">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
            <!-- <app-header></app-header>
            <div :style="'min-height: '+minHeight+'px;width: 100%;background-color: #f8f8f8'">
                <div class="contentRoute">
                    <div class="mainBackground">
                        <router-view></router-view>
                        <div class="fixed w50px h50px lh50px text-center radius1 pointer myBackTop" v-show="showBackTop" style="bottom: 66px; right: 40px; z-index:9999;" @click="backTop">
                            <i class="iconfont iconshouqi f24px"></i>
                        </div>
                    </div>
                </div>
            </div> -->
        </el-container> 
    </el-container>
   
</template>

<script>
  

    import NavItem from './NavItem.vue'

    export default {
        name: "index",
        components: {
            NavItem
        },
        data() {
            return{
            }
        },
        methods: {
            backTop(){
                window.scrollTo(0,0)
            }
        },
        mounted(){

            let _this = this

            // window.onscroll = function (e) {

            //     if($(window).scrollTop() >= 300){
            //         _this.showBackTop = true
            //     }else{
            //         _this.showBackTop = false
            //     }
            // }
        },

        updated(){
           
        }
    }
</script>

<style scoped>
    
</style>
<style>
.el-container{
    display:flex
}
.el-container .NavItem{
    width: 200px;
}
.el-container .el-container{
    flex: 1;
}

</style>