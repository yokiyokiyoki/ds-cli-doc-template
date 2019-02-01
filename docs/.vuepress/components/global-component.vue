<template>
  <!-- 
    约定： 1. 请确保一个自定义组件的名字包含连接符或者是 PascalCase,否则，它将会被视为一个内联元素
          2. 所有在 .vuepress/components 中找到的 *.vue 文件将会自动地被注册为全局的异步组件 
    使用： 可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）
  -->
  <p class="global-component">
    {{ msg }}
  </p>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello this is <global-component>'
    }
  }
}
</script>