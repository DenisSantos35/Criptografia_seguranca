import jwt from 'jsonwebtoken'

const senha = "123"

// let token = jwt.sign({
//     nome: "Denis Diogo dos Santos",
//     email: "denisdiogo18@hotmail.com"    
// }, senha);

let token = jwt.sign({
    num_cartao: "Gestor_Tecnologia_Inovacao"    
}, senha);

console.log(token)
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. HEADER
//eyJhcGVsaWRvIjoiSk0iLCJjdXJzbyI6InNlZ3VyYW5jYSBlIG5vZGUuanMiLCJpYXQiOjE2OTg2OTQyMzF9. PAYLOAD
//2-Gcoh-Dh0W7mRJz8WH1zjGQhex2LtQ2QkCiW0pwYWA ASSINATURA

//token += "alteracao"
try{
    const tokenDecodificado = jwt.verify(token, senha)
console.log(tokenDecodificado)
}catch(err){
    console.log('token invalido')
}