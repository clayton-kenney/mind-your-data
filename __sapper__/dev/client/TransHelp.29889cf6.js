import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, _ as create_slot, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, k as add_location, l as insert_dev, $ as update_slot, z as transition_in, A as add_render_callback, Y as create_in_transition, x as transition_out, Z as create_out_transition } from './client.7612900a.js';
import { f as fly, b as sineInOut } from './index.42fd54b0.js';

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
					delay: 100,
					duration: 800,
					y: 600,
					opacity: 0.3,
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
				delay: 100,
				duration: 1000,
				y: -800,
				opacity: 0.6,
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

export { TransHelp as T };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNIZWxwLjI5ODg5Y2Y2LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZmx5IH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIGltcG9ydCB7IHNpbmVJbk91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuPC9zY3JpcHQ+XG48ZGl2IGluOmZseT1cInt7ZGVsYXk6IDEwMCwgZHVyYXRpb246IDgwMCwgeTogNjAwLCBvcGFjaXR5OiAwLjMsIGVhc2luZzogc2luZUluT3V0fX1cIiBvdXQ6Zmx5PVwie3tkZWxheTogMTAwLCBkdXJhdGlvbjogMTAwMCwgeTogLTgwMCwgb3BhY2l0eTogMC42LCBlYXNpbmc6IHNpbmVJbk91dH19XCIgPlxuICAgIDxzbG90PlxuXG4gICAgPC9zbG90PlxuPC9kaXY+XG48c3R5bGU+XG5cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUllLEtBQUssRUFBRSxHQUFHO0tBQUUsUUFBUSxFQUFFLEdBQUc7S0FBRSxDQUFDLEVBQUUsR0FBRztLQUFFLE9BQU8sRUFBRSxHQUFHO0tBQUUsTUFBTSxFQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7SUFBZSxLQUFLLEVBQUUsR0FBRztJQUFFLFFBQVEsRUFBRSxJQUFJO0lBQUUsQ0FBQyxHQUFHLEdBQUc7SUFBRSxPQUFPLEVBQUUsR0FBRztJQUFFLE1BQU0sRUFBRSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
