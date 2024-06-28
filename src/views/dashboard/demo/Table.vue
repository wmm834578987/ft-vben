<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }" >
        <TableAction :actions="[
          {
            label: '编辑',
            onClick: handleEdit.bind(null, record),
            auth: 'other', // 根据权限控制是否显示: 无权限，不显示
          },
          {
            label: '删除',
            icon: 'ic:outline-delete-outline',
            onClick: handleDelete.bind(null, record),
            auth: 'super', // 根据权限控制是否显示: 有权限，会显示
          },
        ]" 
        :dropDownActions="[
          {
            label: '启用',
            popConfirm: {
              title: '是否启用？',
              confirm: handleOpen.bind(null, record),
            },
            ifShow: (_action) => {
              return record.status !== 'enable'; // 根据业务控制是否显示: 非enable状态的不显示启用按钮
            },
          },
          {
            label: '禁用',
            popConfirm: {
              title: '是否禁用？',
              confirm: handleOpen.bind(null, record),
            },
            ifShow: () => {
              return record.status === 'enable'; // 根据业务控制是否显示: enable状态的显示禁用按钮
            },
          },
          {
            label: '同时控制',
            popConfirm: {
              title: '是否动态显示？',
              confirm: handleOpen.bind(null, record),
            },
            auth: 'super', // 同时根据权限和业务控制是否显示
            ifShow: () => {
              return true; // 根据业务控制是否显示
            },
          },
        ]" />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {  useTable, BasicColumn, TableAction } from '@/components/Table';





const demoListApi =()=>{
 return new Promise((resolve)=>{
    resolve({
    "total": 1063,
    "current": 1,
    "size": 10,
    "code": 0,
    "list": [
        {
            "id": 1479,
            "classType": "创新",
            "kjType": "S",
            "lecture": 6,
            "year": "2024",
            "location": null,
            "subject": "数学",
            "grade": "G1",
            "lectureName": "美食总动员",
            "version": "1.1",
            "count": null,
            "challengeId": 30,
            "challengeName": "减法算式",
            "edition": "TEA",
            "type": 0,
            "typeName": "正式课-长期班",
            "uploadStatus": 1,
            "courseType": 0,
            "lockStatus": 0,
            "isOnline": 1,
            "knowledgeName": "默认知识点",
            "editTime": null,
            "keJianUrl": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId=1479&names=0&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODgiLCJUYWciOiJSRUZfVE9LRU4iLCJVVUlEIjoiNzE3NzllMDAtYjM4NS00NTQ2LWJjYTEtODY1Y2MzM2JiYTgzIiwiZXhwIjoxNzE3MDYxOTY1LCJhY2NvdW50IjoiMTgzMjYwOTkwMjcifQ.KljdpJXk4nYntBqRNPXAJF2wWdvVEXIWSDiAo81LMj0",
            "keJianNamesUrl": null,
            "editStatus": null,
            "feedbackCount": 0,
            "feedbackTime": null,
            "feedbackStatus": 0,
            "topSort": 1,
            "urlType": 1,
            "url": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId="
        },
        {
            "id": 1390,
            "classType": "培优",
            "kjType": "S",
            "lecture": 11,
            "year": "2024",
            "location": null,
            "subject": "英语",
            "grade": "G1",
            "lectureName": "My family",
            "version": "1.0",
            "count": null,
            "challengeId": null,
            "challengeName": null,
            "edition": "TEA",
            "type": 0,
            "typeName": "正式课-长期班",
            "uploadStatus": 1,
            "courseType": 0,
            "lockStatus": 0,
            "isOnline": 1,
            "knowledgeName": "英语题目",
            "editTime": null,
            "keJianUrl": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId=1390&names=0&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODgiLCJUYWciOiJSRUZfVE9LRU4iLCJVVUlEIjoiNzE3NzllMDAtYjM4NS00NTQ2LWJjYTEtODY1Y2MzM2JiYTgzIiwiZXhwIjoxNzE3MDYxOTY1LCJhY2NvdW50IjoiMTgzMjYwOTkwMjcifQ.KljdpJXk4nYntBqRNPXAJF2wWdvVEXIWSDiAo81LMj0",
            "keJianNamesUrl": null,
            "editStatus": null,
            "feedbackCount": 0,
            "feedbackTime": null,
            "feedbackStatus": 0,
            "topSort": 1,
            "urlType": 1,
            "url": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId="
        },
        {
            "id": 1389,
            "classType": "培优",
            "kjType": "S",
            "lecture": 10,
            "year": "2024",
            "location": null,
            "subject": "英语",
            "grade": "G1",
            "lectureName": "My family",
            "version": "1.0",
            "count": null,
            "challengeId": null,
            "challengeName": null,
            "edition": "TEA",
            "type": 0,
            "typeName": "正式课-长期班",
            "uploadStatus": 1,
            "courseType": 0,
            "lockStatus": 0,
            "isOnline": 1,
            "knowledgeName": "英语题目",
            "editTime": null,
            "keJianUrl": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId=1389&names=0&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODgiLCJUYWciOiJSRUZfVE9LRU4iLCJVVUlEIjoiNzE3NzllMDAtYjM4NS00NTQ2LWJjYTEtODY1Y2MzM2JiYTgzIiwiZXhwIjoxNzE3MDYxOTY1LCJhY2NvdW50IjoiMTgzMjYwOTkwMjcifQ.KljdpJXk4nYntBqRNPXAJF2wWdvVEXIWSDiAo81LMj0",
            "keJianNamesUrl": null,
            "editStatus": null,
            "feedbackCount": 0,
            "feedbackTime": null,
            "feedbackStatus": 0,
            "topSort": 1,
            "urlType": 1,
            "url": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId="
        },
        {
            "id": 1388,
            "classType": "培优",
            "kjType": "S",
            "lecture": 9,
            "year": "2024",
            "location": null,
            "subject": "英语",
            "grade": "G1",
            "lectureName": "Where’s Monty?",
            "version": "1.0",
            "count": null,
            "challengeId": null,
            "challengeName": null,
            "edition": "TEA",
            "type": 0,
            "typeName": "正式课-长期班",
            "uploadStatus": 1,
            "courseType": 0,
            "lockStatus": 0,
            "isOnline": 1,
            "knowledgeName": "英语题目",
            "editTime": null,
            "keJianUrl": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId=1388&names=0&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODgiLCJUYWciOiJSRUZfVE9LRU4iLCJVVUlEIjoiNzE3NzllMDAtYjM4NS00NTQ2LWJjYTEtODY1Y2MzM2JiYTgzIiwiZXhwIjoxNzE3MDYxOTY1LCJhY2NvdW50IjoiMTgzMjYwOTkwMjcifQ.KljdpJXk4nYntBqRNPXAJF2wWdvVEXIWSDiAo81LMj0",
            "keJianNamesUrl": null,
            "editStatus": null,
            "feedbackCount": 0,
            "feedbackTime": null,
            "feedbackStatus": 0,
            "topSort": 1,
            "urlType": 1,
            "url": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId="
        },
        {
            "id": 1387,
            "classType": "培优",
            "kjType": "S",
            "lecture": 8,
            "year": "2024",
            "location": null,
            "subject": "英语",
            "grade": "G1",
            "lectureName": "Where’s the ball?",
            "version": "1.0",
            "count": null,
            "challengeId": null,
            "challengeName": null,
            "edition": "TEA",
            "type": 0,
            "typeName": "正式课-长期班",
            "uploadStatus": 1,
            "courseType": 0,
            "lockStatus": 0,
            "isOnline": 1,
            "knowledgeName": "英语题目",
            "editTime": null,
            "keJianUrl": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId=1387&names=0&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODgiLCJUYWciOiJSRUZfVE9LRU4iLCJVVUlEIjoiNzE3NzllMDAtYjM4NS00NTQ2LWJjYTEtODY1Y2MzM2JiYTgzIiwiZXhwIjoxNzE3MDYxOTY1LCJhY2NvdW50IjoiMTgzMjYwOTkwMjcifQ.KljdpJXk4nYntBqRNPXAJF2wWdvVEXIWSDiAo81LMj0",
            "keJianNamesUrl": null,
            "editStatus": null,
            "feedbackCount": 0,
            "feedbackTime": null,
            "feedbackStatus": 0,
            "topSort": 1,
            "urlType": 1,
            "url": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId="
        },
        {
            "id": 1386,
            "classType": "培优",
            "kjType": "S",
            "lecture": 7,
            "year": "2024",
            "location": null,
            "subject": "英语",
            "grade": "G1",
            "lectureName": "My toys",
            "version": "1.0",
            "count": null,
            "challengeId": null,
            "challengeName": null,
            "edition": "TEA",
            "type": 0,
            "typeName": "正式课-长期班",
            "uploadStatus": 1,
            "courseType": 0,
            "lockStatus": 0,
            "isOnline": 1,
            "knowledgeName": "英语题目",
            "editTime": null,
            "keJianUrl": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId=1386&names=0&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODgiLCJUYWciOiJSRUZfVE9LRU4iLCJVVUlEIjoiNzE3NzllMDAtYjM4NS00NTQ2LWJjYTEtODY1Y2MzM2JiYTgzIiwiZXhwIjoxNzE3MDYxOTY1LCJhY2NvdW50IjoiMTgzMjYwOTkwMjcifQ.KljdpJXk4nYntBqRNPXAJF2wWdvVEXIWSDiAo81LMj0",
            "keJianNamesUrl": null,
            "editStatus": null,
            "feedbackCount": 0,
            "feedbackTime": null,
            "feedbackStatus": 0,
            "topSort": 1,
            "urlType": 1,
            "url": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId="
        },
        {
            "id": 1385,
            "classType": "培优",
            "kjType": "S",
            "lecture": 6,
            "year": "2024",
            "location": null,
            "subject": "英语",
            "grade": "G1",
            "lectureName": "My school",
            "version": "1.0",
            "count": null,
            "challengeId": null,
            "challengeName": null,
            "edition": "TEA",
            "type": 0,
            "typeName": "正式课-长期班",
            "uploadStatus": 1,
            "courseType": 0,
            "lockStatus": 0,
            "isOnline": 1,
            "knowledgeName": "英语题目",
            "editTime": null,
            "keJianUrl": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId=1385&names=0&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODgiLCJUYWciOiJSRUZfVE9LRU4iLCJVVUlEIjoiNzE3NzllMDAtYjM4NS00NTQ2LWJjYTEtODY1Y2MzM2JiYTgzIiwiZXhwIjoxNzE3MDYxOTY1LCJhY2NvdW50IjoiMTgzMjYwOTkwMjcifQ.KljdpJXk4nYntBqRNPXAJF2wWdvVEXIWSDiAo81LMj0",
            "keJianNamesUrl": null,
            "editStatus": null,
            "feedbackCount": 0,
            "feedbackTime": null,
            "feedbackStatus": 0,
            "topSort": 1,
            "urlType": 1,
            "url": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId="
        },
        {
            "id": 1384,
            "classType": "培优",
            "kjType": "S",
            "lecture": 5,
            "year": "2024",
            "location": null,
            "subject": "英语",
            "grade": "G1",
            "lectureName": "Let’s colour",
            "version": "1.0",
            "count": null,
            "challengeId": null,
            "challengeName": null,
            "edition": "TEA",
            "type": 0,
            "typeName": "正式课-长期班",
            "uploadStatus": 1,
            "courseType": 0,
            "lockStatus": 1,
            "isOnline": 1,
            "knowledgeName": "英语题目",
            "editTime": null,
            "keJianUrl": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId=1384&names=0&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODgiLCJUYWciOiJSRUZfVE9LRU4iLCJVVUlEIjoiNzE3NzllMDAtYjM4NS00NTQ2LWJjYTEtODY1Y2MzM2JiYTgzIiwiZXhwIjoxNzE3MDYxOTY1LCJhY2NvdW50IjoiMTgzMjYwOTkwMjcifQ.KljdpJXk4nYntBqRNPXAJF2wWdvVEXIWSDiAo81LMj0",
            "keJianNamesUrl": null,
            "editStatus": null,
            "feedbackCount": 0,
            "feedbackTime": null,
            "feedbackStatus": 0,
            "topSort": 1,
            "urlType": 1,
            "url": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId="
        },
        {
            "id": 1383,
            "classType": "培优",
            "kjType": "S",
            "lecture": 4,
            "year": "2024",
            "location": null,
            "subject": "英语",
            "grade": "G1",
            "lectureName": "The rainbow",
            "version": "1.0",
            "count": null,
            "challengeId": null,
            "challengeName": null,
            "edition": "TEA",
            "type": 0,
            "typeName": "正式课-长期班",
            "uploadStatus": 1,
            "courseType": 0,
            "lockStatus": 1,
            "isOnline": 1,
            "knowledgeName": "英语题目",
            "editTime": null,
            "keJianUrl": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId=1383&names=0&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODgiLCJUYWciOiJSRUZfVE9LRU4iLCJVVUlEIjoiNzE3NzllMDAtYjM4NS00NTQ2LWJjYTEtODY1Y2MzM2JiYTgzIiwiZXhwIjoxNzE3MDYxOTY1LCJhY2NvdW50IjoiMTgzMjYwOTkwMjcifQ.KljdpJXk4nYntBqRNPXAJF2wWdvVEXIWSDiAo81LMj0",
            "keJianNamesUrl": null,
            "editStatus": null,
            "feedbackCount": 0,
            "feedbackTime": null,
            "feedbackStatus": 0,
            "topSort": 1,
            "urlType": 1,
            "url": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId="
        },
        {
            "id": 1382,
            "classType": "培优",
            "kjType": "S",
            "lecture": 3,
            "year": "2024",
            "location": null,
            "subject": "英语",
            "grade": "G1",
            "lectureName": "My friends",
            "version": "1.0",
            "count": null,
            "challengeId": null,
            "challengeName": null,
            "edition": "TEA",
            "type": 0,
            "typeName": "正式课-长期班",
            "uploadStatus": 1,
            "courseType": 0,
            "lockStatus": 0,
            "isOnline": 1,
            "knowledgeName": "英语题目",
            "editTime": null,
            "keJianUrl": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId=1382&names=0&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODgiLCJUYWciOiJSRUZfVE9LRU4iLCJVVUlEIjoiNzE3NzllMDAtYjM4NS00NTQ2LWJjYTEtODY1Y2MzM2JiYTgzIiwiZXhwIjoxNzE3MDYxOTY1LCJhY2NvdW50IjoiMTgzMjYwOTkwMjcifQ.KljdpJXk4nYntBqRNPXAJF2wWdvVEXIWSDiAo81LMj0",
            "keJianNamesUrl": null,
            "editStatus": null,
            "feedbackCount": 0,
            "feedbackTime": null,
            "feedbackStatus": 0,
            "topSort": 1,
            "urlType": 1,
            "url": "https://app.thinkworldpro.com/get/url/kejian/Courseware2.0/index.html?type=test&kjId="
        }
    ]
})
})
}

const columns: BasicColumn[] = [
  {
    title: '课件ID',
    dataIndex: 'id',
    width: '100px',
  },
  {
    title: '年份',
    dataIndex: 'year',
    sorter: true,
    width: '100px',
  },
  {
    title: '地区',
    dataIndex: 'edition',
    width: '100px',
  },
  {
    title: '类型',
    dataIndex: 'typeName',
    width: '120px',
    customRender: ({ text, record }) => {
      //return text == 0 ? '正式课' : text == 1 ? '公开课' : '入学测';
    },
  },
  {
    title: '季度',
    dataIndex: 'kjType',
    width: '100px',
    customRender: ({ text, record }) => {
      let showstxt = '';
      if (text == 'C1') {
        showstxt = '春上';
      } else if (text == 'C2') {
        showstxt = '春下';
      } else if (text == 'S') {
        showstxt = '夏季';
      } else if (text == 'Q1') {
        showstxt = '秋上';
      } else if (text == 'Q2') {
        showstxt = '秋下';
      } else if (text == 'H') {
        showstxt = '冬季';
      }
      return showstxt;
    },
  },
  {
    title: '年级',
    dataIndex: 'grade',
    sorter: true,
    width: '100px',
    customRender: ({ text, record }) => {
      let showsGrade = '';
      if (text == 'G0') {
        showsGrade = '幼大班';
      } else if (text == 'G1') {
        showsGrade = '一年级';
      } else if (text == 'G2') {
        showsGrade = '二年级';
      } else if (text == 'G3') {
        showsGrade = '三年级';
      } else if (text == 'G4') {
        showsGrade = '四年级';
      } else if (text == 'G5') {
        showsGrade = '五年级';
      } else if (text == 'G6') {
        showsGrade = '六年级';
      }
      return showsGrade;
    },
  },
  {
    title: '讲次',
    dataIndex: 'lecture',
    sorter: true,
    width: '100px',
  },
  {
    title: '班型',
    dataIndex: 'classType',
    sorter: true,
    width: '100px',
  },
  {
    title: '状态',
    dataIndex: 'lockStatus',
    sorter: true,
  },
  {
    title: '课件名称',
    dataIndex: 'lectureName',
  },
  {
    title: '知识点名称',
    dataIndex: 'knowledgeName',
  },
  {
    title: '反馈',
    dataIndex: 'feedbackCount',
    sorter: true,
    width: '100px',
  },
  {
    title: '详情',
    dataIndex: 'details',
    width: '100px',
  },
  {
    title: '动手挑战',
    dataIndex: 'challenge',
    width: '100px',
  },
  {
    title: '题目表',
    dataIndex: 'timuList',
    width: '100px',
  },
  {
    title: '更多操作',
    dataIndex: 'mores',
    width: '100px',
  },
];
export default defineComponent({
  components: { TableAction },
  setup() {
    const [registerTable] = useTable({
      title: 'TableAction组件及固定列示例',
      api: demoListApi,
      columns: columns,
      bordered: true,
      actionColumn: {
        width: 250,
        title: 'Action',
        dataIndex: 'action',
        slots: { customRender: 'action' },
      },
    });
    function handleEdit(record: Recordable) {
      console.log('点击了编辑', record);
    }
    function handleDelete(record: Recordable) {
      console.log('点击了删除', record);
    }
    function handleOpen(record: Recordable) {
      console.log('点击了启用', record);
    }
    return {
      registerTable,
      handleEdit,
      handleDelete,
      handleOpen,
    };
  },
});
</script>