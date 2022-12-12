// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Hotel 2022"
// //console.log(cohort.split(""))

// // a) Your answer: "H, o, t, e, l, 2, 0, 2, 2"
// // b) Verify and explain: This logged Hotel 2022 in this way because the .split("") function converts the string into an array. The "" inside the parenthesis cause the original argument to be split into each individual character

// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: "Undefined"
// b) Verify and explain: This logged undefined because while we do call on the function and the terminal recognizes that we are missing a return before the 'Hello,' statement that would cause the console.log to return "Hello, LEARN Student".

// // --------------------3) What will this log?

 const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
  //console.log(multipliedByTwo)

// // a) Your answer: [8, 10, 12, 14, 16]
// // b) Verify and explain: This will log the numbers all multiplied by two following console log that calls on the multipliedByTwo following the .map and *2. The .map() function makes it so that action follows is applied to all parts of the array

// // --------------------4) What will this log?

 const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// // a) Your answer: "11, 13, 15"
// // b) Verify and explain: This logged only the odd numbers in the array because the .filter is looking for the opposite of 2/0 which would lead to an odd solution because even numbers dont leave behind remainders, the ! infront of the == makes it the opposite of ===

// // --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// // a) Your answer: "JavaScript"
// // b) Verify and explain This logged JavaScript because the console.log here is calling on the value being in the [0] space in the languages array within the myCodingSKills object. 

// // --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// // a) Your answer: Learn {student: 'George', cohort: "Hotel", year: 2022}
// // b) Verify and explain: This logged the information for the class laid out, the console log adds the "George" value to the name and 
