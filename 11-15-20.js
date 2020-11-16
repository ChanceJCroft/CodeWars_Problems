//Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}



/* I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */

function arrayPlusArray(arr1, arr2) {
    let arr1Total = 0;
    let arr2Total = 0;
    
    for(let i = 0; i < arr1.length; i++){
      arr1Total = arr1Total + arr1[i];
    };
    
    for(let i = 0; i < arr2.length; i++){
      arr2Total = arr2Total + arr2[i];
    };
    
    return arr1Total + arr2Total
  }