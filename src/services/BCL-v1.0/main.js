const CryptoJS = require('crypto-js');
// const axios = require('../../configs/apiConfig');
let numeroCripto = '2333324234'

let arrayDecrypt;

const init = async (criptoArray) => {
    let decryptResponse = CryptoJS.AES.decrypt(criptoArray, 'TESTE');
    arrayDecrypt = JSON.parse(decryptResponse.toString(CryptoJS.enc.Utf8));
    const arrayOfGenerateNumbers = generateRandomNumbers();

    return generateLocalKey(arrayDecrypt, arrayOfGenerateNumbers);
}

function generateRandomNumbers() {
    let arrayOfNumbers = [];
    for (let i = 0; i < 10; i++) {
        let generateNumber = Math.floor(Math.random() * 10);
        arrayOfNumbers.push(generateNumber);
    }

    return arrayOfNumbers;
}


const generateLocalKey = (biteArray, numberArray) => {
    let localKey = []
    numberArray.map(x => {
        localKey.push(biteArray[x])
    })

    localKey = localKey.join('')
    return localKey;
}

const generateServeKey = (numbers) => {
    let decryptResponse = CryptoJS.AES.decrypt(numbers, 'TESTE');
    let numbersDecrypt = decryptResponse.toString(CryptoJS.enc.Utf8);

    let arrayOfNumbers = String(numbersDecrypt).split('');
    let serverKey = []
    arrayOfNumbers.map(x => {
        serverKey.push(arrayDecrypt[x]);
    })
    serverKey = serverKey.join('')
    return serverKey;
}

const changeKeys = async (localKey) => {
    axios.post('/cypto/changeKeys', localKey).then(response => {
      alert("Troca de chaves feita");
    })
      .catch(() => {
        alert('Erro na troca de chaves')
      });
  }

// export default {init, generateServeKey, changeKeys}