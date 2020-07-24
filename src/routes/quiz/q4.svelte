<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { onMount, afterUpdate } from 'svelte';
	import Detect from '../../components/Detect.svelte'
	import Trans from '../../components/TransHelp.svelte';
	import Complete from '../../components/complete.svelte' //set success={false} for failure
	import Next from '../../components/Next.svelte' //set <Next q={2}> to skip multiple steps
	import { count, step, quizSteps } from '../../store.js'
	import Back from '../../components/Back.svelte'

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
	<h2>Privacy settings: Want a cookie?</h2> 
	<p>Well, not that kind of cookie. Many websites allow third party cookies which are designed to hold data specific to a particular user and website. </p>
	<p>You’re just supposed to trust the willingness and ability of any organization to put your privacy over their need to meet their goals, which usually entail profits. Yeah. Sure.</p>
	<div class="button-holder">
		<Next>Continue</Next>
	</div>
</section>
{:else}
<section>
	<h2>Give 3rd party cookies the boot</h2>
	<Detect />
	<div class="button-holder">
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
   button {
	   padding: 10px 20px;
	   margin: 10px;
	   border: black solid 0px;
	   border-radius: 8px;
   }
</style>