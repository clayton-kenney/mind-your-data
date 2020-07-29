<script>
    export let color;
    export let active;
    active =0;

</script>
{#if active < 1 }
    <svg class="lock" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9.83301" cy="9.99805" r="6.62305" fill="#303538"/>
    </svg>

    
{:else if active > 1 }
    <svg class="lock" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10.5986" cy="10.1211" r="10" fill="{color}"/>
    <path d="M8.42125 14.9815L4.00747 10.5719C3.7423 10.307 3.7423 9.87749 4.00747 9.61255L4.96776 8.65315C5.23293 8.38821 5.6629 8.38821 5.92808 8.65315L8.90141 11.6236L15.27 5.26119C15.5351 4.99627 15.9651 4.99627 16.2303 5.26119L17.1906 6.22058C17.4557 6.4855 17.4557 6.91504 17.1906 7.17998L9.38156 14.9815C9.11637 15.2464 8.68642 15.2464 8.42125 14.9815Z" fill="#303538"/>
    </svg>
    
  
{:else}
<svg class="lock" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="{color}"/>
    <circle cx="9.83301" cy="9.99805" r="6.62305" fill="#303538"/>
    </svg>
    
{/if}
 <style>
     .lock {
         margin: auto;
     }
 </style>