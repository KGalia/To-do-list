<template>

  <div>
      <p v-for ="task in listTasks">
          {{task}}
      </p>
    </div>

</template>

<script>
export default {
  data() {
    return {
      newTasks: [],
      listTasks: {
        id: 1,
        name: 'jshdjf',
      },
    }
  }
}

</script>

<style scoped>

</style>