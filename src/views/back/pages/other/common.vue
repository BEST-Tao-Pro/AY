<template>
  <el-descriptions  border >
    <el-descriptions-item label="教师姓名：" width="25%">{{ user.data.value.username }}</el-descriptions-item>
    <el-descriptions-item label="学院名称：" width="25%">{{  user.data.value.college}}</el-descriptions-item>
  </el-descriptions>
  <div class="parent">
    <div class="div1"> <p>项目</p></div>
    <div class="div2"> <p>内容</p></div>
    <div class="div3"><p>扣分要点</p> </div>
    <div class="div4"><p>个人自评得分</p></div>
    <div class="div5"><p >爱国守法15（分）</p></div>
    <div class="div6"><p style="margin: 10px">1.热爱祖国，热爱人民，拥护中国共产党领导，拥护社会主义，全面贯彻国家教育方针，在思想上、言行上同党和国家方针政策保持一致，得5分。</p>
      <p style="margin: 10px">2.积极践行社会主义核心价值观，自觉遵守法律法规和学校规章制度，学习国家法律法规及学校规章制度，争做知法守法楷模，得5分。</p>
      <p style="margin: 10px">3.依法履行教师职责，不得以任何理由、任何方式有碍完成教育教学任务，不得以非法方式表达诉求、干扰正常教育教学秩序，损害学生利益，得5分。</p>
    </div>
    <div class="div7"><p style="margin: 10px">散布不良言论，诋毁学校和同事声誉,经查实扣10分或直接评价为不合格；被学校通报批评的扣10分，警告及以上处分的扣15分；违反法律法规和学校规章制度的，经查实视情节扣10分或直接评价为不合格；出现阻碍完成教育教学工作任务或损害学生利益的，经查实视情节扣10分或直接评价为不合格。</p> </div>
    <div class="div8"> <el-input style="width: 100px" v-model.number="value1" :disabled=disable>   </el-input></div>
    <div class="div9"> <p style="margin: 10px">敬业爱生(20分）
      ）</p></div>
    <div class="div10"><p style="margin: 10px">1.忠于人民教育事业，树立崇高的职业理想和坚定的职业信念，甘为人梯，乐于奉献，得5分。      </p>
      <p style="margin: 10px">    2.认真履行岗位职责，认真执行教学计划，自觉遵守教学规范，认真备课上课，认真辅导学生；不在工作时间从事与教育、教学无关的活动，把主要时间和精力用于学校的教育、教学和科研工作,得5分。   </p>
      <p style="margin: 10px"> 3.服从学校工作安排，积极承担和认真完成管理、服务的责任，尽职尽责，得5分。</p>
      <p style="margin: 10px"> 4.关心爱护全体学生，尊重学生人格，平等、公正对待学生，对学生严慈相济，建立民主和谐的师生关系的,得2分。</p>
      <p style="margin: 10px"> 5.关心学生安全和身心健康，维护学生正当权益，危急时刻挺身而出保护学生安全；不体罚或变相体罚学生，不讽刺、挖苦、歧视学生，不放弃每一个学生，主动帮助和辅导学业有困难、生活有困难、心里有困惑和行为有偏差学生的,得3分。</p></div>
    <div class="div11"><p style="margin: 10px">   迟到、早退、旷工经查实视情节扣5-20分；工作时擅自离开岗位经查实1次扣10分；疏于管理而造成学生伤害的经查实扣10分；不服从学校工作安排且无正当理由的扣10-20分。管理学生简单、粗暴等其他敷衍塞责的行为视情节扣5-10分。工作时间从事与工作无关活动的扣10-20分。发生工作责任事故的视情节扣5-20分。   </p> </div>
    <div class="div12"><p style="margin: 10px">   <el-input style="width: 100px" v-model.number="value2" :disabled=disable>   </el-input>   </p> </div>
    <div class="div13"><p style="margin: 10px">   教书育人（15分）   </p> </div>
    <div class="div14"><p style="margin: 10px">   1.全面实施素质教育，坚持因材施教，激发和培养学生创新精神和实践能力，促进学生全面和谐发展的,得5分。  </p>
      <p style="margin: 10px"> 2.坚持育人为本，德育为先，将德育渗透于教育教学工作中，培养学生良好品行，塑造学生健全人格的,得5分。。</p>
      <p style="margin: 10px">3.遵循教育教学规律，改进教育教学方法，精心组织课堂教学和实践教学活动，努力提高教育教学质量的,得3分。</p>
    <p style="margin: 10px">4.综合评价学生素质，客观评定学生操行，不以成绩作为评价学生的唯一标准的,得2分。</p></div>
    <div class="div15"><p style="margin: 10px">   有讽刺、挖苦、歧视、辱骂学生、体罚或变相体罚学生言行的，收到举报经查实每次扣10分或直接评价为不合格；对学生放松管理，由此引发事故的扣10分。   </p> </div>
    <div class="div16"><p>   <el-input style="width: 100px" v-model.number="value3" :disabled=disable>   </el-input>   </p> </div>
    <div class="div17"><p style="margin: 10px">    为人师表（15分）  </p> </div>
    <div class="div18"><p style="margin: 10px">  1.学为人师，行为世范；遵守社会公德，积极参加社会公益活动,自觉抵制有损教师职业声誉的行为，得5分。</p>
      <p style="margin: 10px"> 2.切实维护人民教师的良好职业形象，文明执教，举止端庄，衣着得体，语言规范，不在课堂上使用通讯工具,得5分。</p>
      <p style="margin: 10px">3.作风正派，严于律己，廉洁从教，自觉抵制有偿家教，不以职务之便谋取私利的,得2分。</p>
      <p style="margin: 10px">  4.厉行勤俭节约，反对餐饮浪费，养成健康文明的生活方式，得3分。
      </p> </div>
    <div class="div19"><p style="margin: 10px">    在课堂上吸烟、接打手机经查实的1次扣10分；无节俭意识，浪费粮食、水电等行为1次扣10分。其他违反职业道德不良行为收到举报经查实视情节酌情扣分。违背团结协作的行为视情节酌情扣分。  </p> </div>
    <div class="div20"><p style="margin: 10px">   <el-input style="width: 100px" v-model.number="value4" :disabled=disable></el-input>   </p> </div>
    <div class="div21" ><p style="margin: 10px">严谨治学（20分）</p></div>
    <div class="div22" ><p style="margin: 10px">1.崇尚科学精神，树立终身学习理念，坚持求真务实和严谨自律的治学态度和学术精神，恪守学术道德，发扬优良学风的,得5分。</p>
      <p style="margin: 10px">2.热爱学习、善于学习，积极参加教学科研和学术研究，努力学习新知识、新技术，拓宽知识视野，更新知识结构，努力实践教育教学改革，不断提高自身思想素质和学识魅力的,得5分。</p>
      <p style="margin: 10px"> 3.潜心钻研业务，全面掌握专业知识，扎实教育教学基本功，不断提高专业素养和教育教学能力的,得5分。</p>
      <p style="margin: 10px">4.主动参与社会实践，自觉承担社会义务，积极提供专业服务，得5分。</p>
      </div>
    <div class="div23" ><p style="margin: 10px">
      无故未参加教研活动、培训学习1次扣10分。滥用学术资源和学术影响的，直接评价为不合格
    </p></div>
    <div class="div24" ><el-input style="margin: 10px" v-model.number="value5" :disabled=disable></el-input></div>
    <div class="div25" ><p style="margin: 10px">高校教师职业行为十项准则</p></div>
    <div class="div26" ><p style="margin: 10px">1.能熟记并严格遵守十项准则，进行常态化学习，做到应知应会，必会必做，坚守底线，得15分。</p>
      </div>
    <div class="div27" > <p style="margin: 10px">不能熟记扣15分；违反十项准则的直接评价为不合格。    </p></div>
    <div class="div28" ><el-input style="margin: 10px" v-model.number="value6" :disabled=disable></el-input></div>
    <el-form-item>
      <el-button type="primary"  :disabled=disable @click="next">
        下一个
      </el-button>
    </el-form-item>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref,reactive } from 'vue'
import { useCounterStore } from '@/stores/counter.js';
import { storeToRefs } from "pinia";
import { useRouter } from 'vue-router';
import { ElMessage,ElMessageBox } from 'element-plus'
let router=useRouter()
let disable=ref(false)
let store=useCounterStore()
const user=storeToRefs(store)
let value1 =ref()
let value2 =ref()
let value3 =ref()
let value4 =ref()
let value5 =ref()
let value6 =ref()

let idlist=ref()

let userdata=ref()
let todo=async () => {
  await axios.post("/api/getotherlist", {
    userid: user.data.value.userid,
    role: user.data.value.role,
    other:user.data.value.other,
    college: user.data.value.college
  }).then((res)=>{
    if(res.data.data.idlist==''){
      idlist.value= res.data.data.idlist
    }else {
      disable.value=true
    }


  })
}
let datalist = async ()=>{
  await todo()

  if (disable.value==false){
    await axios.post("/api/findbyid",{userid:idlist.value[0]}).then((res)=>{
      userdata.value=res.data.data[0]
      console.log(userdata.value)
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
  axios.post("/api/comment",{username:userdata.value.username,
    userid:userdata.value.userid,
    college:userdata.value.college,
    commentid:user.data.value.userid,
    commentname:user.data.value.username}).then((res)=>{
    axios.post("/api/addother",{other:user.data.value.other+1,userid:userdata.value.userid}).then(()=>{
      store.$patch((state)=>{
        state.data.other=user.data.value.other+1

      })
      ElMessage({
        message:"success",
        type:"success"
      })
      datalist()
    })
  })

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