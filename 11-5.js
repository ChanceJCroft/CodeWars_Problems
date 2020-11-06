//removing "O" from any string
function removeO(string){
    return string.replace(/o/g,'');
  }



/*Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"*/
  
function evenOrOdd(str) {
    const newArray = str.split('');
    var oddNums = 0;
    var evenNums = 0;
    
    for(let i = 0;i < newArray.length;i++){
      if(parseInt(newArray[i]) % 2 == 0){
        evenNums += parseInt(newArray[i]);
      }
      else{
        oddNums += parseInt(newArray[i]);
      }
    };
    
    if(oddNums > evenNums){
      return "Odd is greater than Even"
    }
    if(evenNums > oddNums){
      return "Even is greater than Odd"
    }
    if(evenNums === oddNums){
      return "Even and Odd are the same"
    }
  }