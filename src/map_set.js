let meuMap = new Map();
meuMap.set("nome", "Edilson");
meuMap.set("stack", "html, css, js")

console.log(meuMap);     // Aqui conseguimos recuperar todos os seu valor 

const nome = meuMap.get("nome");

console.log(nome);       //Aqui temos o retrono do valor, no caso uma chave.

/* Algo importate do VScode 
Cor roxo = o metodo ou função
Cor Azul = propriedade ou atributo */

console.log(meuMap.size)

console.log(meuMap.has("sobrenome"))

//meuMap.clear()

console.log(meuMap.size)

for (let chave of meuMap.keys()) {     //Aqui recuperamos as chaves
    console.log(chave);
}


for (let valor of meuMap.values()) {     //Aqui recuperamos as chaves
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {     //Aqui recuperamos as chaves mais formatada
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");  //Aqui consigo remover o intem que esta dentro do map

console.log(meuMap)


const cpfs = new Set();  // Aqui os valores não se repetem, no caso a lista

cpfs.add('12345678912')
cpfs.add('12345678934')
cpfs.add('12345678956')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);     //Aqui ele mostra só os logs...
})


// Aqui conseguimos criar uma listagem de item unicos
             // array usa os  []
             // set usa os  {}

const array = ['Edilson Bispo', 'Fernanda Bbrito', 'Mariana B.', 'Bia', 'Bia', 'Edilson Bispo']

//Convertendo o array em Set
const arrayComoSet = new Set([...array])

//Convertendo um para o outro

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)