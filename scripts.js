// helper functions
function stringToArray(str){
    return str.split('');
}
function reverseString(str) { 
    return (str.split('').reverse().join(''));
}

function sumofArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function getKeyByValue(map, value){
    for (const key in map){
        if (map[key] === value){
            return key;
        }
    }
    return null; // failed
}

const getAllSubsets = arr => arr.reduce((subsets, value) => subsets.concat(subsets.map(set => [value, ...set])), [[]] );
/*
1. Write a JavaScript function that reverse a number. 
*/
function reverseNum(num) {
    let str = num.toString();
    num = parseInt(reverseString(str));
    return num;
}
console.log("1. Write a JavaScript function that reverse a number. ");
console.log("\nInput: ", 12345);
console.log("Output: ", reverseNum(12345), "\n");

/* 2: Write a JavaScript function that checks whether a passed string is palindrome or not? 
*/

function isPalidrone(str) {
    return (reverseString(str) === str);
}
console.log("2: Write a JavaScript function that checks whether a passed string is palindrome or not?");
console.log("\nInput: ", "aba");
console.log("Output: ", isPalidrone("aba"));
console.log("\nInput: ", "abb");
console.log("Output: ", isPalidrone("abb"), "\n");

/* 3. Write a JavaScript function that generates all combinations of a string. 
*/

const getAllCombinations = arr => arr.reduce((subsets, value) => subsets.concat(subsets.map(set => [value, ...set])), [[]] );
function generateCombinations(str) {
    let combinations = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            combinations.push(str.slice(i, j));
        }
    }
    return combinations;
}


console.log("3. Write a JavaScript function that generates all combinations of a string.");
console.log("\nInput: ", "dog");
console.log("Output: ", generateCombinations("dog"));
console.log("\nInput: ", "abcde");
console.log("Output: ", generateCombinations("abcde"), "\n");

/* 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
*/

function alphabeticalizeString(str) {
    let temp = str.split('');
    return (temp.sort().join(""));
}

console.log("4. Write a JavaScript function that returns a passed string with letters in alphabetical order. ");
console.log("\nInput: ", "erickumar");
console.log("Output: ", alphabeticalizeString("erickumar"), "\n");


/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
*/

function capitalizeString(str) {
    let temp = str.split(' ');
    for (let i = 0; i < temp.length; i++) {
        temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
    }
    return (temp.join(" "));
}

console.log("5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. ");
console.log("\nInput: ", "a very happy family");
console.log("Output: ", capitalizeString("a very happy family"), "\n");


/* 
6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
*/

function longestWord(str) {
    let temp = str.split(' ');
    let longest = temp[0];
    for (let i = 1; i < temp.length; i++) {
        if (temp[i].length > longest.length) {
            longest = temp[i];
        }
    }
    return longest;
}
console.log("6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. ");
console.log("\nInput: ", "a very hungry hippo");
console.log("Output: ", longestWord("a very hungry hippo"), "\n");

/* 
7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
*/
function countVowels(str) {
    let temp = str.split('');
    let count = 0;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === "a" || temp[i] === "e" || temp[i] === "i" || temp[i] === "o" || temp[i] === "u" || temp[i] === "A" || temp[i] === "E" || temp[i] === "I" || temp[i] === "O" || temp[i] === "U") {
            count++;
        }
    }
    return count;
}
console.log("7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.");
console.log("\nInput: ", "Bear io juAE  HIOU");
console.log("Output: ", countVowels("Bear io juAE  HIOU"), "\n"); // 10

/* 
8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 

*/

function isPrime(num) {
    if (num === 0) {
        return true;
    }
    else if (num === 1) {
        return false;
    }
    else {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
        return isPrime;
    }
}

console.log("8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. ");
console.log("\nInput: ", 13);
console.log("Output: ", isPrime(13));
console.log("Input: ", 26);
console.log("Output: ", isPrime(26), "\n");

/* 
9: Write a JavaScript function which accepts an argument and returns the type. 
    
*/

function type(data) {
    return typeof data;
}
let unDefined;
let obj = [1, 2, 3];
console.log("9: Write a JavaScript function which accepts an argument and returns the type. ");
console.log("\nInput: ", 1);
console.log("Output: ", type(1), "\n");
console.log("Input: ", false);
console.log("Output: ", type(false), "\n");
console.log("Input: ", "null");
console.log("Output: ", type(null), "\n");
console.log("Input: ", "unDefined");
console.log("Output: ", type(unDefined), "\n");
console.log("Input: ", "abc");
console.log("Output: ", type("abc"), "\n");
console.log("Input: ", "type()");
console.log("Output: ", type(type), "\n");

/*
 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
*/
function identityMatrix(n){
    let matrix = Array.from(Array(n), () => new Array(n));
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
        if (i === j){
            matrix[i][j] = 1;
        }
        else{
            matrix[i][j] = 0;
        }
        }
    }
    return matrix;
}
console.log("10. Write a JavaScript function which returns the n rows by n columns identity matrix. ");
console.log("\nInput: ", 4);
console.log("Output: ", identityMatrix(4), "\n");

/*
 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
*/
function secondSmallestAndLargest(arr){
    if(arr.length < 2){
        return [null];
    }
    arr.sort();
    if (arr.length === 2){
        return arr.reverse(); // 2nd elemenet 2nd smallest, 1st element second largest
    }
    return [arr[1], arr[arr.length-2]];
}
console.log("11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. ");
console.log("\nInput: ", [2,4,1,3,5]);
console.log("Output: ", secondSmallestAndLargest([2,4,1,3,5]), "Format [secondSmallest, SecondLargest]\n");
/*
 12: Write a JavaScript function which says whether a number is perfect. 
*/
function isPerfectNumber(num) {
    if (num === 0 || num === 1) {
        return false;
    }
    else {
        let divisors = [];
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                divisors.push(i);
            }
        }
        return (sumofArray(divisors) === num);
    }
}
console.log("12: Write a JavaScript function which says whether a number is perfect. ");
console.log("\nInput: ", 13);
console.log("Output: ",isPerfectNumber(13), "\n");
console.log("Input: ", 496);
console.log("Output: ", isPerfectNumber(496), "\n");
/*

 13. Write a JavaScript function to compute the factors of a positive integer. 
*/
function getFactors(num) {
    if (num === 0) {
        return [0];
    }
    else {
        let factors = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                factors.push(i);
            }
        }
        return (factors);
    }
}
console.log("13. Write a JavaScript function to compute the factors of a positive integer. \n");
console.log("Input: ", 13);
console.log("Output: ", getFactors(13), "\n");
console.log("Input: ", 12);
console.log("Output: ", getFactors(12), "\n");

/*

 14. Write a JavaScript function to convert an amount to coins. 
*/
function getChange(num) {
    if (num === 0) {
        return [];
    }
    else {
        let change = [];
        let count = ((num - (num % 25)) / 25);
        for (let i = 0; i < count; i++) {
            change.push(25)
        }
        num = num % 25;
        count = ((num - (num % 10)) / 10);
        for (let i = 0; i < count; i++) {
            change.push(10)
        }
        num = num % 10;
        count = ((num - (num % 5)) / 5);
        for (let i = 0; i < count; i++){
            change.push(5)
        }
        num = num % 5;
        for (let i = 0; i < num; i++) {
            change.push(1)
        }
        return change;
    }
}
console.log("14. Write a JavaScript function to convert an amount to coins. \n");
console.log("Input: ", 46);
console.log("Output: ", getChange(46), "\n");

/*

 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
*/
function bn(n, b) { // b^n
    return Math.pow(b, n);
}
console.log("15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. \n");
console.log("Input: n =", 5, "n =",2);
console.log("Output: ", bn(5, 2), "\n"); // 2^5 = 32
/*

 16. Write a JavaScript function to extract unique characters from a string. 
*/
function uniqueCharacters(str) {
    let uniqueChar = "";
    for (let i = 0; i < str.length; i++) {
        if (!uniqueChar.includes(str[i])) {
            uniqueChar += str[i];
        }
    }
    return uniqueChar;
}
console.log("16. Write a JavaScript function to extract unique characters from a string.\n");
console.log("Input: ", "aabaaabbbaccbcdadeae");
console.log("Output: ", uniqueCharacters("aabaaabbbaccbcdadeae"), "\n"); // abcde
/*

 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
*/
function letterCount(str) {
    let letters = {}
    for (let i = 0; i < str.length; i++) {
        if (str[i] in letters) {
            letters[str[i]] += 1;
        }
        else{
            if (str[i] !== " "){
            letters[str[i]] = 1;
            }
        }
    }
    return letters;
}
console.log("17. Write a JavaScript function to get the number of occurrences of each letter in specified string. \n");
console.log("Input: ", "The quick brown fox jumps over the lazy dog");
console.log("Output: ", letterCount("The quick brown fox jumps over the lazy dog"), "\n");

/*

 18: Write a function for searching JavaScript arrays with a binary search. 
*/
function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length;
    let middle;
    while (start < end) {
        middle = Math.floor((start + end) / 2);
        if (arr[middle] === key) {
            return true;
        }
        else if (key >= middle) {
            start = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }
    return false;
}
console.log("18: Write a function for searching JavaScript arrays with a binary search.\n");
let test_18 = [12, 64, 11, 13, 20, 14].sort();
console.log("Input: ", test_18, "Key:",14);
console.log("Output: ", binarySearch(test_18, 14), "\n");
console.log("Input: ", test_18, "Key:", 1);
console.log("Output: ", binarySearch(test_18, 1), "\n");
/*

 19. Write a JavaScript function that returns array elements larger than a number. 
*/
function largerThanNum(arr, num) {
    let larger = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            larger.push(arr[i]);
        }
    }
    return larger;
}
console.log("19. Write a JavaScript function that returns array elements larger than a number. \n");
console.log("Input: ", [3, 4, 2, 1, 5, 6], "number: ", 2);
console.log("Output: ", largerThanNum([3, 4, 2, 1, 5, 6], 2), "\n");
/*

 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
*/
function textGenerator(str, len) {
    generated = "";
    for (let i = 0; i < len; i++) {
        generated += str[Math.floor(Math.random() * (str.length))];
    }
    return generated;
}
console.log("20. Write a JavaScript function that generates a string id (specified length) of random characters. \n");
console.log("Input:", "abcde", "Length:", 20);
console.log("Output: ", textGenerator("abcde", 20), "\n");
/*

21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
*/
function subsetsFixedlength(arr, len){
    let combinations = getAllSubsets(arr);
    let solution = [];
    for (let i = 0; i < combinations.length; i++){
        if(combinations[i].length === len){
            solution.push(combinations[i]);
        }
    }
    return solution;
}
console.log("21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.\n");
console.log("Input: ",[1,2,3], "Length:", 2);
console.log("Output: ", subsetsFixedlength([1,2,3], 2), "\n");
/*

 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
*/
function numberOfOccurences(str, c) {
    count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === c) {
            count++;
        }
    }
    return count;
}

console.log("22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. \n");
console.log("Input:", "aaabbaacceeddeaa", "Char:", "a" );
console.log("Output: ", numberOfOccurences("aaabbaacceeddeaa", 'a'), "\n"); // 7
/*

23. Write a JavaScript function to find the first not repeated character. 

*/

function firstNonRepeatedChar(str){
    return getKeyByValue(letterCount(str), 1);
}
console.log("23. Write a JavaScript function to find the first not repeated character.\n");
console.log("Input: ", "abanevb");
console.log("Output: ", firstNonRepeatedChar("abanevb"), "\n");

/*

24. Write a JavaScript function to apply Bubble Sort algorithm. 
 */
function bubbleSort(arr){
    let swapped, temp;
    for (let i = 0; i < arr.length; i++){
        swapped = false;
        for (let j = arr.length-1; j > 0; j--){
            if (arr[j] > arr[j-1]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
    return arr;
}
console.log("24. Write a JavaScript function to apply Bubble Sort algorithm.\n");
console.log("Input: ", [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);
console.log("Output: ", bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]), "\n");
// [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

/*

25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
*/

function longestCountry(arr){
    return longestWord(arr.join(" "));
}
console.log("25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. \n");
console.log("Input: ", ["USA", "Russia" ,"China"]);
console.log("Output: ", longestCountry(["USA", "Russia" ,"China"]), "\n");
/*

 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
*/

function longestSubstring(str){
    noRepeatSubstrings = [];
    let substring;
    for (let i = 0; i < str.length; i++){
        substring = str[i];
        for (let j = i+1; j < str.length; j++){
        if (substring.includes(str[j])){
            noRepeatSubstrings.push(substring);
            substring = str[j];
        }
        else{
            substring += str[j];
        }
    }
    noRepeatSubstrings.push(substring); // if at end of list so no wrapping string
    }
    return longestWord(noRepeatSubstrings.join(" "));
}
console.log("26. Write a JavaScript function to find longest substring in a given a string without repeating characters. \n");
console.log("Input: ", "google.com");
console.log("Output: ", longestSubstring("google.com"), "\n");
console.log("Input: ", "example.com");
console.log("Output: ", longestSubstring("example.com"), "\n");
/*

 27. Write a JavaScript function that returns the longest palindrome in a given string.  
*/
function longestPalidrone(str){
    let combinations = generateCombinations(str);
    let palidrones = [];
    for (let i = 0; i < combinations.length; i++){
        if (isPalidrone(combinations[i])){
            palidrones.push(combinations[i]);
        }
    }
    return longestWord(palidrones.join(" "));
}
console.log("27. Write a JavaScript function that returns the longest palindrome in a given string.\n");
console.log("Input: ", "abracadabra");
console.log("Output: ", longestPalidrone("abracadabra", "\n"));
console.log("Input: ", "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE");
console.log("Output: ", longestPalidrone("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"), "\n");
/*

 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
*/
function functionParameter(){
    console.log("Output: ", "Function Passed", "\n");
}
function functionPass(func){
    func();
}
console.log("28. Write a JavaScript program to pass a 'JavaScript function' as parameter. \n");
console.log("Input: ", "functionParameter()");
functionPass(functionParameter);


/*
 29. Write a JavaScript function to get the function name. 
*/

function getFunctionName(){
    return arguments.callee.name;
}
console.log("29. Write a JavaScript function to get the function name.\n");
console.log("Function Called:", "getFunctionName()" );
console.log("Output: ", getFunctionName(), "\n");

// Reducer
      
Array.prototype.reducer = function(arr) {
    let count = 0;
    for(let i = 0; i< this.length; i++){
        count += this[i];
    }
    return count;
}
