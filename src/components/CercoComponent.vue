<template>
  <div>
    <v-row>
      <v-col md="6">
        <v-img
          src="../assets/cercos.png"
          alt="cercos"
          height="700"
          width="100%"
        />
      </v-col>
      <v-col md="6" class="d-flex flex-column align-center">
        <h1>Cercos electricos<br />inteligencia artificial</h1>
        <a
          href="https://api.whatsapp.com/send?phone=5492616675624"
          target="_blank"
          class="RNpQXe"
        >
          <v-btn class="custom-button">
            PEDIR PRESUPUESTO
          </v-btn></a
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

.custom-button{
  display: flex;
  align-items: center;
  justify-content: center;
  size: large;
  font-weight: bold;
  padding: 20px ; 
  background-color: #40c351;
  color: black; 
  border-radius: 40px; /* Esquinas redondeadas */
  transition: all 0.3s ease; /* Transición suave */
}
.custom-button:hover, .custom-button:focus {
  background-color: #848484; /* Color de fondo al pasar el mouse */
  color: #40c351;
  transform: scale(1.1); /* Escalar el botón al pasar el mouse */
}
div {
  display: flex;
  justify-content: space-around;
}
h1 {
  color: white;
}
img {
  width: 250px;
  height: auto;
}
h3 {
  margin: 40px 0 0;
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
