import MainTodoPage from "@/pages/MainTodoPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import TodoListPage from "@/pages/TodoListPage.vue";

const routes = [
    {
        path: '/',
        component: MainTodoPage
    },
    {
        path: '/todolist',
        component: TodoListPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;