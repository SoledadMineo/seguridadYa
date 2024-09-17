<template>
  <div class="app">
    <v-app>
      <v-toolbar class="menu" color="black">
        <v-toolbar-title>
          <v-img
            src="./assets/ultimo.png"
            height="94px"
            display="block"
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

          <v-navigation-drawer v-model="drawer" temporary app>
            <v-list>
              <v-list-item>
                <v-row class="d-flex justify-center"> </v-row>
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

      <v-main class="main-content">
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
            src="./assets/ultimo.png"
            alt="Logo Seguridad Ya"
            @click="scrollToSection('cerco')"
            class="hover-cursor logo-img-footer"
          ></v-img>
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
      <div class="creador">
        
        <a href="https://api.whatsapp.com/send?phone=5492616921408">
          <v-img
            src="../src/assets/LaSo.png"
            alt="Enlace"
            class="logo"
            style="width: 60px; height: 60px"
          />
        </a>
        <p>Desarrollado por LaSo Solution</p>
      </div>
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
        const yOffset = -100;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
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
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  background-color: white;
}
.menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 7rem;
  background-color: black;
  z-index: 1000;
  padding: 1rem;
}
.main-content {
  flex: 1;
}
.footer {
  background-color: black; /* Cambia este valor al color de fondo deseado */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7rem;
  box-sizing: border-box;
  z-index: 1000;
}
.footer > div {
  flex: 1;
}
.logo-img {
  width: 20rem;
}
.logo-img-footer {
  width: 10rem;
}
.hover-cursor {
  cursor: pointer;
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
.whatsapp-button:hover,
.whatsapp-button:focus {
  transform: scale(1.2); /* Aumenta el tamaño del botón al 110% */
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
a {
  text-decoration: none;
  color: black;
}
.creador {
  background-color: black;
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 10px;
  text-align: center;
  justify-content: right;
}
.creador .logo{
  align-items: center;
  justify-content: center;
}

@media (max-width: 1280px) {
  .main-content {
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
  .main-content {
    margin-top: 2rem;
  }
}
</style>
