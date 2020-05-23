// Array ex_1

function filterRange(arr, a, b) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= a && arr[i] <= b) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
   console.log(filterRange([1, 10, 20, 30], 9, 23));