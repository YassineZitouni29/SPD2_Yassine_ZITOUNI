import { createRouter, createWebHistory } from 'vue-router';
import Home from '../home.vue';
import EditPost from '../editPost.vue';
import AddPost from '../addPost.vue';
import allDetail from '../postDetailView.vue';

const routes = [
    {path: '/post/:id', component: allDetail},
    { path: '/yassine', component: Home },
    { path: '/edit', component: EditPost },
    { path: '/add', component: AddPost },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
