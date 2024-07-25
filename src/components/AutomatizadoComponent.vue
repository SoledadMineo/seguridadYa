<template>
  <div>
    <h1>Portones <br />Automatizados</h1>
    <img src="../assets/automatizados.jpg" alt="automatizados" />
  </div>
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
div {
  display: flex;
  justify-content: space-around;
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
