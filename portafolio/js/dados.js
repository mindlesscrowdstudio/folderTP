var arNumeros = [];
var imagenes  = [];
var cantidadDados;
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
var anuncio;
var finito = true;

//obtiene el numero random
  function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
  }
function start() {
  arNumeros = []; //limpiamos el arreglo
  anuncio = document.getElementById("anuncios");
  anuncio.innerText = "";

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
    
    turno1 = true;
    turno2 = false;
    currentTurno = turno2;
    
  } else {
    alert("turno jugador 1");
    turno1Suma++;
    console.log('turno1Suma',turno1Suma);
    currentTurno = turno1;
    turno1 = false;
    turno2 = true;
  }
}
function habilitaDados(){
  anuncio.innerText = ""; 
 contador = 0; //reseteamos el contador 
  for(var i = 0; i < arNumeros.length;i++){
    if(arNumeros[i]=== 1 || arNumeros[i]=== 3 || arNumeros[i] === 4 || arNumeros[i] === 6){
      contador++;                 
    }
  }
  
  anuncio.innerText = "no sumaste nada en la tirada, te restan " + contador + " dados" ;
  
}
  function sumaArreglos(){
  suma = 0;
  for(var i=0; i < arNumeros.length; i++){
     suma += arNumeros[i];    
  }
  asignaSumaATurno();
}



 

  function asignaSumaATurno(){
    var showSumaJugadores;
    var attachP = document.createElement("p");
    var nodo;
    if(currentTurno === true){
      sumaJugador1 += suma;
      nodo = document.createTextNode("Jugador 1: " +  sumaJugador1 + " puntos");
      attachP.appendChild(nodo);
      showSumaJugadores = document.getElementById("dado").appendChild(attachP);  
     
    } else {
      sumaJugador2 += suma;
      attachP.innerText = "Jugador 2 :" + sumaJugador2 + " puntos";
      showSumaJugadores = document.getElementById("dado").appendChild(attachP);
      ganador();
    }
   
    //console.log('J1Suma',sumaJugador1, 'J2Suma', sumaJugador2);
    
  }

  function ganador(){
    
    if(sumaJugador1 >= 20 || sumaJugador2 >= 20){
       quienGano();
       var desactivar = document.getElementById("btn");
       desactivar.disabled = true;
    }
  }

  function quienGano(){
    var win = document.getElementById("anuncios");  
    if(sumaJugador1 > sumaJugador2){
      win.innerHTML = "El ganador es jugador1: " +   sumaJugador1;   
    }else{
      win.innerHTML = "El ganador es jugador2: " + sumaJugador2;
    }
  }
