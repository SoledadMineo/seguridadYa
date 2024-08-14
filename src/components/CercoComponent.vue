<!--<template>
  <v-row id="cerco">
    <div>
      <v-img src="../assets/logoRedondo-sinFondo.png" />
    </div>
    <div class="contenedor">
      <v-col md="4" class="imagen">
        <v-img src="../assets/cerco.png" alt="cercos" />
      </v-col>

      <v-col md="8">
        <div class="celda">
          <div class="subtitulo">
            <h1>Cercos</h1>
            <h3>Eléctricos</h3>
          </div>
          <p class="custom-paragraph">
            Su consumo de energía es mínimo.
          </p>
          <div class="whatsApp">
            <a
              href="https://api.whatsapp.com/send?phone=5492616675624"
              target="_blank"
              class="RNpQXe"
            >
              <v-btn class="custom-button"> PEDIR PRESUPUESTO </v-btn></a
            >
          </div>
        </div>
      </v-col>
    </div>
  </v-row>
</template>

<script>
export default {
  name: "CercoComponent",
  props: {
    msg: String,
  },
};
</script>


<style scoped>
.imagen {
  width: 10px;
  height: auto;
  margin: 3rem;
  padding: 2rem;
}
.custom-button {
  display: flex;
  align-items: center;
  justify-content: center;
  size: large;
  font-weight: bold;
  padding: 20px;
  background-color: #40c351;
  color: black;
  border-radius: 40px; /* Esquinas redondeadas */
  transition: all 0.3s ease; /* Transición suave */
}
.custom-button:hover,
.custom-button:focus {
  background-color: #848484; /* Color de fondo al pasar el mouse */
  color: #40c351;
  transform: scale(1.1); /* Escalar el botón al pasar el mouse */
}
.contenedor {
  background-image: url("../assets/cinta2.png");
  background-repeat: no-repeat;
  background-size: 100% 8%;
  background-position: 10% 45%;
}
.celda {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 3rem 5rem 5rem 0rem;
}
.whatsApp {
  display: flex;
  justify-content: center; /* Centrando horizontalmente */
  width: 100%;
}
.subtitulo {
  display: flex;
  flex-direction: column;
}
.custom-paragraph {
  margin-right: 15%;
  text-align: justify;
}

div {
  display: flex;
  justify-content: space-between;
}
h1 {
  color: #ec0c05;
  font-size: 70px;
}
p {
  font-size: 17px;
}
h3 {
  color: black;
  font-size: 40px;
}

/* Media Queries para dispositivos más grandes */
@media (max-width: 600px) {
  .contenedor {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 5%;
  }
  .subtitulo h1 {
    font-size: 25px;
  }
  .subtitulo h3 {
    font-size: 20px; /* Reducir tamaño de fuente para h3 */
  }
  .responsive-img {
    height: 50%;
    width: auto;
  }
  .custom-button {
    size: small;
  }
  p {
    font-size: 16px; /* Reducir tamaño de fuente para el párrafo */
    text-align: justify;
    margin-right: 5%;
  }
}
</style>
-->

<template>
  <v-app class="contenedor">
    <v-container>
      <v-row class="celda" align="strech">
        <v-col cols="12" xs="4" sm="6" md="6" lg="5" xl="5">
          <v-card class="cardImagen">
            <v-img src="../assets/cerco.png"></v-img>
          </v-card>
        </v-col>

        <v-col cols="12" xs="8" sm="6" md="6" lg="7" xl="7">
          <v-card class="cardTitulo">
            <v-card-title>
              <div class="titulo">cercos</div>
              <div class="subtitulo">electricos</div>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-text class="texto">
              Su consumo de energía es mínimo.<br>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero commodi ullam minus, quasi omnis beatae. Itaque repellat nihil ab eaque, magni omnis, officiis consequuntur qui minima a, error possimus id.
            </v-card-text>
            <v-button>
              <div class="whatsApp">
                <a
                  href="https://api.whatsapp.com/send?phone=5492616675624"
                  target="_blank"
                  class="botonWhat"
                >
                  <v-btn class="custom-button"> PEDIR PRESUPUESTO </v-btn></a
                >
              </div>
            </v-button>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "ResponsiveApp",
};
</script>

<style scoped>
.contenedor {
  margin-top: 3%;
  background-image: url("../assets/cinta2.png");
  background-repeat: no-repeat;
  background-size: 100% 4%;
  background-position: 10% 16%;
}
.botonWhat {
  display: flex;
  justify-content: center; /* Centrando horizontalmente */
  width: 100%;
}
.custom-button {
  display: flex;
  align-items: center;
  justify-content: center;
  size: large;
  font-weight: bold;
  padding: 20px;
  background-color: #40c351;
  color: black;
  border-radius: 40px; /* Esquinas redondeadas */
  transition: all 0.3s ease; /* Transición suave */
}
.custom-button:hover,
.custom-button:focus {
  background-color: #848484; /* Color de fondo al pasar el mouse */
  color: #40c351;
  transform: scale(1.1); /* Escalar el botón al pasar el mouse */
}
.celda {
  display: flex;
  justify-content: space-around;
}
.cardTitulo,
.cardImagen {
  height: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: none;
  background-color: transparent;  
}
.cardImagen{
  padding: 2rem
}
.titulos{
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.titulo {
  color: #ec0c05;
  font-size: 70px;
}
.subtitulo {
  color: black;
  font-size: 40px;
}
.texto {
  font-size: 16px; /* Reducir tamaño de fuente para el párrafo */
  text-align: justify;
  margin-right: 5%;
}

@media (max-width: 2560px) {
.contenedor {
  background-size: 100% 5%;
  background-position: 10% 25%;
}
}

@media (max-width: 1920px) {
.titulo {
  font-size: 60px;
}
.subtitulo {
  font-size: 30px;
}
.contenedor {
  background-size: 100% 5%;
  background-position: 10% 23%;
}
}

@media (max-width: 1280px) {
.titulo {
  font-size: 60px;
}
.subtitulo {
  font-size: 30px;
}
.contenedor {
  background-size: 100% 4%;
  background-position: 10% 21%;
}

@media (max-width: 960px) {
.titulo {
  font-size: 50px;
}
.subtitulo {
  font-size: 30px;
}
.texto {
  font-size: 16px; /* Reducir tamaño de fuente para el párrafo */
  margin-right: 5%;
}
.contenedor {
  background-size: 100% 2%;
  background-position: 10% 18%;
}

}
@media (max-width: 600px) {
.titulo {
  font-size: 50px;
}
.subtitulo {
  font-size: 30px;
}
.contenedor {
  background-size: 100% 2%;
  background-position: 10% 54%;
}
.cardImagen{
  padding: 2%;
}
.texto{
  margin: 0%;
}
}

}

</style>
