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
var sumaJugador1 = 0;
var sumaJugador2 = 0;
var true2;
var true5;
var contador = 0;
var attachImg;
var div;
var turno1 = true;
var turno2 = false;
var turno1Suma = 0;
var turno2Suma = 0;
var currentTurno;

//obtiene el numero random
  function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
  }
function start() {
  arNumeros = []; //limpiamos el arreglo

  if(contador === 0){
    
    asignaTurno();

    cantidadDados = 5;
    document.getElementById("dado").innerHTML = "";

  }else{

    cantidadDados = contador;
    document.getElementById("dado").innerHTML = "";

  }

    for(var i = 0; i < cantidadDados; i++) {
    arNumeros[i] = getRandom();
    console.log("arreglo", arNumeros);
    
    }   

    asignaDados();
 }


 function asignaDados(){
  arNumeros.forEach(function(index){
    attachImg = document.createElement("img");
     
    attachImg.src = imgPath + imagenes[index];
    attachImg.id = "imageDado-" + [index];
    
    div = document.getElementById("dado").appendChild(attachImg); 
  });
  
  esDosCinco(); 

}

function esDosCinco(){
  true2 = arNumeros.includes(2);
  true5 = arNumeros.includes(5);
  if(true2 || true5){
    habilitaDados();
  } else{
    sumaArreglos();
  }
}

function asignaTurno(){

  if(!turno1){
    
    alert("turno jugador 2");
    turno2Suma++;
    console.log('turno2Suma',turno2Suma);
    //
    turno1 = true;
    turno2 = false;
    currentTurno = turno2;
  }else{
    alert("turno jugador 1");
    turno1Suma++;
    console.log('turno1Suma',turno1Suma);
    currentTurno = turno1;
    turno1 = false;
    turno2 = true;
  }
}

 function sumaArreglos(){
   for(var i=0; i < arNumeros.length; i++){
      suma += arNumeros[i];
      console.log('suma',suma);
     
   }
   asignaSumaATurno();
 }
 
 function habilitaDados(){
   contador = 0; //reseteamos el contador 
  for(var i = 0; i < arNumeros.length;i++){
    if(arNumeros[i]=== 1 || arNumeros[i]=== 3 || arNumeros[i] === 4 || arNumeros[i] === 6){
      contador++;                 
    }else{

    }
  }
  console.log("contador",contador); 
 }

  function asignaSumaATurno(){
    console.log("currentTUrno", currentTurno);
    if(currentTurno === true){
      sumaJugador1 = suma;
    } else {
      sumaJugador2 = suma
    }
    
    
   
    console.log('J1Suma',sumaJugador1, 'J2Suma', sumaJugador2);
  }