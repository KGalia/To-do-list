<template>

  <TaskForm
      @add-todo="addTodo"
  />


  <template v-if="isVisible">
    <h2 title="Change list title"
        @click="hideTitle"
        class="logo">
      {{ title.listTitle }}
    </h2>
  </template>

  <template v-else>
    <div class="task-name">

      <input
          v-model="title.listTitle"
          @keyup.enter="saveTitle"
          placeholder="Task list name"
          class="task-input"
          type="text">

      <Buttons @click="saveTitle"
              class="btn-item">✔️
      </Buttons>

    </div>
  </template>


  <div v-if="todos.length > 0">

    <TaskItem
        v-for="todo in todos"
        :todo="todo.todoItem"
        :key="todo.id"
        :id="todo.id"
        :styles="todo.styleStatus"
        @remove="remove"
        @edit="edit"
        @toggle="toggle"
    />

  </div>
  <h3 v-else>
    The task list is empty
  </h3>

</template>

<script>
import TaskItem from "@/components/TaskItem.vue";
import TaskForm from "@/components/TaskForm.vue";
import DialogForm from "@/components/UI/DialogForm.vue";
import Buttons from "@/components/UI/Buttons.vue";

export default {
  components: {
    Buttons,
    DialogForm,
    TaskItem,
    TaskForm,
  },

  data() {

    return {
      todos:[],
      todo: {
        name: '',
        id: 0,
        styleStatus: {
          done: false,
        }
      },

      title: {
        id: 1,
        listTitle: "List Name",
      },
      isVisible: true,
    }
  } ,


  mounted() {
    if (localStorage.getItem('title')) {
      try {
        this.title = JSON.parse(localStorage.getItem('title'));
      } catch (e) {
        localStorage.removeItem('title');
      }
    }

    const newTodo = localStorage.getItem('todos');
    newTodo ? this.todos = JSON.parse(newTodo) : null
  },


  methods: {
    remove(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      });
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },

    edit(id, todoItem) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          todo.todoItem = todoItem;
        }
        return todo;
      })
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },

    hideTitle() {
      this.isVisible = false;
    },

    saveTitle() {
      this.isVisible = true;

      const parsed = JSON.stringify(this.title);
      localStorage.setItem('title', parsed);
    },

    addTodo(todoItem) {
      if (todoItem !== '') {
        let id = new Date().getTime();
        this.todos.push({
          id: id,
          todoItem,
          styleStatus: {
            done: false,
          },
        })

        localStorage.setItem('todos', JSON.stringify(this.todos))
      }
      this.todoItem = '';
    },

    toggle(id, styles) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          todo.styleStatus = styles;
        }
        return todo;
      })

      console.log(id, styles);

      localStorage.setItem('todos', JSON.stringify(this.todos))

    }
  }
}
</script>

<style scoped>

h3 {
  margin: 20px 0;
  text-align: center;
  color: red;
}

</style>
