    const minhaFuncao = () => "Dis olá";

const retornaUmCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford',
})

console.log(minhaFuncao())
console.log(retornaUmCarro())

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        console.log(this)
        this.velocidadeAtual += 10;
    },
    frear: () => {
        console.log(this)
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual)

                     // Com essa linha convencional ele dá erro no terminal ao da o comendo  NPM RUN BUILD  e em seguida   NODE .\DIST\ARROW.JS, mas na utilização no navegdor

