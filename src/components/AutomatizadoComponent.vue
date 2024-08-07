<template>
  <v-row class="contenedor" id="automatizados">
    <v-col cols="12" sm="12" xs="12" md="6">
      <div class="titulo">
        <div class="subtitulo">
          <h1>automatización</h1>
          <h3>de portones</h3>
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis numquam reiciendis blanditiis accusantium deserunt fugiat.
          Eum natus labore delectus aperiam, expedita doloribus voluptatibus
          harum! Nobis ipsa quibusdam quam? Ullam?
        </p>
      </div>
    </v-col>

    <v-col cols="12" sm="12" xs="12" md="6">
      <v-img
        class="responsive-img"
        src="../assets/automatizados.png"
        alt="automatizados"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AutomatizadoComponent",
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
  background-size: 100%;
  background-position: 25%;
  
}
.titulo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 10%;
}
.subtitulo {
  display: flex;
  flex-direction: column;
}
.responsive-img {
  height: 700px;
  width: auto;
}
div {
  display: flex;
  justify-content: space-between;
}
h1 {
  color: #ec0c05;
  font-size: 80px;
}
p {
  font-size: 20px;
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
  .titulo {
   
  }
  .subtitulo h1 {
    font-size: 25px;
  }
  .subtitulo h3 {
    font-size: 20px; /* Reducir tamaño de fuente para h3 */
  }
  .responsive-img {
    height: 200px;
    width: auto;
  }
  p {
    font-size: 16px; /* Reducir tamaño de fuente para el párrafo */
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
