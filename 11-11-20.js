/* Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

*/

function rowWeights(array){
    let teamOne = 0;
    let teamTwo = 0;
    for(let i = 0; i < array.length; i++){
      if(i % 2 == 0){
        teamOne += array[i]
      }
      else {
        teamTwo += array[i]
      }
    }
    return [teamOne, teamTwo];
  }


  /* Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. */
  
  function adjacentElementsProduct(array) {;
    let maxProduct = array[0] * array[1];                                      
    for(let i = 0; i < array.length - 1; i++){
      if(array[i] * array[i+1] > maxProduct){
        maxProduct = array[i] * array[i+1]
      }
    }
  return maxProduct;
  }