<template>
  <v-row class="contenedor" id="alarmas">
    <v-col md="4">
      <v-img class="responsive-img" src="../assets/alarmas.png" alt="alarmas" />
    </v-col>
    <v-col md="8">
      <div class="titulo">
        <div class="subtitulo">
          <h1>Alarmas</h1>
          <h3>Monitoreadas</h3>
        </div>
        Alarmas domiciliarias todas las marcas. Sistema de wifi. Sistema de video vigilancia, 
        conocido como CCTV (Circuito Cerrado de Televisión) que utiliza cámaras de video
        para monitorear y grabar imágenes de un área específica.
        <br>
        
        
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AlarmasComponent",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contenedor {
  background-image: url("../assets/cinta2.png");
  background-repeat: no-repeat;
  background-size: 100% 8%;
  background-position: 10% 50%;
}
.titulo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-left: 10%;
}
.subtitulo {
  display: flex;
  flex-direction: column;
}
.responsive-img {
  height: 450px;
  width: auto;
  margin: 0rem 0rem 0rem 5rem;
}

div {
  display: flex;
  justify-content: space-between;
}
h1 {
  color: #ec0c05;
  font-size: 70px;
}
h3 {
  color: black;
  font-size: 40px;
}
p {
  font-size: 17px;
}

@media (max-width: 600px) {
  .contenedor {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 5%;
  }
  .titulo {
  }
  .subtitulo h1 {
    font-size: 25px;
  }
  .subtitulo h3 {
    font-size: 20px;
  }
  .responsive-img {
    height: 300px;
    width: auto;
  }
  p {
    font-size: 16px;
    text-align: justify;
    margin-right: 5%;
  }
}
@media (max-width: 1136px) {
  .responsive-img {
    height: 500px;
    width: auto;
  }
  .subtitulo h1 {
    font-size: 40px;
  }
  .subtitulo h3 {
    font-size: 30px; /* Reducir tamaño de fuente para h3 */
  }
  .titulo {
    margin: 0;
    padding: 5%;
    align-items: left; /* Centrar contenido horizontalmente */
  }
  p {
    font-size: 15px; /* Reducir tamaño de fuente para el párrafo */
  }
}
</style>
./QuienesSomos.vue./QuienesSomos.vue
