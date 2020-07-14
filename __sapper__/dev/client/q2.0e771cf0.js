import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as createEventDispatcher, v as validate_slots, Q as onMount, R as afterUpdate, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, j as attr_dev, k as add_location, l as insert_dev, A as add_render_callback, B as create_bidirectional_transition, T as get_binding_group_value, N as validate_each_argument, t as text, h as claim_text, m as append_dev, U as listen_dev, n as noop, M as set_data_dev, P as destroy_each } from './client.fe7a0447.js';
import { s as slide, q as quintOut, a as quintIn } from './index.0c0fb0ea.js';

/* src/routes/quiz/q2.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/q2.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[15] = list[i];
	child_ctx[17] = i;
	return child_ctx;
}

// (107:2) {:else}
function create_else_block(ctx) {
	let h1;
	let t0;
	let t1;
	let h30;
	let t2;
	let t3;
	let h31;
	let t4;
	let t5;
	let ul;
	let li0;
	let t6;
	let t7;
	let li1;
	let t8;
	let t9;
	let li2;
	let t10;
	let t11;
	let li3;
	let t12;
	let t13;
	let li4;
	let t14;
	let t15;
	let button;
	let t16;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Switch Search Engine");
			t1 = space();
			h30 = element("h3");
			t2 = text("How to change your default browser for windows");
			t3 = space();
			h31 = element("h3");
			t4 = text("how to change your defualt browser for mac");
			t5 = space();
			ul = element("ul");
			li0 = element("li");
			t6 = text("Option 1");
			t7 = space();
			li1 = element("li");
			t8 = text("Option 2");
			t9 = space();
			li2 = element("li");
			t10 = text("Option 3");
			t11 = space();
			li3 = element("li");
			t12 = text("Option 4");
			t13 = space();
			li4 = element("li");
			t14 = text("Option 5");
			t15 = space();
			button = element("button");
			t16 = text("Complete Challenge");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Switch Search Engine");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			h30 = claim_element(nodes, "H3", {});
			var h30_nodes = children(h30);
			t2 = claim_text(h30_nodes, "How to change your default browser for windows");
			h30_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			h31 = claim_element(nodes, "H3", {});
			var h31_nodes = children(h31);
			t4 = claim_text(h31_nodes, "how to change your defualt browser for mac");
			h31_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			t6 = claim_text(li0_nodes, "Option 1");
			li0_nodes.forEach(detach_dev);
			t7 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			t8 = claim_text(li1_nodes, "Option 2");
			li1_nodes.forEach(detach_dev);
			t9 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			t10 = claim_text(li2_nodes, "Option 3");
			li2_nodes.forEach(detach_dev);
			t11 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", { class: true });
			var li3_nodes = children(li3);
			t12 = claim_text(li3_nodes, "Option 4");
			li3_nodes.forEach(detach_dev);
			t13 = claim_space(ul_nodes);
			li4 = claim_element(ul_nodes, "LI", { class: true });
			var li4_nodes = children(li4);
			t14 = claim_text(li4_nodes, "Option 5");
			li4_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			t15 = claim_space(nodes);
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t16 = claim_text(button_nodes, "Complete Challenge");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 107, 3, 3253);
			add_location(h30, file, 108, 3, 3286);
			add_location(h31, file, 109, 3, 3346);
			attr_dev(li0, "class", "svelte-c95n2i");
			add_location(li0, file, 111, 4, 3411);
			attr_dev(li1, "class", "svelte-c95n2i");
			add_location(li1, file, 112, 4, 3433);
			attr_dev(li2, "class", "svelte-c95n2i");
			add_location(li2, file, 113, 4, 3455);
			attr_dev(li3, "class", "svelte-c95n2i");
			add_location(li3, file, 114, 4, 3477);
			attr_dev(li4, "class", "svelte-c95n2i");
			add_location(li4, file, 115, 4, 3499);
			attr_dev(ul, "class", "svelte-c95n2i");
			add_location(ul, file, 110, 3, 3402);
			attr_dev(button, "class", "btn-dark svelte-c95n2i");
			add_location(button, file, 117, 3, 3529);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, h30, anchor);
			append_dev(h30, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, h31, anchor);
			append_dev(h31, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, t6);
			append_dev(ul, t7);
			append_dev(ul, li1);
			append_dev(li1, t8);
			append_dev(ul, t9);
			append_dev(ul, li2);
			append_dev(li2, t10);
			append_dev(ul, t11);
			append_dev(ul, li3);
			append_dev(li3, t12);
			append_dev(ul, t13);
			append_dev(ul, li4);
			append_dev(li4, t14);
			insert_dev(target, t15, anchor);
			insert_dev(target, button, anchor);
			append_dev(button, t16);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*complete*/ ctx[4], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(h30);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(h31);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(ul);
			if (detaching) detach_dev(t15);
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(107:2) {:else}",
		ctx
	});

	return block;
}

// (101:23) 
function create_if_block_1(ctx) {
	let h2;
	let t0_value = /*browserChoice*/ ctx[5][/*choice*/ ctx[1]].name + "";
	let t0;
	let t1;
	let p0;
	let t2;
	let t3_value = /*browserChoice*/ ctx[5][/*choice*/ ctx[1]].safety + "";
	let t3;
	let t4;
	let p1;
	let t5_value = /*browserChoice*/ ctx[5][/*choice*/ ctx[1]].body + "";
	let t5;
	let t6;
	let button;
	let t7;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			h2 = element("h2");
			t0 = text(t0_value);
			t1 = space();
			p0 = element("p");
			t2 = text("Safety level: ");
			t3 = text(t3_value);
			t4 = space();
			p1 = element("p");
			t5 = text(t5_value);
			t6 = space();
			button = element("button");
			t7 = text("Check Alternatives");
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p0 = claim_element(nodes, "P", { id: true, class: true });
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Safety level: ");
			t3 = claim_text(p0_nodes, t3_value);
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, t5_value);
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t7 = claim_text(button_nodes, "Check Alternatives");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 102, 3, 3011);
			attr_dev(p0, "id", "warning");
			attr_dev(p0, "class", "svelte-c95n2i");
			add_location(p0, file, 103, 3, 3052);
			add_location(p1, file, 104, 3, 3120);
			attr_dev(button, "class", "btn-dark svelte-c95n2i");
			add_location(button, file, 105, 3, 3159);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t2);
			append_dev(p0, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, button, anchor);
			append_dev(button, t7);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*showAlternatives*/ ctx[7], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*choice*/ 2 && t0_value !== (t0_value = /*browserChoice*/ ctx[5][/*choice*/ ctx[1]].name + "")) set_data_dev(t0, t0_value);
			if (dirty & /*choice*/ 2 && t3_value !== (t3_value = /*browserChoice*/ ctx[5][/*choice*/ ctx[1]].safety + "")) set_data_dev(t3, t3_value);
			if (dirty & /*choice*/ 2 && t5_value !== (t5_value = /*browserChoice*/ ctx[5][/*choice*/ ctx[1]].body + "")) set_data_dev(t5, t5_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(101:23) ",
		ctx
	});

	return block;
}

// (87:2) {#if section==0}
function create_if_block(ctx) {
	let h1;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let form;
	let t4;
	let section_1;
	let button;
	let t5;
	let mounted;
	let dispose;
	let each_value = /*browserChoice*/ ctx[5];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text(/*headline*/ ctx[2]);
			t1 = space();
			p = element("p");
			t2 = text(/*body*/ ctx[3]);
			t3 = space();
			form = element("form");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = space();
			section_1 = element("section");
			button = element("button");
			t5 = text("Submit");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*headline*/ ctx[2]);
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, /*body*/ ctx[3]);
			p_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			form = claim_element(nodes, "FORM", { class: true });
			var form_nodes = children(form);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(form_nodes);
			}

			form_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			section_1 = claim_element(nodes, "SECTION", { id: true });
			var section_1_nodes = children(section_1);
			button = claim_element(section_1_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t5 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach_dev);
			section_1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 87, 2, 2651);
			add_location(p, file, 88, 2, 2673);
			attr_dev(form, "class", "svelte-c95n2i");
			add_location(form, file, 89, 2, 2690);
			attr_dev(button, "class", "btn-dark svelte-c95n2i");
			add_location(button, file, 98, 3, 2903);
			attr_dev(section_1, "id", "next-skip");
			add_location(section_1, file, 97, 2, 2874);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, form, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(form, null);
			}

			insert_dev(target, t4, anchor);
			insert_dev(target, section_1, anchor);
			append_dev(section_1, button);
			append_dev(button, t5);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*showResults*/ ctx[6], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*headline*/ 4) set_data_dev(t0, /*headline*/ ctx[2]);
			if (dirty & /*body*/ 8) set_data_dev(t2, /*body*/ ctx[3]);

			if (dirty & /*browserChoice, choice*/ 34) {
				each_value = /*browserChoice*/ ctx[5];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(form, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(form);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(section_1);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(87:2) {#if section==0}",
		ctx
	});

	return block;
}

// (91:3) {#each browserChoice as browsers, index}
function create_each_block(ctx) {
	let label;
	let input;
	let input_value_value;
	let t0;
	let t1_value = /*browsers*/ ctx[15].name + "";
	let t1;
	let t2;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			label = element("label");
			input = element("input");
			t0 = space();
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			label = claim_element(nodes, "LABEL", { class: true });
			var label_nodes = children(label);
			input = claim_element(label_nodes, "INPUT", { type: true, value: true });
			t0 = claim_space(label_nodes);
			t1 = claim_text(label_nodes, t1_value);
			t2 = claim_space(label_nodes);
			label_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(input, "type", "checkbox");
			input.__value = input_value_value = /*index*/ ctx[17];
			input.value = input.__value;
			/*$$binding_groups*/ ctx[9][0].push(input);
			add_location(input, file, 92, 5, 2758);
			attr_dev(label, "class", "svelte-c95n2i");
			add_location(label, file, 91, 4, 2745);
		},
		m: function mount(target, anchor) {
			insert_dev(target, label, anchor);
			append_dev(label, input);
			input.checked = ~/*choice*/ ctx[1].indexOf(input.__value);
			append_dev(label, t0);
			append_dev(label, t1);
			append_dev(label, t2);

			if (!mounted) {
				dispose = listen_dev(input, "change", /*input_change_handler*/ ctx[8]);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*choice*/ 2) {
				input.checked = ~/*choice*/ ctx[1].indexOf(input.__value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(label);
			/*$$binding_groups*/ ctx[9][0].splice(/*$$binding_groups*/ ctx[9][0].indexOf(input), 1);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(91:3) {#each browserChoice as browsers, index}",
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
		if (/*section*/ ctx[0] == 0) return create_if_block;
		if (/*section*/ ctx[0] == 1) return create_if_block_1;
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ux4qy8\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Search Engine";
			attr_dev(div, "class", "quiz-holder svelte-c95n2i");
			add_location(div, file, 85, 1, 2537);
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

	function complete() {
		dispatch("message", { question: 1, complete: "true" });
	}

	let q1Steps = [
		{
			stepNum: "1",
			h2: "What Search Engine do you use?",
			name: "Introduction",
			classn: "complete",
			d: "1 / 3",
			browsers: ["Google Chrome", "DuckDuckGo", "Bing", "Something", "Something"],
			copy: "Did you know everything time you look up something using search engine, you are giving your information to thousands of 3rd party advertisers? Vast amount of your data has been taken from you without a single consent only to manipulate your purchase habit and long-term behavior. In this exercise, we will walk through with you how to avoid...."
		}
	];

	let browserChoice = [
		{
			name: "Google Chrome",
			value: 1,
			safety: "37%",
			body: "Google Chrome collectes X number of individual data per year. Google probably knows more about you than even Facebook does, thanks to the things you tell it when you type queries into its search engine. Though that’s just the tip of how it tracks you. It also has its tracking infrastructure embedded on three-quarters of the top million websites. So chances are it’s following what you’re browsing online."
		},
		{
			name: "DuckDuckGo",
			value: 2,
			safety: "73%",
			body: "Something something"
		},
		{
			name: "DuckDuckGo",
			value: 3,
			safety: 1,
			body: "duckduckgo is so freaking awesome. omg."
		},
		{
			name: "something1",
			value: 4,
			safety: 1,
			body: "maybe switch to duckduckgo"
		},
		{
			name: "something2",
			value: 5,
			safety: 1,
			body: "pooooooor decisions  hahahahah"
		}
	];

	let section = 0;

	function stepUp() {
		$$invalidate(11, q++, q);
		$$invalidate(10, q1Steps[q].classn = "complete", q1Steps);

		if (q == 2) {
			isActive = true;
		}

		if (q > 2) {
			complete();
		}
	}

	let choice = ["Google Chrome"];

	function showResults(event) {
		$$invalidate(0, section = 1);
	}

	function showAlternatives(event) {
		$$invalidate(0, section = 2);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Q2> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q2", $$slots, []);
	const $$binding_groups = [[]];

	function input_change_handler() {
		choice = get_binding_group_value($$binding_groups[0], this.__value, this.checked);
		$$invalidate(1, choice);
	}

	$$self.$capture_state = () => ({
		onMount,
		afterUpdate,
		createEventDispatcher,
		slide,
		quintOut,
		quintIn,
		dispatch,
		complete,
		q1Steps,
		browserChoice,
		section,
		stepUp,
		choice,
		showResults,
		showAlternatives,
		q,
		headline,
		body,
		fraction
	});

	$$self.$inject_state = $$props => {
		if ("q1Steps" in $$props) $$invalidate(10, q1Steps = $$props.q1Steps);
		if ("browserChoice" in $$props) $$invalidate(5, browserChoice = $$props.browserChoice);
		if ("section" in $$props) $$invalidate(0, section = $$props.section);
		if ("choice" in $$props) $$invalidate(1, choice = $$props.choice);
		if ("q" in $$props) $$invalidate(11, q = $$props.q);
		if ("headline" in $$props) $$invalidate(2, headline = $$props.headline);
		if ("body" in $$props) $$invalidate(3, body = $$props.body);
		if ("fraction" in $$props) fraction = $$props.fraction;
	};

	let q;
	let headline;
	let body;
	let fraction;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*q1Steps, q*/ 3072) {
			 $$invalidate(2, headline = q1Steps[q].h2);
		}

		if ($$self.$$.dirty & /*q1Steps, q*/ 3072) {
			 $$invalidate(3, body = q1Steps[q].copy);
		}

		if ($$self.$$.dirty & /*q1Steps, q*/ 3072) {
			 fraction = q1Steps[q].d;
		}
	};

	 $$invalidate(11, q = 0);

	return [
		section,
		choice,
		headline,
		body,
		complete,
		browserChoice,
		showResults,
		showAlternatives,
		input_change_handler,
		$$binding_groups
	];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTIuMGU3NzFjZjAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgYWZ0ZXJVcGRhdGUgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHQvL2ltcG9ydCBDb21wbGV0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUnXG5cdGltcG9ydCB7IHNsaWRlIH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIGltcG9ydCB7IHF1aW50T3V0LCBxdWludEluIH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG5cdGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cblx0ZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMSxcblx0XHRcdGNvbXBsZXRlOiAndHJ1ZSdcblx0XHR9KTtcblx0fVxuXHRcdGxldCBxMVN0ZXBzID0gW1xuXHRcdHsgc3RlcE51bTogJzEnLCBcblx0XHRoMjogJ1doYXQgU2VhcmNoIEVuZ2luZSBkbyB5b3UgdXNlPycsIFxuXHRcdG5hbWU6ICdJbnRyb2R1Y3Rpb24nLCBcblx0XHRjbGFzc246ICdjb21wbGV0ZScsXG5cdFx0ZDogJzEgLyAzJyxcblx0XHRicm93c2VyczogWydHb29nbGUgQ2hyb21lJywgJ0R1Y2tEdWNrR28nLCAnQmluZycsICdTb21ldGhpbmcnLCAnU29tZXRoaW5nJ10sXG5cdFx0Y29weTogJ0RpZCB5b3Uga25vdyBldmVyeXRoaW5nIHRpbWUgeW91IGxvb2sgdXAgc29tZXRoaW5nIHVzaW5nIHNlYXJjaCBlbmdpbmUsIHlvdSBhcmUgZ2l2aW5nIHlvdXIgaW5mb3JtYXRpb24gdG8gdGhvdXNhbmRzIG9mIDNyZCBwYXJ0eSBhZHZlcnRpc2Vycz8gVmFzdCBhbW91bnQgb2YgeW91ciBkYXRhIGhhcyBiZWVuIHRha2VuIGZyb20geW91IHdpdGhvdXQgYSBzaW5nbGUgY29uc2VudCBvbmx5IHRvIG1hbmlwdWxhdGUgeW91ciBwdXJjaGFzZSBoYWJpdCBhbmQgbG9uZy10ZXJtIGJlaGF2aW9yLiBJbiB0aGlzIGV4ZXJjaXNlLCB3ZSB3aWxsIHdhbGsgdGhyb3VnaCB3aXRoIHlvdSBob3cgdG8gYXZvaWQuLi4uJ31cblx0XHRdXG5cdFx0bGV0IGJyb3dzZXJDaG9pY2UgPSBbXG5cdFx0XHR7bmFtZTogJ0dvb2dsZSBDaHJvbWUnLFxuXHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRzYWZldHk6JzM3JScsXG5cdFx0XHRib2R5OidHb29nbGUgQ2hyb21lIGNvbGxlY3RlcyBYIG51bWJlciBvZiBpbmRpdmlkdWFsIGRhdGEgcGVyIHllYXIuIEdvb2dsZSBwcm9iYWJseSBrbm93cyBtb3JlIGFib3V0IHlvdSB0aGFuIGV2ZW4gRmFjZWJvb2sgZG9lcywgdGhhbmtzIHRvIHRoZSB0aGluZ3MgeW91IHRlbGwgaXQgd2hlbiB5b3UgdHlwZSBxdWVyaWVzIGludG8gaXRzIHNlYXJjaCBlbmdpbmUuIFRob3VnaCB0aGF04oCZcyBqdXN0IHRoZSB0aXAgb2YgaG93IGl0IHRyYWNrcyB5b3UuIEl0IGFsc28gaGFzIGl0cyB0cmFja2luZyBpbmZyYXN0cnVjdHVyZSBlbWJlZGRlZCBvbiB0aHJlZS1xdWFydGVycyBvZiB0aGUgdG9wIG1pbGxpb24gd2Vic2l0ZXMuIFNvIGNoYW5jZXMgYXJlIGl04oCZcyBmb2xsb3dpbmcgd2hhdCB5b3XigJlyZSBicm93c2luZyBvbmxpbmUuJ30sXG5cdFx0XHR7bmFtZTogJ0R1Y2tEdWNrR28nLFxuXHRcdFx0dmFsdWU6IDIsXG5cdFx0XHRzYWZldHk6JzczJScsXG5cdFx0XHRib2R5OidTb21ldGhpbmcgc29tZXRoaW5nJ30sXG5cdFx0XHR7bmFtZTogJ0R1Y2tEdWNrR28nLFxuXHRcdFx0dmFsdWU6IDMsXG5cdFx0XHRzYWZldHk6MSxcblx0XHRcdGJvZHk6J2R1Y2tkdWNrZ28gaXMgc28gZnJlYWtpbmcgYXdlc29tZS4gb21nLicsfSxcblx0XHRcdHtuYW1lOiAnc29tZXRoaW5nMScsXG5cdFx0XHR2YWx1ZTogNCxcblx0XHRcdHNhZmV0eToxLFxuXHRcdFx0Ym9keTonbWF5YmUgc3dpdGNoIHRvIGR1Y2tkdWNrZ28nLH0sXG5cdFx0XHR7bmFtZTogJ3NvbWV0aGluZzInLFxuXHRcdFx0dmFsdWU6IDUsXG5cdFx0XHRzYWZldHk6MSxcblx0XHRcdGJvZHk6J3Bvb29vb29vciBkZWNpc2lvbnMgIGhhaGFoYWhhaCcsfSxcblx0XHRcdFxuXHRcdF1cblx0XHRcblx0XHQkOiBxID0gMDtcblx0XHRsZXQgc2VjdGlvbiA9MDtcblx0XHRmdW5jdGlvbiBzdGVwVXAoKSB7XG5cdFx0XHRxKys7XG5cdFx0XHRxMVN0ZXBzW3FdLmNsYXNzbiA9ICdjb21wbGV0ZSc7XG5cdFx0XHRpZiAocSA9PSAyICl7XG5cdFx0XHRcdGlzQWN0aXZlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChxID4gMikge1xuXHRcdFx0XHRjb21wbGV0ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQkOiBoZWFkbGluZSA9IHExU3RlcHNbcV0uaDI7XG5cdFx0JDogYm9keSA9IHExU3RlcHNbcV0uY29weTtcblx0XHQkOiBmcmFjdGlvbiA9IHExU3RlcHNbcV0uZDtcblx0XG5cdFx0bGV0IGNob2ljZSA9IFsnR29vZ2xlIENocm9tZSddO1xuXHRcdGZ1bmN0aW9uIHNob3dSZXN1bHRzKGV2ZW50KSB7XG5cdFx0XHRzZWN0aW9uID0xXG5cdFx0fVxuXHRcdGZ1bmN0aW9uIHNob3dBbHRlcm5hdGl2ZXMoZXZlbnQpIHtcblx0XHRcdHNlY3Rpb249Mjtcblx0XHR9XG5cdFx0XG5cdDwvc2NyaXB0PlxuXHQ8c3ZlbHRlOmhlYWQ+XG5cdFx0PHRpdGxlPlNlYXJjaCBFbmdpbmU8L3RpdGxlPlxuXHQ8L3N2ZWx0ZTpoZWFkPlxuPCEtLSA8c2VjdGlvbiBpZD1cInByb2dyZXNzXCI+XG5cdFx0PGgzPlNlYXJjaCBFbmdpbmUge2ZyYWN0aW9ufTwvaDM+XG5cdFx0PHVsPlxuXHRcdFx0eyNlYWNoIHExU3RlcHMgYXMgc3RlcH1cblx0XHRcdFx0PGxpIGNsYXNzPXtzdGVwLmNsYXNzbn0gPntzdGVwLm5hbWV9PC9saT5cblx0XHRcdHsvZWFjaH1cblx0XHQ8L3VsPlxuXHQ8L3NlY3Rpb24+IC0tPlxuXHRcblx0XG5cdDxkaXYgY2xhc3M9J3F1aXotaG9sZGVyJyB0cmFuc2l0aW9uOnNsaWRlPVwie3tkZWxheTogMTAwLCBkdXJhdGlvbjogNDAwLCBlYXNpbmc6IHF1aW50T3V0fX1cIj5cblx0XHR7I2lmIHNlY3Rpb249PTB9XG5cdFx0PGgxPntoZWFkbGluZX08L2gxPlxuXHRcdDxwPntib2R5fTwvcD4gXG5cdFx0PGZvcm0+XG5cdFx0XHR7I2VhY2ggYnJvd3NlckNob2ljZSBhcyBicm93c2VycywgaW5kZXh9XG5cdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgYmluZDpncm91cD17Y2hvaWNlfSB2YWx1ZT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0e2Jyb3dzZXJzLm5hbWV9XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHR7L2VhY2h9XG5cdFx0PC9mb3JtPlxuXHRcdDxzZWN0aW9uIGlkPSduZXh0LXNraXAnPiBcblx0XHRcdDxidXR0b24gb246Y2xpY2s9e3Nob3dSZXN1bHRzfSBjbGFzcz0nYnRuLWRhcmsnPlN1Ym1pdDwvYnV0dG9uPlxuXHRcdDwvc2VjdGlvbj5cblx0XHR7OmVsc2UgaWYgc2VjdGlvbj09MX1cblx0XHRcdFxuXHRcdFx0PGgyPnticm93c2VyQ2hvaWNlW2Nob2ljZV0ubmFtZX08L2gyPlxuXHRcdFx0PHAgaWQ9J3dhcm5pbmcnPlNhZmV0eSBsZXZlbDoge2Jyb3dzZXJDaG9pY2VbY2hvaWNlXS5zYWZldHl9PC9wPlxuXHRcdFx0PHA+e2Jyb3dzZXJDaG9pY2VbY2hvaWNlXS5ib2R5fTwvcD5cblx0XHRcdDxidXR0b24gY2xhc3M9J2J0bi1kYXJrJyBvbjpjbGljaz17c2hvd0FsdGVybmF0aXZlc30+Q2hlY2sgQWx0ZXJuYXRpdmVzPC9idXR0b24+XG5cdFx0ezplbHNlfVxuXHRcdFx0PGgxPlN3aXRjaCBTZWFyY2ggRW5naW5lPC9oMT5cblx0XHRcdDxoMz5Ib3cgdG8gY2hhbmdlIHlvdXIgZGVmYXVsdCBicm93c2VyIGZvciB3aW5kb3dzPC9oMz4gXG5cdFx0XHQ8aDM+aG93IHRvIGNoYW5nZSB5b3VyIGRlZnVhbHQgYnJvd3NlciBmb3IgbWFjPC9oMz4gXG5cdFx0XHQ8dWw+XG5cdFx0XHRcdDxsaT5PcHRpb24gMTwvbGk+XG5cdFx0XHRcdDxsaT5PcHRpb24gMjwvbGk+XG5cdFx0XHRcdDxsaT5PcHRpb24gMzwvbGk+XG5cdFx0XHRcdDxsaT5PcHRpb24gNDwvbGk+XG5cdFx0XHRcdDxsaT5PcHRpb24gNTwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdFx0PGJ1dHRvbiBjbGFzcz0nYnRuLWRhcmsnIG9uOmNsaWNrPXtjb21wbGV0ZX0+Q29tcGxldGUgQ2hhbGxlbmdlPC9idXR0b24+XG5cblx0XHR7L2lmfVxuXG5cdDwvZGl2PlxuXHRcdFxuXHRcdFxuXHQ8c3R5bGU+XG5cdFx0bWFpbntcblx0XHRcdGZsZXgtZmxvdzogcm93IHdyYXA7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0fVxuXHQgICAucXVpei1ob2xkZXIge1xuXHRcdCAgIGRpc3BsYXk6IGJsb2NrO1xuXHRcdCAgIHdpZHRoOiA2NXZ3OyAvKiA3Mi41IG9yaWdpbmFseSAqL1xuXHRcdCAgIGxlZnQ6IDIwdnc7XG5cdFx0ICAgaGVpZ2h0OiAxMDB2aDtcblx0XHQgICBwYWRkaW5nOiAyMHB4IDUwcHg7XG5cdCAgIH1cblx0ICAgI3dhcm5pbmcge1xuXHRcdFx0Y29sb3I6IHJlZDtcblx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0ICAgfVxuXHQgICAuc3RlcHtcblx0XHRcdG1hcmdpbi1ib3R0b206IDU1cHg7XG5cdCAgIH1cblx0ICAgI3Byb2dyZXNzIHtcblx0XHQgICBtYXJnaW4tdG9wOiA1MHB4O1xuXHQgICB9XG5cdCAgIHVsIHtcblx0XHQgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTVweDtcblx0ICAgfVxuXHQgICBsaSB7XG5cdFx0ICAgbWFyZ2luOiAzMHB4IDBweDtcblx0ICAgfVxuXHQgICAuaW5jb21wbGV0ZSB7XG5cdFx0XHRjb2xvcjogI2EwYTBhMDtcblx0XHRcdGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xuXHRcdH1cblx0XHQuY29tcGxldGUge1xuXHRcdFx0bGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuXHRcdH1cblx0XHQuU2lkZS1oZWFkbGluZSB7XG5cdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdH1cblx0XHQuYnRuLWRhcmsge1xuXHRcdFx0Y29sb3I6d2hpdGU7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjMEYyMDMzO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdFx0d2lkdGg6IDMwJTtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRcdH1cblx0XHRidXR0b24ge1xuXHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0cGFkZGluZzogNXB4IDEwcHg7XG5cdFx0fVxuXHRcdGZvcm0ge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZmxvdzogY29sdW1uO1xuXHRcdH1cblx0XHRsYWJlbCB7XG5cdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdH1cblx0PC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
