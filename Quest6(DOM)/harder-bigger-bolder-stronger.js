export const generateLetters = () => {
    let step = 11;
    for (let i = 0; i < 120; i++) {

        const div = document.createElement("div");
        const letter = randomLetter();
        div.textContent = letter;

        div.style.fontSize = `${step}px`;
        step = step + 1;

        if (i < 40) {
            div.style.fontWeight = "300"
        } else if (i >= 40 && i <= 79) {
            div.style.fontWeight = "400"
        } else if (i >= 80 && i < 120) {
            div.style.fontWeight = "600"
        }

        document.body.append(div);

    }
}

function randomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const index = Math.floor(Math.random() * letters.length);
    return letters[index];
}