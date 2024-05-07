// criar constante
const lutador = 'Fedor Vladimirovich Emelianenko';
const nacionalidade = 'Russo';
const altura = 1.83;
const peso = 106;

document.write("<h1>Informações</h1> <br>" +
    "Lutador: " + lutador + '<br>' +
    "Nacionalidade: " + nacionalidade + '<br>' +
    "Altura: " + altura + ' m<br>' +
    "Peso: " + peso + ' Kg<br>')

const dia = 10;
const mes = 9;
const ano = 2021;
const FraseDoDia = "Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade."
const Autoria = "Aaron Swartz"


document.write(`<div class="citacao">
                <h2>Frase do Dia</h2>
                <h3>${dia}/${mes}/${ano}</h3>
                <blockquote>&#10077;${FraseDoDia}&#10078;</blockquote>
                <p>${Autoria}</p>
                </div>
               `)

let mesesDoAno = ['Janeiro', 'Fevereiro', 'Março']

document.write(`<div class="meses">
                               <h2>Array de Meses do Ano</h2>
                               <p>${mesesDoAno[0]}, ${mesesDoAno[1]}, ${mesesDoAno[2]}, ... </p>
                               </div>
                             `)



/* Desafio 04 */
let jogo = {
    titulo: 'League Of Legends - LOL',
    desenvolvedor: 'Riot Games',
    anoLancamento: 2009
}

document.write(`<div class="jogo">
                <h2>Jogo</h2>
                <span>Título</span>
                <p>${jogo.titulo}</p>
                <span>Desenvolvedor</span>
                <p>${jogo.desenvolvedor}</p>
                <span>Ano do Lançamento</span>
                <p>${jogo.anoLancamento}</p>
                </div>
              `)









