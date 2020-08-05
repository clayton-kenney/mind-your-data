<script>
	export let segment = 'home'
</script>


<style>
	nav {
		display: flex;
		flex-flow: row nowrap;
		height: 50px;
		justify-content: space-between;
		align-items: center;
		background-color: #303538;
		/*border-bottom: 1px solid rgba(255,62,0,0.1);*/
		font-weight: 300;
		padding: 0 1em;
		position: sticky;
    	top: 0px;
		left: 0px;
		z-index: 1;
	}
	ul {
		display: flex;
		list-style: none;
		justify-content: flex-end;
		margin: 0;
		padding: 0;
		
	}
	img {
		/*display: block;
		float: left;*/
		display: flex;
		justify-content: flex-start;
		height: 30px;
		margin-left: 25px;
	}
	li{
		display: flex;
		margin: 0px 20px 0px 20px;
		text-transform: uppercase;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color:#e83e40;
		display: block;
		/*bottom: -1px;*/
	}
	a {
		display: flex;
		padding: 1em 0.5em;
		text-decoration: none;
		margin: 2em, 0em;

	}
	.home {
		background-color: #f5f4f4;
		color: #303538;
	}
	.other {
		color: #c7c7c7;
	}
	#hidden {
		opacity: 0%;
	}
</style>

<nav class:home={segment == 'home'}>
	{#if segment === 'home'}
	<a href='.'><img  src='./MYDlogo_nav.png' alt="Mind your Data logo" id="hidden"></a>
	<ul >
		<li><a aria-current="{segment === 'home' ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'quiz' ? 'page' : undefined}" href="quiz">quiz</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
	</ul>
	{:else}
	<a href='.'><img  src='./MYDlogo_nav.png' alt="Mind your Data logo"></a>
	<ul id="navigation">
		<li><a aria-current="{segment === 'home' ? 'page' : undefined}" href="." class="other">home</a></li>
		<li><a aria-current="{segment === 'quiz' ? 'page' : undefined}" href="quiz" class="other">quiz</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about" class="other">about</a></li>
	</ul>
	{/if}
	
</nav>
