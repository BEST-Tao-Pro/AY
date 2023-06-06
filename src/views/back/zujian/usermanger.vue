<template>
<el-main style="padding-top: 0;padding-bottom: 0;">

          <el-form :inline="true" :model="pagelists" class="demo-form-inline">
            <el-form-item class="search">
              <el-input  placeholder="账号模糊查找" v-model="querydata"></el-input>
            </el-form-item>


            <el-form-item class="search">
              <el-button type="primary" @click="querylist">查询</el-button>
            </el-form-item>
            
            <el-form-item class="search">
              <el-button type="primary" @click="isadd=!isadd">批量添加账号</el-button>
            </el-form-item>
          </el-form>
      
        <el-table :data="pagelist" 
                style="width: 100%;
                min-height:500px;
                margin-top: 2px;"
                v-loading="loading"
                element-loading-text="拼命加载中"
                height="600px"
                >
                <!-- element-loading-spinner="el-icon-loading" -->
  
      <el-table-column label="userid" >
        <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.userid }}</span>
        </div>
      </template>
      </el-table-column>
  
      <el-table-column label="username" prop="username"></el-table-column>
      <el-table-column label="学院" prop="college"></el-table-column>

      <el-table-column label="是否学院管理员" v-if="user.data.value.role==0">
        <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-switch
            v-model="scope.row.role"
            class="ml-2"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            
            :active-value="1"
            :inactive-value="2"
            @change="changestate(scope.row)"
          />

        </div>
      </template>
      </el-table-column>
  
      <el-table-column  fixed="right" label="操作" >
        <template #default="scope">
        <el-button
          size="small"
          type="text"
          @click="handleDelete(scope.$index, scope.row)"
          >删除
        </el-button>
          <el-button
              size="small"
              type="text"
              @click="handleedit(scope.$index, scope.row)"
          >修改
          </el-button>
        </template>
            </el-table-column>
  
    </el-table>
<!--    <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 50, 100]"
          v-model:page-size="pagelist.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          v-model:total="pagelist.total"
          style="margin-top: 20px;"
        ></el-pagination>-->
</el-main>
<el-dialog
    v-model="isadd"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >


     <span style="width: 100px;"> 请您选择添加数量 ：</span><el-input style="width: 30%;display: block;" v-model="accountnumber"></el-input>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isadd = false">Cancel</el-button>
        <el-button type="primary" @click=addaccount >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="showform"
             title="Tips"
             width="30%"
             :before-close="handleClose">

    <span style="width: 100px;"> username ：</span><el-input style="width: 30%;display: block;" v-model="rowdata.username"></el-input>
    <span style="width: 100px;"> password ：</span><el-input style="width: 30%;display: block;" v-model="rowdata.password"></el-input>
    <span style="width: 100px;"> college ：</span><el-input style="width: 30%;display: block;" v-model="rowdata.college"></el-input>


    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showform = false">Cancel</el-button>
        <el-button type="primary" @click=update >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
  </template>
<script setup>
import axios from 'axios'
import { ref,isRef,reactive,onBeforeMount } from 'vue'
import { useCounterStore } from '@/stores/counter.js';
import { storeToRefs } from "pinia"; 
import { useRouter } from 'vue-router';
import { ElMessage,ElMessageBox } from 'element-plus'
let accountnumber=ref()

let store=useCounterStore()
const user=storeToRefs(store)
let loading=ref(true)//加载
let pagelist=ref([])//总数据表单
let router=useRouter()
let isadd=ref(false)//控制添加
let querydata=ref()//查询参数
let showform=ref()
let password=ref()
let update=()=>{
  if(rowdata.value.password!=''&&rowdata.value.username!=''&&rowdata.value.college!='') {
    axios.post("/api/updata",rowdata.value)
    ElMessage({
      message:"success",
      type:"success"
    })
  }else {
    ElMessage({
      message:"请检查空项",
      type:"success"
    })

  }
}
let rowdata=ref()
let handleedit=(index,row)=>{


  rowdata.value={
    userid:row.userid,
    username:row.username,
    password:row.password,
    changerrole:user.data.value.role,
    college:row.college
  }
  console.log(isRef(rowdata.changerrole))
  showform.value=true

}

//查询
let querylist=()=>{
axios.post("/api/finduser", {username:querydata.value,role:user.data.value.role,college:user.data.value.college
}).then((res)=>{
  pagelist.value=res.data.data
  console.log(res.data,res.data.data)
  console.log(pagelist.value)
})
}
//添加表单
let data=reactive({
  id:13,
  username:'',
  userid:'',
  role:2,
  password:''
})

//管理权限
let changestate=(val)=>{
console.log(val,val.userid);
axios.post("/api/changerole",{role:val.role,userid:val.userid}).then((res)=>{

})
}
//获取列表
const getall=()=>  {
  axios.post("/api/getalluser",{userid:user.data.value.userid,college:user.data.value.college}).then((res)=>{
   pagelist.value=res.data.data;
   loading.value=false

})

}
getall()
//添加
let addaccount=async()=>{
if(accountnumber.value == ''){
  ElMessage({message:"请检查输入是否为空",
type:"error"})
}else{
  isadd.value=false

  await axios.post("/api/register", {number:accountnumber.value,college:user.data.value.college}).then((res)=>{
    ElMessage({message:"添加成功",
      type:"success"})

    getall()
    ElMessageBox.alert("请保存好账号:"+res.data.data+",默认密码是888888")

  })

}

}
//删除
let handleDelete=(index,row)=>{
  
  axios.post("/api/deleteuser",row).then((res)=>{

  ElMessage({message:"success",
type:"success"})
  getall()
})
}
</script>
<style scoped>
.search{
    margin: 0;
}
</style>