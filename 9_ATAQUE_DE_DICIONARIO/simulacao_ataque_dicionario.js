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
let user = new Usuario("Denis", "adimin123456")

const senhasComuns = ["senha", "123456",
 "senha123", "admin","blink182", "meuAniversario","adimin123456", "senha123", "brasil", "102030"]

 senhasComuns.map((senhas)=> {
    if(user.auth("Denis", senhas)){
        console.log(`A senha do usuario é ${senhas}`)
    }
 });





