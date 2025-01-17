import React from 'react';
import { Bar } from 'react-chartjs-2';

const GraphComponent = () => {
  const dataset = [
    {
        "tagId": "1",
        "name": "Start",
        "value": false
        },
        {
        "tagId": "2",
        "name": "No1PartsError",
        "value": false
        },
        {
        "tagId": "3",
        "name": "No1_Action",
        "value": false
        },
        {
        "tagId": "4",
        "name": "No2_Action",
        "value": false
        },
        {
        "tagId": "5",
        "name": "No3Ready",
        "value": false
        },
        {
        "tagId": "6",
        "name": "ColorSensor",
        "value": false
        },
        {
        "tagId": "8",
        "name": "Reset",
        "value": false
        },
        {
        "tagId": "9",
        "name": "no1_on_off",
        "value": true
        },
        {
        "tagId": "10",
        "name": "no2_on_off",
        "value": true
        },
        {
        "tagId": "11",
        "name": "no3_on_off",
        "value": true
        },
        {
        "tagId": "12",
        "name": "sensor1_on_off",
        "value": true
        },
        {
        "tagId": "13",
        "name": "sensor2_on_off",
        "value": true
        },
        {
        "tagId": "18",
        "name": "lamp_green",
        "value": true
        },
        {
        "tagId": "19",
        "name": "lamp_yellow",
        "value": false
        },
        {
        "tagId": "20",
        "name": "lamp_red",
        "value": false
        },
        {
        "tagId": "23",
        "name": "No1ChipFull",
        "value": true
        },
        {
        "tagId": "24",
        "name": "No2Chip",
        "value": false
        },
        {
        "tagId": "25",
        "name": "No2CubeFull",
        "value": false
        },
        {
        "tagId": "26",
        "name": "No2InPoint",
        "value": false
        },
        {
        "tagId": "27",
        "name": "No2OutPoint",
        "value": true
        },
        {
        "tagId": "28",
        "name": "No2Sol",
        "value": false
        },
        {
        "tagId": "29",
        "name": "No2SolAction",
        "value": false
        },
        {
        "tagId": "30",
        "name": "No2BackToSquare",
        "value": false
        },
        {
        "tagId": "31",
        "name": "No2Mode",
        "value": false
        },
        {
        "tagId": "32",
        "name": "No3Chip",
        "value": false
        },
        {
        "tagId": "33",
        "name": "VisionCmdMemory",
        "value": false
        },
        {
        "tagId": "35",
        "name": "Emergency",
        "value": true
        },
        {
        "tagId": "39",
        "name": "ColorSensorSensing",
        "value": false
        },
        {
        "tagId": "40",
        "name": "No3Gripper",
        "value": false
        },
        {
        "tagId": "7",
        "name": "VisionSensor",
        "value": "0"
        },
        {
        "tagId": "14",
        "name": "No1Delay",
        "value": "5"
        },
        {
        "tagId": "15",
        "name": "No1Count",
        "value": "0"
        },
        {
        "tagId": "16",
        "name": "No2Count",
        "value": "0"
        },
        {
        "tagId": "17",
        "name": "No3Count",
        "value": "0"
        },
        {
        "tagId": "21",
        "name": "No3Motor1",
        "value": "0"
        },
        {
        "tagId": "22",
        "name": "No3Motor2",
        "value": "0"
        },
        {
        "tagId": "34",
        "name": "No3DiceReading",
        "value": "0"
        },
        {
        "tagId": "36",
        "name": "OutputLimit",
        "value": "3"
        },
        {
        "tagId": "37",
        "name": "DiceValue",
        "value": "6"
        }, 
        {
        "tagId": "38",
        "name": "DiceComparisonValue",
        "value": "0"
        },
        {
        "tagId": "0",
        "name": "DataTime",
        "value": "2023-07-28T11:02:09.567Z"
        }
  ];



  const no1ActionValue = dataset.find(item => item.name === 'No1_Action')?.value;
  const no2ActionValue = dataset.find(item => item.name === 'No2_Action')?.value;
  const no3ReadyValue = dataset.find(item => item.name === 'No3Ready')?.value;

  const chartData = {
    labels: ['No.1 Action', 'No.2 Action', 'No.3 Ready'],
    datasets: [{
      label: '# of On/Off',
      data: [no1ActionValue ? 1 :0, no2ActionValue ? 1 :0, no3ReadyValue ? 1 :0],
      backgroundColor: [
        no1ActionValue ? 'green' : 'red',
        no2ActionValue ? 'green' : 'red',
        no3ReadyValue?'green':'red'
     ],
   }]
 };

 return(
   <div>
     <Bar 
       data={chartData}
       options={{
         scales: {
           y: {   // Chart.js 버전이 업데이트되면서 yAxes 대신 y를 사용합니다.
             ticks: {
               beginAtZero:true,
               maxTicksLimit:10,
               stepSize:.5,
               max:1
             }
           }
         }
       }}
     />
   </div>
 );
};

export default GraphComponent;