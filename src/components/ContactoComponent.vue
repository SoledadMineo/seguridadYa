<template>
  <div class="centered-column" id="contactos">
    <h1>CONTÁCTENOS</h1>
    <v-container fluid>
      <v-row>
        <v-col class="informacion" cols="12" md="6">
          <div class="clase">
            <v-img
              src="../assets/ubicacion.png"
              class="imagen"
              width="25"
              height="25"
            ></v-img>
            <p>
              España 1340, Piso 14 Oficina 3<br />
              Código postal 5500, Capital <br />
              Mendoza, Argentina <br />
            </p>
          </div>
          <div class="clase">
            <v-img
              src="../assets/correo-electronico.png"
              class="imagen"
              width="25"
              height="25"
            ></v-img>
            <p>seguridadyamza@gmail.com</p>
          </div>

          <div class="clase">
            <v-img
              src="../assets/boton-de-simbolo-de-telefono.png"
              class="imagen"
              width="25"
              height="25"
            ></v-img>
            <p>+54 9 2616 67-5624</p>
          </div>
          <br />
          <a
            href="https://api.whatsapp.com/send?phone=5492616675624"
            target="_blank"
            class="RNpQXe"
          >
            <v-btn class="custom-button"> ENVIAR WHATSAPP </v-btn></a
          >
        </v-col>
        <v-col id="mapa" class="mapa" cols="12" md="6"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ContactoComponent",
  props: {
    msg: String,
  },
  mounted() {
    this.loadMapScript();
  },
  methods: {
    loadMapScript() {
      let apikey = process.env.VUE_APP_API_KEY;
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apikey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => this.initMap(); // Llamar a la función para inicializar el mapa una vez que el script ha cargado
        document.head.appendChild(script);
      } else {
        this.initMap();
      }
    },

    initMap() {
      const mapElement = document.getElementById("mapa");
      if (mapElement && window.google) {
        /* eslint-disable-next-line no-undef */
        this.map = new google.maps.Map(mapElement, {
          center: {
            lat: -32.887669,
            lng: -68.84137,
          },
          zoom: 17,
        });
        // Crear un marcador en la ubicación de la empresa
        /* eslint-disable-next-line no-undef */
        const marker = new google.maps.Marker({
          position: {
            lat: -32.887669, // Latitud de tu empresa
            lng: -68.84137, // Longitud de tu empresa
          },
          map: this.map,
          title: "Seguridad Ya", // Texto que aparece al pasar el cursor sobre el pin
        });

        // Agregar un evento click al marcador
        marker.addListener("click", function () {
          // Construir la URL de Google Maps con la ubicación del marcador
          const googleMapsUrl = `https://www.google.com/maps?q=${this.getPosition().lat()},${this.getPosition().lng()}`;
          // Redirigir al usuario a la URL de Google Maps
          window.open(googleMapsUrl, "_blank");
        });
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centered-column {
 
  align-items: center; /* Centra horizontalmente */
  text-align: center; /* Opcional: Centra el texto dentro de los elementos */
  background-color: white;
  padding: 3%;
  margin: auto;
  height: auto;
  margin-bottom: 0%;
  margin-top: 3%;
  background-image: url("../assets/cinta2.png");
  background-repeat: no-repeat;
  background-size: 100% 7%;
}
.custom-button {
  display: flex;
  align-items: center;
  justify-content: center;
  size: large;
  font-weight: bold;
  background-color: #40c351;
  color: black;
  border-radius: 10vw; /* Esquinas redondeadas */
  transition: all 0.3s ease; /* Transición suave */
  margin-top: 10px;
}
.custom-button:hover,
.custom-button:focus {
  background-color: #848484; /* Color de fondo al pasar el mouse */
  color: #40c351;
  transform: scale(1.1); /* Escalar el botón al pasar el mouse */
}

.clase {
  display: flex;
  align-items: center;
  margin-block: 3%;
}
h1 {
  text-align: center;
  padding: 3%;
}
p {
  text-align: justify;
  margin: 0;
}
a {
  text-decoration: none;
}
.mapa {
  width: 400px;
  height: 400px;
  border: 0.3vw solid #ddd;
  margin-bottom: 1%;
  padding: 15px;
}
.imagen {
  margin-right: 15px;
  padding: 15px;
}

.informacion {
  /* display: flex;
  flex-direction: column; 
  align-items: last baseline;
  margin-right: 40%; */
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  padding: 10px;
  width: 100%; 
}

@media (max-width: 768px) {
  .centered-column {
    flex-direction: column; /* Asegura que los elementos se coloquen uno debajo del otro en pantallas pequeñas */
    align-items: center; /* Mantén todo centrado horizontalmente en pantallas pequeñas */
    background-size: 100% 1%;
    margin: 0%;
    padding: 0%;
    margin-top: 2%;
  }

  .informacion {
    text-align: left;
    margin-bottom: 20px;
  }

  #mapa {
    width: 100%;
    margin-top: 2%;
  }
}
</style>
