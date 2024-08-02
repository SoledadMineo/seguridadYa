<template>
  <div>
    <div class="mt-10" id="QuienesSomos">
      <QuienesSomos />
    </div>
    <div class="mt-10" id="Cerco">
      <CercoComponent />
    </div>
    <div class="mt-10" id="Camaras">
      <CamarasComponent />
    </div>
    <div class="mt-10" id="Alarmas">
      <AlarmasComponent />
    </div>
    <div class="mt-10" id="Automatizados">
      <AutomatizadoComponent />
    </div>
    <div class="mt-10" id="PreguntasFrecuentes">
      <PreguntasFrecuentes />
    </div>
    <div id="ContactoComponent">
      <ContactoComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import QuienesSomos from "../components/QuienesSomos";
import CercoComponent from "../components/CercoComponent";
import CamarasComponent from "../components/CamarasComponent.vue";
import AlarmasComponent from "../components/AlarmasComponent.vue";
import AutomatizadoComponent from "@/components/AutomatizadoComponent.vue";
import ContactoComponent from "@/components/ContactoComponent.vue";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes.vue";
export default {
  name: "HomeView",
  components: {
    QuienesSomos,
    CercoComponent,
    CamarasComponent,
    AlarmasComponent,
    AutomatizadoComponent,
    PreguntasFrecuentes,
    ContactoComponent,
  },
};
</script>
