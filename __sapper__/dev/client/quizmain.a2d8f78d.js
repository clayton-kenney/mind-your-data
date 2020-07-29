import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, v as validate_slots, J as createEventDispatcher, K as beforeUpdate, L as afterUpdate, o as onMount, B as space, f as element, D as query_selector_all, j as detach_dev, E as claim_space, g as claim_element, h as children, k as attr_dev, l as add_location, n as insert_dev, b as transition_out, x as check_outros, t as transition_in, q as add_render_callback, M as create_bidirectional_transition, w as group_outros, c as create_component, a as claim_component, m as mount_component, e as destroy_component, C as text, F as claim_text, N as set_data_dev } from './client.b49c8d83.js';
import { b as quintOut, d as quintIn } from './index.44998259.js';
import { s as slide } from './index.2e7b3c7b.js';
import './TransHelp.86ff3594.js';
import Q1 from './q1.ef3d134b.js';
import { c as count } from './store.184db45a.js';
import './Back.7c295c53.js';
import './Btn.23e42580.js';
import Q2 from './q2.85751ce6.js';
import Q3 from './q3.05f4e6a0.js';
import './Detect.785bbc29.js';
import Q4 from './q4.b3e633f7.js';
import Q5 from './q5.9f7814a6.js';
import Q6 from './q6.01140a2f.js';
import Q7 from './q7.f3c27e43.js';
import Q8 from './q8.e0a197f1.js';
import Q9 from './q9.999b772d.js';
import Check1 from './check1.3ffec714.js';
import Check2 from './check2.900561e5.js';
import Check3 from './check3.eecc0856.js';
import { C as Completion } from './Completion.92642aae.js';

/* src/routes/quizmain.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quizmain.svelte";

// (49:7) {:else }
function create_else_block(ctx) {
	let div;
	let switch_instance;
	let current;
	var switch_value = /*quizStep*/ ctx[2][/*$count*/ ctx[1]].component;

	function switch_props(ctx) {
		return { $$inline: true };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props());
	}

	const block = {
		c: function create() {
			div = element("div");
			if (switch_instance) create_component(switch_instance.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { id: true, class: true });
			var div_nodes = children(div);
			if (switch_instance) claim_component(switch_instance.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "id", "main-content");
			attr_dev(div, "class", "svelte-29bjxa");
			add_location(div, file, 49, 7, 2038);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (switch_instance) {
				mount_component(switch_instance, div, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (switch_value !== (switch_value = /*quizStep*/ ctx[2][/*$count*/ ctx[1]].component)) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props());
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, div, null);
				} else {
					switch_instance = null;
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (switch_instance) destroy_component(switch_instance);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(49:7) {:else }",
		ctx
	});

	return block;
}

// (41:7) {#if showSideBar}
function create_if_block(ctx) {
	let completion;
	let t;
	let div;
	let switch_instance;
	let current;

	completion = new Completion({
			props: {
				class: "step",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	var switch_value = /*quizStep*/ ctx[2][/*$count*/ ctx[1]].component;

	function switch_props(ctx) {
		return { $$inline: true };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props());
	}

	const block = {
		c: function create() {
			create_component(completion.$$.fragment);
			t = space();
			div = element("div");
			if (switch_instance) create_component(switch_instance.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(completion.$$.fragment, nodes);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", { id: true, class: true });
			var div_nodes = children(div);
			if (switch_instance) claim_component(switch_instance.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "id", "main-content");
			attr_dev(div, "class", "svelte-29bjxa");
			add_location(div, file, 45, 7, 1901);
		},
		m: function mount(target, anchor) {
			mount_component(completion, target, anchor);
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);

			if (switch_instance) {
				mount_component(switch_instance, div, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			const completion_changes = {};

			if (dirty & /*$$scope, $count*/ 10) {
				completion_changes.$$scope = { dirty, ctx };
			}

			completion.$set(completion_changes);

			if (switch_value !== (switch_value = /*quizStep*/ ctx[2][/*$count*/ ctx[1]].component)) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props());
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, div, null);
				} else {
					switch_instance = null;
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(completion.$$.fragment, local);
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(completion.$$.fragment, local);
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(completion, detaching);
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
			if (switch_instance) destroy_component(switch_instance);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(41:7) {#if showSideBar}",
		ctx
	});

	return block;
}

// (42:7) <Completion class='step'>
function create_default_slot(ctx) {
	let t_value = /*quizStep*/ ctx[2][/*$count*/ ctx[1]].name + "";
	let t;

	const block = {
		c: function create() {
			t = text(t_value);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, t_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$count*/ 2 && t_value !== (t_value = /*quizStep*/ ctx[2][/*$count*/ ctx[1]].name + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(42:7) <Completion class='step'>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let main;
	let current_block_type_index;
	let if_block;
	let main_transition;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*showSideBar*/ ctx[0]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			t = space();
			main = element("main");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-7q3d4x\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			if_block.l(main_nodes);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Test your knowledge";
			attr_dev(main, "class", "svelte-29bjxa");
			add_location(main, file, 39, 0, 1690);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, main, anchor);
			if_blocks[current_block_type_index].m(main, null);
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
				if_block.m(main, null);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);

			add_render_callback(() => {
				if (!main_transition) main_transition = create_bidirectional_transition(
					main,
					slide,
					{
						delay: 100,
						duration: 400,
						easing: quintOut
					},
					true
				);

				main_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);

			if (!main_transition) main_transition = create_bidirectional_transition(
				main,
				slide,
				{
					delay: 100,
					duration: 400,
					easing: quintOut
				},
				false
			);

			main_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(main);
			if_blocks[current_block_type_index].d();
			if (detaching && main_transition) main_transition.end();
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
	let $count;
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(1, $count = $$value));

	const quizStep = [
		{
			component: Q1,
			name: "WEBCAM",
			showSideBar: true
		},
		{
			component: Q2,
			name: "HTTPS",
			showSideBar: true
		},
		{
			component: Q6,
			name: "DNS",
			showSideBar: true
		},
		{
			component: Check1,
			name: "Security vs Privacy",
			showSideBar: false
		},
		{
			component: Q3,
			name: "SEARCH",
			showSideBar: true
		},
		{
			component: Q4,
			name: "PRIVACY SETTINGS",
			showSideBar: true
		},
		{
			component: Q5,
			name: "TRACKER BLOCKER",
			showSideBar: true
		},
		{
			component: Check2,
			name: "Surveillance Capitalism",
			showSideBar: false
		},
		{
			component: Q7,
			name: "Internet of Things",
			showSideBar: true
		},
		{
			component: Q8,
			name: "Location Tracking",
			showSideBar: true
		},
		{
			component: Check3,
			name: "Change",
			showSideBar: false
		}
	];

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Quizmain> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Quizmain", $$slots, []);

	$$self.$capture_state = () => ({
		Quiz1: Q1,
		Quiz2: Q2,
		Quiz3: Q3,
		Quiz4: Q4,
		Quiz5: Q5,
		Quiz6: Q6,
		Quiz7: Q7,
		Quiz8: Q8,
		Quiz9: Q9,
		Checkpoint1: Check1,
		Checkpoint2: Check2,
		Checkpoint3: Check3,
		Completion,
		createEventDispatcher,
		beforeUpdate,
		afterUpdate,
		onMount,
		slide,
		quintOut,
		quintIn,
		count,
		quizStep,
		showSideBar,
		$count
	});

	$$self.$inject_state = $$props => {
		if ("showSideBar" in $$props) $$invalidate(0, showSideBar = $$props.showSideBar);
	};

	let showSideBar;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$count*/ 2) {
			 $$invalidate(0, showSideBar = quizStep[$count].showSideBar);
		}
	};

	return [showSideBar, $count, quizStep];
}

class Quizmain extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Quizmain",
			options,
			id: create_fragment.name
		});
	}
}

export default Quizmain;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpem1haW4uYTJkOGY3OGQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpem1haW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gaW1wb3J0IFF1aXoxIGZyb20gJy4vcXVpei9xMS5zdmVsdGUnXG4gaW1wb3J0IFF1aXoyIGZyb20gJy4vcXVpei9xMi5zdmVsdGUnXG4gaW1wb3J0IFF1aXozIGZyb20gJy4vcXVpei9xMy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo0IGZyb20gJy4vcXVpei9xNC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo1IGZyb20gJy4vcXVpei9xNS5zdmVsdGUnXG4gaW1wb3J0IFF1aXo2IGZyb20gJy4vcXVpei9xNi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo3IGZyb20gJy4vcXVpei9xNy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo4IGZyb20gJy4vcXVpei9xOC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo5IGZyb20gJy4vcXVpei9xOS5zdmVsdGUnXG4gaW1wb3J0IENoZWNrcG9pbnQxIGZyb20gJy4vcXVpei9jaGVjazEuc3ZlbHRlJ1xuIGltcG9ydCBDaGVja3BvaW50MiBmcm9tICcuL3F1aXovY2hlY2syLnN2ZWx0ZSdcbiBpbXBvcnQgQ2hlY2twb2ludDMgZnJvbSAnLi9xdWl6L2NoZWNrMy5zdmVsdGUnXG4gaW1wb3J0IENvbXBsZXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Db21wbGV0aW9uLnN2ZWx0ZSdcbiBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIsIGJlZm9yZVVwZGF0ZSwgYWZ0ZXJVcGRhdGUsIG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xuaW1wb3J0IHsgc2xpZGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5pbXBvcnQgeyBxdWludE91dCwgcXVpbnRJbiB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuaW1wb3J0IHsgY291bnQgfSBmcm9tICcuLi9zdG9yZS5qcydcbi8vaW1wb3J0IHF1aXpTdGVwcyBmcm9tICcuLi9zdG9yZS5qcydcblxuXG5jb25zdCBxdWl6U3RlcCA9ICAoW1xuICAgIHtjb21wb25lbnQ6IFF1aXoxLCBuYW1lOiAnV0VCQ0FNJywgc2hvd1NpZGVCYXI6IHRydWV9LFxuICAgIHtjb21wb25lbnQ6UXVpejIsIG5hbWU6ICdIVFRQUycgLCBzaG93U2lkZUJhcjogdHJ1ZX0sXG4gICAge2NvbXBvbmVudDpRdWl6NiwgbmFtZTogJ0ROUycgLCBzaG93U2lkZUJhcjogdHJ1ZX0sXG4gICAge2NvbXBvbmVudDpDaGVja3BvaW50MSwgbmFtZTogJ1NlY3VyaXR5IHZzIFByaXZhY3knLCBzaG93U2lkZUJhcjogZmFsc2V9LFxuICAgIHtjb21wb25lbnQ6UXVpejMsIG5hbWU6ICdTRUFSQ0gnICwgc2hvd1NpZGVCYXI6IHRydWV9LFxuICAgIHtjb21wb25lbnQ6UXVpejQsIG5hbWU6ICdQUklWQUNZIFNFVFRJTkdTJyAsIHNob3dTaWRlQmFyOiB0cnVlfSxcbiAgICB7Y29tcG9uZW50OlF1aXo1LCBuYW1lOiAnVFJBQ0tFUiBCTE9DS0VSJyAsIHNob3dTaWRlQmFyOiB0cnVlfSxcbiAgICB7Y29tcG9uZW50OkNoZWNrcG9pbnQyLCBuYW1lOiAnU3VydmVpbGxhbmNlIENhcGl0YWxpc20nLCBzaG93U2lkZUJhcjogZmFsc2V9LFxuICAgIHtjb21wb25lbnQ6UXVpejcsIG5hbWU6ICdJbnRlcm5ldCBvZiBUaGluZ3MnICwgc2hvd1NpZGVCYXI6IHRydWV9LFxuICAgIHtjb21wb25lbnQ6UXVpejgsIG5hbWU6ICdMb2NhdGlvbiBUcmFja2luZycgLCBzaG93U2lkZUJhcjogdHJ1ZX0sXG4gICAge2NvbXBvbmVudDpDaGVja3BvaW50MywgbmFtZTogJ0NoYW5nZScgLCBzaG93U2lkZUJhcjogZmFsc2V9LFxuXSlcbiQ6IHNob3dTaWRlQmFyID0gcXVpelN0ZXBbJGNvdW50XS5zaG93U2lkZUJhcjtcbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+VGVzdCB5b3VyIGtub3dsZWRnZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPG1haW4gdHJhbnNpdGlvbjpzbGlkZT1cInt7ZGVsYXk6IDEwMCwgZHVyYXRpb246IDQwMCwgZWFzaW5nOiBxdWludE91dH19XCIgPlxuICAgICAgIHsjaWYgc2hvd1NpZGVCYXJ9XG4gICAgICAgPENvbXBsZXRpb24gY2xhc3M9J3N0ZXAnPlxuICAgICAgICAgICAgICB7cXVpelN0ZXBbJGNvdW50XS5uYW1lfVxuICAgICAgICAgICBcbiAgICAgICA8L0NvbXBsZXRpb24+XG4gICAgICAgPGRpdiBpZD1cIm1haW4tY29udGVudFwiPiBcbiAgICAgICAgICAgICAgPHN2ZWx0ZTpjb21wb25lbnQgdGhpcz17cXVpelN0ZXBbJGNvdW50XS5jb21wb25lbnR9IC8+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgezplbHNlIH1cbiAgICAgICA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCI+IFxuICAgICAgICAgICAgICA8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXtxdWl6U3RlcFskY291bnRdLmNvbXBvbmVudH0gLz5cbiAgICAgICA8L2Rpdj5cbiAgICAgICB7L2lmfVxuICAgICAgIFxuPC9tYWluPlxuPHN0eWxlPlxuICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcblxuICAgICAgIH1cbiAgICAgICAjbWFpbi1jb250ZW50e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzg0MjREO1xuICAgICAgICAgICAgICAvKmhlaWdodDogODZ2aDsgKi9cbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTJweCAyMnB4IDQwcHggMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogOS4zdmggNXZ3IDB2aCA5LjN2aDtcbiAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgICAgICAgICAgICAvKm1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjF2dztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4OyovXG4gICAgICAgfVxuICAgICAgICNjaGVja3BvaW50IHtcbiAgICAgICAgICAgICBcbiAgICAgICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6WyJRdWl6MSIsIlF1aXoyIiwiUXVpejYiLCJDaGVja3BvaW50MSIsIlF1aXozIiwiUXVpejQiLCJRdWl6NSIsIkNoZWNrcG9pbnQyIiwiUXVpejciLCJRdWl6OCIsIkNoZWNrcG9pbnQzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBa0RzQyxHQUFRLGVBQUMsR0FBTSxLQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQUExQixHQUFRLGVBQUMsR0FBTSxLQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUoxQixHQUFRLGVBQUMsR0FBTSxLQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cURBQTFCLEdBQVEsZUFBQyxHQUFNLEtBQUUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUpqRCxHQUFRLGVBQUMsR0FBTSxLQUFFLElBQUk7Ozs7Ozs7Ozs7Ozs7O21FQUFyQixHQUFRLGVBQUMsR0FBTSxLQUFFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQUZ4QixHQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFERyxLQUFLLEVBQUUsR0FBRztNQUFFLFFBQVEsRUFBRSxHQUFHO01BQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQTNDLEtBQUssRUFBRSxHQUFHO0tBQUUsUUFBUSxFQUFFLEdBQUc7S0FBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FsQi9ELFFBQVE7O0dBQ1QsU0FBUyxFQUFFQSxFQUFLO0dBQUUsSUFBSSxFQUFFLFFBQVE7R0FBRSxXQUFXLEVBQUUsSUFBSTs7O0dBQ25ELFNBQVMsRUFBQ0MsRUFBSztHQUFFLElBQUksRUFBRSxPQUFPO0dBQUcsV0FBVyxFQUFFLElBQUk7OztHQUNsRCxTQUFTLEVBQUNDLEVBQUs7R0FBRSxJQUFJLEVBQUUsS0FBSztHQUFHLFdBQVcsRUFBRSxJQUFJOzs7R0FDaEQsU0FBUyxFQUFDQyxNQUFXO0dBQUUsSUFBSSxFQUFFLHFCQUFxQjtHQUFFLFdBQVcsRUFBRSxLQUFLOzs7R0FDdEUsU0FBUyxFQUFDQyxFQUFLO0dBQUUsSUFBSSxFQUFFLFFBQVE7R0FBRyxXQUFXLEVBQUUsSUFBSTs7O0dBQ25ELFNBQVMsRUFBQ0MsRUFBSztHQUFFLElBQUksRUFBRSxrQkFBa0I7R0FBRyxXQUFXLEVBQUUsSUFBSTs7O0dBQzdELFNBQVMsRUFBQ0MsRUFBSztHQUFFLElBQUksRUFBRSxpQkFBaUI7R0FBRyxXQUFXLEVBQUUsSUFBSTs7O0dBQzVELFNBQVMsRUFBQ0MsTUFBVztHQUFFLElBQUksRUFBRSx5QkFBeUI7R0FBRSxXQUFXLEVBQUUsS0FBSzs7O0dBQzFFLFNBQVMsRUFBQ0MsRUFBSztHQUFFLElBQUksRUFBRSxvQkFBb0I7R0FBRyxXQUFXLEVBQUUsSUFBSTs7O0dBQy9ELFNBQVMsRUFBQ0MsRUFBSztHQUFFLElBQUksRUFBRSxtQkFBbUI7R0FBRyxXQUFXLEVBQUUsSUFBSTs7O0dBQzlELFNBQVMsRUFBQ0MsTUFBVztHQUFFLElBQUksRUFBRSxRQUFRO0dBQUcsV0FBVyxFQUFFLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBRTVELFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
