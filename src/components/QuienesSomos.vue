<template>
  <div class="contenedor" id="quienesSomos">
    <v-row justify="center"
      ><v-col cols="12" md="6">
        <v-card class="card" elevation="20">
          <v-img src="../assets/logo.jpg" height="100px"></v-img>
          <v-card-title class="titulo1">¿Quiénes Somos?</v-card-title>
          <v-card-text class="texto"
            ><strong>
              Somos una empresa mendocina con más de una década de trayectoria,
              brindando siempre el mejor servicio de seguridad con equipos
              homologados y domóticas.
              <br />
              <br />
              Las instalaciones se realizan en el día, no se paga ningún abono
              mensual y desde tu celular podes controlar el automonitoreo del
              sistema de alarmas.
            </strong></v-card-text
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row class="panel">
      <v-col cols="12" md="3">
        <v-card class="card1" elevation="20">
          <v-img src="../assets/pngegg(1).png" height="100px"></v-img>
          <v-card-title class="titulo">Equipos Homologados</v-card-title>
          <v-card-text>
            Son productos de primera calidad que cumplen con normativas y
            regulaciones que garantizan su seguridad eléctrica y capacidad para
            su uso previsto.</v-card-text
          >
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="card1" elevation="20">
          <v-img src="../assets/pngegg.png" height="100px"></v-img>
          <v-card-title class="titulo">Garantía Oficial</v-card-title>
          <v-card-text>
            Es nuestro compromiso de ofrecer seguridad y protección al realizar
            la compra, sin incurrir en costos adicionales.
            <br />
            <br />
            Garantía extendida por 5 años en trabajos de infraestructura.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="card1" elevation="20">
          <v-img src="../assets/pngegg(2).png" height="100px"></v-img>
          <v-card-title class="titulo">Financiación Propia</v-card-title>
          <v-card-text>
            Recibimos la forma de pago con tarjetas de débito, tarjetas de
            crédito y financiación propia o bancaria a convenir.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="card1" elevation="20">
          <v-img src="../assets/pngegg(3).png" height="100px"></v-img>
          <v-card-title class="titulo">Servicio Posventa</v-card-title>
          <v-card-text>
            Revisión periódica de la instalación del cerco eléctrico.
            <br />
            <br />
            Las visitas consisten en:
            <br />
            <ul class="custom-list">
              <li>Inspeccionar los componentes.</li>
              <li>Ajustar las tensiones.</li>
              <li>
                Verificar el funcionamiento correcto del sistema de alarma.
              </li>
              <li>Comprobar la integridad del cableado y los aisladores.</li>
            </ul>
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
  background-size: 100% 10%;
  background-position: center;
}
.card {
  background-color: black;
  height: 100%;
  padding: 10px;
}
.texto {
  text-align: justify;
  color: white;
  border-radius: 20px;
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
  border: 2px solid white;
}
.card-img {
  width: 100%;
  height: auto;
}
.contenedor {
  background-size: 100% 10%;
  background-position: center;
}
.custom-list {
  margin-left: 1rem;
}
.titulo1 {
  color: white;
  text-align: center;
}
.titulo {
  text-align: center;
}
</style>
