
import { message } from "ant-design-vue/lib";
const cols = {
  xxl: 6,
  xl: 12,
};
export const searchFormSchema = [
  {
    field: 'year',
    label: '年份',
    slot: 'localSearch',
    colProps: cols,
  },
  {
    field: 'edition',
    label: '地区',
    component: 'ApiSelect',
    componentProps: ({ schema, tableAction, formActionType, formModel }) => {
      return {
        api: "",
        params: {
          type: '0',
        },
        labelField: 'label',
        valueField: 'value',
        onChange: (e) => {
          formModel.edition = e;
          if (tableAction !== undefined) {
            const { reload, setPagination } = tableAction;
            setPagination({ current: 1 });
            reload();
          }
        },
      };
    },
    colProps: cols,
  },
  {
    field: 'type',
    label: '类型',
    component: 'ApiSelect',
    componentProps: ({ schema, tableAction, formActionType, formModel }) => {
      return {
        api: "",
        params: {
          type: '1',
        },
        labelField: 'label',
        valueField: 'value',
        onChange: (e) => {
          formModel.type = e;
          if (tableAction !== undefined) {
            const { reload, setPagination } = tableAction;
            setPagination({ current: 1 });
            reload();
          }
        },
      };
    },
    colProps: cols,
  },
  {
    field: 'kjType',
    label: '季度',
    component: 'ApiSelect',
    componentProps: ({ schema, tableAction, formActionType, formModel }) => {
      return {
        api: "",
        params: {
          type: '4',
        },
        labelField: 'label',
        valueField: 'value',
        onChange: (e) => {
          formModel.kjType = e;
          if (tableAction !== undefined) {
            const { reload, setPagination } = tableAction;
            setPagination({ current: 1 });
            reload();
          }
        },
      };
    },
    colProps: cols,
  },
  {
    field: 'grade',
    label: '年级',
    component: 'ApiSelect',
    componentProps: ({ schema, tableAction, formActionType, formModel }) => {
      return {
        api: "",
        params: {
          type: '3',
        },
        labelField: 'label',
        valueField: 'value',
        onChange: (e) => {
          formModel.grade = e;
          if (tableAction !== undefined) {
            const { reload, setPagination } = tableAction;
            setPagination({ current: 1 });
            reload();
          }
        },
      };
    },
    colProps: cols,
  },
  {
    field: 'lecture',
    label: '讲次',
    component: 'InputNumber',
    colProps: cols,
    componentProps: ({ schema, tableAction, formActionType, formModel }) => {
      return {
        min: 1,
        max: 30,
        onKeydown: (e) => {
          if (e.keyCode == 13) {
            formModel.lecture = e.target.value;
            if (tableAction !== undefined) {
              const { reload, setPagination } = tableAction;
              setPagination({ current: 1 });
              reload();
            }
          }
          if (e.target.value > 31) {
            message.error('请输入1-30的数字');
          }
        },
      };
    },
  },
  {
    field: 'classType',
    label: '班型',
    component: 'ApiSelect',
    componentProps: ({ schema, tableAction, formActionType, formModel }) => {
      return {
        api: "",
        params: {
          type: '5',
        },
        labelField: 'label',
        valueField: 'value',
        onChange: (e) => {
          formModel.classType = e;
          if (tableAction !== undefined) {
            const { reload, setPagination } = tableAction;
            setPagination({ current: 1 });
            reload();
          }
        },
      };
    },
    colProps: cols,
  },
  {
    field: 'lockStatus',
    label: '状态',
    component: 'Select',
    componentProps: ({ schema, tableAction, formActionType, formModel }) => {
      return {
        options: [
          { label: '制作中', value: '0' },
          { label: '已锁定', value: '1' },
        ],
        onChange: (e) => {
          formModel.lockStatus = e;
          if (tableAction !== undefined) {
            const { reload, setPagination } = tableAction;
            setPagination({ current: 1 });
            reload();
          }
        },
      };
    },
    colProps: cols,
  },
  {
    field: 'isOnline',
    label: '上线',
    component: 'Select',
    componentProps: ({ schema, tableAction, formActionType, formModel }) => {
      return {
        options: [
          { label: '上线', value: '1' },
          { label: '未上线', value: '0' },
        ],
        onChange: (e) => {
          formModel.isOnline = e;
          if (tableAction !== undefined) {
            const { reload, setPagination } = tableAction;
            setPagination({ current: 1 });
            reload();
          }
        },
      };
    },
    colProps: cols,
  },
  {
    field: 'searchName',
    label: ' ',
    component: 'Input',
    colProps: cols,
    componentProps: ({ schema, tableAction, formActionType, formModel }) => {
      return {
        placeholder: '输入课件ID或名称查询',
        allowClear: false,
        maxlength: 50,
        showCount: true,
        onKeydown: (e) => {
          if (e.keyCode == 13) {
            formModel.searchName = e.target.value;
            if (tableAction !== undefined) {
              const { reload, setPagination } = tableAction;
              setPagination({ current: 1 });
              reload();
            }
          }
        },
      };
    },
  },
];


export const columns = [
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
    width: '300px',
  },
];