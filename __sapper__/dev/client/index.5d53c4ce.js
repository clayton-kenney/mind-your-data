import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, c as claim_element, a as children, b as detach_dev, f as add_location, g as insert_dev, t as transition_out, h as check_outros, j as transition_in, k as group_outros, l as attr_dev, n as noop, m as add_render_callback, o as create_bidirectional_transition, p as listen_dev } from './client.e3ec4135.js';
import './index.cccde779.js';
import { f as fade } from './index.7ec0a5d7.js';

/* src/routes/index.svelte generated by Svelte v3.23.2 */
const file = "src/routes/index.svelte";

// (8:0) {:else}
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
			attr_dev(img, "class", "svelte-1diu3ft");
			add_location(img, file, 8, 4, 247);
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
		source: "(8:0) {:else}",
		ctx
	});

	return block;
}

// (6:4) {#if !visible}
function create_if_block(ctx) {
	let img;
	let img_src_value;
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
			attr_dev(img, "class", "svelte-1diu3ft");
			add_location(img, file, 6, 4, 119);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);

			if (!mounted) {
				dispose = listen_dev(img, "click", /*click_handler*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(6:4) {#if !visible}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
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
			div = element("div");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div, file, 4, 0, 90);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if_blocks[current_block_type_index].m(div, null);
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
				if_block.m(div, null);
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
			if (detaching) detach_dev(div);
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
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	const click_handler = () => $$invalidate(0, visible = !visible);
	$$self.$capture_state = () => ({ fade, visible });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNWQ1M2M0Y2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZmFkZSB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJztcbiAgICBsZXQgdmlzaWJsZSA9IGZhbHNlO1xuPC9zY3JpcHQ+XG48ZGl2PlxuICAgIHsjaWYgIXZpc2libGV9XG4gICAgPGltZyBvbjpjbGljaz1cInsoKSA9PiB2aXNpYmxlID0gIXZpc2libGV9XCIgc3JjPVwiTVlEbG9nb19sYXJnZV9ub3B3ci5wbmdcIiBhbHQ9XCJNaW5kIHlvdXIgZGF0YSBsb2dvLCBjbGljayB0byBlbnRlclwiPlxuezplbHNlfVxuICAgIDxpbWcgc3JjPVwiTVlEbG9nb19sYXJnZS5wbmdcIiBhbHQ9XCJNaW5kIHlvdXIgZGF0YSBsb2dvLCBjbGljayB0byBlbnRlclwiIHRyYW5zaXRpb246ZmFkZT1cInt7ZGVsYXk6IDUwMDAsIGR1cmF0aW9uOiA1MDAwfX1cIj5cbiAgICB7L2lmfVxuPC9kaXY+XG48c3R5bGU+XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDgwMHB4O1xuICAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VGQVE4RixLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJOzs7Ozs7O3NGQUEzQixLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBSC9HLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBSFQsT0FBTyxHQUFHLEtBQUs7Ozs7Ozs7Ozs2Q0FJRyxPQUFPLElBQUksT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
