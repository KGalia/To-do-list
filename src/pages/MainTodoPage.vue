<template>
  <main>
    <div class="logo">
      <h1> Todo List </h1>
    </div>


    <router-link to="/todolist">
      <div class="my-list">

        <Buttons class="btn-main">ADD NEW TASK LIST
        </Buttons>

      </div>
    </router-link>

    <div class="my-list">
      <TodoList/>
    </div>

  </main>
</template>

<script>


import Buttons from "@/components/UI/Buttons.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: 'todoPage',

  components: {
    TodoList,
    Buttons,
  },
}
</script>

<style scoped>

.btn-main {
  margin: 20px 0;
  background-color: rgba(36, 159, 149, 0.6);
  color: #044c4c;
  transition: all 0.7s ease;
}
</style>