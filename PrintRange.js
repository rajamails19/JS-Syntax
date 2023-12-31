const n = 5;

for (let i of Array.from({ length: n }, (_, index) => index)) {
    console.log(`The repeating elements are: ${i}`);
}

/*

"The repeating elements are: 0"
"The repeating elements are: 1"
"The repeating elements are: 2"
"The repeating elements are: 3"
"The repeating elements are: 4"

*/
