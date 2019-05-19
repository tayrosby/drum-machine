window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#87cefa",
        "#f08080",
        "#20b2aa",
        "#fafad2",
        "#ffb6c1",
        "#9a89fa"
    ];

    //sound stuff
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //bubble stuff
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        });
    }
});