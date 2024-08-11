<template>
  <v-row id="cerco">
    <div>
      <v-img src="../assets/logoRedondo-sinFondo.png" />
    </div>
    <div class="contenedor">
      <v-col md="4" class="imagen">
        <v-img src="../assets/cerco.png" alt="cercos" />
      </v-col>

      <v-col md="8">
        <div class="celda">
          <div class="subtitulo">
            <h1>cercos</h1>
            <h3>eléctricos</h3>
          </div>
          <p class="custom-paragraph">
            Su consumo de energía es mínimo.
          </p>
          <div class="whatsApp">
            <a
              href="https://api.whatsapp.com/send?phone=5492616675624"
              target="_blank"
              class="RNpQXe"
            >
              <v-btn class="custom-button"> PEDIR PRESUPUESTO </v-btn></a
            >
          </div>
        </div>
      </v-col>
    </div>
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
.imagen {
  width: 10px;
  height: auto;
  margin: 3rem;
  padding: 2rem;
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
.contenedor {
  background-image: url("../assets/cinta2.png");
  background-repeat: no-repeat;
  background-size: 100% 8%;
  background-position: 10% 45%;
}
.celda {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 3rem 5rem 5rem 0rem;
}
.whatsApp {
  display: flex;
  justify-content: center; /* Centrando horizontalmente */
  width: 100%;
}
.subtitulo {
  display: flex;
  flex-direction: column;
}
.custom-paragraph {
  margin-right: 15%;
  text-align: justify;
}

div {
  display: flex;
  justify-content: space-between;
}
h1 {
  color: #ec0c05;
  font-size: 70px;
}
p {
  font-size: 17px;
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
  .subtitulo h1 {
    font-size: 25px;
  }
  .subtitulo h3 {
    font-size: 20px; /* Reducir tamaño de fuente para h3 */
  }
  .responsive-img {
    height: 50%;
    width: auto;
  }
  .custom-button {
    size: small;
  }
  p {
    font-size: 16px; /* Reducir tamaño de fuente para el párrafo */
    text-align: justify;
    margin-right: 5%;
  }
}
</style>
