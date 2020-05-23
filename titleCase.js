// String ex_2

function titleCase(str, small) {
    str = str.toLowerCase();
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      if (i === small) {
        result += str[i].toUpperCase();
      } else {
        result += str[i];
      }
    }
    return result;
  }
  console.log(titleCase("daenerys", 1));