<template>
  <v-row>
    <v-col md="6">
      <h1>Cierre Perimetral <br /></h1>
    </v-col>
    <v-col md="6">
      <v-img
        src="../assets/automatizados.png"
        alt="automatizados"
        height="700"
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
h1 {
  color: #ec0c05;
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
}
</style>
