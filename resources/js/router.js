import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "*",
        name: "404",
        component: () => import("./views/404")
    },
    {
        path: "/test",
        name: "test",
        component: () => import("./components/ExampleComponent")
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
