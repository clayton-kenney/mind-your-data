import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, N as create_slot, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, k as add_location, l as insert_dev, Q as update_slot, B as transition_in, C as add_render_callback, _ as create_in_transition, z as transition_out, $ as create_out_transition, o as validate_store, p as component_subscribe, M as empty, G as group_outros, A as check_outros, P as set_store_value, j as attr_dev, X as listen_dev } from './client.6d610aa0.js';
import { f as fly, b as sineInOut } from './index.42fd54b0.js';
import { q as quizSteps, c as count, s as step } from './store.b173501b.js';

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

export { Complete as C, TransHelp as T };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGUuMzNiNGU3N2YuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyYW5zSGVscC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9jb21wbGV0ZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBmbHkgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG4gICAgaW1wb3J0IHsgc2luZUluT3V0IH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG48L3NjcmlwdD5cbjxkaXYgaW46Zmx5PVwie3tkZWxheTogMTUwLCBkdXJhdGlvbjogODAwLCB5OiAxMDAwLCBvcGFjaXR5OiAwLjAsIGVhc2luZzogc2luZUluT3V0fX1cIiBvdXQ6Zmx5PVwie3tkZWxheTogNTAsIGR1cmF0aW9uOiA2MDAsIHk6IC04MDAsIG9wYWNpdHk6IDAsIGVhc2luZzogc2luZUluT3V0fX1cIiA+XG4gICAgPHNsb3Q+XG5cbiAgICA8L3Nsb3Q+XG48L2Rpdj5cbjxzdHlsZT5cblxuPC9zdHlsZT4iLCI8c2NyaXB0PlxuaW1wb3J0IHsgY291bnQsIHN0ZXAsIHF1aXpTdGVwcyB9IGZyb20gJy4uL3N0b3JlLmpzJ1xuZXhwb3J0IGxldCBzdWNjZXNzID0gdHJ1ZTtcblxuLy9zZXRzIGN1cnJlbnQgaWNvbiBmb3Igc2lkZWJhclxuZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuICAgICAgICAkcXVpelN0ZXBzWyRjb3VudF0uY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAkcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMjtcbiAgICAgICAgY291bnQudXBkYXRlKG4gPT4gbiArIDEpXG4gICAgICAgIHN0ZXAuc2V0KDApO1xufVxuZnVuY3Rpb24gaW5jb21wbGV0ZSgpIHtcbiAgICAgICAgJHF1aXpTdGVwc1skY291bnRdLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAwO1xuICAgICAgICBjb3VudC51cGRhdGUobiA9PiBuICsgMSlcbiAgICAgICAgc3RlcC5zZXQoMCk7XG59XG48L3NjcmlwdD5cbnsjaWYgc3VjY2Vzc31cbiAgICA8YnV0dG9uIG9uOmNsaWNrPXtpbmNyZW1lbnR9PlxuICAgICAgICA8c2xvdD5cblxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9idXR0b24+XG57OmVsc2V9XG4gICAgPGJ1dHRvbiBvbjpjbGljaz17aW5jb21wbGV0ZX0+XG4gICAgICAgIDxzbG90PlxuXG4gICAgICAgIDwvc2xvdD5cbiAgICA8L2J1dHRvbj5cbnsvaWZ9XG4gICAgICAgXG48c3R5bGU+XG4gICAgYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0Ym9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuPC9zdHlsZT5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FJZSxLQUFLLEVBQUUsR0FBRztLQUFFLFFBQVEsRUFBRSxHQUFHO0tBQUUsQ0FBQyxFQUFFLElBQUk7S0FBRSxPQUFPLEVBQUUsQ0FBRztLQUFFLE1BQU0sRUFBRSxTQUFTOzs7Ozs7Ozs7Ozs7O0lBQWUsS0FBSyxFQUFFLEVBQUU7SUFBRSxRQUFRLEVBQUUsR0FBRztJQUFFLENBQUMsR0FBRyxHQUFHO0lBQUUsT0FBTyxFQUFFLENBQUM7SUFBRSxNQUFNLEVBQUUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5RENxQjNJLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3REFOVixHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBRDFCLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FoQkQsT0FBTyxHQUFHLElBQUk7OztVQUdoQixTQUFTOzZCQUNWLFVBQVUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxHQUFHLElBQUk7NkJBQ2xDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7RUFDN0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7VUFFVCxVQUFVOzZCQUNYLFVBQVUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxHQUFHLEtBQUs7NkJBQ25DLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7RUFDN0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
