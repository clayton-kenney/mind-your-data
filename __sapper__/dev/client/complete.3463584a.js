import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, N as create_slot, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, k as add_location, l as insert_dev, Q as update_slot, B as transition_in, C as add_render_callback, _ as create_in_transition, z as transition_out, $ as create_out_transition, o as validate_store, p as component_subscribe, r as createEventDispatcher, U as onMount, u as globals, j as attr_dev, T as listen_dev, P as set_store_value } from './client.4f783cd8.js';
import { f as fly, b as sineInOut } from './index.42fd54b0.js';
import { q as quizSteps, c as count } from './store.76e25fe8.js';

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

const { console: console_1 } = globals;
const file$1 = "src/components/complete.svelte";

function create_fragment$1(ctx) {
	let button;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[2].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);

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
			add_location(button, file$1, 15, 0, 406);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*increment*/ ctx[0], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 2) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[1], dirty, null, null);
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
	component_subscribe($$self, quizSteps, $$value => $$invalidate(3, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(4, $count = $$value));
	const dispatch = createEventDispatcher();

	//sets current icon for sidebar
	function increment() {
		set_store_value(quizSteps, $quizSteps[$count].complete = true, $quizSteps);
		set_store_value(quizSteps, $quizSteps[$count].status = 2, $quizSteps);
		count.update(n => n + 1);
		console.log($quizSteps);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Complete> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Complete", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		count,
		onMount,
		createEventDispatcher,
		quizSteps,
		dispatch,
		increment,
		$quizSteps,
		$count
	});

	return [increment, $$scope, $$slots];
}

class Complete extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Complete",
			options,
			id: create_fragment$1.name
		});
	}
}

export { Complete as C, TransHelp as T };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGUuMzQ2MzU4NGEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyYW5zSGVscC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9jb21wbGV0ZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBmbHkgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG4gICAgaW1wb3J0IHsgc2luZUluT3V0IH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG48L3NjcmlwdD5cbjxkaXYgaW46Zmx5PVwie3tkZWxheTogMTUwLCBkdXJhdGlvbjogODAwLCB5OiAxMDAwLCBvcGFjaXR5OiAwLjAsIGVhc2luZzogc2luZUluT3V0fX1cIiBvdXQ6Zmx5PVwie3tkZWxheTogNTAsIGR1cmF0aW9uOiA2MDAsIHk6IC04MDAsIG9wYWNpdHk6IDAsIGVhc2luZzogc2luZUluT3V0fX1cIiA+XG4gICAgPHNsb3Q+XG5cbiAgICA8L3Nsb3Q+XG48L2Rpdj5cbjxzdHlsZT5cblxuPC9zdHlsZT4iLCI8c2NyaXB0PlxuaW1wb3J0IHsgY291bnQgfSBmcm9tICcuLi9zdG9yZS5qcydcbmltcG9ydCB7IG9uTW91bnQsIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ3N2ZWx0ZSc7XG5pbXBvcnQgeyBxdWl6U3RlcHMgfSBmcm9tICcuLi9zdG9yZS5qcydcbmNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cblxuLy9zZXRzIGN1cnJlbnQgaWNvbiBmb3Igc2lkZWJhclxuZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuICAgICAgICAkcXVpelN0ZXBzWyRjb3VudF0uY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAkcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMjtcbiAgICAgICAgY291bnQudXBkYXRlKG4gPT4gbiArIDEpXG4gICAgICAgIGNvbnNvbGUubG9nKCRxdWl6U3RlcHMpO1xuICAgIH1cbjwvc2NyaXB0PlxuPGJ1dHRvbiBvbjpjbGljaz17aW5jcmVtZW50fT5cbiAgICA8c2xvdD5cblxuICAgIDwvc2xvdD5cbjwvYnV0dG9uPlxuPHN0eWxlPlxuICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cbjwvc3R5bGU+XG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBSWUsS0FBSyxFQUFFLEdBQUc7S0FBRSxRQUFRLEVBQUUsR0FBRztLQUFFLENBQUMsRUFBRSxJQUFJO0tBQUUsT0FBTyxFQUFFLENBQUc7S0FBRSxNQUFNLEVBQUUsU0FBUzs7Ozs7Ozs7Ozs7OztJQUFlLEtBQUssRUFBRSxFQUFFO0lBQUUsUUFBUSxFQUFFLEdBQUc7SUFBRSxDQUFDLEdBQUcsR0FBRztJQUFFLE9BQU8sRUFBRSxDQUFDO0lBQUUsTUFBTSxFQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dEQ1cvSSxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BWHJCLFFBQVEsR0FBRyxxQkFBcUI7OztVQUk3QixTQUFTOzZCQUNWLFVBQVUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxHQUFHLElBQUk7NkJBQ2xDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7RUFDN0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
