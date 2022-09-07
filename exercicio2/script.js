let idade = prompt("Qual sua idade?")
let ensinoMedio = confirm("Terminou o ensino médio?")
let faculdade = confirm("Você faz faculdade?")

if(idade>=18){
    console.log("Você é MAIOR de idade!")

}else{
	console.log("Você é MENOR de idade!")
}
//(ensinoMedio)
if(ensinoMedio === true){
    console.log("Você terminou o Ensino Médio!")
}else{
    console.log("Você NÂO terminou o Ensino Médio!")
}
//(!faculdade)
if(faculdade === true){
    console.log("Você está na Faculdade!")
}else{
    console.log("Você NÂO está na Faculdade!")
}