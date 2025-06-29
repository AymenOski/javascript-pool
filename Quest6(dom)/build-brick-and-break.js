export const build = (numOfBricks) => {
    const div = document.createElement("div");
        for(let i = 0 ; i < numOfBricks ;i++){
            const interval = setInterval(()=>{
                console.log("asd");
                
                if(i== numOfBricks){
                    clearInterval(interval);
                }
            },1000)           
        }

}