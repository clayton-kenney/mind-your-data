import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as createEventDispatcher, v as validate_slots, p as globals, a as space, T as empty, q as query_selector_all, b as detach_dev, c as claim_space, l as insert_dev, n as noop, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev, P as listen_dev, U as run_all } from './client.a268fa6b.js';

/* src/routes/quiz/q5.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/q5.svelte";

// (43:0) {:else}
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
			add_location(h2, file, 44, 1, 1973);
			add_location(p, file, 45, 1, 2017);
			attr_dev(button0, "class", "svelte-bxeuvx");
			add_location(button0, file, 47, 2, 2510);
			attr_dev(button1, "class", "svelte-bxeuvx");
			add_location(button1, file, 48, 2, 2572);
			attr_dev(button2, "class", "svelte-bxeuvx");
			add_location(button2, file, 49, 2, 2627);
			attr_dev(div, "class", "button-holder svelte-bxeuvx");
			add_location(div, file, 46, 1, 2480);
			add_location(section, file, 43, 0, 1962);
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
		source: "(43:0) {:else}",
		ctx
	});

	return block;
}

// (31:0) {#if q==0}
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
			add_location(h2, file, 32, 1, 595);
			add_location(p0, file, 33, 1, 622);
			add_location(p1, file, 34, 1, 683);
			add_location(p2, file, 35, 1, 1004);
			add_location(p3, file, 37, 1, 1304);
			add_location(p4, file, 39, 1, 1649);
			attr_dev(button, "class", "svelte-bxeuvx");
			add_location(button, file, 40, 1, 1898);
			add_location(section, file, 31, 0, 584);
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
		source: "(31:0) {#if q==0}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*q*/ ctx[0] == 0) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			t = space();
			if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ixajda\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			document.title = "Tracker blocker";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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
		$$invalidate(0, q++, q);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTUuMGFkNDVkYjAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblxuXHQvL2NvbmZpcm0gY29tbGV0aW9uIG9mIHF1aXogdG8gbWFzdGVyIHF1aXogY29tcG9uZW50XG5cdGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuXHRcdGRpc3BhdGNoKCdtZXNzYWdlJywge1xuXHRcdFx0cXVlc3Rpb246IDIsIC8vUS0xIGJlY2F1ZSBvZiBhcnJheVxuXHRcdFx0Y29tcGxldGU6ICd0cnVlJ1xuXHRcdH0pO1xuXHR9XG5cdGZ1bmN0aW9uIGluY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMiwgLy9RLTEgYmVjYXVlIG9mIGFycmF5XG5cdFx0XHRjb21wbGV0ZTogJ2ZhbHNlJ1xuXHRcdH0pO1xuXHR9XG5cdGxldCBxID0gMDtcblx0ZnVuY3Rpb24gYWR2YW5jZSgpIHtcblx0XHRxKys7XG5cdFx0Y29uc29sZS5sb2cocSk7XG5cdH1cblx0ZnVuY3Rpb24gYWR2YW5jZVR3bygpIHtcblx0XHRxKys7XG5cdFx0Y29uc29sZS5sb2cocSk7XG5cdH1cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+VHJhY2tlciBibG9ja2VyPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG57I2lmIHE9PTB9XG48c2VjdGlvbj5cblx0PGgyPlRyYWNrZXIgYmxvY2tlcjwvaDI+IFxuXHQ8cD5BcmUgeW91IGJlaW5nIHRyYWNrZWQgb24gdGhlIHdlYj8gQWxtb3N0IGRlZmluaXRlbHkuPC9wPlxuXHQ8cD5XaGlsZSBjb29raWVzIGFyZSB0aGUgbGl0dGxlIGlkZW50aWZpZXJzIGZvciB3ZWJzaXRlcyB0byByZWNvZ25pemUgeW91IHRocm91Z2ggbXVsdGlwbGUgdmlzaXRzLCB0cmFja2VycyB1c2UgdGhvc2UgY29va2llcyB0byByZWNvZ25pemUgeW91IGFuZCBhbmFseXplIHlvdXIgYmVoYXZpb3IuIFRyYWNrZXJzIHdpbGwgbG9nIHRoZSBzaXRlIHlvdSB2aXNpdCwgdGhlIGRhdGUgYW5kIHRpbWUsIGFuZCB5b3VyIGNvbXB1dGVyIHNldHRpbmdzIChtb3JlIHBvd2VyZnVsIHRyYWNrZXJzIGNhbiBldmVuIHdhdGNoIHlvdXIgbW91c2UgbW92ZW1lbnQpLiA8L3A+XG5cdDxwPkEgdHJhY2tlciBsaWtlIEdvb2dsZSBhZHNlbnNlIGlzIHdhdGNoaW5nIHlvdSBvdmVyIG11bHRpcGxlIHNpdGVzIHRvIGFuYWx5emUgeW91ciBpbnRlcmVzdHMuIFlvdSB2aXNpdGVkIGEgY2FyIHNhbGUgc2l0ZSB5ZXN0ZXJkYXk/IFRvZGF5IHdlIHNob3cgeW91IEFkcyBvZiBjYXJzLiBUaGUgY2hhbmNlIGlzIGhpZ2hlciB0aGF0IHlvdSBsaWtlIHRoZSBhZCBhbmQgY2xpY2sgaXQgaW5zdGVhZCBvZiBhbiBhZCB3aXRoIGNhdHMuIChiYWQgZXhhbXBsZS4uLiBFdmVyeW9uZSBjbGlja3MgY2F0IGFkcy4uLilcblx0PC9wPlxuXHQ8cD5JZiB5b3UgY2hhbmdlIHRoZSBzaXRlIChlZyBmcm9tIHRoZSBmcm9udCBwYWdlIHRvIHRoZSBuZXdzIGFyZWEpIHRoZSB0cmFja2VyIHJlY29nbml6ZSB5b3UgYW5kIGNvbWJpbmVzIHRoZSBkYXRhIC0gXCJ1c2VyIEFCQyBzdGF5ZWQgMzNzIGluIHRoZSBmcm9udCBwYWdlIGFuZCBzd2l0Y2hlZCB0byB0aGUgbmV3cyBhcmVhIGFuZCBzdGF5ZWQgdGhlcmUgZm9yIDNtaW5cIi4gRm9yIHdlYm1hc3RlciBwb3dlcmZ1bCBkYXRhIGJlY2F1c2UgdGhleSBrbm93IGhvdyBpbXBvcnRhbnQgdGhlaXIgZnJvbnQgcGFnZSBpcyBhbmQgd2hlcmUgdGhleSBoYXZlIHRvbyBjaGFuZ2Ugc29tZXRoaW5nLiBcblx0PC9wPlxuXHQ8cD5UcmFja2VycyBhcmUgaW5zdGFsbGVkIG9uIG1hbnkgd2Vic2l0ZXMgdG8gbG9nIHlvdXIgYmVoYXZpb3IuIEVhY2ggdGltZSB5b3Ugb3BlbiBhIHdlYnNpdGUgd2l0aCBhIHRyYWNrZXIgKG9mIGNvdXJzZSBldmVyeSBzdWItc2l0ZSBvZiBhIHdlYnNpdGUgdG9vKS4gVHJhY2tlcnMgYXJlIGluY2x1ZGVkIGluIHRoZSB3ZWJzaXRlIGNvZGUgYW5kIGFyZSBhY3RpdmF0ZWQgZWFjaCB0aW1lIHlvdSB2aXNpdCB0aGUgc2l0ZS48L3A+XG5cdDxidXR0b24gb246Y2xpY2s9e2FkdmFuY2V9PkNvbnRpbnVlPC9idXR0b24+XG48L3NlY3Rpb24+XG57OmVsc2V9XG48c2VjdGlvbj5cblx0PGgyPkRvd25sb2FkIFByaXZhY3kgQmFkZ2VyIGV4dGVudGlvbjwvaDI+XG5cdDxwPldoZW4geW91IHZpZXcgYSB3ZWJwYWdlLCB0aGF0IHBhZ2Ugd2lsbCBvZnRlbiBiZSBtYWRlIHVwIG9mIGNvbnRlbnQgZnJvbSBtYW55IGRpZmZlcmVudCBzb3VyY2VzLiBQcml2YWN5IEJhZGdlciBrZWVwcyB0cmFjayBvZiBhbGwgb2YgdGhpcy4gSWYgYXMgeW91IGJyb3dzZSB0aGUgd2ViLCB0aGUgc2FtZSBzb3VyY2Ugc2VlbXMgdG8gYmUgdHJhY2tpbmcgeW91ciBicm93c2VyIGFjcm9zcyBkaWZmZXJlbnQgd2Vic2l0ZXMsIHRoZW4gUHJpdmFjeSBCYWRnZXIgc3ByaW5ncyBpbnRvIGFjdGlvbiwgdGVsbGluZyB5b3VyIGJyb3dzZXIgbm90IHRvIGxvYWQgYW55IG1vcmUgY29udGVudCBmcm9tIHRoYXQgc291cmNlLiBBbmQgd2hlbiB5b3VyIGJyb3dzZXIgc3RvcHMgbG9hZGluZyBjb250ZW50IGZyb20gYSBzb3VyY2UsIHRoYXQgc291cmNlIGNhbiBubyBsb25nZXIgdHJhY2sgeW91LiBWb2lsYSE8L3A+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PGJ1dHRvbiBvbjpjbGljaz17Y29tcGxldGV9PkRvd25sb2FkIGV4dGVuc2lvbiBub3c8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtjb21wbGV0ZX0+QWxyZWFkeSBIYXZlIGl0PC9idXR0b24+XG5cdFx0PGJ1dHRvbiBvbjpjbGljaz17aW5jb21wbGV0ZX0+RG9uJ3Qgd2FudCB0byBkb3dubG9hZCBpdDwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbnsvaWZ9XG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgYnV0dG9uIHtcblx0ICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHQgICBtYXJnaW46IDEwcHg7XG5cdCAgIGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHQgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBK0NvQixHQUFROytDQUNSLEdBQVE7aURBQ1IsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFUWCxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVnJCLEdBQUMsT0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BNUJGLFFBQVEsR0FBRyxxQkFBcUI7OztVQUc3QixRQUFRO0VBQ2hCLFFBQVEsQ0FBQyxTQUFTO0dBQ2pCLFFBQVEsRUFBRSxDQUFDO0dBQ1gsUUFBUSxFQUFFLE1BQU07Ozs7VUFHVCxVQUFVO0VBQ2xCLFFBQVEsQ0FBQyxTQUFTO0dBQ2pCLFFBQVEsRUFBRSxDQUFDO0dBQ1gsUUFBUSxFQUFFLE9BQU87Ozs7S0FHZixDQUFDLEdBQUcsQ0FBQzs7VUFDQSxPQUFPO2tCQUNmLENBQUM7RUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7OztVQUVMLFVBQVU7a0JBQ2xCLENBQUM7RUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=