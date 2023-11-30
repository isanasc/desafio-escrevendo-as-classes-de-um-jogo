//Projeto Felipão - Escrevendo as Classes de um Jogo.

class propriedadesdeHerói{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    } 
    atacar(){
        let ataque
        switch (this.tipo) {
            case "mago":
                ataque = "magia "
                break;
            case "guerreiro":
                ataque = "espada "
                break
            case "monge":
                ataque = "artes marciais "
                break
            case "ninja":
                ataque = "shuriken "
                break
        
            default:
                ataque = "usou um ataque desconhecido"
                
        }

        console.log(` O ${this.tipo} atacou usando ${ataque} `)
        }
    }

    let mago = new propriedadesdeHerói("isadora ","100", "mago")
    let guerreiro = new propriedadesdeHerói("Isadora", "100 ", "guerreiro")
    let monge = new propriedadesdeHerói("isadora","100", "monge")
    let ninja = new propriedadesdeHerói("isadora","100", "ninja")

    mago.atacar()
    guerreiro.atacar()
    monge.atacar()
    ninja.atacar()
