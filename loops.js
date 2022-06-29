// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"


for ( var m = 1; m <= 100; m++ )
{
  if ( m%3 === 0 && m%5 === 0 )
  {
    console.log(" FizzBuzz" );
  }
  else if ( m%3 === 0 ) 
  {
    console.log(" Fizz" );
  }
  else if ( m%5 === 0 ) 
  {
    console.log(" Buzz" );
  }
  else
  {
    console.log(m);
  }
}
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000
var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);
// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration,
//  it will check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even
for (var y=0; y<=20; y++) {
        if (y % 2 === 0) {
                console.log(y," is even");   
        }
        else {
                console.log(y," is odd");
        }
}
// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
function letNum(array){
  largest = 0;
  for (i of array){
      if(i>largest){
          largest = i
      }
  }
  return largest
}
console.log(letNum([-2, 4,-5, 6,0]))

// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40

a = 10
b = 40
if(a<b && a>b){
    console.log(a);
}
else
{
    console.log(b);
}

// Write a JavaScript program to find leap years from 2000 to 2022
function LeapYear() {
    for(year=2000;year<=2022;year++){
if ((year %4==0) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}
}
}
LeapYear();