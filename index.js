const counterDisplay = document.querySelector('h3');
let counter = 0;

// generate bubble
const bubbleMarker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;
    // bubble bot to top
    bubble.style.top = Math.random() * 50 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";
    // select animation
    let horizontalMove = Math.floor(Math.random() * 99) + 1;
    horizontalMove *= (Math.round(Math.random()) ? 1 : -1);
    // const horizontalMove = () => {
    //     if (Math.round(Math.random()) === 1) {
    //         return horizontalMove *= 1;
    //     } else {
    //         return horizontalMove *= -1;
    //     }
    // }
    bubble.style.setProperty('--left', horizontalMove + "%");

    bubble.addEventListener("click", () => {
        counter++;
        counterDisplay.textContent = counter;
        bubble.remove();
    });
    setTimeout(() => {
        bubble.remove()
    }, 8000);
};
setInterval(bubbleMarker, 300);


