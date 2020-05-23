// String Ex_1

  const twoDigitCombination = (start, end, before) => {
    let result = "";

    for (let i = start; i <= end; i++) {
      i < before ? (result += " " + 0 + i) : (result += " " + i);
    }
    
    return result;
  };
  console.log(twoDigitCombination(0, 99, 10));
  