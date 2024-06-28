<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="dialog-text">

      <slot></slot>

    </div>
  </div>
</template>

<script>

export default {
  name: 'dialog-form',

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  emits: ['update:show'],

  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    }
  }
}

</script>

<style scoped>

.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
}

.dialog-text {
  margin: auto;
  background: white;
  border-radius: 10px;
  min-height: 50px;
  min-width: 300px;
}
</style>