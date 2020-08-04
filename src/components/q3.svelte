<script>
	import { onMount, afterUpdate } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	//import Completion from '../../components/Completion.svelte'
	import Trans from './TransHelp.svelte';
	 
	import Complete from './complete.svelte' //set success={false} for failure
	import Btn from './Btn.svelte' //set <Next q={2}> to skip multiple steps
	import { count, step, quizSteps } from '../store.js'
	import Back from './Back.svelte'

	onMount(async() => {$quizSteps[$count].status = 1;
		});
		let disabled = false;
	function disable() {
		disabled= true;
		console.log(disabled);
	}
	</script>
	<svelte:head>
		<title>Search Engine</title>
	</svelte:head>
	
		<section>
	{#if $step==0} 
		<h1>Change Your Search</h1>
		<h3>How are you searching for information? </h3>
		<p>Using a search engine can disclose highly personal information about you, such as medical issues, employment status, financial information, political beliefs, and other private details. This data, of course, can be collected, stored, and linked to your data profile (and your real identity). The only way to effectively “opt out” is to keep your data safe and out of the hands of the data collectors.</p>
		<div class="button-holder">
			<Btn yellow={true}>Continue</Btn>
		</div>
	{:else}
			<h1>Use alternative search engine</h1>
			<p>Protect your privacy while you search using an alternative search engine when you need to find something on the internet. This isn’t as hard asyou might think as there are some competitive alternatives now that don’t collect or share your personal information — we recommend DuckDuckGo as your default search, but if you’d like to search for other options <a href="https://restoreprivacy.com/private-search-engine/">check these out.</a> </p>
				<p>Follow the link below for exact instruction on how to change your default search engine.</p>
		<div class="button-holder">
			{#if !disabled}
			<a href='https://duckduckgo.com/install' target="_blank">
				<button on:click|once='{disable}' disabled='{disabled}'>Switch to DuckDuck Go
				</button>
			</a>
	{:else}
			<Complete>
				Just changed it!
			</Complete>
		{/if}
		<Complete success={false}>
			No Thanks
		</Complete>
	
		</div>
		{/if}
	</section>
		<Back />
		
		
	<style>
		a {
			text-decoration: underline;
		}
	</style>