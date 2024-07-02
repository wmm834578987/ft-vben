<template>
    <div id="test">
    <BasicForm @register="registerForm">
        <template #localSearchs="{ model, field }">
            <DatePicker v-model:value="model[field]" picker="year" @change="handleChangeYear" />
        </template>

        <template #add="{ model,field }">
          <a-button v-if="Number(field) === 0" @click="add">+</a-button>
          <a-button class="ml-2" v-if="Number(field) === 0" @click="batchAdd">
            批量添加表单配置
          </a-button>
          <a-button v-if="Number(field) > 0" @click="() => del(field)">-</a-button>
        </template>
    </BasicForm>
    <Button type="primary" @click="validateForm">验证</Button>
    <Button @click="resetForm" color='success'>重置</Button>
    </div>
</template>
  
<script setup lang='ts'>
  import {  BasicForm,useForm } from '@/components/Form';
import { DatePicker } from 'ant-design-vue';
import { addKejian } from "./formdatas"
import { Button } from '@/components/Button'
const [registerForm, { resetFields, setFieldsValue, updateSchema, validate,appendSchemaByField, removeSchemaByField, }] = useForm({
    labelWidth: 100,
    baseColProps: { span: 24 },
    schemas: addKejian,
    showActionButtonGroup: false,
});
const n = ref(1);

const handleChangeYear = () => {

}
const validateForm = async () => {
    const data = await validate();
    console.log(data)
}

const resetForm = () => {
    resetFields()
}

function add() {
    appendSchemaByField(
      {
        field: `field${n.value}a`,
        component: 'Input',
        label: '字段' + n.value,
        required: true,
      },
      '',
    );
    appendSchemaByField(
      {
        field: `field${n.value}b`,
        component: 'Input',
        label: '字段' + n.value,
        required: true,
      },
      '',
    );

    appendSchemaByField(
      {
        field: `${n.value}`,
        component: 'Input',
        label: ' ',
        slot: 'add',
      },
      '',
    );
    n.value++;
  }
  function batchAdd() {
    appendSchemaByField(
      [
        {
          field: `field${n.value}a`,
          component: 'Input',
          label: '字段' + n.value,
          required: true,
        },
        {
          field: `field${n.value}b`,
          component: 'Input',
          label: '字段' + n.value,
          required: true,
        },
        {
          field: `${n.value}`,
          component: 'Input',
          label: ' ',
          slot: 'add',
        },
      ],
      '',
    );
    n.value++;
  }

  function del(field: string) {
    removeSchemaByField([`field${field}a`, `field${field}b`, `${field}`]);
    n.value--;
  }

</script>
  
<style>
  
</style>