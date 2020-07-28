<script>
import { count, step, quizSteps, progress } from '../store.js'
let p = 7.6;
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
<div id="back" on:click={() => {goBack()
    progress.update(n => n-=p)
}}>
<svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 15.885L4.20108 9L11 2.115L8.90688 0L0 9L8.90688 18L11 15.885Z" fill="#757575"/>
    </svg> Back
</div>
{/if}
<style>
    #back {
        display: flex;
        position: inherit;
        bottom: 72px;
        flex-flow: row nowrap;
        align-items: center;
        color: #757575;
        margin: 20px 0px;

    }
    svg {
        margin-right: 20px;
        fill: #757575;
    }
</style>