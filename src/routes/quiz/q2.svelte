<script>
	import { onMount, afterUpdate } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	//import Completion from '../../components/Completion.svelte'
	import Trans from '../../components/TransHelp.svelte';

	const dispatch = createEventDispatcher();

	function complete() {
		dispatch('message', {
			question: 3,
			complete: 'true'
		});
	}
	function incomplete() {
		dispatch('message', {
			question: 3, //Q-1 becaue of array
			complete: 'false'
		});
	}
		let q1Steps = [
		{ stepNum: '1', 
		h2: 'What Search Engine do you use?', 
		name: 'Introduction', 
		classn: 'complete',
		d: '1 / 3',
		browsers: ['Google Chrome', 'DuckDuckGo', 'Bing', 'Something', 'Something'],
		copy: 'Did you know everything time you look up something using search engine, you are giving your information to thousands of 3rd party advertisers? Vast amount of your data has been taken from you without a single consent only to manipulate your purchase habit and long-term behavior. In this exercise, we will walk through with you how to avoid....'}
		]
		let browserChoice = [
			{name: 'Google Chrome',
			value: 1,
			safety:'37%',
			body:'Google Chrome collectes X number of individual data per year. Google probably knows more about you than even Facebook does, thanks to the things you tell it when you type queries into its search engine. Though that’s just the tip of how it tracks you. It also has its tracking infrastructure embedded on three-quarters of the top million websites. So chances are it’s following what you’re browsing online.'},
			{name: 'DuckDuckGo',
			value: 2,
			safety:'73%',
			body:'Something something'},
			{name: 'DuckDuckGo',
			value: 3,
			safety:1,
			body:'duckduckgo is so freaking awesome. omg.',},
			{name: 'something1',
			value: 4,
			safety:1,
			body:'maybe switch to duckduckgo',},
			{name: 'something2',
			value: 5,
			safety:1,
			body:'pooooooor decisions  hahahahah',},
			
		]
		
		$: q = 0;
		let section =0;
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
	
		let choice = ['Google Chrome'];
		function showResults(event) {
			section =1
		}
		function showAlternatives(event) {
			section=2;
		}
		
	</script>
	<svelte:head>
		<title>Search Engine</title>
	</svelte:head>
<!-- <section id="progress">
		<h3>Search Engine {fraction}</h3>
		<ul>
			{#each q1Steps as step}
				<li class={step.classn} >{step.name}</li>
			{/each}
		</ul>
	</section> -->
	
	
	<Trans>
				{#if section==0}
		<h1>{headline}</h1>
		<p>{body}</p> 
		<form>
				<label>
					<input type="radio" bind:group={choice} value={0} selected>
						{browserChoice[0].name}
				</label>
				<label>
					<input type="radio" bind:group={choice} value={1}>
						{browserChoice[1].name}
				</label>
				<label>
					<input type="radio" bind:group={choice} value={2}>
						{browserChoice[2].name}
				</label>
				<label>
					<input type="radio" bind:group={choice} value={3}>
						{browserChoice[3].name}
				</label>
				<label>
					<input type="radio" bind:group={choice} value={4}>
						{browserChoice[4].name}
				</label>
		</form>
		<section id='next-skip'> 
			<button on:click={showResults} class='btn-dark'>Submit</button>
		</section>
		{:else if section==1}
			
			<h2>{browserChoice[choice].name}</h2>
			<p id='warning'>Safety level: {browserChoice[choice].safety}</p>
			<p>{browserChoice[choice].body}</p>
			<button class='btn-dark' on:click={showAlternatives}>Check Alternatives</button>
		{:else}
			<h1>Switch Search Engine</h1>
			<h2>Here is a list of our recomended search engines</h2>
			<ul>
				<li>Option 1</li>
				<li>Option 2</li>
				<li>Option 3</li>
				<li>Option 4</li>
				<li>Option 5</li>
			</ul>
			<h3>How to change your default browser for windows</h3> 
			<h3>how to change your defualt browser for mac</h3> 
			<button class='btn-dark' on:click={complete}>Complete Challenge</button>
			<button class='btn-dark' on:click={incomplete}>Complete Challenge</button>

		{/if}

	</Trans>
		
		
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
	   #warning {
			color: red;
			font-size: 24px;
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
		form {
			display: flex;
			flex-flow: column;
		}
		label {
			padding: 10px;
		}
	</style>