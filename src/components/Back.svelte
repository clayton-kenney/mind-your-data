<script>
import { count, step, quizSteps } from '../store.js'
function goBack() {
    if($count >= 1 && $step == 0) {
        alert('Are you sure you want to go back?')
        //$quizSteps[$count].complete = true;
        count.update(n => n - 1)
        $quizSteps[$count+1].status = 0;
        if ($quizSteps[$count].status != 2) {
            $quizSteps[$count].status = 1;
        }
        step.set($quizSteps[$count].steps);
    } else {
        step.update(n => n - 1)
    }
}
</script>
{#if $count >= 1}
<button on:click={() => goBack()}>
    Back
</button>
{/if}
<style>
    button {
            
            padding: 10px 20px;
			margin: 80px 10px 10px 10px;
			border: black solid 0px;
			border-radius: 8px;
           
    }
</style>