export const dataHeader = [
    {
        type: "selection", //渲染的表格行内数据类型
        label: "选择",  // 表格列名
    },
    {
        label: "属性表示",  // 表格列名
        prop: "Attrcode"
    },
    {
        prop: "Islimit", //字段名字
        type: "radio", //渲染的表格行内数据类型
        label: "选择",  // 表格列名
        placeholder: "限制单选次数",
        options: [{
            label: "是",  //下拉框选项标签名字
            value: true  //下拉框选项默认值
        },{
            label: "否",  //下拉框选项标签名字
            value: false  //下拉框选项默认值
        }]
    }
]
   