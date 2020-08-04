<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { onMount, afterUpdate, onDestroy } from 'svelte';
	import Detect from './Detect.svelte'
	import Complete from './complete.svelte'
	import Back from './Back.svelte'

	 //sets aside icon to in progress via store
	 import { quizSteps, count, timerActive } from '../store.js'

	onMount(async() => {
		$quizSteps[$count].status = 1;
		timerActive.set(!$timerActive)});
	onDestroy(() => timerActive.set(!$timerActive))

</script>

	<section>
		<div>
    <h3>Checkpoint 2:</h3>
        <h1>Surveillance Capitalism How did this happen?</h1>
		<p><strong>Great!</strong>You are now on your way to claiming your privacy.</p>
		<p>By now we hope you see how our private experiences are being harvested and turned into behavioral data. This data is then processed and packaged as prediction products and sold to business customers with a commercial interest in knowing what we will do now, soon, and later. This is surveillance capitalism.</p>
		<p><strong>How did this happen?</strong></p>
		<p>It wasn’t that long ago that the internet entered our daily lives. We went online expecting empowerment, the democratization of knowledge, and help with real problems, but surveillance capitalism really was just too lucrative to resist. Google was the first to learn how to capture surplus behavioral data and use it to compute prediction products that they could sell to advertisers.
		</p>
		<p>This economic logic has now spread beyond the tech companies to new surveillance–based ecosystems in virtually every sector, from insurance to automobiles to health, education, finance, to every product described as “smart” and every service described as “personalized.” By now it’s very difficult to participate in society without interfacing with these same channels that are supply chains for surveillance capitalism’s data flows.</p>
    <div class="button-holder">
		<Complete>Start the next Challenge</Complete>
		<Back/>
	</div>
	</div>

	</section>

<style>
   section{
			width:100%;
			background-image: url(https://images.unsplash.com/photo-1535376472810-5d229c65da09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80);
			background-size: contain;
			padding-top: 15px;
   }
   div {
	width: 50%;
              margin: auto;
              background: #38424D; 
              border: none;
              border-radius: 15px;
              padding: 9.3vh 5vw 0vh 9.3vh;
              color: #FFFFFF;
   }
  
   strong {
	   font-weight: 700;
	   font-size: 22px;
   }
</style>