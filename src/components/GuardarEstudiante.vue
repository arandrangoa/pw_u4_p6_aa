<template>
  <div class="formulario">
    <h2>Nuevo Estudiante</h2>
    <form>
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input v-model="nombre" type="text" id="nombre" />
      </div>
      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input v-model="apellido" type="text" id="apellido" />
      </div>
      <div class="form-group">
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input v-model="fechaNacimiento" type="date" id="fechaNacimiento" />
      </div>
      <div class="form-group">
        <label for="genero">Genero:</label>
        <input v-model="genero" type="text" id="genero" />
      </div>
      <div class="form-group">
        <label for="cedula">Cédula:</label>
        <input v-model="cedula" type="text" id="cedula" />
      </div>
      <div class="form-buttons">
        <button @click="guardar" type="button">Guardar</button>
      </div>
    </form>
  </div>
</template>
 
<script>
import { guardarFachada } from "../clients/clienteEstudiante.js";
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
    async guardar() {
      let fechaFinal = this.fechaNacimiento + "T00:00:00";
 
      const bodyEstudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: fechaFinal,
        genero: this.genero,
        cedula: this.cedula,
      };
      const data = await guardarFachada(bodyEstudiante);
      console.log(data);
    },
  },
};
</script>


<style scoped>
.save-student {
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
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: #218838;
}
</style>
