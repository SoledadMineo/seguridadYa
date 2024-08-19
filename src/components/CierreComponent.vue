<template>
  <div class="contenedor" >
    <v-container id="cierre">
      <v-row class="celda" align="strech">
        <v-col cols="12" xs="4" sm="6" md="6" lg="5" xl="5">
          <v-card class="cardImagen">
            <v-img src="../assets/cierre.png"></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" xs="8" sm="6" md="6" lg="7" xl="7">
          <v-card class="cardTitulo">
            <v-card-title>
              <div class="titulo"><strong>Cierre</strong></div>
              <div class="subtitulo"><strong>Perimetral</strong></div>
              <v-img src="../assets/cinta2.png" class="card-img"></v-img>
            </v-card-title>
            <br />
            <v-card-text class="texto">
              Brindamos cierre perimetral y romboidal para delimitar y proteger
              propiedades. Puede estar compuesto de diversos tipos de materiales
              y estilos según las necesidades de seguridad, estética y
              presupuesto.
              <br />
              <br />
              Se caracteriza el cerco perimetral por ser:
              <br />
              <br />
              <ul class="custom-list">
                <li>Versátil.</li>
                <li>Duradero.</li>
                <li>Seguro.</li>
                <li>Económico.</li>
                <li>Fácil de instalar.</li>
              </ul>
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
.custom-list {
  margin-left: 1rem;
}
.celda {
  display: flex;
  justify-content: space-around;
}
.cardTitulo {
  height: 100%;
  border: none;
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
