function cubeNumber(number) {
  let cube = 0;
  if (typeof number == "number") {
    cube = number * number * number;
  } else if (typeof number !== "number") {
    return "please enter a number";
  }
  return cube;
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "please enter a valid input";
  } else if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

function sortMaker(arr) {
  let myArr = [];
  if (
    !Array.isArray(arr) ||
    arr.length > 2 ||
    typeof arr[0] !== "number" ||
    typeof arr[1] !== "number"
  ) {
    return "Input a valid Array";
  } else if (arr[0] < 0 || arr[1] < 0) {
    return "Enter a positive number";
  } else {
    if (arr[0] == arr[1]) {
      return "equal";
    } else if (arr[0] > arr[1]) {
      myArr.push(arr[0], arr[1]);
    } else {
      myArr.push(arr[1], arr[0]);
    }
  }
  return myArr;
}

function findAddress(myObj) {
  if (typeof myObj !== "object") {
    return "Invalid object";
  } else {
    const firstKeyValue = myObj.street || "__";
    const secondKeyValue = myObj.house || "__";
    const thirdKeyValue = myObj.society || "__";
    return firstKeyValue + "," + secondKeyValue + "," + thirdKeyValue;
  }
}


function canPay(array, totalDue) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (sum >= totalDue) {
    return true;
  } else if (typeof totalDue !== "number") {
    return "please provide a valid number";
  } else if (array.length == 0) {
    return "please input a valid Array";
  } else {
    return false;
  }
}

