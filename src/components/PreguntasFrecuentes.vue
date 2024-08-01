<!-- <template>
    <container>
      <div class="text-subtitle-2 mt-4 mb-2">
        <h1>PREGUNTAS FRECUENTES</h1>
  
        <v-expansion-panels class="my-4" variant="popout">
          <v-expansion-panel
            title="1. ¿Es legal instalar cercos eléctricos?"
            text="Si, además de ser una empresa homologada por el laboratorio Lenor,
              dentro de las leyes de Argentina éste sistema queda perfectamente
              definido en lo que se denomina legítima defensa."
          ></v-expansion-panel>
          <v-expansion-panel
            text=" Nuestos equipos no son letales. La descarga no genera quemaduras ni
              daños permanentes.."
            title="2. ¿Es letal?"
          ></v-expansion-panel>
  
          <v-expansion-panel
            text="Nuestros operarios están altamente capacitados y avalados por la
              planta de elaboración del producto."
            title="3. ¿Se necesita información para instalar mi cerco eléctrico?"
          ></v-expansion-panel>
  
          <v-expansion-panel
            text="No, su consumo es de 6W menos que una lámpara de luz."
            title="4. ¿El consumo eléctrico es muy alto?"
          ></v-expansion-panel>
  
          <v-expansion-panel
            text="Si, requiere un mínimo mantenimiento de dos tipos, - los usuarios
              deben mantener una poda prolija - nosotros una vez al año se cambia
              la batería, se realiza un control de estructura y tensado, reemplazo
              del leds y cambio de carteles reguladores preventivos."
            title="5. ¿Requiere mantenimiento?"
          ></v-expansion-panel>
        </v-expansion-panels>
      </div>
    </container>
  </template>
  
  <script>
  export default {
    name: "PreguntasFrecuentes",
    props: {
      msg: String,
    },
  };
  </script>
  
  <style scoped>
  .v-expansion-panel {
    max-width: 1000px;
    background-color: white;
    font-size: 20px;
  }
  div {
    text-align: left;
  }
  h1 {
    text-align: center;
    
    color: white;
  }
  h3 {
    margin: 40px 0 0;
  }
  </style> -->

<!--OTRA OPCION-->

<template>
  <v-container class="contenedor">
    <v-table class="custom-table">
      <tr>
        <td colspan="2">
          <div class="custom-header">
            <v-img src="../assets/pregunta.png" class="image"></v-img>
            <div class="title">PREGUNTAS FRECUENTES</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="custom-celda1 medium-celda">
          <h2>1. ¿ES LEGAL INSTALAR CERCOS ELÉCTRICOS?</h2>
          <br />
          <p>
            Si, además de ser una empresa homologada por el laboratorio Lenor,
            dentro de las leyes de Argentina, éste sistema queda perfectamente
            definido en lo que se denomina legítima defensa.
          </p>
        </td>
        <td class="custom-celda2 medium-celda">
          <h2>2. ¿ES LETAL?</h2>
          <br />
          <p>
            Nuestos equipos no son letales. La descarga no genera quemaduras ni
            daños permanentes.
          </p>
        </td>
      </tr>
      <tr>
        <td class="custom-celda2 medium-celda">
          <h2>3. ¿SE NECESITA INFORMACIÓN PARA INSTALAR MI CERCO ELÉCTRICO?</h2>
          <br />
          <p>
            Nuestros operarios están altamente capacitados y avalados por la
            planta de elaboración del producto, para poder brindarte toda la
            información que necesites.
          </p>
        </td>
        <td class="custom-celda1 medium-celda">
          <h2>4. ¿EL CONSUMO ELÉCTRICO ES MUY ALTO?</h2>
          <br />
          <p>
            No, su consumo es de 6 watts, similar al consumo de una lámpara de
            luz de 20 watts.
          </p>
        </td>
      </tr>
      <tr>
        <td class="custom-celda1 medium-celda" colspan="2">
          <h2>5. ¿REQUIERE MANTENIMIENTO?</h2>
          <br />
          <p>
            Si, requiere un mínimo mantenimiento. Los
            <strong>usuarios</strong> deben mantener una poda prolija. Nosotros
            debemos realizar un <strong>mantenimiento anual</strong> que
            consiste en cambio de batería, control de estructura y tensado,
            reemplazo de los LEDs y Cambio de carteles reguladores preventivos.
          </p>
        </td>
      </tr>
    </v-table>
  </v-container>
</template>

<script></script>

<style scoped>
.contenedor {
  display: flex;
  justify-content: center;
  background-color: #ec0c05;
}
.custom-table {
  width: 100%;
  height: 100%;
  font-size: 15px;
  padding: 10px; /* Tamaño del padding para ajustar el tamaño de las celdas */
}
.custom-header {
  background-color: #848484; /* Cambiar color de fondo de las cabeceras */
  height: 250px;
}
.custom-celda1 {
  background-color: #d7d7d7;
  color: black;
  border: 30px;
  padding: 20px;
  vertical-align: top;
}
.custom-celda2 {
  background-color: #848484; /* Cambiar color de fondo de las celdas */
  color: black;
  border: 30px;
  padding: 20px;
  vertical-align: top;
  /*  font-size: 16px; /* Tamaño del texto de las celdas */
}
.image {
  width: 150px;
  height: 150px;
  margin-inline-start: 42%;
}
.title {
  color: black;
  font-size: 40px;
  font-weight: bold;
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

</style>
