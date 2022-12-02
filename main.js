
status = ''
function setup ()
{
canvas = createCanvas(600,450);
canvas.center();
video = createCapture(VIDEO);
video.size(600,450);
video.hide();
}

function draw()
{
    image(video,0,0,600,450);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Detecting objects';
}

function modelLoaded()
{
    console.log('Model is loaded');
    status = true;
}
