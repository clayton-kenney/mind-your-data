import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, J as createEventDispatcher, o as onMount, v as validate_slots, P as globals, B as space, c as create_component, D as query_selector_all, j as detach_dev, E as claim_space, a as claim_component, n as insert_dev, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, Q as set_store_value, w as group_outros, x as check_outros, f as element, C as text, g as claim_element, h as children, F as claim_text, l as add_location, k as attr_dev, p as append_dev, R as listen_dev, T as prop_dev, U as empty } from './client.7ef728ec.js';
import './index.bb3a540a.js';
import { T as TransHelp } from './TransHelp.6f9a764f.js';
import { c as count, s as step, q as quizSteps } from './store.67f9919c.js';
import { C as Complete, B as Back } from './Back.6d890a20.js';
import { B as Btn } from './Btn.5b2c0425.js';

/* src/routes/quiz/q5.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/q5.svelte";

// (31:0) {:else}
function create_else_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div;
	let a;
	let button;
	let t4;
	let t5;
	let complete0;
	let t6;
	let complete1;
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
				success: false,
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Install the Privacy Badger extension.");
			t1 = space();
			p = element("p");
			t2 = text("Privacy Badger is a free and open-source browser extension for Google Chrome, Mozilla and Firefox that automatically discovers trackers as you browse the Web. The longer you browse with Privacy Badger, the better it gets at protecting you, so start browsing a little to teach your Badger.");
			t3 = space();
			div = element("div");
			a = element("a");
			button = element("button");
			t4 = text("Download Privacy Badger");
			t5 = space();
			create_component(complete0.$$.fragment);
			t6 = space();
			create_component(complete1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Install the Privacy Badger extension.");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Privacy Badger is a free and open-source browser extension for Google Chrome, Mozilla and Firefox that automatically discovers trackers as you browse the Web. The longer you browse with Privacy Badger, the better it gets at protecting you, so start browsing a little to teach your Badger.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			a = claim_element(div_nodes, "A", { href: true, target: true, class: true });
			var a_nodes = children(a);
			button = claim_element(a_nodes, "BUTTON", { disabled: true, class: true });
			var button_nodes = children(button);
			t4 = claim_text(button_nodes, "Download Privacy Badger");
			button_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t5 = claim_space(div_nodes);
			claim_component(complete0.$$.fragment, div_nodes);
			t6 = claim_space(div_nodes);
			claim_component(complete1.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 32, 1, 1353);
			add_location(p, file, 33, 1, 1401);
			button.disabled = /*disabled*/ ctx[0];
			attr_dev(button, "class", "svelte-15owt46");
			add_location(button, file, 35, 54, 1780);
			attr_dev(a, "href", "https://privacybadger.org");
			attr_dev(a, "target", "_blank");
			attr_dev(a, "class", "svelte-15owt46");
			add_location(a, file, 35, 2, 1728);
			attr_dev(div, "class", "button-holder svelte-15owt46");
			add_location(div, file, 34, 1, 1698);
			add_location(section, file, 31, 0, 1342);
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
			append_dev(div, a);
			append_dev(a, button);
			append_dev(button, t4);
			append_dev(div, t5);
			mount_component(complete0, div, null);
			append_dev(div, t6);
			mount_component(complete1, div, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*disable*/ ctx[2], { once: true }, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (!current || dirty & /*disabled*/ 1) {
				prop_dev(button, "disabled", /*disabled*/ ctx[0]);
			}

			const complete0_changes = {};

			if (dirty & /*$$scope, disabled*/ 65) {
				complete0_changes.$$scope = { dirty, ctx };
			}

			complete0.$set(complete0_changes);
			const complete1_changes = {};

			if (dirty & /*$$scope*/ 64) {
				complete1_changes.$$scope = { dirty, ctx };
			}

			complete1.$set(complete1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(complete0.$$.fragment, local);
			transition_in(complete1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(complete0.$$.fragment, local);
			transition_out(complete1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(complete0);
			destroy_component(complete1);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(31:0) {:else}",
		ctx
	});

	return block;
}

// (22:0) {#if $step==0}
function create_if_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div;
	let btn;
	let current;

	btn = new Btn({
			props: {
				yellow: true,
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Tracker blocker: Privacy Badger");
			t1 = space();
			p = element("p");
			t2 = text("Are you being tracked on the web? Almost definitely. \n\t\tTrackers are installed on many websites to log your behavior. While cookies are the little identifiers for websites to recognize you through multiple visits, trackers use those cookies to analyze your behavior and build their valuable user profiles. Trackers will log the site you visit, the date and time, and your computer settings (more powerful trackers can even watch your mouse movement) all of this without your consent.");
			t3 = space();
			div = element("div");
			create_component(btn.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Tracker blocker: Privacy Badger");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Are you being tracked on the web? Almost definitely. \n\t\tTrackers are installed on many websites to log your behavior. While cookies are the little identifiers for websites to recognize you through multiple visits, trackers use those cookies to analyze your behavior and build their valuable user profiles. Trackers will log the site you visit, the date and time, and your computer settings (more powerful trackers can even watch your mouse movement) all of this without your consent.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(btn.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 23, 1, 713);
			add_location(p, file, 24, 1, 756);
			attr_dev(div, "class", "button-holder svelte-15owt46");
			add_location(div, file, 26, 2, 1249);
			add_location(section, file, 22, 0, 702);
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
			mount_component(btn, div, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const btn_changes = {};

			if (dirty & /*$$scope*/ 64) {
				btn_changes.$$scope = { dirty, ctx };
			}

			btn.$set(btn_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(btn.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(btn.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(btn);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(22:0) {#if $step==0}",
		ctx
	});

	return block;
}

// (41:3) {:else}
function create_else_block_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Just downloaded it");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Just downloaded it");
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
		id: create_else_block_1.name,
		type: "else",
		source: "(41:3) {:else}",
		ctx
	});

	return block;
}

// (39:3) {#if !disabled}
function create_if_block_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Already Have it");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Already Have it");
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
		id: create_if_block_1.name,
		type: "if",
		source: "(39:3) {#if !disabled}",
		ctx
	});

	return block;
}

// (38:2) <Complete>
function create_default_slot_3(ctx) {
	let if_block_anchor;

	function select_block_type_1(ctx, dirty) {
		if (!/*disabled*/ ctx[0]) return create_if_block_1;
		return create_else_block_1;
	}

	let current_block_type = select_block_type_1(ctx);
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
			if (current_block_type !== (current_block_type = select_block_type_1(ctx))) {
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
		id: create_default_slot_3.name,
		type: "slot",
		source: "(38:2) <Complete>",
		ctx
	});

	return block;
}

// (45:2) <Complete success={false}>
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("No Thanks");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "No Thanks");
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
		source: "(45:2) <Complete success={false}>",
		ctx
	});

	return block;
}

// (28:3) <Btn yellow={true}>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Continue");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Continue");
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
		source: "(28:3) <Btn yellow={true}>",
		ctx
	});

	return block;
}

// (21:0) <Trans>
function create_default_slot(ctx) {
	let current_block_type_index;
	let if_block;
	let t;
	let back;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*$step*/ ctx[1] == 0) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	back = new Back({ $$inline: true });

	const block = {
		c: function create() {
			if_block.c();
			t = space();
			create_component(back.$$.fragment);
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			t = claim_space(nodes);
			claim_component(back.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, t, anchor);
			mount_component(back, target, anchor);
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
				if_block.m(t.parentNode, t);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			transition_in(back.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			transition_out(back.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(t);
			destroy_component(back, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(21:0) <Trans>",
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

			if (dirty & /*$$scope, $step, disabled*/ 67) {
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
	let $step;
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(3, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(4, $count = $$value));
	validate_store(step, "step");
	component_subscribe($$self, step, $$value => $$invalidate(1, $step = $$value));
	const dispatch = createEventDispatcher();

	//sets aside icon to in progress via store
	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
	});

	let disabled = false;

	function disable() {
		$$invalidate(0, disabled = true);
		console.log(disabled);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Q5> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q5", $$slots, []);

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		dispatch,
		Trans: TransHelp,
		Complete,
		Btn,
		count,
		step,
		quizSteps,
		Back,
		disabled,
		disable,
		$quizSteps,
		$count,
		$step
	});

	$$self.$inject_state = $$props => {
		if ("disabled" in $$props) $$invalidate(0, disabled = $$props.disabled);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [disabled, $step, disable];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTUuOTBiMzFjM2EuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSdcblx0aW1wb3J0IEJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J0bi5zdmVsdGUnIC8vc2V0IDxOZXh0IHE9ezJ9PiB0byBza2lwIG11bHRpcGxlIHN0ZXBzXG5cdGltcG9ydCB7IGNvdW50LCBzdGVwLCBxdWl6U3RlcHMgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblx0aW1wb3J0IEJhY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYWNrLnN2ZWx0ZSdcblxuXHQvL3NldHMgYXNpZGUgaWNvbiB0byBpbiBwcm9ncmVzcyB2aWEgc3RvcmVcblx0b25Nb3VudChhc3luYygpID0+IHskcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMX0pO1xuXHRsZXQgZGlzYWJsZWQgPSBmYWxzZTtcblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRkaXNhYmxlZD0gdHJ1ZTtcblx0XHRjb25zb2xlLmxvZyhkaXNhYmxlZCk7XG5cdH1cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+VHJhY2tlciBibG9ja2VyPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48VHJhbnM+XG57I2lmICRzdGVwPT0wfVxuPHNlY3Rpb24+XG5cdDxoMj5UcmFja2VyIGJsb2NrZXI6IFByaXZhY3kgQmFkZ2VyPC9oMj4gXG5cdDxwPkFyZSB5b3UgYmVpbmcgdHJhY2tlZCBvbiB0aGUgd2ViPyBBbG1vc3QgZGVmaW5pdGVseS4gXG5cdFx0VHJhY2tlcnMgYXJlIGluc3RhbGxlZCBvbiBtYW55IHdlYnNpdGVzIHRvIGxvZyB5b3VyIGJlaGF2aW9yLiBXaGlsZSBjb29raWVzIGFyZSB0aGUgbGl0dGxlIGlkZW50aWZpZXJzIGZvciB3ZWJzaXRlcyB0byByZWNvZ25pemUgeW91IHRocm91Z2ggbXVsdGlwbGUgdmlzaXRzLCB0cmFja2VycyB1c2UgdGhvc2UgY29va2llcyB0byBhbmFseXplIHlvdXIgYmVoYXZpb3IgYW5kIGJ1aWxkIHRoZWlyIHZhbHVhYmxlIHVzZXIgcHJvZmlsZXMuIFRyYWNrZXJzIHdpbGwgbG9nIHRoZSBzaXRlIHlvdSB2aXNpdCwgdGhlIGRhdGUgYW5kIHRpbWUsIGFuZCB5b3VyIGNvbXB1dGVyIHNldHRpbmdzIChtb3JlIHBvd2VyZnVsIHRyYWNrZXJzIGNhbiBldmVuIHdhdGNoIHlvdXIgbW91c2UgbW92ZW1lbnQpIGFsbCBvZiB0aGlzIHdpdGhvdXQgeW91ciBjb25zZW50LjwvcD5cblx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdFx0PEJ0biB5ZWxsb3c9e3RydWV9PkNvbnRpbnVlPC9CdG4+XG5cdFx0PC9kaXY+XG48L3NlY3Rpb24+XG57OmVsc2V9XG48c2VjdGlvbj5cblx0PGgyPkluc3RhbGwgdGhlIFByaXZhY3kgQmFkZ2VyIGV4dGVuc2lvbi48L2gyPlxuXHQ8cD5Qcml2YWN5IEJhZGdlciBpcyBhIGZyZWUgYW5kIG9wZW4tc291cmNlIGJyb3dzZXIgZXh0ZW5zaW9uIGZvciBHb29nbGUgQ2hyb21lLCBNb3ppbGxhIGFuZCBGaXJlZm94IHRoYXQgYXV0b21hdGljYWxseSBkaXNjb3ZlcnMgdHJhY2tlcnMgYXMgeW91IGJyb3dzZSB0aGUgV2ViLiBUaGUgbG9uZ2VyIHlvdSBicm93c2Ugd2l0aCBQcml2YWN5IEJhZGdlciwgdGhlIGJldHRlciBpdCBnZXRzIGF0IHByb3RlY3RpbmcgeW91LCBzbyBzdGFydCBicm93c2luZyBhIGxpdHRsZSB0byB0ZWFjaCB5b3VyIEJhZGdlci48L3A+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PGEgaHJlZj0naHR0cHM6Ly9wcml2YWN5YmFkZ2VyLm9yZycgdGFyZ2V0PVwiX2JsYW5rXCI+PGJ1dHRvbiBvbjpjbGlja3xvbmNlPSd7ZGlzYWJsZX0nIGRpc2FibGVkPSd7ZGlzYWJsZWR9Jz5Eb3dubG9hZCBQcml2YWN5IEJhZGdlclxuXHRcdDwvYnV0dG9uPjwvYT5cblx0XHQ8Q29tcGxldGU+XG5cdFx0XHR7I2lmICFkaXNhYmxlZH1cblx0XHRcdEFscmVhZHkgSGF2ZSBpdFxuXHRcdFx0ezplbHNlfVxuXHRcdFx0SnVzdCBkb3dubG9hZGVkIGl0XG5cdFx0XHR7L2lmfVxuXHRcdDwvQ29tcGxldGU+XG5cdFx0PENvbXBsZXRlIHN1Y2Nlc3M9e2ZhbHNlfT5cblx0XHRcdE5vIFRoYW5rc1xuXHRcdDwvQ29tcGxldGU+XG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuey9pZn1cbjxCYWNrLz5cbjwvVHJhbnM+XG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuICAgYSB7XG5cdCAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUE0Q3FCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQVR5RSxHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBQTdCLEdBQU87Ozs7Ozs4Q0FBYyxHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUjNGLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFXWCxHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFqQlosR0FBSyxPQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbkJOLFFBQVEsR0FBRyxxQkFBcUI7OztDQVF0QyxPQUFPOzZCQUFhLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7OztLQUM3QyxRQUFRLEdBQUcsS0FBSzs7VUFDWCxPQUFPO2tCQUNmLFFBQVEsR0FBRSxJQUFJO0VBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
