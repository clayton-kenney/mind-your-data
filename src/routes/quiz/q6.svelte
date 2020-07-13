<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

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
	<title>Domain Name Service</title>
</svelte:head>
{#if q==0}
<section>
	<h2>Domain Name Service</h2> 
	<p>When you type an address in the address bar (such as mindyourdata.org), your device asks a Domain Name Server to translate that address into an IP address (a unique combination of numbers and dots). By default, your ISP or your mobile carrier runs a DNS for their users. It means that they can see all your web history. Big telecom companies are going to take advantage of that to ramp up their advertising efforts. By default, your DNS query is also unencrypted and can be intercepted by people running the network. Some governments also ask telecom companies to block some websites on their DNS servers — some countries block Facebook for censorship reasons, others block The Pirate Bay for online piracy reasons.</p>
	<button on:click={advance}>Continue</button>
</section>
{:else}
<section>
	<h2>Configure each of your devices to use another public DNS</h2>
	<p>You can configure each of your devices to use another public DNS. But don’t use Google’s public DNS! Remember, it’s an ad company, so they really want to see your web history. Both Quad9 and Cloudflare’s 1.1.1.1 have strong privacy policies. But Quad9 is a not-for-profit organization, so it’s a little easier to trust them.</p>
	<div class="button-holder">
		<button on:click={complete}>Link1</button>
		<button on:click={complete}>Link2</button>
		<button on:click={complete}>Already did it</button>
		<button on:click={incomplete}>Don't care, let then snoop</button>
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