/*In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!

If you like this Kata, please try:*/





function repeats(arr){
    let finalAnswer = 0;
    for(let i = 0; i < arr.length; i++){
      for(let x = 0; x < arr.length; x++){
        if(i != x){
          if(arr[i] === arr[x]){
          arr.splice(i, 1);
             if(x < i){
               arr.splice(x, 1)             
             } else if(x > i) {
               arr.splice(x-1, 1)
             }
        };
      };
    };};
    for(let i = 0; i < arr.length; i++){
      finalAnswer += arr[i];
    };
    return finalAnswer;
  };



  function repeats(arr){
    let newArr = arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v));
    return newArr.reduce((a, b) => a + b, 0);
  };