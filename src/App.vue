<template>
  <div id="app">
    <header class="fixed-header">
      <div
        class="d-flex justify-space-between align-center"
        style="padding: 0 20px"
      >
        <v-img
          alt="Logo Seguridad Ya"
          src="../src/assets/logo.jpg"
          style="width: 400px"
        />
      </div>

      <div class="d-flex justify-space-around">
        <a href="/quienesSomos">
          <v-btn class="button">Quienes Somos</v-btn>
        </a>

        <v-btn class="button">
          Productos
          <v-menu activator="parent">
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
                @click="scrollToSection(item.path)"
              >
                <v-list-item-title class="custom-title">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>

        <a href="/preguntas">
          <v-btn class="button"
            >Preguntas <br />
            Frecuentes</v-btn
          >
        </a>

        <a href="/contactos">
          <v-btn class="button">Contactos</v-btn>
        </a>
      </div>
    </header>

    <main class="mt-10">
      <router-view />
    </main>

    <footer>
      <div>
        <v-img
          alt="Logo"
          src="../src/assets/logoRedondo.png"
          style="width: 100px"
        />
      </div>
      <div class="d-flex flex-row">
        <a
          href="https://www.instagram.com/seguridadyaoficial/"
          target="_blank"
          class="RNpQXe"
          style="width: 40px"
          ><v-img
            src="../src/assets/instagram.png"
            alt="Instagram"
            class="xbGufb"
            style="width: 40px; height: 40px"
        /></a>
        <a
          href="https://www.facebook.com/Seguridadyaoficial-100856535495510"
          target="_blank"
          class="RNpQXe"
          style="width: 40px"
          ><v-img
            src="../src/assets/facebook.png"
            alt="Facebook"
            class="xbGufb"
            style="width: 40px; height: 40px"
            width="48"
            height="48"
        /></a>
        <a
          href="https://api.whatsapp.com/send?phone=5492616675624"
          target="_blank"
          class="RNpQXe"
          style="width: 40px"
        >
          <v-img
            src="../src/assets/whatsapp.png"
            alt="Enlace"
            class="xbGufb"
            style="width: 40px; height: 40px"
            width="48"
            height="48"
        /></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Alarmas", path: "/alarmas" },
      { title: "Automatización de portones", path: "/automatizados" },
      { title: "Cámaras de seguridad", path: "/camaras" },
      { title: "Cercos eléctricos", path: "/cerco" },
      { title: "Cierre perimetral", path: "/cierre" },
    ],
  }),
  methods: {
    scrollToSection(path) {
      this.$router.push({ path });
    },
  },
};
</script>

<style>
#app {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: black;
}
.button {
  color: black;
  font-weight: bold;
  border-radius: 40px;
  padding: 10px;
  width: 150px;
  height: 20px;
  margin-inline: 10px;
  font-size: 13px;
  display: flex;
  align-items: center;
}
.custom-title {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 16px; /* Tamaño del texto */
  color: black; /* Color del texto */
}
.button:hover,
.button:focus {
  background-color: #848484; /* Color de fondo al pasar el mouse */
  color: white;
  transform: scale(1.1); /* Escalar el botón al pasar el mouse */
}
a {
  text-decoration: none;
  color: black;
}
html {
  scroll-behavior: smooth;
}

div[id] {
  scroll-margin-top: 100px;
}

header {
  background-color: black; /* Cambia este valor al color de fondo deseado */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

footer {
  background-color: black; /* Cambia este valor al color de fondo deseado */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
footer div {
  flex: 1;
  text-align: center;
}
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Asegura que el header esté por encima de otros elementos */
}
main {
  padding-top: 138px;
  background-color: #343434;
}
</style>
