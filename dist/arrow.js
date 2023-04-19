"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return "Dis olá";
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'Ka',
    fabricante: 'Ford'
  };
};
console.log(minhaFuncao());
console.log(retornaUmCarro());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    console.log(_this);
    _this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);

// Com essa linha convencional ele dá erro no terminal ao da o comendo  NPM RUN BUILD  e em seguida   NODE .\DIST\ARROW.JS, mas na utilização no navegdor