import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, x as onMount, v as validate_slots, a as space, y as create_component, q as query_selector_all, b as detach_dev, c as claim_space, z as claim_component, l as insert_dev, A as mount_component, B as transition_in, C as transition_out, D as destroy_component, L as set_store_value, I as group_outros, E as check_outros, e as element, f as claim_element, g as children, j as attr_dev, k as add_location, t as text, h as claim_text, P as toggle_class, m as append_dev, M as listen_dev, Q as run_all } from './client.30f4efce.js';
import './index.cccde779.js';
import './index.01b49c54.js';
import { T as TransHelp } from './TransHelp.d6cba66e.js';
import { c as count, s as step, q as quizSteps } from './store.7d829b74.js';
import { C as Complete, B as Back } from './Back.b0a952a9.js';
import { B as Btn } from './Btn.784b1e97.js';

/* src/routes/quiz/q6.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/q6.svelte";

// (25:0) {:else}
function create_else_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let div0;
	let p1;
	let t4;
	let t5;
	let t6;
	let hr;
	let t7;
	let div1;
	let p2;
	let t8;
	let p3;
	let t9;
	let div2;
	let complete0;
	let t10;
	let complete1;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*current*/ ctx[0] === "mac" && create_if_block_2(ctx);
	let if_block1 = /*current*/ ctx[0] === "pc" && create_if_block_1(ctx);

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
			t0 = text("Setup Quad9");
			t1 = space();
			p0 = element("p");
			t2 = text("Quad9 is a free, not-for-profit security solution that uses the DNS to protect your system against the most common cyber threats. Not only does it  preserve and protect your privacy, it will also improve your system’s performance! It’s like a painless immunization for your computer and devices.");
			t3 = space();
			div0 = element("div");
			p1 = element("p");
			t4 = text("Setup Quad9 for Mac:");
			t5 = space();
			if (if_block0) if_block0.c();
			t6 = space();
			hr = element("hr");
			t7 = space();
			div1 = element("div");
			p2 = element("p");
			t8 = text("Setup Quad9 for PC:");
			p3 = element("p");
			if (if_block1) if_block1.c();
			t9 = space();
			div2 = element("div");
			create_component(complete0.$$.fragment);
			t10 = space();
			create_component(complete1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Setup Quad9");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Quad9 is a free, not-for-profit security solution that uses the DNS to protect your system against the most common cyber threats. Not only does it  preserve and protect your privacy, it will also improve your system’s performance! It’s like a painless immunization for your computer and devices.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div0 = claim_element(section_nodes, "DIV", {});
			var div0_nodes = children(div0);
			p1 = claim_element(div0_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "Setup Quad9 for Mac:");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div0_nodes);
			if (if_block0) if_block0.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t6 = claim_space(section_nodes);
			hr = claim_element(section_nodes, "HR", {});
			t7 = claim_space(section_nodes);
			div1 = claim_element(section_nodes, "DIV", {});
			var div1_nodes = children(div1);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			t8 = claim_text(p2_nodes, "Setup Quad9 for PC:");
			p2_nodes.forEach(detach_dev);
			p3 = claim_element(div1_nodes, "P", {});
			var p3_nodes = children(p3);
			if (if_block1) if_block1.l(p3_nodes);
			p3_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t9 = claim_space(section_nodes);
			div2 = claim_element(section_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(complete0.$$.fragment, div2_nodes);
			t10 = claim_space(div2_nodes);
			claim_component(complete1.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 26, 1, 1267);
			add_location(p0, file, 27, 1, 1289);
			add_location(p1, file, 29, 2, 1671);
			toggle_class(div0, "active", /*current*/ ctx[0] === "mac");
			add_location(div0, file, 28, 1, 1593);
			add_location(hr, file, 34, 2, 1983);
			add_location(p2, file, 36, 3, 2067);
			add_location(p3, file, 36, 25, 2089);
			toggle_class(div1, "active", /*current*/ ctx[0] === "pc");
			add_location(div1, file, 35, 2, 1990);
			attr_dev(div2, "class", "button-holder svelte-9jf7df");
			add_location(div2, file, 41, 1, 2390);
			add_location(section, file, 25, 0, 1256);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p0);
			append_dev(p0, t2);
			append_dev(section, t3);
			append_dev(section, div0);
			append_dev(div0, p1);
			append_dev(p1, t4);
			append_dev(div0, t5);
			if (if_block0) if_block0.m(div0, null);
			append_dev(section, t6);
			append_dev(section, hr);
			append_dev(section, t7);
			append_dev(section, div1);
			append_dev(div1, p2);
			append_dev(p2, t8);
			append_dev(div1, p3);
			if (if_block1) if_block1.m(p3, null);
			append_dev(section, t9);
			append_dev(section, div2);
			mount_component(complete0, div2, null);
			append_dev(div2, t10);
			mount_component(complete1, div2, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(div0, "click", /*click_handler*/ ctx[2], false, false, false),
					listen_dev(div1, "click", /*click_handler_1*/ ctx[3], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (/*current*/ ctx[0] === "mac") {
				if (if_block0) ; else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(div0, null);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (dirty & /*current*/ 1) {
				toggle_class(div0, "active", /*current*/ ctx[0] === "mac");
			}

			if (/*current*/ ctx[0] === "pc") {
				if (if_block1) ; else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(p3, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty & /*current*/ 1) {
				toggle_class(div1, "active", /*current*/ ctx[0] === "pc");
			}

			const complete0_changes = {};

			if (dirty & /*$$scope*/ 128) {
				complete0_changes.$$scope = { dirty, ctx };
			}

			complete0.$set(complete0_changes);
			const complete1_changes = {};

			if (dirty & /*$$scope*/ 128) {
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
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			destroy_component(complete0);
			destroy_component(complete1);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(25:0) {:else}",
		ctx
	});

	return block;
}

// (18:0) {#if $step==0}
function create_if_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let btn;
	let current;

	btn = new Btn({
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
			t0 = text("Domain Name Server (DNS): Quad9");
			t1 = space();
			p = element("p");
			t2 = text("Everything on the Internet, including websites, live at a numerical IP address. The Domain Name System, or DNS, translates these numerical IP addresses into human-readable domain names that we all know and remember (like mindyourdata.org). If your DNS settings are not working correctly, or you’re still using defaults, you may be at risk for cybercrime and performance issues. And, the websites you visit may be collected and shared by whatever entity owns the DNS service.");
			t3 = space();
			create_component(btn.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Domain Name Server (DNS): Quad9");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Everything on the Internet, including websites, live at a numerical IP address. The Domain Name System, or DNS, translates these numerical IP addresses into human-readable domain names that we all know and remember (like mindyourdata.org). If your DNS settings are not working correctly, or you’re still using defaults, you may be at risk for cybercrime and performance issues. And, the websites you visit may be collected and shared by whatever entity owns the DNS service.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			claim_component(btn.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 19, 1, 689);
			add_location(p, file, 21, 1, 734);
			add_location(section, file, 18, 0, 678);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p);
			append_dev(p, t2);
			append_dev(section, t3);
			mount_component(btn, section, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const btn_changes = {};

			if (dirty & /*$$scope*/ 128) {
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
		source: "(18:0) {#if $step==0}",
		ctx
	});

	return block;
}

// (31:2) {#if current==='mac'}
function create_if_block_2(ctx) {
	let iframe;
	let iframe_src_value;

	const block = {
		c: function create() {
			iframe = element("iframe");
			this.h();
		},
		l: function claim(nodes) {
			iframe = claim_element(nodes, "IFRAME", {
				title: true,
				width: true,
				height: true,
				src: true,
				frameborder: true,
				allow: true,
				allowfullscreen: true
			});

			children(iframe).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(iframe, "title", "Setup Quad9 for mac");
			attr_dev(iframe, "width", "560");
			attr_dev(iframe, "height", "315");
			if (iframe.src !== (iframe_src_value = "https://www.youtube-nocookie.com/embed/NM4AdfEnAmY")) attr_dev(iframe, "src", iframe_src_value);
			attr_dev(iframe, "frameborder", "0");
			attr_dev(iframe, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
			iframe.allowFullscreen = true;
			add_location(iframe, file, 31, 2, 1725);
		},
		m: function mount(target, anchor) {
			insert_dev(target, iframe, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(iframe);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(31:2) {#if current==='mac'}",
		ctx
	});

	return block;
}

// (38:3) {#if current==='pc'}
function create_if_block_1(ctx) {
	let iframe;
	let iframe_src_value;

	const block = {
		c: function create() {
			iframe = element("iframe");
			this.h();
		},
		l: function claim(nodes) {
			iframe = claim_element(nodes, "IFRAME", {
				title: true,
				width: true,
				height: true,
				src: true,
				frameborder: true,
				allow: true,
				allowfullscreen: true
			});

			children(iframe).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(iframe, "title", "Setup Quad9 for Windows");
			attr_dev(iframe, "width", "560");
			attr_dev(iframe, "height", "315");
			if (iframe.src !== (iframe_src_value = "https://www.youtube-nocookie.com/embed/aujUl3yt6nM")) attr_dev(iframe, "src", iframe_src_value);
			attr_dev(iframe, "frameborder", "0");
			attr_dev(iframe, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
			iframe.allowFullscreen = true;
			add_location(iframe, file, 38, 3, 2120);
		},
		m: function mount(target, anchor) {
			insert_dev(target, iframe, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(iframe);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(38:3) {#if current==='pc'}",
		ctx
	});

	return block;
}

// (43:2) <Complete>
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Setup Complete");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Setup Complete");
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
		source: "(43:2) <Complete>",
		ctx
	});

	return block;
}

// (44:2) <Complete success={false}>
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Don't care, let then snoop");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Don't care, let then snoop");
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
		source: "(44:2) <Complete success={false}>",
		ctx
	});

	return block;
}

// (23:1) <Btn>
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
		source: "(23:1) <Btn>",
		ctx
	});

	return block;
}

// (17:0) <Trans>
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
		source: "(17:0) <Trans>",
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

			if (dirty & /*$$scope, $step, current*/ 131) {
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
	component_subscribe($$self, quizSteps, $$value => $$invalidate(4, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(5, $count = $$value));
	validate_store(step, "step");
	component_subscribe($$self, step, $$value => $$invalidate(1, $step = $$value));
	const dispatch = createEventDispatcher();

	//sets aside icon to in progress via store
	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
	});

	let current = "initial";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Q6> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q6", $$slots, []);
	const click_handler = () => $$invalidate(0, current = "mac");
	const click_handler_1 = () => $$invalidate(0, current = "pc");

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
		current,
		$quizSteps,
		$count,
		$step
	});

	$$self.$inject_state = $$props => {
		if ("current" in $$props) $$invalidate(0, current = $$props.current);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [current, $step, click_handler, click_handler_1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTYuY2ZiZDM5ZDIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cblx0Ly9zZXRzIGFzaWRlIGljb24gdG8gaW4gcHJvZ3Jlc3MgdmlhIHN0b3JlXG4gICAgb25Nb3VudChhc3luYygpID0+IHskcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMX0pO1xuXHRsZXQgY3VycmVudCA9ICdpbml0aWFsJztcbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+RG9tYWluIE5hbWUgU2VydmljZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPFRyYW5zPlxueyNpZiAkc3RlcD09MH1cbjxzZWN0aW9uPlxuXHQ8aDI+RG9tYWluIE5hbWUgU2VydmVyIChETlMpOiBRdWFkOVxuXHQ8L2gyPiBcblx0PHA+RXZlcnl0aGluZyBvbiB0aGUgSW50ZXJuZXQsIGluY2x1ZGluZyB3ZWJzaXRlcywgbGl2ZSBhdCBhIG51bWVyaWNhbCBJUCBhZGRyZXNzLiBUaGUgRG9tYWluIE5hbWUgU3lzdGVtLCBvciBETlMsIHRyYW5zbGF0ZXMgdGhlc2UgbnVtZXJpY2FsIElQIGFkZHJlc3NlcyBpbnRvIGh1bWFuLXJlYWRhYmxlIGRvbWFpbiBuYW1lcyB0aGF0IHdlIGFsbCBrbm93IGFuZCByZW1lbWJlciAobGlrZSBtaW5keW91cmRhdGEub3JnKS4gSWYgeW91ciBETlMgc2V0dGluZ3MgYXJlIG5vdCB3b3JraW5nIGNvcnJlY3RseSwgb3IgeW914oCZcmUgc3RpbGwgdXNpbmcgZGVmYXVsdHMsIHlvdSBtYXkgYmUgYXQgcmlzayBmb3IgY3liZXJjcmltZSBhbmQgcGVyZm9ybWFuY2UgaXNzdWVzLiBBbmQsIHRoZSB3ZWJzaXRlcyB5b3UgdmlzaXQgbWF5IGJlIGNvbGxlY3RlZCBhbmQgc2hhcmVkIGJ5IHdoYXRldmVyIGVudGl0eSBvd25zIHRoZSBETlMgc2VydmljZS48L3A+XG5cdDxCdG4+Q29udGludWU8L0J0bj5cbjwvc2VjdGlvbj5cbns6ZWxzZX1cbjxzZWN0aW9uPlxuXHQ8aDI+U2V0dXAgUXVhZDk8L2gyPlxuXHQ8cD5RdWFkOSBpcyBhIGZyZWUsIG5vdC1mb3ItcHJvZml0IHNlY3VyaXR5IHNvbHV0aW9uIHRoYXQgdXNlcyB0aGUgRE5TIHRvIHByb3RlY3QgeW91ciBzeXN0ZW0gYWdhaW5zdCB0aGUgbW9zdCBjb21tb24gY3liZXIgdGhyZWF0cy4gTm90IG9ubHkgZG9lcyBpdCAgcHJlc2VydmUgYW5kIHByb3RlY3QgeW91ciBwcml2YWN5LCBpdCB3aWxsIGFsc28gaW1wcm92ZSB5b3VyIHN5c3RlbeKAmXMgcGVyZm9ybWFuY2UhIEl04oCZcyBsaWtlIGEgcGFpbmxlc3MgaW1tdW5pemF0aW9uIGZvciB5b3VyIGNvbXB1dGVyIGFuZCBkZXZpY2VzLjwvcD5cblx0PGRpdiBjbGFzczphY3RpdmU9XCJ7Y3VycmVudCA9PT0gJ21hYyd9XCIgb246Y2xpY2s9XCJ7KCkgPT4gY3VycmVudCA9ICdtYWMnfVwiPlxuXHRcdDxwPlNldHVwIFF1YWQ5IGZvciBNYWM6PC9wPlxuXHRcdHsjaWYgY3VycmVudD09PSdtYWMnfVxuXHRcdDxpZnJhbWUgdGl0bGU9XCJTZXR1cCBRdWFkOSBmb3IgbWFjXCIgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9OTTRBZGZFbkFtWVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XG5cdFx0ey9pZn1cblx0PC9kaXY+XG5cdFx0PGhyPlxuIFx0PGRpdiBjbGFzczphY3RpdmU9XCJ7Y3VycmVudCA9PT0gJ3BjJ31cIiBvbjpjbGljaz1cInsoKSA9PiBjdXJyZW50ID0gJ3BjJ31cIj5cblx0XHQgPHA+U2V0dXAgUXVhZDkgZm9yIFBDOjxwPlxuXHRcdCB7I2lmIGN1cnJlbnQ9PT0ncGMnfVxuXHRcdCA8aWZyYW1lIHRpdGxlPVwiU2V0dXAgUXVhZDkgZm9yIFdpbmRvd3NcIiB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL2F1alVsM3l0Nm5NXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgey9pZn1cbiAgICA8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8Q29tcGxldGU+U2V0dXAgQ29tcGxldGU8L0NvbXBsZXRlPlxuXHRcdDxDb21wbGV0ZSBzdWNjZXNzPXtmYWxzZX0+RG9uJ3QgY2FyZSwgbGV0IHRoZW4gc25vb3A8L0NvbXBsZXRlPlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbnsvaWZ9XG48QmFjay8+XG48L1RyYW5zPlxuPHN0eWxlPlxuICAgLmJ1dHRvbi1ob2xkZXIge1xuXHR3aWR0aDogMjd2dztcblx0ZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICB9XG4gICBidXR0b24ge1xuXHQgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdCAgIG1hcmdpbjogMTBweDtcblx0ICAgYm9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG5cdCAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkE4Qk8sR0FBTyxRQUFHLEtBQUs7NkJBT2QsR0FBTyxRQUFHLElBQUk7Ozs7Ozs7Ozs7OzthQU1ELEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRDQWZMLEdBQU8sUUFBSyxLQUFLOzs7Ozs0Q0FPaEIsR0FBTyxRQUFLLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQUwvQixHQUFPLFFBQUcsS0FBSzs7Ozs7Ozs7Ozs7OzZDQUZELEdBQU8sUUFBSyxLQUFLOzs7bUJBUzlCLEdBQU8sUUFBRyxJQUFJOzs7Ozs7Ozs7Ozs7NkNBRkEsR0FBTyxRQUFLLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBbEJqQyxHQUFLLE9BQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FmTixRQUFRLEdBQUcscUJBQXFCOzs7Q0FRbkMsT0FBTzs2QkFBYSxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDOzs7S0FDaEQsT0FBTyxHQUFHLFNBQVM7Ozs7Ozs7Ozs2Q0FpQmtDLE9BQU8sR0FBRyxLQUFLOytDQU9mLE9BQU8sR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
