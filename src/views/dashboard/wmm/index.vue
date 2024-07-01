<template>
    <div id="test">
    <BasicForm @register="registerForm">
        <template #localSearchs="{ model, field }">
            <DatePicker v-model:value="model[field]" picker="year" @change="handleChangeYear" />
        </template>
    </BasicForm>
    <Button type="primary" @click="validateForm">验证</Button>
    <Button @click="resetForm" color='success'>重置</Button>

    </div>
</template>
  
<script setup lang='ts'>
  import {  BasicForm,useForm } from '@/components/Form';
import { DatePicker } from 'ant-design-vue';
import { addKejian } from "../forms/formdatas"
const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
    labelWidth: 100,
    baseColProps: { span: 24 },
    schemas: addKejian,
    showActionButtonGroup: false,
});
const handleChangeYear = () => {

}
const validateForm = async () => {
    const data = await validate();
    console.log(data)
}

const resetForm = () => {
    resetFields()
}
</script>
  
<style>
  
</style>