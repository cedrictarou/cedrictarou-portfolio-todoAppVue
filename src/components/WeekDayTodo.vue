<template>
  
</template>
<script>
// import draggable from "vuedraggable";
export default {
  components: {
    // draggable
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.card-deck {
  min-height: 40px;
}
span.done {
  text-decoration: line-through;
  color: #bbb;
}
.card-body {
  padding: 0.5rem;
}
.item {
  display: inline-block;
  &:hover {
  cursor: grab;
  }
  &:active {
    cursor: grabbing;
  }
}
</style>
