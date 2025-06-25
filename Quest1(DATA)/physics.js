const getAcceleration = (obj) => {
    if (obj.f !== undefined && obj.m !== undefined && obj.m !== 0) {
        return obj.f / obj.m;
    } else if (obj.d !== undefined && obj.t !== undefined && obj.t !== 0) {
        return 2 * obj.d / (obj.t * obj.t) ;
    } else if (obj.Δv !== undefined && obj.Δt !== undefined && obj.Δt !== 0) {
        return obj.Δv / obj.Δt;
    }else {
        return "impossible"
    }
}

const obj = {
    d : 10,
    t : 2,
    Δv : 100,
}

const acceleration = getAcceleration(obj);
console.log(acceleration); // 5