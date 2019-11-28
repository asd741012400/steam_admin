<template>
  <div class="RecycleSet" :style="'min-height: '+boxMaxHeight+'px;'">
    <header>
      <span>回收价规则设置</span>
      <el-button type="danger" @click="dialogForm = true">添加</el-button>
    </header>
    <div class="box">
      <base-list ref="demoTable" :condition="condition"
                   :datas.sync="demoList" :pageSearch="pageSearch" :isPaging="true">

          <el-table slot="list" :data="demoList" stripe border>
             
            <el-table-column prop="mobile" align="center" label="价格区间">
              <template slot-scope="scope">
                {{ scope.row.mobile }}
              </template>
            </el-table-column>
            <el-table-column prop="sex" align="center" label="比例">
              <template slot-scope="scope">
                {{ scope.row.sex }}
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
              <template slot-scope="scope">
                <p class="operation">
                  <a @click="$router.push({name: 'RecordListDel', query:{customerId: scope.row.id  } })">编辑</a>
                  <em></em>
                  <a>删除</a>
                </p>
              </template>
            </el-table-column>
          </el-table>
        </base-list>
    </div>
    <el-dialog title="回收价规则设置" :visible.sync="dialogForm" width="400">
      <div class="el_dialog_box">
        <el-form ref="myForm" :model="form" :rules="rules" label-width="100px">
            <el-form-item label="区间" prop="name" class="over-hidden">
              <el-input type="number" v-model.trim="form.name" placeholder="请输入名称" clearable class="wb48 fl"></el-input>
              <span class="wb4 text-center fl gray2">-</span>
              <el-input type="number" v-model.trim="form.name" placeholder="请输入名称" clearable class="wb48 fr"></el-input>
            </el-form-item>
            <el-form-item label="回收价比例" prop="name">
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
  name: "RecycleSet",
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
.RecycleSet {
  header {
    width: 100%;
    font-size: 16px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    border-bottom: 1px solid #e5e5e5;
    overflow: hidden;
    span{
      flex: 1;
    }
  }
  .box {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    padding-bottom:20px; 
  }
}
</style>
