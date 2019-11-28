<template>
  <div class="WhiteList" :style="'min-height: '+boxMaxHeight+'px;'">
    <header>白名单管理</header>
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
    <el-dialog title="新增" :visible.sync="dialogForm" width="400">
      <div class="el_dialog_box">
        <el-form ref="myForm" :model="form" :rules="rules" label-width="160px">
            <el-form-item label="游戏" prop="name">
              <el-select v-model="condition.sex" readonly="" clearable placeholder="请选择游戏" class="wb100">
                <el-option label="全部" :value="'0'"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="name" prop="name">
              <el-input type="text" v-model.trim="form.name" placeholder="请输入名称" clearable></el-input>
            </el-form-item>
            <el-form-item label="market_hash_name" prop="name">
              <el-input type="text" v-model.trim="form.name" placeholder="请输入名称" clearable></el-input>
            </el-form-item>
            <el-form-item label="回收价" prop="name">
              <el-input type="text" v-model.trim="form.name" placeholder="请输入名称" clearable></el-input>
            </el-form-item>
            <el-form-item label="每日收购上限" prop="name">
              <el-input type="text" v-model.trim="form.name" placeholder="请输入名称" clearable></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <template v-if="disabled">
            <el-button type="primary" disabled>提交中...</el-button>
          </template>
          <template v-else>
            <el-button type="primary" @click="handleSubmit">保 存</el-button>
          </template>
          <el-button @click="dialogForm = false">取 消</el-button>
        </div>
      </div> 
    </el-dialog>
  </div>
</template>

<script>
import { customerList } from "@/assets/api/client/client"
export default {
  name: "WhiteList",
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
      form: {
      },
      dialogForm: false,                //弹窗控制器
      rules: {
        p_id: [{required: true, message: '请选择一级类目', trigger: 'change'}],
        name: [{required: true, message: '请输入项目名称', trigger: 'change'}],
      },
      disabled: false,
    }
  },
  created() {},
  methods: {
    loadData(){
      this.$refs.demoTable.loadData()
    },

    // 提交表单
    handleSubmit() {

      this.$refs.myForm.validate((valid) => {
        if (valid) {
        } else {
          this.$message({
            message: '请检查表单',
            type: 'error'
          })
        }
      })

    },
  },
  // 挂载结束状态
  mounted() {
    this.boxMaxHeight = window.innerHeight - 40;
  },

  
};
</script>

<style scoped lang="scss">

.WhiteList {
  header {
    width: 100%;
    font-size: 16px;
    padding-bottom: 10px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    border-bottom: 1px solid #e5e5e5;
  }
  .box {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    padding-bottom:20px; 
  }
}
</style>
