
var image = new Image();
var currentPos = 0;
var images = ["img/flame1.png", 
"img/flame2.png", 
"img/flame3.png", 
"img/flame4.png", 
"img/flame5.png", 
"img/flame6.png", 
"img/flame7.png", 
"img/flame8.png", 
"img/flame9.png", 
"img/flame10.png"]

function nextFrame() {

    if (++currentPos >= images.length) {
        currentPos = 0;
    }
        
    image.src = images[currentPos];
    
    var canvas = document.getElementById('logo');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.src = 'img/logo.png'
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image,0,0);
    ctx.drawImage(img,0,0);
}

nextFrame();
setInterval(nextFrame, 500);

