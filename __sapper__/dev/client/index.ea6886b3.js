import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, v as validate_slots, e as element, c as claim_element, a as children, b as detach_dev, f as add_location, g as attr_dev, h as insert_dev, j as append_dev, t as transition_out, k as check_outros, l as transition_in, m as group_outros, n as noop, p as add_render_callback, q as create_bidirectional_transition, r as listen_dev, u as create_out_transition } from './client.ea33e052.js';
import './index.cccde779.js';
import { f as fade } from './index.4fcdc563.js';

/* src/routes/index.svelte generated by Svelte v3.23.2 */
const file = "src/routes/index.svelte";

// (12:0) {:else}
function create_else_block(ctx) {
	let img;
	let img_src_value;
	let img_transition;
	let current;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "MYDlogo_large.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Mind your data logo, click to enter");
			attr_dev(img, "class", "svelte-nuz2x1");
			add_location(img, file, 12, 4, 394);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!img_transition) img_transition = create_bidirectional_transition(img, fade, { delay: 5000, duration: 5000 }, true);
				img_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!img_transition) img_transition = create_bidirectional_transition(img, fade, { delay: 5000, duration: 5000 }, false);
			img_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
			if (detaching && img_transition) img_transition.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(12:0) {:else}",
		ctx
	});

	return block;
}

// (10:4) {#if !visible}
function create_if_block(ctx) {
	let img;
	let img_src_value;
	let img_outro;
	let current;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "MYDlogo_large_nopwr.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Mind your data logo, click to enter");
			attr_dev(img, "class", "svelte-nuz2x1");
			add_location(img, file, 10, 4, 225);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
			current = true;

			if (!mounted) {
				dispose = listen_dev(img, "click", /*click_handler*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			if (img_outro) img_outro.end(1);
			current = true;
		},
		o: function outro(local) {
			img_outro = create_out_transition(img, fade, { delay: 0, duration: 10000 });
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
			if (detaching && img_outro) img_outro.end();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(10:4) {#if !visible}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let body;
	let div1;
	let div0;
	let current_block_type_index;
	let if_block;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (!/*visible*/ ctx[0]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			body = element("body");
			div1 = element("div");
			div0 = element("div");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			body = claim_element(nodes, "BODY", {});
			var body_nodes = children(body);
			div1 = claim_element(body_nodes, "DIV", { id: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", {});
			var div0_nodes = children(div0);
			if_block.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div0, file, 8, 4, 196);
			attr_dev(div1, "id", "logo-holder");
			add_location(div1, file, 7, 0, 169);
			add_location(body, file, 6, 0, 162);
		},
		m: function mount(target, anchor) {
			insert_dev(target, body, anchor);
			append_dev(body, div1);
			append_dev(div1, div0);
			if_blocks[current_block_type_index].m(div0, null);
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
				if_block.m(div0, null);
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
			if (detaching) detach_dev(body);
			if_blocks[current_block_type_index].d();
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
	let visible = false;
	onMount(() => $$invalidate(0, visible = true));
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	const click_handler = () => $$invalidate(0, visible = !visible);
	$$self.$capture_state = () => ({ fade, onMount, visible });

	$$self.$inject_state = $$props => {
		if ("visible" in $$props) $$invalidate(0, visible = $$props.visible);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [visible, click_handler];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZWE2ODg2YjMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZmFkZSB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJztcbiAgICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcbiAgICBsZXQgdmlzaWJsZSA9IGZhbHNlO1xuICAgIG9uTW91bnQoKCkgPT4gdmlzaWJsZSA9IHRydWUpXG48L3NjcmlwdD5cbjxib2R5PlxuPGRpdiBpZD1cImxvZ28taG9sZGVyXCI+XG4gICAgPGRpdj5cbiAgICB7I2lmICF2aXNpYmxlfVxuICAgIDxpbWcgb246Y2xpY2s9XCJ7KCkgPT4gdmlzaWJsZSA9ICF2aXNpYmxlfVwiIHNyYz1cIk1ZRGxvZ29fbGFyZ2Vfbm9wd3IucG5nXCIgYWx0PVwiTWluZCB5b3VyIGRhdGEgbG9nbywgY2xpY2sgdG8gZW50ZXJcIiBvdXQ6ZmFkZT1cInt7ZGVsYXk6IDAsIGR1cmF0aW9uOiAxMDAwMH19XCI+XG57OmVsc2V9XG4gICAgPGltZyBzcmM9XCJNWURsb2dvX2xhcmdlLnBuZ1wiIGFsdD1cIk1pbmQgeW91ciBkYXRhIGxvZ28sIGNsaWNrIHRvIGVudGVyXCIgdHJhbnNpdGlvbjpmYWRlPVwie3tkZWxheTogNTAwMCwgZHVyYXRpb246IDUwMDB9fVwiPlxuICAgIHsvaWZ9XG4gICAgPC9kaXY+XG48L2Rpdj5cbjwvYm9keT5cbjxzdHlsZT5cbiAgICAubG9nby1ob2xkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDgwMHB4O1xuICAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VGQVk4RixLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJOzs7Ozs7O3NGQUEzQixLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUZVLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFEbEosR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBTlQsT0FBTyxHQUFHLEtBQUs7Q0FDbkIsT0FBTyx1QkFBTyxPQUFPLEdBQUcsSUFBSTs7Ozs7Ozs7OzZDQU1OLE9BQU8sSUFBSSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
