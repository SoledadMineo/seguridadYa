<template>
  <v-row id="camaras">
    <div class="contenedor">
      <v-col md="7">
        <div class="celda">
          <div class="subtitulo">
            <h1>cámaras</h1>
            <h3>de seguridad</h3>
          </div>
          <p class="custom-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            veritatis numquam reiciendis blanditiis accusantium deserunt fugiat.
            Eum natus labore delectus aperiam, expedita doloribus voluptatibus
            harum! Nobis ipsa quibusdam quam? Ullam?
          </p>
        </div>
      </v-col>
      <v-col md="5" class="imagen">
        <v-img src="../assets/camaras.png" alt="camaras" />
      </v-col>
    </div>
  </v-row>
</template>

<script>
export default {
  name: "CamarasComponent",
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
.celda {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0rem 5rem 5rem 5rem;
}
.imagen {
  height: 500px;
  width: auto;
}
.custom-paragraph {
  margin-right: 0%;
  text-align: justify;
}
.subtitulo {
  display: flex;
  flex-direction: column;
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
    height: 500px;
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
