import Vue from "vue"   // eslint-disable-next-line 

/**
 * 1. 第一个参数 搜索的目录（.表示当前目录）
 * 2. 第二个参数 是否搜索子目录
 * 3. 第三个参数 表示查找匹配的文件
 */
const files = require.context("./global", true, /\.vue$/);
files.keys().forEach((key) => {
  if (key === "./index.js") return;
  // 依次注册为全局组件
  const component = files(key).default;
  try {
    Vue.component(component.name, component);
    //注意找不到name会报错
  } catch (e) {
    alert(e);
  }
});
