<!-- src/components/GuardarEstudiante.vue -->
<template>
  <div class="save-student">
    <h2>Guardar Estudiante</h2>
    <form @submit.prevent="onSubmit">
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="student.name" />

      <label for="lastname">Apellido:</label>
      <input type="text" id="lastname" v-model="student.lastname" />

      <label for="dob">Fecha de Nacimiento:</label>
      <input type="date" id="dob" v-model="student.dob" />

      <label for="idnumber">Cédula:</label>
      <input type="text" id="idnumber" v-model="student.idnumber" />

      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        name: '',
        lastname: '',
        dob: '',
        idnumber: ''
      }
    };
  },
  methods: {
    onSubmit() {
      // Lógica para guardar
    }
  }
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
