import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, O as onMount, v as validate_slots, u as afterUpdate, a as space, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, x as claim_component, l as insert_dev, y as mount_component, B as transition_in, z as transition_out, E as destroy_component, K as set_store_value, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev } from './client.7ff4ac16.js';
import './index.cccde779.js';
import './index.01b49c54.js';
import { T as TransHelp } from './TransHelp.e5bdbbbb.js';
import { t as timerActive, c as count, q as quizSteps } from './store.196aa194.js';
import { C as Complete, B as Back } from './Back.0beef433.js';
import { D as Detect } from './Detect.88d11387.js';

/* src/routes/quiz/check3.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/check3.svelte";

// (27:2) <Complete>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Continue Challenge");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Continue Challenge");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(27:2) <Complete>",
		ctx
	});

	return block;
}

// (22:0) <Trans>
function create_default_slot(ctx) {
	let h1;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div;
	let complete;
	let t4;
	let button0;
	let t5;
	let t6;
	let button1;
	let t7;
	let t8;
	let back;
	let current;

	complete = new Complete({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	back = new Back({ $$inline: true });

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("How  to make change?");
			t1 = space();
			p = element("p");
			t2 = text("It started with the internet, then google realized that they had a data surplus, and our behavior has value. Now they sell it to the highest bidder.");
			t3 = space();
			div = element("div");
			create_component(complete.$$.fragment);
			t4 = space();
			button0 = element("button");
			t5 = text("Sign a Petition");
			t6 = space();
			button1 = element("button");
			t7 = text("Contact your Rep");
			t8 = space();
			create_component(back.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "How  to make change?");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "It started with the internet, then google realized that they had a data surplus, and our behavior has value. Now they sell it to the highest bidder.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(complete.$$.fragment, div_nodes);
			t4 = claim_space(div_nodes);
			button0 = claim_element(div_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t5 = claim_text(button0_nodes, "Sign a Petition");
			button0_nodes.forEach(detach_dev);
			t6 = claim_space(div_nodes);
			button1 = claim_element(div_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t7 = claim_text(button1_nodes, "Contact your Rep");
			button1_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			claim_component(back.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 22, 4, 708);
			add_location(p, file, 23, 8, 746);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 27, 8, 997);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 28, 8, 1039);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 25, 4, 919);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, div, anchor);
			mount_component(complete, div, null);
			append_dev(div, t4);
			append_dev(div, button0);
			append_dev(button0, t5);
			append_dev(div, t6);
			append_dev(div, button1);
			append_dev(button1, t7);
			insert_dev(target, t8, anchor);
			mount_component(back, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const complete_changes = {};

			if (dirty & /*$$scope*/ 16) {
				complete_changes.$$scope = { dirty, ctx };
			}

			complete.$set(complete_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(complete.$$.fragment, local);
			transition_in(back.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(complete.$$.fragment, local);
			transition_out(back.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div);
			destroy_component(complete);
			if (detaching) detach_dev(t8);
			destroy_component(back, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(22:0) <Trans>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
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
			t = space();
			create_component(trans.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1mhgd6m\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "How  to make change?";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope*/ 16) {
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
			if (detaching) detach_dev(t);
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
	let $quizSteps;
	let $count;
	let $timerActive;
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(0, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(1, $count = $$value));
	validate_store(timerActive, "timerActive");
	component_subscribe($$self, timerActive, $$value => $$invalidate(2, $timerActive = $$value));
	const dispatch = createEventDispatcher();

	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
		timerActive.set(!$timerActive);
	});

	onDestroy(() => timerActive.set(!$timerActive));
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Check3> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Check3", $$slots, []);

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		onMount,
		afterUpdate,
		Detect,
		Complete,
		Trans: TransHelp,
		count,
		quizSteps,
		timerActive,
		Back,
		$quizSteps,
		$count,
		$timerActive
	});

	return [];
}

class Check3 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Check3",
			options,
			id: create_fragment.name
		});
	}
}

export default Check3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2szLjU3YWQ5ZjRkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2szLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGltcG9ydCBEZXRlY3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXRlY3Quc3ZlbHRlJ1xuXHRpbXBvcnQgQ29tcGxldGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wbGV0ZS5zdmVsdGUnXG5cbiAgICBpbXBvcnQgVHJhbnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlJztcbiAvL3NldHMgYXNpZGUgaWNvbiB0byBpbiBwcm9ncmVzcyB2aWEgc3RvcmVcbiBpbXBvcnQgeyBjb3VudCwgcXVpelN0ZXBzLCB0aW1lckFjdGl2ZSB9IGZyb20gJy4uLy4uL3N0b3JlLmpzJ1xuIGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cblx0b25Nb3VudChhc3luYygpID0+IHtcblx0XHQkcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMTtcblx0XHR0aW1lckFjdGl2ZS5zZXQoISR0aW1lckFjdGl2ZSk7XG5cdH0pO1xuXHRvbkRlc3Ryb3koKCkgPT4gdGltZXJBY3RpdmUuc2V0KCEkdGltZXJBY3RpdmUpKVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5Ib3cgIHRvIG1ha2UgY2hhbmdlPzwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPFRyYW5zPlxuICAgIDxoMT5Ib3cgIHRvIG1ha2UgY2hhbmdlPzwvaDE+XG4gICAgICAgIDxwPkl0IHN0YXJ0ZWQgd2l0aCB0aGUgaW50ZXJuZXQsIHRoZW4gZ29vZ2xlIHJlYWxpemVkIHRoYXQgdGhleSBoYWQgYSBkYXRhIHN1cnBsdXMsIGFuZCBvdXIgYmVoYXZpb3IgaGFzIHZhbHVlLiBOb3cgdGhleSBzZWxsIGl0IHRvIHRoZSBoaWdoZXN0IGJpZGRlci5cbiAgICAgICAgICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdDxDb21wbGV0ZT5Db250aW51ZSBDaGFsbGVuZ2U8L0NvbXBsZXRlPlxuICAgICAgICA8YnV0dG9uID5TaWduIGEgUGV0aXRpb248L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiA+Q29udGFjdCB5b3VyIFJlcDwvYnV0dG9uPlxuICAgICAgICBcblx0PC9kaXY+XG48QmFjay8+XG48L1RyYW5zPlxuXG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQUVPLFFBQVEsR0FBRyxxQkFBcUI7O0NBVXRDLE9BQU87NkJBQ04sVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQztFQUM3QixXQUFXLENBQUMsR0FBRyxFQUFFLFlBQVk7OztDQUU5QixTQUFTLE9BQU8sV0FBVyxDQUFDLEdBQUcsRUFBRSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
