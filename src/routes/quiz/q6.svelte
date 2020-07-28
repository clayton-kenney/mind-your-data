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
	let mac = false;
	let pc = false;
</script>
<svelte:head>
	<title>Domain Name Service</title>
</svelte:head>
<Trans>
{#if $step==0}
<section>
	<h2>Domain Name Server (DNS): Quad9
	</h2> 
	<p>Everything on the Internet, including websites, live at a numerical IP address. The Domain Name System, or DNS, translates these numerical IP addresses into human-readable domain names that we all know and remember (like mindyourdata.org). If your DNS settings are not working correctly, or you’re still using defaults, you may be at risk for cybercrime and performance issues. And, the websites you visit may be collected and shared by whatever entity owns the DNS service.</p>
	<div class="button-holder">
		<Btn green={true}>Continue</Btn>
	</div>
</section>
{:else}
<section>
	<h2>Setup Quad9</h2>
	<p>Quad9 is a free, not-for-profit security solution that uses the DNS to protect your system against the most common cyber threats. Not only does it  preserve and protect your privacy, it will also improve your system’s performance! It’s like a painless immunization for your computer and devices.</p>
	<div class:mac on:click="{() => mac = !mac}">
		<div class="caret">
			<p>Setup Quad9 for Mac:</p>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z" fill="white"/>
			</svg>
		</div>
		{#if mac}
		<iframe title="Setup Quad9 for mac" width="560" height="315" src="https://www.youtube-nocookie.com/embed/NM4AdfEnAmY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		{/if}
	</div>
		<hr>
 	<div class:pc on:click="{() => pc = !pc}">
		<div class="caret">
			<p>Setup Quad9 for PC:</p>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z" fill="white"/>
			</svg>
		</div>
		 {#if pc}
		 <iframe title="Setup Quad9 for Windows" width="560" height="315" src="https://www.youtube-nocookie.com/embed/aujUl3yt6nM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/if}
    </div>
	<div class="button-holder">
		<Complete>Setup Complete</Complete>
		<Complete success={false}>Don't care, let then snoop</Complete>
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
   .caret{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
	}
</style>