<template>
  <div class="contenedor">
    <v-row>
      <v-col md="6">
        <v-img
          src="../assets/cerco.png"
          alt="cercos"
          height="600"
          width="100%"
        />
      </v-col>
      <v-col md="6" class="columna">
        <div class="titulo mr-10">
          <h1>cercos</h1>
          <h3>eléctricos</h3>
        </div>
        <div>
          <p class="mr-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            veritatis numquam reiciendis blanditiis accusantium deserunt fugiat.
            Eum natus labore delectus aperiam, expedita doloribus voluptatibus
            harum! Nobis ipsa quibusdam quam? Ullam?
          </p>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=5492616675624"
          target="_blank"
          class="RNpQXe"
        >
          <v-btn class="custom-button"> PEDIR PRESUPUESTO </v-btn></a
        >
      </v-col>
    </v-row>
  </div>
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
  background-position: 20%;
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
  flex-wrap: wrap;
  align-items: left;
  justify-content: start;
}
.columna {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
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
img {
  width: 250px;
  height: auto;
}
h3 {
  color: black;
  font-size: 40px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>
./QuienesSomos.vue./QuienesSomos.vue
