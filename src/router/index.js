import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AlarmasComponent from "@/components/AlarmasComponent.vue";
import AutomatizadoComponent from "@/components/AutomatizadoComponent.vue";
import CamarasComponent from "@/components/CamarasComponent.vue";
import CercoComponent from "@/components/CercoComponent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/productos/alarmas",
    name: "alarmas",
    component: AlarmasComponent,
  },
  {
    path: "/productos/automatizados",
    name: "automatizados",
    component: AutomatizadoComponent,
  },
  {
    path: "/productos/camaras",
    name: "camaras",
    component: CamarasComponent,
  },
  {
    path: "/productos/cerco",
    name: "cerco",
    component: CercoComponent,
  },
  {
    path: "/productos/alarmas",
    name: "alarmas",
    component: AlarmasComponent,
  },
  {
    path: "/productos/cierre",
    name: "cierre",
    component: AlarmasComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
