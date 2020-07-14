<script>
 import { slide } from 'svelte/transition';
import { quintOut, quintIn } from 'svelte/easing';
     const quizSteps =  [
        { id: 'q1', name: 'Webcam Challenge', time: '2mins', description:"If your computer has a built-in camera, also known as a webcam, you should know that it can be used to spy on you. And no, this is not just science fiction as a recent survey conducted by HP shows that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked. In this challenge, we are going to walk you through the best practice to avoid this risk."},
        { id: 'q2', name: 'Browser Choice', time: '3mins'},
        { id: 'q3', name: 'Privacy Setting', time: '4mins'},
        { id: 'q4', name: 'Https everywhere', time: '4mins'},
        { id: 'q5', name: 'Location Services (phone needed)', time: '3mins'},
        { id: 'q6', name: 'Tracker blocker', time: '3mins'},
        { id: 'q7', name: 'location Tracking', time: '1mins'},
        { id: 'q8', name: 'Mobile keyboard', time: '5mins'},
        { id: 'q9', name: 'Messenger platform', time: '2mins'},
        { id: 'q10', name: 'iot', time: '2mins'}
     ]
    let active = true;
     function handleMouseShow(){
        active = false;

     }
</script>
<svelte:head>
	<title>Quiz Overview</title>
</svelte:head>
<div transition:slide="{{delay: 100, duration: 400, easing: quintOut}}" >
<h2>This test contains 10 unique privacy tests that will take you about 30 minutes to complete. Throught the test, we will provide...</h2>
<div>
    {#each quizSteps as {id, name, time, description}, i}
    <div class='num'>{i}{name} ({time})</div><div class:active={active}>{description}</div>
    {/each}
</div>
</div>
<style>
    .num {
        padding-right: 100px;
     
    }
    div {
        color:black;
    }
    .active {
        display: block;
    }
    
</style>