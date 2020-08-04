<script>
    import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
    import Vid from './Vid.svelte'
    import Trans from './TransHelp.svelte';
    import Complete from './complete.svelte'
	import Btn from './Btn.svelte' //set <Next q={2}> to skip multiple steps
    import { count, step, quizSteps, timerActive, progress} from '../store.js'
    import Back from './Back.svelte'

    //sets aside icon to in progress via store
   onMount(async() => {
        $quizSteps[$count].status = 1;
        timerActive.set(!$timerActive)});

</script>
{#if $step==0}
<section>
	<h1>Is your Webcam Covered?</h1> 
    <p>It’s likely your computer already has a built-in camera, and it’s possible that camera can be used to spy on you.</p>  <p>If your webcam for whatever reason has been hacked, the person on the other side can take pictures and video of anything or anyone. No, this isn’t just paranoia–a recent survey conducted by HP found that 10% of people in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.</p>
    <div class="button-holder">
    <Btn p={4.75} green={true}>Continue</Btn>
    </div>
</section>
{:else if $step==1}
<section>
	<h2>Cover Your Webcam</h2>
	<p>Cover your webcam. You can find removable stickers for this purpose, but simple fixes can be found at your home or office. You can use a sticky note or a piece of masking tape to obscure your webcam when it’s not in use. Like right now. </p>
	<div class="button-holder">
        <svelte:component this={Btn} p={4.5}>It's covered</svelte:component>
        <svelte:component this={Complete} success={false} p={4.5} >No Thanks, It's a hassle</svelte:component> 
	</div>
</section>
{:else}
<section>
   <div class="video-holder">
       <Vid></Vid>
    </div>
</section>
{/if}

<Back/>
<style>
   .video-holder{
       width: 100%;
   }
</style>