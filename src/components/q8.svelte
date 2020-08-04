<script>
	import { onMount, createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import Trans from './TransHelp.svelte';
	import Complete from './complete.svelte' //set success={false} for failure
	import Btn from './Btn.svelte' //set <Next q={2}> to skip multiple steps
	import { count, step, quizSteps } from '../store.js'
	import Back from './Back.svelte'

	//sets aside icon to in progress via store
	onMount(async() => {$quizSteps[$count].status = 1;
		});

</script>
<svelte:head>
	<title>Location Tracking</title>
</svelte:head>
<Trans>
{#if $step==0}
<section>
	<h1>Is your phone tracking your every move? Probably.</h1> 
		<p>Pervasive tracking of location at the very least risks putting you at a disadvantage as a consumer. Certainly if you live somewhere without a proper regulatory framework for privacy. It’s also worth bearing in mind how lax tech giants can be where location privacy is concerned — whether it’s Uber’s infamous ‘god view’ tool or Snapchat leaking schoolkids’ location or Strava accidentally revealing the locations of military bases. Their record is pretty terrible. </p>	
	<h3>What mobile device do you use?</h3>
		<div class="button-holder">
			<Btn>iOS</Btn>
			<Btn>Android</Btn>
		</div>
</section>
{:else if $step==1}
<section>
	<h2>Turn location off on IOS device</h2>
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
	<h3>Did you turn off location on your device</h3>
	<div class="button-holder">
		<Complete>Yes, I did</Complete>
		<Complete success={false}>No, I didn't</Complete>
	</div>
</section>
{:else}
<section>
	<h2>Turn location off on and Android Device</h2>
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
	<h3>Did you turn off location on your device</h3>
	<div class="button-holder">
		<Complete>Yes, I did</Complete>
		<Complete success={false}>No, I didn't</Complete>
	</div>
</section>
{/if}
<Back/>
</Trans>
<style>
	section {
		width: 100%;
	}

</style>