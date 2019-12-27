function Ventana_alerta()
{
    alert("ATENCIÓN VENTANA DE ALERTA");
}
function Ventana_confirmacion()
{
var respuesta;
       if(confirm("Desea Confirmar?"))
       {respuesta="Has pulsado OK";
       }
       else
       {
        respuesta="Has pulsado CANCEL";
       }
    document.getElementById("MensajeConfirmacion").innerHTML=respuesta;
}
function Pide_informacion()
{
var respuesta;
       var person=prompt("Como te llamas?");
       if(person==null||person=="")
       {
           respuesta="El usuario pulso CANCEL";
       }
       else{
           respuesta="Hola "+person+" Que tal?";
       }
       document.getElementById("MensajeInformacion").innerHTML=respuesta;
}
