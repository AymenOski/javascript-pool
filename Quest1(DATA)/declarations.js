const escapeStr = "`/\"\\'";
const arr = [4,'2'];
const obj = {
    str : "Hello, World!",
    num : 2025,
    bool : true,
    undef : undefined,
};

const nested = {
        arr : [4 , undefined ,'2'],
        obj : {
            str : "Word ,Hello!",
            num : 5202,
            bool : false,
        }
}

    deepFreeze(nested);

function deepFreeze(object) {

  const propNames = Reflect.ownKeys(object);

  for (const name of propNames) {
    const value = object[name];

    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}
