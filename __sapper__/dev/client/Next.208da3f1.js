import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, N as create_slot, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, X as listen_dev, Q as update_slot, B as transition_in, z as transition_out } from './client.76f9b1b7.js';
import { s as step } from './store.d3804dec.js';

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
			add_location(button, file, 8, 0, 152);
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

	function increase() {
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
		if ("q" in $$props) $$invalidate(1, q = $$props.q);
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({ step, q, increase });

	$$self.$inject_state = $$props => {
		if ("q" in $$props) $$invalidate(1, q = $$props.q);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [increase, q, $$scope, $$slots, click_handler];
}

class Next extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { q: 1 });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV4dC4yMDhkYTNmMS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTmV4dC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBzdGVwIH0gZnJvbSAnLi4vc3RvcmUuanMnXG4gICAgZXhwb3J0IGxldCBxID0xO1xuICAgIGZ1bmN0aW9uIGluY3JlYXNlKCkge1xuICAgICAgICBzdGVwLnVwZGF0ZShuID0+IG4rPSBxKVxuICAgICAgICBcbiAgICB9XG48L3NjcmlwdD5cbjxidXR0b24gb246Y2xpY2s9eygpID0+IGluY3JlYXNlKCl9PlxuICAgIDxzbG90PlxuXG4gICAgPC9zbG90PlxuPC9idXR0b24+XG5cbjxzdHlsZT5cbiAgICBidXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0Ym9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuPC9zdHlsZT5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQUVlLENBQUMsR0FBRSxDQUFDOztVQUNOLFFBQVE7RUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUcsQ0FBQzs7Ozs7Ozs7Ozs7NkJBSU4sUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
