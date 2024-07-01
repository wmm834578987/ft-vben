
import { FormSchema } from '@/components/Table';
const apis =  async() => {
  return await new Promise(resolve => {
    resolve(
      [
        {
            "id": 23,
            "createTime": null,
            "updateTime": null,
            "label": "培优",
            "value": "培优",
            "type": 5,
            "isDeleted": 0
        },
        {
            "id": 24,
            "createTime": null,
            "updateTime": null,
            "label": "提高",
            "value": "提高",
            "type": 5,
            "isDeleted": 0
        },
        {
            "id": 25,
            "createTime": null,
            "updateTime": null,
            "label": "创新",
            "value": "创新",
            "type": 5,
            "isDeleted": 0
        },
        {
            "id": 26,
            "createTime": null,
            "updateTime": null,
            "label": "探索",
            "value": "探索",
            "type": 5,
            "isDeleted": 0
        },
        {
            "id": 27,
            "createTime": null,
            "updateTime": null,
            "label": "方田",
            "value": "方田",
            "type": 5,
            "isDeleted": 0
        }
    ]
    )
  })
}
const list =await apis();
export const addKejian: FormSchema[] = [
  {
    field: 'lectureName',
    label: '课件名称：',
    component: 'Input',
    componentProps: {
      maxlength: 50,
      showCount: true,
    },
    rules: [
      {
        required: true,
        message: '请输入',
        type: 'string',
      },
    ],
  },
  {
    field: 'knowledgeName',
    label: '知识点名称：',
    component: 'Input',
    show: false,
    componentProps: {
      maxlength: 50,
    },
    rules: [
      {
        required: true,
        message: '请输入知识点名称',
        type: 'string',
      },
    ],
  },
  {
    field: 'year',
    label: '年份：',
    component: 'DatePicker',
    slot: 'localSearchs',
    rules: [
      {
        required: true,
        message: '请选择',
      },
    ],
  },
  {
    field: 'edition',
    label: '地区：',
    component: 'ApiSelect',
    componentProps: {
      api: "",
      params: {
        type: '0',
      },
      labelField: 'label',
      valueField: 'value',
      allowClear: false,
    },
    rules: [
      {
        required: true,
        message: '请选择',
      },
    ],
  },
  {
    field: 'type',
    label: '类型：',
    component: 'ApiSelect',
    componentProps: ({ tableAction, formModel, formActionType }) => {
      return {
        allowClear: false,
        api: "",
        params: {
          type: '1',
        },
        labelField: 'label',
        valueField: 'value',
        onChange: (e) => {
          const { updateSchema } = formActionType;
          if (String(e) == '1' || String(e) == '2') {
            updateSchema({
              field: 'lecture',
              ifShow: false,
            });
            updateSchema({
              field: 'classType',
              ifShow: false,
            });
          } else {
            updateSchema({
              field: 'lecture',
              ifShow: true,
            });
            updateSchema({
              field: 'classType',
              ifShow: true,
            });
          }
        },
      };
    },
    rules: [
      {
        required: true,
        message: '请选择',
      },
    ],
  },
  {
    field: 'kjType',
    label: '季度：',
    component: 'ApiSelect',
    componentProps: ({ tableAction, formModel, formActionType }) => {
      return {
        api: "",
        params: {
          type: '4',
        },
        labelField: 'label',
        valueField: 'value',
        allowClear: false,
      };
    },
    rules: [
      {
        required: true,
        message: '请选择',
      },
    ],
  },
  {
    field: 'grade',
    label: '年级：',
    component: 'ApiSelect',
    componentProps: {
      api: "",
      params: {
        type: '3',
      },
      labelField: 'label',
      valueField: 'value',
      allowClear: false,
    },
    rules: [
      {
        required: true,
        message: '请选择',
      },
    ],
  },
  {
    field: 'lecture',
    label: '讲次：',
    component: 'InputNumber',
    defaultValue: 1,
    componentProps: ({ tableAction, formModel, formActionType }) => {
      return {
        min: 1,
        //max: 30,
        onChange: (e) => {
          //const { reload, setPagination } = tableAction;
          // if (Number(e) > 30) {
          //   message.error('讲次不超过30');
          // } else {
          formModel.lecture = Number(e);
          // }

          //setPagination({ current: 1 });
          //reload();
        },
      };
    },
    rules: [
      {
        required: true,
        message: '请输入讲次',
      },
      {
        validator: (_, value) => {
          if (value > 30) {
            return Promise.reject('请输入1-30中的任意数');
          }
          return Promise.resolve();
        },
        trigger: 'change',
      },
    ],
  },
  {
    field: 'classType',
    label: '班型：',
    component: 'CheckboxGroup',
    componentProps: {
      options: list,
    },
    rules: [
      {
        required: true,
        message: '',
      },
    ],
  },
  {
    field: 'isOnline',
    label: '上线：',
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '是 ', value: 1 },
        { label: '否', value: 0 },
      ],
    },
    required: true,
  },
];