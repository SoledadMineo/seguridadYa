<template>
  <div class="contenedor" id="camaras">
    <v-container>
      <v-row class="celda" align="strech">
        <v-col cols="12" xs="4" sm="6" md="6" lg="7" xl="7">
          <v-card class="cardTitulo">
            <v-card-title>
              <div class="titulo"><strong>Cámaras</strong></div>
              <div class="subtitulo"><strong>de Seguridad</strong></div>
              <v-img src="../assets/cinta2.png" class="card-img1"></v-img>
            </v-card-title>
            <br />
            <v-card-text class="texto">
              Sistema de video vigilancia conocido como CCTV (Circuito Cerrado de
              Televisión), que utiliza cámaras de video para monitorear y grabar
              imágenes de un área específica.
              <br />
              <br />
              Ofrecemos todo tipo de cámaras, con las siguientes características:
              <br />
              <br />
              <ul class="custom-list">
                <li>Alta resolución Full HD/4K.</li>
                <li>
                  Visión nocturna, brindando seguridad las 24 horas del día.
                </li>
                <li>Acceso remoto a la app móvil en tiempo real.</li>
                <li>Detección de movimiento inteligente.</li>
                <li>
                  Soluciones personalizadas que se adaptan a cualquier tipo de
                  propiedad.
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" xs="4" sm="6" md="6" lg="5" xl="5">
          <v-card class="cardImagen">
            <v-img src="../assets/camaras.png"></v-img>
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
}
.custom-list {
  margin-left: 1rem;
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
