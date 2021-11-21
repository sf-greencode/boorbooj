//SECCION COMPLETA Y FUNCIONAL
//
//
//Formulario de contacto 
class Informacion{
    constructor(nombre, apellido, email, telefono, mensaje){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.mensaje = mensaje;
    }
}

const recibirInfo = (nombre, apellido, email, telefono, mensaje) =>{
    const info = new Informacion(nombre, apellido, email, telefono, mensaje);
    return info
}

let listaInfo;

    if (localStorage.getItem("lista") == null){
        listaInfo = [];
    }else{
        listaInfo = JSON.parse(localStorage.getItem("lista"));
    }

const envio = () =>{
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("tel").value;
    const mensaje = document.getElementById("mensaje").value

    listaInfo.push(recibirInfo(nombre,apellido, email, telefono, mensaje));
    localStorage.setItem("lista", JSON.stringify(listaInfo));
}

//Función para agregar evento al button
const enviarInfo = document.getElementById("btn");

//Función para escuchar el evento
enviarInfo.addEventListener("click", ()=>{
    envio();
});

