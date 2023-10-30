const mensagemSecreta = "ZUMBA";

console.log(mensagemSecreta)

function cifraMensagem(mensagem, movimento){
   let novaMensagem = mensagem.split('').map((caractere) =>{
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere + movimento)
   } )

   return novaMensagem.join('')
   
}

const mensagemCifrada = cifraMensagem(mensagemSecreta, 6)
console.log(mensagemCifrada)

function decifraMensagem(mensagem, movimento){
    let novaMensagem = mensagem.split('').map((caractere) =>{
     const codigoCaractere = caractere.charCodeAt(0); // retorna o numero correspondente ao caracter da tabela ask
     console.log(codigoCaractere)
     return String.fromCharCode(codigoCaractere - movimento)
    } )
 
    return novaMensagem.join('')
    
 }

 const mensagemDecifrada = decifraMensagem(mensagemCifrada, 6)


 console.log(mensagemDecifrada)

 // padrao e conversao para asc

 //const mensagem = "A";

//let codAscii = mensagem.charCodeAt(0);

//onsole.log(codAscii); // 65

/*const mensagem = "a";

let codAscii = mensagem.charCodeAt(0);

console.log(codAscii); // 97*/

const mensagem = "ALURA";

for (let i = 0; i < mensagem.length; i++) {
 console.log(mensagem.charCodeAt(i));
}

const mensagemDecimal = String.fromCharCode(65, 76, 85, 82, 65);
console.log(mensagemDecimal);

const mensagemHexa = String.fromCharCode(0x41, 0x4C, 0x55, 0x52, 0x41);
console.log(mensagemHexa);
