<script>
import Progress from './Progress.svelte'
	const q1Steps = [
	{ stepNum: '1', component: '#', name: 'Introduction', class: 'complete'},
	{ stepNum: '2', component: '#', name: 'Permissions', class: 'incomplete'},
	{ stepNum: '3', component: '#', name: 'Cover your webcam', class: 'incomplete'}
	]
</script>
<svelte:head>
	<title>Webcam Challenge</title>
</svelte:head>
<div class='quiz-holder'>
<h2>Webcam Challenge</h2> 
<p>If your computer has a built-in camera, also known as a webcam, you should know that it can be used to spy on you. And no, this is not just science fiction as a recent survey conducted by HP shows that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.</p> 
</div>
	<Progress>
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