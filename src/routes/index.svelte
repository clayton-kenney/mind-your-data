<script>
    import { fade, blur } from 'svelte/transition';
    import { quintInOut } from 'svelte/easing';
    import { onMount } from 'svelte';
    import Trans from '../components/TransHelp.svelte'
    let visible = false;
    onMount(() => visible = true)
</script>
<Trans>
<div id="logo-holder">
    <div>
    {#if visible}
    <a prefetch href="quiz">
    <img src="MYDlogo_large.png" alt="Mind your data logo, click to enter" in:fade="{{delay: 3000, duration: 9000, }}" out:blur="{{delay: 0, duration: 1000}}"></a>
    {/if}
    </div>
</div>
</Trans>
<style>
    #logo-holder{
    background-color: white;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    }
    img {
        width: 800px;
    }
</style>