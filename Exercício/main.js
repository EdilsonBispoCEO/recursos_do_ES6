
const nomeENota = {
    // atributos
    Felipe: 5.8,
    Faby: 7,
    Fran: 5.6,
    Edhy: 8,
    Mica: 5.9,
    Gabriel: 9,
    Joao: 9.3
    
}

console.log(nomeENota)
console.log('==================================')

const al = ['Felipe']; 
const alunos2 = al.map(function(itemAtual) {
        return {
        nome: itemAtual,
        notas: 5.8
    }
})

console.log(alunos2) 

const alu = ['Faby']; 
const alunos3 = alu.map(function(itemAtual) {
        return {
        nome: itemAtual,
        notas: 7
    }
})

console.log(alunos3) 

const alun = ['Fran'];
const alunos4 = alun.map(function(itemAtual) {
        return {
        nome: itemAtual,
        notas: 5.6
    }
})

console.log(alunos4) 

const aluno = ['Edhy']; 
const alunos5 = aluno.map(function(itemAtual) {
        return {
        nome: itemAtual,
        notas: 8
    }
})

console.log(alunos5) 

const alunos = ['Mica']; 
const alunos6 = alunos.map(function(itemAtual) {
        return {
        nome: itemAtual,
        notas: 5.9
    }
})

console.log(alunos6) 

const alunoss = ['Gabriel']; 
const alunos7 = alunoss.map(function(itemAtual) {
        return {
        nome: itemAtual,
        notas: 9
    }
})

console.log(alunos7) 

const alunosss = ['João']; 
const alunos8 = alunosss.map(function(itemAtual) {
        return {
        nome: itemAtual,
        notas: 9.3
    }
})

console.log(alunos8) 

console.log('.') 
console.log('====================================')
console.log(['Listagem dos alunos acima da Meia 6'])

const notasAcimaDaMedia = [...alunos2,...alunos3,...alunos4,...alunos5,...alunos6,...alunos7,...alunos8].filter(function(itens) {
    
    return itens.notas >= 6
})

console.log(notasAcimaDaMedia);





                              // Aqui a baixo são varias tentativas.   Registrando os error

/*



const alunoNotas = ['Felipe', 'Faby', 'Fran', 'Edhy', 'Mica', 'Gabriel', 'Joao'];
const notasAlunos = [ 6.8, 7, 5.6, 8, 7, 9, 9.3];

for (let i = 0; i <1; i++) {
    console.log(`Nome do aluno: ${alunoNotas} `)
    console.log(`Nota do aluno: ${notasAlunos} `)
}



const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notas) {
    console.log(i, notas[i]);
}


*/




/*

const nomeAluno = ['Felipe', 'Faby', 'Fran', 'Edhy', 'Mica', 'Gabriel', 'Joao'];

const nomeAlunos = nomeAluno.map(function(itemNome) {
    return {
    nome: itemNome,
}
})

console.log(nomeAlunos)



const notasAlunos = [ 6.8, 7, 5.6, 8, 7, 9, 9.3];

const notasAluno = notasAlunos.map(function(itemAtual) {
        return {
        notas: itemAtual,
    }
})

console.log(notasAluno)


const notasAcimaDaMedia = notasAluno.filter(function(itens) {
    return itens.notas >= 6
})

console.log(notasAcimaDaMedia);








/*
function soBoaNoticia (nota) {
    if (nota >= 6) {
        console.log(`Aprovado com ${nota}`);
    }
}

soBoaNoticia(6); // Aprovado com 8.1
soBoaNoticia(5.9); // Não imprime nada

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log(`É verdade... ${valor}`);
    }
}






/*
const resultado = (nota) => {
    return nota >= 6  ? 'Aprovado' : 'Reprovado';
}

console.log(resultado(6)); // Aprovado
console.log(resultado(5.9)); // Reprovado






/* var Aluno = function() {
    this.nome = null,
    this.nota = null,
    this.nota2 = null,
    this.calcularMedia = function(alunoNotas) {
        return (alunoNotas.nota + alunoNotas.nota2) / 2;
    }
}

var alunos = [];

for (var i = 0; i<4; i++) {
    alunoNotas = new aluno();

    alunoNotas.nome = prompt("Digite o nome do aluno");
    alunoNotas.nota = parseFloat(prompt("Digite sua nota"));
    alunoNotas.nota2 = parseFloat(prompt("Digite sua nota"));

    alunoNotas.media = alunoNotas.calcularMedia(alunoNotas);
        
        alunos.push(alunoNotas);
}
console.log(alunos); */











