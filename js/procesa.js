"use strict";

BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});

function procesa(){

    var Clave = document.getElementById("clave").value;
    var Nombre = document.getElementById("nombre").value;
    var Telefono = document.getElementById("telefono").value;
    var Personas = document.getElementById("personas").value;
    var fecha = document.getElementById("fecha").value;
    
    
    salidaFecha.textContent = "Fecha: "+fecha;
    salidaClave.textContent = "Clave: "+Clave;
    salidaNombre.textContent = "Nombre: "+Nombre;
    salidaPersonas.textContent = "Personas: "+Personas;
    salidaTelefono.textContent = "Telefono: "+Telefono;   

}

function alerta(){

    var Clave = document.getElementById("clave").value;
    var Nombre = document.getElementById("nombre").value;
    var Telefono = document.getElementById("telefono").value;
    var Personas = document.getElementById("personas").value;
    var fecha = document.getElementById("fecha").value;
    
    alert ( "Su reservación se guardo con exito con fecha: " + fecha + " Para:  " + Clave + " A nombre de:  " + Nombre + " Personas: " + Personas +" Telefono de contacto:  " + Telefono);

}
