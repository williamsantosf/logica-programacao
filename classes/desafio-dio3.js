class hero {
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        switch(this.tipo){
            case "mago":
            console.log(`O ${this.tipo} atacou usando magia!`)
            break

            case "guerreiro":
            console.log(`O ${this.tipo} atacou usando espada!`)
            break

            case "monge":
            console.log(`O ${this.tipo} atacou usando artes marciais!`)
            break

            case "ninja":
            console.log(`O ${this.tipo} atacou usando shuriken`)
            break
        }
    }
}

let hero1 = new hero("Ninja",15,"ninja")
let hero2 = new hero("Monge", 60,"monge")
let hero3 = new hero("Guerreiro",35, "guerreiro")
let hero4 = new hero("Mago", 50, "mago")


hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()
