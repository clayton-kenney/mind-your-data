<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { onMount, afterUpdate } from 'svelte';
	import Detect from '../../components/Detect.svelte'
    import Trans from '../../components/TransHelp.svelte';

	//confirm comletion of quiz to master quiz component
	function complete() {
		dispatch('message', {
			question: 7, //Q-1 becaue of array
			complete: 'true'
		});
	}
	function incomplete() {
		dispatch('message', {
			question: 7, //Q-1 becaue of array
			complete: 'false'
		});
	}
	let q = 0;
	function advance() {
		q++;
		console.log(q);
	}
	function advanceTwo() {
		q+=2;
		console.log(q);
	}
</script>
<svelte:head>
	<title>Surveillance Capitalism How did this happen?</title>
</svelte:head>
<Trans>
    <h1>Surveillance Capitalism How did this happen?</h1>
        <p>(I’m thinking spruced up version of the predictions market or surveillance capitalism flow)

            It started with the internet, then google realized that they had a data surplus, and our behavior has value. Now they sell it to the highest bidder.
            </p>
    <div class="button-holder">
        <button on:click={complete}>Continue Challege</button>
        
    </div>
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