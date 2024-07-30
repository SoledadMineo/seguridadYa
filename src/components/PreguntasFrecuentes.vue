<template>
  <container>
    <div class="text-subtitle-2 mt-4 mb-2">
      <h1>PREGUNTAS FRECUENTES</h1>

      <v-expansion-panels class="my-4" variant="popout">
        <v-expansion-panel
          title="1. ¿Es legal instalar cercos eléctricos?"
          text="Si, además de ser una empresa homologada por el laboratorio Lenor,
            dentro de las leyes de Argentina éste sistema queda perfectamente
            definido en lo que se denomina legítima defensa."
        ></v-expansion-panel>
        <v-expansion-panel
          text=" Nuestos equipos no son letales. La descarga no genera quemaduras ni
            daños permanentes.."
          title="2. ¿Es letal?"
        ></v-expansion-panel>

        <v-expansion-panel
          text="Nuestros operarios están altamente capacitados y avalados por la
            planta de elaboración del producto."
          title="3. ¿Se necesita información para instalar mi cerco eléctrico?"
        ></v-expansion-panel>

        <v-expansion-panel
          text="No, su consumo es de 6W menos que una lámpara de luz."
          title="4. ¿El consumo eléctrico es muy alto?"
        ></v-expansion-panel>

        <v-expansion-panel
          text="Si, requiere un mínimo mantenimiento de dos tipos, - los usuarios
            deben mantener una poda prolija - nosotros una vez al año se cambia
            la batería, se realiza un control de estructura y tensado, reemplazo
            del leds y cambio de carteles reguladores preventivos."
          title="5. ¿Requiere mantenimiento?"
        ></v-expansion-panel>
      </v-expansion-panels>
    </div>
  </container>
</template>

<script>
export default {
  name: "PreguntasFrecuentes",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-expansion-panel {
  max-width: 1000px;
  background-color: white;
}
div {
  text-align: left;
}
h1 {
  text-align: center;
  color: white;
}
h3 {
  margin: 40px 0 0;
}
</style>
./QuienesSomos.vue./QuienesSomos.vue
