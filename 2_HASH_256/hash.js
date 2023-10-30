import { createHash } from 'crypto'

let senha = "Jd14409696*"

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash(senha))

// ********************** classe usuário ************************************
class Usuario{
    constructor(nome, senha){
        this.nome = nome
        this.hash = criaHash(senha)
    }

    // ************** metodo de autenticação ********************************
    autentica(nome, senha){
        if(nome === this.nome && this.hash === criaHash(senha)){
            console.log("Usuário autenticado com sucesso")
            return true
        }else{
            console.log('usuaro ou senha incorretos')
            return false
        }
    }
}

// ********************* instancia de usuário ********************************
let user = new Usuario("Denis", "Jd14409696*")

console.log(user)
console.log(user.nome)
console.log(user.hash)
// caso de sucesso
user.autentica("Denis", "Jd14409696*")

//Caso de fracasso
user.autentica("denis", "Jd14409696*")

