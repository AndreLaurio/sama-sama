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
        path: "/",
        name: "Index",
        component: () => import("./views/Index")
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
