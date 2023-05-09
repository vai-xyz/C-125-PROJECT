 var difference =0;
 var leftWrist_X=0;
 var rightWrist_X=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(400,400);
    video.position(40,150);

    canvas=createCanvas(800,400);
    canvas.position(430,180);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Posenet Model is Intialised");
}
function gotPoses(results,error){
    if(error){
        console.error(error);
    }
    if(results.length>0){
console.log(results);

leftWrist_X=results[0].pose.leftWrist.x;
rightWrist_X=results[0].pose.rightWrist.x;

 difference=floor(leftWrist_X - rightWrist_X);
console.log("leftwristX= "+leftWrist_X+"RightwristX= "+rightWrist_X+"difference= "+difference);
    }
}

function draw(){
    background("#cef2bb");
document.getElementById("font-size").innerHTML= difference + "px";
    textSize(difference);
    text('Happy',50,350);
    fill("black");
}