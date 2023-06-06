<template>
  <div class="parent">
    <div class="div1"> <p>项目</p></div>
    <div class="div2"> <p>内容</p></div>
    <div class="div3"><p>扣分要点</p> </div>
    <div class="div4"><p>个人自评得分</p></div>
    <div class="div5"><p >爱国守法10（分）</p></div>
    <div class="div6"><p style="margin: 10px">1.热爱祖国，热爱人民，拥护中国共产党领导，拥护社会主义，得2.5分。</p>
      <p style="margin: 10px">2.全面贯彻国家教育方针，在思想上、言行上同党和国家方针政策保持一致，得2.5分。</p>
      <p style="margin: 10px">3.自觉遵守法律法规和学校规章制度，争做知法守法楷模，得2.5分。</p>
      <p>4.依法履行岗位职责，不得以任何理由、任何方式有碍教育教学任务，不得以非法方式表达诉求、干扰正常教育教学秩序，损害学生利益，得2.5分。</p>
    </div>
    <div class="div7"><p style="margin: 10px">散布不良言论，诋毁学校和同事声誉经查实扣10分或直接评价为不合格；被学校通报批评的扣5分，受警告及以上处分的扣10分；违反学校规章制度的，经查实视情节扣5-10分；出现阻碍完成教育教学工作任务或损害学生利益的，经查实视情节扣5-10分或直接评价为不合格。</p> </div>
    <div class="div8"> <el-input style="width: 100px" v-model.number="value1"  :disabled=disable >   </el-input></div>
    <div class="div9"> <p style="margin: 10px">爱岗敬业(20分）
      ）</p></div>
    <div class="div10"><p style="margin: 10px">1.忠于人民教育事业，树立崇高的职业理想和坚定的职业信念，甘为人梯，乐于奉献，得5分。      </p>
      <p style="margin: 10px">     2.认真履行岗位职责，坚持管理育人与本职工作相结合，不在工作时间从事与教育、教学、工作无关的活动，把主要时间和精力用于学校的管理、服务工作，得10分。  </p>
      <p style="margin: 10px"> 服从学校工作安排，积极承担和认真完成管理、服务的责任，尽职尽责，得5分。</p></div>
    <div class="div11"><p style="margin: 10px">   迟到、早退、旷工经查实视情节扣5-20分；工作时擅自离开岗位经查实1次扣10分；疏于管理而造成学生伤害的经查实扣10分；不服从学校工作安排且无正当理由的扣10-20分。管理学生简单、粗暴等其他敷衍塞责的行为视情节扣5-10分。工作时间从事与工作无关活动的扣10-20分。发生工作责任事故的视情节扣5-20分。   </p> </div>
    <div class="div12"><p style="margin: 10px">   <el-input v-model.number="value2" :disabled=disable  style="width: 100px">   </el-input>   </p> </div>
    <div class="div13"><p style="margin: 10px">   关爱学生（10分）   </p> </div>
    <div class="div14"><p style="margin: 10px">    1.关心爱护全体学生，尊重学生人格，平等、公正对待学生，对学生严慈相济，建立民主和谐的师生关系的，得5分。  </p>
      <p style="margin: 10px"> 2.关心学生安全和身心健康，维护学生正当权益，危急时刻挺身而出保护学生安全的，得2分。</p>
      <p style="margin: 10px">3.不体罚或变相体罚学生，不讽刺、挖苦、歧视学生，不放弃每一个学生，主动帮助和辅导学业有困难、生活有困难、心里有困惑和行为有偏差学生的，得3分</p></div>
    <div class="div15"><p style="margin: 10px">   有讽刺、挖苦、歧视、辱骂学生、体罚或变相体罚学生言行的，收到举报经查实每次扣10分或直接评价为不合格；对学生放松管理，由此引发事故的扣10分。   </p> </div>
    <div class="div16"><p>   <el-input v-model.number="value3" :disabled=disable  style="width: 100px">   </el-input>   </p> </div>
    <div class="div17"><p style="margin: 10px">    管理服务育人（20分）  </p> </div>
    <div class="div18"><p style="margin: 10px">   1.提高工作效率，办事不推诿、不扯皮，不无故拖延，提高工作质量，认真办理每一项具体事务，得10分。</p>
      <p style="margin: 10px">  2.努力创新，探索科学的管理办法，不断改进工作作风；努力为教学、科研服务，为教职工和学生服务，营造良好的育人环境，得5分。</p>
      <p style="margin: 10px">   3.以正确的思想引导学生，以出色的工作影响学生，将育人工作贯穿于言传身教中，正确理解“处处是课堂，人人是教师”的深刻涵义，寓“育人”于管理服务工作中，得3分。</p>
      <p style="margin: 10px">  4.综合评价学生素质，客观评定学生操行，不以成绩作为评价学生的唯一标准的，得2分。
      </p> </div>
    <div class="div19"><p style="margin: 10px">    工作推诿、扯皮收到举报经查实1次扣10分；工作效果差，师生普遍反映较差扣10分；无故不参加集体学习1次扣10分；其他违反工作常规的行为视情节酌情扣分。  </p> </div>
    <div class="div20"><p style="margin: 10px">   <el-input v-model.number="value4"  :disabled=disable style="width: 100px"></el-input>   </p> </div>
    <div class="div21" ><p style="margin: 10px">为人师表（20分）</p></div>
    <div class="div22" ><p style="margin: 10px">1.坚守高尚情操，知荣明耻，淡泊名利，诚实守信，谦虚谨慎，自尊自爱，模范遵守社会公德，积极参加社会公益活动的，得5分。</p>
      <p style="margin: 10px">2.文明办公，举止端庄，衣着得体，语言规范，树立节俭意识，反对餐饮浪费，得5分。</p>
      <p style="margin: 10px"> 3.作风正派，严于律己，廉洁奉公，得5分。</p>
      <p style="margin: 10px">4.关心集体，顾全大局，团结协作，尊重同事，办事公道，维护学校和集体荣誉，得5分。</p></div>
    <div class="div23" ><p style="margin: 10px">
      无节俭意识，浪费粮食、水电等行为1次扣10分；其他违反职业道德不良行为收到举报，经查实视情节酌情扣分。违背团结协作的行为视情节酌情扣分。
    </p></div>
    <div class="div24" ><el-input v-model.number="value5" :disabled=disable  style="margin: 10px"></el-input></div>
    <div class="div25" ><p style="margin: 10px">终身学习</p></div>
    <div class="div26" ><p style="margin: 10px">1.崇尚科学精神，树立终身学习理念，坚持求真务实和严谨自律的治学态度和学术精神，恪守学术道德，发扬优良学风的，得2分。</p>
      <p style="margin: 10px">
        2.热爱学习、善于学习，积极参加培训学习，努力学习新知识、新技术，拓宽知识视野，更新知识结构，不断提高自身思想素质、管理知识和业务知识技能，潜心钻研业务，全面掌握管理知识和业务知识，不断提高自身的思想政治素质、职业道德水平和管理水平的，得15分。
      </p >
      <p style="margin: 10px">3.勇于探索创新，积极参加培训学习活动，努力探索科学的管理办法的，得3分。</p></div>
    <div class="div27" > <p style="margin: 10px">无故未参加培训学习1次扣10分。    </p></div>
    <div class="div28" ><el-input v-model.number="value6"  :disabled=disable style="margin: 10px"></el-input></div>
    <el-form-item>
      <el-button type="primary" @click="next"  :disabled=disable>
        下一个
      </el-button>
    </el-form-item>
  </div>

</template>
<script setup>
import axios from 'axios'
import { ref,onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter.js';
import { storeToRefs } from "pinia";
import { useRouter } from 'vue-router';
import { ElMessage,ElMessageBox } from 'element-plus'
let router=useRouter()
let store=useCounterStore()
const user=storeToRefs(store)

let value1 =ref()
let value2 =ref()
let value3 =ref()
let value4 =ref()
let value5 =ref()
let value6 =ref()
let idlist=ref()
let disable=ref(false)
let userdata=ref()
let todo=async () => {
  await axios.post("/api/getotherlist", {
    userid: user.data.value.userid,
    role: user.data.value.role,
    other:user.data.value.other,
    college: user.data.value.college
  }).then((res)=>{
    console.log(res.data.data.idlist==null)
    if(res.data.data.idlist!=''&&res.data.data.idlist!=null){
      idlist.value= res.data.data.idlist[0]

    }else {

      disable.value=true
    }


  })
}
let datalist = async ()=>{
  await todo()

  if (disable.value==false){
   await axios.post("/api/findbyid",{userid:idlist.value}).then((res)=>{
      userdata.value=res.data.data[0]

       ElMessageBox.alert("您将评价"+userdata.value.username+"老师")

    })

  }else {
    ElMessage({
      message:"您已完成互评！",
      type:"success"
    })
  }

}

datalist()

let next =()=>{
  let data={username:userdata.value.username,
    userid:userdata.value.userid,
    college:userdata.value.college,
    commentid:user.data.value.userid,
    commentname:user.data.value.username,
    grade:(value1.value+value5.value+value4.value+value3.value+value2.value+value1.value)/6}
  console.log(idlist.value,userdata.value)
  console.log((value1.value+value5.value+value4.value+value3.value+value2.value+value1.value)/6)
  if (value1.value == null || value2.value == null || value3.value == null || value4.value == null || value5.value == null || value6.value == null){
    ElMessage({message:"请检查空值",type:"warning"})
  }else {axios.post("/api/comment",data).then((res)=>{
    store.$patch((state)=>{
      state.data.other=user.data.value.other+1

    })
    axios.post("/api/addother",{other:user.data.value.other,userid:user.data.value.userid}).then(()=>{
      console.log(res.data.data)
      ElMessage({
        message:"success",
        type:"success"
      })
      datalist()
    })
  })

  }
}

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
</style>