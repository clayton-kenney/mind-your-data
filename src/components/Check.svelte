<script>

    export let active;
    active =0;

</script>
{#if active < 1 }
    <img src='./blank_circle.svg' alt="completed" class='active lock' />
    
{:else if active > 1 }
    <img src='./checked.svg' alt="completed" class='active lock' />
  
{:else}
    <img src='./un_checked.svg' alt="completed" class='active lock' />
    
{/if}
 <style>
     .lock {
         margin: 0px 10px;
     }
 </style>