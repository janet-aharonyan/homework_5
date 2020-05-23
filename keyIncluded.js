// Object ex_2

const user = { user: "Steve", name: "Jobs" };
const keyIncluded = (obj, keyObject) => {
  let key = Object.keys(obj);
  
  for (let i of key) {
    if (keyObject === i) {
      return true;
    }
  }

  return false;
};
 console.log(keyIncluded(user, 'name'));