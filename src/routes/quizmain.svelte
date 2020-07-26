<script>
 import Quiz1 from './quiz/q1.svelte'
 import Quiz2 from './quiz/q2.svelte'
 import Quiz3 from './quiz/q3.svelte'
 import Quiz4 from './quiz/q4.svelte'
 import Quiz5 from './quiz/q5.svelte'
 import Quiz6 from './quiz/q6.svelte'
 import Quiz7 from './quiz/q7.svelte'
 import Quiz8 from './quiz/q8.svelte'
 import Quiz9 from './quiz/q9.svelte'
 import Checkpoint1 from './quiz/check1.svelte'
 import Checkpoint2 from './quiz/check2.svelte'
 import Checkpoint3 from './quiz/check3.svelte'
 import Completion from '../components/Completion.svelte'
 import { createEventDispatcher, afterUpdate } from 'svelte';
import { slide } from 'svelte/transition';
import { quintOut, quintIn } from 'svelte/easing';
import { count } from '../store.js'

 const quizSteps =  [
        { id:'1', component: Quiz1, name: 'Webcam Challenge', complete:false},
        { id: '2', component: Quiz2, name: 'HTTPS Everywhere', complete:false},
        { id: '3', component: Checkpoint1, name: 'Security vs Privacy', complete:false},
        { id: '4', component: Quiz3, name: 'Search Engine', complete:false},
        { id: '5', component: Quiz4, name: 'Privacy Settings', complete:false},
        { id: '6', component: Quiz5, name: 'Tracker blocker', complete:false},
        { id: '7', component: Quiz6, name: 'DNS', complete:false},
        { id: '8', component: Checkpoint2, name: 'Surveillance Capitalism', complete:false},
        { id: '9', component: Quiz7, name: 'Location Tracking', complete:false},
        { id: '10', component: Quiz8, name: 'iOT', complete:false},
        { id: '11', component: Checkpoint3, name: 'How to Make change', complete:false},
]

$:quizNum = $count;

function handleMessage(event) {
              
              //quizNum++;
              //quizSteps[Object.values(event.detail[0])].complete = object.values(event.detail[1])
              //let status = Object.values(event.detail);
              //let location = status[0];
              //quizSteps[location].complete = status[1];
              //console.log(quizSteps[location]);
	}
</script>
<svelte:head>
	<title>Test your knowledge</title>
</svelte:head>
<main transition:slide="{{delay: 100, duration: 400, easing: quintOut}}">
       <Completion class='step'>
              Chapter {quizSteps[quizNum].id + ': '+ quizSteps[quizNum].name}
       </Completion>
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
              flex-flow: row;

       }
       .step{
		margin-bottom: 55px;
       }
       #main-content{
              background: #38424D;
              /*height: 86vh; */
              border-radius: 15px;
              border: 0px;
              margin: 12px 22px 40px 20px;
              padding: 9.3vh 5vw 0vh 9.3vh;
              color: #FFFFFF;
    
              /*margin-top: -50px;
              margin-left: 21vw;
              margin-right: 50px;
              padding-right: 15px;*/
       }
</style>