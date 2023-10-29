//funcções com retorno

function mediaCosnumo(km, consumo){
    let media = km / consumo
    return media
}

let media = mediaCosnumo(1000, 400)

console.log("A média de consumo é " + media + " litros/km")
console.log("A média de consumo é " + mediaCosnumo(1000,400) + " litros/km")

console.log("---------------------------------------------------------------------------------------------")

//Função para pegar o primeiro nome do usupario
function getFirstName (name){
    let firstName = name.split(" ")[0] //prop .spli tranforma o dado de entrada em um vetor, e em seguida dizemos a posição que queremos.
    return firstName //retorna o primeiro item do vetor
}

let userName = getFirstName("William Santos Francisco")
console.log("Seja bem vindo " + userName)


//nesse caso, podemos incluir um segundo paratemtro que será um splitChar, que diz qual será o caracter separador
function getFirstName2 (name, splitChar){
    let firstName = name.split(splitChar)[0] //assim não precisamos colocar o caracter no interior da função, pois já foi informado.
    return firstName
}

let userName2 = getFirstName("William Santos Francisco", " ")
console.log("Seja bem vindo " + userName)