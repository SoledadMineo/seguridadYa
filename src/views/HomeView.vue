<template>
  <div>
    <div id="QuienesSomos">
      <QuienesSomos />
    </div>
    <div id="Cerco">
      <CercoComponent />
    </div>
    <div id="Camaras">
      <CamarasComponent />
    </div>
    <div id="Alarmas">
      <AlarmasComponent />
    </div>
    <div id="Automatizados">
      <AutomatizadoComponent />
    </div>
    <div id="Contacto">
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

export default {
  name: "HomeView",
  components: {
    QuienesSomos,
    CercoComponent,
    CamarasComponent,
    AlarmasComponent,
    AutomatizadoComponent,
    ContactoComponent,
  },
};
</script>
