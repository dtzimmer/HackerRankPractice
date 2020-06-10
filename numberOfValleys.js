function countingValleys(n, s) {
  console.log("list of steps", s);
  let elevation = 0;
  let numberOfValleys = 0;
  for (let i = 0; i < n; i++) {
    console.log("Type of Step:", s[i]);
    if (s[i] === "U") {
      elevation++;
    } else elevation--;
    console.log("elevation", elevation);
    if (s[i] === "U" && elevation == 0) {
      numberOfValleys++;
    }
  }
  return numberOfValleys;
}
