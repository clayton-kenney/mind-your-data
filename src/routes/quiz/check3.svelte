<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { onMount, afterUpdate } from 'svelte';
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
    <h1>How  to make change?</h1>
        <p>It started with the internet, then google realized that they had a data surplus, and our behavior has value. Now they sell it to the highest bidder.
            </p>
    <div class="button-holder">
		<Complete>Continue Challenge</Complete>
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