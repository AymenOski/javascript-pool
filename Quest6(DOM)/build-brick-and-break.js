export const build = (numOfBricks) => {
    const div = document.createElement("div")
    div.setAttribute("id", `brick-1`);
    document.body.append(div);

    let count = 2;
    let middleBricks = 0;
    const interval = setInterval(() => {
        if (count > numOfBricks) {
            clearInterval(interval);
            return;
        }
        const brick = document.createElement("div");
        if (count === 2 || middleBricks + 3 === count) {
            middleBricks = count;            
            brick.dataset.foundation = "true"
        }
        if (count % 3 === 0) {
            const br = document.createElement("br")
            document.body.append(br);
        }
        brick.setAttribute("id", `brick-${count}`);
        document.body.append(brick);
        count++;
    }, 100)
};

export function repair(...ids) {
    console.log(ids);
    
  ids.map(id => {
    let brick = document.getElementById(id);
    if (!brick) return; 

    if (brick.dataset.foundation === "true") {
    //   brick.setAttribute("repaired", "in progress");
      brick.dataset.repaired = "in progress"
    } else {
    //   brick.setAttribute("repaired", "true");
      brick.dataset.repaired = "true"
    }
  });
}

export const destroy = () => {
  const bricks = [...document.querySelectorAll('[id^="brick-"]')];
  const lastBrick = bricks[bricks.length - 1];

  if (lastBrick) {
    lastBrick.remove();
  }
};
