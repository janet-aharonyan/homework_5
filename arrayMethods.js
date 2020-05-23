// Array ex_4

// a. includes()

const array = [12, 23, 34, 45, 56, 67, 78, 89, 90];
const manual_Includes = (arr, index) => {
  
    for (let i of arr) {
    return i === index ? true : false;
  }
};

 console.log(manual_Includes(array, 12));



// b. join()

const manual_Join = (arr, index) => {
  let result = "";

  for (let i of arr) {
    result += `${i}${index}`;
  }
  return result;
};

 console.log(manual_Join(array, ","));


// c. slice()

const manual_Slice = (arr, start, end) => {
  let result = [];

  if (start === 0 && end == undefined) {

    for (let i = start; i < arr.length; i++) {
      result.push(arr[i]);
    }
  } else {

    if (start !== undefined && end == undefined) {

      for (let i = start; i < arr.length; i++) {
        result.push(arr[i]);
      }
    }
    if (start !== undefined && end !== undefined) {

      for (let i = start; i < end; i++) {
        result.push(arr[i]);
      }
    }
  }
  return result;
};

console.log(manual_Slice(array, 2, 5 ));

// d. fill() - I don't know
 



// e. findIndex()

const manual_FindIndex = (arr, index) => {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === index) {
      return i;
    }
  }
  return -1;
};

console.log(manual_FindIndex(array, 12));