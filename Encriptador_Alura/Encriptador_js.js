
 function ocultarElementos(){   
    var quitar = document.getElementById("eliminar_mensaje");
    var quitar_2 = document.getElementById("eliminar_mensaje_2");
    var mostrarMensaje = document.getElementById("answer")
    var toy=document.getElementById("toy");
    mostrarMensaje.classList.add("aparecer_texto_answer")
    toy.classList.add("desparecer_muneco")
    quitar.classList.add("desparecer")
    quitar_2.classList.add("desaparecer_2")
    copy_button.classList.add("aparecer")
}    
function mostrarElementos(){
    var quitar = document.getElementById("eliminar_mensaje");
    var quitar_2 = document.getElementById("eliminar_mensaje_2");
    var mostrarMensaje = document.getElementById("answer")
    var toy=document.getElementById("toy");
    mostrarMensaje.classList.remove("aparecer_texto_answer")
    toy.classList.remove("desparecer_muneco")
    quitar.classList.remove("desparecer")
    quitar_2.classList.remove("desaparecer_2")
    copy_button.classList.remove("aparecer")
}  
 function encriptar(){
    var imputTexto = document.querySelector(".text_area_ingresar_texto");
    var mensaje=document.getElementById("answer");
    var texto = imputTexto.value
    if( texto != ""){
        var cambio={
            a:"aoi",
            e:"paso",
            i:"imes",
            o:"ober", 
            u:"ufat"
            };
            texto = texto.replace(/a|e|i|o|u/g , function(replace){
            return cambio[replace]
            });
            mensaje=texto
            console.log(mensaje)
            answer.innerText = texto;   
            ocultarElementos();        
            }
            else{ alert("No ha ingresado ningun texto para encriptar.")}
        }          
 function desencriptar(){
    var imputTextoDes = document.querySelector(".text_area_desencriptar");
    var mensaje=document.getElementById("answer");
    var texto= imputTextoDes.value
        if( texto != ""){
            var cambio={
            aoi:"a",
            paso:"e",
            imes:"i",
            ober:"o", 
            ufat:"u"
            };
            texto = texto.replace(/aoi|paso|imes|ober|ufat/g , function(replace){
            return cambio[replace]
            });
            mensaje=texto
            console.log(mensaje)
            answer.innerText = texto
            ocultarElementos();           
        }
        else{ alert("No ha ingresado ningun texto para desencriptar.")}
    }
    function encrypt(){
        encriptar();  
        
    }
    function decrypt(){
        desencriptar();
        
    }
    function copiarTexto(){
        var textoCopiar= document.querySelector(".answer_text")
        navigator.clipboard.writeText(textoCopiar.value)
        alert("El texto ha sido copiado")
        mostrarElementos();
      }
