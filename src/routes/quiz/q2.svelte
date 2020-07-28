<script>
	import { onMount, createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import Trans from '../../components/TransHelp.svelte';
	import Complete from '../../components/complete.svelte' //set success={false} for failure
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
	console.log(disabled);
</script>
<svelte:head>
	<title>Https Everywhere</title>
</svelte:head>
<Trans>
{#if $step == 0}
<section>
	<h2>Is your information encrypted and secure?</h2> 
	<p>HTTP stands for hypertext transfer protocol. It’s a protocol that allows the transferring of data from a web server to a browser to view web pages.</p>
	<p>The problem is that the data transferred by HTTP is not encrypted, and it can be intercepted by third parties to view the data being passed between the two systems. This can be addressed by using a secure version called HTTPS, where the "S" stands for secure.</p>
	<p>Using  HTTPS  is especially important for sites that transmit sensitive data, like ecommerce sites that accept online card payments, or login areas that require users to enter their credentials.</p>

	<div class="button-holder">
		<Btn green={true}>Continue</Btn>
	</div>
</section>
{:else}
<section>
	<h2>Download HTTPS Everywhere extension</h2>
	<p>Luckily, the Electronic Frontier Foundation has created a smart extension that rewrites website requests to HTTPS. With HTTPS, the internet traffic between your device and the server hosting your website can’t be seen by prying eyes.</p>

<div class="button-holder">
	<a href='https://www.eff.org/https-everywhere' target="_blank"><button on:click|once='{disable}' disabled='{disabled}'>Download extension now
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