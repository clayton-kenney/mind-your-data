import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, v as validate_slots, r as createEventDispatcher, u as beforeUpdate, w as afterUpdate, x as onMount, a as space, e as element, y as create_component, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, z as claim_component, j as attr_dev, k as add_location, l as insert_dev, A as mount_component, m as append_dev, B as transition_out, C as check_outros, D as transition_in, E as add_render_callback, F as create_bidirectional_transition, G as destroy_component, t as text, h as claim_text, H as set_data_dev, I as group_outros } from './client.60444891.js';
import Q1 from './q1.6eb13992.js';
import { q as quintOut, a as quintIn } from './index.cccde779.js';
import { s as slide } from './index.01b49c54.js';
import './TransHelp.6e0cb571.js';
import { c as count } from './store.2480151a.js';
import './Back.b1d23622.js';
import './Btn.f8878e31.js';
import Q2 from './q2.01ddca6e.js';
import Q3 from './q3.06b1bd96.js';
import './Detect.37f2a032.js';
import Q4 from './q4.562a22f7.js';
import Q5 from './q5.43bc29c5.js';
import Q6 from './q6.8b93239a.js';
import Q7 from './q7.b04c0eb9.js';
import Q8 from './q8.912ac378.js';
import Q9 from './q9.df577db8.js';
import Check1 from './check1.82baf090.js';
import Check2 from './check2.4ebded9c.js';
import Check3 from './check3.9502afe3.js';
import Review from './review.02298b35.js';
import { C as Completion } from './Completion.1c41a1cf.js';

/* src/routes/quizmain.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quizmain.svelte";

// (42:7) <Completion class='step'>
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
		source: "(42:7) <Completion class='step'>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let main;
	let completion;
	let t1;
	let section;
	let switch_instance;
	let main_transition;
	let current;

	completion = new Completion({
			props: {
				class: "step",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

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
			create_component(completion.$$.fragment);
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
			claim_component(completion.$$.fragment, main_nodes);
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
			attr_dev(section, "class", "svelte-8ub2z1");
			add_location(section, file, 46, 7, 1688);
			attr_dev(main, "class", "svelte-8ub2z1");
			add_location(main, file, 40, 0, 1488);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, main, anchor);
			mount_component(completion, main, null);
			append_dev(main, t1);
			append_dev(main, section);

			if (switch_instance) {
				mount_component(switch_instance, section, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			const completion_changes = {};

			if (dirty & /*$$scope, $count*/ 5) {
				completion_changes.$$scope = { dirty, ctx };
			}

			completion.$set(completion_changes);

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
			transition_in(completion.$$.fragment, local);
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
			transition_out(completion.$$.fragment, local);
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
			destroy_component(completion);
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
		{ component: Q1, name: "WEBCAM" },
		{ component: Q2, name: "HTTPS" },
		{ component: Q6, name: "DNS" },
		{
			component: Check1,
			name: "Security vs Privacy"
		},
		{ component: Q3, name: "SEARCH" },
		{
			component: Q4,
			name: "PRIVACY SETTINGS"
		},
		{
			component: Q5,
			name: "TRACKER BLOCKER"
		},
		{
			component: Check2,
			name: "Surveillance Capitalism"
		},
		{
			component: Q7,
			name: "LOCATION TRACKS"
		},
		{ component: Q8, name: "iOT" },
		{ component: Check3, name: "Change" },
		{ component: Review, name: "Review" }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpem1haW4uY2U3ZWE4MzcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpem1haW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gaW1wb3J0IFF1aXoxIGZyb20gJy4vcXVpei9xMS5zdmVsdGUnXG4gaW1wb3J0IFF1aXoyIGZyb20gJy4vcXVpei9xMi5zdmVsdGUnXG4gaW1wb3J0IFF1aXozIGZyb20gJy4vcXVpei9xMy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo0IGZyb20gJy4vcXVpei9xNC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo1IGZyb20gJy4vcXVpei9xNS5zdmVsdGUnXG4gaW1wb3J0IFF1aXo2IGZyb20gJy4vcXVpei9xNi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo3IGZyb20gJy4vcXVpei9xNy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo4IGZyb20gJy4vcXVpei9xOC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo5IGZyb20gJy4vcXVpei9xOS5zdmVsdGUnXG4gaW1wb3J0IENoZWNrcG9pbnQxIGZyb20gJy4vcXVpei9jaGVjazEuc3ZlbHRlJ1xuIGltcG9ydCBDaGVja3BvaW50MiBmcm9tICcuL3F1aXovY2hlY2syLnN2ZWx0ZSdcbiBpbXBvcnQgQ2hlY2twb2ludDMgZnJvbSAnLi9xdWl6L2NoZWNrMy5zdmVsdGUnXG4gaW1wb3J0IFJldmlldyBmcm9tICcuL3F1aXovcmV2aWV3LnN2ZWx0ZSdcbiBpbXBvcnQgQ29tcGxldGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBsZXRpb24uc3ZlbHRlJ1xuIGltcG9ydCB7IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciwgYmVmb3JlVXBkYXRlLCBhZnRlclVwZGF0ZSwgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5pbXBvcnQgeyBzbGlkZSB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJztcbmltcG9ydCB7IHF1aW50T3V0LCBxdWludEluIH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG5pbXBvcnQgeyBjb3VudCB9IGZyb20gJy4uL3N0b3JlLmpzJ1xuLy9pbXBvcnQgcXVpelN0ZXBzIGZyb20gJy4uL3N0b3JlLmpzJ1xuXG5cbmNvbnN0IHF1aXpTdGVwID0gIChbXG4gICAge2NvbXBvbmVudDogUXVpejEsIG5hbWU6ICdXRUJDQU0nfSxcbiAgICB7Y29tcG9uZW50OlF1aXoyLCBuYW1lOiAnSFRUUFMnfSxcbiAgICB7Y29tcG9uZW50OlF1aXo2LCBuYW1lOiAnRE5TJ30sXG4gICAge2NvbXBvbmVudDpDaGVja3BvaW50MSwgbmFtZTogJ1NlY3VyaXR5IHZzIFByaXZhY3knfSxcbiAgICB7Y29tcG9uZW50OlF1aXozLCBuYW1lOiAnU0VBUkNIJ30sXG4gICAge2NvbXBvbmVudDpRdWl6NCwgbmFtZTogJ1BSSVZBQ1kgU0VUVElOR1MnfSxcbiAgICB7Y29tcG9uZW50OlF1aXo1LCBuYW1lOiAnVFJBQ0tFUiBCTE9DS0VSJ30sXG4gICAge2NvbXBvbmVudDpDaGVja3BvaW50MiwgbmFtZTogJ1N1cnZlaWxsYW5jZSBDYXBpdGFsaXNtJ30sXG4gICAge2NvbXBvbmVudDpRdWl6NywgbmFtZTogJ0xPQ0FUSU9OIFRSQUNLUyd9LFxuICAgIHtjb21wb25lbnQ6UXVpejgsIG5hbWU6ICdpT1QnfSxcbiAgICB7Y29tcG9uZW50OkNoZWNrcG9pbnQzLCBuYW1lOiAnQ2hhbmdlJ30sXG4gICAge2NvbXBvbmVudDpSZXZpZXcsIG5hbWU6ICdSZXZpZXcnfVxuXSlcbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+VGVzdCB5b3VyIGtub3dsZWRnZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPG1haW4gdHJhbnNpdGlvbjpzbGlkZT1cInt7ZGVsYXk6IDEwMCwgZHVyYXRpb246IDQwMCwgZWFzaW5nOiBxdWludE91dH19XCI+XG4gICAgICAgPENvbXBsZXRpb24gY2xhc3M9J3N0ZXAnPlxuICAgICAgICAgICAgICB7cXVpelN0ZXBbJGNvdW50XS5uYW1lfVxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgPC9Db21wbGV0aW9uPlxuICAgICAgIDxzZWN0aW9uIGlkPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgIDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9e3F1aXpTdGVwWyRjb3VudF0uY29tcG9uZW50fSAvPlxuICAgICAgIDwhLS08UXVpejIgb246bWVzc2FnZT17aGFuZGxlTWVzc2FnZX0vPiAtLT5cbjwhLS08c2VsZWN0IGJpbmQ6dmFsdWU9e3NlbGVjdGVkfT5cbiAgICAgICAgeyNlYWNoIHF1aXpTdGVwcyBhcyBxfVxuXHRcdDxvcHRpb24gdmFsdWU9e3F9PlF1ZXN0aW9uIHtxLmlkfTwvb3B0aW9uPlxuXHR7L2VhY2h9XG48L3NlbGVjdD4tLT5cbjwhLS08YnV0dG9uIG9uOmNsaWNrPXtoYW5kbGVDbGlja30+Q2xpY2sgbWU8L2J1dHRvbj4tLT5cbjwhLS08UHJvZ3Jlc3MgcGFzdD17cGFzdC5uYW1lfSBjdXJyZW50PXtzZWxlY3RlZC5uYW1lfSBuZXh0PXtuZXh0Lm5hbWV9Lz4tLT5cbiAgICAgICA8L3NlY3Rpb24+XG48L21haW4+XG48c3R5bGU+XG4gICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuXG4gICAgICAgfVxuICAgICAgIC5zdGVwe1xuXHRcdG1hcmdpbi1ib3R0b206IDU1cHg7XG4gICAgICAgfVxuICAgICAgICNtYWluLWNvbnRlbnR7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzODQyNEQ7XG4gICAgICAgICAgICAgIC8qaGVpZ2h0OiA4NnZoOyAqL1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDIycHggNDBweCAyMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA5LjN2aCA1dncgMHZoIDkuM3ZoO1xuICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBcbiAgICAgICAgICAgICAgLyptYXJnaW4tdG9wOiAtNTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIxdnc7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDsqL1xuICAgICAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbIlF1aXoxIiwiUXVpejIiLCJRdWl6NiIsIkNoZWNrcG9pbnQxIiwiUXVpejMiLCJRdWl6NCIsIlF1aXo1IiwiQ2hlY2twb2ludDIiLCJRdWl6NyIsIlF1aXo4IiwiQ2hlY2twb2ludDMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBMENlLEdBQVEsZUFBQyxHQUFNLEtBQUUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7bUVBQXJCLEdBQVEsZUFBQyxHQUFNLEtBQUUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FLSixHQUFRLGVBQUMsR0FBTSxLQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQUExQixHQUFRLGVBQUMsR0FBTSxLQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BUGhDLEtBQUssRUFBRSxHQUFHO01BQUUsUUFBUSxFQUFFLEdBQUc7TUFBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQTNDLEtBQUssRUFBRSxHQUFHO0tBQUUsUUFBUSxFQUFFLEdBQUc7S0FBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbEIvRCxRQUFRO0lBQ1QsU0FBUyxFQUFFQSxFQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVE7SUFDaEMsU0FBUyxFQUFDQyxFQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU87SUFDOUIsU0FBUyxFQUFDQyxFQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUs7O0dBQzVCLFNBQVMsRUFBQ0MsTUFBVztHQUFFLElBQUksRUFBRSxxQkFBcUI7O0lBQ2xELFNBQVMsRUFBQ0MsRUFBSyxFQUFFLElBQUksRUFBRSxRQUFROztHQUMvQixTQUFTLEVBQUNDLEVBQUs7R0FBRSxJQUFJLEVBQUUsa0JBQWtCOzs7R0FDekMsU0FBUyxFQUFDQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGlCQUFpQjs7O0dBQ3hDLFNBQVMsRUFBQ0MsTUFBVztHQUFFLElBQUksRUFBRSx5QkFBeUI7OztHQUN0RCxTQUFTLEVBQUNDLEVBQUs7R0FBRSxJQUFJLEVBQUUsaUJBQWlCOztJQUN4QyxTQUFTLEVBQUNDLEVBQUssRUFBRSxJQUFJLEVBQUUsS0FBSztJQUM1QixTQUFTLEVBQUNDLE1BQVcsRUFBRSxJQUFJLEVBQUUsUUFBUTtJQUNyQyxTQUFTLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
