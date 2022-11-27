objects= []
status = ''
function setup ()
{
canvas = createCanvas(400,500);
canvas.center();
video = createCapture(VIDEO);

video.hide()
}

function draw()
{
    image(video,0,0,400,500);
    
}

function start()
{
    objectDetector = objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Detecting objects';
}

function modelLoaded()
{
    console.log('Model is loaded');
    status = true;
}
