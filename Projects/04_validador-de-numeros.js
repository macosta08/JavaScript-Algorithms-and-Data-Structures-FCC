/*

Proyectos de estructuras de datos y algoritmos JavaScript: Validador de números de teléfono
Devuelve truesi la cadena transmitida parece un número de teléfono de EE. UU. Válido.

El usuario puede completar el campo del formulario de la forma que elija, 
siempre que tenga el formato de un número válido de EE. UU. Los siguientes son ejemplos de formatos válidos para 
números de EE. UU. (Consulte las pruebas a continuación para conocer otras variantes):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555 1555
555 5555
Para este desafío, se le presentará una cadena como 800-692-7753o 8oo-six427676;laskdjf. 
Su trabajo consiste en validar o rechazar el número de teléfono de EE. UU. En función de cualquier combinación de los 
formatos proporcionados anteriormente. Se requiere el código de área. Si se proporciona el código de país, 
debe confirmar que el código de país es 1. Devuelve truesi la cadena es un número de teléfono de EE. UU. 
Válido; de lo contrario, vuelva false.
*/
function telephoneCheck(str) {
    const phoneno = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
    if(str.match(phoneno)) {
      return true;
    }  
    else {  
      console.log("message");
      return false;
    }
}
console.log(telephoneCheck("555-555-5555")); 
  


