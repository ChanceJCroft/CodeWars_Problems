//**PROBLEM 1**//

/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered! */

function getSum( a,b )
{
   if(a === b) {
     return a;
   }
  
  
  let highNum = 0;
  let lowNum = 0;
  
  if(a < b) {
    highNum = b;
    lowNum = a
  } else if(b < a) {
    highNum = a;
    lowNum = b;
  }
  
  let finalAnswer = 0;
  
  for(let i = lowNum; i <= highNum; i++) {
    finalAnswer += i;
  }
  
  return finalAnswer
}

//**PROBLEM 2**//

/* Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

keep order of values like in input array
if type is not presented in input, no corresponding property are expected*/
function separateTypes(input) {
    let finalAnswer = { 
        number: [],
        string: [],
        boolean: [],
    };
    
    for(let i = 0; i < input.length; i++){
      if(typeof input[i] == "number"){
        finalAnswer.number.push(input[i]);
      }
      else if(typeof input[i] == "string"){
        finalAnswer.string.push(input[i]);
      }
      else if(typeof input[i] == "boolean"){
        finalAnswer.boolean.push(input[i]);
      }
    }
    
    return finalAnswer;
  }

