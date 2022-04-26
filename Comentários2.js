// função anonima

//Parâmetros (number1 e number2)
/* 
const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

let number1 = 34
let number2 = 342

console.log(`A soma entre ${number1} e ${number2} resulta em ${sum(number1, number2)}`)

/*
// sum(2,3) //argumentos


// Arrow Function const sayMyName = () => {}

/* Function() constructor;
    ex: 
    function Person(name) {
        this.name = name
    }

    const arthur = new Person('Arthur') -> Eu criei uma função construtora e depois uma variável que utiliza ela para receber seus parâmetros e o new serve para
    transformar a variavel num novo objeto com os parametros da constructor.
    o this. faz referencia a uma variavel que está fora do escopo da constructor
    *expressão new          
    *criar um novo objeto
    *this keyword */

/*
    number.toFixed(x) limita os numeros depois da virgula para um valor x
    number.replace(".", ",") troca o . de um decimal pela virgula ou qualquer outra coisa
    word.toUpperCase() > transforma as letras da string em letras maiusculas
    word.toLowerCase() > transforma as letras da string em letras minusculas


    let phrase = "Eu quero viver o amor!"
    let myArray = phrase.split(" ") > Separa as frases da string que contem espaço entre elas e transforma cada palavra em um objeto do array !
    let phrase2 = myArray.join("_") > Junta os objetos do array e coloca um _ entre cada elemento

    console.log(phrase.includes("Amor")) > Retorna true se existir Amor (Com A maíusculo) na string phrase, ou false se não existir a palavra

    //Transformar uma cadeia de caracteres em elementos de um ARRAY

    let word = "Arthur"
    console.log(Array.from(word)) > Cria um Array a partir dos elementos da string

    Manipulando ARRAYS :
        Ex de Array
        let techs = ["html", "css", js]

    Adicinar um item no fim do ARRAY
        techs.push("nodejs")
        > techs = ["html", "css", "js", "nodejs"]

    Adicionar um item no inicio do ARRAY
        techs.unshift("sql")
        > techs = ["sql", "html", "css", "js", "nodejs"]

    Remover um item do fim do array
        techs.pop()
        > techs = ["sql", "html", "css", "js"]
    
    Remover um item do começo do array
        techs.shift()
        > techs = ["html", "css", "js"]
        
    Cortar o array
        console.log(techs.slice(inicio do corte{índice}, fim do corte))

    Remover itens em qualquer posição do array
        techs.splice(índice, qt de elementos depois do inicial)

    Encontrar a posição de um elemento no array
        let index = techs.indexOf('css') -> retorna o índice do elemento "css" que está dentro do array


    ####Expressões e operadores###

    new -> cria um novo objeto

    delete -> remove propriedades existentes de dentro de um objeto 

    //throw e try...catch

    function SayMyName(name = '') {
        if (name === '') {
            throw 'Nome é obrigatório' -> Interrompe a aplicação e apresenta o erro (também posso usar um new Error(''))
        }
    }

    try {
        SayMyName() -> executa a função, se a função funcionar, ok, se ela falhar, o catch pega o erro q o throw jogar e continua a aplicação
    } catch(e){
        console.log(e)
    }

    **explicação detalhada https://app.rocketseat.com.br/node/o-guia-estelar-de-java-script/group/condicionais-e-controle-de-fluxo/lesson/throw-e-try-catch


    ##Estrutura de repetição###

        for(let i = 10; i >0; i--) {
            if (i === 5) {   -> ignora o valor 5 e continua o loop
                continue;  -> também poderia usar o comando break para parar o loop caso i fosse igual a 5
            }
        }


        n 
    
*/


/* DOM
        const element = document.querySelector('body')

        element.classList.add('Uma classe de CSS') -> classList.add adiciona uma classe de estilo CSS já existente

        element.classList.remove('Uma classe de CSS') --> Remove uma classe de estilo CSS já existente

        element.classList.toggle('Uma classe de CSS') ---> Se já tiver a classe ele remove, e se não tiver ele adiciona.



        console.log(element.parentNode) -> Exibe no console o pai do elemento

        console.log(element.childNodes) -> Exibe no console os filhos do element
        console.log(element.firstChild) -> Exibe no console o primeiro filho do element
        console.log(element.lastChild) -> Exibe no console o último filho do element


    ##Criar um elemento e adicionar na página
        const div = document.createElement('div')
        div.innerText = "Olá Devs" --> Criou uma div com o texto Olá devs

        const body = document.querySelector('body')  --> Selecionou um ponto do HTML para introduzir o elemento criado
        body.append(div) -> Adicionou a div ao documento HTML
        https://app.rocketseat.com.br/node/pilotando-com-a-dom/group/criando-e-adicionando-elementos-na-pagina/lesson/insert-before

    

    ##EVENTOS usando JavaScript
        onclick()
        onkeydown()
        onkeypress()

        addEventListener('click', function) -> executa a function() quando clicar num elemento que ta com o eventlistener

        input.onkeydown = function(event) {
            console.log(event.currentTarget.value) -> Salva os dados digitados num input, parece interessante
            https://app.rocketseat.com.br/node/pilotando-com-a-dom/group/eventos/lesson/argumento-event
        }


*/


