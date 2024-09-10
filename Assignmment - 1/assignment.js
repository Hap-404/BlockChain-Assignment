// Function to check whether given strings are anagram or not

function isAnagram(str1, str2) {
    let  sortedstr1 = str1.split("").sort().join("");
    let  sortedstr2 = str2.split("").sort().join("");
    if(sortedstr1 == sortedstr2) {
      console.log("It is an Anagram");
    }
    else {
      console.log("It is not an Anagram");
    }  
    }
    isAnagram("harsh", "sarhh");
    isAnagram("AMIT","amit");

// Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter

function calculateTotalSpentByCategory(transactions) {
    const categoryTotals = {};
      transactions.forEach(transaction => {
      const { category, price } = transaction;
  
      if (!categoryTotals[category]) {
        categoryTotals[category] = 0;
      }
      categoryTotals[category] += price;
    });

    return Object.entries(categoryTotals).map(([category, total]) => ({
      category,
      totalSpent: total
    }));
  }
  
  const transactions = [
    { category: 'Food', price: 20 },
    { category: 'Transportation', price: 15 },
    { category: 'Food', price: 10 },
    { category: 'Entertainment', price: 30 }
  ];
  
  const result = calculateTotalSpentByCategory(transactions);
  console.log(result);

//  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.

function findLargestElement(numbers) {
    if (numbers.length === 0) {
        return 0; 
      }
    
      let largest = numbers[0];
      for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
          largest = numbers[i];
        }
      }
      return largest;
    }
const numbers = [3, 7, 2, 9, 1];
const largestElement = findLargestElement(numbers);
console.log("The largest element is:", largestElement);

// Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.

function calculateTime(n) {
    const startTime = performance.now();
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    return elapsedTime;
  }
  const n = 10000;
  const timeTaken = calculateTime(n);
  console.log(`Time taken to calculate sum from 1 to ${n} is ${timeTaken} milliseconds`);

// Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;   
  }
  const name = "Harsh";
  const reesult = countVowels(name);
  console.log(reesult);

// Write a function `sumArray` that takes an array of numbers as input and returns the sum of all the numbers.
function sumArray(numbers) {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum;
  }

// Implement a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
  }
  
// Write a function `findSmallestElement` that takes an array of numbers and returns the smallest element.
function findSmallestElement(numbers) {
    if (numbers.length === 0) {
      return 0; 
    } 
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
    return smallest;
  }  
  const nums = [3, 7, 2, 9, 1];
  const smallestElement = findSmallestElement(numbers);
  console.log("The smallest element is:", smallestElement);

// Create a function `reverseString` that takes a string and returns the string reversed.
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
// Write a function `fibonacci` that takes a number `n` and returns the `n`th number in the Fibonacci sequence.
function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
// Implement a function `removeDuplicates` that takes an array and returns a new array with duplicate values removed.

// Write a function `countOccurrences` that takes a string and a character and returns the number of times the character appears in the string.
function countOccurrences(str, char) {
    return str.split(char).length - 1;
  }
  
// Create a function `findCommonElements` that takes two arrays and returns a new array containing the elements that are present in both arrays.
function findCommonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
  }
// Implement a function `sortStrings` that takes an array of strings and returns the array sorted in alphabetical order.
function sortStrings(arr) {
    return arr.sort();
  }

