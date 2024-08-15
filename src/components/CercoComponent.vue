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
              <div class="titulo"><strong>Cercos</strong></div>
              <div class="subtitulo"><strong>Eléctricos</strong></div>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-text class="texto">
              
              Son sistemas de seguridad perimetral que utilizan una serie de hilos 
              o alambres electrificados para disuadir y prevenir intrusiones en propiedades residenciales, 
              comerciales o industriales. 
              <br />
              <br />
              Estos sistemas son muy efectivos como una primera línea de defensa y 
              pueden integrarse con otros sistemas de seguridad, como cámaras de vigilancia y alarmas.
              Su consumo de energía es mínimo.
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
  padding: 2rem;
}
.titulos {
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
    background-position: 10% 35%;
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
    .cardImagen {
      padding: 2%;
    }
    .texto {
      margin: 0%;
    }
  }
}
</style>
