<script>
 import Quiz0 from'./quiz/q0.svelte'
 import Quiz1 from'./quiz/q1.svelte'

let q =0;
let next = '<q0 />';
let b = next;
function nextSection() {
    q++;
   next = "{q"+q+"}";
}


</script>
<svelte:head>
	<title>Test your knowledge</title>
</svelte:head>

<main>
<button on:click={nextSection}>
	Click me
</button>
    {b};

</main>