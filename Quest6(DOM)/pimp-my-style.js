import { styles } from './pimp-my-style.data.js';

let index = 0;
let reachedEnd = false;

export const pimp = () => {
        console.log(index);
        
    const button = document.querySelector("button")  
    if(index < styles.length && !reachedEnd) {
        button.classList.add(styles[index]);
        if (index === styles.length-1) {            
            reachedEnd = true;
            button.classList.add('unpimp');
            return
        }
        index++;
        return;
    }

    if (reachedEnd) {
        button.classList.remove(styles[index]);
        if (index === 0){
            reachedEnd = false;
            button.classList.remove('unpimp');
            return;
        }
        index--
    }

}
