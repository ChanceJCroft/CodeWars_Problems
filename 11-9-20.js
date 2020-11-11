function solve(s){
  let uppers = 0;
  let lowers = 0;
  let nums = 0;
  let specials = 0;
  function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char)
}
  
  for(let i = 0; i < s.length; i++){
    if( !isNaN(s[i]) ){
      nums++
    }
    else if(s[i] === s[i].toLowerCase() && isCharacterALetter(s[i])){
      lowers++
    }
    else if(s[i] === s[i].toUpperCase() && isCharacterALetter(s[i])){
      uppers++
    }
    else{
      specials++
    }
  }
  let finalArray = [uppers, lowers, nums, specials];
  return finalArray;
}