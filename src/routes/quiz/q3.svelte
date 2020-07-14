<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import Trans from '../../components/TransHelp.svelte';

	//confirm comletion of quiz to master quiz component
	function complete() {
		dispatch('message', {
			question: 2,
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
		q+=2;
		console.log(q);
	}
</script>
<svelte:head>
	<title>Https Everywhere</title>
</svelte:head>
<Trans>
{#if q==0}
<section>
	<h2>Https Everywhere</h2> 
		<p>When you connect to a website with regular HTTP, your browser looks up the IP address that corresponds to the website, connects to that IP address, and assumes it’s connected to the correct web server. Data is sent over the connection in clear text. An eavesdropper on a Wi-Fi network, your internet service provider, or government intelligence agencies, can see the web pages you’re visiting and the data you’re transferring back and forth.
		</p>
		<p>Many sites on the web offer some limited support for encryption over HTTPS, but make it difficult to use. For instance, they may default to unencrypted HTTP, or fill encrypted pages with links that go back to the unencrypted site. The HTTPS Everywhere extension fixes these problems by using clever technology make every site useto rewrite requests to these sites to HTTPS.With HTTPS, people running the network between your device and the server hosting the website you’re browsing, or other prying eyes, can’t see your requests and your internet traffic. 
		</p>
		<button on:click={advance}>Continue to next page</button>
</section>
{:else}
<section>
	<h2>Download HTTPS Everywhere extension</h2>
	<p>Informaiton about this extension. What it does exactly. How it works. What benefits users get from having this extension. The EFF has developed a browser extension that makes sure that you access all websites that offer HTTPS using… HTTPS.</p>
</section>
<div class="button-holder">
	<button>Download extension now</button>
	<button>Already Have it</button>
	<button on:click={incomplete}>Don't want to download it</button>
	<button on:click={complete}>Submit</button>
</div>
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