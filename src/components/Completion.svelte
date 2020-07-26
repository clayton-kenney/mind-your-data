<script>
    //total time for countdown
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';
import Check from './Check.svelte';
import { quizSteps, timerActive, progress } from '../store.js';
//console.log($quizSteps);
let start= 30 * 60;
let timer = tweened(start);
  setInterval(() => {
    if ($timer > 0 && $timerActive) $timer--;
  }, 1000);

  $: minutes = Math.floor($timer / 60);
  $: minname = minutes > 1 ? "mins" : "min";
  $: seconds = Math.floor($timer - minutes * 60).toLocaleString('en', {minimumIntegerDigits:2,useGrouping:false})


</script>
<aside>
    <section id="timer">
        <span id='remaining'>
            <slot>

            </slot>
        </span> 
        <span id='minutes'>{minutes}:{seconds}</span>
    </section>
    <section class='done'>
        {#each $quizSteps as challenge}
            {#if challenge.type != 'checkpoint'}
        <Check active={challenge.status}/> 
            {/if}
        {/each}    
    </section>
    <progress value={$progress} max="100"></progress>

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
        padding: 0vh 7vh;
        position: sticky;
        top: 50px;
    }
    #timer {
        display: flex;
        flex-direction: column; 
        /*width: 20vw;
        height: 135px;
        border-bottom: 1px solid #c7c7c7;*/
    }
    #remaining {
        font-size: 20px;
        padding: 20px 0px 20px 0px;
        color: #73EF7B;

    }
    #minutes {
        color:white;
        background: #0F2033;
        border-radius: 6px;
        
        height: 6.7vh;
        text-align: center;
        font-size: 30px;
        margin: 55vh 0vh 0vh 0vh; 


    }
    .done {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        height: 40px;
        margin-bottom: 20px
    }
    .lock {
        
        display: block;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: url(../checked.svg) no-repeat;
        width: 20px;
        margin: 5px;
        padding-left: 20px;

    }
    .ellipse {
        width:3px;
        height:3px;
        margin: 3px;
    }
    progress{
        -webkit-appearance: progress-bar;
        display: block;
        width: 290px;
        position: relative;
        bottom: 59px;
        height: 6px;
        z-index: -1;
        background: #73EF7B;
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