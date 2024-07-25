<template>
  <div id="app">
    <header>
      <img alt="Logo" src="../src/assets/logo.jpg" style="float: left" />
      <nav>
        <a href="#QuienesSomos">Quienes Somos</a> |
        <a href="#Cerco">Cercos Eléctricos</a> |
        <a href="#Camaras">Camaras de seguridad</a> |
        <a href="#Alarmas">Alarmas</a> |
        <a href="#Automatizados">Automatizados</a> |
        <a href="#Contacto">Contactos</a>

        <!-- <router-link to="/">Quienes somos</router-link> |
        <router-link to="/CercoComponent">Cercos Eléctricos</router-link> |
        <router-link to="/about">Cámaras de Seguridad</router-link> |
        <router-link to="#">Alarmas</router-link> |
        <router-link to="#">Automatizados</router-link> |
        <router-link to="#">Contacto</router-link> -->
      </nav>
    </header>
    <router-view />
    <footer>
      <span>
        <img
          alt="Logo"
          src="../src/assets/logoRedondo.png"
          style="float: left"
        />
      </span>
      <div>
        <a
          href="https://www.instagram.com/seguridadyaoficial/"
          target="_blank"
          class="RNpQXe"
          style="width: 30px; height: 30px"
          ><img
            src="../src/assets/instagram.png"
            alt="Instagram"
            class="xbGufb"
            style="width: 40px; height: 40px"
        /></a>
        <a
          href="https://www.facebook.com/Seguridadyaoficial-100856535495510"
          target="_blank"
          class="RNpQXe"
          style="width: 30px; height: 30px"
          ><img
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
          style="width: 30px; height: 30px"
        >
          <img
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: red;
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
  color: black;
}
footer div {
  flex: 1;
  text-align: center;
}
footer span img {
  display: flex;
  align-items: center;

  width: 100px; /* Ajusta el ancho deseado */
  height: auto; /* Mantiene la proporción de la imagen */
  /* Alternativamente, podrías usar height para ajustar la altura */
  /* height: 100px; width: auto; */
}
</style>
