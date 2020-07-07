<script>
let completed;
//pass to events to quiz components
import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
    $: num = 0;
	function sayHello() {
        num++;
		dispatch('message', {
			number: num
		});
	}

</script>
<style>
    aside {
       /* position: fixed; */
        display: block;
        top:50px;
        left:0;
        width: 27.77vw;
        height: 100vh;
        /*background-color: #e4e4e4;
        border: 2px solid #c7c7c7;*/
        padding-left: 50px;
    }
    section {
        padding: 10px 10px 20px 10px;
    }
    #timer {
        display: flex;
        flex-direction: column; 
        /*border-bottom: 1px solid #c7c7c7;*/
    }
    #remaining {
        font-size: 20px;
        padding: 5px 0px 20px 0px;
        

    }
    #minutes {
        color:white;
        background: #0F2033;
        border-radius: 6px;
        width: 9.7vw;
        height: 6.7vh;
        text-align: center;
        font-size: 30px;
        

    }
    .btn-dark {
        color:white;
        background: #0F2033;
        border-radius: 6px;
        width: 30%;
        text-align: center;
        padding: 5px 10px;
    }
    button {
        border: none;
        padding: 5px 10px;
    }
    #next-skip {
        margin: 5px 10px;
        padding: 5px 0px 20px 0px;
    }
    
</style>
<aside id='sidebar'>
    <section id="progress">
        <slot>

        </slot>
    </section>
    <!--
    <section id='next-skip'> 
        <button on:click={sayHello} class='btn-dark'>Next</button>
        <button  class='btn-dark'>Skip</button>
    </section> -->
</aside>