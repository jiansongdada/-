<template>
  <div class="studentList">
    <!-- <el-table :data="tableData.slice((currentPage - 1) * pageSize,currentPage * pageSize)" border style="width: 100%"> -->
    <el-table :data="comData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" algin="center"> </el-table-column>
      <el-table-column prop="sex_text" label="性别" algin="center"> </el-table-column>
      <el-table-column prop="age" label="年龄" algin="center"> </el-table-column>
      <el-table-column prop="number" label="学号" algin="center"> </el-table-column>
      <el-table-column prop="class" label="班级" algin="center"> </el-table-column>
      <el-table-column prop="state_text" label="状态" algin="center"> </el-table-column>
      <el-table-column prop="address" label="地址" algin="center"> </el-table-column>
      <el-table-column prop="phone" label="联系方式" algin="center"> </el-table-column>
      <el-table-column  label="操作"> 
        <template>
          <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20,30, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

  </div>
</template>

<script>
import {reqStudentList} from '@/api/api.js'
export default {
  data(){
    return{
      tableData: [],
      currentPage: 1,  //当前页数
      pageSize: 10,  //每页显示的行数
      total: 0
    }
  },
  created() {
    this.getStudentList()
  },
  computed: {
    comData() {
      return this.tableData.slice((this.currentPage - 1) * this.pageSize,this.currentPage * this.pageSize)
    }
  },
  methods: {
    getStudentList(params) {
      reqStudentList(params).then((res) => {
        console.log(res)
        if(res.data.status === 200) {
          this.tableData = res.data.data
          this.total = res.data.total
          this.tableData.forEach(item => {
            item.sex === 1 ? item.sex_text = '男' : item.sex_text = '女'
            item.state === "1" ? (item.state_text = "已入学") 
            : item.state === "2" ? (item.state_text = "未入学") : (item.state_text = "休学中")
          });
        }
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
        console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(`当前页: ${val}`);
    },
  }
};
</script>
<style lang="scss" scoped>
.studentList {
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}

</style>
