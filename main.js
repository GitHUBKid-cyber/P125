function setup() {
    video = createCapture(VIDEO)
    video.size(550,500);

    canvas = createCanvas(550, 375.5);
    canvas.position(560, 150);
}
function draw() {
    background('#969A97');
    textSize(difference);
    fill('#FFE787');
    text('Akshaj', 50, 400);
}

function modelLoaded() {
    console.log('Posenet is Initialized!!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        
        leftWristX = results[0].pose.leftWristX;
        rightWristX = results[0].pose.rightWristX;
        difference = floor(leftWristX - rightWristX);



    }
}