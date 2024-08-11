<template>
  <div class="contenedor">
    <v-row justify="center" id="quienesSomos"
      ><v-col cols="12" md="6">
        <v-card class="card" elevation="20">
          <v-img
            src="../assets/logoRedondo-sinFondo.png"
            height="150px"
          ></v-img>
          <v-card-title>¿Quiénes Somos?</v-card-title>
          <v-card-text class="texto"
            ><strong>
              Somos una empresa mendocina con más de una década de trayectoria,
              brindando siempre el mejor servicio de seguridad con equipos homologados 
              con los que trabajamos.
              <br>
              <br>
              Contamos con años de experiencia en sistemas de antivandalismo. 
              Las instalaciones se realizan en el día y se ofrece mantenimiento anual.
              
  
            </strong></v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="panel">
      <v-col cols="12" md="3">
        <v-card class="card1" elevation="20">
          <v-img src="../assets/pngegg(1).png" height="100px"></v-img>
          <v-card-title>Equipos Homologados</v-card-title>
          <v-card-text>
            Son productos de primera calidad que cumplen con normativas y
            regulaciones que garantizan su seguridad eléctrica y su capacidad para
            su uso previsto.</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="card1" elevation="20">
          <v-img src="../assets/pngegg.png" height="100px"></v-img>
          <v-card-title>Garantía oficial</v-card-title>
          <v-card-text>
            Es nuestro compromiso de ofrecer seguridad y protección al realizar la compra,
            asegurando que no tendrán que incurrir en costos adicionales.
            <br>
            <br>
            Garantía extendida de 5 años en trabajos de infraestructura.
            </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="card1" elevation="20">
          <v-img src="../assets/pngegg(2).png" height="100px"></v-img>
          <v-card-title>Financiación propia</v-card-title>
          <v-card-text>
        Recibimos tarjetas de crédito, tarjetas de débito
        y financiación propia o bancaria a convenir. 
        </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="card1" elevation="20">
          <v-img src="../assets/pngegg(3).png" height="100px"></v-img>
          <v-card-title>Servicio Posventa</v-card-title>
          <v-card-text>
            Revisiones periódicas para asegurar que el cerco eléctrico está
            en buen estado. Esto incluye la inspección de los componentes, el ajuste
            de las tensiones, la verificación del correcto funcionamiento del sistema de alarma,
            y la comprobación de la integridad del cableado y los aisladores.
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
