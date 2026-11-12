
    alert("Olá Bem vindo ao Avatar do GTA");

    /* 
    1) Lógica de Programação 
        Saber a sequencia que o computador/projeto
        quer que você execute as coisas

    2) Algoritmo
        Receita de bolo, passo a passo, para que o computador entenda o que você quer que ele faça


    ALGOROITMO 1
    1) Saber quem é quem (imagem, botão...)
    2) Saber que o botão foi clicado (qual botão)
    3) Trocar a foto e o nome do personagem
    
    ALGORITMO 2
    [ ] Pegar a imagem do usuario
    [ ] Pegar o nome do usuario
    



    3) Variaveis
        - É um pedacinho da memória do computador que você pode guardar alguma coisa
        - Exemplo: 
            let nome = "Lucia"
            let idade = 15
            let altura = 1.60
            let peso = 50
    4) Funções

    HTML = document
    querySelector = selecionar algo no html
   ( ) = entre parenteses você coloca o que você quer selecionar
     Quem? Classe = .nomeDaClasse

     1) criar uma variavel para guardar o que eu quero
     2) ir ao HTML ( com o document)
     3) Selecionar quem eu quero com o querySelector
     4) Colocar entre parenteses o que eu quero selecionar (classe, id, tag)

*/ 

let nome = document.querySelector(".nome");
let personagem = document.querySelector(".personagem");

console.log(nome);
console.log(personagem);
console.log("Olá, seja bem vindo ao Avatar do GTA");

function escolherPersonagem(nomePersonagem, imagemPersonagem, corPersonagem) {
    nome.innerHTML = nomePersonagem;
    personagem.src = imagemPersonagem;
    nome.style.color = corPersonagem;
}




