/* You're looking through different hex codes, and having trouble telling the difference between #000001 and #100000

We need a way to tell which is red, and which is blue!

That's where you create hex_color()!

It should read an RGB input, and return whichever value (red, blue, or green) is of greatest concentration!

But, if multiple colors are of equal concentration, you should return their mix!

red + blue = magenta

green + red = yellow

blue + green = cyan

red + blue + green = white
One last thing, if the string given is empty, or has all 0's, return black! */

//Wasn't incredibly difficult, just a bit long to map out all the options in a way that makes sense


function hexColor(codes){
    let newArray = codes.split(' ');
    const num0 = parseInt(newArray[0]);
    const num1 = parseInt(newArray[1]);
    const num2 = parseInt(newArray[2]);
    if(num0 > num1 && num0 > num2){
      return 'red'
    }
    if(num0 === num1 && num0 > num2){
      return 'yellow'
    }
    if(num0 === num2 && num0 > num1){
      return 'magenta'
    }
    if(num0 === num1 && num0 === num2 && num0 > 0){
      return 'white'
    }
    if(num1 > num0 && num1 > num2){
      return 'green'
    }
    if(num2 > num0 && num2 > num1){
      return 'blue'
    }
    if(num2 === num1 && num2 > num0){
      return 'cyan'
    }
    else {
      return 'black'
    }
  }