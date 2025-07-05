const defaultCurry = (obj1) => {
    const a = Object.entries(obj1);
    return function (obj2) {
        const b = Object.entries(obj2);
        const resultObj = {};

        const onlyInObj1 = Object.keys(obj1).filter(key => !obj2.hasOwnProperty(key));
        const onlyInObj2 = Object.keys(obj2).filter(key => !obj1.hasOwnProperty(key));
        const trulyUniqueKeys = [...onlyInObj1, ...onlyInObj2];

        a.forEach(([key1, val1]) => {
            b.forEach(([key2, val2]) => {
                if (key1 === key2) {
                    resultObj[key1] = val2;
                }
            })
        })
        trulyUniqueKeys.forEach((uniqueKeys) => {
            resultObj[uniqueKeys] = obj1.hasOwnProperty(uniqueKeys) ? obj1[uniqueKeys] : obj2[uniqueKeys];
        })
        return resultObj;
    }
}

const mapCurry = (func) => {
  return function (obj) {
    let newObj = {};
    for (let [key, val] of Object.entries(obj)) {
      let [k, v] = func([key, val]);
      newObj[k] = v;
    }
    return newObj;
  };
};



const reduceCurry = (fn) => {
    return function(obj ,InitialValue = 0) {
        let acc = InitialValue;
            for (let [key, val] of Object.entries(obj)) {
                acc = fn(acc , [key , val]);
            }
            return acc;
    }
}

const filterCurry = (fn) => {
    let resultObj = {};
    return function(obj){
        for(const [k , v] of Object.entries(obj)){
            if(fn([k,v])){
                resultObj[k] = v;
            }
        }   
        return resultObj;
    }
}

const reduceScore = (person, init = 0) => {
  return reduceCurry((acc, cur) =>person[cur[0]].isForceUser? acc  + person[cur[0]].pilotingScore + person[cur[0]].shootingScore :acc)(person,init);
};


const filterForce=(person)=>{
  return filterCurry((val)=>val[1].isForceUser&&val[1].shootingScore>=80)(person)
}


const mapAverage=(person)=>{
  return mapCurry((val)=>{
    let avg=(val[1].pilotingScore+val[1].shootingScore)/2
    val[1]= {"averageScore":avg,...val[1]}
    return val
  })(person)
}