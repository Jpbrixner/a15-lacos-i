//Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.
//Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

let desejo = prompt(
  "Deseja comer mais coxinhas? (Pressione S para sim ou N para não)"
).toUpperCase();
let conta = 0;

while (desejo !== "N") {
  if (desejo === "S") {
    conta += 2.5;
    desejo = prompt(
      "Deseja comer mais coxinhas? (Pressione S para sim ou N para não)"
    ).toUpperCase();
  } else {
    alert("Digite um resposta válida");
    desejo = prompt(
      "Deseja comer mais coxinhas? (Pressione S para sim ou N para não)"
    ).toUpperCase();
  }
}
console.log("Valor total da conta: " + conta);
