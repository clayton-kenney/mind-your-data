<script>
    import { step } from '../store.js'
    export let q =1;
   const increase = () => step.update(n => n+= q);
        
</script>
<button on:click={increase}>
    <slot>

    </slot>
</button>

<style>
    button {
            padding: 10px 20px;
			margin: 10px;
			border: black solid 0px;
			border-radius: 8px;
    }
</style>
