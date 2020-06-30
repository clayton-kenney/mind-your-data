<script>
import Progress from './Progress.svelte'
	let q1Steps = [
	{ stepNum: '1', 
	h2: 'Webcam Challenge', 
	name: 'Introduction', 
	class: 'complete',
	copy: 'If your computer has a built-in camera, also known as a webcam, you should know that it can be used to spy on you. And no, this is not just science fiction as a recent survey conducted by HP shows that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.'},
	{ stepNum: '2', 
	h2: 'Cover Your Webcam', 
	name: 'Permissions', 
	class: 'incomplete',
	copy: 'Please have your webcam covered and proceed to next step. We will access to your webcam to make sure you covered the webcam properly. Click “Test” button to proceed challenge.'},
	{ stepNum: '3', 
	h2: 'Great! It’s properly covered.', 
	name: 'Cover your webcam', 
	class: 'incomplete',
	copy: 'Please remember to leave your webcam covered while its not being used. This can prevent...'}
	]
	let q = 0;
	function handleMessage(event) {
				q = event.detail.number;
				q1Steps[q].class = 'complete';
		}
		
	$: headline = q1Steps[q].h2;
	$: body = q1Steps[q].copy;
</script>
<svelte:head>
	<title>Webcam Challenge</title>
</svelte:head>
<div class='quiz-holder'>
<h2>{headline}</h2> 
<p>{body}</p> 
</div>
	<Progress on:message={handleMessage}>
		<ul>
		{#each q1Steps as step }
			<li class={step.class} >{step.name}</li>
		{/each}
		</ul>
	</Progress>
<style>
   .quiz-holder {
	   width: 70%;
       padding: 20px 40px;
   }
   .incomplete {
        color: #a0a0a0;
    }
</style>