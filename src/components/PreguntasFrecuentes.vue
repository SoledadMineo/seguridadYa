<template>
  <div class="caja">
    <v-img src="../assets/cinta2.png" class="card-img"></v-img>
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
          <td class="custom-celda1" cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
            <h2>1. ¿ES LEGAL INSTALAR CERCOS ELÉCTRICOS?</h2>
            <br />
            <p>
              Si, además de ser una empresa homologada por el organismo Lenor
              Group, dentro de las leyes de Argentina, éste sistema queda
              perfectamente definido en lo que se denomina legítima defensa.
            </p>
          </td>
          <td class="custom-celda2 medium-celda" cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
            <h2>2. ¿ES LETAL?</h2>
            <br />
            <p>
              Nuestos equipos no son letales. La descarga no genera quemaduras
              ni daños permanentes.
            </p>
          </td>
        </tr>
        <tr>
          <td class="custom-celda3 medium-celda" cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
            <h2>
              3. ¿TENGO QUE PAGAR UN ABONO MENSUAL POR EL SERVICIO DE MONITOREO?
            </h2>
            <br />
            <p>
              NO, no se paga porque trabajamos con alarmas Automonitoreadas, es decir que permiten
              a los usuarios controlar y gestionar su propio sistema de alarma
              sin necesidad de conectarse a una central de monitoreo externo.
            </p>
          </td>
          <td class="custom-celda4 medium-celda" cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
            <h2>4. ¿EL CONSUMO ELÉCTRICO ES MUY ALTO?</h2>
            <br />
            <p>
              No, su consumo es de 6 watts, similar al consumo de una lámpara de
              luz de 20 watts.
            </p>
          </td>
        </tr>
        <tr>
          <td class="custom-celda5 medium-celda" cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
            <h2>5. ¿REQUIERE MANTENIMIENTO EL CERCO ELÉCTRICO?</h2>
            <br />
            <p>
              Si, requiere un mínimo mantenimiento de poda por parte de los <strong>usuarios</strong>.
              <br />
              La empresa ofrece un <strong>mantenimiento anual</strong> que consiste en:
              <ul class="custom-list">
              <li>Cambio de batería.</li>
              <li>Control de estructura y tensado.</li>
              <li>Reemplazo de los LEDs.</li>
              <li>Cambio de carteles reguladores preventivos.</li>       
              </ul>   

            </p>
          </td>
        <td class="custom-celda6 medium-celda" cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
            <h2>6. ¿QUÉ VENTAJAS TENGO AL INSTALAR ALARMAS DOMÓTICAS?</h2>
            <br />
            <p>
              Accedes a la automatización y el control inteligente de tu vivienda.
              Es decir, te permite integrar el sistema de <strong>alarmas domóticas</strong> 
              con la automatización del hogar, permitiendo conectar
              a una amplia gama de dispositivos inteligentes como luces, persianas,
              cámaras, termostatos, cerraduras y asistentes virtuales (Alexa).
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
.custom-list{
  list-style-type: square; /* Tipo de viñeta */
  padding-left: 30px; /* Ajusta el espacio desde el borde izquierdo */
  margin: 20px 0; /* Ajusta los márgenes superior e inferior */
}
.contenedor {
  display: flex;
  justify-content: center;
  background-color: #ec0c05;
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
.custom-celda5,
.custom-celda6 {
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
.custom-celda6 {
  background-color: #848484; /* Cambiar color de fondo de las celdas */
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
li {
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

  .custom-celda6 {
    background-color: #848484;
    color: black;
  }

  tr {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>
