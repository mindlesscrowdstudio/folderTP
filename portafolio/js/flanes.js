
var huevo_input;
var huevo_val;
var leche_input;
var leche_val;
var sugar;
var sugar_val;
var huevosFin;
var sugarFin;
var lecheFin;
var msj = ["estos flanes te salieron: ", "que ricos flanes ", "wow!buen provecho "];
var ingredientes = [];
var ingMenor = 0;



function calculaHuevos(){
  huevo_input = document.getElementById("input-1");
  huevo_val = Number(huevo_input.value);
  console.log(huevo_input.value);
  if(isNaN(huevo_val)){
    alert("ingrese un dato valido");
  }else if(huevo_val  < 6){
    alert("ingrese minimo 6 huevos");
  }else if(huevo_val  % 1 !==0){
    alert("ingresaste un decimal, ingresa numeros enteros mayor a 6");
  }
  huevo_input.form.reset();

  activar();

}

function calculaLeche(){
  leche_input = document.getElementById("input-2");
   leche_val = parseInt(leche_input.value);
  console.log(leche_val);
  if(isNaN(leche_val)){
    alert("ingresa un dato válido");
  }else if(leche_val < 600){
    alert("Ingresa minimo 600ml de leche");
  }
  leche_input.form.reset();
  activar();
}

function calculaAzucar(){
  sugar=document.getElementById("input-3");
  sugar_val = parseInt(sugar.value);
  if(isNaN(sugar_val)){
    alert("ingresa un dato válido");
  }else if(sugar_val < 100){
    alert("Ingresa minimo 100ml de leche");
  }
  sugar.form.reset();
  activar();
}


function activar(){
  if(huevo_val > 0 && leche_val > 0 && sugar_val >0){
    document.getElementById("submit").disabled = false;
  }
}

function receta(){
  huevosFin = parseInt(huevo_val / 6);
  lecheFin = parseInt(leche_val/600);
  sugarFin = parseInt(sugar_val/100);

  ingredientes.push(huevosFin, lecheFin, sugarFin);
  ingMenor = Math.min.apply(null, ingredientes);
  console.log(ingMenor);
  mostrar();
}

function mostrar(){
  var div = document.getElementById("total");
  var randomM = msj[Math.floor(Math.random() * msj.length)];
  div.innerHTML = randomM  + ingMenor;

}