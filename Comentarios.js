// #Área de comentários
// || \ \ 
/*
    Var > variável global que pode funcionar fora de um escopo de bloco
    Const e Let sao locais e só funcionam no escopo delas

    Na hora de criar váriaveis, colocar nomes que tenham a ver com o conteúdo e usar _ ou letra maíuscula ao invés de espaço no nome da váriavel [é bom escrever os códigos em ingles]
*/

// Em tabelas 
// tr representa a linha da tabela e td representa a coluna

// #Área de COMANDOS

// console.log("Bem vindos") -> Escreve uma mensagem no log do devtools
// ` ` Permite colocar o código em multiplas linhas
// ${} Permite interpolar um dado de cálculo (soma, multiplicaçao) dentro de uma área string
// typeof indica o tipo da váriavel
// window.alert > cria um alerta no topo da janela
// window.confirm('texto') > Faz uma pergunta e pede confirmação
// window.prompt('texto') > Exibe um texto e um campo para o usuário inserir outro
// s.length -> diz quantas letras tem na string
// s.toUpperCase > converte o texto pra LETRA MAIUSCULA / s.toLowerCase -> MINUSCULO
// n1.toFixed(quantidade de casas) --> muda a quantiadde de casas decimais de um numero

/* Condições 
Estrutura do if
Caso simples de if
if(condição) {
    bloco de comandos para executar se a condição for true
}
Se for false, não acontece nada

Caso de if + else
if(condição) {
    bloco de comandos para executar se a condição for true
} else {
    bloco de comandos para executar se a condição for false
}
if {

} else if {

} else if {

} else {}

Condição Switch 
Estrutura 
switch (expressão) {cria bloco
    case valor1:
        conteúdo
    comando break
    case valor2:
        conteúdo
    comando break
    case valor3:
        conteúdo
    comando break
    default:
        conteúdo
    comando break (opcional)
}

/* #Área de Exemplos

Se eu tenho váriaveis e quero misturar elas com string eu posso concatenar usando um 
// símbolo de + dentro >
ex: let Name, age 
Name = "arthur"
age = 22
console.log('o ' + Name + ' tem ' + age + ' anos.')
*/
// Também posso fazer com console.log(`O ${Name} tem ${age} anos.`)

/*
const person = {
    Name: 'John',
    age: 30,
    weight: 99.6
}

console.log(`${person.name} tem ${person.age} anos`) 
#
Para acessar elementos em array, usar cochetes

const animals = {
    'Lion',
    'Monky',
    'Turtle'
}
console.log(animals[0]) > retorna o primeiro elemento, no caso, o Lion
*/

/* Array = É uma variável composta por vários elementos
let num = [3,2,9] 
    índices [0] -> 3 
            [1] -> 2
            [2] -> 9...

Se eu quiser adicionar um elemento nessa array, basta usar
num[3] = 12 -> Chama a variavel e coloca o elemento num indice novo
num.push(12) -> Faria a mesma coisa, só que sem precisar saber o índice, iria direto pro ultimo
num.length --> Diz o cumprimento do array
num.sort() --> pega os elementos do array e coloca em ordem crescente
num.indexOf(3) -> Vai no vetor e busca o número 3, dentro dos elementos,
se 3 existir ele irá retornar o índice[] em que 3 está, se 3 não existir dentro do vetor ele irá retornar
o índice [-1]
*/