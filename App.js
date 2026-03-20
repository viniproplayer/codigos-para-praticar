const anoNascimento = 2005;
const anoAtual = 2026;
const  idade = anoAtual - anoNascimento;

console.log("Sua idade é: " + idade);

if (idade >= 18) {
  console.log ("Você não é patinho parabéns!!.");
} else if (idade >= 16) {
  console.log ("Você é um patinho vaza!!.");
} else {
  console.log ("Você é muito patinho."); 
}
