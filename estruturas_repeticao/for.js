//FOR
//Nesse caso declaramos a variavel diretamente no laço. Enquanto a variável for menor que 10, será incrementado 1 à variável
for (let contador = 0; contador < 10; contador++){
    console.log(contador)
}

console.log("---------------------------------------------------------------------------------------------------------------------")

//FOR num array.
//Dado um arrey com nomes de motoristas, criamos um loop e com uma variável de controle, a qual chamaremos de i,
//percorremos o array até o seu limite (dado pela prop lenght, e incrementamos a variavel de controle)
//Ao final, teremos a iteração para cada motorista no array.

let listaMotoristas = ["GABRIEL","THIAGO","REGINALDO","AROLDO","JOSMAR","CLAUDENI","PEDRO"]

for (let i = 0; i < listaMotoristas.length; i++){
    console.log("Motorista "+ listaMotoristas[i] + " acababa de dar início de viagem!")
}