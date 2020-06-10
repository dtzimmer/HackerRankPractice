// Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

// Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

// For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Input Format

// The first line contains a single string, .
// The second line contains an integer, .

// Constraints

// For  of the test cases, .
// Output Format

// Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating  infinitely many times.

// Sample Input 0

// aba
// 10
// Sample Output 0

// 7
// Explanation 0
// The first  letters of the infinite string are abaabaabaa. Because there are  a's, we print  on a new line.

// Sample Input 1

// a
// 1000000000000
// Sample Output 1

// 1000000000000
// Explanation 1
// Because all of the first  letters of the infinite string are a, we print  on a new line.

function repeatedString(s, n) {
  // number of times string can be repeated within limit n
  const numOfRepeats = Math.floor(n / s.length);
  console.log("Number of Repeats", numOfRepeats);
  // additional number of strings to get to the limit n
  const remainderString = n % s.length;
  console.log("Remainder String", remainderString);
  //initialize the count
  let howManyAs = 0;
  // find number of matches in a string
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      console.log(s[i]);
      howManyAs++;
      console.log("This is how many As", howManyAs);
    }
  }

  // multiply number of matches in a string with number of repeatations
  howManyAs = howManyAs * numOfRepeats;

  // find number of matches in remainder string
  const remainderMatches = (s.substring(0, remainderString).match(/a/g) || [])
    .length;

  // add it up
  return howManyAs + remainderMatches;
}
