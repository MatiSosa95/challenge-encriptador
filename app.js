
function encriptar(){
    let texto= document.querySelector(".caja-texto").value;

    if(!texto.match(/^[a-z/s ]+$/)){
        limpiarCajainput();
        return alert("El texto debe contener letras minusculas y sin acentos");

    }
    
    let textoCifrado= texto.replace(/e/gi,'enter').replace(/i/gi,'imes').replace(/a/gi,'ai').replace(/o/gi,'ober').replace(/u/gi,'ufat');
    document.querySelector(".texto-resultado").value=textoCifrado;
    document.querySelector(".caja-texto").value;
    limpiarCajainput();

    document.getElementById("#copia").removeAttribute("hidden");

}


function desencriptar(){  
    let texto= document.querySelector(".caja-texto").value;
    let textoCifrado= texto.replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ai/gi,'a').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    document.querySelector(".texto-resultado").value= textoCifrado;
    limpiarCajainput();
    
}

function portapapeles(){
    let copia= document.querySelector(".texto-resultado").value;
    navigator.clipboard.writeText(copia)
    .then(() => {console.log("Texto Copiado en portapapeles")})
    .catch(err => {console.log("Algo salio mal",err)});
    limpiarCajaOutput();
    alert("Texto Copiado");
    
}

function limpiarCajainput(){
    let limpiar= document.querySelector(".caja-texto").value="";
}

function limpiarCajaOutput(){
    let limpiar= document.querySelector(".texto-resultado").value="";
}



   
    


