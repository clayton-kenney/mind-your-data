import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, L as validate_each_argument, o as createEventDispatcher, v as validate_slots, Q as onMount, O as afterUpdate, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, j as attr_dev, X as null_to_empty, k as add_location, l as insert_dev, m as append_dev, K as set_data_dev, a as space, q as query_selector_all, c as claim_space, R as add_render_callback, T as create_in_transition, U as create_out_transition, N as destroy_each, V as listen_dev, n as noop } from './client.15514fc7.js';
import { f as fly, q as quintOut, a as quintIn } from './index.b08ea08f.js';

/* src/routes/quiz/q2.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/q2.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[15] = list[i];
	child_ctx[17] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[18] = list[i];
	return child_ctx;
}

// (79:3) {#each q1Steps as step}
function create_each_block_1(ctx) {
	let li;
	let t_value = /*step*/ ctx[18].name + "";
	let t;
	let li_class_value;

	const block = {
		c: function create() {
			li = element("li");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			t = claim_text(li_nodes, t_value);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(li, "class", li_class_value = "" + (null_to_empty(/*step*/ ctx[18].classn) + " svelte-c95n2i"));
			add_location(li, file, 79, 4, 2449);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*q1Steps*/ 1 && t_value !== (t_value = /*step*/ ctx[18].name + "")) set_data_dev(t, t_value);

			if (dirty & /*q1Steps*/ 1 && li_class_value !== (li_class_value = "" + (null_to_empty(/*step*/ ctx[18].classn) + " svelte-c95n2i"))) {
				attr_dev(li, "class", li_class_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(79:3) {#each q1Steps as step}",
		ctx
	});

	return block;
}

// (106:2) {:else}
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
			add_location(h1, file, 106, 3, 3282);
			add_location(h30, file, 107, 3, 3315);
			add_location(h31, file, 108, 3, 3375);
			attr_dev(li0, "class", "svelte-c95n2i");
			add_location(li0, file, 110, 4, 3440);
			attr_dev(li1, "class", "svelte-c95n2i");
			add_location(li1, file, 111, 4, 3462);
			attr_dev(li2, "class", "svelte-c95n2i");
			add_location(li2, file, 112, 4, 3484);
			attr_dev(li3, "class", "svelte-c95n2i");
			add_location(li3, file, 113, 4, 3506);
			attr_dev(li4, "class", "svelte-c95n2i");
			add_location(li4, file, 114, 4, 3528);
			attr_dev(ul, "class", "svelte-c95n2i");
			add_location(ul, file, 109, 3, 3431);
			attr_dev(button, "class", "btn-dark svelte-c95n2i");
			add_location(button, file, 116, 3, 3558);
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
				dispose = listen_dev(button, "click", /*complete*/ ctx[6], false, false, false);
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
		source: "(106:2) {:else}",
		ctx
	});

	return block;
}

// (100:23) 
function create_if_block_1(ctx) {
	let h2;
	let t0_value = /*browserChoice*/ ctx[7][/*choice*/ ctx[2]].name + "";
	let t0;
	let t1;
	let p0;
	let t2;
	let t3_value = /*browserChoice*/ ctx[7][/*choice*/ ctx[2]].safety + "";
	let t3;
	let t4;
	let p1;
	let t5_value = /*browserChoice*/ ctx[7][/*choice*/ ctx[2]].body + "";
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
			add_location(h2, file, 101, 3, 3040);
			attr_dev(p0, "id", "warning");
			attr_dev(p0, "class", "svelte-c95n2i");
			add_location(p0, file, 102, 3, 3081);
			add_location(p1, file, 103, 3, 3149);
			attr_dev(button, "class", "btn-dark svelte-c95n2i");
			add_location(button, file, 104, 3, 3188);
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
				dispose = listen_dev(button, "click", /*showAlternatives*/ ctx[9], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*choice*/ 4 && t0_value !== (t0_value = /*browserChoice*/ ctx[7][/*choice*/ ctx[2]].name + "")) set_data_dev(t0, t0_value);
			if (dirty & /*choice*/ 4 && t3_value !== (t3_value = /*browserChoice*/ ctx[7][/*choice*/ ctx[2]].safety + "")) set_data_dev(t3, t3_value);
			if (dirty & /*choice*/ 4 && t5_value !== (t5_value = /*browserChoice*/ ctx[7][/*choice*/ ctx[2]].body + "")) set_data_dev(t5, t5_value);
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
		source: "(100:23) ",
		ctx
	});

	return block;
}

// (86:2) {#if section==0}
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
	let each_value = /*browserChoice*/ ctx[7];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text(/*headline*/ ctx[3]);
			t1 = space();
			p = element("p");
			t2 = text(/*body*/ ctx[4]);
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
			t0 = claim_text(h1_nodes, /*headline*/ ctx[3]);
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, /*body*/ ctx[4]);
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
			add_location(h1, file, 86, 2, 2685);
			add_location(p, file, 87, 2, 2707);
			attr_dev(form, "class", "svelte-c95n2i");
			add_location(form, file, 88, 2, 2724);
			attr_dev(button, "class", "btn-dark svelte-c95n2i");
			add_location(button, file, 97, 3, 2932);
			attr_dev(section_1, "id", "next-skip");
			add_location(section_1, file, 96, 2, 2903);
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
				dispose = listen_dev(button, "click", /*showResults*/ ctx[8], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*headline*/ 8) set_data_dev(t0, /*headline*/ ctx[3]);
			if (dirty & /*body*/ 16) set_data_dev(t2, /*body*/ ctx[4]);

			if (dirty & /*browserChoice, choice*/ 132) {
				each_value = /*browserChoice*/ ctx[7];
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
		source: "(86:2) {#if section==0}",
		ctx
	});

	return block;
}

// (90:3) {#each browserChoice as browsers, index}
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
			attr_dev(input, "type", "radio");
			input.__value = input_value_value = /*index*/ ctx[17];
			input.value = input.__value;
			/*$$binding_groups*/ ctx[11][0].push(input);
			add_location(input, file, 91, 5, 2792);
			attr_dev(label, "class", "svelte-c95n2i");
			add_location(label, file, 90, 4, 2779);
		},
		m: function mount(target, anchor) {
			insert_dev(target, label, anchor);
			append_dev(label, input);
			input.checked = input.__value === /*choice*/ ctx[2];
			append_dev(label, t0);
			append_dev(label, t1);
			append_dev(label, t2);

			if (!mounted) {
				dispose = listen_dev(input, "change", /*input_change_handler*/ ctx[10]);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*choice*/ 4) {
				input.checked = input.__value === /*choice*/ ctx[2];
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(label);
			/*$$binding_groups*/ ctx[11][0].splice(/*$$binding_groups*/ ctx[11][0].indexOf(input), 1);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(90:3) {#each browserChoice as browsers, index}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let section_1;
	let h3;
	let t1;
	let t2;
	let t3;
	let ul;
	let t4;
	let div;
	let t5;
	let div_intro;
	let div_outro;
	let current;
	let each_value_1 = /*q1Steps*/ ctx[0];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	function select_block_type(ctx, dirty) {
		if (/*section*/ ctx[1] == 0) return create_if_block;
		if (/*section*/ ctx[1] == 1) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			t0 = space();
			section_1 = element("section");
			h3 = element("h3");
			t1 = text("Search Engine ");
			t2 = text(/*fraction*/ ctx[5]);
			t3 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = space();
			div = element("div");
			t5 = text(">\n\t\t");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ux4qy8\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section_1 = claim_element(nodes, "SECTION", { id: true, class: true });
			var section_1_nodes = children(section_1);
			h3 = claim_element(section_1_nodes, "H3", {});
			var h3_nodes = children(h3);
			t1 = claim_text(h3_nodes, "Search Engine ");
			t2 = claim_text(h3_nodes, /*fraction*/ ctx[5]);
			h3_nodes.forEach(detach_dev);
			t3 = claim_space(section_1_nodes);
			ul = claim_element(section_1_nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			section_1_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t5 = claim_text(div_nodes, ">\n\t\t");
			if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Search Engine";
			add_location(h3, file, 76, 2, 2377);
			attr_dev(ul, "class", "svelte-c95n2i");
			add_location(ul, file, 77, 2, 2413);
			attr_dev(section_1, "id", "progress");
			attr_dev(section_1, "class", "svelte-c95n2i");
			add_location(section_1, file, 75, 1, 2351);
			attr_dev(div, "class", "quiz-holder svelte-c95n2i");
			add_location(div, file, 83, 1, 2523);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section_1, anchor);
			append_dev(section_1, h3);
			append_dev(h3, t1);
			append_dev(h3, t2);
			append_dev(section_1, t3);
			append_dev(section_1, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			insert_dev(target, t4, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, t5);
			if_block.m(div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*fraction*/ 32) set_data_dev(t2, /*fraction*/ ctx[5]);

			if (dirty & /*q1Steps*/ 1) {
				each_value_1 = /*q1Steps*/ ctx[0];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}

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
				if (div_outro) div_outro.end(1);
				if (!div_intro) div_intro = create_in_transition(div, fly, { y: 200, duration: 1000, easing: quintOut });
				div_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			if (div_intro) div_intro.invalidate();
			div_outro = create_out_transition(div, fly, { y: -200, duration: 1000, easing: quintIn });
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section_1);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(div);
			if_block.d();
			if (detaching && div_outro) div_outro.end();
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
		$$invalidate(12, q++, q);
		$$invalidate(0, q1Steps[q].classn = "complete", q1Steps);

		if (q == 2) {
			isActive = true;
		}

		if (q > 2) {
			complete();
		}
	}

	let choice = ["Google Chrome"];

	function showResults(event) {
		$$invalidate(1, section = 1);
	}

	function showAlternatives(event) {
		$$invalidate(1, section = 2);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Q2> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q2", $$slots, []);
	const $$binding_groups = [[]];

	function input_change_handler() {
		choice = this.__value;
		$$invalidate(2, choice);
	}

	$$self.$capture_state = () => ({
		onMount,
		afterUpdate,
		createEventDispatcher,
		fly,
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
		if ("q1Steps" in $$props) $$invalidate(0, q1Steps = $$props.q1Steps);
		if ("browserChoice" in $$props) $$invalidate(7, browserChoice = $$props.browserChoice);
		if ("section" in $$props) $$invalidate(1, section = $$props.section);
		if ("choice" in $$props) $$invalidate(2, choice = $$props.choice);
		if ("q" in $$props) $$invalidate(12, q = $$props.q);
		if ("headline" in $$props) $$invalidate(3, headline = $$props.headline);
		if ("body" in $$props) $$invalidate(4, body = $$props.body);
		if ("fraction" in $$props) $$invalidate(5, fraction = $$props.fraction);
	};

	let q;
	let headline;
	let body;
	let fraction;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*q1Steps, q*/ 4097) {
			 $$invalidate(3, headline = q1Steps[q].h2);
		}

		if ($$self.$$.dirty & /*q1Steps, q*/ 4097) {
			 $$invalidate(4, body = q1Steps[q].copy);
		}

		if ($$self.$$.dirty & /*q1Steps, q*/ 4097) {
			 $$invalidate(5, fraction = q1Steps[q].d);
		}
	};

	 $$invalidate(12, q = 0);

	return [
		q1Steps,
		section,
		choice,
		headline,
		body,
		fraction,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTIuN2RiNTM3ZjMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgYWZ0ZXJVcGRhdGUgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHQvL2ltcG9ydCBDb21wbGV0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUnXG5cdGltcG9ydCB7IGZseSB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJztcbiAgICBpbXBvcnQgeyBxdWludE91dCwgcXVpbnRJbiB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXG5cdGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuXHRcdGRpc3BhdGNoKCdtZXNzYWdlJywge1xuXHRcdFx0cXVlc3Rpb246IDEsXG5cdFx0XHRjb21wbGV0ZTogJ3RydWUnXG5cdFx0fSk7XG5cdH1cblx0XHRsZXQgcTFTdGVwcyA9IFtcblx0XHR7IHN0ZXBOdW06ICcxJywgXG5cdFx0aDI6ICdXaGF0IFNlYXJjaCBFbmdpbmUgZG8geW91IHVzZT8nLCBcblx0XHRuYW1lOiAnSW50cm9kdWN0aW9uJywgXG5cdFx0Y2xhc3NuOiAnY29tcGxldGUnLFxuXHRcdGQ6ICcxIC8gMycsXG5cdFx0YnJvd3NlcnM6IFsnR29vZ2xlIENocm9tZScsICdEdWNrRHVja0dvJywgJ0JpbmcnLCAnU29tZXRoaW5nJywgJ1NvbWV0aGluZyddLFxuXHRcdGNvcHk6ICdEaWQgeW91IGtub3cgZXZlcnl0aGluZyB0aW1lIHlvdSBsb29rIHVwIHNvbWV0aGluZyB1c2luZyBzZWFyY2ggZW5naW5lLCB5b3UgYXJlIGdpdmluZyB5b3VyIGluZm9ybWF0aW9uIHRvIHRob3VzYW5kcyBvZiAzcmQgcGFydHkgYWR2ZXJ0aXNlcnM/IFZhc3QgYW1vdW50IG9mIHlvdXIgZGF0YSBoYXMgYmVlbiB0YWtlbiBmcm9tIHlvdSB3aXRob3V0IGEgc2luZ2xlIGNvbnNlbnQgb25seSB0byBtYW5pcHVsYXRlIHlvdXIgcHVyY2hhc2UgaGFiaXQgYW5kIGxvbmctdGVybSBiZWhhdmlvci4gSW4gdGhpcyBleGVyY2lzZSwgd2Ugd2lsbCB3YWxrIHRocm91Z2ggd2l0aCB5b3UgaG93IHRvIGF2b2lkLi4uLid9XG5cdFx0XVxuXHRcdGxldCBicm93c2VyQ2hvaWNlID0gW1xuXHRcdFx0e25hbWU6ICdHb29nbGUgQ2hyb21lJyxcblx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0c2FmZXR5OiczNyUnLFxuXHRcdFx0Ym9keTonR29vZ2xlIENocm9tZSBjb2xsZWN0ZXMgWCBudW1iZXIgb2YgaW5kaXZpZHVhbCBkYXRhIHBlciB5ZWFyLiBHb29nbGUgcHJvYmFibHkga25vd3MgbW9yZSBhYm91dCB5b3UgdGhhbiBldmVuIEZhY2Vib29rIGRvZXMsIHRoYW5rcyB0byB0aGUgdGhpbmdzIHlvdSB0ZWxsIGl0IHdoZW4geW91IHR5cGUgcXVlcmllcyBpbnRvIGl0cyBzZWFyY2ggZW5naW5lLiBUaG91Z2ggdGhhdOKAmXMganVzdCB0aGUgdGlwIG9mIGhvdyBpdCB0cmFja3MgeW91LiBJdCBhbHNvIGhhcyBpdHMgdHJhY2tpbmcgaW5mcmFzdHJ1Y3R1cmUgZW1iZWRkZWQgb24gdGhyZWUtcXVhcnRlcnMgb2YgdGhlIHRvcCBtaWxsaW9uIHdlYnNpdGVzLiBTbyBjaGFuY2VzIGFyZSBpdOKAmXMgZm9sbG93aW5nIHdoYXQgeW914oCZcmUgYnJvd3Npbmcgb25saW5lLid9LFxuXHRcdFx0e25hbWU6ICdEdWNrRHVja0dvJyxcblx0XHRcdHZhbHVlOiAyLFxuXHRcdFx0c2FmZXR5Oic3MyUnLFxuXHRcdFx0Ym9keTonU29tZXRoaW5nIHNvbWV0aGluZyd9LFxuXHRcdFx0e25hbWU6ICdEdWNrRHVja0dvJyxcblx0XHRcdHZhbHVlOiAzLFxuXHRcdFx0c2FmZXR5OjEsXG5cdFx0XHRib2R5OidkdWNrZHVja2dvIGlzIHNvIGZyZWFraW5nIGF3ZXNvbWUuIG9tZy4nLH0sXG5cdFx0XHR7bmFtZTogJ3NvbWV0aGluZzEnLFxuXHRcdFx0dmFsdWU6IDQsXG5cdFx0XHRzYWZldHk6MSxcblx0XHRcdGJvZHk6J21heWJlIHN3aXRjaCB0byBkdWNrZHVja2dvJyx9LFxuXHRcdFx0e25hbWU6ICdzb21ldGhpbmcyJyxcblx0XHRcdHZhbHVlOiA1LFxuXHRcdFx0c2FmZXR5OjEsXG5cdFx0XHRib2R5Oidwb29vb29vb3IgZGVjaXNpb25zICBoYWhhaGFoYWgnLH0sXG5cdFx0XHRcblx0XHRdXG5cdFx0XG5cdFx0JDogcSA9IDA7XG5cdFx0bGV0IHNlY3Rpb24gPTA7XG5cdFx0ZnVuY3Rpb24gc3RlcFVwKCkge1xuXHRcdFx0cSsrO1xuXHRcdFx0cTFTdGVwc1txXS5jbGFzc24gPSAnY29tcGxldGUnO1xuXHRcdFx0aWYgKHEgPT0gMiApe1xuXHRcdFx0XHRpc0FjdGl2ZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocSA+IDIpIHtcblx0XHRcdFx0Y29tcGxldGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0JDogaGVhZGxpbmUgPSBxMVN0ZXBzW3FdLmgyO1xuXHRcdCQ6IGJvZHkgPSBxMVN0ZXBzW3FdLmNvcHk7XG5cdFx0JDogZnJhY3Rpb24gPSBxMVN0ZXBzW3FdLmQ7XG5cdFxuXHRcdGxldCBjaG9pY2UgPSBbJ0dvb2dsZSBDaHJvbWUnXTtcblx0XHRmdW5jdGlvbiBzaG93UmVzdWx0cyhldmVudCkge1xuXHRcdFx0c2VjdGlvbiA9MVxuXHRcdH1cblx0XHRmdW5jdGlvbiBzaG93QWx0ZXJuYXRpdmVzKGV2ZW50KSB7XG5cdFx0XHRzZWN0aW9uPTI7XG5cdFx0fVxuXHRcdFxuXHQ8L3NjcmlwdD5cblx0PHN2ZWx0ZTpoZWFkPlxuXHRcdDx0aXRsZT5TZWFyY2ggRW5naW5lPC90aXRsZT5cblx0PC9zdmVsdGU6aGVhZD5cblx0PHNlY3Rpb24gaWQ9XCJwcm9ncmVzc1wiPlxuXHRcdDxoMz5TZWFyY2ggRW5naW5lIHtmcmFjdGlvbn08L2gzPlxuXHRcdDx1bD5cblx0XHRcdHsjZWFjaCBxMVN0ZXBzIGFzIHN0ZXB9XG5cdFx0XHRcdDxsaSBjbGFzcz17c3RlcC5jbGFzc259ID57c3RlcC5uYW1lfTwvbGk+XG5cdFx0XHR7L2VhY2h9XG5cdFx0PC91bD5cblx0PC9zZWN0aW9uPlxuXHQ8ZGl2IGNsYXNzPSdxdWl6LWhvbGRlcicgaW46Zmx5PVwie3sgeTogMjAwLCBkdXJhdGlvbjogMTAwMCwgZWFzaW5nOiBxdWludE91dCB9fVwiIG91dDpmbHk9XCJ7eyB5OiAtMjAwLCBkdXJhdGlvbjogMTAwMCwgZWFzaW5nOiBxdWludEluIH19XCI+XG4+XG5cdFx0eyNpZiBzZWN0aW9uPT0wfVxuXHRcdDxoMT57aGVhZGxpbmV9PC9oMT5cblx0XHQ8cD57Ym9keX08L3A+IFxuXHRcdDxmb3JtPlxuXHRcdFx0eyNlYWNoIGJyb3dzZXJDaG9pY2UgYXMgYnJvd3NlcnMsIGluZGV4fVxuXHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9cmFkaW8gYmluZDpncm91cD17Y2hvaWNlfSB2YWx1ZT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0e2Jyb3dzZXJzLm5hbWV9XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHR7L2VhY2h9XG5cdFx0PC9mb3JtPlxuXHRcdDxzZWN0aW9uIGlkPSduZXh0LXNraXAnPiBcblx0XHRcdDxidXR0b24gb246Y2xpY2s9e3Nob3dSZXN1bHRzfSBjbGFzcz0nYnRuLWRhcmsnPlN1Ym1pdDwvYnV0dG9uPlxuXHRcdDwvc2VjdGlvbj5cblx0XHR7OmVsc2UgaWYgc2VjdGlvbj09MX1cblx0XHRcdFxuXHRcdFx0PGgyPnticm93c2VyQ2hvaWNlW2Nob2ljZV0ubmFtZX08L2gyPlxuXHRcdFx0PHAgaWQ9J3dhcm5pbmcnPlNhZmV0eSBsZXZlbDoge2Jyb3dzZXJDaG9pY2VbY2hvaWNlXS5zYWZldHl9PC9wPlxuXHRcdFx0PHA+e2Jyb3dzZXJDaG9pY2VbY2hvaWNlXS5ib2R5fTwvcD5cblx0XHRcdDxidXR0b24gY2xhc3M9J2J0bi1kYXJrJyBvbjpjbGljaz17c2hvd0FsdGVybmF0aXZlc30+Q2hlY2sgQWx0ZXJuYXRpdmVzPC9idXR0b24+XG5cdFx0ezplbHNlfVxuXHRcdFx0PGgxPlN3aXRjaCBTZWFyY2ggRW5naW5lPC9oMT5cblx0XHRcdDxoMz5Ib3cgdG8gY2hhbmdlIHlvdXIgZGVmYXVsdCBicm93c2VyIGZvciB3aW5kb3dzPC9oMz4gXG5cdFx0XHQ8aDM+aG93IHRvIGNoYW5nZSB5b3VyIGRlZnVhbHQgYnJvd3NlciBmb3IgbWFjPC9oMz4gXG5cdFx0XHQ8dWw+XG5cdFx0XHRcdDxsaT5PcHRpb24gMTwvbGk+XG5cdFx0XHRcdDxsaT5PcHRpb24gMjwvbGk+XG5cdFx0XHRcdDxsaT5PcHRpb24gMzwvbGk+XG5cdFx0XHRcdDxsaT5PcHRpb24gNDwvbGk+XG5cdFx0XHRcdDxsaT5PcHRpb24gNTwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdFx0PGJ1dHRvbiBjbGFzcz0nYnRuLWRhcmsnIG9uOmNsaWNrPXtjb21wbGV0ZX0+Q29tcGxldGUgQ2hhbGxlbmdlPC9idXR0b24+XG5cblx0XHR7L2lmfVxuXG5cdDwvZGl2PlxuXHRcdFxuXHRcdFxuXHQ8c3R5bGU+XG5cdFx0bWFpbntcblx0XHRcdGZsZXgtZmxvdzogcm93IHdyYXA7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0fVxuXHQgICAucXVpei1ob2xkZXIge1xuXHRcdCAgIGRpc3BsYXk6IGJsb2NrO1xuXHRcdCAgIHdpZHRoOiA2NXZ3OyAvKiA3Mi41IG9yaWdpbmFseSAqL1xuXHRcdCAgIGxlZnQ6IDIwdnc7XG5cdFx0ICAgaGVpZ2h0OiAxMDB2aDtcblx0XHQgICBwYWRkaW5nOiAyMHB4IDUwcHg7XG5cdCAgIH1cblx0ICAgI3dhcm5pbmcge1xuXHRcdFx0Y29sb3I6IHJlZDtcblx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0ICAgfVxuXHQgICAuc3RlcHtcblx0XHRcdG1hcmdpbi1ib3R0b206IDU1cHg7XG5cdCAgIH1cblx0ICAgI3Byb2dyZXNzIHtcblx0XHQgICBtYXJnaW4tdG9wOiA1MHB4O1xuXHQgICB9XG5cdCAgIHVsIHtcblx0XHQgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTVweDtcblx0ICAgfVxuXHQgICBsaSB7XG5cdFx0ICAgbWFyZ2luOiAzMHB4IDBweDtcblx0ICAgfVxuXHQgICAuaW5jb21wbGV0ZSB7XG5cdFx0XHRjb2xvcjogI2EwYTBhMDtcblx0XHRcdGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xuXHRcdH1cblx0XHQuY29tcGxldGUge1xuXHRcdFx0bGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuXHRcdH1cblx0XHQuU2lkZS1oZWFkbGluZSB7XG5cdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdH1cblx0XHQuYnRuLWRhcmsge1xuXHRcdFx0Y29sb3I6d2hpdGU7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjMEYyMDMzO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdFx0d2lkdGg6IDMwJTtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRcdH1cblx0XHRidXR0b24ge1xuXHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0cGFkZGluZzogNXB4IDEwcHg7XG5cdFx0fVxuXHRcdGZvcm0ge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZmxvdzogY29sdW1uO1xuXHRcdH1cblx0XHRsYWJlbCB7XG5cdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdH1cblx0PC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkErRThCLEdBQUksS0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUVBQXhCLEdBQUksS0FBQyxNQUFNOzs7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
