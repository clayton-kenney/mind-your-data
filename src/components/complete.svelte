<script>
import { count, step, quizSteps, progress } from '../store.js'
export let success = true;
export let p = 7.6;
export let green = false;
export let yellow = false;
export let red = false;
//export let destoryVid = false;

//sets current icon for sidebar
function increment() {
        $quizSteps[$count].complete = true;
        $quizSteps[$count].status = 2;
        count.update(n => n + 1)
        progress.update(n => n+=p)
        step.set(0);
}
function incomplete() {
        $quizSteps[$count].complete = false;
        $quizSteps[$count].status = 0;
        count.update(n => n + 1)
        progress.update(n => n+=p)
        step.set(0);
}
</script>
{#if success}
    <button on:click={increment} class:green class:yellow class:red>
        <slot>

        </slot>
    </button>
{:else}
    <button on:click={incomplete} class:green class:yellow class:red>
        <slot>

        </slot>
    </button>
{/if}
       
<style>
    button {
        
    }
    .green {
        background-color: #73ef7b;
        color: #2C3C4E;
    }
    .yellow {
        background-color: #F1C330;
        color: #2C3C4E;
    }
    .red {
        background-color: #E74E45;
        color: #FFFFFF;
    }
</style>

