import { createRouter, createWebHashHistory } from 'vue-router'
 
import Eliminar from '../components/EliminarEstudiante.vue'
import Estudiante from '../components/Estudiante.vue'
import Guardar from '../components/GuardarEstudiante.vue'
import BienvenidaPage from '../pages/BienvenidaPage.vue'
 
const routes = [
    {
        path: '/eliminar',
        component: Eliminar
    },
    {
        path: '/estudiante',
        component: Estudiante
    },
    {
        path: '/guardar',
        component: Guardar
    },
    {
        path: '/',
        component: BienvenidaPage
    },
]
 
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
 
export default router