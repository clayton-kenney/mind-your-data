<script>
 import Quiz1 from './quiz/q0.svelte'
 import Quiz2 from './quiz/q1.svelte'
 import Quiz3 from './quiz/q2.svelte'
 import Quiz4 from './quiz/q3.svelte'
 import Quiz5 from './quiz/q4.svelte'
 import Quiz6 from './quiz/q5.svelte'
 import Quiz7 from './quiz/q6.svelte'
 import Quiz8 from './quiz/q7.svelte'
 import Quiz9 from './quiz/q8.svelte'
 import Quiz10 from './quiz/q9.svelte'

 const quizSteps =  [
        { id:'1', component: Quiz1, name: 'Webcam Challenge', time: '2mins', description:"If your computer has a built-in camera, also known as a webcam, you should know that it can be used to spy on you. And no, this is not just science fiction as a recent survey conducted by HP shows that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked. In this challenge, we are going to walk you through the best practice to avoid this risk."},
        { id: '2', component: Quiz2, name: 'Browser Choice', time: '3mins'},
        { id: '3', component: Quiz3, name: 'Privacy Setting', time: '4mins'},
        { id: '4', component: Quiz4, name: 'Https everywhere', time: '4mins'},
        { id: '5', component: Quiz5, name: 'Location Services (phone needed)', time: '3mins'},
        { id: '6', component: Quiz6, name: 'Tracker blocker', time: '3mins'},
        { id: '7', component: Quiz7, name: 'location Tracking', time: '1mins'},
        { id: '8', component: Quiz8, name: 'Mobile keyboard', time: '5mins'},
        { id: '9', component: Quiz9, name: 'Messenger platform', time: '2mins'},
        { id: '10', component: Quiz10, name: 'iot', time: '2mins'}
]
//let selected = quizSteps[1];
//let next = quizSteps[1];

//et selected= quizSteps[q];   
</script>
<svelte:head>
	<title>Test your knowledge</title>
</svelte:head>
<div>
       <!-- <svelte:component this={quizSteps[1]}/>-->
       <Quiz2 />

<!--<select bind:value={selected}>
        {#each quizSteps as q}
		<option value={q}>Question {q.id}</option>
	{/each}
</select>-->
<!--<button on:click={handleClick}>Click me</button>-->
<!--<Progress past={past.name} current={selected.name} next={next.name}/>-->
</div>
<style>
</style>