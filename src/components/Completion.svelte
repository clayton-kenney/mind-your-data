<script>
    //total time for countdown
import { tweened } from 'svelte/motion';
import { cubicOut, sineInOut  } from 'svelte/easing';
import Check from './Check.svelte';
import { quizSteps, timerActive, progress, count } from '../store.js';
import { afterUpdate } from 'svelte';
import { slide, fly, fade } from 'svelte/transition';
//console.log($quizSteps);
let start= 30 * 60;
let timer = tweened(start);
  setInterval(() => {
    if ($timer > 0 && $timerActive) $timer--;
  }, 1000);

  $: minutes = Math.floor($timer / 60);
  $: minname = minutes > 1 ? "mins" : "min";
  $: seconds = Math.floor($timer - minutes * 60).toLocaleString('en', {minimumIntegerDigits:2,useGrouping:false})

let bg1 = true;
let bg2 = false;
let bg3 = false;

let color;
afterUpdate(() =>{
    if($count > 3){bg1 = false; bg2 = true;}
    if($count  > 7){bg2= false; bg3= true;}
    if(bg1){color = "#74ef7b"}
    if(bg2){color = "#F1C330"}
    if(bg3){color = "#E94040"}
})
</script>
<aside class:bg1 class:bg2 class:bg3>
    <section id="timer">
       <div>Time Remaining:</div> <div id='minutes' style='white-space:nowrap;'>{minutes}:{seconds}</div> 
       <div id='challenge-name'>
        <slot>

        </slot>
    </div>
    </section>
    <div id="progress-holder">
    <section class='done'>
        {#each $quizSteps as challenge}
            {#if challenge.type != 'checkpoint'}
        <svelte:component this={Check} active={challenge.status} color={color}/> 
            {/if}
        {/each}    
    </section>
    <progress value={$progress} max="100" class:bg1 class:bg2 class:bg3></progress>
    </div>
</aside>
<style>
    aside {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 33.75vw; 
        height: 86vh; 
        background-color: #38424D;
        border-radius: 15px;
        border: 0px;
        margin: 12px 0px 40px 20px;
        min-width: 33vw;
        position: sticky;
        top: 50px;
    }
    #timer {
        display: flex;
        flex-flow: row wrap; 
        margin-block-start: 30px;
        align-items: center;
        justify-content: center;
    }
    
    #minutes {
        color:white;
        background: #0F2033;
        border-radius: 6px;
        max-width: 150px;
        height: 60px;
        text-align: center;
        font-size: 24px;
        margin: 12px 40px;
        display: grid;
        align-content: center;
        padding: 2px 30px; 

    }
    .done {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        width: 95%;
        margin-bottom: 20px
    }
    progress{
        -webkit-appearance: none;
	    border: none;
        display: block;
        width: 22vw;
        position: relative;
        bottom: 33px;
        height: 6px;
        z-index: -1;
        margin-left: 1.9vw;
    }
    progress::-webkit-progress-bar {
	    background: #303538;
	}
    progress.bg1::-webkit-progress-value {
        background: #74ef7b;
    }
    progress.bg2::-webkit-progress-value {
        background: #F1C330;
    }
    progress.bg3::-webkit-progress-value {
        background: #E94040;
    }
    .bg1 {
        background-image: url('../bg-group1.png');
        background-blend-mode: normal;
        background-size: cover;
        background-position: top;
        color: #74ef7b;
        font-size: 20px;
    }
    .bg2 {
        background-image: url('../bg-group2.png');
        background-blend-mode: normal;
        background-size: cover;
        background-position: top;
        color: #F1C330;
        font-size: 20px;
    }
    .bg3 {
        background-image: url('../bg-group3.png');
        background-blend-mode: normal;
        background-size: cover;
        background-position: top;
        color: #E94040;
        font-size: 20px;
    }
    #progress-holder {
        width: 80%;
    }
    #challenge-name {
        font-size: 40px;
        color: white;
        margin: auto;
        min-width: 150px;
    }
    
</style>
<!--

        
<div class='done'>
    {if active}
    <img src='./lock-active.svg' alt="completed" class='active lock' />
    
        <img src='./Ellipse-active.png' alt="completed" class='ellipse active' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />
</div>
</div>-->