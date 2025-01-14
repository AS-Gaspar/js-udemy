// Método concat
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2, 7, 8, 9);

console.log(array3)

// ... rest --> Spread
const arrayRest = [...array1, 'Zé', ...array2, ...[7, 8, 9], 10];

