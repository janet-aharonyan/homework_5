// Array ex_3

const frameworks = [
    { id: 1, title: "react" },
    { id: 2, title: "angular" },
    { id: 3, title: "vue" },
  ];
  const findId = (arr, index) => {
    for (let i of arr) {
      if (i.id === index) {
        return i;
      }
    }
    return "No data";
  };
   console.log(findId1(frameworks, 3));