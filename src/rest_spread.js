//  rest é usado como argumentos de função
function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;

  //  console.log(arguments)
    // return a + b + c;
}

console.log(somar(10, 20, 30))

function somarComRest(...numero) {     //Aqui só funciona com argumentos fixos.
    const soma = numero.reduce((total,numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30))

// Com o   SPREAD   conseguimos espalhar os itens de um array

const numeros = [1,2,3,4]
console.log(...numeros)

const timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timesDeFutebolDeRi = ['vasco', 'botafogo', 'flamengo', 'fluminense'];


            //const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDeRi)
const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDeRi];                   //Aqui pega o restante do conteudo


                              // Aqui retorna o arei com o conteudo já mesclado
// timesDeFutebolDeSp.concat(timesDeFutebolDeRi)

console.log(timesDeFutebol)

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

 const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
 }

 console.log(carroDaAna);

 //desestruturação de objetos
 const {motor: motrDoCarroDaAna} = carroDaAna;
 const {motor: motrDoCarroDaJulia} = carroDaJulia;

 console.log(motrDoCarroDaAna);
 console.log(motrDoCarroDaJulia);

 //desestruturação de array

 const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;         //Aqui o ... pega o restante do conteudo

 console.log(item1)
 console.log(item2)
 console.log(item3)
 console.log(outrosTimes)