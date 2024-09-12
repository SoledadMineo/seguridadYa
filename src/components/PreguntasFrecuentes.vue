<template>
  <div class="caja" id="preguntas">
    <v-container class="contenedor" >
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
              Group. Este sistema tiene un encuadre legal dentro del artículo 25° del C.P.N.
              que establece la obligación de señalizar peligros para la seguridad de las personas.
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
        <tr class="custom-celda5">
          
          <td colspan="2">
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
        
        </tr>
      </v-table>
    </v-container>
  </div>
</template>

<script></script>

<style scoped>
.caja {
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
 
}
.custom-table {
  width: 100%;
  max-width: 100%;
  font-size: 15px;
  border: 0.8vw solid #ec0c05;
}
  .custom-header {
  background-image: url("../assets/cinta2.png");
  background-repeat: no-repeat;
  background-size: 100% 15%;
  background-position: bottom;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white; /* Cambiar color de fondo de las cabeceras */
  height: auto;
  padding: 2%;
}
.custom-celda,
.custom-celda1,
.custom-celda2,
.custom-celda3,
.custom-celda4,
.custom-celda5{
  color: black;
  padding: 15px;
  vertical-align: top;
}
.custom-celda1, .custom-celda4 {
  background-color: white;
}
.custom-celda2, .custom-celda3, .custom-celda5 {
  background-color: black; /* Cambiar color de fondo de las celdas */
  color: white;
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
  height: auto;
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
@media (max-width: 1024px) {
  .custom-header {
    width: 100%;
    background-size: 100% 8%;
  }
  .custom-celda5,
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
  .custom-celda1, .custom-celda3, .custom-celda5 {
    background-color: black;
    color: white;
  }
  .custom-celda2, .custom-celda4  {
    background-color: white;
    color: black;
  }
  .contenedor {
  width: 100%;
  }
  tr {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>
