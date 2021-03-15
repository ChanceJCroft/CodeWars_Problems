/* Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above. */

function partsSums(ls) {
    //create new array to push sums into
    let newArr = [];
    //for loop to sum the array and push the value
    for(var i = 0; i < ls.length; i++){
      let newVal = ls.reduce((a,b) => a+b);
      newArr.push(newVal);
      ls.shift();
      if(ls.length > 0) {
        i = 0;
      }
      
    }
    if(newArr === []){
      newArr.push(0);
    }
    //return the summed array
  return newArr;
}