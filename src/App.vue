<template>
  <NavBar/>
  <router-view/>
</template>

<script>
//import Estudiante from './components/Estudiante.vue';
//import EliminarEstudiante from './components/EliminarEstudiante.vue';
//import GuardarEstudiante from './components/GuardarEstudiante.vue';
import NavBar from '../src/components/NavBar.vue'
import BienvenidaPage from './pages/BienvenidaPage.vue'

export default {
  name: 'App',
  components: {
    //Estudiante,
    //EliminarEstudiante,
    //GuardarEstudiante
     NavBar,

  },
  data() {
    return {
      currentView: 'Estudiante'
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  margin-bottom: 20px;
}

nav button {
  margin-right: 10px;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
}

nav button:hover {
  background-color: #0056b3;
}
</style>
