<script>
    import { slide } from 'svelte/transition';
    import { quintOut, quintIn } from 'svelte/easing';
</script>
<svelte:head>
	<title>Data privacy quiz</title>
</svelte:head>
<div transition:slide="{{delay: 100, duration: 400, easing: quintOut}}" >

<h1>Welcome to Mind Your Data Quiz</h1>
<p>
Only for educational purpose, this test will utilize blah blah blah. 
There will be no personal data collected or shared... 
This test will only  blah blah blah and utilize blah blah blah. </p>
<h2>this should get converted into a modal</h2>
<button>
    <a rel=prefetch href='.'>cancel</a>
    </button>
<button id="agree"><a rel=prefetch href='quizmain' >Agree</a></button>
</div>
<style>
    a {
        text-decoration: none;
    }
    #agree{
        float: right;
    }
</style>