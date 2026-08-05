// ===============================
// QUIZ MASTER - SCRIPT.JS
// ===============================

// Perguntas
const perguntas = [
{
pergunta:"Qual é a capital do Brasil?",
respostas:["Rio de Janeiro","Brasília","São Paulo","Salvador"],
correta:1
},
{
pergunta:"Quanto é 8 × 7?",
respostas:["54","56","64","48"],
correta:1
},
{
pergunta:"HTML é uma...",
respostas:[
"Linguagem de programação",
"Linguagem de marcação",
"Banco de dados",
"Sistema Operacional"],
correta:1
},
{
pergunta:"Qual planeta é conhecido como planeta vermelho?",
respostas:["Terra","Marte","Júpiter","Saturno"],
correta:1
},
{
pergunta:"CSS é usado para...",
respostas:[
"Criar banco de dados",
"Estilizar páginas",
"Criar servidores",
"Programar em Java"],
correta:1
}
];

let indice=0;
let pontos=0;
let tempo=20;
let intervalo;

// Elementos
const inicio=document.getElementById("inicio");
const quiz=document.getElementById("quiz");
const resultado=document.getElementById("resultado");

const pergunta=document.getElementById("pergunta");

const botoes=document.querySelectorAll(".resposta");

const timer=document.getElementById("timer");
const score=document.getElementById("score");
const progresso=document.getElementById("progresso");

const btnComecar=document.getElementById("btnComecar");

// Iniciar jogo
btnComecar.onclick=()=>{

const nome=document.getElementById("nome").value.trim();

if(nome===""){
alert("Digite seu nome!");
return;
}

inicio.classList.add("hidden");
quiz.classList.remove("hidden");

mostrarPergunta();

};

// Mostrar pergunta
function mostrarPergunta(){

clearInterval(intervalo);

tempo=20;

timer.innerHTML=tempo;

intervalo=setInterval(contador,1000);

const atual=perguntas[indice];

pergunta.innerHTML=atual.pergunta;

progresso.innerHTML=`Pergunta ${indice+1}/${perguntas.length}`;

botoes.forEach((botao,i)=>{

botao.innerHTML=atual.respostas[i];

botao.onclick=()=>responder(i);

});

}

// Contador
function contador(){

tempo--;

timer.innerHTML=tempo;

if(tempo<=0){

clearInterval(intervalo);

proximaPergunta();

}

}

// Resposta
function responder(opcao){

clearInterval(intervalo);

if(opcao===perguntas[indice].correta){

pontos+=10;

score.innerHTML=pontos;

botoes[opcao].style.background="#2ecc71";

}else{

botoes[opcao].style.background="#e74c3c";

}

setTimeout(()=>{

botoes.forEach(btn=>btn.removeAttribute("style"));

proximaPergunta();

},900);

}

// Próxima pergunta
function proximaPergunta(){

indice++;

if(indice<perguntas.length){

mostrarPergunta();

}else{

finalizar();

}

}

// Final
function finalizar(){

quiz.classList.add("hidden");

resultado.classList.remove("hidden");

document.getElementById("pontuacaoFinal").innerHTML=pontos+" pontos";

let texto="";

if(pontos==50){

texto="🏆 Excelente! Você acertou tudo!";

}else if(pontos>=30){

texto="🎉 Muito bem!";

}else{

texto="📚 Continue treinando!";

}

document.getElementById("mensagemFinal").innerHTML=texto;

}

// Reiniciar
function reiniciar(){

location.reload();

}

// Criar bolhas
const particles=document.getElementById("particles");

setInterval(()=>{

const bolha=document.createElement("div");

bolha.className="bolha";

const tamanho=Math.random()*30+10;

bolha.style.width=tamanho+"px";
bolha.style.height=tamanho+"px";

bolha.style.left=Math.random()*100+"vw";

bolha.style.animationDuration=Math.random()*8+6+"s";

particles.appendChild(bolha);

setTimeout(()=>{

bolha.remove();

},15000);

},350);
