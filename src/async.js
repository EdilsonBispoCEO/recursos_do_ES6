//Função multi THREAD, execução 

function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++){
        execucoes++
    }
    return execucoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++){
            execucoes++;
        }
        resolve (execucoes);
    } catch(e) {
        reject('Deu erro na iteração dos números')
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        })
    }, 3000)
}

async function execucaoPrincipal() {
    console.log("inicio")
    //console.log(funcaoMuitoPesada())

   // funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    promiseComParametros('edilson@gamil.com', 123456).then(resultado => {
        console.log(resultado);             ///Aqui são formas de fazer paralelismos, sinclonias sincronias, muito util para requisições para APs
    })

    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado)
    }catch (e) {
        console.log(e)
    }

    console.log("fim")
}

execucaoPrincipal()