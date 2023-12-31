const someNumbers = [1,2,3,4,5,2,56,2,3];

// Finding Unique elements 
const unique = [...new Set(someNumbers)];

console.log("Unique Elements are:", unique);

// "Unique Elements are:", [1, 2, 3, 4, 5, 56]
