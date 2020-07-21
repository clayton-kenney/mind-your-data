<script>
	const dispatch = createEventDispatcher();
	import { onMount, afterUpdate, createEventDispatcher } from 'svelte';
	import Detect from '../../components/Detect.svelte'
    import Trans from '../../components/TransHelp.svelte';
	 //sets aside icon to in progress via store
	 import { quizSteps } from '../../store.js'
	 import { count } from '../../store.js'
	 import Complete from '../../components/complete.svelte'

    onMount(async() => {$quizSteps[$count].status = 1});
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
	<title>Security vs Privacy: What’s at stake?</title>
</svelte:head>
<Trans>
        <h1>Security vs Privacy: What’s at stake?</h1>
<p> When it comes to privacy and security, it’s a good idea to have both. Each can impact your cyber safety. But what’s the difference?</p>    
<p>Privacy relates to any rights you have to control your personal information and how it’s used. Think about those privacy policies you’re asked to read and agree to when you download new smartphone apps.</p>    
<p>Security, on the other hand, refers to how your personal information is protected. Your data — different details about you — may live in a lot of places. That can challenge both your privacy and your security.</p>    
<p>Some people regard privacy and security as pretty much the same thing. That’s because the two sometimes overlap in our connected world. But they aren’t the same, and knowing how they differ may help you to protect yourself in an increasingly connected world.</p>    
<h2>What’s the difference between privacy and security?</h2>
<p>Here’s an example. You might share personal information with your bank when you open a checking account. What happens after that? Here are three possible outcomes, all related to your personal information (not to the money you may have deposited in the checking account).</p>    
    <ul>
        <li>Your privacy and security are maintained. The bank uses your information to open your account and provide you with products and services. They go on to protect that data.</li>
        <li>Your privacy is compromised, and your security is maintained. The bank sells some of your information to a marketer. Note: You may have agreed to this in the bank’s privacy disclosure. The result? Your personal information is in more hands than you may have wanted.</li>
        <li>Both your privacy and security are compromised. The bank gets hit by a data breach. Cybercriminals penetrate a bank database, a security breach. Your information is exposed and could be sold on the dark web. Your privacy is gone. You could become the victim of cyber fraud and identity theft.</li>
    </ul>
<p>    It would be great if your risks began and ended with that theoretical bank. But your personal information is likely all over the connected world — in government offices, at healthcare providers, at stores and restaurants, and in many of your online accounts. You might say it’s everywhere — not literally, but it’s certainly in enough places that it’s out of your control.</p>    
<p>If a cybercriminal accesses that information, it could be off to the races. Your privacy and security could both get trampled.</p>    
<div class="button-holder">
    <Complete>Continue Privacy Challege</Complete>
</div>
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