// AND ( && )
let nivelTanque = 200
let documentacaoAtiva = true
let liberadoViajar = (nivelTanque > 100) && (documentacaoAtiva = true)
console.log(liberadoViajar)

let capacidadeTanqueEmTon = 30
let tipoTanque = "Carga Fria"
let permitidoCarregar = (capacidadeTanqueEmTon >= 25) && (tipoTanque === "Carga Quente")
console.log(permitidoCarregar)

//ou ||
let tempo = "sol"
let carreta = "carregada"
let liberadoDescarregar = (tempo !== "chuva") || (carreta === "carregada")
console.log(liberadoDescarregar)

//NOT
let tempo2 = "sol"
let carreta2 = "carregada"
let liberadoDescarregar2 = (tempo !== "chuva") || (carreta === "carregada")
console.log(!liberadoDescarregar2)