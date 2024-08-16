<template>
  <v-app class="contenedor" id="cierre">
    <v-container>
      <v-row class="celda" align="strech">
        <v-col cols="12" xs="4" sm="6" md="6" lg="5" xl="5">
          <v-card class="cardImagen">
            <v-img src="../assets/alarmas.png"></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" xs="8" sm="6" md="6" lg="7" xl="7">
          <v-card class="cardTitulo">
            <v-card-title>
              <div class="titulo"><strong>cierre</strong></div>
              <div class="subtitulo"><strong>perimetral</strong></div>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-text class="texto">
              Alarmas domiciliarias todas las marcas. Sistema de wifi. Sistema
              de video vigilancia, conocido como CCTV (Circuito Cerrado de
              Televisión) que utiliza cámaras de video para monitorear y grabar
              imágenes de un área específica.
              <br />
              <br />
              Desde tu celular bajas una aplicación gratuita y podes
              automonitorear de manera inmediata y efectiva de control, que
              movimiento fue lo que activo la alarma de seguridad.
              <br />
            </v-card-text>
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
.cardTitulo {
  height: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: none;
  background-color: transparent;
  padding: 2rem;
}
.cardImagen{
  margin: 2rem;
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
