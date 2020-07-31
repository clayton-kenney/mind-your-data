<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { onMount, afterUpdate, onDestroy } from 'svelte';
	import Complete from '../../components/complete.svelte'
	import Btn from '../../components/Btn.svelte' //set <Next q={2}> to skip multiple steps
    import Trans from '../../components/TransHelp.svelte';
 //sets aside icon to in progress via store
 import { count, quizSteps, timerActive } from '../../store.js'
 import Back from '../../components/Back.svelte'
	onMount(async() => {
		$quizSteps[$count].status = 1;
		timerActive.set(!$timerActive);
	});
	onDestroy(() => timerActive.set(!$timerActive))
</script>
<svelte:head>
	<title>How  to make change?</title>
</svelte:head>
<Trans id="main-content">
	<section>
		<div>
    <h1>We must claim our right to privacy.</h1>
        <p>Agitate for change. Like most rights, privacy draws notice only after it’s gone. At that point, it’s harder to regain. Just as we see the environmental impact of the early Industrial Age, future generations will judge today’s society on how well it rose to the challenges of surveillance and massive information collection. Push for reform.</p>
    <div class="button-holder">
		<a rel=prefetch href="review"><Btn p={0}>See your results</Btn></a>
        <button >Sign a Petition</button>
        <button >Contact your Rep</button>
	</div>
	</div>
<Back/>
</section>
</Trans>

<style>
   section{
			width:100vw;
			height: 100vh;
			background-image: url(https://images.unsplash.com/photo-1557411732-1797a9171fcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80);
			background-size: contain;
			padding-top: 15px;
   }
   div {
	width: 50%;
              margin: auto;
              background: #38424D; 
              border: none;
              border-radius: 15px;
              padding: 9.3vh 5vw 0vh 9.3vh;
              color: #FFFFFF;
   }
  
   strong {
	   font-weight: 700;
	   font-size: 22px;
   }
   
</style>