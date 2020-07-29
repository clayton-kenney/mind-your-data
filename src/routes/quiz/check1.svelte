<script>
	const dispatch = createEventDispatcher();
	import { onMount, afterUpdate, createEventDispatcher, onDestroy } from 'svelte';
	import Detect from '../../components/Detect.svelte'
    import Trans from '../../components/TransHelp.svelte';
	 //sets aside icon to in progress via store
	 import { quizSteps } from '../../store.js'
	 import { count, timerActive } from '../../store.js'
	 import Complete from '../../components/complete.svelte'
	 import Back from '../../components/Back.svelte'

    onMount(async() => {
		$quizSteps[$count].status = 1;
		timerActive.set(!$timerActive)
		});
	onDestroy(() => timerActive.set(!$timerActive))
</script>
<svelte:head>
	<title>Security vs Privacy: What’s at stake?</title>
</svelte:head>
<Trans id="main-content">	
	<section>
		<div>
	<h3>Checkpoint1</h3>
        <h1>Security vs Privacy: What’s at stake?</h1>
		<p><strong>Congratulations!</strong> By completing these tasks, you have just taken a few steps toward securing your personal information from potential cybercrime. But the truth is, your data — different details about you — lives in a lot of places in our increasingly connected world. </p>
		<p>Some people think of privacy and security as pretty much the same thing.  While the two sometimes overlap, they aren’t the same, and knowing how they differ will help give you control over your personal information and how it’s used.</p>
		<p><strong>What’s the difference between privacy and security?</strong></p>
		<p>Security refers to how your personal information is protected. </p>
		<p>Privacy, on the other hand, relates your rights to control the data that’s being collected about you, how it’s collected, why, and who it’s shared with.</p>
		 
		<p><strong>Why does privacy matter?</strong></p>
		<p>The convenience of living in a constantly connected world comes at a cost. Our daily interactions with technology generates an unimaginable amount of data that is being harvested and sold to those who want to predict and shape our behavior. </p>
		
		
		<p>You might think it’s no big deal to give up your data in exchange for personalized ads and content, but consumption -- browsing through a store and buying things -- and quiet time alone are both important parts of how we define ourselves. If we blindly agree to live in a state of constant surveillance, we lose the ability to choose for ourselves and allow others to influence our behaviors and self-perception.</p>
		
		<p>Now imagine if our society accepts surveillance as the new normal and citizens know they are being watched constantly. We may have highly personalized access to goods and services, but we will be less likely to speak freely and act individually. Without privacy as a fundamental right, we lose power and become an obedient and submissive society.</p>
		
<div class="button-holder">
    <Complete>Continue to next Challenge</Complete>
</div>
</div>

<Back/>
</section>
</Trans>

<style>
   .button-holder {
	width: 27vw;
	display: flex;
    flex-flow: column nowrap;
   }
   section{
			width:100%;
			background-image: url(https://images.unsplash.com/photo-1554936970-e49a373f6967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80);
			background-size: contain;
   }
   div {
	width: 50%;
              margin: auto;
              background: #38424D; 
              border: none;
              border-radius: 15px;
              padding: 9.3vh 5vw 0vh 9.3vh;
              color: #FFFFFF;
   }
  
   strong {
	   font-weight: 700;
	   font-size: 22px;
   }
</style>