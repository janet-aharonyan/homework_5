// Array ex_2

const myArr = ["Godfather", "Game of Thrones", "Social Network"];
const removeByLetter = (arr, item) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
      
      if (
        arr[i][j].toUpperCase() === item ||
        arr[i][j].toLowerCase() === item
      ) {
        break;
      } else {
        result.push(arr[i]);
        break;
      }
    }
  }
  return result;
};
 console.log(removeByLetter(myArr, "g"));