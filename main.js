leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
song1="";
song2="";
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);   
    poseNet.on("pose",gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function preload(){
    song1=loadSound("CKay-Ah Ah Ah-(JioMp3).mp3");
    song2=loadSound("music.mp3");as
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
} 
function modelLoaded(){
    console.log("poseNet is loaded ");
}
function gotPoses(results){
    if(results.length >0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        console.log("left wrist X="+leftwristX+"left wristY="+leftwristY);
 
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
        console.log("right wrist X="+rightwristX+"right wristY="+rightwristY);

    }
}
