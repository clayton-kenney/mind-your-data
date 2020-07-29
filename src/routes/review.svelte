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
        $quizSteps.forEach((v) => {if(v.complete && !v.displayProgress){completed++}})});
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
    <div class="caret" class:complete>
        <p class:complete>{name}</p>
        {#if !complete}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="13" stroke="#E94040" stroke-width="2"/>
            <path d="M13.9991 6.91016L12.7493 8.15993L17.6952 13.1147H6.9082V14.8874H17.6952L12.7493 19.8422L13.9991 21.092L21.09 14.0011L13.9991 6.91016Z" fill="#E94040"/>
            </svg>
            
        {:else}
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2754 19.037C15.1206 19.037 19.0509 15.1126 19.0509 10.2685C19.0509 5.42444 15.1206 1.5 10.2754 1.5C5.43025 1.5 1.5 5.42444 1.5 10.2685C1.5 15.1126 5.43025 19.037 10.2754 19.037Z" fill="#E94040" stroke="#E94040" stroke-width="3"/>
            <path d="M8.28453 15.8272L3.87075 11.4176C3.60558 11.1527 3.60558 10.7232 3.87075 10.4583L4.83104 9.49886C5.09621 9.23391 5.52618 9.23391 5.79135 9.49886L8.76468 12.4693L15.1332 6.10689C15.3984 5.84197 15.8284 5.84197 16.0935 6.10689L17.0538 7.06629C17.319 7.3312 17.319 7.76074 17.0538 8.02568L9.24484 15.8272C8.97964 16.0921 8.5497 16.0921 8.28453 15.8272Z" fill="#303538"/>
            </svg>
        {/if}
    </div>  
    {/if}
    {/each}
    <div class="button-holder">
        <a prefetch href='home'><button>Claim my Prize</button></a>
        <a prefetch href='quizmain'><button>Back to quiz</button></a>
    </div>

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
   .complete{
        background-color :#38424D;
        color: #ffffff;

   }
   p {
       
       color:#e94040;
       font-weight: 500;
       margin: 5px;
   }
   button {
	   padding: 10px 20px;
	   margin: 10px;
	   border: black solid 0px;
	   border-radius: 8px;
   }
   .caret{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
        justify-content: space-between;
    }
    div.caret {
        background-color: #ffffff;
        border-radius: 6px;
        border: none;
        margin: 10px;
        padding: 10px 20px;
    }
</style>