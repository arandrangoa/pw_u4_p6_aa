import { createRouter, createWebHashHistory } from 'vue-router'
 
import Eliminar from '../components/EliminarEstudiante.vue'
import Estudiante from '../components/Estudiante.vue'
import Guardar from '../components/GuardarEstudiante.vue'
import BienvenidaPage from '../pages/BienvenidaPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import Bloqueado from '../pages/BloqueadoPage.vue'
 
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
    {
        path: '/:pathMat(.*)*',
        component: NotFoundPage
    },
    {
        path: '/bloqueado',
        name:'bloqueado',
        component: Bloqueado
    },
]
 
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//programar guardianes
router.beforeEach((to, from, next)=> {
    //
    console.log('Guardianes')
    console.log(to);
    console.log(from);
    console.log(next);

    let usuario='edison'
    let resultado=false;

    const random=Math.random()*100

    if(random>50){
        console.log('Si tiene acceso a esa pagina');
        next();
    }else{
        console.log('Acceso bloqueado')
        next({name: bloqueado})
    }
})
 
export default router