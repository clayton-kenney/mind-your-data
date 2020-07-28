<script>
import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
	onMount(async() => {
    let video = document.querySelector("#videoElement");

  const mediaStream = await navigator.mediaDevices.getUserMedia({video: true})
  .then(mediaStream => {video.srcObject = mediaStream})
  .catch(console.log);

})
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
<video autoplay="true" id="videoElement"></video>
