//Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

// For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes  jumps while the second takes .

// Function Description

// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

// jumpingOnClouds has the following parameter(s):

// c: an array of binary integers
// Input Format

// The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .

// Output Format

// Print the minimum number of jumps needed to win the game.

// Sample Input 0

// 7
// 0 0 1 0 0 1 0
// Sample Output 0

// 4

//MY SOLUTION

function jumpingOnClouds(c) {
  let jumps = 0;
  for (let i = 0; i < c.length; i++) {
    console.log("cloud type", c[i]);
    if (c[i] == 0 && c[i + 2] == 1) {
      jumps++;
      console.log("Jump Count", jumps);
      console.log("Only Jumped to next cloud");
    } else if (c[i] == 0 && c[i + 2] == 0) {
      jumps++;
      i++;
      console.log("Jump Count", jumps);
      console.log("Jumped a cloud because there was room");
    } else if (c[i] == 0 && c[i + 1] == 0 && i + 1 == c.length - 1) {
      jumps++;
      i++;
      console.log("Jump Count", jumps);
      console.log("Jumped only one cloud because I am at the end");
    } else {
      // jumps++
      console.log("Jump Count", jumps);
      console.log("this is the END");
    }
  }
  console.log("c", c);
  return jumps;
}
