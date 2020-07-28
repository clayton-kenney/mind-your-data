<script>
	import { onMount, createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import Trans from '../components/TransHelp.svelte';
	import Complete from '../components/complete.svelte' //set success={false} for failure
	import Btn from '../components/Btn.svelte' //set <Next q={2}> to skip multiple steps
	import { count, step, quizSteps } from '../store.js'
	import Back from '../components/Back.svelte'


	//sets aside icon to in progress via store
    onMount(async() => {$quizSteps[$count].status = 1;
        $quizSteps.forEach((v) => {if(v.complete == true){completed++}})});
    let completed= 0;
   
	let current = 'initial';
</script>
<svelte:head>
	<title>Internet of things( Alexa, Home devices)</title>
</svelte:head>
<Trans>
<section class='review'>
    <h2>You have completed {completed} / 8 challenges!</h2>
    
    {#each $quizSteps as {name, complete, displayProgress}}
    {#if displayProgress}
    <p class:complete>{name}</p>
    {/if}
    {/each}

    <a prefetch href='home'><button>Claim my Prize</button></a>

    <a prefetch href='quizmain'><button>Back to quiz</button></a>

</section>

</Trans>
<style>
    .review{
        width:50vw;
        background-color: #38424d;
        display: flex;
        flex-flow: column;
        margin: auto;
        color: #ffffff;
        padding: 65px 100px 65px 65px;
    }
   .button-holder {
	width: 27vw;
	display: flex;
    flex-flow: column nowrap;
   }
   .complete{
    background-color :#38424D;
    color: #ffffff;

   }
   p {
       background-color: #ffffff;
       color:#e94040;
       border-radius: 6px;
       border: none;
       padding: 15px 20px 15px 20px;
       font-weight: 500;
       margin: 5px;
   }
   button {
	   padding: 10px 20px;
	   margin: 10px;
	   border: black solid 0px;
	   border-radius: 8px;
   }
</style>