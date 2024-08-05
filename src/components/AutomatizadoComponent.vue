<template>
  <v-row class="contenedor">
    <v-col sm="12" xs="12" md="6" >
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

    <v-col sm="12" xs="12" md="6">
      <v-img
        src="../assets/automatizados.png"
        alt="automatizados"
        height="600"
        width="100%"
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
  margin: 2%;
}
.titulo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 10%;
}
.subtitulo{
  display: flex;
  flex-direction: column;
}
div {
  display: flex;
  justify-content: space-between;
}
h1 {
  color: #ec0c05;
  font-size: 80px;
}
img {
  width: 250px;
  height: auto;
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
    
    margin: 1%;
  }
  .titulo {
    margin-left: 5%;
    align-items: center; /* Centrar contenido horizontalmente */
  }
  .subtitulo {
    align-items: center; /* Centrar contenido horizontalmente */
  }
  h1 {
    font-size: 40px; /* Reducir tamaño de fuente para h1 */
  }
  h3 {
    font-size: 20px; /* Reducir tamaño de fuente para h3 */
  }
  p {
    font-size: 16px; /* Reducir tamaño de fuente para el párrafo */
    text-align: justify;
    margin-right: 5%;
  }
  .responsive-img {
    width: 80%; /* Ajustar el ancho de la imagen al 80% del contenedor */
  }
  .subtitulo h1 {
    font-size: 40px;
  }


}
@media (max-width: 960px) {
  
 
}
</style>
