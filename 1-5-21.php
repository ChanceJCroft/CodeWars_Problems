<?php
/* Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer". */

//I would normally do this in a switch statement, but it was giving me issues during upload.
function get_drink_by_profession(string $s): string {
    $ss = strtolower($s);
    $answer = "Beer";
    if($ss == "jabroni") {
      $answer = "Patron Tequila";
    }
    if($ss == "school counselor") {
      $answer = "Anything with Alcohol";
    }
    if($ss == "programmer") {
      $answer = "Hipster Craft Beer";
    }
    if($ss == "bike gang member") {
      $answer = "Moonshine";
    }
    if($ss == "politician") {
      $answer = "Your tax dollars";
    }
    if($ss == "rapper") {
      $answer = "Cristal";
    }
    
    return $answer;
  }




  /* When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement. */

//Very simple switch statement, but a good practice of PHP basics.
function switch_it_up($number)
{
  switch($number) {
    case 0:
      return "Zero";
      break;
    case 1:
      return "One";
      break;
    case 2:
      return "Two";
      break;
    case 3:
      return "Three";
      break;
    case 4:
      return "Four";
      break;
    case 5:
      return "Five";
      break;
    case 6:
      return "Six";
      break;
    case 7:
      return "Seven";
      break;
    case 8:
      return "Eight";
      break;
    case 9:
      return "Nine";
      break;
    }
}

/* If you've completed this kata already and want a bigger challenge, here's the 3D version

Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
+---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
+---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+
Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

Examples:

flip('R', {3, 2, 1, 2}, 4, *result)     =>  {1, 2, 2, 3}
flip('L', {1, 4, 5, 3, 5}, 5, *result)  =>  {5, 5, 4, 3, 1}
//  do not allocate memory for the return value
//  assign ints to the provided pointer *result */


//This one took me much longer than expected because I was unaware of how sorting actually worked.
//It mutates the array, but then you still must return the array separately. I was trying to return them and sort them at the same time.
function flip(string $dir, array $arr): array {
    if($dir == 'R') {
      sort($arr);
    }
    else if($dir == 'L') {
      rsort($arr);
    }
    return $arr;
  }



?>