import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, K as create_slot, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, V as listen_dev, P as update_slot, D as transition_in, B as transition_out } from './client.7ab6d810.js';
import { s as step, p as progress } from './store.cc962bef.js';

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
			add_location(button, file, 8, 0, 210);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnRuLjdhNGQ1OGIxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9CdG4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgc3RlcCwgcHJvZ3Jlc3MgfSBmcm9tICcuLi9zdG9yZS5qcydcbiAgICBleHBvcnQgbGV0IHEgPTE7XG4gICAgZXhwb3J0IGxldCBwID0gNy42O1xuICAgY29uc3QgaW5jcmVhc2UgPSAoKSA9PiB7XG4gICAgICAgc3RlcC51cGRhdGUobiA9PiBuKz0gcSk7XG4gICAgICBwcm9ncmVzcy51cGRhdGUobiA9PiBuICs9IHApfTtcbjwvc2NyaXB0PlxuPGJ1dHRvbiBvbjpjbGljaz17aW5jcmVhc2V9PlxuICAgIDxzbG90PlxuXG4gICAgPC9zbG90PlxuPC9idXR0b24+XG5cbjxzdHlsZT5cbiAgICBidXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0Ym9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1REFRa0IsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQU5YLENBQUMsR0FBRSxDQUFDO09BQ0osQ0FBQyxHQUFHLEdBQUc7O09BQ2IsUUFBUTtFQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBRyxDQUFDO0VBQ3ZCLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
