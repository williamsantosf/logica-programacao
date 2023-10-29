//CLASSES


class formaDeBolo{                               //declaração de uma classe com a palavra reservada                                  
    constructor(saborDaMassa, saborRecheio){     //método construtor com os parâmteros que a classe deve ter                               
        this.saborDaMassa = saborDaMassa         //os atributos da classe recebem o this, que diz que esse atributo pertence a classe                                   
        this.saborRecheio = saborRecheio         //os atributos são como variáveis internas da classe. É o mes que [let saborRcheio = saborRecheio]                         
    }
    //métodos da classe são fuunções dentro da classe. Não precisa da palavra function
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
    assar(){
        console.log("Assando bolo de " + this.saborDaMassa)
    }
}

//instancia da classe. A variável recebe new classe (parametro1, parametro2)

let boloFesta = new formaDeBolo("massa de chocolate","recheio de nutella")
let boloPremium = new formaDeBolo("baunilha", "coco") 

//chamada dos métodos dos objetos instanciados acima
boloFesta.escrever()
boloPremium.escrever()

boloFesta.assar()