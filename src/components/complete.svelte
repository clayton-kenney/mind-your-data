<script>
import { count } from '../store.js'
import { onMount, createEventDispatcher } from 'svelte';
import { quizSteps } from '../store.js'
const dispatch = createEventDispatcher();


//sets current icon for sidebar
function increment() {
        $quizSteps[$count].complete = true;
        $quizSteps[$count].status = 2;
        count.update(n => n + 1)
        console.log($quizSteps);
    }
</script>
<button on:click={increment}>
    <slot>

    </slot>
</button>
<style>
    button {
        color:white;
		background: #0F2033;
		border-radius: 6px;
		width: 30%;
		text-align: center;
		padding: 5px 10px;
        border: none;
    }
</style>

