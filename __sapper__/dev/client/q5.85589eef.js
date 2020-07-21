import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, r as createEventDispatcher, v as validate_slots, u as globals, a as space, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, x as claim_component, l as insert_dev, y as mount_component, B as transition_in, z as transition_out, E as destroy_component, M as empty, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev, T as listen_dev, n as noop, Z as run_all } from './client.ad595a4b.js';
import './index.42fd54b0.js';
import { T as TransHelp } from './TransHelp.d5ff9696.js';

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
			add_location(h2, file, 46, 1, 2038);
			add_location(p, file, 47, 1, 2082);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 49, 2, 2575);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 50, 2, 2637);
			attr_dev(button2, "class", "svelte-9jf7df");
			add_location(button2, file, 51, 2, 2692);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 48, 1, 2545);
			add_location(section, file, 45, 0, 2027);
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
			add_location(h2, file, 34, 1, 660);
			add_location(p0, file, 35, 1, 687);
			add_location(p1, file, 36, 1, 748);
			add_location(p2, file, 37, 1, 1069);
			add_location(p3, file, 39, 1, 1369);
			add_location(p4, file, 41, 1, 1714);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 42, 1, 1963);
			add_location(section, file, 33, 0, 649);
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

// (32:0) <Trans>
function create_default_slot(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*q*/ ctx[0] == 0) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
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
		d: function destroy(detaching) {
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(32:0) <Trans>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let trans;
	let current;

	trans = new TransHelp({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t = space();
			create_component(trans.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ixajda\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Tracker blocker";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope, q*/ 65) {
				trans_changes.$$scope = { dirty, ctx };
			}

			trans.$set(trans_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(trans.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(trans.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			destroy_component(trans, detaching);
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
		Trans: TransHelp,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTUuODU1ODllZWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cblx0Ly9jb25maXJtIGNvbWxldGlvbiBvZiBxdWl6IHRvIG1hc3RlciBxdWl6IGNvbXBvbmVudFxuXHRmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0XHRkaXNwYXRjaCgnbWVzc2FnZScsIHtcblx0XHRcdHF1ZXN0aW9uOiAyLCAvL1EtMSBiZWNhdWUgb2YgYXJyYXlcblx0XHRcdGNvbXBsZXRlOiAndHJ1ZSdcblx0XHR9KTtcblx0fVxuXHRmdW5jdGlvbiBpbmNvbXBsZXRlKCkge1xuXHRcdGRpc3BhdGNoKCdtZXNzYWdlJywge1xuXHRcdFx0cXVlc3Rpb246IDIsIC8vUS0xIGJlY2F1ZSBvZiBhcnJheVxuXHRcdFx0Y29tcGxldGU6ICdmYWxzZSdcblx0XHR9KTtcblx0fVxuXHRsZXQgcSA9IDA7XG5cdGZ1bmN0aW9uIGFkdmFuY2UoKSB7XG5cdFx0cSsrO1xuXHRcdGNvbnNvbGUubG9nKHEpO1xuXHR9XG5cdGZ1bmN0aW9uIGFkdmFuY2VUd28oKSB7XG5cdFx0cSs9Mjtcblx0XHRjb25zb2xlLmxvZyhxKTtcblx0fVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5UcmFja2VyIGJsb2NrZXI8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucz5cbnsjaWYgcT09MH1cbjxzZWN0aW9uPlxuXHQ8aDI+VHJhY2tlciBibG9ja2VyPC9oMj4gXG5cdDxwPkFyZSB5b3UgYmVpbmcgdHJhY2tlZCBvbiB0aGUgd2ViPyBBbG1vc3QgZGVmaW5pdGVseS48L3A+XG5cdDxwPldoaWxlIGNvb2tpZXMgYXJlIHRoZSBsaXR0bGUgaWRlbnRpZmllcnMgZm9yIHdlYnNpdGVzIHRvIHJlY29nbml6ZSB5b3UgdGhyb3VnaCBtdWx0aXBsZSB2aXNpdHMsIHRyYWNrZXJzIHVzZSB0aG9zZSBjb29raWVzIHRvIHJlY29nbml6ZSB5b3UgYW5kIGFuYWx5emUgeW91ciBiZWhhdmlvci4gVHJhY2tlcnMgd2lsbCBsb2cgdGhlIHNpdGUgeW91IHZpc2l0LCB0aGUgZGF0ZSBhbmQgdGltZSwgYW5kIHlvdXIgY29tcHV0ZXIgc2V0dGluZ3MgKG1vcmUgcG93ZXJmdWwgdHJhY2tlcnMgY2FuIGV2ZW4gd2F0Y2ggeW91ciBtb3VzZSBtb3ZlbWVudCkuIDwvcD5cblx0PHA+QSB0cmFja2VyIGxpa2UgR29vZ2xlIGFkc2Vuc2UgaXMgd2F0Y2hpbmcgeW91IG92ZXIgbXVsdGlwbGUgc2l0ZXMgdG8gYW5hbHl6ZSB5b3VyIGludGVyZXN0cy4gWW91IHZpc2l0ZWQgYSBjYXIgc2FsZSBzaXRlIHllc3RlcmRheT8gVG9kYXkgd2Ugc2hvdyB5b3UgQWRzIG9mIGNhcnMuIFRoZSBjaGFuY2UgaXMgaGlnaGVyIHRoYXQgeW91IGxpa2UgdGhlIGFkIGFuZCBjbGljayBpdCBpbnN0ZWFkIG9mIGFuIGFkIHdpdGggY2F0cy4gKGJhZCBleGFtcGxlLi4uIEV2ZXJ5b25lIGNsaWNrcyBjYXQgYWRzLi4uKVxuXHQ8L3A+XG5cdDxwPklmIHlvdSBjaGFuZ2UgdGhlIHNpdGUgKGVnIGZyb20gdGhlIGZyb250IHBhZ2UgdG8gdGhlIG5ld3MgYXJlYSkgdGhlIHRyYWNrZXIgcmVjb2duaXplIHlvdSBhbmQgY29tYmluZXMgdGhlIGRhdGEgLSBcInVzZXIgQUJDIHN0YXllZCAzM3MgaW4gdGhlIGZyb250IHBhZ2UgYW5kIHN3aXRjaGVkIHRvIHRoZSBuZXdzIGFyZWEgYW5kIHN0YXllZCB0aGVyZSBmb3IgM21pblwiLiBGb3Igd2VibWFzdGVyIHBvd2VyZnVsIGRhdGEgYmVjYXVzZSB0aGV5IGtub3cgaG93IGltcG9ydGFudCB0aGVpciBmcm9udCBwYWdlIGlzIGFuZCB3aGVyZSB0aGV5IGhhdmUgdG9vIGNoYW5nZSBzb21ldGhpbmcuIFxuXHQ8L3A+XG5cdDxwPlRyYWNrZXJzIGFyZSBpbnN0YWxsZWQgb24gbWFueSB3ZWJzaXRlcyB0byBsb2cgeW91ciBiZWhhdmlvci4gRWFjaCB0aW1lIHlvdSBvcGVuIGEgd2Vic2l0ZSB3aXRoIGEgdHJhY2tlciAob2YgY291cnNlIGV2ZXJ5IHN1Yi1zaXRlIG9mIGEgd2Vic2l0ZSB0b28pLiBUcmFja2VycyBhcmUgaW5jbHVkZWQgaW4gdGhlIHdlYnNpdGUgY29kZSBhbmQgYXJlIGFjdGl2YXRlZCBlYWNoIHRpbWUgeW91IHZpc2l0IHRoZSBzaXRlLjwvcD5cblx0PGJ1dHRvbiBvbjpjbGljaz17YWR2YW5jZX0+Q29udGludWU8L2J1dHRvbj5cbjwvc2VjdGlvbj5cbns6ZWxzZX1cbjxzZWN0aW9uPlxuXHQ8aDI+RG93bmxvYWQgUHJpdmFjeSBCYWRnZXIgZXh0ZW50aW9uPC9oMj5cblx0PHA+V2hlbiB5b3UgdmlldyBhIHdlYnBhZ2UsIHRoYXQgcGFnZSB3aWxsIG9mdGVuIGJlIG1hZGUgdXAgb2YgY29udGVudCBmcm9tIG1hbnkgZGlmZmVyZW50IHNvdXJjZXMuIFByaXZhY3kgQmFkZ2VyIGtlZXBzIHRyYWNrIG9mIGFsbCBvZiB0aGlzLiBJZiBhcyB5b3UgYnJvd3NlIHRoZSB3ZWIsIHRoZSBzYW1lIHNvdXJjZSBzZWVtcyB0byBiZSB0cmFja2luZyB5b3VyIGJyb3dzZXIgYWNyb3NzIGRpZmZlcmVudCB3ZWJzaXRlcywgdGhlbiBQcml2YWN5IEJhZGdlciBzcHJpbmdzIGludG8gYWN0aW9uLCB0ZWxsaW5nIHlvdXIgYnJvd3NlciBub3QgdG8gbG9hZCBhbnkgbW9yZSBjb250ZW50IGZyb20gdGhhdCBzb3VyY2UuIEFuZCB3aGVuIHlvdXIgYnJvd3NlciBzdG9wcyBsb2FkaW5nIGNvbnRlbnQgZnJvbSBhIHNvdXJjZSwgdGhhdCBzb3VyY2UgY2FuIG5vIGxvbmdlciB0cmFjayB5b3UuIFZvaWxhITwvcD5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtjb21wbGV0ZX0+RG93bmxvYWQgZXh0ZW5zaW9uIG5vdzwvYnV0dG9uPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2NvbXBsZXRlfT5BbHJlYWR5IEhhdmUgaXQ8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtpbmNvbXBsZXRlfT5Eb24ndCB3YW50IHRvIGRvd25sb2FkIGl0PC9idXR0b24+XG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuey9pZn1cbjwvVHJhbnM+XG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBaURvQixHQUFROytDQUNSLEdBQVE7aURBQ1IsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFUWCxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVnJCLEdBQUMsT0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E5QkYsUUFBUSxHQUFHLHFCQUFxQjs7O1VBSTdCLFFBQVE7RUFDaEIsUUFBUSxDQUFDLFNBQVM7R0FDakIsUUFBUSxFQUFFLENBQUM7R0FDWCxRQUFRLEVBQUUsTUFBTTs7OztVQUdULFVBQVU7RUFDbEIsUUFBUSxDQUFDLFNBQVM7R0FDakIsUUFBUSxFQUFFLENBQUM7R0FDWCxRQUFRLEVBQUUsT0FBTzs7OztLQUdmLENBQUMsR0FBRyxDQUFDOztVQUNBLE9BQU87a0JBQ2YsQ0FBQztFQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O1VBRUwsVUFBVTtrQkFDbEIsQ0FBQyxJQUFFLENBQUM7RUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
