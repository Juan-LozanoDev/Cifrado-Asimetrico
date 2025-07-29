const crypto = require('crypto');  // Importacion del modulo crypto para la generación de claves, cifrado y descrifrado

// Se generan las claves publica y privada
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048, // longitud en bits
  publicKeyEncoding: {
    type: 'spki',       // Formato estandar para clave pública
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',      // Formato estandar para clave privada
    format: 'pem'
  }
});

// Mensaje a encriptar
const mensajeSinEncriptar = "Este es el mensaje secreto";
console.log("Mensaje sin encriptar:", mensajeSinEncriptar);

// Se encripta el mensaje con la clave pública
const mensajeEncriptado = crypto.publicEncrypt(publicKey, Buffer.from(mensajeSinEncriptar, 'utf8'));
console.log("Mensaje encriptado (base64):", mensajeEncriptado.toString('base64'));

// Se desencripta el mensaje con la clave privada
const mensajeDesencriptado = crypto.privateDecrypt(privateKey, mensajeEncriptado);
console.log("Mensaje desencriptado:", mensajeDesencriptado.toString('utf8'));

