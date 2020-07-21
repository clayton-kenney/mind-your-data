import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, N as create_slot, o as validate_store, p as component_subscribe, r as createEventDispatcher, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, X as listen_dev, Q as update_slot, B as transition_in, z as transition_out, P as set_store_value } from './client.ccdb8b63.js';
import { q as quizSteps, c as count } from './store.fbef9f85.js';

/* src/components/complete.svelte generated by Svelte v3.23.2 */
const file = "src/components/complete.svelte";

function create_fragment(ctx) {
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
			attr_dev(button, "class", "svelte-1famktu");
			add_location(button, file, 11, 0, 330);
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
	component_subscribe($$self, quizSteps, $$value => $$invalidate(3, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(4, $count = $$value));
	const dispatch = createEventDispatcher();

	function increment() {
		set_store_value(quizSteps, $quizSteps[$count].complete = true, $quizSteps);
		set_store_value(quizSteps, $quizSteps[$count].status = 2, $quizSteps);
		count.update(n => n + 1);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Complete> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Complete", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		count,
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
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Complete",
			options,
			id: create_fragment.name
		});
	}
}

export { Complete as C };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGUuYjMyNGFhZmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgY291bnQgfSBmcm9tICcuLi9zdG9yZS5qcydcbmltcG9ydCB7IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ3N2ZWx0ZSc7XG5pbXBvcnQgeyBxdWl6U3RlcHMgfSBmcm9tICcuLi9zdG9yZS5qcydcbmNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5mdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gICAgICAgICRxdWl6U3RlcHNbJGNvdW50XS5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAyO1xuICAgICAgICBjb3VudC51cGRhdGUobiA9PiBuICsgMSlcbiAgICB9XG48L3NjcmlwdD5cbjxidXR0b24gb246Y2xpY2s9e2luY3JlbWVudH0+XG4gICAgPHNsb3Q+XG5cbiAgICA8L3Nsb3Q+XG48L2J1dHRvbj5cbjxzdHlsZT5cbiAgICBidXR0b24ge1xuICAgICAgICBjb2xvcjp3aGl0ZTtcblx0XHRiYWNrZ3JvdW5kOiAjMEYyMDMzO1xuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHR3aWR0aDogMzAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRwYWRkaW5nOiA1cHggMTBweDtcbiAgICB9XG48L3N0eWxlPlxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0RBV2tCLEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FQckIsUUFBUSxHQUFHLHFCQUFxQjs7VUFDN0IsU0FBUzs2QkFDVixVQUFVLENBQUMsTUFBTSxFQUFFLFFBQVEsR0FBRyxJQUFJOzZCQUNsQyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDO0VBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
