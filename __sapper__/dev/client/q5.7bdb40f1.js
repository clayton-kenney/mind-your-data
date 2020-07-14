import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as createEventDispatcher, v as validate_slots, p as globals, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, k as add_location, l as insert_dev, A as add_render_callback, B as create_bidirectional_transition, t as text, h as claim_text, j as attr_dev, m as append_dev, R as listen_dev, n as noop, T as run_all } from './client.7b07f8cf.js';
import { s as slide, q as quintOut, a as quintIn } from './index.42fd54b0.js';

/* src/routes/quiz/q5.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/q5.svelte";

// (45:0) {:else}
function create_else_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div;
	let button0;
	let t4;
	let t5;
	let button1;
	let t6;
	let t7;
	let button2;
	let t8;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Download Privacy Badger extention");
			t1 = space();
			p = element("p");
			t2 = text("When you view a webpage, that page will often be made up of content from many different sources. Privacy Badger keeps track of all of this. If as you browse the web, the same source seems to be tracking your browser across different websites, then Privacy Badger springs into action, telling your browser not to load any more content from that source. And when your browser stops loading content from a source, that source can no longer track you. Voila!");
			t3 = space();
			div = element("div");
			button0 = element("button");
			t4 = text("Download extension now");
			t5 = space();
			button1 = element("button");
			t6 = text("Already Have it");
			t7 = space();
			button2 = element("button");
			t8 = text("Don't want to download it");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Download Privacy Badger extention");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "When you view a webpage, that page will often be made up of content from many different sources. Privacy Badger keeps track of all of this. If as you browse the web, the same source seems to be tracking your browser across different websites, then Privacy Badger springs into action, telling your browser not to load any more content from that source. And when your browser stops loading content from a source, that source can no longer track you. Voila!");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			button0 = claim_element(div_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t4 = claim_text(button0_nodes, "Download extension now");
			button0_nodes.forEach(detach_dev);
			t5 = claim_space(div_nodes);
			button1 = claim_element(div_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t6 = claim_text(button1_nodes, "Already Have it");
			button1_nodes.forEach(detach_dev);
			t7 = claim_space(div_nodes);
			button2 = claim_element(div_nodes, "BUTTON", { class: true });
			var button2_nodes = children(button2);
			t8 = claim_text(button2_nodes, "Don't want to download it");
			button2_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 46, 1, 2146);
			add_location(p, file, 47, 1, 2190);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 49, 2, 2683);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 50, 2, 2745);
			attr_dev(button2, "class", "svelte-9jf7df");
			add_location(button2, file, 51, 2, 2800);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 48, 1, 2653);
			add_location(section, file, 45, 0, 2135);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p);
			append_dev(p, t2);
			append_dev(section, t3);
			append_dev(section, div);
			append_dev(div, button0);
			append_dev(button0, t4);
			append_dev(div, t5);
			append_dev(div, button1);
			append_dev(button1, t6);
			append_dev(div, t7);
			append_dev(div, button2);
			append_dev(button2, t8);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*complete*/ ctx[1], false, false, false),
					listen_dev(button1, "click", /*complete*/ ctx[1], false, false, false),
					listen_dev(button2, "click", /*incomplete*/ ctx[2], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(45:0) {:else}",
		ctx
	});

	return block;
}

// (33:0) {#if q==0}
function create_if_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let p1;
	let t4;
	let t5;
	let p2;
	let t6;
	let t7;
	let p3;
	let t8;
	let t9;
	let p4;
	let t10;
	let t11;
	let button;
	let t12;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Tracker blocker");
			t1 = space();
			p0 = element("p");
			t2 = text("Are you being tracked on the web? Almost definitely.");
			t3 = space();
			p1 = element("p");
			t4 = text("While cookies are the little identifiers for websites to recognize you through multiple visits, trackers use those cookies to recognize you and analyze your behavior. Trackers will log the site you visit, the date and time, and your computer settings (more powerful trackers can even watch your mouse movement).");
			t5 = space();
			p2 = element("p");
			t6 = text("A tracker like Google adsense is watching you over multiple sites to analyze your interests. You visited a car sale site yesterday? Today we show you Ads of cars. The chance is higher that you like the ad and click it instead of an ad with cats. (bad example... Everyone clicks cat ads...)");
			t7 = space();
			p3 = element("p");
			t8 = text("If you change the site (eg from the front page to the news area) the tracker recognize you and combines the data - \"user ABC stayed 33s in the front page and switched to the news area and stayed there for 3min\". For webmaster powerful data because they know how important their front page is and where they have too change something.");
			t9 = space();
			p4 = element("p");
			t10 = text("Trackers are installed on many websites to log your behavior. Each time you open a website with a tracker (of course every sub-site of a website too). Trackers are included in the website code and are activated each time you visit the site.");
			t11 = space();
			button = element("button");
			t12 = text("Continue");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Tracker blocker");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Are you being tracked on the web? Almost definitely.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "While cookies are the little identifiers for websites to recognize you through multiple visits, trackers use those cookies to recognize you and analyze your behavior. Trackers will log the site you visit, the date and time, and your computer settings (more powerful trackers can even watch your mouse movement).");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			p2 = claim_element(section_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "A tracker like Google adsense is watching you over multiple sites to analyze your interests. You visited a car sale site yesterday? Today we show you Ads of cars. The chance is higher that you like the ad and click it instead of an ad with cats. (bad example... Everyone clicks cat ads...)");
			p2_nodes.forEach(detach_dev);
			t7 = claim_space(section_nodes);
			p3 = claim_element(section_nodes, "P", {});
			var p3_nodes = children(p3);
			t8 = claim_text(p3_nodes, "If you change the site (eg from the front page to the news area) the tracker recognize you and combines the data - \"user ABC stayed 33s in the front page and switched to the news area and stayed there for 3min\". For webmaster powerful data because they know how important their front page is and where they have too change something.");
			p3_nodes.forEach(detach_dev);
			t9 = claim_space(section_nodes);
			p4 = claim_element(section_nodes, "P", {});
			var p4_nodes = children(p4);
			t10 = claim_text(p4_nodes, "Trackers are installed on many websites to log your behavior. Each time you open a website with a tracker (of course every sub-site of a website too). Trackers are included in the website code and are activated each time you visit the site.");
			p4_nodes.forEach(detach_dev);
			t11 = claim_space(section_nodes);
			button = claim_element(section_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t12 = claim_text(button_nodes, "Continue");
			button_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 34, 1, 768);
			add_location(p0, file, 35, 1, 795);
			add_location(p1, file, 36, 1, 856);
			add_location(p2, file, 37, 1, 1177);
			add_location(p3, file, 39, 1, 1477);
			add_location(p4, file, 41, 1, 1822);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 42, 1, 2071);
			add_location(section, file, 33, 0, 757);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p0);
			append_dev(p0, t2);
			append_dev(section, t3);
			append_dev(section, p1);
			append_dev(p1, t4);
			append_dev(section, t5);
			append_dev(section, p2);
			append_dev(p2, t6);
			append_dev(section, t7);
			append_dev(section, p3);
			append_dev(p3, t8);
			append_dev(section, t9);
			append_dev(section, p4);
			append_dev(p4, t10);
			append_dev(section, t11);
			append_dev(section, button);
			append_dev(button, t12);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*advance*/ ctx[3], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(33:0) {#if q==0}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let div;
	let div_transition;
	let current;

	function select_block_type(ctx, dirty) {
		if (/*q*/ ctx[0] == 0) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			t = space();
			div = element("div");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ixajda\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Tracker blocker";
			add_location(div, file, 31, 0, 672);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);
			if_block.m(div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(
					div,
					slide,
					{
						delay: 100,
						duration: 400,
						easing: quintOut
					},
					true
				);

				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(
				div,
				slide,
				{
					delay: 100,
					duration: 400,
					easing: quintOut
				},
				false
			);

			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
			if_block.d();
			if (detaching && div_transition) div_transition.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();

	//confirm comletion of quiz to master quiz component
	function complete() {
		dispatch("message", {
			question: 2, //Q-1 becaue of array
			complete: "true"
		});
	}

	function incomplete() {
		dispatch("message", {
			question: 2, //Q-1 becaue of array
			complete: "false"
		});
	}

	let q = 0;

	function advance() {
		$$invalidate(0, q++, q);
		console.log(q);
	}

	function advanceTwo() {
		$$invalidate(0, q += 2);
		console.log(q);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Q5> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q5", $$slots, []);

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		slide,
		quintOut,
		quintIn,
		complete,
		incomplete,
		q,
		advance,
		advanceTwo
	});

	$$self.$inject_state = $$props => {
		if ("q" in $$props) $$invalidate(0, q = $$props.q);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [q, complete, incomplete, advance];
}

class Q5 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q5",
			options,
			id: create_fragment.name
		});
	}
}

export default Q5;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTUuN2JkYjQwZjEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IHsgc2xpZGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG4gICAgaW1wb3J0IHsgcXVpbnRPdXQsIHF1aW50SW4gfSBmcm9tICdzdmVsdGUvZWFzaW5nJztcblx0Ly9jb25maXJtIGNvbWxldGlvbiBvZiBxdWl6IHRvIG1hc3RlciBxdWl6IGNvbXBvbmVudFxuXHRmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0XHRkaXNwYXRjaCgnbWVzc2FnZScsIHtcblx0XHRcdHF1ZXN0aW9uOiAyLCAvL1EtMSBiZWNhdWUgb2YgYXJyYXlcblx0XHRcdGNvbXBsZXRlOiAndHJ1ZSdcblx0XHR9KTtcblx0fVxuXHRmdW5jdGlvbiBpbmNvbXBsZXRlKCkge1xuXHRcdGRpc3BhdGNoKCdtZXNzYWdlJywge1xuXHRcdFx0cXVlc3Rpb246IDIsIC8vUS0xIGJlY2F1ZSBvZiBhcnJheVxuXHRcdFx0Y29tcGxldGU6ICdmYWxzZSdcblx0XHR9KTtcblx0fVxuXHRsZXQgcSA9IDA7XG5cdGZ1bmN0aW9uIGFkdmFuY2UoKSB7XG5cdFx0cSsrO1xuXHRcdGNvbnNvbGUubG9nKHEpO1xuXHR9XG5cdGZ1bmN0aW9uIGFkdmFuY2VUd28oKSB7XG5cdFx0cSs9Mjtcblx0XHRjb25zb2xlLmxvZyhxKTtcblx0fVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5UcmFja2VyIGJsb2NrZXI8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxkaXYgdHJhbnNpdGlvbjpzbGlkZT1cInt7ZGVsYXk6IDEwMCwgZHVyYXRpb246IDQwMCwgZWFzaW5nOiBxdWludE91dH19XCIgPlxueyNpZiBxPT0wfVxuPHNlY3Rpb24+XG5cdDxoMj5UcmFja2VyIGJsb2NrZXI8L2gyPiBcblx0PHA+QXJlIHlvdSBiZWluZyB0cmFja2VkIG9uIHRoZSB3ZWI/IEFsbW9zdCBkZWZpbml0ZWx5LjwvcD5cblx0PHA+V2hpbGUgY29va2llcyBhcmUgdGhlIGxpdHRsZSBpZGVudGlmaWVycyBmb3Igd2Vic2l0ZXMgdG8gcmVjb2duaXplIHlvdSB0aHJvdWdoIG11bHRpcGxlIHZpc2l0cywgdHJhY2tlcnMgdXNlIHRob3NlIGNvb2tpZXMgdG8gcmVjb2duaXplIHlvdSBhbmQgYW5hbHl6ZSB5b3VyIGJlaGF2aW9yLiBUcmFja2VycyB3aWxsIGxvZyB0aGUgc2l0ZSB5b3UgdmlzaXQsIHRoZSBkYXRlIGFuZCB0aW1lLCBhbmQgeW91ciBjb21wdXRlciBzZXR0aW5ncyAobW9yZSBwb3dlcmZ1bCB0cmFja2VycyBjYW4gZXZlbiB3YXRjaCB5b3VyIG1vdXNlIG1vdmVtZW50KS4gPC9wPlxuXHQ8cD5BIHRyYWNrZXIgbGlrZSBHb29nbGUgYWRzZW5zZSBpcyB3YXRjaGluZyB5b3Ugb3ZlciBtdWx0aXBsZSBzaXRlcyB0byBhbmFseXplIHlvdXIgaW50ZXJlc3RzLiBZb3UgdmlzaXRlZCBhIGNhciBzYWxlIHNpdGUgeWVzdGVyZGF5PyBUb2RheSB3ZSBzaG93IHlvdSBBZHMgb2YgY2Fycy4gVGhlIGNoYW5jZSBpcyBoaWdoZXIgdGhhdCB5b3UgbGlrZSB0aGUgYWQgYW5kIGNsaWNrIGl0IGluc3RlYWQgb2YgYW4gYWQgd2l0aCBjYXRzLiAoYmFkIGV4YW1wbGUuLi4gRXZlcnlvbmUgY2xpY2tzIGNhdCBhZHMuLi4pXG5cdDwvcD5cblx0PHA+SWYgeW91IGNoYW5nZSB0aGUgc2l0ZSAoZWcgZnJvbSB0aGUgZnJvbnQgcGFnZSB0byB0aGUgbmV3cyBhcmVhKSB0aGUgdHJhY2tlciByZWNvZ25pemUgeW91IGFuZCBjb21iaW5lcyB0aGUgZGF0YSAtIFwidXNlciBBQkMgc3RheWVkIDMzcyBpbiB0aGUgZnJvbnQgcGFnZSBhbmQgc3dpdGNoZWQgdG8gdGhlIG5ld3MgYXJlYSBhbmQgc3RheWVkIHRoZXJlIGZvciAzbWluXCIuIEZvciB3ZWJtYXN0ZXIgcG93ZXJmdWwgZGF0YSBiZWNhdXNlIHRoZXkga25vdyBob3cgaW1wb3J0YW50IHRoZWlyIGZyb250IHBhZ2UgaXMgYW5kIHdoZXJlIHRoZXkgaGF2ZSB0b28gY2hhbmdlIHNvbWV0aGluZy4gXG5cdDwvcD5cblx0PHA+VHJhY2tlcnMgYXJlIGluc3RhbGxlZCBvbiBtYW55IHdlYnNpdGVzIHRvIGxvZyB5b3VyIGJlaGF2aW9yLiBFYWNoIHRpbWUgeW91IG9wZW4gYSB3ZWJzaXRlIHdpdGggYSB0cmFja2VyIChvZiBjb3Vyc2UgZXZlcnkgc3ViLXNpdGUgb2YgYSB3ZWJzaXRlIHRvbykuIFRyYWNrZXJzIGFyZSBpbmNsdWRlZCBpbiB0aGUgd2Vic2l0ZSBjb2RlIGFuZCBhcmUgYWN0aXZhdGVkIGVhY2ggdGltZSB5b3UgdmlzaXQgdGhlIHNpdGUuPC9wPlxuXHQ8YnV0dG9uIG9uOmNsaWNrPXthZHZhbmNlfT5Db250aW51ZTwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuezplbHNlfVxuPHNlY3Rpb24+XG5cdDxoMj5Eb3dubG9hZCBQcml2YWN5IEJhZGdlciBleHRlbnRpb248L2gyPlxuXHQ8cD5XaGVuIHlvdSB2aWV3IGEgd2VicGFnZSwgdGhhdCBwYWdlIHdpbGwgb2Z0ZW4gYmUgbWFkZSB1cCBvZiBjb250ZW50IGZyb20gbWFueSBkaWZmZXJlbnQgc291cmNlcy4gUHJpdmFjeSBCYWRnZXIga2VlcHMgdHJhY2sgb2YgYWxsIG9mIHRoaXMuIElmIGFzIHlvdSBicm93c2UgdGhlIHdlYiwgdGhlIHNhbWUgc291cmNlIHNlZW1zIHRvIGJlIHRyYWNraW5nIHlvdXIgYnJvd3NlciBhY3Jvc3MgZGlmZmVyZW50IHdlYnNpdGVzLCB0aGVuIFByaXZhY3kgQmFkZ2VyIHNwcmluZ3MgaW50byBhY3Rpb24sIHRlbGxpbmcgeW91ciBicm93c2VyIG5vdCB0byBsb2FkIGFueSBtb3JlIGNvbnRlbnQgZnJvbSB0aGF0IHNvdXJjZS4gQW5kIHdoZW4geW91ciBicm93c2VyIHN0b3BzIGxvYWRpbmcgY29udGVudCBmcm9tIGEgc291cmNlLCB0aGF0IHNvdXJjZSBjYW4gbm8gbG9uZ2VyIHRyYWNrIHlvdS4gVm9pbGEhPC9wPlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2NvbXBsZXRlfT5Eb3dubG9hZCBleHRlbnNpb24gbm93PC9idXR0b24+XG5cdFx0PGJ1dHRvbiBvbjpjbGljaz17Y29tcGxldGV9PkFscmVhZHkgSGF2ZSBpdDwvYnV0dG9uPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2luY29tcGxldGV9PkRvbid0IHdhbnQgdG8gZG93bmxvYWQgaXQ8L2J1dHRvbj5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57L2lmfVxuPC9kaXY+XG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FpRG9CLEdBQVE7K0NBQ1IsR0FBUTtpREFDUixHQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQVRYLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVZyQixHQUFDLE9BQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQURnQixLQUFLLEVBQUUsR0FBRztNQUFFLFFBQVEsRUFBRSxHQUFHO01BQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztLQUEzQyxLQUFLLEVBQUUsR0FBRztLQUFFLFFBQVEsRUFBRSxHQUFHO0tBQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E3QjdELFFBQVEsR0FBRyxxQkFBcUI7OztVQUk3QixRQUFRO0VBQ2hCLFFBQVEsQ0FBQyxTQUFTO0dBQ2pCLFFBQVEsRUFBRSxDQUFDO0dBQ1gsUUFBUSxFQUFFLE1BQU07Ozs7VUFHVCxVQUFVO0VBQ2xCLFFBQVEsQ0FBQyxTQUFTO0dBQ2pCLFFBQVEsRUFBRSxDQUFDO0dBQ1gsUUFBUSxFQUFFLE9BQU87Ozs7S0FHZixDQUFDLEdBQUcsQ0FBQzs7VUFDQSxPQUFPO2tCQUNmLENBQUM7RUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7OztVQUVMLFVBQVU7a0JBQ2xCLENBQUMsSUFBRSxDQUFDO0VBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
