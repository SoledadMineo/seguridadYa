import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AlarmasComponent from "@/components/AlarmasComponent.vue";
import AutomatizadoComponent from "@/components/AutomatizadoComponent.vue";
import CamarasComponent from "@/components/CamarasComponent.vue";
import CercoComponent from "@/components/CercoComponent.vue";
import QuienesSomos from "@/components/QuienesSomos.vue";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes.vue";
import CierreComponent from "../components/CierreComponent.vue";
import ContactoComponent from "@/components/ContactoComponent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/quienesSomos",
    name: "quienesSomos",
    component: QuienesSomos,
  },
  {
    path: "/preguntas",
    name: "preguntas",
    component: PreguntasFrecuentes,
  },
  {
    path: "/cierre",
    name: "cierre",
    component: CierreComponent,
  },
  {
    path: "/alarmas",
    name: "alarmas",
    component: AlarmasComponent,
  },
  {
    path: "/automatizados",
    name: "automatizados",
    component: AutomatizadoComponent,
  },
  {
    path: "/camaras",
    name: "camaras",
    component: CamarasComponent,
  },
  {
    path: "/cerco",
    name: "cerco",
    component: CercoComponent,
  },
  {
    path: "/cierre",
    name: "cierre",
    component: CierreComponent,
  },
  {
    path: "/contactos",
    name: "contactos",
    component: ContactoComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
