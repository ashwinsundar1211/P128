battle_of_the_dragon = "";
believer = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
  battle_of_the_dragon = loadSound("battle-of-the-dragons-8037.mp3")
  believer = loadSound("Believer - An-known (Nowviba Music).mp3");
}

function modelLoaded()
{
  console.log('posenet is initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
    {
      console.log(results);

      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      console.log("Left Wrist X = " + leftWristX + "Left Wrist Y = " + leftWristY);

      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("Right Wrist X = " + rightWristX + "Right Wrist Y = " + rightWristY);
    }
}

function setup()
{
  canvas = createCanvas(600, 500);
  canvas.position(320, 200);

  video = createCapture(VIDEO);
  video.hide();
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw()
{
  image(video, 0, 0, 600, 500);
}