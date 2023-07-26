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