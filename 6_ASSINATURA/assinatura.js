import {generateKeyPairSync, createSign, createVerify } from 'crypto'

// criacao das chaves publicas e privados
const {privateKey, publicKey}  = generateKeyPairSync('rsa',{
    modulusLength: 2048,
    publicKeyEconding: {
        type:  'spki',
        format: 'pem',
    },
    privateKeyEnconding:{
        type: 'pkcs8',
        format: 'pem'
    },
})

let dados = 'Essa String vai ser assinada!'

// Assinatura

const assinador = createSign('rsa-sha256')
assinador.update(dados)

const assinatura = assinador.sign(privateKey, 'hex')

console.log(`Assinatura: ${assinatura}`)

// envio desse documento para outra pessoa ------------ recebe documento assinatura e chave publica

const verificador = createVerify('rsa-sha256')
// intermediario alteracao do documento
const dadosAlterados = dados + "alterei"

verificador.update(dados)

const ehVerificado = verificador.verify(publicKey, assinatura, 'hex')

console.log(ehVerificado)