var arNumeros = new Array();
var suma =0;
function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}
 

 function inicia(){
  for(var i = 0; i <= 4; i++) {
    arNumeros[i] = getRandom();
    console.log(arNumeros);
  }

  var true2 = arNumeros.includes(2);
if(true2){
  
}else{
  sumaArreglos();
}

   

 }

 function sumaArreglos(){
   for(var i=0; i < arNumeros.length; i++){
      suma += arNumeros[i];
      console.log(suma);
   }
 }
 

