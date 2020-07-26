import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, H as create_slot, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, T as listen_dev, K as update_slot, A as transition_in, y as transition_out } from './client.77e24034.js';
import { s as step, p as progress } from './store.e4951116.js';

/* src/components/Btn.svelte generated by Svelte v3.23.2 */
const file = "src/components/Btn.svelte";

function create_fragment(ctx) {
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
			attr_dev(button, "class", "svelte-7cbo9q");
			add_location(button, file, 9, 0, 219);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*increase*/ ctx[0], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
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
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { q = 1 } = $$props;
	let { p = 7.6 } = $$props;

	const increase = () => {
		step.update(n => n += q);
		progress.update(n => n += p);
	};

	const writable_props = ["q", "p"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Btn> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Btn", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("q" in $$props) $$invalidate(1, q = $$props.q);
		if ("p" in $$props) $$invalidate(2, p = $$props.p);
		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({ step, progress, q, p, increase });

	$$self.$inject_state = $$props => {
		if ("q" in $$props) $$invalidate(1, q = $$props.q);
		if ("p" in $$props) $$invalidate(2, p = $$props.p);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [increase, q, p, $$scope, $$slots];
}

class Btn extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { q: 1, p: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Btn",
			options,
			id: create_fragment.name
		});
	}

	get q() {
		throw new Error("<Btn>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set q(value) {
		throw new Error("<Btn>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get p() {
		throw new Error("<Btn>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set p(value) {
		throw new Error("<Btn>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Btn as B };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnRuLmY2MDcyYTRlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9CdG4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgc3RlcCwgcHJvZ3Jlc3MgfSBmcm9tICcuLi9zdG9yZS5qcydcbiAgICBleHBvcnQgbGV0IHEgPTE7XG4gICAgZXhwb3J0IGxldCBwID0gNy42O1xuICAgY29uc3QgaW5jcmVhc2UgPSAoKSA9PiB7XG4gICAgICAgc3RlcC51cGRhdGUobiA9PiBuKz0gcSk7XG4gICAgICAgIHByb2dyZXNzLnVwZGF0ZShuID0+IG4rPXApfTtcbiAgICAgICAgXG48L3NjcmlwdD5cbjxidXR0b24gb246Y2xpY2s9e2luY3JlYXNlfT5cbiAgICA8c2xvdD5cblxuICAgIDwvc2xvdD5cbjwvYnV0dG9uPlxuXG48c3R5bGU+XG4gICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dURBU2tCLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FQWCxDQUFDLEdBQUUsQ0FBQztPQUNKLENBQUMsR0FBRyxHQUFHOztPQUNiLFFBQVE7RUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUcsQ0FBQztFQUNyQixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
