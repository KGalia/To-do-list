<template>
  <main>
    <router-link to="/">

      <div class="logo">
        <h1> Todo List </h1>
      </div>

    </router-link>

    <div class="task">

      <TaskCard/>

    </div>
  </main>
</template>

<script>
import TaskCard from "@/components/TaskCard.vue";

export default {
  name: "listPage",

  components: {
    TaskCard,
  },

  data() {
    return {}
  },

}
</script>

<style>

</style>