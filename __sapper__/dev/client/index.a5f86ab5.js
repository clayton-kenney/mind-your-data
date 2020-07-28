import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, v as validate_slots, c as create_component, a as claim_component, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, f as element, g as claim_element, h as children, j as detach_dev, k as attr_dev, l as add_location, n as insert_dev, p as append_dev, q as add_render_callback, r as create_in_transition, u as create_out_transition, w as group_outros, x as check_outros } from './client.13e9900d.js';
import { q as quintInOut } from './index.44998259.js';
import { f as fade, b as blur } from './index.0cbc1950.js';
import { T as TransHelp } from './TransHelp.5240d197.js';

/* src/routes/index.svelte generated by Svelte v3.23.2 */
const file = "src/routes/index.svelte";

// (12:4) {#if visible}
function create_if_block(ctx) {
	let a;
	let img;
	let img_src_value;
	let img_intro;
	let img_outro;
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
			add_location(img, file, 13, 4, 363);
			attr_dev(a, "prefetch", "");
			attr_dev(a, "href", "quiz");
			add_location(a, file, 12, 4, 334);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, img);
			current = true;
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (img_outro) img_outro.end(1);
				if (!img_intro) img_intro = create_in_transition(img, fade, { delay: 3000, duration: 9000 });
				img_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			if (img_intro) img_intro.invalidate();
			img_outro = create_out_transition(img, blur, { delay: 0, duration: 2000 });
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if (detaching && img_outro) img_outro.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(12:4) {#if visible}",
		ctx
	});

	return block;
}

// (9:0) <Trans>
function create_default_slot(ctx) {
	let div1;
	let div0;
	let current;
	let if_block = /*visible*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { id: true, class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", {});
			var div0_nodes = children(div0);
			if (if_block) if_block.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div0, file, 10, 4, 306);
			attr_dev(div1, "id", "logo-holder");
			attr_dev(div1, "class", "svelte-1vtc7gq");
			add_location(div1, file, 9, 0, 279);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			if (if_block) if_block.m(div0, null);
			current = true;
		},
		p: function update(ctx, dirty) {
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
			if (detaching) detach_dev(div1);
			if (if_block) if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(9:0) <Trans>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let trans;
	let current;

	trans = new TransHelp({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(trans.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(trans.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope, visible*/ 3) {
				trans_changes.$$scope = { dirty, ctx };
			}

			trans.$set(trans_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(trans.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(trans.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(trans, detaching);
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

	$$self.$capture_state = () => ({
		fade,
		blur,
		quintInOut,
		onMount,
		Trans: TransHelp,
		visible
	});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTVmODZhYjUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZmFkZSwgYmx1ciB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJztcbiAgICBpbXBvcnQgeyBxdWludEluT3V0IH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG4gICAgaW1wb3J0IFRyYW5zIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSdcbiAgICBsZXQgdmlzaWJsZSA9IGZhbHNlO1xuICAgIG9uTW91bnQoKCkgPT4gdmlzaWJsZSA9IHRydWUpXG48L3NjcmlwdD5cbjxUcmFucz5cbjxkaXYgaWQ9XCJsb2dvLWhvbGRlclwiPlxuICAgIDxkaXY+XG4gICAgeyNpZiB2aXNpYmxlfVxuICAgIDxhIHByZWZldGNoIGhyZWY9XCJxdWl6XCI+XG4gICAgPGltZyBzcmM9XCJNWURsb2dvX2xhcmdlLnBuZ1wiIGFsdD1cIk1pbmQgeW91ciBkYXRhIGxvZ28sIGNsaWNrIHRvIGVudGVyXCIgaW46ZmFkZT1cInt7ZGVsYXk6IDMwMDAsIGR1cmF0aW9uOiA5MDAwLCB9fVwiIG91dDpibHVyPVwie3tkZWxheTogMCwgZHVyYXRpb246IDIwMDB9fVwiPjwvYT5cbiAgICB7L2lmfVxuICAgIDwvZGl2PlxuPC9kaXY+XG48L1RyYW5zPlxuPHN0eWxlPlxuICAgICNsb2dvLWhvbGRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogODAwcHg7XG4gICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrRUFhc0YsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSTs7Ozs7Ozs7a0RBQWtCLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBRmxKLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQUFQLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQU5SLE9BQU8sR0FBRyxLQUFLO0NBQ25CLE9BQU8sdUJBQU8sT0FBTyxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
