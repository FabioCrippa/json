//JASON=> javascript object notation 

//estrutura JSON.stringfy()
//recebe como parametro uma array ou um objeto literal e 
//retorna uma string tipo JSON. Transforma um objeto em uma string

//Estrutura
//let nomeVariavel = {
    //propriedade1: "valorString",
    //propriedade2: valorNumeroInteiro,
    //propriedade3: valorNumeroDecimal,
//}
//let json = JSON.stringfy(nomeVariavel);
//console.log(json);

let pessoa = {
    nome: "Crippa",
    idade: 39,
    altura: 1.79,
}
let jason = JSON.stringify(pessoa);
console.log(jason);

//Estrutura JSON.parse()
//recebe como parametro um dado e retorna como array ou um objeto literal
//transforma uma string em um objeto

//Estrutura
//let nomeVariavel = {
    //propriedade1: "valorString",
    //propriedade2: valorNumeroInteiro,
    //propriedade3: valorNumeroDecimal,
//}
//let jason = JSON.stringify(nomeVariavel)
//let nomeVariavel-1 = JSON.parse(json)
//console.log(nomeVariavel-1);

let pessoa2 = {
    nome2: "Maria",
    idade2: 35,
    altura2: 1.65,
}
let jason = JSON.stringify(pessoa2)
let jason2 = JSON.parse(jason);
console.log(jason2);
