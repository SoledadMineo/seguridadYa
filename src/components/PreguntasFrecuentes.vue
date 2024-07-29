<template>
  <div>
    <v-row>
      <v-col md="6" class="d-flex flex-column align-center">
        <h1>Preguntas Frecuentes</h1>
      </v-col>
      <v-col md="6">
        <h2>1. Es legal instalar cercos eléctricos?</h2>
        <h2>
          Si, además de ser una empresa homologada por el laboratorio Lenor,
          dentro de las leyes de Argentina éste sistema queda perfectamente
          definido en lo que se denomina legítima defensa.
        </h2>
        <h2>2. Es letal?</h2>
        <h2>
          Nuestos equipos no son letales. La descarga no genera quemaduras ni
          da;os permanentes.
        </h2>
        <h2>3. Se necesita información para instalar mi cerco eléctrico?</h2>
        <h2>
          Nuestros operarios están altamente capacitados y avalados por la
          planta de elaboración del producto.
        </h2>
        <h2>4. El consumo eléctrico es muy alto?</h2>
        <h2>No, su consumo es de 6W menos que una lámpara de luz.</h2>
        <h2>5. Requiere mantenimiento?</h2>
        <h2>
          Si, requiere un mínimo mantenimiento de dos tipos, - los usuarios
          deben mantener una poda prolija - nosotros una vez al año se cambia la
          batería, se realiza un control de estructura y tensado, reemplazo del
          leds y cambio de carteles reguladores preventivos.
        </h2>
      </v-col>
    </v-row>
  </div>
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
div {
  display: flex;
  justify-content: space-around;
}
h2 {
  color: white;
}
img {
  width: 250px;
  height: auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
./QuienesSomos.vue./QuienesSomos.vue
