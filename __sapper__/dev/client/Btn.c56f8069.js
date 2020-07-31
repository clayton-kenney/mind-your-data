import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, y as create_slot, v as validate_slots, f as element, g as claim_element, h as children, j as detach_dev, k as attr_dev, W as toggle_class, l as add_location, n as insert_dev, R as listen_dev, z as update_slot, t as transition_in, b as transition_out } from './client.898da141.js';
import { s as step, p as progress } from './store.4e506f16.js';

/* src/components/Btn.svelte generated by Svelte v3.23.2 */
const file = "src/components/Btn.svelte";

function create_fragment(ctx) {
	let button;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

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
			attr_dev(button, "class", "svelte-1js4abv");
			toggle_class(button, "green", /*green*/ ctx[0]);
			toggle_class(button, "yellow", /*yellow*/ ctx[1]);
			toggle_class(button, "red", /*red*/ ctx[2]);
			add_location(button, file, 11, 0, 299);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*increase*/ ctx[3], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			if (dirty & /*green*/ 1) {
				toggle_class(button, "green", /*green*/ ctx[0]);
			}

			if (dirty & /*yellow*/ 2) {
				toggle_class(button, "yellow", /*yellow*/ ctx[1]);
			}

			if (dirty & /*red*/ 4) {
				toggle_class(button, "red", /*red*/ ctx[2]);
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
	let { green = false } = $$props;
	let { yellow = false } = $$props;
	let { red = false } = $$props;

	const increase = () => {
		step.update(n => n += q);
		progress.update(n => n += p);
	};

	const writable_props = ["q", "p", "green", "yellow", "red"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Btn> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Btn", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("q" in $$props) $$invalidate(4, q = $$props.q);
		if ("p" in $$props) $$invalidate(5, p = $$props.p);
		if ("green" in $$props) $$invalidate(0, green = $$props.green);
		if ("yellow" in $$props) $$invalidate(1, yellow = $$props.yellow);
		if ("red" in $$props) $$invalidate(2, red = $$props.red);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		step,
		progress,
		q,
		p,
		green,
		yellow,
		red,
		increase
	});

	$$self.$inject_state = $$props => {
		if ("q" in $$props) $$invalidate(4, q = $$props.q);
		if ("p" in $$props) $$invalidate(5, p = $$props.p);
		if ("green" in $$props) $$invalidate(0, green = $$props.green);
		if ("yellow" in $$props) $$invalidate(1, yellow = $$props.yellow);
		if ("red" in $$props) $$invalidate(2, red = $$props.red);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [green, yellow, red, increase, q, p, $$scope, $$slots];
}

class Btn extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { q: 4, p: 5, green: 0, yellow: 1, red: 2 });

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

	get green() {
		throw new Error("<Btn>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set green(value) {
		throw new Error("<Btn>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get yellow() {
		throw new Error("<Btn>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set yellow(value) {
		throw new Error("<Btn>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get red() {
		throw new Error("<Btn>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set red(value) {
		throw new Error("<Btn>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Btn as B };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnRuLmM1NmY4MDY5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9CdG4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgc3RlcCwgcHJvZ3Jlc3MgfSBmcm9tICcuLi9zdG9yZS5qcydcbiAgICBleHBvcnQgbGV0IHEgPTE7XG4gICAgZXhwb3J0IGxldCBwID0gNy42O1xuICAgIGV4cG9ydCBsZXQgZ3JlZW4gPSBmYWxzZTtcbiAgICBleHBvcnQgbGV0IHllbGxvdyA9IGZhbHNlO1xuICAgIGV4cG9ydCBsZXQgcmVkID0gZmFsc2U7XG4gICBjb25zdCBpbmNyZWFzZSA9ICgpID0+IHtcbiAgICAgICBzdGVwLnVwZGF0ZShuID0+IG4rPSBxKTtcbiAgICAgIHByb2dyZXNzLnVwZGF0ZShuID0+IG4gKz0gcCl9O1xuPC9zY3JpcHQ+XG48YnV0dG9uIG9uOmNsaWNrPXtpbmNyZWFzZX0gY2xhc3M6Z3JlZW4gY2xhc3M6eWVsbG93IGNsYXNzOnJlZD5cbiAgICA8c2xvdD5cblxuICAgIDwvc2xvdD5cbjwvYnV0dG9uPlxuXG48c3R5bGU+XG4gICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cbiAgICAuZ3JlZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNlZjdiO1xuICAgICAgICBjb2xvcjogIzJDM0M0RTtcbiAgICB9XG4gICAgLnllbGxvdyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUMzMzA7XG4gICAgICAgIGNvbG9yOiAjMkMzQzRFO1xuICAgIH1cbiAgICAucmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U3NEU0NTtcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1REFXa0IsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQVRYLENBQUMsR0FBRSxDQUFDO09BQ0osQ0FBQyxHQUFHLEdBQUc7T0FDUCxLQUFLLEdBQUcsS0FBSztPQUNiLE1BQU0sR0FBRyxLQUFLO09BQ2QsR0FBRyxHQUFHLEtBQUs7O09BQ2pCLFFBQVE7RUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUcsQ0FBQztFQUN2QixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
