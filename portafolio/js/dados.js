var arNumeros = [];
var imagenes  = [];
var cantidadDados;
//imagenes[0] = "0.png";
imagenes[1] = "1.png";
imagenes[2] = "2.png";
imagenes[3] = "3.png";
imagenes[4] = "4.png";
imagenes[5] = "5.png";
imagenes[6] = "6.png";
var imgPath = 'images/';
var suma =0;
var contador = 0;
var attachImg;
var div;

//obtiene el numero random
  function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
  }
function start() {
  arNumeros = [];
  if(contador === 0){
    cantidadDados = 4;
  }else{
    cantidadDados = contador;
    document.getElementById("dado").innerHTML = "";
  }

    for(var i = 0; i <= cantidadDados; i++) {
    arNumeros[i] = getRandom();
    console.log("arreglo", arNumeros);
    
    }    
    asignaDados();
 }


 function asignaDados(){

/*    for(var i = 0; i <= arNumeros.length; i++){
    console.log(arNumeros[i]);
    var div = document.getElementById("dado");
    
    currentImg = imagenes[arNumeros[i]];
    div.src = currentImg;
    console.log(currentImg, arNumeros);    
  }  */
  
  arNumeros.forEach(function(index){
    attachImg = document.createElement("img");
     
    attachImg.src = imgPath + imagenes[index];
    attachImg.id = "imageDado-" + [index];
    
    div = document.getElementById("dado").appendChild(attachImg); 
  });
  
  esDosCinco(); 
}

function esDosCinco(){
  var true2 = arNumeros.includes(2);
  var true5 = arNumeros.includes(5);
  if(true2 || true5){
    habilitaDados();
  } else{
    sumaArreglos();
  }
}

 function sumaArreglos(){
   for(var i=0; i < arNumeros.length; i++){
      suma += arNumeros[i];
      console.log(suma);
      alert("tire de nuevo");
   }
 }
 
 function habilitaDados(){
  for(var i = 0; i <= arNumeros.length;i++){
    if(arNumeros[i]=== 1 || arNumeros[i]=== 3 || arNumeros[i] === 4 || arNumeros[i] === 6){
       contador++;
                 
    }
  }
  contador = contador -1; 
  console.log("contador",contador); 
 }

  