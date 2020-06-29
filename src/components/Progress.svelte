<script>
//export let past;
export let current;
export let next;
//export let next;
//export let q;
import { createEventDispatcher } from 'svelte';
import { onMount } from 'svelte';

	const dispatch = createEventDispatcher();
    let num = 0;
    onMount(() => {
        dispatch('message', {
			number: num
        });
});
	function nextQ() {
        num++;
		dispatch('message', {
			number: num
        });
    }
    function skipQ() {
        num+=2;
		dispatch('message', {
			number: num
        });
	}

</script>
<style>
    aside {
        position: fixed;
        top:55px;
        right:0;
        width: 25%;
        height: 100%;
        background-color: #e4e4e4;
        padding: 10px;
    }
</style>
<aside id='sidebar'>
    <section id="timer"><p>time remianing</p>
        <button>pause</button></section>
    
    <section id="progress">
        <ul>
            <!--<li>{past}</li>-->
            <li>{current}</li>
            <li>{next}</li>
        </ul>
    </section>
    <section id='next-skip'> 
        <button on:click={nextQ}>
            Next
        </button>
        <button on:click={skipQ}>
            Skip
        </button>
        <!--<button on:click={handleClickMinus}>Skip</button>-->
    </section>
</aside>

