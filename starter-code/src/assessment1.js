// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num%2===0
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a>b){
    return a
  }
  else {
    return b
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a>b && a>c){
    return a
  }
  else if (b>a && b>c) {
    return b
  }
  else {
    return c
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  
   return numbers.reduce((a, b) => a + b, 0)
  
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
 return Math.max.apply(null, numbers)
}

// Return the longest string in an array

function longestString(strings) {
  let longest = strings[0];
    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    return longest;
}


// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (var i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) {
        return true;
    }
}
return false;
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  let unique = wordsArr.filter((word, index) => wordsArr.indexOf(word) === index)
   return unique[0]
 }

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ` + `${personObj.lastName}`
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let subMatrix = matrix.map(function(subArray) {
    return Math.max.apply(null, subArray);
  });
  
    return Math.max.apply(null, subMatrix)
 
}