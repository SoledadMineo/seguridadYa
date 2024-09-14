<template>
  <div class="contenedor" id="quienesSomos">
    <v-row justify="center"
      ><v-col cols="12" md="6">
        <v-card class="card" elevation="20">
          <v-img src="../assets/logoweb.jpg" height="100px"></v-img>
          <v-card-title class="titulo1">¿Quiénes Somos?</v-card-title>
          <v-card-text class="texto">
              Somos una empresa mendocina con más de una década de trayectoria,
              brindando siempre el mejor servicio de seguridad con equipos
              homologados.
              <br />
              <br />
              Las instalaciones se realizan en el día, no se paga ningún abono
              mensual y desde tu celular podes automonitorar para controlar el
              sistema de alarmas.
            </v-card-text>
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
            <ul class="custom-list">
              <li>Ofrecemos garantía extendida por 5 años en trabajos de infraestructura.</li> 
              <li>Estructura robusta de solución de problemas.</li>
              <li>Actualización permanente de homologaciones nacionales e internacionales de los productos.</li>
              <li>Capacitación permanente del personal técnico.</li>
              <li>Brindamos soporte técnico 24/7.</li>
            </ul>            
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="card1" elevation="20">
          <v-img src="../assets/pngegg(2).png" height="100px"></v-img>
          <v-card-title class="titulo">Financiación Propia</v-card-title>
          <v-card-text>
            Ofrecemos financiación propia acorde a su presupuesto. Todos nuestros productos y/o trabajos son facturados.
            <br />
            <br />
            Recibimos los siguientes medios de pago:
            <br />
            <ul class="custom-list">
            <li>Efectivo.</li>
            <li>Tarjeta de débito.</li>
            <li>Tarjeta de crédito.</li>
            <li>Transferencia.</li>
            </ul> 
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="card1" elevation="20">
          <v-img src="../assets/pngegg(3).png" height="100px"></v-img>
          <v-card-title>Servicio Posventa</v-card-title>
          <v-card-text>
            <ul class="custom-list">
            <li>Control y verificación periódica del sistema.</li>
            <li>Revisión anual del cerco eléctrico.</li>
            <li>Cada producto tiene garantía propia.</li>
            <li>Contamos con un sistema de resolución de conflictos no mayor a 48 horas hábiles por contrato.</li>
            <li>Atención permanente.</li>
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
  margin-top: 5%;
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
