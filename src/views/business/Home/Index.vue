<template>
  <div class="index" :style="'min-height: '+boxMaxHeight+'px;'">
    内容
  </div>
</template>

<script>
export default {
  name: "index",
  components: {
  },
  data() {
    return {
      boxMaxHeight:"",
    }
  },
  created() {},
  methods: {},
  // 挂载结束状态
  mounted() {
    this.boxMaxHeight = window.innerHeight;
  },

  
};
</script>

<style scoped lang="scss">
.index{
  color: red;
}
</style>
