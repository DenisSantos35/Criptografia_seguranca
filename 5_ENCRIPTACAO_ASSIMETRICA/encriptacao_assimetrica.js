import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'crypto'

const {privateKey, publicKey} = generateKeyPairSync('rsa',{
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

//console.log(privateKey)

//console.log(publicKey)

// encriptar informação
const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from("123")
)

console.log(dadosCriptografados.toLocaleString('hex'))

// ------------------------- Transmissão ------------------------------------

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
)

console.log(`Dados decifrados: ${dadosDecifrados.toString('utf-8')}`)