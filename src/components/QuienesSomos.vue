<!-- <template>
  <v-row class="contenedor">
    <v-col md="4">
      <h1>¿QUIENES SOMOS?</h1>
    </v-col>
    <v-col class="carrousel" md="7">
      <v-carousel
        :continuous="false"
        :show-arrows="false"
        height="300"
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


<style scoped>
.contenedor {
  height: 500px;
}
header {
  margin-bottom: 20px;
}
h1 {
  margin: 100px 50px 50px;
  color: white;
  font-size: 40px;
}
.carrousel {
  background-color: #d7d7d7;
  color: black; /* Color de fondo personalizado */
  border-radius: 20px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra */
  font-weight: bold;
  height: 400px;
}

.custom-card-text {
  font-size: 20px; /* Cambia el tamaño de la letra */
  margin: 50px; /* Cambia los márgenes */
  text-align: justify; /* Centra el texto */
}
</style> -->

<!--OTRA OPCION-->

<!-- <template>
  <v-card class="card" color="basil">
    <v-card-title class="title">
      <v-img
        class="imagen"
        src="../assets/logoRedondo-sinFondo.png"
        width="100"
        height="100"
      ></v-img>
      <h1 class="titulo">Quienes Somos</h1>
    </v-card-title>

    <h3 class="justified-text">
      Somos una empresa mendocina con más de una década de trayectoria,
      brindando siempre el mejor servicio de seguridad a través de productos
      homologados, garantías extendidas por 5 años en infraestructura,
      financiación propia, servicio posventa.
    </h3>

    <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
      <v-tab v-for="(item, index) in items" :key="index">
        <h3>
          <strong>{{ item.name }}</strong>
        </h3>
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item v-for="(item, index) in items" :key="index">
        <v-card color="basil" flat>
          <v-img src="{{ item.img }}"></v-img>
          <v-card-text class="texto">{{ item.text }}</v-card-text>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: "Productos",
      items: [
        {
          name: "Productos Homologados",
          text: " Trabajamos con productos homologados que cumplen con normativas y regulaciones que garantizan su seguridad eléctrica y capacidad para su uso previsto.",
          img: "../assets/pngegg.png",
        },
        {
          name: "Garantía",
          text: "Garantía extendida por 5 años en los trabajos de infraestructura.",
          img: "../assets/pngegg(1).png",
        },
        {
          name: "Financiación",
          text: "Financiación propia o bancario.",
        },
        {
          name: "Servicio Posventa",
          text: "Servicio posventa y comunicación al instante entre la empresa y nuestros clientes.",
        },
      ],
    };
  },
};
</script>

<style>
/* Helper classes */
.card {
  width: 80%;
  align-items: center;
}
.bg-basil {
  background-color: #d7d7d7 !important;
}
.text-basil {
  color: #ec0c05 !important;
}
.justified-text {
  text-align: justify;
  padding: 50px;
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 0%;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.imagen {
  width: 10%;
  padding: 0%;
  margin-right: 20px;
}
.titulo {
  font-weight: bold;
  font-size: 40px;
  color: #ec0c05;
}
.texto {
  padding: 40px;
  font-size: 16px;
  margin-left: 5%;
}
</style> -->

<!--TERCER OPCION-->
<template>
  <v-div>
    <v-row justify="center"
      ><v-col cols="12" md="6">
        <v-card class="card" elevation="20">
          <v-img
            src="../assets/logoRedondo-sinFondo.png"
            height="150px"
          ></v-img>
          <v-card-title>Quienes Somos</v-card-title>
          <v-card-text
            ><strong
              >Somos una empresa mendocina con más de una década de trayectoria,
              brindando siempre el mejor servicio de seguridad .....
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
  </v-div>
</template>

<style scoped>
.card {
  background-color: #d7d7d7;
  height: 100%;
  padding: 10px;
  border: 1px solid black;
}

.card1 {
  border: 1px solid black;
  height: 90%;
  padding: 10px;
  border-radius: 10px;
  margin: 15px;
}

.panel {
}
</style>
