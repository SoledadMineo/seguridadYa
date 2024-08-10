<template>
  <div class="contenedor">
    <v-row justify="center" id="quienesSomos"
      ><v-col cols="12" md="6">
        <v-card class="card" elevation="20">
          <v-img
            src="../assets/logoRedondo-sinFondo.png"
            height="150px"
          ></v-img>
          <v-card-title>Quienes Somos</v-card-title>
          <v-card-text class="texto"
            ><strong
              >Somos una empresa mendocina con más de una década de trayectoria,
              brindando siempre el mejor servicio de seguridad ..... Somos una
              empresa mendocina con más de una década de trayectoria, brindando
              siempre el mejor servicio de seguridad ..... Somos una empresa
              mendocina con más de una década de trayectoria, brindando siempre
              el mejor servicio de seguridad .....
            </strong></v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
    <v-row class="panel">
      <v-col cols="12" md="3">
        <v-card class="card1" elevation="20">
          <v-img src="../assets/pngegg(1).png" height="100px"></v-img>
          <v-card-title>Productos Homologados</v-card-title>
          <v-card-text
            >Trabajamos con productos homologados que cumplen con normativas y
            regulaciones que garantizan su seguridad eléctrica y capacidad para
            su uso previsto.</v-card-text
          >
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="card1" elevation="20">
          <v-img src="../assets/pngegg.png" height="100px"></v-img>
          <v-card-title>Garantía</v-card-title>
          <v-card-text
            >Garantía extendida por 5 años en los trabajos de
            infraestructura.</v-card-text
          >
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="card1" elevation="20">
          <v-img src="../assets/pngegg(2).png" height="100px"></v-img>
          <v-card-title>Financiación</v-card-title>
          <v-card-text> Financiación propia y/o bancario. </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="card1" elevation="20">
          <v-img src="../assets/pngegg(3).png" height="100px"></v-img>
          <v-card-title>Posventa</v-card-title>
          <v-card-text>
            Servicio posventa y comunicación inmediata con nuestros clientes.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.contenedor {
  background-image: url("../assets/cinta2.png");
  background-repeat: no-repeat;
  background-size: 100% 8%;
  background-position: 10% 50%;
  margin-top: 5%;
}
.card {
  background-color: #d7d7d7;
  height: 100%;
  padding: 10px;
}
.texto {
  text-align: justify;
}
.card1 {
  height: 90%;
  padding: 10px;
  border-radius: 10px;
  margin: 15px;
  text-align: justify;
}
.card1:hover {
  border: 2px solid black;
}
.card:hover {
  border: 2px solid black;
}
.panel {
}
</style>
