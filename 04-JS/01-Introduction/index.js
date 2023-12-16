let fname="ankush";
let lastname="tiewaii";
let full=fname+lastname;
// alert(full);

let length= full.length;
// alert(length);
let extract=full.slice(0,4);
// alert(extract);

let uppercase= full.toUpperCase();
let lowercase=full.toLowerCase();
// alert(uppercase,lowercase);

let sum = 10 + 5; // Addition
let difference = 10 - 5; // Subtraction
let product = 10 * 5; // Multiplication
let quotient = 10 / 5; // Division
let remainder = 10 % 3; // Modulo
console.log(sum, difference, product, quotient, remainder);

function square(x) {
  return x * x;
}

// Using the returned value
let result = square(3);
console.log(result); // Output: 9


function calculateBMI(weight, height) {
  // Calculate BMI using the formula: weight / (height * height)
  const bmi = weight / (height * height);

  // Round the BMI to the nearest whole number
  const roundedBMI = Math.round(bmi);

  // Return the rounded BMI value
  return roundedBMI;
}

calculateBMI(60,1.2);

console.log("The calculated BMI is: ${roundedBMI}");