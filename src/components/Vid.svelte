<script>
    import * as blazeface from '@tensorflow-models/blazeface';
    import * as tf from '@tensorflow/tfjs-core';
    import * as tfconv from '@tensorflow/tfjs-converter';
    import { onMount, beforeUpdate, afterUpdate, onDestroy, tick } from 'svelte';
    import Complete from './complete.svelte'

    let alert = false;
    $: alert = alert;
    let model, video, ctx, videoWidth, videoHeight,  canvas, modelLoaded, predictions;
    
    async function setupCamera() {
    video = document.getElementById('video');
  const stream = await navigator.mediaDevices.getUserMedia({
    'audio': false,
    'video': { facingMode: 'user' },
  });
  video.srcObject = stream;

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
}
const renderPrediction = async () => {
  //stats.begin();
  const returnTensors = false;
  const flipHorizontal = true;
  const annotateBoxes = false;
  predictions = await model.estimateFaces(
    video, returnTensors, flipHorizontal, annotateBoxes);
  if (predictions.length > 0) {
    alert = true;
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < predictions.length; i++) {
      if (returnTensors) {
        predictions[i].topLeft = predictions[i].topLeft.arraySync();
        predictions[i].bottomRight = predictions[i].bottomRight.arraySync();
        if (annotateBoxes) {
          predictions[i].landmarks = predictions[i].landmarks.arraySync();
        }
      }

      const start = predictions[i].topLeft;
      const end = predictions[i].bottomRight;
      const size = [end[0] - start[0], end[1] - start[1]];
      ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
      ctx.fillRect(start[0], start[1], size[0], size[1]);

      if (annotateBoxes) {
        const landmarks = predictions[i].landmarks;

        ctx.fillStyle = "blue";
        for (let j = 0; j < landmarks.length; j++) {
          const x = landmarks[j][0];
          const y = landmarks[j][1];
          ctx.fillRect(x, y, 5, 5);
        }
      }
    }
  }
  else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    alert = false;
  }
  requestAnimationFrame(renderPrediction);
}
onMount(async() => {
const setupPage = async () => {
  await setupCamera();
  video.play();

  videoWidth = video.videoWidth;
  videoHeight = video.videoHeight;
  video.width = videoWidth;
  video.height = videoHeight;

  canvas = document.getElementById('output');
  canvas.width = videoWidth;
  canvas.height = videoHeight;
  ctx = canvas.getContext('2d');
  ctx.fillStyle = "rgba(255, 0, 0, 0.5)";

  model = await blazeface.load();
  modelLoaded = true;
};
setupPage();
})

function wait(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}
async function showText(){
  await wait(5000);
}

let promise = showText();


$: if(modelLoaded) {
  renderPrediction();
}
onDestroy(() => { 
    console.log("destroying")
    modelLoaded = false;
    /*
     //let video = document.querySelector('#videoElement');
     video.srcObject = null;
     navigator.getUserMedia({video: true},
     function(stream) {
       let track = stream.getTracks()[0];
       track.stop();
     },
     function(error){
      console.log('getUserMedia() error', error);
     })
     */
    });
</script>

<style>
canvas {
  position: absolute;
  top: 100px;
  left: 525px;
}
.alert {
       color: red;
       font-weight: 700;
        font-size: 24px;
   }
   #not-covered {
       color: red;
       background: #FFEEEE;
       border-radius: 6px;
       border: none;
       padding: 15px;
   }
</style>

<video id="video" bind:this={video} playsinline style="
-webkit-transform: scaleX(-1);
transform: scaleX(-1);
width: auto;
height: auto;
">
</video>
<canvas id="output" bind:this={canvas}></canvas>
{#await promise}
<p>loading...<br>take a deep breath</p>
{:then something}
{#if alert === true}
    <p class:alert>Cover your webcam</p>
    <p id="not-covered">You haven’t covered your webcame or did not do it properly. Please cover your webcam completely to proceed to the next step.</p>
    <div class="button-holder">
    <svelte:component this={Complete} p={4.75} green={true} on:click='{m => {modelLoaded = false}}'>
        Onwards to the next challenge
    </svelte:component>
    </div>
{:else}
    <h2>Nice job!</h2>
    <p >Seems like your webcam is covered, you are ouf of the frame, or didn't allow webcam access. But seriously, we recommend covering your webcam...</p>
    <div class="button-holder">
    <svelte:component this={Complete} p={4.75} green={true} on:click='{m => {modelLoaded = false}}'>
        Onwards to the next challenge
    </svelte:component>
    </div>
{/if}
{/await}