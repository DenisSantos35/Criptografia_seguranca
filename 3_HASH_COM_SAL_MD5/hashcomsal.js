import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'

function createHashWithSault(senha){
    const sault = randomBytes(16).toString('hex') // aqui gera uma palavra com 16 bytes
    console.log(sault, sault.length)
    const passwordeHasheada = scryptSync(senha, sault, 64).toString('hex');

    return `${sault}:${passwordeHasheada}`
}

class User{
    constructor(nome, senha){
        this.nome = nome;
        [this.sault, this.hash] = createHashWithSault(senha).split(':')
    }

    authUser(nome, senha){
        if(nome === this.nome){
            const testeHash = scryptSync(senha, this.sault, 64);
            console.log(`teste da hash ${testeHash.toString('hex')}`)
            const hashReal = Buffer.from(this.hash, 'hex');
            console.log(`Hash real ${hashReal.toString('hex')}`)

            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)
            console.log(`Corresponder ${hashesCorrespondem.toString('hex')}`)

            if(hashesCorrespondem){
                console.log("Usuario autenticado com sucesso")
                return true
            }
        }

        console.log("Usuário ou senha incorretos")
        return false
    }

}

const jm = new User('Denis', 'Jd14409696*')

console.log(jm)

//teste de sucesso
jm.authUser('Denis', 'Jd14409696*')

//teste de fracasso
jm.authUser('denis', 'Jd14409696*')