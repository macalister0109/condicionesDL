pixeles = "2px"
color="red"
imagen1=document.querySelector("#imagen1")
function agregarBorde(){
   
    if(imagen1.style.border != "none"){
        imagen1.style.border = "none"
    }else{
        imagen1.style.border = pixeles + " solid " + color
    }   
}

function verificarCantStickers(){
    cant1=Number(document.querySelector("#txt1").value)
    cant2=Number(document.querySelector("#txt2").value)
    cant3=Number(document.querySelector("#txt3").value)
    total=cant1+cant2+cant3
    if(cant1+cant2+cant3<11){
        alert("te llevas "+total+" stickers")
    }else{
        alert("No puedes llevar mas de 10 stickers")
    }
}

function limpiar(){ 
    document.querySelector("#txt1").value=""
    document.querySelector("#txt2").value=""
    document.querySelector("#txt3").value=""    
}

function verificarPassword(){   
    num1=Number(document.querySelector("#seleccion1").value)
    num2=Number(document.querySelector("#seleccion2").value)
    num3=Number(document.querySelector("#seleccion3").value)

    if(num1==9 && num2==1 && num3==1){
        alert("Contraseña correcta")
    }else{
        alert("Contraseña incorrecta")
    }
}

