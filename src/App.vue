<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer v-model="drawer" temporary right>
        <v-list>
          <v-list-item>
            <row class="d-flex justify-center">
              <div class="imagen-wrapper">
            <v-img src="./assets/logoRedondo-sinFondo.png"  aspect-ratio="1.5"></v-img>
          </div>
          </row>
          </v-list-item>
          <v-list-item
            v-for="(menu, index) in menus"
            :key="index"
            @click="handleItemClick(menu.path)"
          >
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="black" dark>
        <v-container fluid>
          <v-row class="encabezado">
            <v-col class="d-flex align-center justify-start" cols="4" md="4">
              <v-img
                alt="Logo Seguridad Ya"
                src="../src/assets/logo.jpg"
                style="width:70%"
                @click="scrollToSection('cerco')"
              />
            </v-col>
            <v-col class="d-flex align-center justify-end" cols="8" md="8">
              <v-app-bar-nav-icon
                @click="drawer = !drawer"
                v-if="mobileView"
              ></v-app-bar-nav-icon>

              <div v-if="!mobileView">
                <v-btn class="button" @click="scrollToSection('quienesSomos')"
                  >Quienes Somos</v-btn
                >
                <v-btn class="button">
                  Productos
                  <v-menu activator="parent" rigth>
                    <v-list>
                      <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        @click="scrollToSection(item.path)"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-btn>
                <v-btn class="button" @click="scrollToSection('preguntas')"
                  >Preguntas Frecuentes</v-btn
                >
                <v-btn class="button" @click="scrollToSection('contactos')"
                  >Contactos</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>

      <main>
        <router-view />
      </main>

      <v-fab-transition>
        <v-btn
          icon
          large
          @click="handleClick"
          class="whatsapp-button"
          elevation="24"
        >
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
            />
          </a>
        </v-btn>
      </v-fab-transition>

      <footer class="footer">
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
          >
            <v-img
              src="../src/assets/instagram.png"
              alt="Instagram"
              class="xbGufb"
              style="width: 40px; height: 40px"
            />
          </a>
          <a
            href="https://www.facebook.com/Seguridadyaoficial-100856535495510"
            target="_blank"
            class="RNpQXe"
            style="width: 40px"
          >
            <v-img
              src="../src/assets/facebook.png"
              alt="Facebook"
              class="xbGufb"
              style="width: 40px; height: 40px"
              width="48"
              height="48"
            />
          </a>
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
            />
          </a>
        </div>
      </footer>
    </v-app>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer:false,
    items: [
      { title: "Alarmas", path: "alarmas" },
      { title: "Automatización de portones", path: "automatizados" },
      { title: "Cámaras de seguridad", path: "camaras" },
      { title: "Cercos eléctricos", path: "cerco" },
      { title: "Cierre perimetral", path: "cierre" },
    ],
    menus: [
      { title: "Quienes Somos", path: "quienesSomos" },
      { title: "Alarmas", path: "alarmas" },
      { title: "Automatización de portones", path: "automatizados" },
      { title: "Cámaras de seguridad", path: "camaras" },
      { title: "Cercos eléctricos", path: "cerco" },
      { title: "Cierre perimetral", path: "cierre" },
      { title: "Preguntas Frecuentes", path: "preguntas" },
      { title: "Contactos", path: "contactos" },
    ],
    mobileView: window.innerWidth <= 1025,
  }),
  methods: {
    scrollToSection(path) {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    handleItemClick(path) {
      this.scrollToSection(path);
      this.drawer = false; // Cierra el drawer después de hacer clic
    },
    handleView() {
      this.mobileView = window.innerWidth <= 1025;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleView);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleView);
  },
};
</script>

<style>

.v-navigation-drawer--right {
  right: 0;
  left: auto;
}
.responsive-image{
  width: 5%;
}
.imagen-wrapper{
  width: 40%;
}
.app {
  position: relative;
  height: 100%;
  margin: 0;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  background-color: white;
  display: flex;
  flex-direction: column;
}
.encabezado {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
.button-menu {
  color: #d7d7d7;
  font-weight: bold;
  border-radius: 60px;
  padding: 10px;
  width: 100px;
  height: 20px;
  margin-inline: 10px;
  font-size: 13px;
  display: flex;
  align-items: center;
  background-color: white;
}
.custom-title {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 16px; /* Tamaño del texto */
  color: black; /* Color del texto */
}
.button-menu:hover,
.button-menu:focus {
  background-color: red; /* Color de fondo al pasar el mouse */
  color: white;
  transform: scale(1.1); /* Escalar el botón al pasar el mouse */
}
.whatsapp-button {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #25d366 !important; /* Color verde de WhatsApp */
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.1);
}
#navigation-icon {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
}

#navigation-icon i {
  font-size: 2rem;
}

main {
  margin: 0;
  padding: 0;
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
  padding: 3%;
  margin: 0;
}
.footer {
  background-color: black; /* Cambia este valor al color de fondo deseado */
  display: flex;
  align-items: center;
  width: 100%;
  height: 7rem;
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
  background-color: black;
  display: flex;
  align-items: center;
  padding: 10px;
}
#navigation-icon {
  display: block; /* Ocultar por defecto */
}
main {
  padding-top: 150px;
  background-color: white;
}
.mt-10 {
  padding-bottom: 7rem;
}

.icon-menu {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 20px;
  top: 16px;
}
@media (max-width: 1024px) {
  .fixed-header {
    flex-direction: column;
    align-items: flex-start;
  }

  #navigation-icon {
    display: block; /* Mostrar icono de menú en móviles */
  }

  .d-flex {
    display: none; /* Ocultar elementos de navegación en móviles */
  }

  .mobile-view {
    display: block; /* Mostrar vista móvil */
  }
  #icon-menu {
    display: none; /* Ocultar por defecto */
  }
}

@media (max-width: 768px) {
  v-img {
    width: 100px;
  }
  #icon-menu {
    display: block; /* Mostrar icono de menú en pantallas más pequeñas */
  }
  .fixed-header {
    display: flex;
  }
}

</style>
