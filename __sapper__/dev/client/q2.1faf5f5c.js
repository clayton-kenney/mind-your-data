import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, J as createEventDispatcher, o as onMount, v as validate_slots, P as globals, B as space, c as create_component, D as query_selector_all, j as detach_dev, E as claim_space, a as claim_component, n as insert_dev, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, Q as set_store_value, w as group_outros, x as check_outros, f as element, C as text, g as claim_element, h as children, F as claim_text, l as add_location, k as attr_dev, p as append_dev, R as listen_dev, T as prop_dev, U as empty } from './client.5ebbfb92.js';
import './index.97e4ac21.js';
import { T as TransHelp } from './TransHelp.c00344e8.js';
import { c as count, s as step, q as quizSteps } from './store.6415fc9d.js';
import { C as Complete, B as Back } from './Back.ad9f76f8.js';
import { B as Btn } from './Btn.d1a835a3.js';

/* src/routes/quiz/q2.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/q2.svelte";

// (34:0) {:else}
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
			t0 = text("Download HTTPS Everywhere extension");
			t1 = space();
			p = element("p");
			t2 = text("Luckily, the Electronic Frontier Foundation has created a smart extension that rewrites website requests to HTTPS. With HTTPS, the internet traffic between your device and the server hosting your website can’t be seen by prying eyes.");
			t3 = space();
			div = element("div");
			a = element("a");
			button = element("button");
			t4 = text("Download extension now");
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
			t0 = claim_text(h2_nodes, "Download HTTPS Everywhere extension");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Luckily, the Electronic Frontier Foundation has created a smart extension that rewrites website requests to HTTPS. With HTTPS, the internet traffic between your device and the server hosting your website can’t be seen by prying eyes.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			a = claim_element(div_nodes, "A", { href: true, target: true, class: true });
			var a_nodes = children(a);
			button = claim_element(a_nodes, "BUTTON", { disabled: true, class: true });
			var button_nodes = children(button);
			t4 = claim_text(button_nodes, "Download extension now");
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
			add_location(h2, file, 35, 1, 1560);
			add_location(p, file, 36, 1, 1606);
			button.disabled = /*disabled*/ ctx[0];
			attr_dev(button, "class", "svelte-18094jg");
			add_location(button, file, 39, 64, 1940);
			attr_dev(a, "href", "https://www.eff.org/https-everywhere");
			attr_dev(a, "target", "_blank");
			attr_dev(a, "class", "svelte-18094jg");
			add_location(a, file, 39, 1, 1877);
			attr_dev(div, "class", "button-holder svelte-18094jg");
			add_location(div, file, 38, 0, 1848);
			add_location(section, file, 34, 0, 1549);
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
		source: "(34:0) {:else}",
		ctx
	});

	return block;
}

// (23:0) {#if $step == 0}
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
	let div;
	let btn;
	let current;

	btn = new Btn({
			props: {
				green: true,
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Is your information encrypted and secure?");
			t1 = space();
			p0 = element("p");
			t2 = text("HTTP stands for hypertext transfer protocol. It’s a protocol that allows the transferring of data from a web server to a browser to view web pages.");
			t3 = space();
			p1 = element("p");
			t4 = text("The problem is that the data transferred by HTTP is not encrypted, and it can be intercepted by third parties to view the data being passed between the two systems. This can be addressed by using a secure version called HTTPS, where the \"S\" stands for secure.");
			t5 = space();
			p2 = element("p");
			t6 = text("Using  HTTPS  is especially important for sites that transmit sensitive data, like ecommerce sites that accept online card payments, or login areas that require users to enter their credentials.");
			t7 = space();
			div = element("div");
			create_component(btn.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Is your information encrypted and secure?");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "HTTP stands for hypertext transfer protocol. It’s a protocol that allows the transferring of data from a web server to a browser to view web pages.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "The problem is that the data transferred by HTTP is not encrypted, and it can be intercepted by third parties to view the data being passed between the two systems. This can be addressed by using a secure version called HTTPS, where the \"S\" stands for secure.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			p2 = claim_element(section_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "Using  HTTPS  is especially important for sites that transmit sensitive data, like ecommerce sites that accept online card payments, or login areas that require users to enter their credentials.");
			p2_nodes.forEach(detach_dev);
			t7 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(btn.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 24, 1, 778);
			add_location(p0, file, 25, 1, 831);
			add_location(p1, file, 26, 1, 987);
			add_location(p2, file, 27, 1, 1255);
			attr_dev(div, "class", "button-holder svelte-18094jg");
			add_location(div, file, 29, 1, 1459);
			add_location(section, file, 23, 0, 767);
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
		source: "(23:0) {#if $step == 0}",
		ctx
	});

	return block;
}

// (45:2) {:else}
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
		source: "(45:2) {:else}",
		ctx
	});

	return block;
}

// (43:2) {#if !disabled}
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
		source: "(43:2) {#if !disabled}",
		ctx
	});

	return block;
}

// (42:1) <Complete>
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
		source: "(42:1) <Complete>",
		ctx
	});

	return block;
}

// (49:1) <Complete success={false}>
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
		source: "(49:1) <Complete success={false}>",
		ctx
	});

	return block;
}

// (31:2) <Btn green={true}>
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
		source: "(31:2) <Btn green={true}>",
		ctx
	});

	return block;
}

// (22:0) <Trans>
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
		source: "(22:0) <Trans>",
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-yv6mrh\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Https Everywhere";
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

	console.log(disabled);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Q2> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q2", $$slots, []);

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

class Q2 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q2",
			options,
			id: create_fragment.name
		});
	}
}

export default Q2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTIuMWZhZjVmNWMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cbiAgICAgLy9zZXRzIGFzaWRlIGljb24gdG8gaW4gcHJvZ3Jlc3MgdmlhIHN0b3JlXG5cdG9uTW91bnQoYXN5bmMoKSA9PiB7JHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDF9KTtcblx0bGV0IGRpc2FibGVkID0gZmFsc2U7XG5cdGZ1bmN0aW9uIGRpc2FibGUoKSB7XG5cdFx0ZGlzYWJsZWQ9IHRydWU7XG5cdFx0Y29uc29sZS5sb2coZGlzYWJsZWQpO1xuXHR9XG5cdGNvbnNvbGUubG9nKGRpc2FibGVkKTtcbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+SHR0cHMgRXZlcnl3aGVyZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPFRyYW5zPlxueyNpZiAkc3RlcCA9PSAwfVxuPHNlY3Rpb24+XG5cdDxoMj5JcyB5b3VyIGluZm9ybWF0aW9uIGVuY3J5cHRlZCBhbmQgc2VjdXJlPzwvaDI+IFxuXHQ8cD5IVFRQIHN0YW5kcyBmb3IgaHlwZXJ0ZXh0IHRyYW5zZmVyIHByb3RvY29sLiBJdOKAmXMgYSBwcm90b2NvbCB0aGF0IGFsbG93cyB0aGUgdHJhbnNmZXJyaW5nIG9mIGRhdGEgZnJvbSBhIHdlYiBzZXJ2ZXIgdG8gYSBicm93c2VyIHRvIHZpZXcgd2ViIHBhZ2VzLjwvcD5cblx0PHA+VGhlIHByb2JsZW0gaXMgdGhhdCB0aGUgZGF0YSB0cmFuc2ZlcnJlZCBieSBIVFRQIGlzIG5vdCBlbmNyeXB0ZWQsIGFuZCBpdCBjYW4gYmUgaW50ZXJjZXB0ZWQgYnkgdGhpcmQgcGFydGllcyB0byB2aWV3IHRoZSBkYXRhIGJlaW5nIHBhc3NlZCBiZXR3ZWVuIHRoZSB0d28gc3lzdGVtcy4gVGhpcyBjYW4gYmUgYWRkcmVzc2VkIGJ5IHVzaW5nIGEgc2VjdXJlIHZlcnNpb24gY2FsbGVkIEhUVFBTLCB3aGVyZSB0aGUgXCJTXCIgc3RhbmRzIGZvciBzZWN1cmUuPC9wPlxuXHQ8cD5Vc2luZyAgSFRUUFMgIGlzIGVzcGVjaWFsbHkgaW1wb3J0YW50IGZvciBzaXRlcyB0aGF0IHRyYW5zbWl0IHNlbnNpdGl2ZSBkYXRhLCBsaWtlIGVjb21tZXJjZSBzaXRlcyB0aGF0IGFjY2VwdCBvbmxpbmUgY2FyZCBwYXltZW50cywgb3IgbG9naW4gYXJlYXMgdGhhdCByZXF1aXJlIHVzZXJzIHRvIGVudGVyIHRoZWlyIGNyZWRlbnRpYWxzLjwvcD5cblxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdDxCdG4gZ3JlZW49e3RydWV9PkNvbnRpbnVlPC9CdG4+XG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuezplbHNlfVxuPHNlY3Rpb24+XG5cdDxoMj5Eb3dubG9hZCBIVFRQUyBFdmVyeXdoZXJlIGV4dGVuc2lvbjwvaDI+XG5cdDxwPkx1Y2tpbHksIHRoZSBFbGVjdHJvbmljIEZyb250aWVyIEZvdW5kYXRpb24gaGFzIGNyZWF0ZWQgYSBzbWFydCBleHRlbnNpb24gdGhhdCByZXdyaXRlcyB3ZWJzaXRlIHJlcXVlc3RzIHRvIEhUVFBTLiBXaXRoIEhUVFBTLCB0aGUgaW50ZXJuZXQgdHJhZmZpYyBiZXR3ZWVuIHlvdXIgZGV2aWNlIGFuZCB0aGUgc2VydmVyIGhvc3RpbmcgeW91ciB3ZWJzaXRlIGNhbuKAmXQgYmUgc2VlbiBieSBwcnlpbmcgZXllcy48L3A+XG5cbjxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdDxhIGhyZWY9J2h0dHBzOi8vd3d3LmVmZi5vcmcvaHR0cHMtZXZlcnl3aGVyZScgdGFyZ2V0PVwiX2JsYW5rXCI+PGJ1dHRvbiBvbjpjbGlja3xvbmNlPSd7ZGlzYWJsZX0nIGRpc2FibGVkPSd7ZGlzYWJsZWR9Jz5Eb3dubG9hZCBleHRlbnNpb24gbm93XG5cdDwvYnV0dG9uPjwvYT5cblx0PENvbXBsZXRlPlxuXHRcdHsjaWYgIWRpc2FibGVkfVxuXHRcdEFscmVhZHkgSGF2ZSBpdFxuXHRcdHs6ZWxzZX1cblx0XHRKdXN0IGRvd25sb2FkZWQgaXRcblx0XHR7L2lmfVxuXHQ8L0NvbXBsZXRlPlxuXHQ8Q29tcGxldGUgc3VjY2Vzcz17ZmFsc2V9PlxuXHRcdE5vIFRoYW5rc1xuXHQ8L0NvbXBsZXRlPlxuXHRcblx0PC9kaXY+XG48L3NlY3Rpb24+XG57L2lmfVxuPEJhY2svPlxuPC9UcmFucz5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgYnV0dG9uIHtcblx0ICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHQgICBtYXJnaW46IDEwcHg7XG5cdCAgIGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHQgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICB9XG4gICBhIHtcblx0ICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgfVxuICAgXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBZ0RvQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FUb0YsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUE3QixHQUFPOzs7Ozs7OENBQWMsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQVR2RyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBWVYsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBcEJYLEdBQUssT0FBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXBCUixRQUFRLEdBQUcscUJBQXFCOzs7Q0FRdEMsT0FBTzs2QkFBYSxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDOzs7S0FDN0MsUUFBUSxHQUFHLEtBQUs7O1VBQ1gsT0FBTztrQkFDZixRQUFRLEdBQUUsSUFBSTtFQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTs7O0NBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
