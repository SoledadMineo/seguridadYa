<template>
  <div class="caja">
    <v-container class="contenedor" id="preguntas">
      <v-table class="custom-table">
        <tr class="custom-celda">
          <td colspan="2">
            <div class="custom-header">
              <v-img src="../assets/pregunta.png" class="image"></v-img>
              <div class="title">PREGUNTAS FRECUENTES</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="custom-celda1" cols="12" md="6">
            <h2>1. ¿ES LEGAL INSTALAR CERCOS ELÉCTRICOS?</h2>
            <br />
            <p>
              Si, además de ser una empresa homologada por el organismo Lenor
              Group, dentro de las leyes de Argentina, éste sistema queda
              perfectamente definido en lo que se denomina legítima defensa.
            </p>
          </td>
          <td class="custom-celda2 medium-celda" cols="12" md="6">
            <h2>2. ¿ES LETAL?</h2>
            <br />
            <p>
              Nuestos equipos no son letales. La descarga no genera quemaduras
              ni daños permanentes.
            </p>
          </td>
        </tr>
        <tr>
          <td class="custom-celda3 medium-celda" cols="12" md="6">
            <h2>
              3. ¿SE NECESITA INFORMACIÓN PARA INSTALAR MI CERCO ELÉCTRICO?
            </h2>
            <br />
            <p>
              Nuestros operarios están altamente capacitados y avalados por la
              planta de elaboración del producto, para poder brindarte toda la
              información que necesites.
            </p>
          </td>
          <td class="custom-celda4 medium-celda" cols="12" md="6">
            <h2>4. ¿EL CONSUMO ELÉCTRICO ES MUY ALTO?</h2>
            <br />
            <p>
              No, su consumo es de 6 watts, similar al consumo de una lámpara de
              luz de 20 watts.
            </p>
          </td>
        </tr>
        <tr>
          <td class="custom-celda5 medium-celda" colspan="2" cols="12" md="6">
            <h2>5. ¿REQUIERE MANTENIMIENTO?</h2>
            <br />
            <p>
              Si, requiere un mínimo mantenimiento. Los
              <strong>usuarios</strong> deben mantener una poda prolija.
              Nosotros debemos realizar un
              <strong>mantenimiento anual</strong> que consiste en cambio de
              batería, control de estructura y tensado, reemplazo de los LEDs y
              Cambio de carteles reguladores preventivos.
            </p>
          </td>
        </tr>
      </v-table>
    </v-container>
  </div>
</template>

<script></script>

<style scoped>
.caja {
  background-image: url("../assets/cinta2.png");
  background-repeat: no-repeat;
  background-size: 100% 5%;
  background-position: 25%;
  margin-top: 5%;
}

.contenedor {
  display: flex;
  justify-content: center;
  background-color: #ec0c05;
  width: 60%;
}
.custom-table {
  width: 100%;
  max-width: 100%;
  font-size: 15px;
  padding: 7px;
}
.custom-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #848484; /* Cambiar color de fondo de las cabeceras */
  height: auto;
  padding: 5%;
}
.custom-celda,
.custom-celda1,
.custom-celda2,
.custom-celda3,
.custom-celda4,
.custom-celda5 {
  color: black;
  padding: 15px;
  vertical-align: top;
}
.custom-celda1 {
  background-color: #d7d7d7;
}
.custom-celda2 {
  background-color: #848484; /* Cambiar color de fondo de las celdas */
}
.custom-celda4 {
  background-color: #d7d7d7;
}
.custom-celda3 {
  background-color: #848484; /* Cambiar color de fondo de las celdas */
}
.custom-celda5 {
  background-color: #d7d7d7;
}

.image {
  width: 100px;
  height: auto;
  display: block;
  margin: 0 auto;
}
.title {
  color: black;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
}
.medium-celda {
  width: 50%;
  height: 250px;
}
h2 {
  text-align: center;
}
p {
  text-align: justify;
}

@media (max-width: 600px) {
  .custom-header {
    width: 100%;
  }
  .medium-celda {
    width: 100%; /* Ocupa todo el ancho disponible */
    height: auto; /* Ajusta la altura según el contenido */
  }
  .title {
    font-size: 18px; /* Reduce el tamaño de la fuente en pantallas pequeñas */
    margin-left: 0; /* Elimina el margen izquierdo */
  }
  .custom-celda {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .custom-celda1 {
    background-color: #d7d7d7;
    color: black;
  }
  .custom-celda2 {
    background-color: #848484;
    color: black;
  }
  .custom-celda3 {
    background-color: #d7d7d7;
    color: black;
  }
  .custom-celda4 {
    background-color: #848484;
    color: black;
  }

  .custom-celda5 {
    background-color: #d7d7d7;
    color: black;
  }

  tr {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>
