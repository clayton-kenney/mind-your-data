import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, M as create_slot, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, k as add_location, l as insert_dev, P as update_slot, A as transition_in, B as add_render_callback, $ as create_in_transition, y as transition_out, a0 as create_out_transition, o as validate_store, p as component_subscribe, L as empty, F as group_outros, z as check_outros, O as set_store_value, j as attr_dev, Y as listen_dev, t as text, h as claim_text, m as append_dev, n as noop } from './client.6e10bfa6.js';
import { s as sineInOut } from './index.cccde779.js';
import { f as fly } from './index.01b49c54.js';
import { q as quizSteps, c as count, s as step } from './store.269d29b2.js';

/* src/components/TransHelp.svelte generated by Svelte v3.23.2 */
const file = "src/components/TransHelp.svelte";

function create_fragment(ctx) {
	let div;
	let div_intro;
	let div_outro;
	let current;
	const default_slot_template = /*$$slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

	const block = {
		c: function create() {
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div, file, 4, 0, 111);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[0], dirty, null, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);

			add_render_callback(() => {
				if (div_outro) div_outro.end(1);

				if (!div_intro) div_intro = create_in_transition(div, fly, {
					delay: 150,
					duration: 800,
					y: 1000,
					opacity: 0,
					easing: sineInOut
				});

				div_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			if (div_intro) div_intro.invalidate();

			div_outro = create_out_transition(div, fly, {
				delay: 50,
				duration: 600,
				y: -800,
				opacity: 0,
				easing: sineInOut
			});

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (default_slot) default_slot.d(detaching);
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
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TransHelp> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("TransHelp", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({ fly, sineInOut });
	return [$$scope, $$slots];
}

class TransHelp extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "TransHelp",
			options,
			id: create_fragment.name
		});
	}
}

/* src/components/complete.svelte generated by Svelte v3.23.2 */
const file$1 = "src/components/complete.svelte";

// (25:0) {:else}
function create_else_block(ctx) {
	let button;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

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
			attr_dev(button, "class", "svelte-1tjbwri");
			add_location(button, file$1, 25, 4, 564);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*incomplete*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 8) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
				}
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
		source: "(25:0) {:else}",
		ctx
	});

	return block;
}

// (19:0) {#if success}
function create_if_block(ctx) {
	let button;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

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
			attr_dev(button, "class", "svelte-1tjbwri");
			add_location(button, file$1, 19, 4, 476);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*increment*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 8) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
				}
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
		source: "(19:0) {#if success}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
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
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let $quizSteps;
	let $count;
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(5, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(6, $count = $$value));
	let { success = true } = $$props;

	//sets current icon for sidebar
	function increment() {
		set_store_value(quizSteps, $quizSteps[$count].complete = true, $quizSteps);
		set_store_value(quizSteps, $quizSteps[$count].status = 2, $quizSteps);
		count.update(n => n + 1);
		step.set(0);
	}

	function incomplete() {
		set_store_value(quizSteps, $quizSteps[$count].complete = false, $quizSteps);
		set_store_value(quizSteps, $quizSteps[$count].status = 0, $quizSteps);
		count.update(n => n + 1);
		step.set(0);
	}

	const writable_props = ["success"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Complete> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Complete", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("success" in $$props) $$invalidate(0, success = $$props.success);
		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		count,
		step,
		quizSteps,
		success,
		increment,
		incomplete,
		$quizSteps,
		$count
	});

	$$self.$inject_state = $$props => {
		if ("success" in $$props) $$invalidate(0, success = $$props.success);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [success, increment, incomplete, $$scope, $$slots];
}

class Complete extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { success: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Complete",
			options,
			id: create_fragment$1.name
		});
	}

	get success() {
		throw new Error("<Complete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set success(value) {
		throw new Error("<Complete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/Back.svelte generated by Svelte v3.23.2 */
const file$2 = "src/components/Back.svelte";

// (18:0) {#if $count >= 1}
function create_if_block$1(ctx) {
	let button;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t = text("Back");
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t = claim_text(button_nodes, "Back");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "svelte-17baps");
			add_location(button, file$2, 18, 0, 513);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(18:0) {#if $count >= 1}",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
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
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let $count;
	let $step;
	let $quizSteps;
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(0, $count = $$value));
	validate_store(step, "step");
	component_subscribe($$self, step, $$value => $$invalidate(3, $step = $$value));
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(4, $quizSteps = $$value));

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
	const click_handler = () => goBack();

	$$self.$capture_state = () => ({
		count,
		step,
		quizSteps,
		goBack,
		$count,
		$step,
		$quizSteps
	});

	return [$count, goBack, click_handler];
}

class Back extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Back",
			options,
			id: create_fragment$2.name
		});
	}
}

export { Back as B, Complete as C, TransHelp as T };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFjay5mODhiOTY3My5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0JhY2suc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZmx5IH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIGltcG9ydCB7IHNpbmVJbk91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuPC9zY3JpcHQ+XG48ZGl2IGluOmZseT1cInt7ZGVsYXk6IDE1MCwgZHVyYXRpb246IDgwMCwgeTogMTAwMCwgb3BhY2l0eTogMC4wLCBlYXNpbmc6IHNpbmVJbk91dH19XCIgb3V0OmZseT1cInt7ZGVsYXk6IDUwLCBkdXJhdGlvbjogNjAwLCB5OiAtODAwLCBvcGFjaXR5OiAwLCBlYXNpbmc6IHNpbmVJbk91dH19XCIgPlxuICAgIDxzbG90PlxuXG4gICAgPC9zbG90PlxuPC9kaXY+XG48c3R5bGU+XG5cbjwvc3R5bGU+IiwiPHNjcmlwdD5cbmltcG9ydCB7IGNvdW50LCBzdGVwLCBxdWl6U3RlcHMgfSBmcm9tICcuLi9zdG9yZS5qcydcbmV4cG9ydCBsZXQgc3VjY2VzcyA9IHRydWU7XG5cbi8vc2V0cyBjdXJyZW50IGljb24gZm9yIHNpZGViYXJcbmZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbiAgICAgICAgJHF1aXpTdGVwc1skY291bnRdLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgJHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDI7XG4gICAgICAgIGNvdW50LnVwZGF0ZShuID0+IG4gKyAxKVxuICAgICAgICBzdGVwLnNldCgwKTtcbn1cbmZ1bmN0aW9uIGluY29tcGxldGUoKSB7XG4gICAgICAgICRxdWl6U3RlcHNbJGNvdW50XS5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAkcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMDtcbiAgICAgICAgY291bnQudXBkYXRlKG4gPT4gbiArIDEpXG4gICAgICAgIHN0ZXAuc2V0KDApO1xufVxuPC9zY3JpcHQ+XG57I2lmIHN1Y2Nlc3N9XG4gICAgPGJ1dHRvbiBvbjpjbGljaz17aW5jcmVtZW50fT5cbiAgICAgICAgPHNsb3Q+XG5cbiAgICAgICAgPC9zbG90PlxuICAgIDwvYnV0dG9uPlxuezplbHNlfVxuICAgIDxidXR0b24gb246Y2xpY2s9e2luY29tcGxldGV9PlxuICAgICAgICA8c2xvdD5cblxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9idXR0b24+XG57L2lmfVxuICAgICAgIFxuPHN0eWxlPlxuICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cbjwvc3R5bGU+XG5cbiIsIjxzY3JpcHQ+XG5pbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vc3RvcmUuanMnXG5mdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgaWYoJGNvdW50ID49IDEgJiYgJHN0ZXAgPT0gMCkge1xuICAgICAgICBhbGVydCgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGdvIGJhY2s/JylcbiAgICAgICAgLy8kcXVpelN0ZXBzWyRjb3VudF0uY29tcGxldGUgPSB0cnVlO1xuICAgICAgICBjb3VudC51cGRhdGUobiA9PiBuIC0gMSlcbiAgICAgICAgJHF1aXpTdGVwc1skY291bnQrMV0uc3RhdHVzID0gMDtcbiAgICAgICAgaWYgKCRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgIT0gMikge1xuICAgICAgICAgICAgJHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgc3RlcC5zZXQoJHF1aXpTdGVwc1skY291bnRdLnN0ZXBzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGVwLnVwZGF0ZShuID0+IG4gLSAxKVxuICAgIH1cbn1cbjwvc2NyaXB0PlxueyNpZiAkY291bnQgPj0gMX1cbjxidXR0b24gb246Y2xpY2s9eygpID0+IGdvQmFjaygpfT5cbiAgICBCYWNrXG48L2J1dHRvbj5cbnsvaWZ9XG48c3R5bGU+XG4gICAgYnV0dG9uIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHRcdFx0bWFyZ2luOiA4MHB4IDEwcHggMTBweCAxMHB4O1xuXHRcdFx0Ym9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgIFxuICAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBSWUsS0FBSyxFQUFFLEdBQUc7S0FBRSxRQUFRLEVBQUUsR0FBRztLQUFFLENBQUMsRUFBRSxJQUFJO0tBQUUsT0FBTyxFQUFFLENBQUc7S0FBRSxNQUFNLEVBQUUsU0FBUzs7Ozs7Ozs7Ozs7OztJQUFlLEtBQUssRUFBRSxFQUFFO0lBQUUsUUFBUSxFQUFFLEdBQUc7SUFBRSxDQUFDLEdBQUcsR0FBRztJQUFFLE9BQU8sRUFBRSxDQUFDO0lBQUUsTUFBTSxFQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eURDcUIzSSxHQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0RBTlYsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUQxQixHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BaEJELE9BQU8sR0FBRyxJQUFJOzs7VUFHaEIsU0FBUzs2QkFDVixVQUFVLENBQUMsTUFBTSxFQUFFLFFBQVEsR0FBRyxJQUFJOzZCQUNsQyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDO0VBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O1VBRVQsVUFBVTs2QkFDWCxVQUFVLENBQUMsTUFBTSxFQUFFLFFBQVEsR0FBRyxLQUFLOzZCQUNuQyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDO0VBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkNFYixHQUFNLE9BQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztrQkFBWCxHQUFNLE9BQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQWZQLE1BQU07TUFDUixNQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0dBQ3hCLEtBQUssQ0FBQyxtQ0FBbUM7OztHQUV6QyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7OEJBQ3ZCLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDOztPQUMzQixVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sSUFBSSxDQUFDOytCQUM5QixVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDOzs7R0FFakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUs7O0dBRWpDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7NkJBS04sTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
