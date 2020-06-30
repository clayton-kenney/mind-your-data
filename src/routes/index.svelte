<style>
	main {
		width: 100%;
	}
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}
	
	.hero {
		background-color: #3e4b59;
		padding-left: 80px;
		padding-top: 30vh;
		width: 100%;
		height: 60vh;
	}
	.hero p {
		margin: 1em auto;
		color: white;
	}
	h1 {
		font-size: 2.8em;
		text-align: left;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		color: white;
		letter-spacing: 25%;
	}
	h2 {
		text-align: left;
		margin: auto;
		text-transform: uppercase;
	}
	h3 {
		text-align: center;
		margin: auto;
	}
	.bigImg {
		max-width: 1400px;
		background-color: grey;
	}

	figure {
		margin: 0 0 1em 0;
	}
	button {
		background: #7AAF54;
		text-transform: uppercase;
		padding: 10px 20px 10px 20px;
		font-size: 30px;
		line-height: 38px;
		border: none;
		border-radius: 10px;
		color: white;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}
	.about {
		padding: 1.5em;
	}
	p {
		color: black;
		text-align: left;
	}
	ul {
		display: flex;
		flex-direction: row;
		
		list-style: none;
		margin-block-start: 0px;
		margin-block-end: 0px;
		padding-inline-start: 0px;
	}
	li {
		justify-content: space-around;
		margin: auto;
	}
	.why{
		padding-left: 80px;
		margin: 1em auto;
	}
	.why h2 {
		text-transform: uppercase;
		text-align: left;
	}
	a {
		text-decoration: none;
		padding: 4px 30px;
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Mind Your Data: Aka Fuck surveillance capitalism</title>
</svelte:head>

<div class="hero">
	<h1>Mind Your Data</h1>
	<p >We believe that everyone in this world should be the only owner of our data.<br>
		But most of us blah blah blah </p>
	<button><a rel=prefetch href="quiz">Start the lesson</a></button>
</div>
<ul>
	<li class='about'>
		<h3>Who We Are</h3>
		<p class='about'>For anyone concerned about loss of privacy and the implications it has for our democracy, Mind your Data educates, and empowers citizens to fight for a more equitable form of survillance capitalism because, our future freedom to privacy depends on the actions we take now.</p>
	</li>
	<li class='about'>		
		<h3>Our Mission</h3>
		<p class='about'>We are to educate people about the implications of surveillance capitalism and empower them to Opt out and to help bring forth institutions, regulations, and laws to promote a social form of surveillance capitalism that serves all. </p>
	</li>
	<li class='about'>		
		<h3>Somethign Else</h3>
		<p class='about'>We are to educate people about the implications of surveillance capitalism and empower them to Opt out and to help bring forth institutions, regulations, and laws to promote a social form of surveillance capitalism that serves all. </p>
	</li>
</ul>
<img src='./1400x450.png' class="bigImg" alt='placeholder'>
<h2 class='why'>Why it matters</h2>
	<p class="why">I'm baby mixtape selfies duis before they sold out cronut iPhone. Butcher duis williamsburg food truck sustainable quis next level ipsum thundercats synth. Schlitz umami in meggings yuccie food truck. Fashion axe crucifix laboris asymmetrical jean shorts dolore. Freegan chillwave fashion axe vice pinterest bicycle rights vaporware four loko af eiusmod raw denim. Vexillologist fingerstache organic yr poke, lyft nulla portland heirloom elit marfa brunch. Bushwick deep v ut, thundercats air plant banjo palo santo taxidermy succulents before they sold out put a bird on it live-edge hoodie hella.
	</p>
