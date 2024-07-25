<template>
  <div>
    <h1>Datos de Contacto</h1>
    <h3>
      <b>Telefonos:</b><br />
      Córdoba <br />
      +54 9 3541 66-6709 <br /><b>Mendoza</b><br />
      +54 9 2616 67-5624
    </h3>
    <h3>España 1340, Mendoza, Argentina 5500</h3>
  </div>
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
