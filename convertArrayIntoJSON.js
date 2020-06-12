let employeeData = [
  ["John", "52", "Engineer"],
  ["Sally", "25", "HR Representative"],
];

function createEmployeeJSON(data) {
  let employeeJSON = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      employeeJSON.push(
        `name, ${data[i][j]}, age, ${data[i][j + 1]}, position, ${
          data[i][j + 2]
        } `
      );
    }
  }
  console.log("employeeJSON", employeeJSON);
}

testing = (array) => {
  let jsonString = JSON.stringify({ ...array });
  console.log(jsonString);
};

// createEmployeeJSON(employeeData);
testing(employeeData);

let arr = [
  "Apple",
  "Guava",
  "Banana",
  "Apricot",
  "Blueberry",
  "Gooseberry",
  "Bing Cherry",
  "Custard Apple",
];

jsonArrData = JSON.stringify(arr);
jsonConvertStringtoObject = JSON.parse(jsonArrData);

// console.log(jsonArrData);
// console.log(jsonConvertStringtoObject);
// console.log(arr);

// console.log(typeof jsonArrData === "string");
// console.log(typeof arr);
