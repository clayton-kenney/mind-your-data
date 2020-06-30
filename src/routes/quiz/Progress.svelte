<script>
let completed;

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
<style>
    aside {
        position: fixed;
        top:55px;
        right:0;
        width: 25%;
        height: 100%;
        background-color: #e4e4e4;
        border: 2px solid #c7c7c7;
    }
    section {
        padding: 10px 10px 20px 10px;
    }
    #timer {
        display: flex;
        flex-direction: column; 
        border-bottom: 1px solid #c7c7c7;
        margin-left: 15px;
    }
    #remaining {
        font-size: 20px;
        padding: 5px 0px 20px 0px;
        margin-left: 15px;

    }
    #minutes {
        color:white;
        background: #0F2033;
        border-radius: 6px;
        width: 30%;
        text-align: center;
        padding: 5px 10px;
        margin-left: 15px;

    }
    .btn-dark {
        color:white;
        background: #0F2033;
        border-radius: 6px;
        width: 30%;
        text-align: center;
        padding: 5px 10px;
    }
    button {
        border: none;
        padding: 5px 10px;
    }
    #next-skip {
        margin: 5px 10px;
        padding: 5px 0px 20px 0px;
    }
    
</style>
<aside id='sidebar'>
    <section id="timer">
        <span id='remaining'>Time remaining:</span> 
        <span id='minutes'>{minutes}:{seconds}</span>
    </section>
    <section id="progress">
        <slot>

        </slot>
    </section>
    <section id='next-skip'> 
        <button  class='btn-dark'>Next</button>
        <button  class='btn-dark'>Skip</button>
        <!--<button on:click={handleClickMinus}>Skip</button>-->
    </section>
</aside>