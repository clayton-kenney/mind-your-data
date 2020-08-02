<script>
    import { onMount, beforeUpdate, afterUpdate, onDestroy, tick } from 'svelte';
    
    import * as blazeface from '@tensorflow-models/blazeface';
    import * as tf from '@tensorflow/tfjs-core';
    import * as tfconv from '@tensorflow/tfjs-converter';
    
    let model = blazeface.load();
    model.then(m => model = m)
    model.catch('model not loaded')
    let isModelLoaded = false;
    let isVideoLoaded = false;
    let predictions;
     //document.querySelector("#videoElement");
    
    
    
    onMount(() => {
        let video = document.querySelector("#videoElement");
      const mediaStream = navigator.mediaDevices.getUserMedia({video: true})
      .then(mediaStream => {
        video.srcObject = mediaStream; 
        isVideoLoaded = true})
      .catch(console.log);
      
         // Pass in `true` to get tensors 
      });
    
      async function main() {
      // Load the model.
      // Pass in an image or video to the model. The model returns an array of
      // bounding boxes, probabilities, and landmarks, one for each detected face.
    
      const returnTensors = false; // Pass in `true` to get tensors back, rather than values.
      predictions = model.estimateFaces(document.querySelector("#videoElement"), returnTensors);
      predictions.then (p => console.log(p))
    
      if (predictions.length > 0) {
        /*
        `predictions` is an array of objects describing each detected face, for example:
    
        [
          {
            topLeft: [232.28, 145.26],
            bottomRight: [449.75, 308.36],
            probability: [0.998],
            landmarks: [
              [295.13, 177.64], // right eye
              [382.32, 175.56], // left eye
              [341.18, 205.03], // nose
              [345.12, 250.61], // mouth
              [252.76, 211.37], // right ear
              [431.20, 204.93] // left ear
            ]
          }
        ]
        */
    
        for (let i = 0; i < predictions.length; i++) {
          const start = predictions[i].topLeft;
          const end = predictions[i].bottomRight;
          const size = [end[0] - start[0], end[1] - start[1]];
    
          // Render a rectangle over each detected face.
          ctx.fillRect(start[0], start[1], size[0], size[1]);
        }
      }
    }
    //stop video function on end of component   
       onDestroy(() => { 
     //let video = document.querySelector('#videoElement');
     //video.srcObject = null;
     navigator.getUserMedia({video: true},
     function(stream) {
       let track = stream.getTracks()[0];
       track.stop();
     },
     function(error){
      console.log('getUserMedia() error', error);
     })
     
    });
     
    
    </script>
    <svelte:head>
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core"></script>
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter"></script>
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/blazeface"></script>
    </svelte:head>
    
    {#await model && isVideoLoaded}
      loading...
      {:then handleLoad}
      <video autoplay="true" id="videoElement"></video>
    {/await}