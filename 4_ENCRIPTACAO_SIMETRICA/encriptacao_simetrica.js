import { createCipheriv, randomBytes, createDecipheriv } from 'crypto'

const mensagem = 'Demonstaracao de como decodificar uma mensagem do curso de seguranca'

const key = randomBytes(32)
console.log(key)

const vi = randomBytes(16)
console.log(vi)

const cifra = createCipheriv('aes256', key, vi)
console.log(cifra)

const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex')

console.log(mensagemCifrada)

// transmissão -------------------------------- chave, vi, mensagem

//Decifrar mensagem 
const decifra = createDecipheriv('aes256', key, vi)

const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8')

console.log(mensagemDecifrada.toString('utf-8'))