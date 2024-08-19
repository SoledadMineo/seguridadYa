<template>
  <v-app class="contenedor" id="camaras">
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
              Protegen lo que más valoras que son tus seres queridos, tu hogar y
              tu negocio. Desde tu teléfono móvil podes verificar que todo está
              en orden.
              <br />
              <br />
              Ofrecemos todo tipo de cámaras con las siguientes características:
              <br />
              <br />
              <ul class="custom-list">
                <li>Alta resolución (HD/4K).</li>
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
  </v-app>
</template>

<script>
export default {
  name: "ResponsiveApp",
};
</script>

<style scoped>
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
      font-size: 40px;
    }
    .subtitulo {
      font-size: 25px;
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
    .custom-list {
      margin-left: 4%;
    }
  }
}
</style>
