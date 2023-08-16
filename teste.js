/*let aluno = {
    nome:'Anderson',
    sobrenome:'Souza',
    email:'andersonfdl@gmail.com'
}
let{email, nome} = aluno;
console.log(email, nome)
function exibir(num){
    console.log('O Resultado da operação é: ' + num)
}
function multiplicacao(a, b){
    var result = a * b;

    console.log(result)

}
multiplicacao(7 , 7)

function divisao(c, d, callback){
    var result = c / d;
    callback(result)

        console.log(result)
}
divisao(300 , 6, exibir)

const minhaPromessa = new Promise((resolve, reject) =>{
    const nome = 'Anderson'

    if(nome === 'Anderson'){
        resolve('Usuário encontrado com Sucesso!')
    }else{
        reject('Usuário não encontrado')
    }
})

minhaPromessa.then((data) =>{
    console.log(data)
})

const nome = new Promise((resolve, reject) =>{
    resolve('Anderson') 
})
const idade = new Promise((resolve, reject) =>{
    resolve('39 anos') 
})
const email = new Promise((resolve, reject) =>{
    resolve('andersonfdl@gmail.com') 
})
const resultado = Promise.all([nome, idade, email]).then((data) =>{
    console.log(data)
})*/

const hardware = new Array(
    'SSD',
    'Monitor',
    'Mouse'
)
hardware.push('Memória', 'Placa Mãe', 'Placa de video', 'Processador');

hardware.splice(6,1)
console.log(hardware)
console.log(hardware[3])


