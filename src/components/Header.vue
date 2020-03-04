<template>
  <div>
   <b-progress height="2rem" :max="maxTodos" show-progress animated>
    <b-progress-bar :value="todoCount" :label="`${((todoCount / maxTodos) * 100).toFixed(0)}%`"></b-progress-bar>
   </b-progress>
  </div>
</template>
<script>
  export default {
    props: ['todoCount', 'maxTodos'],
    data() {
      return {
        value: '',
        max: 100
      }
    },
  }
</script>