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
 import { createEventDispatcher, beforeUpdate, afterUpdate, onMount } from 'svelte';
import { slide } from 'svelte/transition';
import { quintOut, quintIn } from 'svelte/easing';
import { count } from '../store.js'
//import quizSteps from '../store.js'


const quizStep =  ([
    {component: Quiz1, name: 'WEBCAM', showSideBar: true},
    {component:Quiz2, name: 'HTTPS' , showSideBar: true},
    {component:Quiz6, name: 'DNS' , showSideBar: true},
    {component:Checkpoint1, name: 'Security vs Privacy', showSideBar: false},
    {component:Quiz3, name: 'SEARCH' , showSideBar: true},
    {component:Quiz4, name: 'PRIVACY SETTINGS' , showSideBar: true},
    {component:Quiz5, name: 'TRACKER BLOCKER' , showSideBar: true},
    {component:Checkpoint2, name: 'Surveillance Capitalism', showSideBar: false},
    {component:Quiz7, name: 'Internet of Things' , showSideBar: true},
    {component:Quiz8, name: 'Location Tracking' , showSideBar: true},
    {component:Checkpoint3, name: 'Change' , showSideBar: false},
])
$: showSideBar = quizStep[$count].showSideBar;
</script>
<svelte:head>
	<title>Test your knowledge</title>
</svelte:head>
<main transition:slide="{{delay: 100, duration: 400, easing: quintOut}}" >
       {#if showSideBar}
       <Completion class='step'>
              {quizStep[$count].name}
           
       </Completion>
       <div id="main-content"> 
              <svelte:component this={quizStep[$count].component} />
             </div>
       {:else }
       <div id="checkpoint"> 
              <svelte:component this={quizStep[$count].component} />
       </div>
       {/if}
       
</main>
<style>
       main {
              display: flex;
              flex-flow: row;

       }
       #main-content{
              background: #38424D;
              /*height: 86vh; */
              border-radius: 15px;
              border: 0px;
              margin: 12px 22px 40px 20px;
              padding: 9.3vh 5vw 0vh 9.3vh;
              color: #FFFFFF;
              width: 100%;
    
              /*margin-top: -50px;
              margin-left: 21vw;
              margin-right: 50px;
              padding-right: 15px;*/
       }
       #checkpoint {
             
       }
</style>