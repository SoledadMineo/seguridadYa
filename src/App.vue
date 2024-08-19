<template>
  <div id="app">
    <v-app>
      <v-toolbar class="menu" color="black">
        <v-toolbar-title>
          <v-img
            src="./assets/logo.jpg"
            alt="Logo Seguridad Ya"
            @click="scrollToSection('cerco')"
            class="hover-cursor logo-img"
          ></v-img>
        </v-toolbar-title>
        <v-space></v-space>
        <v-toolbar-item v-if="mobileView">
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <v-navigation-drawer v-model="drawer" permanent>
            <v-list>
              <v-list-item>
                <row class="d-flex justify-center">
                  <div class="imagen-wrapper">
                    <v-img
                      src="./assets/logoRedondo-sinFondo.png"
                      aspect-ratio="1.5"
                    ></v-img>
                  </div>
                </row>
                <v-divider class="linea"></v-divider>
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
        </v-toolbar-item>

        <v-toolbar-item v-if="!mobileView">
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
          <v-btn class="button" @click="scrollToSection('quienesSomos')">
            Quienes Somos
          </v-btn>
          <v-btn class="button" @click="scrollToSection('preguntas')">
            Preguntas Frecuentes
          </v-btn>
          <v-btn class="button" @click="scrollToSection('contactos')">
            Contactos
          </v-btn>
        </v-toolbar-item>
      </v-toolbar>

      <v-main>

     
      </v-main>

        <router-view />

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
      </v-main>
      <footer class="footer">
        <div>
          <v-img
            alt="Logo"
            src="../src/assets/logoRedondo.png"
            @click="scrollToSection('cerco')"
            class="hover-cursor"
            style="
              max-width: 4rem;
              height: auto;
              display: block;
              margin-left: 10%;
              margin-bottom: 0%;
            "
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
    drawer: false,
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
.responsive-image {
  width: 5%;
}
.imagen-wrapper {
  width: 40%;
}
.linea {
  color: black;
  opacity: 50%;
  margin: 8px;
}
.logo-img {
  width: 20rem;
}
.app {
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  background-color: white;
  display: flex;
  flex-direction: row;
}
.hover-cursor {
  cursor: pointer;
}
.menu {
  background-color: black;
  padding: 2%;
  display: flex;
  position: fixed;
  z-index: 1000;
}
.custom-title {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 16px; /* Tamaño del texto */
  color: black; /* Color del texto */
}
.button:hover,
.button:focus {
  background-color: #ec0c05; /* Color de fondo al pasar el mouse */
  color: white;
  transform: scale(1.1); /* Escalar el botón al pasar el mouse */
}
.whatsapp-button {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1000;
  background-color: #25d366 !important; /* Color verde de WhatsApp */
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.1);
}
.v-main {
  position: relative;
  margin: 0;
  padding: 0;
  background-color: white;
  margin-top: 2rem;
}
a {
  text-decoration: none;
  color: black;
}
html {
  scroll-behavior: smooth;
}

.footer {
  background-color: black; /* Cambia este valor al color de fondo deseado */
  display: flex;
  align-items: center;
  width: 100%;
  height: 7rem;
  z-index: 1000;
}
footer div {
  flex: 1;
  text-align: center;
}
@media (max-width: 1920px) {
  .v-main {
    margin-top: 4rem;
  }
}

@media (max-width: 1280px) {
  .v-main {
    margin-top: 4rem;
  }  
}
@media (max-width: 1024px) {
  .logo-img {
    width: 10rem;
  }
  .d-flex {
    display: none; /* Ocultar elementos de navegación en móviles */
  }
  .mobile-view {
    display: block; /* Mostrar vista móvil */
  }
}

@media (max-width: 768px) {
  v-img {
    width: 100px;
  }
  .v-main {
    margin-top: 2rem;
  }  
}
</style>
