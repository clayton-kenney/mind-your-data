import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, N as create_slot, r as createEventDispatcher, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, Q as update_slot, B as transition_in, z as transition_out } from './client.0bdc7b80.js';

/* src/routes/quiz/Progress.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/Progress.svelte";

function create_fragment(ctx) {
	let aside;
	let section;
	let current;
	const default_slot_template = /*$$slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

	const block = {
		c: function create() {
			aside = element("aside");
			section = element("section");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			aside = claim_element(nodes, "ASIDE", { id: true, class: true });
			var aside_nodes = children(aside);
			section = claim_element(aside_nodes, "SECTION", { id: true, class: true });
			var section_nodes = children(section);
			if (default_slot) default_slot.l(section_nodes);
			section_nodes.forEach(detach_dev);
			aside_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(section, "id", "progress");
			attr_dev(section, "class", "svelte-n0ypaq");
			add_location(section, file, 70, 4, 1372);
			attr_dev(aside, "id", "sidebar");
			attr_dev(aside, "class", "svelte-n0ypaq");
			add_location(aside, file, 69, 0, 1347);
		},
		m: function mount(target, anchor) {
			insert_dev(target, aside, anchor);
			append_dev(aside, section);

			if (default_slot) {
				default_slot.m(section, null);
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
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(aside);
			if (default_slot) default_slot.d(detaching);
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
	let completed;
	const dispatch = createEventDispatcher();

	function sayHello() {
		num++;
		dispatch("message", { number: num });
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Progress> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Progress", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		completed,
		createEventDispatcher,
		dispatch,
		sayHello,
		num
	});

	$$self.$inject_state = $$props => {
		if ("completed" in $$props) completed = $$props.completed;
		if ("num" in $$props) num = $$props.num;
	};

	let num;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	 num = 0;
	return [$$scope, $$slots];
}

class Progress extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Progress",
			options,
			id: create_fragment.name
		});
	}
}

export default Progress;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3MuNDhmNzEzYTkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9Qcm9ncmVzcy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmxldCBjb21wbGV0ZWQ7XG4vL3Bhc3MgdG8gZXZlbnRzIHRvIHF1aXogY29tcG9uZW50c1xuaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcbiAgICAkOiBudW0gPSAwO1xuXHRmdW5jdGlvbiBzYXlIZWxsbygpIHtcbiAgICAgICAgbnVtKys7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRudW1iZXI6IG51bVxuXHRcdH0pO1xuXHR9XG5cbjwvc2NyaXB0PlxuPHN0eWxlPlxuICAgIGFzaWRlIHtcbiAgICAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0b3A6NTBweDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICB3aWR0aDogMjcuNzd2dztcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzdjN2M3OyovXG4gICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICB9XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAyMHB4IDEwcHg7XG4gICAgfVxuICAgICN0aW1lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgICAgICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzdjN2M3OyovXG4gICAgfVxuICAgICNyZW1haW5pbmcge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHggMjBweCAwcHg7XG4gICAgICAgIFxuXG4gICAgfVxuICAgICNtaW51dGVzIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwRjIwMzM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgd2lkdGg6IDkuN3Z3O1xuICAgICAgICBoZWlnaHQ6IDYuN3ZoO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgXG5cbiAgICB9XG4gICAgLmJ0bi1kYXJrIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwRjIwMzM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICB9XG4gICAgI25leHQtc2tpcCB7XG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHggMjBweCAwcHg7XG4gICAgfVxuICAgIFxuPC9zdHlsZT5cbjxhc2lkZSBpZD0nc2lkZWJhcic+XG4gICAgPHNlY3Rpb24gaWQ9XCJwcm9ncmVzc1wiPlxuICAgICAgICA8c2xvdD5cblxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9zZWN0aW9uPlxuICAgIDwhLS1cbiAgICA8c2VjdGlvbiBpZD0nbmV4dC1za2lwJz4gXG4gICAgICAgIDxidXR0b24gb246Y2xpY2s9e3NheUhlbGxvfSBjbGFzcz0nYnRuLWRhcmsnPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAgY2xhc3M9J2J0bi1kYXJrJz5Ta2lwPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPiAtLT5cbjwvYXNpZGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUNJLFNBQVM7T0FHTixRQUFRLEdBQUcscUJBQXFCOztVQUU3QixRQUFRO0VBQ1YsR0FBRztFQUNULFFBQVEsQ0FBQyxTQUFTLElBQ2pCLE1BQU0sRUFBRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUpQLEdBQUcsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
