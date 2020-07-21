<script>
    import { createEventDispatcher } from 'svelte';
    import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
    import Trans from '../../components/TransHelp.svelte';
    import Complete from '../../components/complete.svelte'
    import { count } from '../../store.js'
    import { quizSteps } from '../../store.js'
	const dispatch = createEventDispatcher();
	function incomplete() {
		dispatch('message', {
			question: 0, //Q-1 becaue of array
			complete: 'false'
		});
	}
    let q = 0;
    let isActive;
	function advance() {
		q++;
        console.log(q);
        if (q=2) {
            isActive= true;
        }
	}
	function advanceTwo() {
		q+=2;
		console.log(q);
    }
    //sets aside icon to in progress via store
    onMount(async() => {$quizSteps[$count].status = 1});
    //Start Video on update
    let video;
	afterUpdate(async() => {
	video = document.querySelector("#videoElement");
	if (navigator.mediaDevices.getUserMedia) {
  	navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
			video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Not loaded");
    });
		}
})
//stop video function on end of component   
    afterUpdate(async() => { 
        function stopStreamedVideo(video) { 
            const stream = video.srcObject;
            const tracks = stream.getTracks();
                tracks[0].stop();
                
                }
                video.srcObject = null;
            });
</script>
<svelte:head>
	<title>Webcam Challenge</title>
</svelte:head>
<Trans>

{#if q==0}
<section>
	<h2>Is your Webcam Covered?</h2> 
	<p>It’s likely your computer already has a built-in camera, and it’s possible for that camera to be used to spy on you.  <br>  If your webcam for whatever reason has been hacked, the person on the other side can take pictures and video of anything or anyone. No, this isn’t just paranoia–a recent survey conducted by HP found that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.</p>
	<button on:click={advance}>Continue</button>
</section>
{:else if q==1}
<section>
	<h2>Cover Your Webcam</h2>
	<p>Cover your webcam. You can get fancy removable stickers for this purpose, but for now, find a sticky note or piece of masking tape and cover your webcam when it’s not in use (like right now). </p>
	<div class="button-holder">
        <button on:click={advance}>It's covered</button>
        <button on:click={advanceTwo}>No Thanks, It's a hassle</button>
	</div>
</section>
{:else if q==2}
   <div class="video-holder"><video autoplay="true" id="videoElement"></video></div>
    <p id="alert">Cover your webcam</p>
    <p id="not-covered">You haven’t covered your webcame or did not do it properly. Please cover your webcam completely to proceed to the next step.</p>
    <!--<button on:click={incomplete}>Onwards to the next challenge</button> -->
    <Complete>
        Onwards to the next challenge
    </Complete>
{:else}
    <video autoplay="true" id="videoElement"></video>
{/if}
</Trans>
<style>
   .button-holder {
	width: 27vw;
	display: flex;
    flex-flow: column nowrap;
   }
   .video-holder{
       width: 100%;
   }
   button {
	   padding: 10px 20px;
	   margin: 10px;
	   border: black solid 0px;
	   border-radius: 8px;
   }
   #alert {
       color: red;
       font-weight: 700;
        font-size: 24px;
   }
   #not-covered {
       color: red;
       background: #FFEEEE;
       border-radius: 6px;
       border: none;
   }
</style>