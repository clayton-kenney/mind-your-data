import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, v as validate_slots, e as element, c as claim_element, a as children, b as detach_dev, f as attr_dev, g as add_location, h as insert_dev, j as append_dev, k as add_render_callback, l as create_bidirectional_transition, t as transition_in, m as transition_out, n as check_outros, p as group_outros } from './client.ebc458fb.js';
import './index.cccde779.js';
import { f as fade } from './index.dc3f7ffa.js';

/* src/routes/index.svelte generated by Svelte v3.23.2 */
const file = "src/routes/index.svelte";

// (10:4) {#if visible}
function create_if_block(ctx) {
	let a;
	let img;
	let img_src_value;
	let img_transition;
	let current;

	const block = {
		c: function create() {
			a = element("a");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { prefetch: true, href: true });
			var a_nodes = children(a);
			img = claim_element(a_nodes, "IMG", { src: true, alt: true, class: true });
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "MYDlogo_large.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Mind your data logo, click to enter");
			attr_dev(img, "class", "svelte-1vtc7gq");
			add_location(img, file, 11, 4, 253);
			attr_dev(a, "prefetch", "");
			attr_dev(a, "href", "quiz");
			add_location(a, file, 10, 4, 224);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, img);
			current = true;
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!img_transition) img_transition = create_bidirectional_transition(img, fade, { delay: 3000, duration: 9000 }, true);
				img_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!img_transition) img_transition = create_bidirectional_transition(img, fade, { delay: 3000, duration: 9000 }, false);
			img_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if (detaching && img_transition) img_transition.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(10:4) {#if visible}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let body;
	let div1;
	let div0;
	let current;
	let if_block = /*visible*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			body = element("body");
			div1 = element("div");
			div0 = element("div");
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			body = claim_element(nodes, "BODY", {});
			var body_nodes = children(body);
			div1 = claim_element(body_nodes, "DIV", { id: true, class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", {});
			var div0_nodes = children(div0);
			if (if_block) if_block.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div0, file, 8, 4, 196);
			attr_dev(div1, "id", "logo-holder");
			attr_dev(div1, "class", "svelte-1vtc7gq");
			add_location(div1, file, 7, 0, 169);
			add_location(body, file, 6, 0, 162);
		},
		m: function mount(target, anchor) {
			insert_dev(target, body, anchor);
			append_dev(body, div1);
			append_dev(div1, div0);
			if (if_block) if_block.m(div0, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*visible*/ ctx[0]) {
				if (if_block) {
					if (dirty & /*visible*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div0, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
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
			if (if_block) if_block.d();
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
	$$self.$capture_state = () => ({ fade, onMount, visible });

	$$self.$inject_state = $$props => {
		if ("visible" in $$props) $$invalidate(0, visible = $$props.visible);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [visible];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMmVjOGFhZWUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZmFkZSB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJztcbiAgICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcbiAgICBsZXQgdmlzaWJsZSA9IGZhbHNlO1xuICAgIG9uTW91bnQoKCkgPT4gdmlzaWJsZSA9IHRydWUpXG48L3NjcmlwdD5cbjxib2R5PlxuPGRpdiBpZD1cImxvZ28taG9sZGVyXCI+XG4gICAgPGRpdj5cbiAgICB7I2lmIHZpc2libGV9XG4gICAgPGEgcHJlZmV0Y2ggaHJlZj1cInF1aXpcIj5cbiAgICA8aW1nIHNyYz1cIk1ZRGxvZ29fbGFyZ2UucG5nXCIgYWx0PVwiTWluZCB5b3VyIGRhdGEgbG9nbywgY2xpY2sgdG8gZW50ZXJcIiB0cmFuc2l0aW9uOmZhZGU9XCJ7e2RlbGF5OiAzMDAwLCBkdXJhdGlvbjogOTAwMH19XCI+PC9hPlxuICAgIHsvaWZ9XG4gICAgPC9kaXY+XG48L2Rpdj5cbjwvYm9keT5cbjxzdHlsZT5cbiAgICAjbG9nby1ob2xkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDgwMHB4O1xuICAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUZBVzhGLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUk7Ozs7Ozs7c0ZBQTNCLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUZoSCxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFBUCxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FOUixPQUFPLEdBQUcsS0FBSztDQUNuQixPQUFPLHVCQUFPLE9BQU8sR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
