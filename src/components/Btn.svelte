<script>
    import { step, progress } from '../store.js'
    export let q =1;
    export let p = 7.6;
    export let green = false;
    export let yellow = false;
    export let red = false;
   const increase = () => {
       step.update(n => n+= q);
      progress.update(n => n += p)};
</script>
<button on:click={increase} class:green class:yellow class:red>
    <slot>

    </slot>
</button>

<style>
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
