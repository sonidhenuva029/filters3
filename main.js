function preload() {

}



function setup(){
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture();
    video.size(300,300);
    video.hide();

    poseNet = m15.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized')
};


function draw() {
    image(video, 0, 0, 300, 300)
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose X = " + results[0].pose.nose.x);
        console.log("nose Y = " + results[0].pose.nose.y);
    }
};