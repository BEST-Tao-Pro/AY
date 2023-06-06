<template>
  <el-card class="box-card" :body-style="{display:'flex',background:'green',width:'80rem',margin:'auto',marginTop:'1rem'}">
    <el-container>
      <el-form
        label-width=50px
        style="background-color: white;">
        <adminpage v-if="user.data.value.role!=2"></adminpage>
        <selfpage v-if="user.data.value.role==2"></selfpage>
      </el-form>
    </el-container>
</el-card>
</template>
<script setup>
import adminpage from '@/views/back/pages/self/admin.vue'
import selfpage from '@/views/back/pages/self/common.vue'
import { useCounterStore } from '@/stores/counter.js';
import { storeToRefs } from "pinia";
let store=useCounterStore()
const user=storeToRefs(store)
</script>
<style scoped>
.parent {
  margin: 30px;
  display: grid;
  grid-template-columns: 1fr repeat(2, 4fr) 1fr;
  grid-template-rows: repeat(22, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 1 / 4 / 2 / 5; }
.div5 { grid-area: 2 / 1 / 6 / 2; }
.div6 { grid-area: 2 / 2 / 6 / 3; }
.div7 { grid-area: 2 / 3 / 6 / 4; }
.div8 { grid-area: 2 / 4 / 6 / 5; }
.div9 { grid-area: 6 / 1 / 9 / 2; }
.div10 { grid-area: 6 / 2 / 9 / 3; }
.div11 { grid-area: 6 / 3 / 9 / 4; }
.div12 { grid-area: 6 / 4 / 9 / 5; }
.div13 { grid-area: 9 / 1 / 12 / 2; }
.div14 { grid-area: 9 / 2 / 12 / 3; }
.div15 { grid-area: 9 / 3 / 12 / 4; }
.div16 { grid-area: 9 / 4 / 12 / 5; }
.div17 { grid-area: 12 / 1 / 16 / 2; }
.div18 { grid-area: 12 / 2 / 16 / 3; }
.div19 { grid-area: 12 / 3 / 16 / 4; }
.div20 { grid-area: 12 / 4 / 16 / 5; }
.div21 { grid-area: 16 / 1 / 20 / 2; }
.div22 { grid-area: 16 / 2 / 20 / 3; }
.div23 { grid-area: 16 / 3 / 20 / 5; }
.div24 { grid-area: 16 / 4 / 20 / 4; }
.div25 { grid-area: 20 / 1 / 23 / 2; }
.div26 { grid-area: 20 / 2 / 23 / 3; }
.div27 { grid-area: 20 / 3 / 23 / 4; }
.div28 { grid-area: 20 / 4 / 23 / 5; }

.inn{
    /* display: flex;
    align-content: center;
    justify-content: center; */
    margin-left: 25%;
    margin-top: 50px;
}
</style>