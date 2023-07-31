function isPalindrome(input) {
    // Removing whitespace and turning everything to uppercase
    const inputWithoutSpaces = input.toString().replace(/\s/g, '').toUpperCase();

    // Removing accents
    const cleanedInput = inputWithoutSpaces.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Checking if the string is equal to its inversion
    return cleanedInput === cleanedInput.split('').reverse().join('');
}

// Enter the value to be checked
const input = "";
console.log(isPalindrome(input)); // Output: true or false
