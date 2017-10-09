var mensajes = ["ingrese un numero", "el número se guardó exitosamente, numeros guardados: ", "error, no se guardo el num", "ingrese un dato válido", "sumaste: ", "el número mayor es: ", " es el divisor", "múltiplos orden descendente: "];
var input1;
var value1;
var datos = [];
var ingresados= 0;
var boton2;
var boton3;
var boton4;
var boton5;
var boton6;
var sumaArrays= 0;
var sumaArraysC =0;
var busqueda = 0;
var resultado1= 0;
var resultado2 = 0;
var resultadoF;
var showResultado;
var buttonTouched = 0;
var mayor;

function boton1() {
    showResultado = document.getElementById("showR");
    input1 = document.getElementById("btn1");
    value1 = parseInt(input1.value);
    console.log("value1", value1);
    if (!isNaN(value1)){
      ingresados++;
      datos.push(value1); 
      showResultado.innerText = mensajes[1] + ingresados;
      input1.form.reset();
      disableBtn();
      
    }else{
      showResultado.innerText = mensajes[3];
      input1.form.reset();
    }
}

function minimo5(){
  if(ingresados >= 5){
    return true;
  }
}


//Busca el mayor de todos los números ingresados y muestra el resultado. 
  function elMayor() {
    mayor = Math.max.apply(null,datos);
    showResultado = document.getElementById("showR");
    showResultado.innerText = mensajes[5] + mayor;
}

//desactiva los botones
  function disableBtn(){
    if(minimo5()){
      boton2 = document.getElementById("btn2");
      boton2.disabled = false;
      boton3 = document.getElementById("btn3");
      boton3.disabled = false;
      boton4 = document.getElementById("btn4");
      boton4.disabled = false;
      boton5 = document.getElementById("btn5");
      boton5.disabled = false;
      boton6 = document.getElementById("btn6");
      boton6.disabled = false;
    }
} 


function suma(){
  
  if(minimo5()){   
    for(var i=0; i < datos.length; i++){  
      sumaArrays += datos[i];
      showResultado = document.getElementById("showR");
      showResultado.innerText = mensajes[4] + sumaArrays;    
      console.log("suma",sumaArrays);  
      sumaArraysC = sumaArrays;
    }
  }

}

/*Determina si el mayor es divisor de la suma. Si es divisor, lo muestra. Si no
lo es, busca el divisor más cercano al mayor (menor a dicho número) y lo muestra.*/
function divisorSum(){
  showResultado = document.getElementById("showR");
  while(sumaArraysC % mayor !==  0){
    if(busqueda === 0){
      busqueda = mayor - 1;
    }else{
      if (sumaArraysC % busqueda === 0 ){       
        //console.log("es el divisor busqueda multiplo", busqueda);
        resultado1 = busqueda;
        break;
      } else{
        busqueda--;
      }
    }
  }
  resultado2 = mayor;

  if(resultado1 > 0){
    resultadoF = resultado1;
  } else{
    resultadoF = resultado2;
  }
  showResultado.innerText = resultadoF + mensajes[6] ;
}


/*Muestra en orden descendente todos los números múltiplos del divisor
entre la suma y el divisor, inclusive.*/
function descendente(){
  
  var ordenD = []; 
  var keeper = resultadoF - 1;
    while(keeper <= sumaArraysC){
      keeper++;
      if(keeper  % resultadoF === 0){
        ordenD.push(keeper);     
      }
  }
    ordenD.reverse();
    var appendArray = document.createElement("p");
    var nodo = document.createTextNode(ordenD);
    appendArray.appendChild(nodo);
    appendArray.id = "appendArray";
    
    showResultado = document.getElementById("showR");
    showResultado.innerHTML = mensajes[7];    
    showResultado.appendChild(appendArray);
}
//resetea sistema
function init(){
  window.location.reload();
}


  













