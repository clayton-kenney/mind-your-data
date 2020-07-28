<script>
    import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
    import Vid from '../../components/Vid.svelte'
    import Trans from '../../components/TransHelp.svelte';
    import Complete from '../../components/complete.svelte'
	import Btn from '../../components/Btn.svelte' //set <Next q={2}> to skip multiple steps
    import { count, step, quizSteps, timerActive, progress} from '../../store.js'
    import Back from '../../components/Back.svelte'

    //sets aside icon to in progress via store
   onMount(async() => {
        $quizSteps[$count].status = 1;
        timerActive.set(!$timerActive)});
    //Start Video on update
    /*
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
   onDestroy(async() => { 
        function stopStreamedVideo(video) { 
            const stream = video.srcObject;
            const tracks = stream.getTracks();
                tracks.forEach(t => t.stop());
                stream = null;
                }
                //video.srcObject = null;
            });*/
</script>
<svelte:head>
	<title>Webcam Challenge</title>
</svelte:head>
<Trans>

{#if $step==0}
<section>
	<h2>Is your Webcam Covered?</h2> 
    <p>It’s likely your computer already has a built-in camera, and it’s possible for that camera to be used to spy on you.</p>  <p>If your webcam for whatever reason has been hacked, the person on the other side can take pictures and video of anything or anyone. No, this isn’t just paranoia–a recent survey conducted by HP found that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.</p>
    <Btn p={4.75}>Continue</Btn>
</section>
{:else if $step==1}
<section>
	<h2>Cover Your Webcam</h2>
	<p>Cover your webcam. You can find removable stickers for this purpose, but simple fixes can be found at your home or office. You can use a sticky note or  a piece of masking tape to obscure your webcam when it’s not in use. Like right now. </p>
	<div class="button-holder">
        <Btn p={4.75}>It's covered</Btn>
        <Complete success={false} p={8.5}>No Thanks, It's a hassle</Complete> 
	</div>
</section>
{:else if $step==2}
   <div class="video-holder">
       <Vid></Vid>
    </div>
    <p id="alert">Cover your webcam</p>
    <p id="not-covered">You haven’t covered your webcame or did not do it properly. Please cover your webcam completely to proceed to the next step.</p>
    <Complete p={4.75}>
        Onwards to the next challenge
    </Complete>
{:else}
    <Vid></Vid>
    <Complete p={4.75}>
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