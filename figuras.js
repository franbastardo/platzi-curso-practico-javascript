// CÃ³digo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El Área del cuadrado es: " + areaCuadrado + "cmË†2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");


function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El Área del triÃ¡ngulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// DiÃ¡metro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// AquÃ­ interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularAlturaTriangulo(){
  const lado1 = document.getElementById("Inputlado1").value 
  const lado2 = document.getElementById("Inputlado2").value 
  const lado3 = document.getElementById("Inputlado3").value 

  if(lado1 != lado2){
    alert("El triángulo no es del tipo isósceles");
  }
  const altura = Math.sqrt( (lado1*lado1) - (lado3*lado3/4) ) 

  alert(altura);
}
