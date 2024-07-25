<template>
  <div class="formulario">
    <h2>Eliminar Estudiante</h2>
    <form>
      <div class="form-group">
        <label for="cedula">Cédula:</label>
        <input v-model="cedula" type="text" id="cedula" />
      </div>
      <div class="form-buttons">
        <button @click="eliminar" type="button">Eliminar</button>
      </div>
    </form>
  </div>
</template>
 
<script>
import { eliminarFachada } from "../clients/clienteEstudiante.js";
 
export default {
  data() {
    return {
      cedula: null,
    };
  },
  methods: {
    async eliminar() {
      await eliminarFachada(this.cedula);
    },
  },
};
</script>

<style scoped>
.delete-student {
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
  background-color: #dc3545;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: #c82333;
}
</style>
