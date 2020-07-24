<script>
	import { onMount, createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import Trans from '../../components/TransHelp.svelte';
	import Complete from '../../components/complete.svelte'
	import Btn from '../../components/Btn.svelte' //set <Next q={2}> to skip multiple steps
	import { count, step, quizSteps } from '../../store.js'
	import Back from '../../components/Back.svelte'

	//sets aside icon to in progress via store
    onMount(async() => {$quizSteps[$count].status = 1});
</script>
<svelte:head>
	<title>Tracker blocker</title>
</svelte:head>
<Trans>
{#if $step==0}
<section>
	<h2>Tracker blocker</h2> 
	<p>Are you being tracked on the web? Almost definitely.</p>
	<p>While cookies are the little identifiers for websites to recognize you through multiple visits, trackers use those cookies to recognize you and analyze your behavior. Trackers will log the site you visit, the date and time, and your computer settings (more powerful trackers can even watch your mouse movement). </p>
	<p>A tracker like Google adsense is watching you over multiple sites to analyze your interests. You visited a car sale site yesterday? Today we show you Ads of cars. The chance is higher that you like the ad and click it instead of an ad with cats. (bad example... Everyone clicks cat ads...)
	</p>
	<p>If you change the site (eg from the front page to the news area) the tracker recognize you and combines the data - "user ABC stayed 33s in the front page and switched to the news area and stayed there for 3min". For webmaster powerful data because they know how important their front page is and where they have too change something. 
	</p>
	<p>Trackers are installed on many websites to log your behavior. Each time you open a website with a tracker (of course every sub-site of a website too). Trackers are included in the website code and are activated each time you visit the site.</p>
	<Btn>Continue</Btn>
</section>
{:else}
<section>
	<h2>Download Privacy Badger extention</h2>
	<p>When you view a webpage, that page will often be made up of content from many different sources. Privacy Badger keeps track of all of this. If as you browse the web, the same source seems to be tracking your browser across different websites, then Privacy Badger springs into action, telling your browser not to load any more content from that source. And when your browser stops loading content from a source, that source can no longer track you. Voila!</p>
	<div class="button-holder">
		<Complete>
			Download extension now
		</Complete>
		<Complete>
			Already Have it
		</Complete>
		<Complete success={false}>Don't want to download it</Complete>
	</div>
</section>
{/if}
<Back/>
</Trans>
<style>
   .button-holder {
	width: 27vw;
	display: flex;
    flex-flow: column nowrap;
   }
</style>