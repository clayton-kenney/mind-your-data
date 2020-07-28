<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { onMount, afterUpdate, onDestroy } from 'svelte';
	import Detect from '../../components/Detect.svelte'
	import Complete from '../../components/complete.svelte'

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
<Trans>
    <h1>We must claim our right to privacy.</h1>
        <p>Agitate for change. Like most rights, privacy draws notice only after it’s gone. At that point, it’s harder to regain. Just as we see the environmental impact of the early Industrial Age, future generations will judge today’s society on how well it rose to the challenges of surveillance and massive information collection. Push for reform.</p>
    <div class="button-holder">
		<a rel=prefetch href="review"><button>See your results</button></a>
        <button >Sign a Petition</button>
        <button >Contact your Rep</button>
	</div>
<Back/>
</Trans>

<style>
   .button-holder {
	width: 27vw;
	display: flex;
    flex-flow: column nowrap;
   }
   button {
	   padding: 10px 20px;
	   margin: 10px;
	   border: black solid 0px;
	   border-radius: 8px;
   }
</style>