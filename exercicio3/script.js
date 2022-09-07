const nacionalidade = Number(prompt("Qual a sua nacionalidade?"))
const b = ("brasileiro")
const a = ("argentino")
const u = ("uruguaio")
const c = ("chileno")
const cc = ("colombiano")

if(nacionalidade === b){
    console.log("Você é Brasileiro!")
} else if(nacionalidade === a){
    console.log("Você é Argentino!")
}else if(nacionalidade === u){
    console.log("Você é Uruguaio!")
}else if(nacionalidade === c){
    console.log("Você é Chileno!")
}else if(nacionalidade === cc){
    console.log("Você é Colombiano!")
}else{
    console.log("Nascionalidade não encontrada!!")
}
