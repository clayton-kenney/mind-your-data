<script>
	import { onMount, createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import Trans from '../../components/TransHelp.svelte';
	 //sets aside icon to in progress via store
	 import { quizSteps } from '../../store.js'
	 import { count } from '../../store.js'
	 import Complete from '../../components/complete.svelte'

    onMount(async() => {$quizSteps[$count].status = 1});

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
	let current = 'initial';
</script>
<svelte:head>
	<title>Internet of things( Alexa, Home devices)</title>
</svelte:head>
<Trans>
{#if q==0}
<section>
	<h2>Internet of things( Alexa, Home devices)</h2> 
	<p>It should be clear by now that your daily interactions technology, let alone your smart speaker are anything but private. A series of investigative reports have shown that other people are reviewing recordings or transcripts of your conversations. 
	</p>
	<p>The three big makers of smart speakers—Amazon, Apple, and Google—say they do this to improve the device’s performance, not for targeting ads. But privacy advocates argue that, without prior notice, any listening from employees and contractors is unfair to consumers.</p>
	<div class="button-holder">
		<button on:click={advance}>I own a smart speaker</button>
		<button on:click={advanceTwo}>I don't own a smart speaker</button>
	</div>
</section>
{:else if q==1}
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
		<button on:click={complete}>Yes, I Did</button>
		<button on:click={incomplete}>No I don't want to</button>
	</div>
</section>
{:else}
	<section>
		<h2>Hoooray!</h2>
		<p>One less way people can snoop on your privacy.</p>
			<button on:click={complete}>Next Challenge</button>
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