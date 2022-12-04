function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modalLoaded);
    posenet.on('pose',gotPoses);
}
function moadlLoaded(){
    console.log("posenet is initialized");
}
function draw(){
    background("gray");
}
function gotPoses(results){
  if(results.length>0){
    console.log(results);
  }  
}