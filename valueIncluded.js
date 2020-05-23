// Object ex_3

const valueIncluded = (obj, valueObject) => {
    let value = Object.values(obj);

    for (let i of value) {
      if (valueObject === i) {
       
        return true;
      }
    }

    return false;
  };
   console.log(valueIncluded(user, "Jobs"));