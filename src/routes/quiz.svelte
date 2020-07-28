<script>
  import Trans from '../components/TransHelp.svelte'

    let part = 0;
  let current = 'initial';
  import { quizSteps } from '../store.js'
</script>
<svelte:head>
	<title>Data privacy quiz</title>
</svelte:head>

<main>
    <Trans>
    {#if part === 0}
    <section>
        <h1>Welcome to Mind Your Data Challenge</h1>
        <p>
            Only for educational purpose, this test will utilize blah blah blah. There will be no personal data collected or shared... This test will only  blah blah blah and utilize blah blah blah. There will be no data... This test will only do blah blah blah and utilize blah blah blah. There will be no data... This test will only do blah blah blah and utilize blah blah blah. There will be no data... </p>
        <button on:click='{() => part = 1}'>Start Challenge</button>
    </section>
    {:else if part === 1}
    <section>
        <p id="headline">This test contains 10 unique privacy tests that will take you about 30 minutes to complete. Throught the test, we will provide...</p>
        <div class:active="{current === 'webcam'}" on:click="{() => current = 'webcam'}">
            <p>{$quizSteps[0].name}</p>
                {#if current === 'webcam'}
                <p>q1 content</p>
                {/if}
                </div>
                <hr>
        <div class:active="{current === 'https'}"
        on:click="{() => current = 'https'}">
            <p>{$quizSteps[1].name}</p>
            {#if current === 'https'}
            <p>q2 content</p>
            {/if}
        </div>
        <hr>
        <div class:active="{current === 'search'}"
        on:click="{() => current = 'search'}">
            <p>{$quizSteps[3].name}</p>
            {#if current === 'search'}
            <p>q3 content</p>
            {/if}
        </div>
        <hr>
        <div class:active="{current === 'privacy'}"
        on:click="{() => current = 'privacy'}">
            <p>{$quizSteps[4].name}</p>
            {#if current === 'privacy'}
            <p>q4 content</p>
            {/if}
        </div>
        <hr>
        <div class:active="{current === 'tracker'}"
        on:click="{() => current = 'tracker'}">
            <p>{$quizSteps[5].name}</p>
            {#if current === 'tracker'}
            <p>q5 content</p>
            {/if}
        </div>
        <hr>
        <div class:active="{current === 'dns'}"
        on:click="{() => current = 'dns'}">
            <p>{$quizSteps[6].name}</p>
            {#if current === 'dns'}
            <p>q6 content</p>
            {/if}
        </div>
        <hr>
        <div class:active="{current === 'location'}"
        on:click="{() => current = 'location'}">
            <p>{$quizSteps[8].name}</p>
            {#if current === 'location'}
            <p>q7 content</p>
            {/if}
        </div>
        <hr>
        <div class:active="{current === 'iot'}"
        on:click="{() => current = 'iot'}">
            <p>{$quizSteps[9].name}</p>
            {#if current === 'iot'}
            <p>q8 content</p>
            {/if}
        </div>
       
        <button on:click='{() => part = 2}'>Continue</button>
    </section>
    {:else} 
    <section id="chapter1">
        <h1 id="chapter">Chapter 1: Security</h1>
        <p id="permission">Through out this challenge, we need your permission to give us one time non-recurring access to your webcam to test your practice. Please click allow for one time non-recurring access to your webcame to move to the next step to complete this challenge.</p>
        <button id="start"><a rel=prefetch href='quizmain' >Start Challenge</a></button>
    </section>
    {/if}
</Trans>
    </main>

<style>
    main {
              display: flex;
              flex-flow: row;
              justify-content: center;
              margin-top: 15px;
       }
       .step{
		margin-bottom: 55px;
       }
       section{
              background: #38424D;
              width: 65vw;
              min-height: 75vh;
              /*height: 86vh; */
              border-radius: 15px;
              border: 0px;
              margin: 0px;
              padding: 9.3vh 5vw 0vh 9.3vh;
              color: #FFFFFF;
              text-align: center;
              /*margin-top: -50px;
              margin-left: 21vw;
              margin-right: 50px;
              padding-right: 15px;*/
       }
       #chapter1 {
           width: 85vw;
           background-image: url('../bg-vector.png');
           
           background-blend-mode: darken;
       }
       p{
           text-align: left;
       }
       #headline {
           font-weight: 600;
           margin-bottom: 25px;
       }
       #chapter {
           color: #73ef7b;
       }
       button{
        padding: 10px 20px;
		margin: 10px;
		border: black solid 0px;
		border-radius: 8px;
        text-decoration: none;
        }
        #start {
            background-color: #73ef7b;
        }
        a{
            text-decoration: none;        }
       .active {
           background-color: pink;
       }
       #permission {
        width: 70%;
        margin: auto;
       }
</style>