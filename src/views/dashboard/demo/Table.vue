<template>
  <div class="p-4">
    <BasicTable @register="registerTable" >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'mores'">
          <Button size="small" type="primary" @click="handleRemove(record, column)"> 删除</Button>
          <Button size="small" color="success"> 成功</Button>
          <Button size="small" color="warning"> 删除</Button>
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts" setup>
import { useTable ,BasicTable} from '@/components/Table';
import { searchFormSchema,columns } from "./formData"
import treeJson from './tree'
const demoListApi = () => {
  return new Promise((resolve) => {
  resolve(treeJson)
  })
}

const resetFuncs = async () => {
  return new Promise(resolve => {
    resolve('success')
  })
}

 const handleTree=(data: any[], id?: string, parentId?: string, children?: string)=>{
  if (!Array.isArray(data)) {
    console.warn('data must be an array')
    return []
  }
  const config = {
    id: id || 'id',
    parentId: parentId || 'parentId',
    childrenList: children || 'children',
  }

  const childrenListMap = {}
  const nodeIds = {}
  const tree: any[] = []

  for (const d of data) {
    const parentId = d[config.parentId]
    if (childrenListMap[parentId] == null)
      childrenListMap[parentId] = []

    nodeIds[d[config.id]] = d
    childrenListMap[parentId].push(d)
  }

  for (const d of data) {
    const parentId = d[config.parentId]
    if (nodeIds[parentId] == null)
      tree.push(d)
  }

  for (const t of tree)
    adaptToChildrenList(t)

  function adaptToChildrenList(o) {
    if (childrenListMap[o[config.id]] !== null)
      o[config.childrenList] = childrenListMap[o[config.id]]

    if (o[config.childrenList]) {
      for (const c of o[config.childrenList])
        adaptToChildrenList(c)
    }
  }
  return tree
}

const getList =async()=>{
  const list =await demoListApi();
  return handleTree(list as any[],'id')
}
const [registerTable] = useTable({
  title: 'TableAction组件及固定列示例',
  api: getList,
  columns: columns,
  bordered: true,
  isTreeTable:true,
  formConfig: {
    labelWidth: 120,
    schemas: searchFormSchema,
    autoSubmitOnEnter: true,
    showAdvancedButton: true,
    autoAdvancedLine: 4,
    showSubmitButton: false,
    resetFunc: resetFuncs,

  },
  useSearchForm: true,
  showTableSetting: true,
  // actionColumn: {
  //   width: 250,
  //   title: 'Action',
  //   dataIndex: 'action',
  //   // slots: { customRender: 'action' },
  // },
});
function handleRemove(record: Recordable, column) {
  console.log('点击了编辑', record);
  console.log('点击了编辑 column', column);
}


</script>