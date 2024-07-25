import axios from "axios";

//Metodos de consumo del API
const obtenerPorCedula = async(cedula) => {
    const data = await fetch(`http://localhost:8081/API/v1.0/Matricula/estudiantes/cedula/${cedula}`).then(r=>r.json());
    console.log(data);
    return data;
    }
     
    const obtenerPorCedulaAxios = async (cedula) =>{
        //la respuesta .then(r=> r.data), r se pone data como atribvuto no como arriba
        const data = axios.get(`http://localhost:8081/API/v1.0/Matricula/estudiantes/cedula/${cedula}`).then(r=> r.data);
        //el await esta por dentro de axios por eso si se debe poner el async 
        console.log(data)
        return data;
    }

    const guardar=async (estudianteBody)=>{
        const data=axios.post(`http://localhost:8081/API/v1.0/Matricula/estudiantes`, estudianteBody).then(r=>r.data);
        console.log(data)
        return data;

    }

    const actualizar =async (cedula, estudiantebody)=>{
        const data=axios.put(`http://localhost:8081/API/v1.0/Matricula/estudiantes/cedula/${cedula}`, estudianteBody).then(r=>r.data);
        console.log(data)
        return data;

    }

    const actualizarParcial =async (cedula, estudiantebody)=>{
        const data=axios.patch(`http://localhost:8081/API/v1.0/Matricula/estudiantes/cedula/${cedula}`, estudianteBody).then(r=>r.data);
        console.log(data)
        return data;

    }

    const eliminar=(cedula)=>{
        const data=axios.delete(`http://localhost:8081/API/v1.0/Matricula/estudiantes/cedula/${cedula}`).then(r=>r.data);
        console.log(data)
        return data;
    }

    


//Metodos de fachada

    export const obtenerPorCedulaFachada = async(cedula) => {
        return await obtenerPorCedula(cedula);

    }
     
    export const obtenerPorCedulaAxiosFachada = async (cedula) =>{
        return await obtenerPorCedulaAxios(cedula);
 
    }

    export const guardarFachada=async (estudianteBody)=>{
        return await guardar(estudianteBody);

    }

    export const actualizarFachada =async (cedula, estudiantebody)=>{
        return await actualizar(cedula,estudiantebody);


    }

    export const actualizarParcialFachada =async (cedula, estudiantebody)=>{
        return await actualizarParcial(cedula, estudiantebody);
  

    }

    export const eliminarFachada =(cedula)=>{
        return eliminar(cedula);
 
    }

    