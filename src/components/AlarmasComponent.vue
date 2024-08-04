<template>
  <v-row class="contenedor">
    <v-col md="6">
      <v-img
        src="../assets/alarmas.png"
        alt="alarmas"
        height="600"
        width="100%"
      />
    </v-col>
    <v-col md="6" class="columna">
      <div class="titulo">
        <h1>alarmas</h1>
        <h3>monitoreadas</h3>
        <br /><br /><br /><br /><br /><br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis numquam reiciendis blanditiis accusantium deserunt fugiat.
          Eum natus labore delectus aperiam, expedita doloribus voluptatibus
          harum! Nobis ipsa quibusdam quam? Ullam?
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AlarmasComponent",
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
}
.titulo {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  margin-left: 10%;
  padding: 0;
}
.columna {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

div {
  display: flex;
  justify-content: space-around;
}

img {
  width: 250px;
  height: auto;
}
h1 {
  color: #ec0c05;
  font-size: 80px;
}
h3 {
  color: black;
  font-size: 40px;
}
p {
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
./QuienesSomos.vue./QuienesSomos.vue
