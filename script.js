function isPalindrome(input) {
    // Removendo espaços em branco e transformando tudo em letras maiusculas
    const inputWithoutSpaces = input.toString().replace(/\s/g, '').toUpperCase();

    // Removendo acentuação
    const cleanedInput = inputWithoutSpaces.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    // Verificando se a string é igual à sua inversão
    return cleanedInput === cleanedInput.split('').reverse().join('');
}

// Valor para ser verificado
const userInput = "";
console.log(isPalindrome(userInput)); // Saída: true ou false
