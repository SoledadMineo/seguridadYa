<template>
  <div>
    <h1>¿Quienes somos?</h1>
    <h3>
      Somos una empresa mendocina con más de 10 años de trayectoria, brindando
      siempre el mejor servicio a través de productos homologados, garantías
      extendidas, servicio posventa y la posibilidad permanente de un diálogo
      constante entre la empresa y nuestros clientes.
    </h3>
    <img src="" alt="" />
  </div>
</template>

<script>
export default {
  name: "QuienesSomos",
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

h1 {
  margin: 100px 50px 50px;
  color: red;
  font-size: 50px;
}
h3 {
  margin: 50px 50px 50px;
  color: black;
  font-size: 20px;
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
