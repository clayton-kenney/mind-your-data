<script>
	import { onMount, createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import Trans from '../../components/TransHelp.svelte';
	import Complete from '../../components/complete.svelte'
	import Btn from '../../components/Btn.svelte' //set <Next q={2}> to skip multiple steps
	import { count, step, quizSteps } from '../../store.js'
	import Back from '../../components/Back.svelte'

	//sets aside icon to in progress via store
	onMount(async() => {$quizSteps[$count].status = 1});
	let disabled = false;
	function disable() {
		disabled= true;
		console.log(disabled);
	}
</script>
<svelte:head>
	<title>Tracker blocker</title>
</svelte:head>
<Trans>
{#if $step==0}
<section>
	<h2>Tracker blocker: Privacy Badger</h2> 
	<p>Are you being tracked on the web? Almost definitely. 
		Trackers are installed on many websites to log your behavior. While cookies are the little identifiers for websites to recognize you through multiple visits, trackers use those cookies to analyze your behavior and build their valuable user profiles. Trackers will log the site you visit, the date and time, and your computer settings (more powerful trackers can even watch your mouse movement) all of this without your consent.</p>
		<div class="button-holder">
			<Btn yellow={true}>Continue</Btn>
		</div>
</section>
{:else}
<section>
	<h2>Install the Privacy Badger extension.</h2>
	<p>Privacy Badger is a free and open-source browser extension for Google Chrome, Mozilla and Firefox that automatically discovers trackers as you browse the Web. The longer you browse with Privacy Badger, the better it gets at protecting you, so start browsing a little to teach your Badger.</p>
	<div class="button-holder">
		<a href='https://privacybadger.org' target="_blank"><button on:click|once='{disable}' disabled='{disabled}'>Download Privacy Badger
		</button></a>
		<Complete>
			{#if !disabled}
			Already Have it
			{:else}
			Just downloaded it
			{/if}
		</Complete>
		<Complete success={false}>
			No Thanks
		</Complete>
	</div>
</section>
{/if}
<Back/>
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
   a {
	   text-decoration: none;
   }
</style>