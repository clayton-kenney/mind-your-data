import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, v as validate_slots, J as createEventDispatcher, K as beforeUpdate, L as afterUpdate, o as onMount, B as space, f as element, D as query_selector_all, j as detach_dev, E as claim_space, g as claim_element, h as children, k as attr_dev, l as add_location, n as insert_dev, b as transition_out, x as check_outros, t as transition_in, q as add_render_callback, M as create_bidirectional_transition, w as group_outros, c as create_component, a as claim_component, m as mount_component, e as destroy_component, C as text, F as claim_text, N as set_data_dev } from './client.1381ba42.js';
import { c as slide, a as fly, f as fade, d as quintOut, e as quintIn } from './index.46ccad50.js';
import './TransHelp.23ab2134.js';
import Q1 from './q1.4473f3aa.js';
import { c as count } from './store.f1e72049.js';
import './Back.67a4ed53.js';
import './Btn.41833e10.js';
import Q2 from './q2.f13467d1.js';
import Q3 from './q3.36f47247.js';
import './Detect.5b4c9b05.js';
import Q4 from './q4.84af43a0.js';
import Q5 from './q5.9cd07b0e.js';
import Q6 from './q6.fa41a646.js';
import Q7 from './q7.392bd314.js';
import Q8 from './q8.376f19cf.js';
import Q9 from './q9.84f20ce2.js';
import Check1 from './check1.d94a1d95.js';
import Check2 from './check2.96509436.js';
import Check3 from './check3.c281080b.js';
import { C as Completion } from './Completion.f0f22a12.js';

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
			attr_dev(div, "id", "checkpoint");
			attr_dev(div, "class", "svelte-29bjxa");
			add_location(div, file, 49, 7, 2049);
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
			add_location(div, file, 45, 7, 1912);
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
			add_location(main, file, 39, 0, 1701);
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
		fly,
		fade,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpem1haW4uNmZjOGUzNGMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpem1haW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gaW1wb3J0IFF1aXoxIGZyb20gJy4vcXVpei9xMS5zdmVsdGUnXG4gaW1wb3J0IFF1aXoyIGZyb20gJy4vcXVpei9xMi5zdmVsdGUnXG4gaW1wb3J0IFF1aXozIGZyb20gJy4vcXVpei9xMy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo0IGZyb20gJy4vcXVpei9xNC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo1IGZyb20gJy4vcXVpei9xNS5zdmVsdGUnXG4gaW1wb3J0IFF1aXo2IGZyb20gJy4vcXVpei9xNi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo3IGZyb20gJy4vcXVpei9xNy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo4IGZyb20gJy4vcXVpei9xOC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo5IGZyb20gJy4vcXVpei9xOS5zdmVsdGUnXG4gaW1wb3J0IENoZWNrcG9pbnQxIGZyb20gJy4vcXVpei9jaGVjazEuc3ZlbHRlJ1xuIGltcG9ydCBDaGVja3BvaW50MiBmcm9tICcuL3F1aXovY2hlY2syLnN2ZWx0ZSdcbiBpbXBvcnQgQ2hlY2twb2ludDMgZnJvbSAnLi9xdWl6L2NoZWNrMy5zdmVsdGUnXG4gaW1wb3J0IENvbXBsZXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Db21wbGV0aW9uLnN2ZWx0ZSdcbiBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIsIGJlZm9yZVVwZGF0ZSwgYWZ0ZXJVcGRhdGUsIG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xuaW1wb3J0IHsgc2xpZGUsIGZseSwgZmFkZSB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJztcbmltcG9ydCB7IHF1aW50T3V0LCBxdWludEluIH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG5pbXBvcnQgeyBjb3VudCB9IGZyb20gJy4uL3N0b3JlLmpzJ1xuLy9pbXBvcnQgcXVpelN0ZXBzIGZyb20gJy4uL3N0b3JlLmpzJ1xuXG5cbmNvbnN0IHF1aXpTdGVwID0gIChbXG4gICAge2NvbXBvbmVudDogUXVpejEsIG5hbWU6ICdXRUJDQU0nLCBzaG93U2lkZUJhcjogdHJ1ZX0sXG4gICAge2NvbXBvbmVudDpRdWl6MiwgbmFtZTogJ0hUVFBTJyAsIHNob3dTaWRlQmFyOiB0cnVlfSxcbiAgICB7Y29tcG9uZW50OlF1aXo2LCBuYW1lOiAnRE5TJyAsIHNob3dTaWRlQmFyOiB0cnVlfSxcbiAgICB7Y29tcG9uZW50OkNoZWNrcG9pbnQxLCBuYW1lOiAnU2VjdXJpdHkgdnMgUHJpdmFjeScsIHNob3dTaWRlQmFyOiBmYWxzZX0sXG4gICAge2NvbXBvbmVudDpRdWl6MywgbmFtZTogJ1NFQVJDSCcgLCBzaG93U2lkZUJhcjogdHJ1ZX0sXG4gICAge2NvbXBvbmVudDpRdWl6NCwgbmFtZTogJ1BSSVZBQ1kgU0VUVElOR1MnICwgc2hvd1NpZGVCYXI6IHRydWV9LFxuICAgIHtjb21wb25lbnQ6UXVpejUsIG5hbWU6ICdUUkFDS0VSIEJMT0NLRVInICwgc2hvd1NpZGVCYXI6IHRydWV9LFxuICAgIHtjb21wb25lbnQ6Q2hlY2twb2ludDIsIG5hbWU6ICdTdXJ2ZWlsbGFuY2UgQ2FwaXRhbGlzbScsIHNob3dTaWRlQmFyOiBmYWxzZX0sXG4gICAge2NvbXBvbmVudDpRdWl6NywgbmFtZTogJ0ludGVybmV0IG9mIFRoaW5ncycgLCBzaG93U2lkZUJhcjogdHJ1ZX0sXG4gICAge2NvbXBvbmVudDpRdWl6OCwgbmFtZTogJ0xvY2F0aW9uIFRyYWNraW5nJyAsIHNob3dTaWRlQmFyOiB0cnVlfSxcbiAgICB7Y29tcG9uZW50OkNoZWNrcG9pbnQzLCBuYW1lOiAnQ2hhbmdlJyAsIHNob3dTaWRlQmFyOiBmYWxzZX0sXG5dKVxuJDogc2hvd1NpZGVCYXIgPSBxdWl6U3RlcFskY291bnRdLnNob3dTaWRlQmFyO1xuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5UZXN0IHlvdXIga25vd2xlZGdlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48bWFpbiB0cmFuc2l0aW9uOnNsaWRlPVwie3tkZWxheTogMTAwLCBkdXJhdGlvbjogNDAwLCBlYXNpbmc6IHF1aW50T3V0fX1cIiA+XG4gICAgICAgeyNpZiBzaG93U2lkZUJhcn1cbiAgICAgICA8Q29tcGxldGlvbiBjbGFzcz0nc3RlcCc+XG4gICAgICAgICAgICAgIHtxdWl6U3RlcFskY291bnRdLm5hbWV9XG4gICAgICAgICAgIFxuICAgICAgIDwvQ29tcGxldGlvbj5cbiAgICAgICA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCI+IFxuICAgICAgICAgICAgICA8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXtxdWl6U3RlcFskY291bnRdLmNvbXBvbmVudH0gLz5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICB7OmVsc2UgfVxuICAgICAgIDxkaXYgaWQ9XCJjaGVja3BvaW50XCI+IFxuICAgICAgICAgICAgICA8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXtxdWl6U3RlcFskY291bnRdLmNvbXBvbmVudH0gLz5cbiAgICAgICA8L2Rpdj5cbiAgICAgICB7L2lmfVxuICAgICAgIFxuPC9tYWluPlxuPHN0eWxlPlxuICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcblxuICAgICAgIH1cbiAgICAgICAjbWFpbi1jb250ZW50e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzg0MjREO1xuICAgICAgICAgICAgICAvKmhlaWdodDogODZ2aDsgKi9cbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTJweCAyMnB4IDQwcHggMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogOS4zdmggNXZ3IDB2aCA5LjN2aDtcbiAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgICAgICAgICAgICAvKm1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjF2dztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4OyovXG4gICAgICAgfVxuICAgICAgICNjaGVja3BvaW50IHtcbiAgICAgICAgICAgICBcbiAgICAgICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6WyJRdWl6MSIsIlF1aXoyIiwiUXVpejYiLCJDaGVja3BvaW50MSIsIlF1aXozIiwiUXVpejQiLCJRdWl6NSIsIkNoZWNrcG9pbnQyIiwiUXVpejciLCJRdWl6OCIsIkNoZWNrcG9pbnQzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FrRHNDLEdBQVEsZUFBQyxHQUFNLEtBQUUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cURBQTFCLEdBQVEsZUFBQyxHQUFNLEtBQUUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBSjFCLEdBQVEsZUFBQyxHQUFNLEtBQUUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFBMUIsR0FBUSxlQUFDLEdBQU0sS0FBRSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBSmpELEdBQVEsZUFBQyxHQUFNLEtBQUUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7bUVBQXJCLEdBQVEsZUFBQyxHQUFNLEtBQUUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBRnhCLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQURHLEtBQUssRUFBRSxHQUFHO01BQUUsUUFBUSxFQUFFLEdBQUc7TUFBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FBM0MsS0FBSyxFQUFFLEdBQUc7S0FBRSxRQUFRLEVBQUUsR0FBRztLQUFFLE1BQU0sRUFBRSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWxCL0QsUUFBUTs7R0FDVCxTQUFTLEVBQUVBLEVBQUs7R0FBRSxJQUFJLEVBQUUsUUFBUTtHQUFFLFdBQVcsRUFBRSxJQUFJOzs7R0FDbkQsU0FBUyxFQUFDQyxFQUFLO0dBQUUsSUFBSSxFQUFFLE9BQU87R0FBRyxXQUFXLEVBQUUsSUFBSTs7O0dBQ2xELFNBQVMsRUFBQ0MsRUFBSztHQUFFLElBQUksRUFBRSxLQUFLO0dBQUcsV0FBVyxFQUFFLElBQUk7OztHQUNoRCxTQUFTLEVBQUNDLE1BQVc7R0FBRSxJQUFJLEVBQUUscUJBQXFCO0dBQUUsV0FBVyxFQUFFLEtBQUs7OztHQUN0RSxTQUFTLEVBQUNDLEVBQUs7R0FBRSxJQUFJLEVBQUUsUUFBUTtHQUFHLFdBQVcsRUFBRSxJQUFJOzs7R0FDbkQsU0FBUyxFQUFDQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGtCQUFrQjtHQUFHLFdBQVcsRUFBRSxJQUFJOzs7R0FDN0QsU0FBUyxFQUFDQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGlCQUFpQjtHQUFHLFdBQVcsRUFBRSxJQUFJOzs7R0FDNUQsU0FBUyxFQUFDQyxNQUFXO0dBQUUsSUFBSSxFQUFFLHlCQUF5QjtHQUFFLFdBQVcsRUFBRSxLQUFLOzs7R0FDMUUsU0FBUyxFQUFDQyxFQUFLO0dBQUUsSUFBSSxFQUFFLG9CQUFvQjtHQUFHLFdBQVcsRUFBRSxJQUFJOzs7R0FDL0QsU0FBUyxFQUFDQyxFQUFLO0dBQUUsSUFBSSxFQUFFLG1CQUFtQjtHQUFHLFdBQVcsRUFBRSxJQUFJOzs7R0FDOUQsU0FBUyxFQUFDQyxNQUFXO0dBQUUsSUFBSSxFQUFFLFFBQVE7R0FBRyxXQUFXLEVBQUUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUU1RCxXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
