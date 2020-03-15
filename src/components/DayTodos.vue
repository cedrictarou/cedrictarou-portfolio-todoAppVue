<template>
  <div>
        <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Day</th>
          <th scope="col">Tasks of eacy day</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Monday</th>
          <td>
            <draggable :list="mon" group="weekTasks"  @change="log">
              <span class="mr-2 item" v-for="(monTasks, index) in mon" :key="monTasks.id">{{ index + 1 }} {{ monTasks }}</span>
            </draggable>
          </td>
        </tr>
        <tr>
          <th scope="row">Tuesday</th>
          <td>
            <draggable :list="tue" group="weekTasks">
              <span class="mr-2 item" v-for="(tueTasks, index) in tue" :key="tueTasks.id">{{ index + 1 }} {{ tueTasks }}</span>
            </draggable>
          </td>
        </tr>
        <tr>
          <th scope="row">Wednesday</th>
          <td>
            <draggable :list="wed" group="weekTasks">
              <span class="mr-2 item" v-for="(wedTasks, index) in wed" :key="wedTasks.id">{{ index + 1 }} {{ wedTasks }}</span>
            </draggable>
          </td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script>
 import draggable from 'vuedraggable';
export default {
  components: {
    draggable,
  },
  data() {
    return {
      mon:['task 1-1', 'task 1-2', 'task 1-3'],
      tue:['task 2-1', 'task 2-2', 'task 2-3'],
      wed:['task 3-1', 'task 3-2', 'task 3-3'],
    }
  },
  methods: {
    log() {
      console.log('mon', this.mon);
      console.log('tue', this.tue);
      console.log('wed', this.wed);
    }
  }
}
</script>

<style lang="scss" scoped>
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