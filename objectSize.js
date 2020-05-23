// Object ex_1

const object = {};
const objectSize = (obj) => {
  let size = [];

  for (let i in obj) {
    size.push(i);
  }
  
  return size.length === 0 ? "Empty" : size.length;
};
 console.log(objectSize(object));