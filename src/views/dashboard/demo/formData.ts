
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




export const columns  = [
  {
    title: '菜单名称',
    dataIndex: 'name',
    width: 250,
    align: 'left',
  },
  {
    title: '菜单类型',
    dataIndex: 'type',
    width: 80,
    customRender: ({ text }) => {
      // return useRender.renderDict(text, DICT_TYPE.SYSTEM_MENU_TYPE)
    },
  },
  {
    title: '图标',
    dataIndex: 'icon',
    width: 60,
    customRender: ({ record }) => {
      // return useRender.renderIcon(record.icon)
    },
  },
  {
    title: '排序',
    dataIndex: 'sort',
    width: 60,
  },
  {
    title: '权限标识',
    dataIndex: 'permission',
    width: 140,
  },
  {
    title: '组件路径',
    dataIndex: 'component',
    width: 140,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    customRender: ({ text }) => {
      // return useRender.renderDict(text, DICT_TYPE.COMMON_STATUS)
    },
  },
]
