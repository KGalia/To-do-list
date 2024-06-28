<template>

  <div class="task-item my-style">
    <div>
      <input
          type="checkbox"
          v-model="isActive"
          :class="styleStatus"
          @click="toggleStatus"
          :id="id"
          class="checkbox-label">
    </div>

    <template v-if="!isEdit">
    <span title="To mark it done, click here. To return to done, click again."
          class="title-item start"
          :class="styleStatus"
          :id="id"
          @click="toggleStatus"
    >{{ todo }}</span>

      <Buttons @click="edit" class="btn-item">
        ✏️
      </Buttons>

      <Buttons @click="" class="btn-item">
        ↪️
      </Buttons>
    </template>

    <template v-else>

      <input
          v-model="newItem"
          @keyup.enter="saveEdit"
          :id="id"
          class="task-input">

      <Buttons @click="saveEdit" class="btn-item">
        ✔️
      </Buttons>

      <Buttons @click="" class="btn-item">
        ↪️
      </Buttons>

    </template>

    <Buttons @click="showDialog" class="btn-item">
      ❌
    </Buttons>

    <DialogForm v-model:show="dialogVisible">

      <h3> Are you sure you want to DELETE the TASK ? </h3>

      <div class="btn-dialog">
        <Buttons @click="remove" class="btn-yes">YES</Buttons>
        <Buttons @click="showDialog" class="btn-no">NO</Buttons>
      </div>

    </DialogForm>

  </div>
</template>

<script>

import TaskForm from "@/components/TaskForm.vue";
import DialogForm from "@/components/UI/DialogForm.vue";
import Buttons from "@/components/UI/Buttons.vue";


export default {
  components: {Buttons, DialogForm, TaskForm},

  props: {
    id: Number,
    todo: String,
  },

  emits: ['remove', 'edit', 'toggle'],

  data() {
    return {
      newItem: this.todoItem,
      isEdit: false,
      isActive: false,
      styleStatus: {
        done: false,
      },
      dialogVisible: false
    };
  },

  methods: {
    remove() {
      this.$emit('remove', this.id, this.newItem);
    },

    edit() {
      this.isEdit = true;
    },

    saveEdit() {
      this.isEdit = false;
      this.$emit('edit', this.id, this.newItem);
    },

    toggleStatus() {
      this.isActive = !this.isActive;
      this.styleStatus.done = !this.styleStatus.done;
      this.$emit('toggle', this.id, this.styleStatus);
    },

    showDialog() {
      this.dialogVisible = !this.dialogVisible;
    },
  }
}
</script>

<style scoped>


.title-item {
  width: 100%;
}

h3 {
  margin: 20px 20px 20px 20px;
  text-align: center;
  font-size: 18px;
  color: red;
}

.btn-item {
  margin: 5px 0;
  padding: 7px;
}

.btn-dialog{
  margin: 15px 0;
  display: flex;
  justify-content: center
}

.btn-yes {
  color: white;
  background-color: #e45353;
  margin-right: 5px;
  padding: 8px 20px;
  cursor: pointer;
}

.btn-yes:hover {
  background-color: #9e3030;
}

.btn-no {
  color: white;
  background-color: #129388;
  cursor: pointer;
  padding: 8px 25px;
}

.btn-no:hover {
  background-color: #044c4c;
}

</style>