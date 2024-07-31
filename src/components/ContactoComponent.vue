<template>
  <div class="centered-column">
  
    <h2>Estamos en Contacto</h2>
    <br />
    
    <div class="clase">
      <v-img src="../assets/ubicacion.png" class="imagen" width="40" height="40"></v-img>
      <p>España 1340, Piso 14 Oficina 3<br />
        Código postal 5500, Capital <br />
        Mendoza, Argentina <br /></p>
    </div>
      <div class="clase">
        <v-img src="../assets/correo-electronico.png" class="imagen" width="40" height="40"></v-img>
          <p>seguridadyamza@gmail.com</p>
      </div>
      
      <div class="clase">
        <v-img src="../assets/boton-de-simbolo-de-telefono.png" class="imagen" width="40" height="40"></v-img>
        <p>+54 9 2616 67-5624</p>
      </div>
      
      <a
        href="https://api.whatsapp.com/send?phone=5492616675624"
        target="_blank"
        class="RNpQXe"
      >
        <v-btn class="custom-button">
          ENVIAR WHATSAPP
        </v-btn></a>
  </div>
</template>

<script>
export default {
  name: "ContactoComponent",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.centered-column {
  display: flex;
  flex-direction: column; /* Alinea los elementos en una columna */
  align-items:baseline; /* Centra horizontalmente */
  justify-content: center; /* Centra verticalmente */
  height: 40vh; /* Opcional: Ajusta la altura del contenedor para ver el centrado vertical */
  text-align: center; /* Opcional: Centra el texto dentro de los elementos */
  background-color: red;
  padding: 50px;
  margin: auto;
}

.custom-button{
  display: flex;
  align-items: center;/*centra el texto verticalmente*/
  justify-content: center;/*centra el texto horizontalmente*/
  size: large;
  font-weight: bold;
  padding: 20px ; 
  background-color: #40c351;
  color: black; 
  border-radius: 40px; /* Esquinas redondeadas */
  transition: all 0.3s ease; /* Transición suave */
}
.custom-button:hover, .custom-button:focus {
  background-color: #848484; /* Color de fondo al pasar el mouse */
  color: #40c351;
  transform: scale(1.1); /* Escalar el botón al pasar el mouse */
}

.clase{
  display: flex;
  align-items: center;
  margin-block: 5px;
}
.imagen{
  margin-right: 10px;
}
h2, h3 {
  color: white;
}
p {
  text-align: justify;
}
a {
  text-decoration: none;
}


</style>
