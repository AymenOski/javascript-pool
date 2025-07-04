function filterEntries(obj, callback) {  
  return Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => callback([k, v]))
  );
}

function mapEntries(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => callback([k, v]))
  );
}

function reduceEntries(obj, callback, initial = 0) {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    return callback(acc, [k, v]);
  }, initial);
}


const totalCalories = (obj) => {
  return Number((reduceEntries(obj , (acc,[k ,v])=> acc + (v*nutritionDB[k].calories) / 100 , 0)).toFixed(1))
}

const lowCarbs = (obj) => {
  return filterEntries(obj , ([k,v])=> {
    return ((v*nutritionDB[k].carbs) / 100) < 50;
  });
}

const cartTotal = (obj) => {
  const all = {};

  for (const [k, v] of Object.entries(obj)) {
    const result = mapEntries(nutritionDB[k], ([a, b]) => {
      return [a, Number(((v * b) / 100).toFixed(3))];
    });
    all[k] = result
  }
  return all;
};
