const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você ouve uma música, você sente que o ritmo influência no entendimento do significado da música?",
        alternativas: [
            {
                texto: "Sim! O ritmo já diz tudo sozinho.",
                afirmacao: "É influênciado pelo ritmo e melodia."
            },
            {
                texto: "Nem sempre! As vezes um ritmo animado pode esconder letras trites, como fazemos com nossos próprios sentimentos ",
                afirmacao: "Poético! Entende um pouco mais de música."
            }
        ]
    },
    {
        enunciado: "Ao ouvir certos tipos de múica, você consegue saber o que a música quer dizer, sem ver a letra?",
        alternativas: [
            {
                texto: "Sim, consigo entender ao analisar o ritmo e a melodia",
                afirmacao: "Você costuma analisar as músicas que ouve."
            },
            {
                texto: "Não.",
                afirmacao: "A falta de analise musical não é um problema! Não se preocupe."
            }
        ]
    },
    {
        enunciado: "Você costuma gostar das músicas na primeira vez que ouve?",
        alternativas: [
            {
                texto: "Não. Sou muito apegado nas minhas antiguinhas! kkkkk",
                afirmacao: "É um pouco difícil de convencer."
            },
            {
                texto: "Sim! Ouço e já amo.",
                afirmacao: "É fácil de agradar."
            }
        ]
    },
    {
        enunciado: "Você é muito preso a um estilo só?",
        alternativas: [
            {
                texto: "Sim. Amo só as minhas...",
                afirmacao: "tem um gosto bem definido"
            },
            {
                texto: "Não, ouço de tudo!",
                afirmacao: "Gosto variado e divertido"
            }
        ]
    },
    {
        enunciado: "Você tem um artista favorito? ",
        alternativas: [
            {
                texto: "Um só? Nunca.",
                afirmacao: "Ouve muitos artistas."
            },
            {
                texto: "Sim. Tenho um favoritinho para a vida!",
                afirmacao: "É um pouco preso em seus gostos. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
