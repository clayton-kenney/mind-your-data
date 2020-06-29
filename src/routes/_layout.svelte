<script>
	import Nav from '../components/Nav.svelte';
	import Progress from '../components/Progress.svelte'

	export let segment;
</script>

<style>
	main {
		position: relative;
		background-color: white;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
<!--<Progress />-->