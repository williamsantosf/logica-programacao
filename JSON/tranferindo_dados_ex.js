let frota = {
    nome: "Aroldo De Andrade",
    age: 50,
    infoFleet: {
        0: ["Frota","244"],
        1: ["Placa Cavalo","RPD-8A61"],
        2: ["Placa Carreta","JSD-2277"],
        3: ["Tipo","Volvo"]
    }
}

generateDriver(frota)

function generateDriver(frota){
    console.log(`O motorista é ${frota.nome}`)
    console.log(`A idade do motorista é ${frota.age}`)
    console.log("-----------------------------------")

    for (let index in frota.infoFleet){
        let [infoName, infoContent] = frota.infoFleet[index]
        console.log(`- ${infoName}: ${infoContent}`)
    }
}