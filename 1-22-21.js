/* In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

- first remove all letter 'a', followed by letter 'b', then 'c', etc...
- remove the leftmost character first. */

function solve(s, k){
    const abc = "abcdefghijklmnopqrstuvwxyz";
    
    for (let i=0; i<abc.length; i+=1) {
      while(s.includes(abc[i]) && k > 0) {
        s = s.replace(abc[i], "");
        k -= 1;
      }
    }
    
    return s
  }



/* You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None). */

function mxdiflg(a1, a2) {
    let newA = 0;
    let newB = 0;
    let newArrA = [];
    let newArrB = [];
  
    for(let i = 0; i < a1.length; i++) {
      let newA1 = a1[i].split('').length;
      newArrA.push(newA1);
      
    }
    for(let i = 0; i < a2.length; i++) {
      let newB1 = a2[i].split('').length;
      newArrB.push(newB1);
    }
  
    if(newArrA.length === 0) {
        newA = 1;
    }
    if(newArrB.length === 0) {
        newB = 1;
    }
  
  
  return  newA - newB;
    
}
