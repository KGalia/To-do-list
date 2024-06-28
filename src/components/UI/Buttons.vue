<template>

  <button>

<slot></slot>

  </button>

</template>

<script>
export default {
name: 'buttons',
}
</script>

<style scoped>

button {
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 15px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #14ac9f;
}

</style>