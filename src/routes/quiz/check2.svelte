<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { onMount, afterUpdate, onDestroy } from 'svelte';
	import Detect from '../../components/Detect.svelte'
	import Trans from '../../components/TransHelp.svelte';
	import Complete from '../../components/complete.svelte'
	import Back from '../../components/Back.svelte'

	 //sets aside icon to in progress via store
	 import { quizSteps, count, timerActive } from '../../store.js'

	onMount(async() => {$quizSteps[$count].status = 1;
		timerActive.set(!$timerActive)});
	onDestroy(() => timerActive.set(!$timerActive))

</script>
<svelte:head>
	<title>Surveillance Capitalism How did this happen?</title>
</svelte:head>
<Trans>
    <h3>Checkpoint 2:</h3>
        <h1>Surveillance Capitalism How did this happen?</h1>
		<p><strong>Great!</strong>You are now on your way to claiming your privacy.</p>
		<p>By now we hope you see how our private experiences are being harvested to be translated into behavioral data. This data is then processed and packaged as prediction products and sold to business customers with a commercial interest in knowing what we will do now, soon, and later. This is surveillance capitalism.</p>
		<p><strong>How did this happen?</strong></p>
		<p>It wasn’t that long ago that the internet entered our daily lives. We went online expecting empowerment, the democratization of knowledge, and help with real problems, but surveillance capitalism really was just too lucrative to resist. Google was the first to learn how to capture surplus behavioral data and use it to compute prediction products that they could sell to advertisers.
		</p>
		<p>This economic logic has now spread beyond the tech companies to new surveillance–based ecosystems in virtually every sector, from insurance to automobiles to health, education, finance, to every product described as “smart” and every service described as “personalized.” By now it’s very difficult to participate in society without interfacing with these same channels that are supply chains for surveillance capitalism’s data flows.</p>
    <div class="button-holder">
		<Complete>Start the next Challenge</Complete>
	</div>
	<Back/>
</Trans>

<style>
   .button-holder {
	width: 27vw;
	display: flex;
    flex-flow: column nowrap;
   }
   strong {
	   font-weight: 700;
	   font-size: 22px;
   }
</style>