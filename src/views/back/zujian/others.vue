<template>
  <el-card class="box-card" :body-style="{display:'flex',background:'green',width:'80rem',margin:'auto',marginTop:'1rem'}">
    <el-container>
      <el-form
          label-width=50px
          style="background-color: white;">
<!--        <Suspense>
          <template #fallback>
            <admins v-if="user.data.value.role!=2" :key="1"></admins>
          </template>

        </Suspense>
       <Suspense>
         <template #fallback>  <selfs v-if="user.data.value.role==2" :key="2"></selfs></template>
       </Suspense>-->
        <adminpage v-if="user.data.value.role!=2"></adminpage>
        <selfpage v-if="user.data.value.role==2"></selfpage>
      </el-form>
    </el-container>
  </el-card>
</template>
<script setup>
import  adminpage from "@/views/back/pages/other/admin.vue"
import  selfpage from "@/views/back/pages/other/common.vue"
import axios from 'axios'
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter.js';
import { storeToRefs } from "pinia";
import { useRouter } from 'vue-router';




let router=useRouter()
let store=useCounterStore()
const user=storeToRefs(store)






</script>