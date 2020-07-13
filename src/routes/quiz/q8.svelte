<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { onMount, afterUpdate } from 'svelte';
	import Detect from '../../components/Detect.svelte'

	
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
	<title>Question 4: Privacy Settings</title>
</svelte:head>
{#if q==0}
<section>
	<h2>Privacy settings: Want a cookie?</h2> 
	<p>Well, not that kind of cookie. Many websites allow third party cookies which are designed to hold data specific to a particular user and website. </p>
	<p>You’re just supposed to trust the willingness and ability of any organization to put your privacy over their need to meet their goals, which usually entail profits. Yeah. Sure.</p>
	<div class="button-holder">
		<button on:click={advance}>Continue</button>
	</div>
</section>
{:else if q=1}
<section>
	<h2>Give 3rd party cookies the boot</h2>
	<Detect />
	<div class="button-holder">
		<h3>Did you disable tracking cookies?</h3>
		<button on:click={complete}>Yup</button>
		<button on:click={incomplete}>No I then following me</button>
	</div>
</section>
{/if}
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