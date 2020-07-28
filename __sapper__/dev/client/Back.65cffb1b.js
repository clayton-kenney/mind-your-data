import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as validate_store, p as component_subscribe, v as validate_slots, J as empty, l as insert_dev, I as group_outros, B as transition_out, C as check_outros, D as transition_in, b as detach_dev, M as set_store_value, K as create_slot, e as element, f as claim_element, g as children, j as attr_dev, k as add_location, W as listen_dev, P as update_slot, t as text, h as claim_text, m as append_dev, n as noop } from './client.0d608356.js';
import { q as quizSteps, c as count, s as step, p as progress } from './store.c0f46414.js';

/* src/components/complete.svelte generated by Svelte v3.23.2 */
const file = "src/components/complete.svelte";

// (27:0) {:else}
function create_else_block(ctx) {
	let button;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

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
			add_location(button, file, 27, 4, 663);
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
				if (default_slot.p && dirty & /*$$scope*/ 16) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
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
		source: "(27:0) {:else}",
		ctx
	});

	return block;
}

// (21:0) {#if success}
function create_if_block(ctx) {
	let button;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

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
			add_location(button, file, 21, 4, 575);
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
				if (default_slot.p && dirty & /*$$scope*/ 16) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
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
		source: "(21:0) {#if success}",
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
	component_subscribe($$self, quizSteps, $$value => $$invalidate(6, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(7, $count = $$value));
	let { success = true } = $$props;
	let { p = 7.6 } = $$props;

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

	const writable_props = ["success", "p"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Complete> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Complete", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("success" in $$props) $$invalidate(0, success = $$props.success);
		if ("p" in $$props) $$invalidate(3, p = $$props.p);
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		count,
		step,
		quizSteps,
		progress,
		success,
		p,
		increment,
		incomplete,
		$quizSteps,
		$count
	});

	$$self.$inject_state = $$props => {
		if ("success" in $$props) $$invalidate(0, success = $$props.success);
		if ("p" in $$props) $$invalidate(3, p = $$props.p);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [success, increment, incomplete, p, $$scope, $$slots];
}

class Complete extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { success: 0, p: 3 });

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
}

/* src/components/Back.svelte generated by Svelte v3.23.2 */
const file$1 = "src/components/Back.svelte";

// (19:0) {#if $count >= 1}
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
			add_location(button, file$1, 19, 0, 536);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler*/ ctx[3], false, false, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFjay42NWNmZmIxYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY29tcGxldGUuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQmFjay5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCB7IGNvdW50LCBzdGVwLCBxdWl6U3RlcHMsIHByb2dyZXNzIH0gZnJvbSAnLi4vc3RvcmUuanMnXG5leHBvcnQgbGV0IHN1Y2Nlc3MgPSB0cnVlO1xuZXhwb3J0IGxldCBwID0gNy42O1xuLy9zZXRzIGN1cnJlbnQgaWNvbiBmb3Igc2lkZWJhclxuZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuICAgICAgICAkcXVpelN0ZXBzWyRjb3VudF0uY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAkcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMjtcbiAgICAgICAgY291bnQudXBkYXRlKG4gPT4gbiArIDEpXG4gICAgICAgIHByb2dyZXNzLnVwZGF0ZShuID0+IG4rPXApXG4gICAgICAgIHN0ZXAuc2V0KDApO1xufVxuZnVuY3Rpb24gaW5jb21wbGV0ZSgpIHtcbiAgICAgICAgJHF1aXpTdGVwc1skY291bnRdLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAwO1xuICAgICAgICBjb3VudC51cGRhdGUobiA9PiBuICsgMSlcbiAgICAgICAgcHJvZ3Jlc3MudXBkYXRlKG4gPT4gbis9cClcbiAgICAgICAgc3RlcC5zZXQoMCk7XG59XG48L3NjcmlwdD5cbnsjaWYgc3VjY2Vzc31cbiAgICA8YnV0dG9uIG9uOmNsaWNrPXtpbmNyZW1lbnR9PlxuICAgICAgICA8c2xvdD5cblxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9idXR0b24+XG57OmVsc2V9XG4gICAgPGJ1dHRvbiBvbjpjbGljaz17aW5jb21wbGV0ZX0+XG4gICAgICAgIDxzbG90PlxuXG4gICAgICAgIDwvc2xvdD5cbiAgICA8L2J1dHRvbj5cbnsvaWZ9XG4gICAgICAgXG48c3R5bGU+XG4gICAgYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0Ym9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuPC9zdHlsZT5cblxuIiwiPHNjcmlwdD5cbmltcG9ydCB7IGNvdW50LCBzdGVwLCBxdWl6U3RlcHMsIHByb2dyZXNzIH0gZnJvbSAnLi4vc3RvcmUuanMnXG5sZXQgcCA9IDcuNjtcbmZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBpZigkY291bnQgPj0gMSAmJiAkc3RlcCA9PSAwKSB7XG4gICAgICAgIGFsZXJ0KCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZ28gYmFjaz8nKVxuICAgICAgICAvLyRxdWl6U3RlcHNbJGNvdW50XS5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIGNvdW50LnVwZGF0ZShuID0+IG4gLSAxKVxuICAgICAgICAkcXVpelN0ZXBzWyRjb3VudCsxXS5zdGF0dXMgPSAwO1xuICAgICAgICBpZiAoJHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyAhPSAyKSB7XG4gICAgICAgICAgICAkcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMTtcbiAgICAgICAgfVxuICAgICAgICBzdGVwLnNldCgkcXVpelN0ZXBzWyRjb3VudF0uc3RlcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ZXAudXBkYXRlKG4gPT4gbiAtIDEpXG4gICAgfVxufVxuPC9zY3JpcHQ+XG57I2lmICRjb3VudCA+PSAxfVxuPGJ1dHRvbiBvbjpjbGljaz17KCkgPT4ge2dvQmFjaygpXG4gICAgcHJvZ3Jlc3MudXBkYXRlKG4gPT4gbi09cClcbn19PlxuICAgIEJhY2tcbjwvYnV0dG9uPlxuey9pZn1cbjxzdHlsZT5cbiAgICBidXR0b24ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdFx0XHRtYXJnaW46IDgwcHggMTBweCAxMHB4IDEwcHg7XG5cdFx0XHRib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgXG4gICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lEQTJCc0IsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dEQU5WLEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFEMUIsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWxCRCxPQUFPLEdBQUcsSUFBSTtPQUNkLENBQUMsR0FBRyxHQUFHOzs7VUFFVCxTQUFTOzZCQUNWLFVBQVUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxHQUFHLElBQUk7NkJBQ2xDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7RUFDN0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDdkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFFLENBQUM7RUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7VUFFVCxVQUFVOzZCQUNYLFVBQVUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxHQUFHLEtBQUs7NkJBQ25DLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7RUFDN0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDdkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFFLENBQUM7RUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQ0NiLEdBQU0sT0FBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O2tCQUFYLEdBQU0sT0FBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FoQlosQ0FBQyxHQUFHLEdBQUc7O1VBQ0YsTUFBTTtNQUNSLE1BQU0sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7R0FDeEIsS0FBSyxDQUFDLG1DQUFtQzs7O0dBRXpDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzs4QkFDdkIsVUFBVSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUM7O09BQzNCLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxJQUFJLENBQUM7K0JBQzlCLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7OztHQUVqQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSzs7R0FFakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7O0VBS0wsTUFBTTtFQUMzQixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
