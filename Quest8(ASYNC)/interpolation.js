const interpolation = (obj) => {
        let distance = obj["end"] - obj["start"]
        let pointsGap = distance / obj["step"]
        let k = obj["waitTime"] !== undefined ? obj["waitTime"] :obj["duration"] / obj["step"] ;
    let i = 0;
    let x = obj["start"];
    let id = setInterval(() => {
        obj["callback"]([x, (i + 1) * k]);
        
        i++
        x += pointsGap;
        if (i  === obj["step"]){
            clearInterval(id);
            return
        }
        }, k)
}
