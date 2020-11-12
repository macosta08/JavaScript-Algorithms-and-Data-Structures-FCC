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
    const phoneno = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
                    
    if(str.match(phoneno)) {
      return true;
    }  
    else {  
      console.log("message");
      return false;
    }
}
console.log(telephoneCheck("555-555-5555")); 

//FCC
function telephoneCheck(str) {
    var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
    return re.test(str);
  }
  telephoneCheck("555-555-5555");

// otra 
/*
/^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/
'123-345-3456';
'(078)789-8908';
'(078) 789-8908'; // Note the space
*/
  


