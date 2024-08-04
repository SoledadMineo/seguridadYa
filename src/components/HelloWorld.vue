<template>
  <body>
    <section id="Cerco">
      <CercoComponent />
    </section>
    <section id="Camaras">
      <CamarasComponent />
    </section>
    <section id="Alarmas">
      <AlarmasComponent />
    </section>
    <section id="Automatizados">
      <AutomatizadoComponent />
    </section>
    <section id="QuienesSomos">
      <QuienesSomos />
    </section>
    <section id="PreguntasFrecuentes">
      <PreguntasFrecuentes />
    </section>
    <section id="ContactoComponent">
      <ContactoComponent />
    </section>
  </body>
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

<style></style>
