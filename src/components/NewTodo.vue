<template>
  <div>
    <label>Todo:</label>
    <b-form-textarea
      id="textarea"
      v-model="todo"
      placeholder="Enter something to do..."
      rows="2"
      max-rows="3"
    ></b-form-textarea>
    <b-btn class="mt-2" variant="outline-primary" @click="createNew">Add Todo</b-btn>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todo: ''
      }
    },
    methods: {
      createNew() {
        this.$emit('todoAdded', this.todo);
        this.todo = '';
      }
    }
  }
</script>