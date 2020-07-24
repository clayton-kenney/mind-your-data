<script>
    export let active;
    active =0;
</script>

{#if active < 1 }
    <img src='./blank_circle.svg' alt="completed" class='active lock' />
    <img src='./Ellipse-active.png' alt="completed" class='ellipse active' />
    <img src='./Ellipse-active.png' alt="completed" class='ellipse inactive' />
{:else if active > 1 }
    <img src='./checked.svg' alt="completed" class='active lock' />
    <img src='./Ellipse-active.png' alt="completed" class='ellipse active' />
    <img src='./Ellipse-active.png' alt="completed" class='ellipse inactive' />
{:else}
    <img src='./un_checked.svg' alt="completed" class='active lock' />
    <img src='./Ellipse-active.png' alt="completed" class='ellipse active' />
    <img src='./Ellipse-active.png' alt="completed" class='ellipse inactive' />
{/if}
 <style>
     

 </style>