var mensajes = ["ingrese un numero", "el número se guardó exitosamente", "error, no se guardo el num"];
var input1;
var value1;
var datos = [];
var firstFieldset;
var ingresados= 0;
var boton2;
var sumaArrays= 0;
var multiplosArray = [];
function boton1(){

    input1 = document.getElementById("btn1");
    value1 = parseInt(input1.value);
    console.log("value1", value1);
    if (!isNaN(value1)){
      ingresados++;
      datos.push(value1); 
      console.log("#ingresados",ingresados);
      alert("mensaje guardado con exito " + "numeros guardados: " + ingresados);
      input1.form.reset();
      disableBtn();
    }else{
      alert("ingrese un dato valido");
      input1.form.reset();
    }
}
function mensaje(){
  
  var div = document.createElement("div");
  div.innerHTML = mensajes[1] + "numeros guardados: " + ingresados;
  firstFieldset = document.getElementById("f1");
  firstFieldset.appendChild(div);

  var span = document.createElement("span");
      span.innerHTML = 
      document.getElementById('btn2');
}


function minimo5(){
  if(ingresados === 5){
    return true;
  }
}


//Busca el mayor de todos los números ingresados y muestra el resultado. 
function elMayor(){
    mayor = Math.max.apply(null,datos);
    console.log('mayor',mayor);
}

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
  }
}


function suma(){
  if(minimo5()){   
    for(var i=0; i < datos.length; i++){
      sumaArrays += datos[i];
      console.log('suma',sumaArrays);     
   }
  }
}
/*Determina si el mayor es divisor de la suma. Si es divisor, lo muestra. Si no
lo es, busca el divisor más cercano al mayor (menor a dicho número) y lo muestra.*/
function divisorSum(mayor,sumaArrays){
  if(mayor % sumaArrays === 1){
    console.log("es divisor");
    //falta mostrar el divisor en pantalla
  }else {
    calculo = Math.floor(mayor / sumaArrays);
    residuo = mayor % sumaArrays;
  }

}


/*Muestra en orden descendente todos los números múltiplos del divisor
entre la suma y el divisor, inclusive.*/
function descendente(){}

//resetea sistema
function reset(){}


  











