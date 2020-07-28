import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, K as create_slot, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, k as add_location, l as insert_dev, P as update_slot, D as transition_in, E as add_render_callback, a0 as create_in_transition, B as transition_out, a1 as create_out_transition } from './client.23763f42.js';
import { s as sineInOut } from './index.cccde779.js';
import { f as fly } from './index.01b49c54.js';

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

export { TransHelp as T };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNIZWxwLjZiYTVjOTRhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZmx5IH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIGltcG9ydCB7IHNpbmVJbk91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuPC9zY3JpcHQ+XG48ZGl2IGluOmZseT1cInt7ZGVsYXk6IDE1MCwgZHVyYXRpb246IDgwMCwgeTogMTAwMCwgb3BhY2l0eTogMC4wLCBlYXNpbmc6IHNpbmVJbk91dH19XCIgb3V0OmZseT1cInt7ZGVsYXk6IDUwLCBkdXJhdGlvbjogNjAwLCB5OiAtODAwLCBvcGFjaXR5OiAwLCBlYXNpbmc6IHNpbmVJbk91dH19XCIgPlxuICAgIDxzbG90PlxuXG4gICAgPC9zbG90PlxuPC9kaXY+XG48c3R5bGU+XG5cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FJZSxLQUFLLEVBQUUsR0FBRztLQUFFLFFBQVEsRUFBRSxHQUFHO0tBQUUsQ0FBQyxFQUFFLElBQUk7S0FBRSxPQUFPLEVBQUUsQ0FBRztLQUFFLE1BQU0sRUFBRSxTQUFTOzs7Ozs7Ozs7Ozs7O0lBQWUsS0FBSyxFQUFFLEVBQUU7SUFBRSxRQUFRLEVBQUUsR0FBRztJQUFFLENBQUMsR0FBRyxHQUFHO0lBQUUsT0FBTyxFQUFFLENBQUM7SUFBRSxNQUFNLEVBQUUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
