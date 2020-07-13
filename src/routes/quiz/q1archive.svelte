<script>
import { onMount, afterUpdate } from 'svelte';
import { createEventDispatcher } from 'svelte';
import Completion from '../../components/Completion.svelte'

const dispatch = createEventDispatcher();

function complete() {
	dispatch('message', {
		question: 0,
		complete: 'true'
	});
}
	let q1Steps = [
	{ stepNum: '1', 
	h2: 'Is your Webcam Covered?', 
	name: 'Introduction', 
	classn: 'complete',
	d: '1 / 3',
	copy: 'It’s likely your computer already has a built-in camera, and it’s possible for that camera to be used to spy on you.  <br>  If your webcam for whatever reason has been hacked, the person on the other side can take pictures and video of anything or anyone. No, this isn’t just paranoia–a recent survey conducted by HP found that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.'},
	{ stepNum: '2', 
	h2: 'ACTION: Cover Your Webcam', 
	name: 'Permissions', 
	classn: 'incomplete',
	d: '2 / 3',
	copy: 'Please have your webcam covered and proceed to next step. We will access to your webcam to make sure you covered the webcam properly. Click “Test” button to proceed challenge.'},
	{ stepNum: '3', 
	h2: 'Great! It’s properly covered.', 
	name: 'Cover your webcam', 
	classn: 'incomplete',
	d: '3 / 3',
	copy: 'Please remember to leave your webcam covered while its not being used. This can prevent...'},
	{stepNum: '',
	h2: '',
	name: '',
	classn: '',
	d: '',
	copy: ''}
    ]
	
	$: q = 0;
	let isActive;
	function stepUp() {
		q++;
		q1Steps[q].classn = 'complete';
		if (q == 2 ){
			isActive = true;
		}
		if (q > 2) {
			complete();
		}
	}
	$: headline = q1Steps[q].h2;
	$: body = q1Steps[q].copy;
	$: fraction = q1Steps[q].d;
	let video
	afterUpdate(() => {
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

</script>
<svelte:head>
	<title>Webcam Challenge</title>
</svelte:head>
<!-- Completion class='step'/ -->
<!--
	<h3>Webcam Challenge {fraction}</h3>
	<ul>
		{#each q1Steps as step}
			<li class={step.classn} >{step.name}</li>
		{/each}
	</ul>
</Progress> -->
<section id="progress">
	<h3>Webcam Challenge {fraction}</h3>
	<ul>
		{#each q1Steps as step}
			<li class={step.classn} >{step.name}</li>
		{/each}
	</ul>
</section>
<div class='quiz-holder'>
	<h1>{headline}</h1>
	<p>{body}</p> 
	<section id='next-skip'> 
        <button on:click={stepUp} class='btn-dark'>Next</button>
    </section>
	{#if isActive}
		<video autoplay="true" id="videoElement"></video>
	{/if}
</div>
	
	
<style>
	main{
		flex-flow: row wrap;
		justify-content: flex-start;
	}
   .quiz-holder {
	   display: block;
	   width: 65vw; /* 72.5 originaly */
	   left: 20vw;
	   height: 100vh;
       padding: 20px 50px;
   }
   .step{
		margin-bottom: 55px;
   }
   #progress {
	   margin-top: 50px;
   }
   ul {
	   padding-inline-start: 15px;
   }
   li {
	   margin: 30px 0px;
   }
   .incomplete {
        color: #a0a0a0;
		list-style-type: circle;
	}
	.complete {
		list-style-type: disc;
	}
	.Side-headline {
		font-size: 24px;
		font-weight: 700;
	}
	#videoElement {
		
	}
	.btn-dark {
        color:white;
        background: #0F2033;
        border-radius: 6px;
        width: 30%;
        text-align: center;
        padding: 5px 10px;
    }
    button {
        border: none;
        padding: 5px 10px;
    }
</style>

