
var image1 = document.getElementById("led1")
var image2 = document.getElementById("led2")
var currentPos = 0;
var images = ["img/ledoff.png", 
"img/ledon.png"]

function nextFrame() {

    if (++currentPos >= images.length) {
        currentPos = 0;
    }
        
    image1.src = images[currentPos];
    image2.src = images[currentPos];
    

}

nextFrame();
setInterval(nextFrame, 500);

