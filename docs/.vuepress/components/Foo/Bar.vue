<template>
  <p class="component">
    {{ msg }}
  </p>
</template>

<script>
export default {
  data () {
    return {
      msg: '嵌套组件，使用方式是<Foo-Bar/>'
    }
  }
}
</script>