/*Leap Year Challenge Exercise
💪This is a Difficult Challenge 💪

Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video goes into more detail.

This is how to work out whether if a particular year is a leap year:

A year is a leap year if it is evenly divisible by 4 ;

except if that year is also evenly divisible by 100;

unless that year is also evenly divisible by 400.



e.g. Is the year 2000 a leap year?:

2000 ÷ 4 = 500 (Leap)

2000 ÷ 100 = 20 (Not Leap)

2000 ÷ 400 = 5 (Leap!)



So the year 2000 is a leap year.

But the year 2100 is not a leap year because:

2100 ÷ 4 = 525 (Leap)

2100 ÷ 100 = 21 (Not Leap)

2100 ÷ 400 = 5.25 (Not Leap)



Warning your output should match the Example Output format exactly, even the positions of the commas and full stops.



Example Input 1

2400
Example Output 1

Leap year.


Example Input 2

1989


Example Output 2

Not leap year.


Hint

Remember that the modulo (%) operator gives you the remainder of a division.  */


// soln 
// function to check leap year
// function to check leap year
function isLeap(year) {
    // if the year is divisible by 4
    let message="";
    if (year % 4 === 0) {
      // if the year is divisible by 100
      if (year % 100 === 0) {
        // if the year is divisible by 400
        if (year % 400 === 0) {
          // the year is a leap year
          message ='Leap year.';
        }
        // else the year is not a leap year
        else {
          message = 'Not leap year.';
        }
      }
      // else the year is a leap year
      else {
         message ='Leap year.';
      }
    }
    // else the year is not a leap year
    else {
      message = 'Not leap year.';
    }
    return message;
  }

  isLeap(2400);