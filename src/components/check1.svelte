<script>
	const dispatch = createEventDispatcher();
	import { onMount, afterUpdate, createEventDispatcher, onDestroy } from 'svelte';
	import Detect from './Detect.svelte'
    import Trans from './TransHelp.svelte';
	 //sets aside icon to in progress via store
	 import { count, timerActive, quizSteps } from '../store.js'
	 import Complete from './complete.svelte'
	 import Back from './Back.svelte'
    import { fly } from 'svelte/transition';
    import { sineInOut } from 'svelte/easing';
    onMount(async() => {
		$quizSteps[$count].status = 1;
		timerActive.set(!$timerActive)
		});
	onDestroy(() => timerActive.set(!$timerActive))
</script>
	<section id="main-content">
		<div>
	<h3>Checkpoint1</h3>
        <h1>Security vs Privacy: What’s at stake?</h1>
		<p><strong>Congratulations!</strong> By completing these tasks, you have just taken a few steps toward securing your personal information from potential cybercrime. But the truth is, your data — different details about you — lives in a lot of places in our increasingly connected world. </p>
		<p>Some people think of privacy and security as basically the same thing.  While the two sometimes overlap, they aren’t the same, and knowing how they differ will help give you control over your personal information and how it’s used.</p>
		<p><strong>What’s the difference between privacy and security?</strong></p>
		<p>Security refers to how your personal information is protected. </p>
		<p>Privacy, on the other hand, relates to your rights to control the data that’s being collected about you, how it’s collected, why, and who it’s shared with.</p>
		 
		<p><strong>Why does privacy matter?</strong></p>
		<p>The convenience of living in a constantly connected world comes at a cost. Our daily interactions with technology generate an unimaginable amount of data that is being harvested and sold to those who want to predict and shape our behavior. </p>
		
		
		<p>You might think it’s no big deal to give up your data in exchange for personalized ads and content, but consumption -- browsing through a store and buying things -- and quiet time alone are both important parts of how we define ourselves. If we blindly agree to live in a state of constant surveillance, we lose the ability to choose for ourselves and allow others to influence our behaviors and self-perception.</p>
		
		<p>Now imagine if our society accepts surveillance as the new normal and citizens know they are being watched constantly. We may have highly personalized access to goods and services, but we will be less likely to speak freely and act individually. Without privacy as a fundamental right, we lose power and become an obedient and submissive society.</p>
		
<div class="button-holder">
	<Complete>Continue to next Challenge</Complete>
	<Back/>
</div>
</div>


</section>

<style>
   #main-content{
			width:100%;
			background-image: url(https://images.unsplash.com/photo-1558697524-5a2d1e8a93d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80);
			background-size: contain;
			padding-top: 15px;
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