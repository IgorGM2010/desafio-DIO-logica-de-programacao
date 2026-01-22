//Criar indicador de nivel do heroi

//Nome, XP
let estatisticasJogador = ['Felipe', 500]

let nomeJogador = estatisticasJogador[0]
let XPJogador = estatisticasJogador[1]

if (XPJogador >= 10001) {
    console.log("O Herói de nome " + nomeJogador + " está no nível de Radiante")
} else if (XPJogador >= 9001) {
    console.log("O Herói de nome " + nomeJogador + " está no nível de Imortal")
} else if (XPJogador >= 8001) {
    console.log("O Herói de nome " + nomeJogador + " está no nível de Ascendente")
} else if (XPJogador >= 7001) {
    console.log("O Herói de nome " + nomeJogador + " está no nível de Platina")
} else if (XPJogador >= 5001) {
    console.log("O Herói de nome " + nomeJogador + " está no nível de Ouro")
} else if (XPJogador >= 2001) {
    console.log("O Herói de nome " + nomeJogador + " está no nível de Prata")
} else if (XPJogador >= 1001) {
    console.log("O Herói de nome " + nomeJogador + " está no nível de Bronze")
} else {
    console.log("O Herói de nome " + nomeJogador + " está no nível de Ferro")
}