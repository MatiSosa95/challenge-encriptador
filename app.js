
function encriptar(){
    let texto= document.querySelector("#input-texto").value;

    if(!texto.match(/^[a-z/s]+$/)){
        limpiarCajainput();
        return alert("El texto debe contener letras minusculas y sin acentos");

    }
    
    let textoCifrado= texto.replace(/e/gi,'enter').replace(/i/gi,'imes').replace(/a/gi,'ai').replace(/o/gi,'ober').replace(/u/gi,'ufat');
    document.querySelector(".text-input-salida").value=textoCifrado;
    document.querySelector("#input-texto").value;
    limpiarCajainput();

    document.getElementById("boton-copia").removeAttribute("hidden");
}


function desencriptar(){  
    let texto= document.querySelector("#input-texto").value;
    let textoCifrado= texto.replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ai/gi,'a').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    document.querySelector(".text-input-salida").value= textoCifrado;
    limpiarCajainput();
}

function portapapeles(){
    let copia= document.getElementById("msg").value;
    navigator.clipboard.writeText(copia)
    .then(() => {console.log("text copied")})
    .catch(err => {console.log("Something wrong",err)});
    limpiarCajaOutput();
    alert("Texto Copiado");
    
}

function limpiarCajainput(){
    let limpiar= document.querySelector("#input-texto").value="";
}

function limpiarCajaOutput(){
    let limpiar= document.querySelector(".text-input-salida").value="";
}



   
    


