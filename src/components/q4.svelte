<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { onMount, afterUpdate } from 'svelte';
	import Detect from './Detect.svelte'
	import Trans from './TransHelp.svelte';
	import Complete from './complete.svelte' //set success={false} for failure
	import Btn from './Btn.svelte' //set <Next q={2}> to skip multiple steps
	import { count, step, quizSteps } from '../store.js'
	import Back from './Back.svelte'

	//sets aside icon to in progress via store
    onMount(async() => {$quizSteps[$count].status = 1});
	//confirm comletion of quiz to master quiz component
</script>
<svelte:head>
	<title>Question 4: Privacy Settings</title>
</svelte:head>
<Trans>
{#if $step==0}
<section>
	<h1>Privacy settings - 3rd party cookies</h1>
	<h2>Want some cookies?</h2>
	<p>Well, not that kind of cookie.</p>
	<p>Cookies are small files that are stored on your computer and carry information from one session on a website to another. Usually, the website that sets a cookie is the only one that reads the cookie. However, third-party cookies can be set by one website and read by another. Third-party cookies are used by servers that deliver advertisements and those annoying pop-up and pop-under ads.</p>
	<div class="button-holder">
		<Btn yellow={true}>Continue</Btn>
	</div>
</section>
{:else}
<section>
	<h2>Give 3rd party cookies the boot by managing your browser settings:</h2>
	<Detect />
	<div class="button-holder" id='cookie-buttons'>
		<h3>Did you disable tracking cookies?</h3>
		<Complete>Yup</Complete>
		<Complete success={false}>No, I don't mind them following me</Complete>
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
   #cookie-buttons{
	   margin: 40px 0px 0px 0px;
   }
</style>