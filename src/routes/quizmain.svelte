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
 import Completion from '../components/Completion.svelte'
 import { createEventDispatcher } from 'svelte';
 
 import { quintOut } from 'svelte/easing';




 const quizSteps =  [
        { id:'1', component: Quiz1, name: 'Webcam Challenge', complete:false},
        { id: '2', component: Quiz2, name: 'Browser Choice', complete:false},
        { id: '3', component: Quiz3, name: 'Privacy Setting', complete:false},
        { id: '4', component: Quiz4, name: 'Https everywhere', complete:false},
        { id: '5', component: Quiz5, name: 'Location Services (phone needed)', complete:false},
        { id: '6', component: Quiz6, name: 'Tracker blocker', complete:false},
        { id: '7', component: Quiz7, name: 'location Tracking', complete:false},
        { id: '8', component: Quiz8, name: 'Mobile keyboard', complete:false},
        { id: '9', component: Quiz9, name: 'Messenger platform', complete:false},
        { id: '10', component: Quiz10, name: 'iot', time: '2mins'}
]
$: quizNum = 1;
function handleMessage(event) {
              
              quizNum++;
              //quizSteps[Object.values(event.detail[0])].complete = object.values(event.detail[1])
              let status = Object.values(event.detail);
              console.log(status);
              let location = status[0];
              quizSteps[location].complete = status[1];
              console.log(quizSteps[location]);
	}
</script>
<svelte:head>
	<title>Test your knowledge</title>
</svelte:head>
<main>
       <Completion class='step'/>
       <section id="main-content">
        <svelte:component this={quizSteps[quizNum].component} on:message={handleMessage} />
       <!--<Quiz2 on:message={handleMessage}/> -->
<!--<select bind:value={selected}>
        {#each quizSteps as q}
		<option value={q}>Question {q.id}</option>
	{/each}
</select>-->
<!--<button on:click={handleClick}>Click me</button>-->
<!--<Progress past={past.name} current={selected.name} next={next.name}/>-->
       </section>
</main>
<style>
       main {
              display: flex;
              flex-flow: row wrap;
              margin-left:50px;
              margin-top:25px;

       }
       .step{
		margin-bottom: 55px;
       }
       #main-content{
              margin-top: -50px;
              margin-left: 21vw;
              margin-right: 50px;
              padding-right: 15px;
       }
</style>