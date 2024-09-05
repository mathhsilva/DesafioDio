let idade = 16;
let autorizado = false;
let visto = false;

if (autorizado && idade >= 18 && visto) {
  console.log("Vamos viajar!");
} else if (idade < 18) {
  console.log("Você é menor de idade, não podemos viajar!");
} else if (autorizado && idade >= 18 && !visto) {
  console.log("Podemos viajar! Mas você precisará tirar o Visto!");
} else {
  console.log("Não vamos viajar!");
}
