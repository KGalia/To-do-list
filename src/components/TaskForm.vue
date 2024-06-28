<template>
  <div class="my-list">

    <input
        v-model="newItem"
        @keyup.enter="saveNewTodo"
        placeholder="Task"
        class="task-input"
        type="text"
    >

    <Buttons @click="saveNewTodo"
            class="btn-input">ADD TASK
    </Buttons>

  </div>
</template>

<script>
import Buttons from "@/components/UI/Buttons.vue";

export default {
  components: {Buttons},

  emits: ['addTodo'],

  data() {
    return {
      newItem: '',
    };
  },

  methods: {
    saveNewTodo() {
      this.$emit('addTodo', this.newItem);
      this.newItem = '';
    },
  }
}
</script>

<style scoped>

.btn-input {
  margin-bottom: 5px;
  background-color: rgba(36, 159, 149, 0.6);
  color: #044c4c;
  transition: all 0.7s ease;
}


</style>