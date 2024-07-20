<!-- src/components/Estudiante.vue -->
<template>
  <div class="student-form">
    <h2>Formulario de Estudiante</h2>
    <form @submit.prevent="onSubmit">
      <label for="id">ID:</label>
      <input type="text" id="id" />

      <label for="name">Nombre:</label>
      <input type="text" id="name"  />

      <label for="lastname">Apellido:</label>
      <input type="text" id="lastname"  />

      <label for="dob">Fecha de Nacimiento:</label>
      <input type="date" id="dob"  />

      <label for="idnumber">Cédula:</label>
      <input type="text" id="idnumber" v-model="cedula" />

      <button type="button" @click="consultar">Consultar/Buscar</button>
      <button type="button" @click="actualizar">Actualizar</button>
    </form>
  </div>
</template>

<script>
import {obtenerPorCedulaAxiosFachada, actualizarFachada} from  '../clients/clienteEstudiante.js'
export default {
  data() {
    return {
      cedula:null
    };
  },
  methods: {
    async consultar() {
      console.log(this.cedula);

      const data =await obtenerPorCedulaAxiosFachada(this.cedula);
      console.log(data);
    },
    actualizar() {
      
    }
  }
};
</script>

<style scoped>
.student-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 10px;
}
label {
  display: block;
  margin: 0.5em 0 0.2em;
}
input {
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  margin-right: 10px;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
