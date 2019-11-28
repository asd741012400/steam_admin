<template>
  <div class="Remit" :style="'min-height: '+boxMaxHeight+'px;'">
    <div class="box">
      <base-list ref="demoTable" :condition="condition"
                   :datas.sync="demoList" :pageSearch="pageSearch" :isPaging="true">
           <el-form :inline="true" :model="condition" class="search-form" slot="search">
                <el-form-item>
                  <el-input type="text" v-model.trim="condition.name" placeholder="饰品名称" clearable></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="condition.sex" readonly="" clearable placeholder="游戏">
                        <el-option label="全部" :value="'0'"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="condition.sex" readonly="" clearable placeholder="状态">
                        <el-option label="全部" :value="'0'"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                  <el-input type="text" v-model.trim="condition.name" placeholder="market_hash_name" clearable></el-input>
                </el-form-item>
                <el-button type="primary" icon="el-icon-search" class="h32px" @click="loadData"></el-button>
                <el-button type="danger" class="h32px" @click="dialogForm = true">新增</el-button>
                <el-button type="danger" class="h32px">更新参考价</el-button>
          </el-form>

          <el-table slot="list" :data="demoList" stripe border>
              <el-table-column prop="name" align="center" label="id" width="50">
                  <template slot-scope="scope">
                      {{ scope.row.name }}
                  </template>
              </el-table-column>
            <el-table-column prop="mobile" align="center" label="饰品名称">
              <template slot-scope="scope">
                {{ scope.row.mobile }}
              </template>
            </el-table-column>
            <el-table-column prop="sex" align="center" label="market_hash_name">
              <template slot-scope="scope">
                {{ scope.row.sex }}
              </template>
            </el-table-column>
            <el-table-column prop="fill_in_percentage" align="center" label="游戏名称">
              <template slot-scope="scope">
                {{ scope.row.fill_in_percentage | _RateFormat}}
              </template>
            </el-table-column>
            <el-table-column prop="fill_in_percentage" align="center" label="参考价">
              <template slot-scope="scope">
                {{ scope.row.fill_in_percentage | _RateFormat}}
              </template>
            </el-table-column>
            <el-table-column prop="fill_in_percentage" align="center" label="回收价">
              <template slot-scope="scope">
                {{ scope.row.fill_in_percentage | _RateFormat}}
              </template>
            </el-table-column>
            <el-table-column prop="fill_in_percentage" align="center" label="每日收购上限">
              <template slot-scope="scope">
                {{ scope.row.fill_in_percentage | _RateFormat}}
              </template>
            </el-table-column>
            <el-table-column align="center" label="状态">
              <template slot-scope="scope">
                <el-switch
                  v-model="value2"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
              <template slot-scope="scope">
                  <a class="buttonStyle_class" @click="$router.push({name: 'RecordListDel', query:{customerId: scope.row.id  } })">编辑</a>
              </template>
            </el-table-column>

          </el-table>
        </base-list>
    </div>
   
  </div>
</template>

<script>
import { customerList } from "@/assets/api/client/client"
export default {
  name: "Remit",
  components: {
  },
  data() {
    return {
      boxMaxHeight:"",
      counselor:{
        sex: '',
        counselor:"",
      },
      condition: {
        city:"重庆"
      },                                // 查询条件
      demoList: [],                      // table数组
      pageSearch: customerList,       // 分页查询api接口
      
    }
  },
  created() {},
  methods: {
    loadData(){
      this.$refs.demoTable.loadData()
    },
 
  },
  // 挂载结束状态
  mounted() {
    this.boxMaxHeight = window.innerHeight - 40;
  },

  
};
</script>

<style scoped lang="scss">
.Remit{

}
</style>
