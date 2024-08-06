<template>
    <v-row class="contenedor" id="cerco">
      <v-col sm="12" xs="12" md="6">
        <v-img
          class="responsive-img"
          src="../assets/cerco.png"
          alt="cercos"
          height="600"
          width="100%"
        />
      </v-col>
      <v-col sm="12" xs="12" md="6">
        <div class="titulo">
          <div class="subtitulo">
            <h1>cercos</h1>
            <h3>eléctricos</h3>
          </div>

          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              veritatis numquam reiciendis blanditiis accusantium deserunt
              fugiat. Eum natus labore delectus aperiam, expedita doloribus
              voluptatibus harum! Nobis ipsa quibusdam quam? Ullam?
            </p>
          </div>
          <a
          href="https://api.whatsapp.com/send?phone=5492616675624"
          target="_blank"
          class="RNpQXe"
          >
          <v-btn class="custom-button"> PEDIR PRESUPUESTO </v-btn></a
          >
        </div>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: "CercoComponent",
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
.titulo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 10%;
}
.subtitulo {
  display: flex;
  flex-direction: column;
}

div {
  display: flex;
  justify-content: space-around;
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
a {
  color: #42b983;
  text-decoration: none;
}
@media (max-width: 600px) {
  .subtitulo h1 {
    font-size: 50px;
  }

  .subtitulo {
    margin: 0;
    padding: 10px;
    align-items: left;
  }
  .titulo {
    margin-left:10%;
    align-items: center;
  }
  p {
    font-size: 14px;
    text-align: justify;
    margin-right: 5%;
  }
}
@media (max-width: 960px) {
  h1{
    font-size: 60px;
  }
 
}

</style>
./QuienesSomos.vue./QuienesSomos.vue
