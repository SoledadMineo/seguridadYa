<template>
  <v-row class="contenedor" id="alarmas">
    <v-col sm="12" xs="12" md="6">
      <v-img class="responsive-img" src="../assets/alarmas.png" alt="alarmas" />
    </v-col>
    <v-col sm="12" xs="12" md="6">
      <div class="titulo">
        <div class="subtitulo">
          <h1>alarmas</h1>
          <h3>monitoreadas</h3>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis numquam reiciendis blanditiis accusantium deserunt fugiat.
          Eum natus labore delectus aperiam, expedita doloribus voluptatibus
          harum! Nobis ipsa quibusdam quam? Ullam?
        </p>
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
.subtitulo {
  display: flex;
  flex-direction: column;
}

div {
  display: flex;
  justify-content: space-between;
}

img {
  width: 100%;
  height: auto;
}
h1 {
  color: #ec0c05;
  font-size: 80px;
}
h3 {
  color: black;
  font-size: 40px;
}
p {
  font-size: 20px;
}

@media (max-width: 600px) {
  .contenedor {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }
  .titulo {
    margin: 0;
    align-items: left; /* Centrar contenido horizontalmente */
  }
  .subtitulo h1 {
    font-size: 25px;
  }
  .subtitulo h3 {
    font-size: 20px;
  }
  .responsive-img {
    width: 30%;
  }
  p {
    font-size: 16px;
    text-align: justify;
    margin-right: 5%;
  }
}
@media (max-width: 960px) {
  h1 {
    font-size: 60px;
  }
  .responsive-img {
    width: 80%;
  }
}
</style>
./QuienesSomos.vue./QuienesSomos.vue
