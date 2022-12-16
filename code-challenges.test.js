// ASSESSMENT 2: Coding Practical Questions with Jest

// const { default: test } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
// Psuedocoding
// create a test that returns whether a number is divisible by 3
// input: number
// output: number is divisble by 3
describe("divisibleByThree", () => {
    it("returns is divisible by three", () => {
        let object1 = 15
        expect(divisibleByThree(object1 % 3 === 0)).toEqual('${number} is divisible by three')
        
    })
})
// yarn test : ./code-challenges.test.js
//   divisibleByThree
//   ✕ returns is divisible by three

// ● divisibleByThree › returns is divisible by three

const divisibleByThree = (divisible) => {
    if (object1 % 3 === 0){
    return '${number} is divisible by three'
    } else if (object1 % 3 !== 0){
        return '${number} is not divisible by three'
    }
    
    
}
 const object1 = { number: 15 }
 console.log(divisibleByThree())
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
function objectArray(divisible) 
// b) Create the function that makes the test pass.

// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.
describe ("capitalLetters", () => {
    it("returns all words capitalized", () => {
        expect (capitalLetters(randomNouns1).toEqual(randomNouns1.toUpperCase))
    })
})
// // Test:./code-challenges.test.js
//   capitalLetters
//   ✕ returns all words capitalized (1 ms)

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
const allCaps = randomNouns1.map(done => {
    return done.toUpperCase 
})
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// // b) Create the function that makes the test pass.

// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
describe("testingVowels", () => {
    it("logs the index of the first vowel", () => {
        expect(testingVowels(vowelTester1)).toEqual(randomNouns1)
    })
})

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
const regex = /[A-Z]/g;
const found = vowelTester1.match(regex);

