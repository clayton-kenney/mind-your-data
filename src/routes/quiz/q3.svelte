<script>
	import { onMount, afterUpdate } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	//import Completion from '../../components/Completion.svelte'
	import Trans from '../../components/TransHelp.svelte';
	 
	import Complete from '../../components/complete.svelte' //set success={false} for failure
	import Btn from '../../components/Btn.svelte' //set <Next q={2}> to skip multiple steps
	import { count, step, quizSteps } from '../../store.js'
	import Back from '../../components/Back.svelte'

	onMount(async() => {$quizSteps[$count].status = 1;
		});
	let mac = false;
	let pc = false;
	</script>
	<svelte:head>
		<title>Search Engine</title>
	</svelte:head>
	
	<Trans>
		<section>
	{#if $step==0} 
		<h1>Change Your Search</h1>
		<p>How are you searching for information? </p>
		<p>Using a search engine can disclose highly personal information about you, such as medical issues, employment status, financial information, political beliefs, and other private details. This data, of course, can be collected, stored, and linked to your data profile (and your real identity). The only way to effectively “opt out” is to keep your data safe and out of the hands of the data collectors.</p>
		<div class="button-holder">
			<Btn yellow={true}> continue</Btn>
		</div>
	{:else}
	
			<h1>Use alternative search engine</h1>
			<p>Protect your privacy while you search using an alternative search engine when you need to find something on the internet. This isn’t as hard asyou might think as there are some competitive alternatives now that don’t collect or share your personal information — we like DuckDuckGo as an extension for searches, but if you’d like to search for other search engines <a href="https://restoreprivacy.com/private-search-engine/">here are a few options</a>.
			
		<div class:mac on:click="{() => mac = !mac}">
			<div class="caret">
				<p>Change your defualt search engine for Mac </p>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z" fill="white"/>
					</svg>
			</div>
			{#if mac}
				<ol>
					<li>Choose System Preferences from the Apple () menu.</li>
					<li>Click General</li>
					<li>Choose your web browser from the ”Default web browser” pop-up menu.</li>
				</ol>
			{/if}
		</div>
		<hr>
		 <div class:pc on:click="{() => pc = !pc}">
			<div class="caret">
			<p>Change your defualt search engine for Windows </p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z" fill="white"/>
</svg></div>
			{#if pc}
			<ol>
					<li>Select the Start  button, and then type Default apps.</li>
					<li>In the search results, select Default apps.</li>
					<li>Under Web browser, select the browser currently listed, and then select Microsoft Edge or another browser.</li>
			</ol>
    		{/if}
		</div>
		<hr>
		<div>
		   <p><a href="https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg" target="_blank">Or you can download the DuckDuckGo Extension here</a></p>
		</div>
		<div class="button-holder">
			<Complete>
        		Search Engine Changed
			</Complete>
			<Complete success={false}>
        		No Thanks
    		</Complete>
		</div>
		{/if}
	</section>
		<Back/>
	</Trans>
		
		
	<style>
		.caret{
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: space-between;
		}
		a {
			text-decoration: underline;
		}
	</style>