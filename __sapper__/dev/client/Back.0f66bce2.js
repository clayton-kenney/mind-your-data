import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, H as validate_store, I as component_subscribe, v as validate_slots, T as empty, n as insert_dev, w as group_outros, b as transition_out, x as check_outros, t as transition_in, j as detach_dev, U as set_store_value, y as create_slot, f as element, g as claim_element, h as children, k as attr_dev, Y as toggle_class, l as add_location, V as listen_dev, z as update_slot, X as svg_element, C as text, F as claim_text, p as append_dev, G as noop } from './client.b3f043c2.js';
import { q as quizSteps, c as count, s as step, p as progress } from './store.b07cf6e5.js';

/* src/components/complete.svelte generated by Svelte v3.23.2 */
const file = "src/components/complete.svelte";

// (30:0) {:else}
function create_else_block(ctx) {
	let button;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	const block = {
		c: function create() {
			button = element("button");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			if (default_slot) default_slot.l(button_nodes);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "svelte-c2wm0k");
			toggle_class(button, "green", /*green*/ ctx[1]);
			toggle_class(button, "yellow", /*yellow*/ ctx[2]);
			toggle_class(button, "red", /*red*/ ctx[3]);
			add_location(button, file, 30, 4, 775);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*incomplete*/ ctx[5], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 128) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
				}
			}

			if (dirty & /*green*/ 2) {
				toggle_class(button, "green", /*green*/ ctx[1]);
			}

			if (dirty & /*yellow*/ 4) {
				toggle_class(button, "yellow", /*yellow*/ ctx[2]);
			}

			if (dirty & /*red*/ 8) {
				toggle_class(button, "red", /*red*/ ctx[3]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(30:0) {:else}",
		ctx
	});

	return block;
}

// (24:0) {#if success}
function create_if_block(ctx) {
	let button;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	const block = {
		c: function create() {
			button = element("button");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			if (default_slot) default_slot.l(button_nodes);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "svelte-c2wm0k");
			toggle_class(button, "green", /*green*/ ctx[1]);
			toggle_class(button, "yellow", /*yellow*/ ctx[2]);
			toggle_class(button, "red", /*red*/ ctx[3]);
			add_location(button, file, 24, 4, 652);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*increment*/ ctx[4], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 128) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
				}
			}

			if (dirty & /*green*/ 2) {
				toggle_class(button, "green", /*green*/ ctx[1]);
			}

			if (dirty & /*yellow*/ 4) {
				toggle_class(button, "yellow", /*yellow*/ ctx[2]);
			}

			if (dirty & /*red*/ 8) {
				toggle_class(button, "red", /*red*/ ctx[3]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(24:0) {#if success}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*success*/ ctx[0]) return 0;
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
		p: function update(ctx, [dirty]) {
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
	component_subscribe($$self, quizSteps, $$value => $$invalidate(9, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(10, $count = $$value));
	let { success = true } = $$props;
	let { p = 7.6 } = $$props;
	let { green = false } = $$props;
	let { yellow = false } = $$props;
	let { red = false } = $$props;

	//sets current icon for sidebar
	function increment() {
		set_store_value(quizSteps, $quizSteps[$count].complete = true, $quizSteps);
		set_store_value(quizSteps, $quizSteps[$count].status = 2, $quizSteps);
		count.update(n => n + 1);
		progress.update(n => n += p);
		step.set(0);
	}

	function incomplete() {
		set_store_value(quizSteps, $quizSteps[$count].complete = false, $quizSteps);
		set_store_value(quizSteps, $quizSteps[$count].status = 0, $quizSteps);
		count.update(n => n + 1);
		progress.update(n => n += p);
		step.set(0);
	}

	const writable_props = ["success", "p", "green", "yellow", "red"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Complete> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Complete", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("success" in $$props) $$invalidate(0, success = $$props.success);
		if ("p" in $$props) $$invalidate(6, p = $$props.p);
		if ("green" in $$props) $$invalidate(1, green = $$props.green);
		if ("yellow" in $$props) $$invalidate(2, yellow = $$props.yellow);
		if ("red" in $$props) $$invalidate(3, red = $$props.red);
		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		count,
		step,
		quizSteps,
		progress,
		success,
		p,
		green,
		yellow,
		red,
		increment,
		incomplete,
		$quizSteps,
		$count
	});

	$$self.$inject_state = $$props => {
		if ("success" in $$props) $$invalidate(0, success = $$props.success);
		if ("p" in $$props) $$invalidate(6, p = $$props.p);
		if ("green" in $$props) $$invalidate(1, green = $$props.green);
		if ("yellow" in $$props) $$invalidate(2, yellow = $$props.yellow);
		if ("red" in $$props) $$invalidate(3, red = $$props.red);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [success, green, yellow, red, increment, incomplete, p, $$scope, $$slots];
}

class Complete extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			success: 0,
			p: 6,
			green: 1,
			yellow: 2,
			red: 3
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Complete",
			options,
			id: create_fragment.name
		});
	}

	get success() {
		throw new Error("<Complete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set success(value) {
		throw new Error("<Complete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get p() {
		throw new Error("<Complete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set p(value) {
		throw new Error("<Complete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get green() {
		throw new Error("<Complete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set green(value) {
		throw new Error("<Complete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get yellow() {
		throw new Error("<Complete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set yellow(value) {
		throw new Error("<Complete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get red() {
		throw new Error("<Complete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set red(value) {
		throw new Error("<Complete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/Back.svelte generated by Svelte v3.23.2 */
const file$1 = "src/components/Back.svelte";

// (19:0) {#if $count >= 1}
function create_if_block$1(ctx) {
	let div;
	let svg;
	let path;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = element("div");
			svg = svg_element("svg");
			path = svg_element("path");
			t = text(" Back");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { id: true, class: true });
			var div_nodes = children(div);

			svg = claim_element(
				div_nodes,
				"svg",
				{
					width: true,
					height: true,
					viewBox: true,
					fill: true,
					xmlns: true,
					class: true
				},
				1
			);

			var svg_nodes = children(svg);
			path = claim_element(svg_nodes, "path", { d: true, fill: true }, 1);
			children(path).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			t = claim_text(div_nodes, " Back");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(path, "d", "M11 15.885L4.20108 9L11 2.115L8.90688 0L0 9L8.90688 18L11 15.885Z");
			attr_dev(path, "fill", "#757575");
			add_location(path, file$1, 23, 4, 712);
			attr_dev(svg, "width", "11");
			attr_dev(svg, "height", "18");
			attr_dev(svg, "viewBox", "0 0 11 18");
			attr_dev(svg, "fill", "none");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr_dev(svg, "class", "svelte-1x5om3e");
			add_location(svg, file$1, 22, 0, 612);
			attr_dev(div, "id", "back");
			attr_dev(div, "class", "svelte-1x5om3e");
			add_location(div, file$1, 19, 0, 536);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, svg);
			append_dev(svg, path);
			append_dev(div, t);

			if (!mounted) {
				dispose = listen_dev(div, "click", /*click_handler*/ ctx[3], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(19:0) {#if $count >= 1}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let if_block_anchor;
	let if_block = /*$count*/ ctx[0] >= 1 && create_if_block$1(ctx);

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
		},
		p: function update(ctx, [dirty]) {
			if (/*$count*/ ctx[0] >= 1) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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
	let $count;
	let $step;
	let $quizSteps;
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(0, $count = $$value));
	validate_store(step, "step");
	component_subscribe($$self, step, $$value => $$invalidate(4, $step = $$value));
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(5, $quizSteps = $$value));
	let p = 7.6;

	function goBack() {
		if ($count >= 1 && $step == 0) {
			alert("Are you sure you want to go back?");

			//$quizSteps[$count].complete = true;
			count.update(n => n - 1);

			set_store_value(quizSteps, $quizSteps[$count + 1].status = 0, $quizSteps);

			if ($quizSteps[$count].status != 2) {
				set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
			}

			step.set($quizSteps[$count].steps);
		} else {
			step.update(n => n - 1);
		}
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Back> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Back", $$slots, []);

	const click_handler = () => {
		goBack();
		progress.update(n => n -= p);
	};

	$$self.$capture_state = () => ({
		count,
		step,
		quizSteps,
		progress,
		p,
		goBack,
		$count,
		$step,
		$quizSteps
	});

	$$self.$inject_state = $$props => {
		if ("p" in $$props) $$invalidate(1, p = $$props.p);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [$count, p, goBack, click_handler];
}

class Back extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Back",
			options,
			id: create_fragment$1.name
		});
	}
}

export { Back as B, Complete as C };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFjay4wZjY2YmNlMi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY29tcGxldGUuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQmFjay5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCB7IGNvdW50LCBzdGVwLCBxdWl6U3RlcHMsIHByb2dyZXNzIH0gZnJvbSAnLi4vc3RvcmUuanMnXG5leHBvcnQgbGV0IHN1Y2Nlc3MgPSB0cnVlO1xuZXhwb3J0IGxldCBwID0gNy42O1xuZXhwb3J0IGxldCBncmVlbiA9IGZhbHNlO1xuZXhwb3J0IGxldCB5ZWxsb3cgPSBmYWxzZTtcbmV4cG9ydCBsZXQgcmVkID0gZmFsc2U7XG4vL3NldHMgY3VycmVudCBpY29uIGZvciBzaWRlYmFyXG5mdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gICAgICAgICRxdWl6U3RlcHNbJGNvdW50XS5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAyO1xuICAgICAgICBjb3VudC51cGRhdGUobiA9PiBuICsgMSlcbiAgICAgICAgcHJvZ3Jlc3MudXBkYXRlKG4gPT4gbis9cClcbiAgICAgICAgc3RlcC5zZXQoMCk7XG59XG5mdW5jdGlvbiBpbmNvbXBsZXRlKCkge1xuICAgICAgICAkcXVpelN0ZXBzWyRjb3VudF0uY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgJHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDA7XG4gICAgICAgIGNvdW50LnVwZGF0ZShuID0+IG4gKyAxKVxuICAgICAgICBwcm9ncmVzcy51cGRhdGUobiA9PiBuKz1wKVxuICAgICAgICBzdGVwLnNldCgwKTtcbn1cbjwvc2NyaXB0PlxueyNpZiBzdWNjZXNzfVxuICAgIDxidXR0b24gb246Y2xpY2s9e2luY3JlbWVudH0gY2xhc3M6Z3JlZW4gY2xhc3M6eWVsbG93IGNsYXNzOnJlZD5cbiAgICAgICAgPHNsb3Q+XG5cbiAgICAgICAgPC9zbG90PlxuICAgIDwvYnV0dG9uPlxuezplbHNlfVxuICAgIDxidXR0b24gb246Y2xpY2s9e2luY29tcGxldGV9IGNsYXNzOmdyZWVuIGNsYXNzOnllbGxvdyBjbGFzczpyZWQ+XG4gICAgICAgIDxzbG90PlxuXG4gICAgICAgIDwvc2xvdD5cbiAgICA8L2J1dHRvbj5cbnsvaWZ9XG4gICAgICAgXG48c3R5bGU+XG4gICAgYnV0dG9uIHtcbiAgICAgICAgXG4gICAgfVxuICAgIC5ncmVlbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3M2VmN2I7XG4gICAgICAgIGNvbG9yOiAjMkMzQzRFO1xuICAgIH1cbiAgICAueWVsbG93IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxQzMzMDtcbiAgICAgICAgY29sb3I6ICMyQzNDNEU7XG4gICAgfVxuICAgIC5yZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTc0RTQ1O1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB9XG48L3N0eWxlPlxuXG4iLCI8c2NyaXB0PlxuaW1wb3J0IHsgY291bnQsIHN0ZXAsIHF1aXpTdGVwcywgcHJvZ3Jlc3MgfSBmcm9tICcuLi9zdG9yZS5qcydcbmxldCBwID0gNy42O1xuZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGlmKCRjb3VudCA+PSAxICYmICRzdGVwID09IDApIHtcbiAgICAgICAgYWxlcnQoJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBnbyBiYWNrPycpXG4gICAgICAgIC8vJHF1aXpTdGVwc1skY291bnRdLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgY291bnQudXBkYXRlKG4gPT4gbiAtIDEpXG4gICAgICAgICRxdWl6U3RlcHNbJGNvdW50KzFdLnN0YXR1cyA9IDA7XG4gICAgICAgIGlmICgkcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzICE9IDIpIHtcbiAgICAgICAgICAgICRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHN0ZXAuc2V0KCRxdWl6U3RlcHNbJGNvdW50XS5zdGVwcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RlcC51cGRhdGUobiA9PiBuIC0gMSlcbiAgICB9XG59XG48L3NjcmlwdD5cbnsjaWYgJGNvdW50ID49IDF9XG48ZGl2IGlkPVwiYmFja1wiIG9uOmNsaWNrPXsoKSA9PiB7Z29CYWNrKClcbiAgICBwcm9ncmVzcy51cGRhdGUobiA9PiBuLT1wKVxufX0+XG48c3ZnIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTEgMThcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTExIDE1Ljg4NUw0LjIwMTA4IDlMMTEgMi4xMTVMOC45MDY4OCAwTDAgOUw4LjkwNjg4IDE4TDExIDE1Ljg4NVpcIiBmaWxsPVwiIzc1NzU3NVwiLz5cbiAgICA8L3N2Zz4gQmFja1xuPC9kaXY+XG57L2lmfVxuPHN0eWxlPlxuICAgICNiYWNrIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcG9zaXRpb246IGluaGVyaXQ7XG4gICAgICAgIGJvdHRvbTogNzJweDtcbiAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcblxuICAgIH1cbiAgICBzdmcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGZpbGw6ICM3NTc1NzU7XG4gICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lEQThCc0IsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
