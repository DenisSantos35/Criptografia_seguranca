import {createHash } from 'crypto'



class Usuario{
    constructor(nome, senha){
        this.nome = nome
        this.hash = this.creaHash(senha)
    }

    creaHash(senha){
        return createHash('sha256').update(senha).digest('hex')
    }

    auth(nome, senha){
        if(this.nome === nome && this.hash === this.creaHash(senha)){
            console.log("Usuário autenticado com sucesso")
            return true
        }
        return false
        
    }
}

// ********************* instancia de usuário ********************************
let user = new Usuario("Denis", "1000")

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++){
    
    if(user.auth("Denis", senhaTeste.toString())){
        console.log(`a senha do usuario é ${senhaTeste}`)
    }
}



