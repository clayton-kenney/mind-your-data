import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, U as empty, n as insert_dev, G as noop, j as detach_dev, V as svg_element, g as claim_element, h as children, k as attr_dev, l as add_location, p as append_dev, y as create_slot, Y as validate_each_argument, H as validate_store, I as component_subscribe, Q as set_store_value, L as afterUpdate, t as transition_in, w as group_outros, b as transition_out, x as check_outros, f as element, C as text, B as space, F as claim_text, E as claim_space, Z as set_style, W as toggle_class, N as set_data_dev, z as update_slot, T as prop_dev, q as add_render_callback, r as create_in_transition, u as create_out_transition, _ as destroy_each, c as create_component, a as claim_component, m as mount_component, e as destroy_component } from './client.30149d39.js';
import { g as cubicOut, s as sineInOut, c as slide, a as fly, f as fade } from './index.26c58c15.js';
import { t as timerActive, c as count, q as quizSteps, p as progress, a as tweened } from './store.66d0e052.js';

/* src/components/Check.svelte generated by Svelte v3.23.2 */

const file = "src/components/Check.svelte";

// (20:0) {:else}
function create_else_block(ctx) {
	let svg;
	let circle0;
	let circle1;

	const block = {
		c: function create() {
			svg = svg_element("svg");
			circle0 = svg_element("circle");
			circle1 = svg_element("circle");
			this.h();
		},
		l: function claim(nodes) {
			svg = claim_element(
				nodes,
				"svg",
				{
					class: true,
					width: true,
					height: true,
					viewBox: true,
					fill: true,
					xmlns: true
				},
				1
			);

			var svg_nodes = children(svg);
			circle0 = claim_element(svg_nodes, "circle", { cx: true, cy: true, r: true, fill: true }, 1);
			children(circle0).forEach(detach_dev);
			circle1 = claim_element(svg_nodes, "circle", { cx: true, cy: true, r: true, fill: true }, 1);
			children(circle1).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(circle0, "cx", "10");
			attr_dev(circle0, "cy", "10");
			attr_dev(circle0, "r", "10");
			attr_dev(circle0, "fill", /*color*/ ctx[1]);
			add_location(circle0, file, 21, 4, 1011);
			attr_dev(circle1, "cx", "9.83301");
			attr_dev(circle1, "cy", "9.99805");
			attr_dev(circle1, "r", "6.62305");
			attr_dev(circle1, "fill", "#303538");
			add_location(circle1, file, 22, 4, 1063);
			attr_dev(svg, "class", "lock svelte-n4s916");
			attr_dev(svg, "width", "20");
			attr_dev(svg, "height", "20");
			attr_dev(svg, "viewBox", "0 0 20 20");
			attr_dev(svg, "fill", "none");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg, file, 20, 0, 898);
		},
		m: function mount(target, anchor) {
			insert_dev(target, svg, anchor);
			append_dev(svg, circle0);
			append_dev(svg, circle1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*color*/ 2) {
				attr_dev(circle0, "fill", /*color*/ ctx[1]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(svg);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(20:0) {:else}",
		ctx
	});

	return block;
}

// (13:22) 
function create_if_block_1(ctx) {
	let svg;
	let circle;
	let path;

	const block = {
		c: function create() {
			svg = svg_element("svg");
			circle = svg_element("circle");
			path = svg_element("path");
			this.h();
		},
		l: function claim(nodes) {
			svg = claim_element(
				nodes,
				"svg",
				{
					class: true,
					width: true,
					height: true,
					viewBox: true,
					fill: true,
					xmlns: true
				},
				1
			);

			var svg_nodes = children(svg);
			circle = claim_element(svg_nodes, "circle", { cx: true, cy: true, r: true, fill: true }, 1);
			children(circle).forEach(detach_dev);
			path = claim_element(svg_nodes, "path", { d: true, fill: true }, 1);
			children(path).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(circle, "cx", "10.5986");
			attr_dev(circle, "cy", "10.1211");
			attr_dev(circle, "r", "10");
			attr_dev(circle, "fill", /*color*/ ctx[1]);
			add_location(circle, file, 14, 4, 435);
			attr_dev(path, "d", "M8.42125 14.9815L4.00747 10.5719C3.7423 10.307 3.7423 9.87749 4.00747 9.61255L4.96776 8.65315C5.23293 8.38821 5.6629 8.38821 5.92808 8.65315L8.90141 11.6236L15.27 5.26119C15.5351 4.99627 15.9651 4.99627 16.2303 5.26119L17.1906 6.22058C17.4557 6.4855 17.4557 6.91504 17.1906 7.17998L9.38156 14.9815C9.11637 15.2464 8.68642 15.2464 8.42125 14.9815Z");
			attr_dev(path, "fill", "#303538");
			add_location(path, file, 15, 4, 497);
			attr_dev(svg, "class", "lock svelte-n4s916");
			attr_dev(svg, "width", "21");
			attr_dev(svg, "height", "21");
			attr_dev(svg, "viewBox", "0 0 21 21");
			attr_dev(svg, "fill", "none");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg, file, 13, 4, 322);
		},
		m: function mount(target, anchor) {
			insert_dev(target, svg, anchor);
			append_dev(svg, circle);
			append_dev(svg, path);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*color*/ 2) {
				attr_dev(circle, "fill", /*color*/ ctx[1]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(svg);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(13:22) ",
		ctx
	});

	return block;
}

// (7:0) {#if active < 1 }
function create_if_block(ctx) {
	let svg;
	let circle;

	const block = {
		c: function create() {
			svg = svg_element("svg");
			circle = svg_element("circle");
			this.h();
		},
		l: function claim(nodes) {
			svg = claim_element(
				nodes,
				"svg",
				{
					class: true,
					width: true,
					height: true,
					viewBox: true,
					fill: true,
					xmlns: true
				},
				1
			);

			var svg_nodes = children(svg);
			circle = claim_element(svg_nodes, "circle", { cx: true, cy: true, r: true, fill: true }, 1);
			children(circle).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(circle, "cx", "9.83301");
			attr_dev(circle, "cy", "9.99805");
			attr_dev(circle, "r", "6.62305");
			attr_dev(circle, "fill", "#303538");
			add_location(circle, file, 8, 4, 215);
			attr_dev(svg, "class", "lock svelte-n4s916");
			attr_dev(svg, "width", "20");
			attr_dev(svg, "height", "20");
			attr_dev(svg, "viewBox", "0 0 20 20");
			attr_dev(svg, "fill", "none");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg, file, 7, 4, 102);
		},
		m: function mount(target, anchor) {
			insert_dev(target, svg, anchor);
			append_dev(svg, circle);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(svg);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(7:0) {#if active < 1 }",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*active*/ ctx[0] < 1) return create_if_block;
		if (/*active*/ ctx[0] > 1) return create_if_block_1;
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
	let { color } = $$props;
	let { active } = $$props;
	active = 0;
	const writable_props = ["color", "active"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Check> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Check", $$slots, []);

	$$self.$set = $$props => {
		if ("color" in $$props) $$invalidate(1, color = $$props.color);
		if ("active" in $$props) $$invalidate(0, active = $$props.active);
	};

	$$self.$capture_state = () => ({ color, active });

	$$self.$inject_state = $$props => {
		if ("color" in $$props) $$invalidate(1, color = $$props.color);
		if ("active" in $$props) $$invalidate(0, active = $$props.active);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [active, color];
}

class Check extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { color: 1, active: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Check",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*color*/ ctx[1] === undefined && !("color" in props)) {
			console.warn("<Check> was created without expected prop 'color'");
		}

		if (/*active*/ ctx[0] === undefined && !("active" in props)) {
			console.warn("<Check> was created without expected prop 'active'");
		}
	}

	get color() {
		throw new Error("<Check>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set color(value) {
		throw new Error("<Check>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get active() {
		throw new Error("<Check>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set active(value) {
		throw new Error("<Check>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/Completion.svelte generated by Svelte v3.23.2 */
const file$1 = "src/components/Completion.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[16] = list[i];
	return child_ctx;
}

// (45:12) {#if challenge.type != 'checkpoint'}
function create_if_block$1(ctx) {
	let check;
	let current;

	check = new Check({
			props: {
				active: /*challenge*/ ctx[16].status,
				color: /*color*/ ctx[3]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(check.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(check.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(check, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const check_changes = {};
			if (dirty & /*$quizSteps*/ 64) check_changes.active = /*challenge*/ ctx[16].status;
			if (dirty & /*color*/ 8) check_changes.color = /*color*/ ctx[3];
			check.$set(check_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(check.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(check.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(check, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(45:12) {#if challenge.type != 'checkpoint'}",
		ctx
	});

	return block;
}

// (44:8) {#each $quizSteps as challenge}
function create_each_block(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*challenge*/ ctx[16].type != "checkpoint" && create_if_block$1(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*challenge*/ ctx[16].type != "checkpoint") {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*$quizSteps*/ 64) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
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
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(44:8) {#each $quizSteps as challenge}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let aside;
	let section0;
	let div0;
	let t0;
	let t1;
	let div1;
	let t2;
	let t3;
	let t4;
	let t5;
	let div2;
	let t6;
	let div3;
	let section1;
	let t7;
	let progress_1;
	let aside_intro;
	let aside_outro;
	let current;
	const default_slot_template = /*$$slots*/ ctx[10].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], null);
	let each_value = /*$quizSteps*/ ctx[6];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			aside = element("aside");
			section0 = element("section");
			div0 = element("div");
			t0 = text("Time Remaining:");
			t1 = space();
			div1 = element("div");
			t2 = text(/*minutes*/ ctx[4]);
			t3 = text(":");
			t4 = text(/*seconds*/ ctx[5]);
			t5 = space();
			div2 = element("div");
			if (default_slot) default_slot.c();
			t6 = space();
			div3 = element("div");
			section1 = element("section");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t7 = space();
			progress_1 = element("progress");
			this.h();
		},
		l: function claim(nodes) {
			aside = claim_element(nodes, "ASIDE", { class: true });
			var aside_nodes = children(aside);
			section0 = claim_element(aside_nodes, "SECTION", { id: true, class: true });
			var section0_nodes = children(section0);
			div0 = claim_element(section0_nodes, "DIV", {});
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Time Remaining:");
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(section0_nodes);
			div1 = claim_element(section0_nodes, "DIV", { id: true, style: true, class: true });
			var div1_nodes = children(div1);
			t2 = claim_text(div1_nodes, /*minutes*/ ctx[4]);
			t3 = claim_text(div1_nodes, ":");
			t4 = claim_text(div1_nodes, /*seconds*/ ctx[5]);
			div1_nodes.forEach(detach_dev);
			t5 = claim_space(section0_nodes);
			div2 = claim_element(section0_nodes, "DIV", { id: true, class: true });
			var div2_nodes = children(div2);
			if (default_slot) default_slot.l(div2_nodes);
			div2_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t6 = claim_space(aside_nodes);
			div3 = claim_element(aside_nodes, "DIV", { id: true, class: true });
			var div3_nodes = children(div3);
			section1 = claim_element(div3_nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(section1_nodes);
			}

			section1_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			progress_1 = claim_element(div3_nodes, "PROGRESS", { value: true, max: true, class: true });
			children(progress_1).forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			aside_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div0, file$1, 34, 7, 1158);
			attr_dev(div1, "id", "minutes");
			set_style(div1, "white-space", "nowrap");
			attr_dev(div1, "class", "svelte-1vkgvcf");
			add_location(div1, file$1, 34, 34, 1185);
			attr_dev(div2, "id", "challenge-name");
			attr_dev(div2, "class", "svelte-1vkgvcf");
			add_location(div2, file$1, 35, 7, 1265);
			attr_dev(section0, "id", "timer");
			attr_dev(section0, "class", "svelte-1vkgvcf");
			add_location(section0, file$1, 33, 4, 1130);
			attr_dev(section1, "class", "done svelte-1vkgvcf");
			add_location(section1, file$1, 42, 4, 1384);
			progress_1.value = /*$progress*/ ctx[7];
			attr_dev(progress_1, "max", "100");
			attr_dev(progress_1, "class", "svelte-1vkgvcf");
			toggle_class(progress_1, "bg1", /*bg1*/ ctx[0]);
			toggle_class(progress_1, "bg2", /*bg2*/ ctx[1]);
			toggle_class(progress_1, "bg3", /*bg3*/ ctx[2]);
			add_location(progress_1, file$1, 49, 4, 1611);
			attr_dev(div3, "id", "progress-holder");
			attr_dev(div3, "class", "svelte-1vkgvcf");
			add_location(div3, file$1, 41, 4, 1353);
			attr_dev(aside, "class", "svelte-1vkgvcf");
			toggle_class(aside, "bg1", /*bg1*/ ctx[0]);
			toggle_class(aside, "bg2", /*bg2*/ ctx[1]);
			toggle_class(aside, "bg3", /*bg3*/ ctx[2]);
			add_location(aside, file$1, 32, 0, 966);
		},
		m: function mount(target, anchor) {
			insert_dev(target, aside, anchor);
			append_dev(aside, section0);
			append_dev(section0, div0);
			append_dev(div0, t0);
			append_dev(section0, t1);
			append_dev(section0, div1);
			append_dev(div1, t2);
			append_dev(div1, t3);
			append_dev(div1, t4);
			append_dev(section0, t5);
			append_dev(section0, div2);

			if (default_slot) {
				default_slot.m(div2, null);
			}

			append_dev(aside, t6);
			append_dev(aside, div3);
			append_dev(div3, section1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(section1, null);
			}

			append_dev(div3, t7);
			append_dev(div3, progress_1);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*minutes*/ 16) set_data_dev(t2, /*minutes*/ ctx[4]);
			if (!current || dirty & /*seconds*/ 32) set_data_dev(t4, /*seconds*/ ctx[5]);

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 512) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[9], dirty, null, null);
				}
			}

			if (dirty & /*$quizSteps, color*/ 72) {
				each_value = /*$quizSteps*/ ctx[6];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(section1, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (!current || dirty & /*$progress*/ 128) {
				prop_dev(progress_1, "value", /*$progress*/ ctx[7]);
			}

			if (dirty & /*bg1*/ 1) {
				toggle_class(progress_1, "bg1", /*bg1*/ ctx[0]);
			}

			if (dirty & /*bg2*/ 2) {
				toggle_class(progress_1, "bg2", /*bg2*/ ctx[1]);
			}

			if (dirty & /*bg3*/ 4) {
				toggle_class(progress_1, "bg3", /*bg3*/ ctx[2]);
			}

			if (dirty & /*bg1*/ 1) {
				toggle_class(aside, "bg1", /*bg1*/ ctx[0]);
			}

			if (dirty & /*bg2*/ 2) {
				toggle_class(aside, "bg2", /*bg2*/ ctx[1]);
			}

			if (dirty & /*bg3*/ 4) {
				toggle_class(aside, "bg3", /*bg3*/ ctx[2]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			add_render_callback(() => {
				if (aside_outro) aside_outro.end(1);

				if (!aside_intro) aside_intro = create_in_transition(aside, fly, {
					delay: 150,
					duration: 800,
					y: 1000,
					opacity: 0,
					easing: sineInOut
				});

				aside_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			if (aside_intro) aside_intro.invalidate();
			aside_outro = create_out_transition(aside, fade, { delay: 100, duration: 800 });
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(aside);
			if (default_slot) default_slot.d(detaching);
			destroy_each(each_blocks, detaching);
			if (detaching && aside_outro) aside_outro.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let $timer;
	let $timerActive;
	let $count;
	let $quizSteps;
	let $progress;
	validate_store(timerActive, "timerActive");
	component_subscribe($$self, timerActive, $$value => $$invalidate(12, $timerActive = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(14, $count = $$value));
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(6, $quizSteps = $$value));
	validate_store(progress, "progress");
	component_subscribe($$self, progress, $$value => $$invalidate(7, $progress = $$value));
	let start = 30 * 60;
	let timer = tweened(start);
	validate_store(timer, "timer");
	component_subscribe($$self, timer, value => $$invalidate(11, $timer = value));

	setInterval(
		() => {
			if ($timer > 0 && $timerActive) set_store_value(timer, $timer--, $timer);
		},
		1000
	);

	let bg1 = true;
	let bg2 = false;
	let bg3 = false;
	let color;

	afterUpdate(() => {
		if ($count > 3) {
			$$invalidate(0, bg1 = false);
			$$invalidate(1, bg2 = true);
		}

		if ($count > 7) {
			$$invalidate(1, bg2 = false);
			$$invalidate(2, bg3 = true);
		}

		if (bg1) {
			$$invalidate(3, color = "#74ef7b");
		}

		if (bg2) {
			$$invalidate(3, color = "#F1C330");
		}

		if (bg3) {
			$$invalidate(3, color = "#E94040");
		}
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Completion> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Completion", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(9, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		tweened,
		cubicOut,
		sineInOut,
		Check,
		quizSteps,
		timerActive,
		progress,
		count,
		afterUpdate,
		slide,
		fly,
		fade,
		start,
		timer,
		bg1,
		bg2,
		bg3,
		color,
		$timer,
		$timerActive,
		minutes,
		minname,
		seconds,
		$count,
		$quizSteps,
		$progress
	});

	$$self.$inject_state = $$props => {
		if ("start" in $$props) start = $$props.start;
		if ("timer" in $$props) $$invalidate(8, timer = $$props.timer);
		if ("bg1" in $$props) $$invalidate(0, bg1 = $$props.bg1);
		if ("bg2" in $$props) $$invalidate(1, bg2 = $$props.bg2);
		if ("bg3" in $$props) $$invalidate(2, bg3 = $$props.bg3);
		if ("color" in $$props) $$invalidate(3, color = $$props.color);
		if ("minutes" in $$props) $$invalidate(4, minutes = $$props.minutes);
		if ("minname" in $$props) minname = $$props.minname;
		if ("seconds" in $$props) $$invalidate(5, seconds = $$props.seconds);
	};

	let minutes;
	let minname;
	let seconds;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$timer*/ 2048) {
			 $$invalidate(4, minutes = Math.floor($timer / 60));
		}

		if ($$self.$$.dirty & /*minutes*/ 16) {
			 minname = minutes > 1 ? "mins" : "min";
		}

		if ($$self.$$.dirty & /*$timer, minutes*/ 2064) {
			 $$invalidate(5, seconds = Math.floor($timer - minutes * 60).toLocaleString("en", {
				minimumIntegerDigits: 2,
				useGrouping: false
			}));
		}
	};

	return [
		bg1,
		bg2,
		bg3,
		color,
		minutes,
		seconds,
		$quizSteps,
		$progress,
		timer,
		$$scope,
		$$slots
	];
}

class Completion extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Completion",
			options,
			id: create_fragment$1.name
		});
	}
}

export { Completion as C };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxldGlvbi5mZDVjNjFmZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2hlY2suc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IGNvbG9yO1xuICAgIGV4cG9ydCBsZXQgYWN0aXZlO1xuICAgIGFjdGl2ZSA9MDtcblxuPC9zY3JpcHQ+XG57I2lmIGFjdGl2ZSA8IDEgfVxuICAgIDxzdmcgY2xhc3M9XCJsb2NrXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxjaXJjbGUgY3g9XCI5LjgzMzAxXCIgY3k9XCI5Ljk5ODA1XCIgcj1cIjYuNjIzMDVcIiBmaWxsPVwiIzMwMzUzOFwiLz5cbiAgICA8L3N2Zz5cblxuICAgIFxuezplbHNlIGlmIGFjdGl2ZSA+IDEgfVxuICAgIDxzdmcgY2xhc3M9XCJsb2NrXCIgd2lkdGg9XCIyMVwiIGhlaWdodD1cIjIxXCIgdmlld0JveD1cIjAgMCAyMSAyMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxjaXJjbGUgY3g9XCIxMC41OTg2XCIgY3k9XCIxMC4xMjExXCIgcj1cIjEwXCIgZmlsbD1cIntjb2xvcn1cIi8+XG4gICAgPHBhdGggZD1cIk04LjQyMTI1IDE0Ljk4MTVMNC4wMDc0NyAxMC41NzE5QzMuNzQyMyAxMC4zMDcgMy43NDIzIDkuODc3NDkgNC4wMDc0NyA5LjYxMjU1TDQuOTY3NzYgOC42NTMxNUM1LjIzMjkzIDguMzg4MjEgNS42NjI5IDguMzg4MjEgNS45MjgwOCA4LjY1MzE1TDguOTAxNDEgMTEuNjIzNkwxNS4yNyA1LjI2MTE5QzE1LjUzNTEgNC45OTYyNyAxNS45NjUxIDQuOTk2MjcgMTYuMjMwMyA1LjI2MTE5TDE3LjE5MDYgNi4yMjA1OEMxNy40NTU3IDYuNDg1NSAxNy40NTU3IDYuOTE1MDQgMTcuMTkwNiA3LjE3OTk4TDkuMzgxNTYgMTQuOTgxNUM5LjExNjM3IDE1LjI0NjQgOC42ODY0MiAxNS4yNDY0IDguNDIxMjUgMTQuOTgxNVpcIiBmaWxsPVwiIzMwMzUzOFwiLz5cbiAgICA8L3N2Zz5cbiAgICBcbiAgXG57OmVsc2V9XG48c3ZnIGNsYXNzPVwibG9ja1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCIgZmlsbD1cIntjb2xvcn1cIi8+XG4gICAgPGNpcmNsZSBjeD1cIjkuODMzMDFcIiBjeT1cIjkuOTk4MDVcIiByPVwiNi42MjMwNVwiIGZpbGw9XCIjMzAzNTM4XCIvPlxuICAgIDwvc3ZnPlxuICAgIFxuey9pZn1cbiA8c3R5bGU+XG4gICAgIC5sb2NrIHtcbiAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgfVxuIDwvc3R5bGU+IiwiPHNjcmlwdD5cbiAgICAvL3RvdGFsIHRpbWUgZm9yIGNvdW50ZG93blxuaW1wb3J0IHsgdHdlZW5lZCB9IGZyb20gJ3N2ZWx0ZS9tb3Rpb24nO1xuaW1wb3J0IHsgY3ViaWNPdXQsIHNpbmVJbk91dCAgfSBmcm9tICdzdmVsdGUvZWFzaW5nJztcbmltcG9ydCBDaGVjayBmcm9tICcuL0NoZWNrLnN2ZWx0ZSc7XG5pbXBvcnQgeyBxdWl6U3RlcHMsIHRpbWVyQWN0aXZlLCBwcm9ncmVzcywgY291bnQgfSBmcm9tICcuLi9zdG9yZS5qcyc7XG5pbXBvcnQgeyBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSc7XG5pbXBvcnQgeyBzbGlkZSwgZmx5LCBmYWRlIH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuLy9jb25zb2xlLmxvZygkcXVpelN0ZXBzKTtcbmxldCBzdGFydD0gMzAgKiA2MDtcbmxldCB0aW1lciA9IHR3ZWVuZWQoc3RhcnQpO1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKCR0aW1lciA+IDAgJiYgJHRpbWVyQWN0aXZlKSAkdGltZXItLTtcbiAgfSwgMTAwMCk7XG5cbiAgJDogbWludXRlcyA9IE1hdGguZmxvb3IoJHRpbWVyIC8gNjApO1xuICAkOiBtaW5uYW1lID0gbWludXRlcyA+IDEgPyBcIm1pbnNcIiA6IFwibWluXCI7XG4gICQ6IHNlY29uZHMgPSBNYXRoLmZsb29yKCR0aW1lciAtIG1pbnV0ZXMgKiA2MCkudG9Mb2NhbGVTdHJpbmcoJ2VuJywge21pbmltdW1JbnRlZ2VyRGlnaXRzOjIsdXNlR3JvdXBpbmc6ZmFsc2V9KVxuXG5sZXQgYmcxID0gdHJ1ZTtcbmxldCBiZzIgPSBmYWxzZTtcbmxldCBiZzMgPSBmYWxzZTtcblxubGV0IGNvbG9yO1xuYWZ0ZXJVcGRhdGUoKCkgPT57XG4gICAgaWYoJGNvdW50ID4gMyl7YmcxID0gZmFsc2U7IGJnMiA9IHRydWU7fVxuICAgIGlmKCRjb3VudCAgPiA3KXtiZzI9IGZhbHNlOyBiZzM9IHRydWU7fVxuICAgIGlmKGJnMSl7Y29sb3IgPSBcIiM3NGVmN2JcIn1cbiAgICBpZihiZzIpe2NvbG9yID0gXCIjRjFDMzMwXCJ9XG4gICAgaWYoYmczKXtjb2xvciA9IFwiI0U5NDA0MFwifVxufSlcbjwvc2NyaXB0PlxuPGFzaWRlIGNsYXNzOmJnMSBjbGFzczpiZzIgY2xhc3M6YmczIGluOmZseT1cInt7ZGVsYXk6IDE1MCwgZHVyYXRpb246IDgwMCwgeTogMTAwMCwgb3BhY2l0eTogMC4wLCBlYXNpbmc6IHNpbmVJbk91dH19XCIgb3V0OmZhZGU9XCJ7e2RlbGF5OiAxMDAsIGR1cmF0aW9uOiA4MDB9fVwiPlxuICAgIDxzZWN0aW9uIGlkPVwidGltZXJcIj5cbiAgICAgICA8ZGl2PlRpbWUgUmVtYWluaW5nOjwvZGl2PiA8ZGl2IGlkPSdtaW51dGVzJyBzdHlsZT0nd2hpdGUtc3BhY2U6bm93cmFwOyc+e21pbnV0ZXN9OntzZWNvbmRzfTwvZGl2PiBcbiAgICAgICA8ZGl2IGlkPSdjaGFsbGVuZ2UtbmFtZSc+XG4gICAgICAgIDxzbG90PlxuXG4gICAgICAgIDwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPGRpdiBpZD1cInByb2dyZXNzLWhvbGRlclwiPlxuICAgIDxzZWN0aW9uIGNsYXNzPSdkb25lJz5cbiAgICAgICAgeyNlYWNoICRxdWl6U3RlcHMgYXMgY2hhbGxlbmdlfVxuICAgICAgICAgICAgeyNpZiBjaGFsbGVuZ2UudHlwZSAhPSAnY2hlY2twb2ludCd9XG4gICAgICAgIDxDaGVjayBhY3RpdmU9e2NoYWxsZW5nZS5zdGF0dXN9IGNvbG9yPXtjb2xvcn0vPiBcbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgIHsvZWFjaH0gICAgXG4gICAgPC9zZWN0aW9uPlxuICAgIDxwcm9ncmVzcyB2YWx1ZT17JHByb2dyZXNzfSBtYXg9XCIxMDBcIiBjbGFzczpiZzEgY2xhc3M6YmcyIGNsYXNzOmJnMz48L3Byb2dyZXNzPlxuICAgIDwvZGl2PlxuPC9hc2lkZT5cbjxzdHlsZT5cbiAgICBhc2lkZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDMzLjc1dnc7IFxuICAgICAgICBoZWlnaHQ6IDg2dmg7IFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0MjREO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgbWFyZ2luOiAxMnB4IDBweCA0MHB4IDIwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMzN2dztcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgdG9wOiA1MHB4O1xuICAgIH1cbiAgICAjdGltZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwOyBcbiAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAzMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgI21pbnV0ZXMge1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzBGMjAzMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBtYXJnaW46IDhweCAyMHB4OyBcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAycHggMzBweDsgXG5cbiAgICB9XG4gICAgLmRvbmUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHhcbiAgICB9XG4gICAgcHJvZ3Jlc3N7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0ICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA4NiU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiA0Ljd2aDtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBtYXJnaW4tbGVmdDogMzFweDtcbiAgICB9XG4gICAgcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcblx0ICAgIGJhY2tncm91bmQ6ICMzMDM1Mzg7XG5cdH1cbiAgICBwcm9ncmVzcy5iZzE6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNzRlZjdiO1xuICAgIH1cbiAgICBwcm9ncmVzcy5iZzI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjFDMzMwO1xuICAgIH1cbiAgICBwcm9ncmVzcy5iZzM6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRTk0MDQwO1xuICAgIH1cbiAgICAuYmcxIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9iZy1ncm91cDEucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgICAgIGNvbG9yOiAjNzRlZjdiO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5iZzIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2JnLWdyb3VwMi5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICAgICAgY29sb3I6ICNGMUMzMzA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmJnMyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYmctZ3JvdXAzLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgICAgICBjb2xvcjogI0U5NDA0MDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAjcHJvZ3Jlc3MtaG9sZGVyIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgI2NoYWxsZW5nZS1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuPC9zdHlsZT5cbjwhLS1cblxuICAgICAgICBcbjxkaXYgY2xhc3M9J2RvbmUnPlxuICAgIHtpZiBhY3RpdmV9XG4gICAgPGltZyBzcmM9Jy4vbG9jay1hY3RpdmUuc3ZnJyBhbHQ9XCJjb21wbGV0ZWRcIiBjbGFzcz0nYWN0aXZlIGxvY2snIC8+XG4gICAgXG4gICAgICAgIDxpbWcgc3JjPScuL0VsbGlwc2UtYWN0aXZlLnBuZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2VsbGlwc2UgYWN0aXZlJyAvPlxuICAgICAgICA8aW1nIHNyYz0nLi9FbGxpcHNlLWluYWN0aXZlLnBuZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2VsbGlwc2UgaW5hY3RpdmUnIC8+XG48L2Rpdj5cbjwvZGl2Pi0tPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBcUIwQyxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQVBLLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
