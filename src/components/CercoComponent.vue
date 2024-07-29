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
          <v-btn rounded="xl" size="x-large" color="#40c351">
            Pedir Presupuesto
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
}
</style>
./QuienesSomos.vue./QuienesSomos.vue
