import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, T as onMount, v as validate_slots, u as globals, a as space, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, x as claim_component, l as insert_dev, y as mount_component, B as transition_in, z as transition_out, E as destroy_component, P as set_store_value, M as empty, G as group_outros, A as check_outros, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev, X as listen_dev, n as noop } from './client.d6b3084e.js';
import './index.42fd54b0.js';
import { T as TransHelp, C as Complete } from './complete.0536d0cb.js';
import { q as quizSteps, c as count } from './store.737b5522.js';

/* src/routes/quiz/q6.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/q6.svelte";

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
	let complete0;
	let t4;
	let complete1;
	let t5;
	let complete2;
	let t6;
	let button;
	let t7;
	let current;
	let mounted;
	let dispose;

	complete0 = new Complete({
			props: {
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	complete1 = new Complete({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	complete2 = new Complete({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Configure each of your devices to use another public DNS");
			t1 = space();
			p = element("p");
			t2 = text("You can configure each of your devices to use another public DNS. But don’t use Google’s public DNS! Remember, it’s an ad company, so they really want to see your web history. Both Quad9 and Cloudflare’s 1.1.1.1 have strong privacy policies. But Quad9 is a not-for-profit organization, so it’s a little easier to trust them.");
			t3 = space();
			div = element("div");
			create_component(complete0.$$.fragment);
			t4 = space();
			create_component(complete1.$$.fragment);
			t5 = space();
			create_component(complete2.$$.fragment);
			t6 = space();
			button = element("button");
			t7 = text("Don't care, let then snoop");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Configure each of your devices to use another public DNS");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "You can configure each of your devices to use another public DNS. But don’t use Google’s public DNS! Remember, it’s an ad company, so they really want to see your web history. Both Quad9 and Cloudflare’s 1.1.1.1 have strong privacy policies. But Quad9 is a not-for-profit organization, so it’s a little easier to trust them.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(complete0.$$.fragment, div_nodes);
			t4 = claim_space(div_nodes);
			claim_component(complete1.$$.fragment, div_nodes);
			t5 = claim_space(div_nodes);
			claim_component(complete2.$$.fragment, div_nodes);
			t6 = claim_space(div_nodes);
			button = claim_element(div_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t7 = claim_text(button_nodes, "Don't care, let then snoop");
			button_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 46, 1, 1750);
			add_location(p, file, 47, 1, 1817);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 52, 2, 2276);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 48, 1, 2150);
			add_location(section, file, 45, 0, 1739);
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
			mount_component(complete0, div, null);
			append_dev(div, t4);
			mount_component(complete1, div, null);
			append_dev(div, t5);
			mount_component(complete2, div, null);
			append_dev(div, t6);
			append_dev(div, button);
			append_dev(button, t7);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*incomplete*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			const complete0_changes = {};

			if (dirty & /*$$scope*/ 256) {
				complete0_changes.$$scope = { dirty, ctx };
			}

			complete0.$set(complete0_changes);
			const complete1_changes = {};

			if (dirty & /*$$scope*/ 256) {
				complete1_changes.$$scope = { dirty, ctx };
			}

			complete1.$set(complete1_changes);
			const complete2_changes = {};

			if (dirty & /*$$scope*/ 256) {
				complete2_changes.$$scope = { dirty, ctx };
			}

			complete2.$set(complete2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(complete0.$$.fragment, local);
			transition_in(complete1.$$.fragment, local);
			transition_in(complete2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(complete0.$$.fragment, local);
			transition_out(complete1.$$.fragment, local);
			transition_out(complete2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(complete0);
			destroy_component(complete1);
			destroy_component(complete2);
			mounted = false;
			dispose();
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

// (39:0) {#if q==0}
function create_if_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let button;
	let t4;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Domain Name Service");
			t1 = space();
			p = element("p");
			t2 = text("When you type an address in the address bar (such as mindyourdata.org), your device asks a Domain Name Server to translate that address into an IP address (a unique combination of numbers and dots). By default, your ISP or your mobile carrier runs a DNS for their users. It means that they can see all your web history. Big telecom companies are going to take advantage of that to ramp up their advertising efforts. By default, your DNS query is also unencrypted and can be intercepted by people running the network. Some governments also ask telecom companies to block some websites on their DNS servers — some countries block Facebook for censorship reasons, others block The Pirate Bay for online piracy reasons.");
			t3 = space();
			button = element("button");
			t4 = text("Continue");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Domain Name Service");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "When you type an address in the address bar (such as mindyourdata.org), your device asks a Domain Name Server to translate that address into an IP address (a unique combination of numbers and dots). By default, your ISP or your mobile carrier runs a DNS for their users. It means that they can see all your web history. Big telecom companies are going to take advantage of that to ramp up their advertising efforts. By default, your DNS query is also unencrypted and can be intercepted by people running the network. Some governments also ask telecom companies to block some websites on their DNS servers — some countries block Facebook for censorship reasons, others block The Pirate Bay for online piracy reasons.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			button = claim_element(section_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t4 = claim_text(button_nodes, "Continue");
			button_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 40, 1, 920);
			add_location(p, file, 41, 1, 951);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 42, 1, 1675);
			add_location(section, file, 39, 0, 909);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p);
			append_dev(p, t2);
			append_dev(section, t3);
			append_dev(section, button);
			append_dev(button, t4);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*advance*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
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
		source: "(39:0) {#if q==0}",
		ctx
	});

	return block;
}

// (50:2) <Complete>
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Link1");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Link1");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(50:2) <Complete>",
		ctx
	});

	return block;
}

// (51:2) <Complete>
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Link2");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Link2");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(51:2) <Complete>",
		ctx
	});

	return block;
}

// (52:2) <Complete>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Already did it");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Already did it");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(52:2) <Complete>",
		ctx
	});

	return block;
}

// (38:0) <Trans>
function create_default_slot(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*q*/ ctx[0] == 0) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

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
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(38:0) <Trans>",
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-m7zmek\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Domain Name Service";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope, q*/ 257) {
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
	let $quizSteps;
	let $count;
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(3, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(4, $count = $$value));
	const dispatch = createEventDispatcher();

	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
	});

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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Q6> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q6", $$slots, []);

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		dispatch,
		Trans: TransHelp,
		quizSteps,
		count,
		Complete,
		complete,
		incomplete,
		q,
		advance,
		advanceTwo,
		$quizSteps,
		$count
	});

	$$self.$inject_state = $$props => {
		if ("q" in $$props) $$invalidate(0, q = $$props.q);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [q, incomplete, advance];
}

class Q6 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q6",
			options,
			id: create_fragment.name
		});
	}
}

export default Q6;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTYuMDFjZTE0ZTAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdCAvL3NldHMgYXNpZGUgaWNvbiB0byBpbiBwcm9ncmVzcyB2aWEgc3RvcmVcblx0IGltcG9ydCB7IHF1aXpTdGVwcyB9IGZyb20gJy4uLy4uL3N0b3JlLmpzJ1xuXHQgaW1wb3J0IHsgY291bnQgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblx0IGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSdcblxuICAgIG9uTW91bnQoYXN5bmMoKSA9PiB7JHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDF9KTtcblxuXHQvL2NvbmZpcm0gY29tbGV0aW9uIG9mIHF1aXogdG8gbWFzdGVyIHF1aXogY29tcG9uZW50XG5cdGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuXHRcdGRpc3BhdGNoKCdtZXNzYWdlJywge1xuXHRcdFx0cXVlc3Rpb246IDIsIC8vUS0xIGJlY2F1ZSBvZiBhcnJheVxuXHRcdFx0Y29tcGxldGU6ICd0cnVlJ1xuXHRcdH0pO1xuXHR9XG5cdGZ1bmN0aW9uIGluY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMiwgLy9RLTEgYmVjYXVlIG9mIGFycmF5XG5cdFx0XHRjb21wbGV0ZTogJ2ZhbHNlJ1xuXHRcdH0pO1xuXHR9XG5cdGxldCBxID0gMDtcblx0ZnVuY3Rpb24gYWR2YW5jZSgpIHtcblx0XHRxKys7XG5cdFx0Y29uc29sZS5sb2cocSk7XG5cdH1cblx0ZnVuY3Rpb24gYWR2YW5jZVR3bygpIHtcblx0XHRxKz0yO1xuXHRcdGNvbnNvbGUubG9nKHEpO1xuXHR9XG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkRvbWFpbiBOYW1lIFNlcnZpY2U8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucz5cbnsjaWYgcT09MH1cbjxzZWN0aW9uPlxuXHQ8aDI+RG9tYWluIE5hbWUgU2VydmljZTwvaDI+IFxuXHQ8cD5XaGVuIHlvdSB0eXBlIGFuIGFkZHJlc3MgaW4gdGhlIGFkZHJlc3MgYmFyIChzdWNoIGFzIG1pbmR5b3VyZGF0YS5vcmcpLCB5b3VyIGRldmljZSBhc2tzIGEgRG9tYWluIE5hbWUgU2VydmVyIHRvIHRyYW5zbGF0ZSB0aGF0IGFkZHJlc3MgaW50byBhbiBJUCBhZGRyZXNzIChhIHVuaXF1ZSBjb21iaW5hdGlvbiBvZiBudW1iZXJzIGFuZCBkb3RzKS4gQnkgZGVmYXVsdCwgeW91ciBJU1Agb3IgeW91ciBtb2JpbGUgY2FycmllciBydW5zIGEgRE5TIGZvciB0aGVpciB1c2Vycy4gSXQgbWVhbnMgdGhhdCB0aGV5IGNhbiBzZWUgYWxsIHlvdXIgd2ViIGhpc3RvcnkuIEJpZyB0ZWxlY29tIGNvbXBhbmllcyBhcmUgZ29pbmcgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhhdCB0byByYW1wIHVwIHRoZWlyIGFkdmVydGlzaW5nIGVmZm9ydHMuIEJ5IGRlZmF1bHQsIHlvdXIgRE5TIHF1ZXJ5IGlzIGFsc28gdW5lbmNyeXB0ZWQgYW5kIGNhbiBiZSBpbnRlcmNlcHRlZCBieSBwZW9wbGUgcnVubmluZyB0aGUgbmV0d29yay4gU29tZSBnb3Zlcm5tZW50cyBhbHNvIGFzayB0ZWxlY29tIGNvbXBhbmllcyB0byBibG9jayBzb21lIHdlYnNpdGVzIG9uIHRoZWlyIEROUyBzZXJ2ZXJzIOKAlCBzb21lIGNvdW50cmllcyBibG9jayBGYWNlYm9vayBmb3IgY2Vuc29yc2hpcCByZWFzb25zLCBvdGhlcnMgYmxvY2sgVGhlIFBpcmF0ZSBCYXkgZm9yIG9ubGluZSBwaXJhY3kgcmVhc29ucy48L3A+XG5cdDxidXR0b24gb246Y2xpY2s9e2FkdmFuY2V9PkNvbnRpbnVlPC9idXR0b24+XG48L3NlY3Rpb24+XG57OmVsc2V9XG48c2VjdGlvbj5cblx0PGgyPkNvbmZpZ3VyZSBlYWNoIG9mIHlvdXIgZGV2aWNlcyB0byB1c2UgYW5vdGhlciBwdWJsaWMgRE5TPC9oMj5cblx0PHA+WW91IGNhbiBjb25maWd1cmUgZWFjaCBvZiB5b3VyIGRldmljZXMgdG8gdXNlIGFub3RoZXIgcHVibGljIEROUy4gQnV0IGRvbuKAmXQgdXNlIEdvb2dsZeKAmXMgcHVibGljIEROUyEgUmVtZW1iZXIsIGl04oCZcyBhbiBhZCBjb21wYW55LCBzbyB0aGV5IHJlYWxseSB3YW50IHRvIHNlZSB5b3VyIHdlYiBoaXN0b3J5LiBCb3RoIFF1YWQ5IGFuZCBDbG91ZGZsYXJl4oCZcyAxLjEuMS4xIGhhdmUgc3Ryb25nIHByaXZhY3kgcG9saWNpZXMuIEJ1dCBRdWFkOSBpcyBhIG5vdC1mb3ItcHJvZml0IG9yZ2FuaXphdGlvbiwgc28gaXTigJlzIGEgbGl0dGxlIGVhc2llciB0byB0cnVzdCB0aGVtLjwvcD5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8Q29tcGxldGU+TGluazE8L0NvbXBsZXRlPlxuXHRcdDxDb21wbGV0ZT5MaW5rMjwvQ29tcGxldGU+XG5cdFx0PENvbXBsZXRlPkFscmVhZHkgZGlkIGl0PC9Db21wbGV0ZT5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtpbmNvbXBsZXRlfT5Eb24ndCBjYXJlLCBsZXQgdGhlbiBzbm9vcDwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbnsvaWZ9XG48L1RyYW5zPlxuPHN0eWxlPlxuICAgLmJ1dHRvbi1ob2xkZXIge1xuXHR3aWR0aDogMjd2dztcblx0ZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICB9XG4gICBidXR0b24ge1xuXHQgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdCAgIG1hcmdpbjogMTBweDtcblx0ICAgYm9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG5cdCAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lEQW9Eb0IsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFWWCxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUpyQixHQUFDLE9BQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXBDRixRQUFRLEdBQUcscUJBQXFCOztDQU9uQyxPQUFPOzZCQUFhLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7Ozs7VUFHM0MsUUFBUTtFQUNoQixRQUFRLENBQUMsU0FBUztHQUNqQixRQUFRLEVBQUUsQ0FBQztHQUNYLFFBQVEsRUFBRSxNQUFNOzs7O1VBR1QsVUFBVTtFQUNsQixRQUFRLENBQUMsU0FBUztHQUNqQixRQUFRLEVBQUUsQ0FBQztHQUNYLFFBQVEsRUFBRSxPQUFPOzs7O0tBR2YsQ0FBQyxHQUFHLENBQUM7O1VBQ0EsT0FBTztrQkFDZixDQUFDO0VBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7VUFFTCxVQUFVO2tCQUNsQixDQUFDLElBQUUsQ0FBQztFQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
