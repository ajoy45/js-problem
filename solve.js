// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
const reverseString = (str) => {
  const part = str.split('');
  let arr = []
  for (let i = part.length - 1; i >= 0; i--) {
    const char = part[i];
    arr.push(char)

  }
  const result = arr.join('')
  console.log(result)
}
reverseString("hello world")

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
const sumOfPositiveNumber = (arr) => {
  if (arr.length > 0) {
    let sum = 0;
    for (const i of arr) {
      if (i > 0) {
        sum += i
      }

    }
    console.log(sum)
  }
  else {
    console.log('array is empty')
  }
}
sumOfPositiveNumber([2, -5, 10, -3, 7])
// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function mostFrequentElement(array) {

  let maxCount = 0;
  let mostFrequent = array[0]

  for (let i = 0; i < array.length; i++) {

    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      mostFrequent = array[i];
    }
  }

  return mostFrequent;
}
const array = [1, 2, 3, 3, 3, 3, 4, 5, 5, 5];
console.log(mostFrequentElement(array));
// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const twoNumbersWithSum = (arr, target) => {
  let firstElement = 0;
  let lastElement = arr.length - 1;
  while (firstElement < lastElement) {
    let sum = arr[firstElement] + arr[lastElement];
    if (sum === target) {
      return [firstElement, lastElement]
    }
    else if (sum < target) {
      firstElement++
    }
    else {
      lastElement--
    }
  }
  return []
}
const result = twoNumbersWithSum([1, 3, 6, 8, 11, 15], 9);
console.log(result)
//   Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const simpleCalculator = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  else if (operator === "-") {
    return num1 - num2;
  }
  else if (operator === "*") {
    return num1 * num2
  }
  else if (operator === "/") {
    if (num2 != 0) {
      return num1 / num2
    }
    else {
      return 'can not divided by zero'
    }

  }
}
const result2 = simpleCalculator(2, 0, "/");
console.log(result2)
// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
// Generate a random password of 12 characters.
const generatePassword = (length) => {
  // Create a string 
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+{[]}\|;:'\",./<>?";

  // Generate a random password of  specified length.
  let password = '';
  for (let i = 0; i <= length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)]
  }
  return password;
}
const password = generatePassword(12)
console.log(password);
// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
const romanToInteger = (roman) => {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentNumeral = romanNumerals[roman[i]];
    const nextNumeral = romanNumerals[roman[i + 1]];
    console.log(currentNumeral, nextNumeral)

    if (nextNumeral > currentNumeral) {
      result += nextNumeral - currentNumeral;
      i++; // Skip the next numeral as it has already been accounted for.
    } else {
      result += currentNumeral;
    }
  }

  return result;
}


console.log(romanToInteger("XX"));
// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const secondSmallNumber = arr => {
  let first = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (first > element) {
      first = element;
    }

  }
  return first;
}
console.log(secondSmallNumber([1, 2, 4, 5, 0]))
//Task9. Javascript Program to Check if a number is Positive, Negative, or Zero`
const checkNumber = num => {
  if (num > 0) {
    return 'this is positive'
  }
  else if (num == 0) {
    return 'this is zero'
  }
  else if (num < 0) {
    return 'this is negative'
  }
}
const result3 = checkNumber(6);
console.log(result3)
//  task10 Javascript Program to Check if a Number is Odd or Even
const checkOddAndEven = num => {
  if (num % 2 == 0) {
    return 'this number is even'
  }
  else if (num % 2 != 0) {
    return 'this number is odd'
  }
}
const result4 = checkOddAndEven(0);
console.log(result4)
// task11.JavaScript Program to Find the Largest Among Three Numbers
const largestNumber = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1
  }
  else if (num2 > num1 && num2 > num3) {
    return mum2
  }
  else {
    return num3
  }
}
const result5 = largestNumber(5, 3, 4);
console.log(result5)
// task12.JavaScript Program to Check Prime Number
const checkPrimeNumber = n => {
  let isPrimeNumber = true;
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i - 1; j++) {
      if (i % j == 0) {
        isPrimeNumber = false;
        break;
      }
    }
    if (isPrimeNumber) {
      console.log(i)
    }
    isPrimeNumber = true;
  }

}
checkPrimeNumber(100)
// task13.JavaScript Program to Print All Prime Numbers in an Interval
const primeNumberInterval = (num1, num2) => {
  let isPrimeNumber = true;
  for (let i = num1; i <= num2; i++) {
    for (let j = 2; j < i - 1; j++) {
      if (i % j == 0) {
        isPrimeNumber = false;
        break;
      }
    }
    if (isPrimeNumber) {
      console.log(i)
    }
    isPrimeNumber = true;
  }
}
primeNumberInterval(1, 10)
// task14.JavaScript Program to Find the Factorial of a Number
const findFactorial = n => {
  let factorial = 1;
  if (n < 0) {
    return 'factorial negative number is not allow'
  }
  else if (n == 0) {
    return 1
  }
  for (let i = n; i >= 1; i--) {
    factorial *= i
  }
  return factorial;
}
const result6 = findFactorial(6);
console.log(result6)
// task15.JavaScript Program to Display the Multiplication Table
const multiplicationTable = () => {

  for (let i = 1; i <= 10; i++) {
    const output = 3 * i;
    console.log(`3*${i}=${output}`)
  }

}
multiplicationTable()
// task16.JavaScript Program to Print the Fibonacci Sequence
const fibonacci = n => {
  let n1 = 0, n2 = 1, next
  for (let i = 1; i <= n; i++) {
    console.log(n1)
    next = n1 + n2;
    n1 = n2;
    n2 = next
  }
  return next
}
const result7 = fibonacci(4);
console.log(result7)
//  task16.JavaScript Program to Check Armstrong Number
const findArmstrongNumber = n => {
  let sum = 0;
  let temp=n
  while (temp > 0) {
    const r = temp % 10;
    sum += r * r * r;
    temp = parseInt(temp / 10)
  }
  if (sum == n) {
    console.log(`${n} is an Armstrong number`);
  }
  else {
    console.log(`${n} is not an Armstrong number.`);
  }

}
findArmstrongNumber(153)
// task17.JavaScript Program to Find the Sum of Natural Numbers
const sumOfNaturalNumber=n=>{
  let sum=0;
  for(let i=1;i<=n;i++){
    sum+=i
  }
  return sum;
}
const result8=sumOfNaturalNumber(10);
console.log(result8)
// task18.JavaScript Program to Check if the Numbers Have Same Last Digit
const checkSameDigit=(num1,num2)=>{
  let x=0;
  const toText1=num1.toString();
  const lastChar1=toText1.slice(-1);
  const lastDigit1=+(lastChar1);
  const firstNumber=x+lastDigit1;
  const toText2=num2.toString();
  const lastChar2=toText2.slice(-1);
  const lastDigit2=+(lastChar2);
  const secondNumber=x+lastDigit2;
  if(firstNumber==secondNumber){
    return `number ${num1} and ${num2} last digit is same`
  }
  else{
    return `number ${num1} and ${num2} last digit is not same`
  }

 
  
}
const result9=checkSameDigit(33,23);
console.log(result9)
// task19.JavaScript Program to Find HCF or GCD
const greatestCommonDivisor=(num1,num2)=>{
  let gcd;
  for(let i=1;i<=num1&&i<=num2;i++){
    if(num1%i==0 && num2%i==0){
             gcd=i
    }
  }
  return gcd
}
const result10=greatestCommonDivisor(24,15);
console.log(result10)
// task.20 JavaScript Program to Find LCM
const findLcm=(num1,num2)=>{
  let hig=(num1>num2)?num1:num2;
  while(true){
    if(hig%num1==0 && hig%num2==0){
      console.log(`LCM of ${num1} and ${num2} is ${hig}`)
      break;
    }
    hig++
  }
  // formula=(num1*num1)/gcd
}
findLcm(24,15)
// task21.JavaScript Program to Find the Factors of a Number
const findFactor=n=>{
  for(let i=1;i<=n;i++){
    if(n%i==0){
      console.log(i)
    }
  }
}
findFactor(12)