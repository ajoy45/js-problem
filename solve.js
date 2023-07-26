// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
const reverseString=(str)=>{
    const part=str.split('');
    let arr=[]
    for(let i=part.length-1;i>=0;i--){
        const char=part[i];
        arr.push(char)
    
    }
    const result=arr.join('')
    console.log(result)
}
reverseString("hello world")

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
const sumOfPositiveNumber=(arr)=>{
    if(arr.length>0){
        let sum=0;
        for(const i of arr){
           if(i>0){
             sum+=i
           }
           
        }
        console.log(sum)
    }
    else{
        console.log('array is empty')
    }
}
sumOfPositiveNumber( [2, -5, 10, -3, 7])
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
  const array = [1, 2, 3, 3, 3,3, 4, 5, 5, 5];
  console.log(mostFrequentElement(array)); 
// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

  const twoNumbersWithSum=(arr,target)=>{
    let firstElement=0;
    let lastElement=arr.length-1;
    while(firstElement<lastElement){
        let sum=arr[firstElement]+arr[lastElement];
        if(sum===target){
            return[firstElement,lastElement]
        }
        else if(sum<target){
           firstElement++
        }
        else{
            lastElement--
        }
    }
    return[]
  }
  const result=twoNumbersWithSum([1, 3, 6, 8, 11, 15],9);
  console.log(result)
//   Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
  const simpleCalculator=(num1,num2,operator)=>{
     if(operator==='+'){
        return num1+num2;
     }
     else if(operator==="-"){
        return num1-num2;
     }
     else if(operator==="*"){
        return num1*num2
     }
     else if(operator==="/"){
        if(num2!=0){
            return num1/num2
        }
        else{
            return 'can not divided by zero'
        }
        
     }
  }
  const result2=simpleCalculator(2,0,"/");
  console.log(result2)