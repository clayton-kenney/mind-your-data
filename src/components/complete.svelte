<script>
import { count, step, quizSteps } from '../store.js'
export let success = true;

//sets current icon for sidebar
function increment() {
        $quizSteps[$count].complete = true;
        $quizSteps[$count].status = 2;
        count.update(n => n + 1)
        step.set(0);
}
function incomplete() {
        $quizSteps[$count].complete = false;
        $quizSteps[$count].status = 0;
        count.update(n => n + 1)
        step.set(0);
}
</script>
{#if success}
    <button on:click={increment}>
        <slot>

        </slot>
    </button>
{:else}
    <button on:click={incomplete}>
        <slot>

        </slot>
    </button>
{/if}
       
<style>
    button {
        padding: 10px 20px;
			margin: 10px;
			border: black solid 0px;
			border-radius: 8px;
    }
</style>

