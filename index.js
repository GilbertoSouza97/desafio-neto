//Desafio Classificador de Nivel

let nomeHeroi = "Neto"
let qtdXp = 9500
let eloRank = ""

if(qtdXp <= 1000){
    eloRank = "Ferro"
} else if(qtdXp <= 2000){
    eloRank = "Bronze"
} else if(qtdXp <= 6000){
    eloRank = "Prata"
} else if(qtdXp <= 7000){
    eloRank = "Ouro"
} else if(qtdXp <= 8000){
    eloRank = "Platina"
}  else if(qtdXp <= 9000){
    eloRank = "Ascendente"
}  else if(qtdXp <= 10000){
    eloRank = "Imortal"
}  else if(qtdXp > 10000){
    eloRank = "Radiante"
}

console.log("O Herói de nome: " + nomeHeroi + " Está no elo de: " + eloRank)
