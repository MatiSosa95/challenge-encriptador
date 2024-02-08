
function encriptar(){
    let texto= document.querySelector(".caja-texto").value;
    
    if(!texto.match(/^[a-z/s ]+$/)){
        limpiarCajainput();
        return alert("El texto debe contener letras minusculas y sin acentos");

    }

    
    let textoCifrado= texto.replace(/e/gi,'enter').replace(/i/gi,'imes').replace(/a/gi,'ai').replace(/o/gi,'ober').replace(/u/gi,'ufat');
    document.querySelector(".texto-resultado").innerText=textoCifrado;
    document.querySelector(".contenedor-resultado").style.display= "block";
    document.querySelector(".mensaje").style.display="none";
    limpiarCajainput();
    document.getElementById("copia").style.display="block";

}


function desencriptar(){  
    let texto= document.querySelector(".caja-texto").value;
    let textoCifrado= texto.replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ai/gi,'a').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    document.querySelector(".texto-resultado").innerText= textoCifrado;
    limpiarCajainput();
    document.getElementById("copia").style.display="block";
   
}

function portapapeles(){
    let copia= document.querySelector(".texto-resultado").innerText;
    navigator.clipboard.writeText(copia)
    .then(() => {console.log("Texto Copiado en portapapeles")})
    .catch(err => {console.log("Algo salio mal",err)});
    limpiarCajaOutput();
    alert("Texto Copiado");
    
    
}

function limpiarCajainput(){
    document.querySelector(".caja-texto").value="";
}

function limpiarCajaOutput(){
    document.querySelector(".texto-resultado").innerText="";
}



   
    


