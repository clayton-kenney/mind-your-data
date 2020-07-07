<script>
	export let segment;
</script>

<style>
	nav {
		display: flex;
		flex-flow: row nowrap;
		height: 50px;
		justify-content: space-between;
		align-items: center;
		background-color: #3e4b59;
		/*border-bottom: 1px solid rgba(255,62,0,0.1);*/
		font-weight: 300;
		padding: 0 1em;
	}
	ul {
		display: flex;
		list-style: none;
		justify-content: flex-end;
		margin: 0;
		padding: 0;
		color: #c7c7c7;
	}
	img {
		/*display: block;
		float: left;*/
		display: flex;
		justify-content: flex-start;
		height: 30px;
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
		background-color:#e74e45;
		display: block;
		/*bottom: -1px;*/
	}
	a {
		display: flex;
		padding: 1em 0.5em;
		text-decoration: none;
		margin: 2em, 0em;

	}
</style>

<nav>
	<a href='/home'><img  src='./MYDlogo_small.png' alt="Mind your Data logo"></a>
	<ul id="navigation">
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'quiz' ? 'page' : undefined}" href="quiz">quiz</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
		<li><a aria-current="{segment === 'resources' ? 'page' : undefined}" href="resources">resources</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
	<!--	<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li> -->
	</ul>
</nav>
