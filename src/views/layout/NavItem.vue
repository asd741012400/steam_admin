<template>
  <div class="NavItem" :style="'min-height: '+boxMaxHeight+'px;'">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#20222a"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu v-for="(item , index) in list" :key="index" :index="index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(itemName , indexName) in item.rows" :key="indexName" :index="index+'-'+indexName">{{itemName.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  components: {
  },
  data() {
    return {
      boxMaxHeight:"",
      list:[
        {
          name:'111',
          rows:[
            {
              name:"111-11"
            },
            {
              name:"111-22"
            },
          ]
        },
        {
          name:'222',
          rows:[
            {
              name:"222-11"
            },
            {
              name:"222-22"
            },
            {
              name:"222-333"
            },
          ]
        },
      ]
    }
  },
  created() {},
  methods: {
   
  },
  // 挂载结束状态
  mounted() {
    this.boxMaxHeight = window.innerHeight;
  },

  
};
</script>

<style scoped lang="scss">
.NavItem{
  width: 150px;
  background: #20222a;
}
</style>
<style>
.NavItem .el-submenu .el-menu-item{
  min-width: 140px;;
}
.NavItem .el-menu{
  border-right: 0;
}
</style>
