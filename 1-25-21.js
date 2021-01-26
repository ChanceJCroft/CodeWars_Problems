/* The function must return the truncated version of the given string up to the given limit followed 
or concatenated by "..." if the result is shorter than the original. Return the same string if nothing was truncated.

Example:

solution('Testing String', 3) --> 'Tes...'
solution('Testing String', 8) --> 'Testing ...'
solution('Test', 8)           --> 'Test' */

function solution(string,limit){
    const strArr = string.split('');
    let newArr = [];
  
    for(let i = 0; i < limit; i++) {
        newArr.push(strArr[i]);
    };
  
    const finalStr = newArr.join('');
  
    if(finalStr.length >= limit - 1) {
      return finalStr;
    } else {
      return finalStr + "...";
    }
}



/*The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

If you like substring Katas, please try:

Non-even substrings

Vowel-consonant lexicon */

function solve(s){
    const newS = s.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let testCounter = 0;
    let finalCounter = 0;
    
    for(let i = 0; i < newS.length; i++){
        if(vowels.includes(newS[i])) {
           testCounter++
        }
        else{
            if(testCounter > finalCounter) {
              finalCounter = testCounter;
            }
            testCounter = 0;
        }
    }
    return finalCounter;
  }