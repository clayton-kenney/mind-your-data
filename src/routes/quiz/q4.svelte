<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import Trans from '../../components/TransHelp.svelte';

	//confirm comletion of quiz to master quiz component
	function complete() {
		dispatch('message', {
			question: 2, //Q-1 becaue of array
			complete: 'true'
		});
	}
	function incomplete() {
		dispatch('message', {
			question: 2, //Q-1 becaue of array
			complete: 'false'
		});
	}
	let q = 0;
	function advance() {
		q++;
		console.log(q);
	}
	function advanceTwo() {
		q+=2;
		console.log(q);
	}
</script>
<svelte:head>
	<title>Location Tracking</title>
</svelte:head>
<Trans>
{#if q==0}
<section>
	<h2>Location Tracking</h2> 
		<p>Pervasive tracking of location at the very least risks putting you at a disadvantage as a consumer. Certainly if you live somewhere without a proper regulatory framework for privacy. It’s also worth bearing in mind how lax tech giants can be where location privacy is concerned — whether it’s Uber’s infamous ‘god view’ tool or Snapchat leaking schoolkids’ location or Strava accidentally revealing the locations of military bases. Their record is pretty terrible.</p>	
		<button on:click={advance}>Continue to next page</button>
</section>
{:else if q==1}
<section>
	<h2>What mobile device do you use?</h2>
	<div class="button-holder">
		<button on:click={advance}>iOS</button>
		<button on:click={advanceTwo}>android</button>
	</div>
</section>
{:else if q==2}
<section>
	<h2>Turn locaiton off on IOS device</h2>
	<p>Step 1. Go to Settings > Privacy > Location Services.</p>
	<p>Step 2. Make sure that Location Services is on.</p>
	<p>Step 3. Scroll down to find the app.</p>
	<p>Step 4. Tap the app and select an option:</p>
	<ul>
		<li>Never: Prevents access to Location Services information.</li>
		<li>Ask Next Time: This allows you to choose Always While Using App, Allow Once, or Don't Allow.</li>
		<li>While Using the App: Allows access to Location Services only when the app or one of its features is visible on screen. If an app is set to While Using the App, you might see your status bar turn blue with a message that an app is actively using your location.</li>
		<li>Always: Allows access to your location even when the app is in the background.</li>
	</ul>
	<h3>Did you turn off location on your device></h3>
	<div class="button-holder">
		<button on:click={complete}>Yes, I did</button>
		<button on:click={incomplete}>No, I didn't</button>
	</div>
</section>
{:else}
<section>
	<h2>Turn locaiton off on and Android Device</h2>
	<p>Step 1. Go to Settings > Privacy > Location Services.</p>
	<p>Step 2. Make sure that Location Services is on.</p>
	<p>Step 3. Scroll down to find the app.</p>
	<p>Step 4. Tap the app and select an option:</p>
	<ul>
		<li>Never: Prevents access to Location Services information.</li>
		<li>Ask Next Time: This allows you to choose Always While Using App, Allow Once, or Don't Allow.</li>
		<li>While Using the App: Allows access to Location Services only when the app or one of its features is visible on screen. If an app is set to While Using the App, you might see your status bar turn blue with a message that an app is actively using your location.</li>
		<li>Always: Allows access to your location even when the app is in the background.</li>
	</ul>
	<h3>Did you turn off location on your device></h3>
	<div class="button-holder">
		<button on:click={complete}>Yes, I did</button>
		<button on:click={incomplete}>No, I didn't</button>
	</div>
</section>
{/if}
</Trans>
<style>
   .button-holder {
	width: 27vw;
	display: flex;
    flex-flow: column nowrap;
   }
   button {
	   padding: 10px 20px;
	   margin: 10px;
	   border: black solid 0px;
	   border-radius: 8px;
   }
</style>