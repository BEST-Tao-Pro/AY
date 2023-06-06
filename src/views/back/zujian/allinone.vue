<template>
    <div id="echarts" style="width: 100%;height: 100%">

    </div>
</template>
<script setup>
import * as echarts from 'echarts';
import {onMounted} from 'vue'
import axios from 'axios'

onMounted(async ()=>{
  var data
  await axios.post("/api/allinone").then((res)=>{

    data=res.data
    console.log(data)
  })
  console.log(1)
/*
  var data = [
    {
      name: "连锁1班", //班级名称
      excellent: 1000, //优秀人数

      pass: "60", //及格人数
      failed: "58", //不及格人数
    },
    {
      name: "连锁2班", //班级名称
      excellent: "98", //优秀人数

      pass: "65", //及格人数
      failed: "52", //不及格人数
    },
    {
      name: "连锁3班", //班级名称
      excellent: "99", //优秀人数

      pass: "61", //及格人数
      failed: "40", //不及格人数
    },
    {
      name: "连锁4班", //班级名称
      excellent: "97", //优秀人数

      pass: "62", //及格人数
      failed: "47", //不及格人数
    },
  ];*/

  var dataList = [];
  var excellentdata = [];

  var passdata = [];
  var faileddata = [];

  var lengendData = ["优秀", "及格", "不及格"];
  data.forEach(function (item, index) {
    dataList.push(item.name);
    excellentdata.push(item.excellent);

    passdata.push(item.pass);
    faileddata.push(item.failed);
  });



  var myChart = echarts.init(document.getElementById('echarts'));
// 绘制图表
  myChart.setOption(

      {
        color: ["#0cb4d7", "#9acff9", "#80d5ac", ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: lengendData,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            name: "人数",
            type: "value",
          },
        ],
        yAxis: [
          {
            type: "category",
            data: dataList,
            axisLine: {
              show: true,
            },
            axisTick: {
              show: true,
            },
          },
        ],
        series: [
          {
            name: lengendData[0],
            type: "bar",
            barWidth: 24,
            data: excellentdata,
            itemStyle: {
              normal: {
                show: true,
                label: {
                  show: true,
                  textStyle: {
                    color: "#FFF",
                  },
                },
              },
            },
          },


          {
            name: lengendData[1],
            type: "bar",
            barWidth: 24,
            data: passdata,
            itemStyle: {
              normal: {
                show: true,
                label: {
                  show: true,
                  textStyle: {
                    color: "#FFF",
                  },
                },
              },
            },
          },
          {
            name: lengendData[2],
            type: "bar",
            barWidth: 24,
            data: faileddata,
            itemStyle: {
              normal: {
                show: true,
                label: {
                  show: true,
                  textStyle: {
                    color: "#FFF",
                  },
                },
              },
            },
          },
        ],
      }
  );

})


</script>