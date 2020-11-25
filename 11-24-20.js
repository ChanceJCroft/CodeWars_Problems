/*For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array
and the product of the n smallest numbers of the array, and compare the two.

If the sum of the n largest numbers is higher, return "sum"
If the product of the n smallest numbers is higher, return "product"
If the 2 values are equal, return "same"

Note The array will never be empty and n will always be smaller than the length of the array. 
*/


//not my prettiest work. For some reason I was having trouble getting
//arr.reduce() to work, so I tried the old fashioned way. Very messy, but you live and learn.
function sumOrProduct(array, n) {
      let product = [];
      let sum = [];
      let min = array[0];
      let max = array[0];
    for(let i = 0; i < n; i++){
      for(let i = 0; i < array.length; i++){
        if(array[i] > max) {
          max = array[i]
        }
        else if(array[i] < min){
          min = array[i]
        }
      }
      product.push(min);
      sum.push(max);
    }
  let finalProduct = 1;
  for (let i = 0; i < n; i++) {
    finalProduct = finalProduct * product[i];
}
  let finalSum = 0;
  for (let i = 0; i < n; i++) {
    finalSum = finalSum + sum[i];
}
  if(finalProduct > finalSum){
    return "product"
  }
  else if(finalSum === finalProduct){
    return "same"
  }
  else if(finalSum > finalProduct){
    return "sum"
  }
}