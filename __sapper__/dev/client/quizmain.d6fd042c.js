import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, v as validate_slots, r as createEventDispatcher, u as beforeUpdate, w as afterUpdate, x as onMount, y as create_component, z as claim_component, A as mount_component, B as transition_in, C as transition_out, D as destroy_component, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, E as check_outros, F as add_render_callback, G as create_bidirectional_transition, t as text, h as claim_text, H as set_data_dev, I as group_outros } from './client.27016f75.js';
import Q1 from './q1.94eeb662.js';
import { q as quintOut, a as quintIn } from './index.cccde779.js';
import { s as slide } from './index.01b49c54.js';
import './TransHelp.d632698a.js';
import { c as count } from './store.6dd2a816.js';
import './Back.b49ac9d0.js';
import './Btn.ecbaca8c.js';
import Q2 from './q2.654bd2b7.js';
import Q3 from './q3.a601ed5f.js';
import './Detect.f9a37d07.js';
import Q4 from './q4.039c4d82.js';
import Q5 from './q5.ec75a565.js';
import Q6 from './q6.e51d2daa.js';
import Q7 from './q7.a471424d.js';
import Q8 from './q8.07c9b7a4.js';
import Q9 from './q9.6502dc70.js';
import Check1 from './check1.8ffb9454.js';
import Check2 from './check2.1e2ac633.js';
import Check3 from './check3.4605ab08.js';
import Review from './review.b815c1a1.js';
import { C as Completion } from './Completion.7d197fae.js';

/* src/routes/quizmain.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quizmain.svelte";

// (42:7) {#if quizStep[$count].showSideBar}
function create_if_block(ctx) {
	let completion;
	let current;

	completion = new Completion({
			props: {
				class: "step",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(completion.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(completion.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(completion, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const completion_changes = {};

			if (dirty & /*$$scope, $count*/ 5) {
				completion_changes.$$scope = { dirty, ctx };
			}

			completion.$set(completion_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(completion.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(completion.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(completion, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(42:7) {#if quizStep[$count].showSideBar}",
		ctx
	});

	return block;
}

// (43:7) <Completion class='step'>
function create_default_slot(ctx) {
	let t_value = /*quizStep*/ ctx[1][/*$count*/ ctx[0]].name + "";
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
			if (dirty & /*$count*/ 1 && t_value !== (t_value = /*quizStep*/ ctx[1][/*$count*/ ctx[0]].name + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(43:7) <Completion class='step'>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let main;
	let t1;
	let section;
	let switch_instance;
	let main_transition;
	let current;
	let if_block = /*quizStep*/ ctx[1][/*$count*/ ctx[0]].showSideBar && create_if_block(ctx);
	var switch_value = /*quizStep*/ ctx[1][/*$count*/ ctx[0]].component;

	function switch_props(ctx) {
		return { $$inline: true };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props());
	}

	const block = {
		c: function create() {
			t0 = space();
			main = element("main");
			if (if_block) if_block.c();
			t1 = space();
			section = element("section");
			if (switch_instance) create_component(switch_instance.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-7q3d4x\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			if (if_block) if_block.l(main_nodes);
			t1 = claim_space(main_nodes);
			section = claim_element(main_nodes, "SECTION", { id: true, class: true });
			var section_nodes = children(section);
			if (switch_instance) claim_component(switch_instance.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Test your knowledge";
			attr_dev(section, "id", "main-content");
			attr_dev(section, "class", "svelte-j9si1o");
			add_location(section, file, 47, 7, 1967);
			attr_dev(main, "class", "svelte-j9si1o");
			add_location(main, file, 40, 0, 1727);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, main, anchor);
			if (if_block) if_block.m(main, null);
			append_dev(main, t1);
			append_dev(main, section);

			if (switch_instance) {
				mount_component(switch_instance, section, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*quizStep*/ ctx[1][/*$count*/ ctx[0]].showSideBar) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*$count*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(main, t1);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (switch_value !== (switch_value = /*quizStep*/ ctx[1][/*$count*/ ctx[0]].component)) {
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
					mount_component(switch_instance, section, null);
				} else {
					switch_instance = null;
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);

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
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);

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
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(main);
			if (if_block) if_block.d();
			if (switch_instance) destroy_component(switch_instance);
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
	component_subscribe($$self, count, $$value => $$invalidate(0, $count = $$value));

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
			name: "LOCATION TRACKS",
			showSideBar: true
		},
		{
			component: Q8,
			name: "iOT",
			showSideBar: true
		},
		{
			component: Check3,
			name: "Change",
			showSideBar: true
		},
		{
			component: Review,
			name: "Review",
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
		Review,
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
		$count
	});

	return [$count, quizStep];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpem1haW4uZDZmZDA0MmMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpem1haW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gaW1wb3J0IFF1aXoxIGZyb20gJy4vcXVpei9xMS5zdmVsdGUnXG4gaW1wb3J0IFF1aXoyIGZyb20gJy4vcXVpei9xMi5zdmVsdGUnXG4gaW1wb3J0IFF1aXozIGZyb20gJy4vcXVpei9xMy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo0IGZyb20gJy4vcXVpei9xNC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo1IGZyb20gJy4vcXVpei9xNS5zdmVsdGUnXG4gaW1wb3J0IFF1aXo2IGZyb20gJy4vcXVpei9xNi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo3IGZyb20gJy4vcXVpei9xNy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo4IGZyb20gJy4vcXVpei9xOC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo5IGZyb20gJy4vcXVpei9xOS5zdmVsdGUnXG4gaW1wb3J0IENoZWNrcG9pbnQxIGZyb20gJy4vcXVpei9jaGVjazEuc3ZlbHRlJ1xuIGltcG9ydCBDaGVja3BvaW50MiBmcm9tICcuL3F1aXovY2hlY2syLnN2ZWx0ZSdcbiBpbXBvcnQgQ2hlY2twb2ludDMgZnJvbSAnLi9xdWl6L2NoZWNrMy5zdmVsdGUnXG4gaW1wb3J0IFJldmlldyBmcm9tICcuL3F1aXovcmV2aWV3LnN2ZWx0ZSdcbiBpbXBvcnQgQ29tcGxldGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBsZXRpb24uc3ZlbHRlJ1xuIGltcG9ydCB7IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciwgYmVmb3JlVXBkYXRlLCBhZnRlclVwZGF0ZSwgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5pbXBvcnQgeyBzbGlkZSB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJztcbmltcG9ydCB7IHF1aW50T3V0LCBxdWludEluIH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG5pbXBvcnQgeyBjb3VudCB9IGZyb20gJy4uL3N0b3JlLmpzJ1xuLy9pbXBvcnQgcXVpelN0ZXBzIGZyb20gJy4uL3N0b3JlLmpzJ1xuXG5cbmNvbnN0IHF1aXpTdGVwID0gIChbXG4gICAge2NvbXBvbmVudDogUXVpejEsIG5hbWU6ICdXRUJDQU0nLCBzaG93U2lkZUJhcjogdHJ1ZX0sXG4gICAge2NvbXBvbmVudDpRdWl6MiwgbmFtZTogJ0hUVFBTJyAsIHNob3dTaWRlQmFyOiB0cnVlfSxcbiAgICB7Y29tcG9uZW50OlF1aXo2LCBuYW1lOiAnRE5TJyAsIHNob3dTaWRlQmFyOiB0cnVlfSxcbiAgICB7Y29tcG9uZW50OkNoZWNrcG9pbnQxLCBuYW1lOiAnU2VjdXJpdHkgdnMgUHJpdmFjeScsIHNob3dTaWRlQmFyOiBmYWxzZX0sXG4gICAge2NvbXBvbmVudDpRdWl6MywgbmFtZTogJ1NFQVJDSCcgLCBzaG93U2lkZUJhcjogdHJ1ZX0sXG4gICAge2NvbXBvbmVudDpRdWl6NCwgbmFtZTogJ1BSSVZBQ1kgU0VUVElOR1MnICwgc2hvd1NpZGVCYXI6IHRydWV9LFxuICAgIHtjb21wb25lbnQ6UXVpejUsIG5hbWU6ICdUUkFDS0VSIEJMT0NLRVInICwgc2hvd1NpZGVCYXI6IHRydWV9LFxuICAgIHtjb21wb25lbnQ6Q2hlY2twb2ludDIsIG5hbWU6ICdTdXJ2ZWlsbGFuY2UgQ2FwaXRhbGlzbScsIHNob3dTaWRlQmFyOiBmYWxzZX0sXG4gICAge2NvbXBvbmVudDpRdWl6NywgbmFtZTogJ0xPQ0FUSU9OIFRSQUNLUycgLCBzaG93U2lkZUJhcjogdHJ1ZX0sXG4gICAge2NvbXBvbmVudDpRdWl6OCwgbmFtZTogJ2lPVCcgLCBzaG93U2lkZUJhcjogdHJ1ZX0sXG4gICAge2NvbXBvbmVudDpDaGVja3BvaW50MywgbmFtZTogJ0NoYW5nZScgLCBzaG93U2lkZUJhcjogdHJ1ZX0sXG4gICAge2NvbXBvbmVudDpSZXZpZXcsIG5hbWU6ICdSZXZpZXcnLCBzaG93U2lkZUJhcjogZmFsc2V9XG5dKVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5UZXN0IHlvdXIga25vd2xlZGdlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48bWFpbiB0cmFuc2l0aW9uOnNsaWRlPVwie3tkZWxheTogMTAwLCBkdXJhdGlvbjogNDAwLCBlYXNpbmc6IHF1aW50T3V0fX1cIj5cbiAgICAgICB7I2lmIHF1aXpTdGVwWyRjb3VudF0uc2hvd1NpZGVCYXJ9XG4gICAgICAgPENvbXBsZXRpb24gY2xhc3M9J3N0ZXAnPlxuICAgICAgICAgICAgICB7cXVpelN0ZXBbJGNvdW50XS5uYW1lfVxuICAgICAgICAgICBcbiAgICAgICA8L0NvbXBsZXRpb24+XG4gICAgICAgey9pZn1cbiAgICAgICA8c2VjdGlvbiBpZD1cIm1haW4tY29udGVudFwiPlxuICAgICAgICA8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXtxdWl6U3RlcFskY291bnRdLmNvbXBvbmVudH0gLz5cbiAgICAgICA8IS0tPFF1aXoyIG9uOm1lc3NhZ2U9e2hhbmRsZU1lc3NhZ2V9Lz4gLS0+XG48IS0tPHNlbGVjdCBiaW5kOnZhbHVlPXtzZWxlY3RlZH0+XG4gICAgICAgIHsjZWFjaCBxdWl6U3RlcHMgYXMgcX1cblx0XHQ8b3B0aW9uIHZhbHVlPXtxfT5RdWVzdGlvbiB7cS5pZH08L29wdGlvbj5cblx0ey9lYWNofVxuPC9zZWxlY3Q+LS0+XG48IS0tPGJ1dHRvbiBvbjpjbGljaz17aGFuZGxlQ2xpY2t9PkNsaWNrIG1lPC9idXR0b24+LS0+XG48IS0tPFByb2dyZXNzIHBhc3Q9e3Bhc3QubmFtZX0gY3VycmVudD17c2VsZWN0ZWQubmFtZX0gbmV4dD17bmV4dC5uYW1lfS8+LS0+XG4gICAgICAgPC9zZWN0aW9uPlxuPC9tYWluPlxuPHN0eWxlPlxuICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcblxuICAgICAgIH1cbiAgICAgICAuc3RlcHtcblx0XHRtYXJnaW4tYm90dG9tOiA1NXB4O1xuICAgICAgIH1cbiAgICAgICAjbWFpbi1jb250ZW50e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzg0MjREO1xuICAgICAgICAgICAgICAvKmhlaWdodDogODZ2aDsgKi9cbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTJweCAyMnB4IDQwcHggMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogOS4zdmggNXZ3IDB2aCA5LjN2aDtcbiAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgICAgICAgICAgICAvKm1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjF2dztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4OyovXG4gICAgICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOlsiUXVpejEiLCJRdWl6MiIsIlF1aXo2IiwiQ2hlY2twb2ludDEiLCJRdWl6MyIsIlF1aXo0IiwiUXVpejUiLCJDaGVja3BvaW50MiIsIlF1aXo3IiwiUXVpejgiLCJDaGVja3BvaW50MyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQTJDZSxHQUFRLGVBQUMsR0FBTSxLQUFFLElBQUk7Ozs7Ozs7Ozs7Ozs7O21FQUFyQixHQUFRLGVBQUMsR0FBTSxLQUFFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUZ4QixHQUFRLGVBQUMsR0FBTSxLQUFFLFdBQVc7aUNBT1IsR0FBUSxlQUFDLEdBQU0sS0FBRSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBUDlDLEdBQVEsZUFBQyxHQUFNLEtBQUUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cURBT1IsR0FBUSxlQUFDLEdBQU0sS0FBRSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQVJoQyxLQUFLLEVBQUUsR0FBRztNQUFFLFFBQVEsRUFBRSxHQUFHO01BQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUEzQyxLQUFLLEVBQUUsR0FBRztLQUFFLFFBQVEsRUFBRSxHQUFHO0tBQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWxCL0QsUUFBUTs7R0FDVCxTQUFTLEVBQUVBLEVBQUs7R0FBRSxJQUFJLEVBQUUsUUFBUTtHQUFFLFdBQVcsRUFBRSxJQUFJOzs7R0FDbkQsU0FBUyxFQUFDQyxFQUFLO0dBQUUsSUFBSSxFQUFFLE9BQU87R0FBRyxXQUFXLEVBQUUsSUFBSTs7O0dBQ2xELFNBQVMsRUFBQ0MsRUFBSztHQUFFLElBQUksRUFBRSxLQUFLO0dBQUcsV0FBVyxFQUFFLElBQUk7OztHQUNoRCxTQUFTLEVBQUNDLE1BQVc7R0FBRSxJQUFJLEVBQUUscUJBQXFCO0dBQUUsV0FBVyxFQUFFLEtBQUs7OztHQUN0RSxTQUFTLEVBQUNDLEVBQUs7R0FBRSxJQUFJLEVBQUUsUUFBUTtHQUFHLFdBQVcsRUFBRSxJQUFJOzs7R0FDbkQsU0FBUyxFQUFDQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGtCQUFrQjtHQUFHLFdBQVcsRUFBRSxJQUFJOzs7R0FDN0QsU0FBUyxFQUFDQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGlCQUFpQjtHQUFHLFdBQVcsRUFBRSxJQUFJOzs7R0FDNUQsU0FBUyxFQUFDQyxNQUFXO0dBQUUsSUFBSSxFQUFFLHlCQUF5QjtHQUFFLFdBQVcsRUFBRSxLQUFLOzs7R0FDMUUsU0FBUyxFQUFDQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGlCQUFpQjtHQUFHLFdBQVcsRUFBRSxJQUFJOzs7R0FDNUQsU0FBUyxFQUFDQyxFQUFLO0dBQUUsSUFBSSxFQUFFLEtBQUs7R0FBRyxXQUFXLEVBQUUsSUFBSTs7O0dBQ2hELFNBQVMsRUFBQ0MsTUFBVztHQUFFLElBQUksRUFBRSxRQUFRO0dBQUcsV0FBVyxFQUFFLElBQUk7OztHQUN6RCxTQUFTLEVBQUMsTUFBTTtHQUFFLElBQUksRUFBRSxRQUFRO0dBQUUsV0FBVyxFQUFFLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
