<script>
    import { fly } from 'svelte/transition';
    import { sineInOut } from 'svelte/easing';
</script>
<div in:fly="{{delay: 150, duration: 800, y: 1000, opacity: 0.0, easing: sineInOut}}" out:fly="{{delay: 50, duration: 600, y: -800, opacity: 0, easing: sineInOut}}" >
    <slot>

    </slot>
</div>
<style>

</style>