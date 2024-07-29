<template>
  <v-col md="6" class="text-center">
    <h2>Estamos en Contacto</h2>
    <br />
    <h3>
      <v-icon src="../src/assets/ubicacion.png" width="48" height="48"></v-icon
      >España 1340, Piso 14 Oficina 3
      <br />
      Código postal 5500, Capital <br />
      Mendoza, Argentina <br />
      seguridadyamza@gmail.com <br />
      +54 9 2616 67-5624<br /><br />
      <a
        href="https://api.whatsapp.com/send?phone=5492616675624"
        target="_blank"
        class="RNpQXe"
      >
        <v-btn rounded="xl" size="large" color="#40c351">
          ENVIAR WHATSAPP
        </v-btn></a
      >
    </h3>
  </v-col>
</template>

<script>
export default {
  name: "ContactoComponent",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: white;
}
img {
  width: 250px;
  height: auto;
}
h2 {
  color: white;
}
h3 {
  color: white;
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
}
</style>
