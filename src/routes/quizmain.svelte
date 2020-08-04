<script>
 import Quiz1 from '../components/q1.svelte'
 import Vid from '../components/Vid.svelte'
 import Quiz2 from '../components/q2.svelte'
 import Quiz3 from '../components/q3.svelte'
 import Quiz4 from '../components/q4.svelte'
 import Quiz5 from '../components/q5.svelte'
 import Quiz6 from '../components/q6.svelte'
 import Quiz7 from '../components/q7.svelte'
 import Quiz8 from '../components/q8.svelte'
 import Checkpoint1 from '../components/check1.svelte'
 import Checkpoint2 from '../components/check2.svelte'
 import Checkpoint3 from '../components/check3.svelte'
 import Completion from '../components/Completion.svelte'
 import Complete from '../components/complete.svelte'
 import { createEventDispatcher, beforeUpdate, afterUpdate, onMount } from 'svelte';
import { slide, fly, fade } from 'svelte/transition';
import { quintOut, quintIn, sineInOut } from 'svelte/easing';
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
$: quizNumber = quizStep[$count].name;
</script>
<svelte:head>
	<title>Mind your Data</title>
</svelte:head>
<main>
       {#if showSideBar}
       <div in:fly="{{delay: 500, duration: 1000, x: -800, y: 0, opacity: 0.0, easing: sineInOut}}" out:fly="{{delay: 50, duration: 600, x: -800, y: 0, opacity: 0, easing: sineInOut}}">
       
       <svelte:component this={Completion}>
              {quizStep[$count].name}
       </svelte:component>
       
       </div>
       {/if}
       <!--<div id="main-content"> -->
       {#if $count === 0}
              <div id="main-content" in:fly="{{delay: 1500, duration: 1500 , x: 0, y: 1000, opacity: 0.0, easing: sineInOut}}" out:fly="{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}"> 
                     <Quiz1 />
              </div>
       {:else if $count === 1}
              <div id="main-content" in:fly="{{delay: 150, duration: 800, x:0, y: 1000, opacity: 0.0, easing: sineInOut}}" out:fly="{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}"> 
              <Quiz2 />
              </div>
       {:else if $count === 2}
              <div id="main-content" in:fly="{{delay: 150, duration: 800, x:0, y: 1000, opacity: 0.0, easing: sineInOut}}" out:fly="{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}"> 
                     <Quiz6 />
              </div>
       {:else if $count === 3}
              <div id="checkpoint" in:fly="{{delay: 1500, duration: 1500, x: 800, y: 0, opacity: 0.0, easing: sineInOut}}" out:fly="{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}"> 
                     <Checkpoint1 />
              </div>
       {:else if $count === 4}
              <div id="main-content" in:fly="{{delay: 550, duration: 1000, x:0, y: 1000, opacity: 0.0, easing: sineInOut}}" out:fly="{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}"> 
                     <Quiz3 />
              </div>
       {:else if $count === 5}
              <div id="main-content" in:fly="{{delay: 150, duration: 800, x:0, y: 1000, opacity: 0.0, easing: sineInOut}}" out:fly="{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}"> 
                     <Quiz4 />
              </div>
       {:else if $count === 6}
              <div id="main-content" in:fly="{{delay: 150, duration: 800, x:0, y: 1000, opacity: 0.0, easing: sineInOut}}" out:fly="{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}"> 
                     <Quiz5 />
              </div>
       {:else if $count === 7}
              <div id="checkpoint" in:fly="{{delay: 1500, duration: 1500, x: 800, y: 0, opacity: 0.0, easing: sineInOut}}" out:fly="{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}"> 
                     <Checkpoint2 />
              </div>
       {:else if $count === 8}
              <div id="main-content" in:fly="{{delay: 550, duration: 1000, x:0, y: 1000, opacity: 0.0, easing: sineInOut}}" out:fly="{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}"> 
                     <Quiz7 />
              </div>
       {:else if $count === 9}
              <div id="main-content" in:fly="{{delay: 150, duration: 800, x:0, y: 1000, opacity: 0.0, easing: sineInOut}}" out:fly="{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}"> 
                     <Quiz8 />
              </div>
       {:else}
              <div id="checkpoint" in:fly="{{delay: 1500, duration: 1500, x: 800, y: 0, opacity: 0.0, easing: sineInOut}}" out:fly="{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}"> 
                     <Checkpoint3 />
              </div>
       {/if}
       <!--<svelte:component this={quizStep[$count].component} />
             </div>
       {:else }
       <div id="checkpoint"> 
              <svelte:component this={quizStep[$count].component} />
       </div> -->
       
</main>
<style>
       main {
              display: flex;
              flex-flow: row;
              background: #303538;

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
              background-image: url('../bg-vector.png');
           
              background-blend-mode: darken;
              /*margin-top: -50px;
              margin-left: 21vw;
              margin-right: 50px;
              padding-right: 15px;*/
       }
       #checkpoint {
             
       }
</style>