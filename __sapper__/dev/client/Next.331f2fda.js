import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, N as create_slot, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, X as listen_dev, Q as update_slot, B as transition_in, z as transition_out } from './client.d8ae2c76.js';
import { s as step } from './store.83af3113.js';

/* src/components/Next.svelte generated by Svelte v3.23.2 */
const file = "src/components/Next.svelte";

function create_fragment(ctx) {
	let button;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

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
			attr_dev(button, "class", "svelte-7cbo9q");
			add_location(button, file, 7, 0, 146);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler*/ ctx[4], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
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
	let { q = 1 } = $$props;

	function increase(num) {
		step.update(n => n += q);
	}

	const writable_props = ["q"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Next> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Next", $$slots, ['default']);
	const click_handler = () => increase();

	$$self.$set = $$props => {
		if ("q" in $$props) $$invalidate(0, q = $$props.q);
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({ step, q, increase });

	$$self.$inject_state = $$props => {
		if ("q" in $$props) $$invalidate(0, q = $$props.q);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [q, increase, $$scope, $$slots, click_handler];
}

class Next extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { q: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Next",
			options,
			id: create_fragment.name
		});
	}

	get q() {
		throw new Error("<Next>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set q(value) {
		throw new Error("<Next>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Next as N };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV4dC4zMzFmMmZkYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTmV4dC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBzdGVwIH0gZnJvbSAnLi4vc3RvcmUuanMnXG4gICAgZXhwb3J0IGxldCBxID0xO1xuICAgIGZ1bmN0aW9uIGluY3JlYXNlKG51bSkge1xuICAgICAgICBzdGVwLnVwZGF0ZShuID0+IG4rPSBxKVxuICAgIH1cbjwvc2NyaXB0PlxuPGJ1dHRvbiBvbjpjbGljaz17KCkgPT4gaW5jcmVhc2Uoe3F9KX0+XG4gICAgPHNsb3Q+XG5cbiAgICA8L3Nsb3Q+XG48L2J1dHRvbj5cblxuPHN0eWxlPlxuICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG48L3N0eWxlPlxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BRWUsQ0FBQyxHQUFFLENBQUM7O1VBQ04sUUFBUSxDQUFDLEdBQUc7RUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFHLENBQUM7Ozs7Ozs7Ozs7OzZCQUdOLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
