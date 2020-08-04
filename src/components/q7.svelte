<script>
	import { onMount, createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import Trans from './TransHelp.svelte';
	import Complete from './complete.svelte' //set success={false} for failure
	import Btn from './Btn.svelte' //set <Next q={2}> to skip multiple steps
	import { count, step, quizSteps } from '../store.js'
	import Back from './Back.svelte'


	//sets aside icon to in progress via store
    onMount(async() => {$quizSteps[$count].status = 1});

	let current = 'initial';
</script>
<svelte:head>
	<title>Internet of things( Alexa, Home devices)</title>
</svelte:head>
<Trans>
{#if $step==0}
<section>
	<h2>Internet of things( Alexa, Home devices)</h2> 
	<p>It should be clear by now that your daily interactions technology, let alone your smart speaker are anything but private. A series of investigative reports have shown that other people are reviewing recordings or transcripts of your conversations. 
	</p>
	<p>The three big makers of smart speakers—Amazon, Apple, and Google—say they do this to improve the device’s performance, not for targeting ads. But privacy advocates argue that, without prior notice, any listening from employees and contractors is unfair to consumers.</p>
	<div class="button-holder">
		<Btn>I own a smart speaker</Btn>
		<Btn q={2}>I don't own a smart speaker</Btn>
	</div>
</section>
{:else if $step==1}
<section>
	<div class:active="{current === 'amazon'}"
	on:click="{() => current = 'amazon'}">
		<p>Amazon Alexa</p>
		{#if current==='amazon'}
		<ul>
			<li>Step 1: Open the Alexa app on your smartphone and tap the menu button on the top-left of the screen.</li>
			<li>Step 2: Select Settings > Alexa Privacy > Manage How Your Data Improves Alexa.</li>
			<li>Step 3: Switch off the toggle next to Help Improve Amazon Services and Develop New Features.</li>
			<li>Step 4: Then switch off the toggle next to your name under Use Messages to Improve Transcriptions.</li>
		</ul>
		{/if}
	</div>
	
	<hr>
	<div class:active="{current === 'google'}"
	on:click="{() => current = 'google'}">
		<p>Google Assistant</p>
		{#if current==='google'}
		<ul>
			<li>Step 1: Open the Alexa app on your smartphone and tap the menu button on the top-left of the screen.</li>
			<li>Step 2: Select Settings > Alexa Privacy > Manage How Your Data Improves Alexa.</li>
			<li>Step 3: Switch off the toggle next to Help Improve Amazon Services and Develop New Features.</li>
			<li>Step 4: Then switch off the toggle next to your name under Use Messages to Improve Transcriptions.</li>
		</ul>
		{/if}
	</div>
	
	<hr>
	<div class:active="{current === 'apple'}"
	on:click="{() => current = 'apple'}">
		<p>Apple Siri</p>
		{#if current==='apple'}
		<ul>
			<li>Step 1: Open the Alexa app on your smartphone and tap the menu button on the top-left of the screen.</li>
			<li>Step 2: Select Settings > Alexa Privacy > Manage How Your Data Improves Alexa.</li>
			<li>Step 3: Switch off the toggle next to Help Improve Amazon Services and Develop New Features.</li>
			<li>Step 4: Then switch off the toggle next to your name under Use Messages to Improve Transcriptions.</li>
		</ul>
		{/if}
	</div>
	
	<hr>
	<div class="button-holder">
		<h3>Did you setup privacy mode</h3>
		<Complete>Yes, I Did</Complete>
		<Complete success={false}>No I don't want to</Complete>
	</div>
</section>
{:else}
	<section>
		<h2>Hoooray!</h2>
		<p>One less way people can snoop on your privacy.</p>
		<Complete>Next Challenge</Complete>
	</section>
{/if}
<Back/>
</Trans>
<style>
	
</style>