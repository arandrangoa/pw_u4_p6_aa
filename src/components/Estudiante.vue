<template>
  <div class="formulario">
    <h2>Formulario de Estudiante</h2>
    <form>
      <div class="form-group">
        <label for="id">ID:</label>
        <input v-model="id" type="text" id="id" />
      </div>
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input v-model="nombre" type="text" id="nombre" />
      </div>
      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input v-model="apellido" type="text" id="apellido" />
      </div>
 
      <div class="form-group">
        <label for="genero">Genero:</label>
        <input v-model="genero" type="text" id="genero" />
      </div>
 
      <div class="form-group">
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input v-model="fechaNacimiento" type="text" id="fechaNacimiento" />
      </div>
      <div class="form-group">
        <label for="cedula">Cédula:</label>
        <input v-model="cedula" type="text" id="cedula" />
      </div>
      <div class="form-buttons">
        <button @click="consultar" type="button">Consultar</button>
        <button @click="actualizar" type="button">Actualizar</button>
      </div>
    </form>
  </div>
</template>
 
<script>
import {
  obtenerPorCedulaAxiosFachada,
  actualizarFachada,
} from "../clients/clienteEstudiante.js";
export default {
  data() {
    return {
      cedula: null,
      genero: null,
      nombre: null,
      apellido: null,
      fechaNacimiento: null,
    };
  },
  methods: {
    async consultar() {
      console.log(this.cedula);
      const data = await obtenerPorCedulaAxiosFachada(this.cedula);
      console.log(data);
      console.log(data.nombre);
      console.log(data.apellido);
      this.genero = data.genero;
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.fechaNacimiento = data.fechaNacimiento;
    },
 
    async actualizar() {
      //"1998-09-07T10:45:34"
     
      console.log(this.fechaNacimiento);
 
      let fechaFinal = this.fechaNacimiento + "T00:00:00";
 
      const bodyEstudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaFinal,
        genero: this.genero,
      };
      const data = await actualizarFachada(this.cedula, bodyEstudiante);
      console.log(data);
    },
 
 
   
  },
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
