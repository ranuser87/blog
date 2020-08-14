import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Main from "@/pages/main.vue";
import Detail from "@/pages/detail.vue";
import Empty from "@/pages/empty/";

const routes = [
	{ path: "/", component: Main },
	{ path: "/detail/:id", component:  Detail },
	{ path: "*", component: Empty }
];

const router = new VueRouter({
	routes,
});

export default router;
