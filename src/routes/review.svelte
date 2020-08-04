<script>
	import { onMount, beforeUpdate, createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import Trans from '../components/TransHelp.svelte';
	import Complete from '../components/complete.svelte' //set success={false} for failure
	import Btn from '../components/Btn.svelte' //set <Next q={2}> to skip multiple steps p=7.4 for progress
	import { count, step, quizSteps } from '../store.js'
	import Back from '../components/Back.svelte'

    let s;
    let comp = 0;
	//sets aside icon to in progress via store
    onMount(async() => {
        
        $quizSteps[$count].status = 1;
        $quizSteps.forEach((v) => {
            if(v.complete && v.displayProgress){
                comp++;
            }
        })
        step.set(0);
        let percentComplete;
        percentComplete = (comp/8) * 100;
        console.log(percentComplete);
        if (percentComplete < 33) {
            s = 1;
        } else if (percentComplete < 90) {
            s=2;
        } else {
            s=3;
        }
    });
    let current = 'initial';
    

</script>
<svelte:head>
	<title>Mind Your Data</title>
</svelte:head>
<Trans>
<main>
<section class='review'>
    {#if $step === 0}
    <h2>You have completed {comp} / 8 challenges!</h2>
    
    {#each $quizSteps as {name, complete, displayProgress}}
    {#if displayProgress}
    
        {#if !complete}
        <div id="incomplete" class="caret" >
            <p>{name}</p>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="13" stroke="#E94040" stroke-width="2"/>
            <path d="M13.9991 6.91016L12.7493 8.15993L17.6952 13.1147H6.9082V14.8874H17.6952L12.7493 19.8422L13.9991 21.092L21.09 14.0011L13.9991 6.91016Z" fill="#E94040"/>
            </svg>
        </div>
        {:else}
        <div id="complete" class="caret" >
            <p>{name}</p>
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2754 19.037C15.1206 19.037 19.0509 15.1126 19.0509 10.2685C19.0509 5.42444 15.1206 1.5 10.2754 1.5C5.43025 1.5 1.5 5.42444 1.5 10.2685C1.5 15.1126 5.43025 19.037 10.2754 19.037Z" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="3"/>
            <path d="M8.28453 15.8272L3.87075 11.4176C3.60558 11.1527 3.60558 10.7232 3.87075 10.4583L4.83104 9.49886C5.09621 9.23391 5.52618 9.23391 5.79135 9.49886L8.76468 12.4693L15.1332 6.10689C15.3984 5.84197 15.8284 5.84197 16.0935 6.10689L17.0538 7.06629C17.319 7.3312 17.319 7.76074 17.0538 8.02568L9.24484 15.8272C8.97964 16.0921 8.5497 16.0921 8.28453 15.8272Z" fill="#303538"/>
            </svg>
        </div> 
        {/if}
     
    {/if}
    {/each}
    <div class="button-holder">
       <Btn p={0} q={s}>Claim my Prize</Btn>
        <a prefetch href='quizmain'><button>Back to quiz</button></a>
    </div>
    {:else if $step === 1}
    <div class="prize1">
        <h3>Congrats!</h3>
            <p>You didn't abandon us</p>
        <h1>Level1</h1>
        <h2>Maybe try harder next time...</h2>
        <img src="poster_mock.jpg" alt="mind your data poster on the street at night"/>
            <p>Prize: A radical mind your data poster. <br>Download it, and print it at home.</p>
        <div class="button-holder"> 
           <a href="./MindYourDataPoster.pdf" download=""> <Btn q={0} p={0}>Download the poster</Btn></a>
        </div>
    </div>
    {:else if $step === 2}
    <div class="prize1">
        <h3>Congrats!</h3>
            <p>You didn't abandon us, and learned a little about data privacy</p>
        <h1>Level 2</h1>
        <h2>Not too shabby</h2>
        <img src="./pins.jpg" alt="women wearing mind your data pins which is the prize for this level"/>
            <p>Prize: Mind your data pin set. Availible for purchase only for a select group of people.(coming soon)</p>
            
        <div class="button-holder"> 
            <Btn q={0} p={0} disabled={true}>Claim your pins<br> (coming soon)</Btn>
        </div>
    </div>
    {:else}
    <div class="prize1">
        <h3>Congrats!</h3>
            <p>You made it all the way through.<br>We are impressed!</p>
        <h1>Level 3: Grand Awesome Person of Privacy</h1>
        <h2>Thanks for caring</h2>
            <p>Prize: Access to a super limited editon Mind Your Data T-shirt. Only 50 made, for those dedicated to privacy.</p>
        <img src="./shirt_mock.jpg" alt="mind your data shirt on a model"/>
        <div class="button-holder"> 
            <Btn q={0} p={0}>Buy your shirt!!<br> (coming soon)</Btn>
        </div>
    </div>
    {/if}

</section>
</main>
</Trans>
<style>
    main{
        background-color: #303538;
    }
    .review{
        width:50vw;
        background-color: #38424d;
        display: flex;
        flex-flow: column;
        margin: auto;
        color: #ffffff;
        padding: 65px 100px 65px 65px;
        /*height: 100vh;*/
    }
   #complete{
        background-color :#38424D;
        color: #ffffff;
        font-weight: 500;
        margin: 5px;

   }
   #incomplete{
    background-color :#ffffff;
    color: #e94040;
    font-weight: 500;
    margin: 5px;

   }
   .caret{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
        justify-content: space-between;
    }
    div.caret {
        border-radius: 6px;
        border: none;
        margin: 10px;
        padding: 10px 20px;
       
    }
    .prize1 {
        color: #ffffff;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        text-align: center;

    }
    img {
        width: 100%;
        border-radius: 6px;

    }
</style>