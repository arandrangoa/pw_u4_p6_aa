<!-- src/components/EliminarEstudiante.vue -->
<template>
  <div class="delete-student">
    <h2>Eliminar Estudiante</h2>
    <label for="idnumber">Cédula:</label>
    <input type="text" id="idnumber" v-model="idnumber" />
    <button @click="eliminar">Eliminar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idnumber: ''
    };
  },
  methods: {
    eliminar() {
      // Lógica para eliminar
    }
  }
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
