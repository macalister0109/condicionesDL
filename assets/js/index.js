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

