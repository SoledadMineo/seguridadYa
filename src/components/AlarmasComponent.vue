<template>
  <div class="contenedor" >
    <v-container id="alarmas">
      <v-row class="celda">
        <v-col cols="12" xs="4" sm="6" md="6" lg="5" xl="5">
          <v-card class="cardImagen">
            <v-img src="../assets/alarmas.png"></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" xs="8" sm="6" md="6" lg="7" xl="7">
          <v-card class="cardTitulo">
            <v-card-title class="titulos">
              <div class="titulo"><strong>Alarmas</strong></div>
              <div class="subtitulo"><strong>Monitoreadas</strong></div>
              <v-img src="../assets/cinta2.png" class="card-img"></v-img>
            </v-card-title>
            <br />
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
  </div>
</template>

<script>
export default {
  name: "ResponsiveApp",
};
</script>

<style scoped>
.card-img {
  width: 100%;
}
.cardTitulo {
  height: 100%;
  border: none;
  flex-direction: column;
  box-shadow: none;
}
.cardImagen {
  width: 50%;
  margin: 2rem;
  padding: 1rem;
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
}

@media (max-width: 1920px) {
  .titulo {
    font-size: 60px;
  }
  .subtitulo {
    font-size: 30px;
  }
  .cardImagen {
    width: 75%;
}
}

@media (max-width: 1280px) {
  .titulo {
    font-size: 55px;
  }
  .subtitulo {
    font-size: 30px;
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
  }
  @media (max-width: 600px) {
    .titulo {
      font-size: 40px;
    }
    .subtitulo {
      font-size: 25px;
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
