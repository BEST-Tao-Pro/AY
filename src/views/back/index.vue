
<template>
    <div class="common-layout" >
      <el-container style="height: 100vh;">
          <div class="aside" width="200px" style="background-color: #545c64">
              <el-menu
                      default-active="2"
                      class="el-menu-vertical-demo"
                      :collapse="isCollapse"
                      @open="handleOpen"
                      @close="handleClose"
                      router 
                      >
                  <el-menu-item style="  color: white; font-size:20px;height: 80px;">
                      <a class="iconfont" v-if="isCollapse" @click="isCollapse=!isCollapse"><el-icon><ArrowRight /></el-icon></a>
                  
                      <span slot="title"><p style="text-align: center;color: black;">welcome</p></span>
                  </el-menu-item>
  
                  <el-menu-item index="/mangerhome/self" v-if="user.data.value.role!=0">
                      <el-icon><List /></el-icon>
                      <template #title>我的自测</template>
                  </el-menu-item>
  
                <el-menu-item index="/mangerhome/other" v-if="user.data.value.role!=0">
                  <el-icon><List /></el-icon>
                  <template #title>互测</template>
                </el-menu-item>
  
  
  
  
  
                  <el-menu-item index="/mangerhome/all" v-if="user.data.value.role==0">
                    <el-icon><View /></el-icon>
                      <template #title>总览</template>
                  </el-menu-item>
  
                  <el-menu-item index="/mangerhome/usermanger" v-if="user.data.value.role!=2">
                    <el-icon color="red"><Postcard /></el-icon>
                      <template #title>用户管理</template>
                  </el-menu-item>
              </el-menu>
          </div>
      
     
  
      <el-container style=" position:relative ;">
          <el-header>
              <li style="position: absolute;top: 0;left: 10px; font-size:20px;list-style: none;">
                  <span style="font-size:20px" v-if="isCollapse">WELCOME</span>
                  <a class="iconfont" @click="isCollapse=!isCollapse" v-if="!isCollapse"><el-icon><ArrowLeft /></el-icon></a>
              </li>
  
              <a style="margin-right: 30px" @click="info">{{user.data.value.username}}</a>
              <a @click="exit">退出</a>
          </el-header>
  
          <el-main style=" padding: 0px; background-color: #f7f7f7;overflow: auto;">
              <router-view />
          </el-main>
  
      </el-container>
  
        
      </el-container>
    </div>
    <el-dialog v-model="showinfo"
               title="更新资料"
               width="30%"
               :before-close="handleClose">
  
      <span style="width: 100px;"> username ：</span><el-input style="width: 30%;display: block;" v-model="username" ></el-input>
      <span style="width: 100px;"> password ：</span><el-input style="width: 30%;display: block;" v-model="password" ></el-input>
  
  
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
      
      
     
   
    
    <script  setup>
    import { ref } from 'vue'
    import { useCounterStore } from '@/stores/counter.js';
    import { storeToRefs } from "pinia"; 
    import { useRouter } from 'vue-router';
    import { ElMessage } from 'element-plus'
    import axios from 'axios'
    let router=useRouter()
    let store=useCounterStore()
    const user=storeToRefs(store)
    const isCollapse = ref(true)
    let showinfo=ref(false)
    let username=ref()
    let password=ref()
    let college=ref()
    let userid=ref()
    username.value=user.data.value.username
    password.value=user.data.value.username
    college.value=user.data.value.college
    userid.value=user.data.value.userid
   let exit=()=>{
    store.$reset()
    router.push("/")
    ElMessage({message:"已退出",type:"success"})
   }
   let info=()=>{
      showinfo.value=true
   }
   let update=()=>{
      let userdata={
        username:username.value,
        password:password.value,
        userid:userid.value,
        college:college.value
      }
     console.log(userdata)
    axios.post("/api/updata",userdata).then((res)=>{
      ElMessage({
        message:"success",
        type:"success"
      })
      showinfo.value=false
      store.$patch((state)=>{
        state.data.username=username.value
        state.data.password=password.value
      })
    })
   }
    </script>
    
    <style scoped>
    .el-menu-item{
          height: 200px;
          
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      
    }
    .el-header {
    text-align: right;
    font-size: 12px;
    background-color: #545c64;
    color: white;
    line-height: 60px;
    text-align: right;
  }
  .el-menu {
    border-right: 0;
  }
  .el-aside {
    color: white;
  }
  .aside {
    overflow: auto;
  }
    </style>
    