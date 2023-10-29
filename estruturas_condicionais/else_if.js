let diasTrabalhados = 7

if (diasTrabalhados < 6){
    console.log("Motorista disponível para viagens")
} else if (diasTrabalhados == 6){ //usar == ou ===. Se usar somente um =, ele atualiza o valor a variável e nunca executa o terceiro passo.
    console.log ("Motorista deve Folgar Dia Seguinte")
} else {
    console.log("Motorista estourou sétimo dia!")
}