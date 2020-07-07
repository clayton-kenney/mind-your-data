<script>
    let steps= [
        { id:'1', status:'active'},
        { id:'1', status:'active'},
        { id:'1', status:'active'},
        { id:'1', status:'active'},
        { id:'1', status:'active'},
        { id:'1', status:'active'},
        { id:'1', status:'active'},
        { id:'1', status:'active'},
        { id:'1', status:'active'},
        { id:'1', status:'active'},
    ]

    //total time for countdown
import { tweened } from 'svelte/motion';
let start= 30 * 60;
let timer = tweened(start);
  setInterval(() => {
    if ($timer > 0) $timer--;
  }, 1000);

  $: minutes = Math.floor($timer / 60);
  $: minname = minutes > 1 ? "mins" : "min";
  $: seconds = Math.floor($timer - minutes * 60)

</script>
<section id="timer">
    <span id='remaining'>Time remaining:</span> 
    <span id='minutes'>{minutes}:{seconds}</span>
</section>
<section class='done'>
    <img src='./lock-active.svg' alt="completed" class='active lock' />
        <img src='./Ellipse-active.png' alt="completed" class='ellipse active' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />
    <img src='./lock-inactive.svg' alt="completed" class='inactive lock' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />
    <img src='./lock-inactive.svg' alt="completed" class='inactive lock' /> 
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />
    <img src='./lock-inactive.svg' alt="completed" class='inactive lock' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />

    <img src='./lock-inactive.svg' alt="completed" class='inactive lock' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />

    <img src='./lock-inactive.svg' alt="completed" class='inactive lock' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />
     <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />

    <img src='./lock-inactive.svg' alt="completed" class='inactive lock' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />

    <img src='./lock-inactive.svg' alt="completed" class='inactive lock' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />

    <img src='./lock-inactive.svg' alt="completed" class='inactive lock' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />
        <img src='./Ellipse-inactive.png' alt="completed" class='ellipse inactive' />

    <img src='./lock-inactive.svg' alt="completed" class='inactive lock' />
</section>
<style>
    #timer {
        display: flex;
        flex-direction: column; 
        width: 20vw;
        height: 135px;
        /*border-bottom: 1px solid #c7c7c7;*/
    }
    #remaining {
        font-size: 20px;
        padding: 5px 0px 20px 0px;
        

    }
    #minutes {
        color:white;
        background: #0F2033;
        border-radius: 6px;
        width: 9.7vw;
        height: 6.7vh;
        text-align: center;
        font-size: 30px;
        

    }
    .done {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin-bottom: 55px;
        margin-right: 40px;
        height: 40px;
    }
    .lock {
        width: 32px;
        margin: 10px;
    }
    .ellipse {
        width:6px;
        height:6px;
        margin: 3px;
    }
    .active {

    }
    .inactive {

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