<template>
  <div id="index">
    <Title name="设置主题色"></Title>
    <div class="color-container">
      <div v-for="(value, key) in themeList" class='color-container-item'>
        {{ key }} <ColorPicker format="hex" v-model:pureColor="themeList[key]"></ColorPicker>
        {{ value }}
      </div>
    </div>

    <Title name="按钮"></Title>
    <a-space wrap>
      <a-button type="primary">Primary Button</a-button>
      <a-button danger>Primary Button</a-button>
      <a-button>Default Button</a-button>
      <a-button type="dashed">Dashed Button</a-button>
      <a-button type="text">Text Button</a-button>
      <a-button type="link">Link Button</a-button>
      <Button color="success">成功按钮</Button>
      <Button color="error">错误按钮</Button>
      <Button color="warning">警告按钮</Button>
    </a-space>

    <Title name="警告提示"></Title>
    <a-alert style="width: 50%;margin-bottom: 20px;" message="Success Text" type="success" />
    <a-alert style="width: 50%;margin-bottom: 20px;" message="Info Text" type="info" />
    <a-alert style="width: 50%;margin-bottom: 20px;" message="Warning Text" type="warning" />
    <a-alert style="width: 50%;margin-bottom: 20px;" message="Error Text" type="error" />


    <Title name="提示"></Title>
    <a-button class="mr-20" @click="message.info('这是primary的提示')" type="primary">Primary</a-button>
    <a-button class="mr-20" @click="message.success('这是success的提示')">success</a-button>
    <a-button class="mr-20" @click="message.error('这是error的提示')">error</a-button>
    <a-button class="mr-20" @click="message.warning('这是warning的提示')">warning</a-button>

    <Title name="模态框"></Title>
    <a-button class="mr-20" @click="info">Info</a-button>
    <a-button class="mr-20" @click="success">Success</a-button>
    <a-button class="mr-20" @click="error">Error</a-button>
    <a-button class="mr-20" @click="warning">Warning</a-button>

    <Title name="通知提醒框"></Title>
    <a-space>
      <a-button type="primary" @click="() => open('topLeft')">
        <RadiusUpleftOutlined />
        topLeft
      </a-button>
      <a-button type="primary" @click="() => open('topRight')">
        <RadiusUprightOutlined />
        topRight
      </a-button>
    </a-space>
    <a-divider />
    <a-space>
      <a-button type="primary" @click="() => open('bottomLeft')">
        <RadiusBottomleftOutlined />
        bottomLeft
      </a-button>
      <a-button type="primary" @click="() => open('bottomRight')">
        <RadiusBottomrightOutlined />
        bottomRight
      </a-button>
    </a-space>
    <contextHolder />


    <Title name="导航"></Title>

    模式调整：<a-switch v-model:checked="themeChecked" />
    <a-menu id="dddddd" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" style="width: 256px"
      :theme="themeChecked ? 'light' : 'dark'" mode="inline" :items="items" @click="handleClick"></a-menu>


    <Title name="下拉菜单"></Title>
    <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent>
        Hover me
        <DownOutlined />
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>



    <Title name="分页"></Title>
    <a-pagination v-model:current="current1" show-quick-jumper :total="500" @change="onChange" />



    <Title name="步骤条"></Title>
    <a-steps :current="1" :items="[
      {
        title: 'Finished',
        description: 'This is a description.'
      },
      {
        title: 'In Progress',
        description: 'This is a description.',
        subTitle: 'Left 00:00:08'
      },
      {
        title: 'Waiting',
        description: 'This is a description.'
      },
    ]"></a-steps>



    <Title name="级联选择"></Title>
    <a-cascader v-model:value="casvalue" :options="casoptions" placeholder="Please select" />


    <Title name="多选框"></Title>
    <a-checkbox v-model:checked="state.checkAll" :indeterminate="state.indeterminate" @change="onCheckAllChange">
      Check all
    </a-checkbox>
    <a-checkbox-group v-model:value="state.checkedList" :options="plainOptions" />

    <Title name="日期选择框"></Title>
    <a-date-picker v-model:value="datavalue" />

    <Title name="表单"></Title>
    <a-form ref="formRef" :model="formState" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item ref="name" label="Activity name" name="name">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item label="Activity zone" name="region">
        <a-select v-model:value="formState.region" placeholder="please select your zone">
          <a-select-option value="shanghai">Zone one</a-select-option>
          <a-select-option value="beijing">Zone two</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Activity time" required name="date1">
        <a-date-picker v-model:value="formState.date1" show-time type="date" placeholder="Pick a date"
          style="width: 100%" />
      </a-form-item>
      <a-form-item label="Instant delivery" name="delivery">
        <a-switch v-model:checked="formState.delivery" />
      </a-form-item>
      <a-form-item label="Activity type" name="type">
        <a-checkbox-group v-model:value="formState.type">
          <a-checkbox value="1" name="type">Online</a-checkbox>
          <a-checkbox value="2" name="type">Promotion</a-checkbox>
          <a-checkbox value="3" name="type">Offline</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item label="Resources" name="resource">
        <a-radio-group v-model:value="formState.resource">
          <a-radio value="1">Sponsor</a-radio>
          <a-radio value="2">Venue</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="Activity form" name="desc">
        <a-textarea v-model:value="formState.desc" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">Create</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
      </a-form-item>
    </a-form>

    <Title name="表格"></Title>
    <Table></Table>

    <div class="block"></div>

  </div>

</template>

<script setup lang='ts'>
import { reactive, ref, VueElement, h, watch, toRaw } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { message, Modal, NotificationPlacement, notification } from 'ant-design-vue';
import { Button } from '@/components/Button';
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import Title from './Title.vue';
import theme from '@/assets/theme';
const selectedKeys = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);
const themeList = ref(theme)
function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: any[],
  type?: 'group',
): any {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as any;
}

const items: any[] = reactive([
  getItem('Navigation One', 'sub1', () => h(MailOutlined), [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),

  getItem('Navigation Two', 'sub2', () => h(AppstoreOutlined), [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),

  { type: 'divider' },

  getItem('Navigation Three', 'sub4', () => h(SettingOutlined), [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),

  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
]);

const handleClick: any['onClick'] = e => {
  console.log('click', e);
};
const themeChecked = ref(false)
const current1 = ref<number>(1);
const onChange = (pageNumber: number) => {
  console.log('Page: ', pageNumber);
};

const casoptions = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const casvalue = ref<string[]>([]);

const plainOptions = ['Apple', 'Pear', 'Orange'];
const state = reactive({
  indeterminate: true,
  checkAll: false,
  checkedList: ['Apple', 'Orange'],
});

const onCheckAllChange = (e: any) => {
  Object.assign(state, {
    checkedList: e.target.checked ? plainOptions : [],
    indeterminate: false,
  });
};

const datavalue = ref();


const formRef = ref();
const labelCol = { span: 5 };
const wrapperCol = { span: 13 };
const formState = reactive({
  name: '',
  region: undefined,
  date1: undefined,
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});
const rules = {
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'change' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
  date1: [{ required: true, message: 'Please pick a date', trigger: 'change', type: 'object' }],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
  desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
};
const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('values', formState, toRaw(formState));
    })
    .catch(error => {
      console.log('error', error);
    });
};
const resetForm = () => {
  formRef.value.resetFields();
};
watch(
  () => state.checkedList,
  val => {
    state.indeterminate = !!val.length && val.length < plainOptions.length;
    state.checkAll = val.length === plainOptions.length;
  },
);


const info = () => {
  Modal.info({
    title: 'This is a notification message',
    content: h('div', {}, [
      h('p', 'some messages...some messages...'),
      h('p', 'some messages...some messages...'),
    ]),
    onOk() {
      console.log('ok');
    },
  });
};
const success = () => {
  Modal.success({
    title: 'This is a success message',
    content: h('div', {}, [
      h('p', 'some messages...some messages...'),
      h('p', 'some messages...some messages...'),
    ]),
  });
};

const error = () => {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
};

const warning = () => {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
};

const [api, contextHolder] = notification.useNotification();
const open = (placement: NotificationPlacement) => openNotification(placement);
const openNotification = (placement: NotificationPlacement) => {
  api.info({
    message: `Notification ${placement}`,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement,
  });
};




</script>

<style lang="less" scoped>
#index {
  width: calc(100vw - 210px);
  height: 91.5vh;
  overflow: auto;
  padding: 0 40px;
  box-sizing: border-box
}

.block {
  width: calc(100vw - 210px);
  height: 20vh;
}

.mr-20 {
  margin-right: 20px;
}

.color-container {
  width: calc(100vw - 210px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 20px 100px;
  box-sizing: border-box;

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center
  }
}
</style>