"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}

//  O  FOREACH  ele só impera não retorna nada
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', "Wagner"];

//  No  MAP  consegmos interar no array, fazer modificações e ainda conseguimos retornar o arrei modificado... Fazemos a manipulação e temos um novo array com retorno 
var alunos2 = alunos.map(function (itemAtual) {
  return {
    //    itemAtual = {
    nome: itemAtual,
    curso: 'Frontend'
  };
  //  return itemAtual;           Pode ser assim ou:
});

console.log(alunos2);

/*  const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual) {
   //   numeroAtual = numeroAtual * 2;  Pode ser assim ou:
    return numeroAtual * 2;
})
             Aqui é para retorno de numeros                  

console.log(dobroDosNumeros)      */

//  O   FIND  podemos encontrar um item dentro do array
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula'; // true ou false
});

console.log(paula);

// Com o  FINDINDEX   conseguimos retorna um índice dentro de um array
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paulo'; // true ou false
});

console.log(indiceDaPaula);

// Aqui é se todos os arreos do valor, correspondem o predicado. true ou false

alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
//  Com o   EVERY  termos um retorno no caso de todos atenderem uma condição 
var todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso == 'Frontend'; // Aqui poderia verificar a idade...       return item.curso >=18
});

console.log(todosAlunosSaoDeFrontend);

// Se pelo menos um item do arrei contemplar a condição o  SOME  ira mostar

var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend'; // Aqui posso verificar os dois tipos com...    && item.curso === 'Frontend'
});

console.log(existeAlgumAlunoDeBackend);

//  Aqui consigo filtrar os arreios com o FILTER

var alunosDeBackend = alunos2.filter(function (item) {
  return item.curso === 'Backend';
});
// Pode ser feito com o:  const alunosdeBackend = alunos2.filter(filtrarAlunosDeBackend)

// Aqui poderi ser feito desse modo tambem em uma linha só:   const filtraAlunosDebackend2 = (aluno) => aluno.curso === 'Backend';

// Quando não tenho nenhuma variavel ou só uma no caso: posso ou não está usando os  ()
console.log(alunosDeBackend);

// Com o   NUMS  consigo reduzi os valores

var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);

/*  Aqui chegaremos ao mesmo resultado do  NUMS
    console.log(soma);
      let somaComFor = 0;
      for (let i = 0; i < nums.length; i++) {
        somaComFor += nums[i];
    }
      console.log(somaComFor);  */

var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome);
  return acumulador;
}, '');
console.log(nomesDosAlunos);