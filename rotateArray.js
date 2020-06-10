function rotLeft(a, d) {
  let newArray = [];
  for (let i = 0; i < d; i++) {
    let firstElement;
    firstElement = a.shift();
    newArray.push(firstElement);
    console.log("First Element:", firstElement);
    console.log("New Array", newArray);
  }
  return a.concat(newArray);
}

console.log("RESULTS:", rotLeft([1, 2, 3, 4, 5], 4));
