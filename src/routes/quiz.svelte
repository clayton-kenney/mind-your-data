<script>
  import Trans from '../components/TransHelp.svelte'
  import { slide, blur, fade, fly } from 'svelte/transition';
	import { quintOut, expoOut, sineInOut } from 'svelte/easing';
    let part = 0;
  let current = 'initial';
  import { quizSteps } from '../store.js'
</script>
<svelte:head>
	<title>Data privacy quiz</title>
</svelte:head>

<main>
    {#if part === 0}
    <section in:fly="{{delay: 1000, duration: 1000, x: 0, y: 1000, opacity: 0.0, easing: quintOut}}" out:fly="{{delay: 100, duration: 800, x: 0, y: -800, opacity: 0, easing: quintOut}}">
        <h1 id="welcome">Welcome to the Mind Your Data Challenge</h1>
        <p class="welcome-text">This module is designed to educate visitors about the implications of surveillance capitalism, empower them to take control over their own data, and equip them with tools to make change and opt use. </p>
        <p class="welcome-text">Use of this site is at your own risk. If you don't know what something means, or does, skip it.</p>
        <button on:click='{() => part = 1}' id="start-challenge">Begin</button>
    </section>
    {:else if part === 1}
    <section in:fly="{{delay: 150, duration: 800, x: 0, y: 1000, opacity: 0.0, easing: quintOut}}" out:fly="{{delay: 100, duration: 800, x: 0, y: -800, opacity: 0, easing: quintOut}}">
        <p id="headline">This test contains 8 unique privacy tests that will take no more than 30 minutes to complete. Each test will give you some background information and then suggestions on how to better protect your data and privacy. All suggestions are optional, but if you want access to awesome swag, you need to complete 90% of the test. </p>
        <div class:active="{current === 'webcam'}" on:click="{() => current = 'webcam'}" >
            <div class="caret" in:slide="{{delay: 25, duration: 500, easing: quintOut }}">
                <p>{$quizSteps[0].name}</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z" fill="white"/>
                    </svg>
            </div>
                {#if current === 'webcam'}
                <p transition:slide="{{delay: 25, duration: 500, easing: quintOut }}">Learn why it's important to cover your webcam when not in use...</p>
                {/if}
                </div>
                <hr>
        <div class:active="{current === 'https'}"
        on:click="{() => current = 'https'}" >
        <div class="caret" in:slide="{{delay: 25, duration: 500, easing: quintOut }}">
            <p>{$quizSteps[1].name}</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z" fill="white"/>
                </svg>
            </div>
            {#if current === 'https'}
            <p transition:slide="{{delay: 25, duration: 500, easing: quintOut }}">See why using a handy browser extension can easily prevent unwanted snooping...</p>
            {/if}
        </div>
        <hr>
        <div class:active="{current === 'search'}"
        on:click="{() => current = 'search'}" in:slide="{{delay: 25, duration: 500, easing: quintOut }}">
        <div class="caret">
            <p>{$quizSteps[3].name}</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z" fill="white"/>
                </svg>
            </div>
            {#if current === 'search'}
            <p transition:slide="{{delay: 25, duration: 500, easing: quintOut }}">All of the urls you visit are converted from text to numbers before being sent across the internet. Who converts this matters...</p>
            {/if}
        </div>
        <hr>
        <div class:active="{current === 'privacy'}"
        on:click="{() => current = 'privacy'}" in:slide="{{delay: 25, duration: 500, easing: quintOut }}">
        <div class="caret">
            <p>{$quizSteps[4].name}</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z" fill="white"/>
                </svg>
            </div>
            {#if current === 'privacy'}
            <p transition:slide="{{delay: 25, duration: 500, easing: quintOut }}">Your search enginee is spying on you and making money off of it. However, some are better than others...</p>
            {/if}
        </div>
        <hr>
        <div class:active="{current === 'tracker'}"
        on:click="{() => current = 'tracker' }" in:slide="{{delay: 25, duration: 500, easing: quintOut }}">
        <div class="caret">
            <p>{$quizSteps[5].name}</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z" fill="white"/>
                </svg>
            </div>
            {#if current === 'tracker'}
            <p transition:slide="{{delay: 25, duration: 500, easing: quintOut }}">Much of the surveillance of your internet browsing is done through cookies, by changing some simple settings you can better protect your data...</p>
            {/if}
        </div>
        <hr>
        <div class:active="{current === 'dns'}"
        on:click="{() => current = 'dns'}" in:slide="{{delay: 25, duration: 500, easing: quintOut }}">
        <div class="caret">
            <p>{$quizSteps[6].name}</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z" fill="white"/>
                </svg>
            </div>
            {#if current === 'dns'}
            <p transition:slide="{{delay: 25, duration: 500, easing: quintOut }}">Go a step further and block all the trackers with a nifty browser add-on, and keep your data to yourself...</p>
            {/if}
        </div>
        <hr>
        <div class:active="{current === 'location'}"
        on:click="{() => current = 'location'}" in:slide="{{delay: 25, duration: 500, easing: quintOut }}">
        <div class="caret">
            <p>{$quizSteps[8].name}</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z" fill="white"/>
                </svg>
            </div>
            {#if current === 'location'}
            <p transition:slide="{{delay: 25, duration: 500, easing: quintOut }}">Your phone tracks just about everywhere you go, and this data is commonly sold. Learn how to disable location for a little more privacy...</p>
            {/if}
        </div>
        <hr>
        <div class:active="{current === 'iot'}"
        on:click="{() => current = 'iot'}" in:slide="{{delay: 25, duration: 500, easing: quintOut }}">
        <div class="caret">
            <p>{$quizSteps[9].name}</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z" fill="white"/>
                </svg>
            </div>
            {#if current === 'iot'}
            <p transition:slide="{{delay: 25, duration: 500, easing: quintOut }}">Smart vacuums, intelligents lights, internet connect theromstats, and voice assistants are part of everyday life, but also collect and sell a lot of personal data. Learn how to gain more privacy from these devices... </p>
            {/if}
        </div>
       <div class="button-holder">
        <a rel=prefetch href='quizmain' ><button id="start">Start Challenge</button></a>
        </div>
    </section>
    <!--{:else} 
    <section id="chapter1">
        <h1 id="chapter">Chapter 1: Security</h1>
        <p id="permission">Through out this challenge, we need your permission to give us one time non-recurring access to your webcam to test your practice. Please click allow for one time non-recurring access to your webcame to move to the next step to complete this challenge.</p>
        <button id="start"><a rel=prefetch href='quizmain' >Start Challenge</a></button>
    </section> -->
    {/if}
    </main>

<style>
    main {
              display: flex;
              flex-flow: row;
              justify-content: center;
              margin-top: 15px;
              background: #38424D;
       }
       section{
              background: #38424D;
              width: 65vw;
              /*min-height: 75vh;
              height: 86vh; */
              border-radius: 15px;
              border: 0px;
              margin: auto;
              padding: 15vh 9vw;
              color: #FFFFFF;
              text-align: center;
              max-width: 62%;
              background-image: url(/bg-lock.png);
            background-repeat: no-repeat;
            background-blend-mode: darken;
            background-position: center;
       }
       #welcome {
           padding-bottom: 40px;
       }
       p{
           text-align: left;
       }
       .welcome-text {
           text-align:center;
       }
       #headline {
           font-weight: 600;
           margin-bottom: 25px;
           font-size: 20px;
       }
       /*green button*/
        #start {
            background-color: #73ef7b;
            margin-top: 50px;
        }
        #start-challenge {
            margin-top: 75px;
        }
        a{
            text-decoration: none;        }
       /*.active {
           background-color: grey;
       }*/
       .caret{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
	}
</style>