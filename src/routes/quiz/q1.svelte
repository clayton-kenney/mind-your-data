<script>
    import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
    import Trans from '../../components/TransHelp.svelte';
    import Complete from '../../components/complete.svelte'
    import Next from '../../components/Next.svelte'
    import { count, step, quizSteps } from '../../store.js'
    import Back from '../../components/Back.svelte'

    //sets aside icon to in progress via store
    onMount(async() => {$quizSteps[$count].status = 1});
    //Start Video on update
    let video;
	afterUpdate(async() => {
    console.log($step);
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

{#if $step==0}
<section>
	<h2>Is your Webcam Covered?</h2> 
    <p>It’s likely your computer already has a built-in camera, and it’s possible for that camera to be used to spy on you.  <br>  If your webcam for whatever reason has been hacked, the person on the other side can take pictures and video of anything or anyone. No, this isn’t just paranoia–a recent survey conducted by HP found that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.</p>
    <Next>
        Continue
    </Next>
</section>
{:else if $step==1}
<section>
	<h2>Cover Your Webcam</h2>
	<p>Cover your webcam. You can get fancy removable stickers for this purpose, but for now, find a sticky note or piece of masking tape and cover your webcam when it’s not in use (like right now). </p>
	<div class="button-holder">
        <Next>It's covered</Next>
        <Complete success={false}>No Thanks, It's a hassle</Complete> 
	</div>
</section>
{:else if $step==2}
   <div class="video-holder"><video autoplay="true" id="videoElement"></video></div>
    <p id="alert">Cover your webcam</p>
    <p id="not-covered">You haven’t covered your webcame or did not do it properly. Please cover your webcam completely to proceed to the next step.</p>
    <!--<button on:click={incomplete}>Onwards to the next challenge</button> -->
    <Complete>
        Onwards to the next challenge
    </Complete>
{:else}
    <video autoplay="true" id="videoElement"></video>
    <Complete>
        Onwards to the next challenge
    </Complete>
{/if}

<Back/>
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