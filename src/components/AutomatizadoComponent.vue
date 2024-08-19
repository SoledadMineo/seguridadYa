<template>
  <div class="contenedor">
    <v-container  id="automatizados">
      <v-row class="celda" align="strech">
        <v-col cols="12" xs="8" sm="6" md="6" lg="7" xl="7">
          <v-card class="cardTitulo">
            <v-card-title>
              <div class="titulo"><strong>Automatización</strong></div>
              <div class="subtitulo"><strong>de Portones</strong></div>
              <v-img src="../assets/cinta2.png" class="card-img"></v-img>
            </v-card-title>
            <br />
            <v-card-text class="texto">
              Es un sistema que permite abrir y cerrar portones de manera
              automática, mediante el uso de un motor eléctrico controlado por
              un mando a distancia, un sensor o una aplicación móvil.
              <br />
              <br />
              Este tipo de automatización ofrece comodidad, seguridad y control
              de acceso mejorado.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xs="4" sm="6" md="6" lg="5" xl="5">
          <v-card class="cardImagen">
            <v-img src="../assets/automatizados.png"></v-img>
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
.cardTitulo {
  height: 100%;
  border: none;
  flex-direction: column;
  box-shadow: none;
}
.cardImagen {
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

</style>
