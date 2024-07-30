<template>
  <v-row>
    <v-col md="4">
      <h1>¿QUIENES SOMOS?</h1>
    </v-col>
    <v-col class="carrousel" md="6">
      <v-carousel
        :continuous="false"
        :show-arrows="false"
        height="400"
        hide-delimiter-background
      >
        <v-carousel-item cover
          ><v-card-text class="custom-card-text">
            Somos una empresa mendocina con más de una década de trayectoria,
            brindando siempre el mejor servicio de seguridad a través de
            productos homologados, garantías extendidas por 5 años en
            infraestructura, financiación propia, servicio posventa.
          </v-card-text>
        </v-carousel-item>

        <v-carousel-item cover
          ><v-card-text class="custom-card-text">
            Trabajamos con productos homologados que cumplen con normativas y
            regulaciones que garantizan su seguridad eléctrica y capacidad para
            su uso previsto.
          </v-card-text>
        </v-carousel-item>

        <v-carousel-item cover
          ><v-card-text class="custom-card-text">
            Garantía extendida por 5 años en los trabajos de infraestructura.
          </v-card-text>
        </v-carousel-item>

        <v-carousel-item cover
          ><v-card-text class="custom-card-text">
            Financiación propia o bancario.
          </v-card-text>
        </v-carousel-item>

        <v-carousel-item cover
          ><v-card-text class="custom-card-text">
            Servicio posventa y comunicación al instante entre la empresa y
            nuestros clientes.
          </v-card-text>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "QuienesSomos",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  margin-bottom: 20px;
}
div {
  display: flex;
  justify-content: space-around;
}

h1 {
  margin: 100px 50px 50px;
  color: white;
  font-size: 50px;
}
h3 {
  margin: 50px 50px 50px;
  color: black;
  font-size: 20px;
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
.carrousel {
  background-color: #848484;
  color: white; /* Color de fondo personalizado */
  border-radius: 20px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra */
  justify-content: "center";
}

.custom-card-text {
  font-size: 25px; /* Cambia el tamaño de la letra */
  margin: 70px; /* Cambia los márgenes */
  text-align: justify; /* Centra el texto */
}
</style>
