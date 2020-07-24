import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, v as validate_slots, r as createEventDispatcher, u as globals, a as space, e as element, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, x as claim_component, j as attr_dev, k as add_location, l as insert_dev, y as mount_component, m as append_dev, z as transition_out, A as check_outros, B as transition_in, C as add_render_callback, D as create_bidirectional_transition, E as destroy_component, t as text, h as claim_text, F as set_data_dev, G as group_outros } from './client.aee49ced.js';
import { s as slide, q as quintOut, a as quintIn } from './index.42fd54b0.js';
import './complete.62deaac4.js';
import { c as count } from './store.020c050e.js';
import './Next.86e64b58.js';
import Q1 from './q1.f0ce8393.js';
import Q2 from './q2.14783770.js';
import Q3 from './q3.68464228.js';
import './Detect.0cbf022c.js';
import Q4 from './q4.acd4f36e.js';
import Q5 from './q5.47f341b0.js';
import Q6 from './q6.15f88b80.js';
import Q7 from './q7.ef23cd26.js';
import Q8 from './q8.8d6f8d46.js';
import Q9 from './q9.866823cd.js';
import Check1 from './check1.cd3781ca.js';
import Check2 from './check2.6c49dc30.js';
import Check3 from './check3.8272a993.js';
import { C as Completion } from './Completion.e3fc88b0.js';

/* src/routes/quizmain.svelte generated by Svelte v3.23.2 */

const { Object: Object_1 } = globals;
const file = "src/routes/quizmain.svelte";

// (51:7) <Completion class='step'>
function create_default_slot(ctx) {
	let t0;
	let t1_value = /*quizSteps*/ ctx[0][/*quizNum*/ ctx[1]].id + ": " + /*quizSteps*/ ctx[0][/*quizNum*/ ctx[1]].name + "";
	let t1;

	const block = {
		c: function create() {
			t0 = text("Chapter ");
			t1 = text(t1_value);
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "Chapter ");
			t1 = claim_text(nodes, t1_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*quizSteps, quizNum*/ 3 && t1_value !== (t1_value = /*quizSteps*/ ctx[0][/*quizNum*/ ctx[1]].id + ": " + /*quizSteps*/ ctx[0][/*quizNum*/ ctx[1]].name + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(51:7) <Completion class='step'>",
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

	var switch_value = /*quizSteps*/ ctx[0][/*quizNum*/ ctx[1]].component;

	function switch_props(ctx) {
		return { $$inline: true };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props());
		switch_instance.$on("message", /*handleMessage*/ ctx[2]);
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
			attr_dev(section, "class", "svelte-a9u78n");
			add_location(section, file, 53, 7, 2395);
			attr_dev(main, "class", "svelte-a9u78n");
			add_location(main, file, 49, 0, 2182);
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

			if (dirty & /*$$scope, quizSteps, quizNum*/ 35) {
				completion_changes.$$scope = { dirty, ctx };
			}

			completion.$set(completion_changes);

			if (switch_value !== (switch_value = /*quizSteps*/ ctx[0][/*quizNum*/ ctx[1]].component)) {
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
					switch_instance.$on("message", /*handleMessage*/ ctx[2]);
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
	let $quizSteps;
	let $count;
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(4, $count = $$value));
	let quizSteps = $quizSteps;
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, value => $$invalidate(3, $quizSteps = value));

	function handleMessage(event) {
		//quizNum++;
		//quizSteps[Object.values(event.detail[0])].complete = object.values(event.detail[1])
		let status = Object.values(event.detail);

		let location = status[0];
		$$invalidate(0, quizSteps[location].complete = status[1], quizSteps);
	} //console.log(quizSteps[location]);

	const writable_props = [];

	Object_1.keys($$props).forEach(key => {
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
		slide,
		quintOut,
		quintIn,
		count,
		quizSteps,
		handleMessage,
		$quizSteps,
		quizNum,
		$count
	});

	$$self.$inject_state = $$props => {
		if ("quizSteps" in $$props) $$invalidate(0, quizSteps = $$props.quizSteps);
		if ("quizNum" in $$props) $$invalidate(1, quizNum = $$props.quizNum);
	};

	let quizNum;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$count*/ 16) {
			/*const quizSteps =  [
       { id:'1', component: Quiz1, name: 'Webcam Challenge', complete:false},
       { id: '2', component: Quiz2, name: 'HTTPS Everywhere', complete:false},
       { id: '3', component: Checkpoint1, name: 'Security vs Privacy', complete:false},
       { id: '4', component: Quiz3, name: 'Search Engine', complete:false},
       { id: '5', component: Quiz4, name: 'Privacy Settings', complete:false},
       { id: '6', component: Quiz5, name: 'Tracker blocker', complete:false},
       { id: '7', component: Quiz6, name: 'DNS', complete:false},
       { id: '8', component: Checkpoint2, name: 'Surveillance Capitalism', complete:false},
       { id: '9', component: Quiz7, name: 'Location Tracking', complete:false},
       { id: '10', component: Quiz8, name: 'iOT', complete:false},
       { id: '11', component: Checkpoint3, name: 'How to Make change', complete:false},
]*/
			//$: quizNum = 0;
			//let quizNum = 2;
			 $$invalidate(1, quizNum = $count);
		}
	};

	return [quizSteps, quizNum, handleMessage];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpem1haW4uOWQ4MzQzMDUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpem1haW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gaW1wb3J0IFF1aXoxIGZyb20gJy4vcXVpei9xMS5zdmVsdGUnXG4gaW1wb3J0IFF1aXoyIGZyb20gJy4vcXVpei9xMi5zdmVsdGUnXG4gaW1wb3J0IFF1aXozIGZyb20gJy4vcXVpei9xMy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo0IGZyb20gJy4vcXVpei9xNC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo1IGZyb20gJy4vcXVpei9xNS5zdmVsdGUnXG4gaW1wb3J0IFF1aXo2IGZyb20gJy4vcXVpei9xNi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo3IGZyb20gJy4vcXVpei9xNy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo4IGZyb20gJy4vcXVpei9xOC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo5IGZyb20gJy4vcXVpei9xOS5zdmVsdGUnXG4gaW1wb3J0IENoZWNrcG9pbnQxIGZyb20gJy4vcXVpei9jaGVjazEuc3ZlbHRlJ1xuIGltcG9ydCBDaGVja3BvaW50MiBmcm9tICcuL3F1aXovY2hlY2syLnN2ZWx0ZSdcbiBpbXBvcnQgQ2hlY2twb2ludDMgZnJvbSAnLi9xdWl6L2NoZWNrMy5zdmVsdGUnXG4gaW1wb3J0IENvbXBsZXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Db21wbGV0aW9uLnN2ZWx0ZSdcbiBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuaW1wb3J0IHsgc2xpZGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5pbXBvcnQgeyBxdWludE91dCwgcXVpbnRJbiB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXG5pbXBvcnQgeyBjb3VudCB9IGZyb20gJy4uL3N0b3JlLmpzJ1xubGV0IHF1aXpTdGVwcyA9ICRxdWl6U3RlcHM7XG4gLypjb25zdCBxdWl6U3RlcHMgPSAgW1xuICAgICAgICB7IGlkOicxJywgY29tcG9uZW50OiBRdWl6MSwgbmFtZTogJ1dlYmNhbSBDaGFsbGVuZ2UnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICcyJywgY29tcG9uZW50OiBRdWl6MiwgbmFtZTogJ0hUVFBTIEV2ZXJ5d2hlcmUnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICczJywgY29tcG9uZW50OiBDaGVja3BvaW50MSwgbmFtZTogJ1NlY3VyaXR5IHZzIFByaXZhY3knLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICc0JywgY29tcG9uZW50OiBRdWl6MywgbmFtZTogJ1NlYXJjaCBFbmdpbmUnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICc1JywgY29tcG9uZW50OiBRdWl6NCwgbmFtZTogJ1ByaXZhY3kgU2V0dGluZ3MnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICc2JywgY29tcG9uZW50OiBRdWl6NSwgbmFtZTogJ1RyYWNrZXIgYmxvY2tlcicsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzcnLCBjb21wb25lbnQ6IFF1aXo2LCBuYW1lOiAnRE5TJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnOCcsIGNvbXBvbmVudDogQ2hlY2twb2ludDIsIG5hbWU6ICdTdXJ2ZWlsbGFuY2UgQ2FwaXRhbGlzbScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzknLCBjb21wb25lbnQ6IFF1aXo3LCBuYW1lOiAnTG9jYXRpb24gVHJhY2tpbmcnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICcxMCcsIGNvbXBvbmVudDogUXVpejgsIG5hbWU6ICdpT1QnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICcxMScsIGNvbXBvbmVudDogQ2hlY2twb2ludDMsIG5hbWU6ICdIb3cgdG8gTWFrZSBjaGFuZ2UnLCBjb21wbGV0ZTpmYWxzZX0sXG5dKi9cbi8vJDogcXVpek51bSA9IDA7XG4vL2xldCBxdWl6TnVtID0gMjtcbiQ6cXVpek51bSA9ICRjb3VudDtcbmZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vcXVpek51bSsrO1xuICAgICAgICAgICAgICAvL3F1aXpTdGVwc1tPYmplY3QudmFsdWVzKGV2ZW50LmRldGFpbFswXSldLmNvbXBsZXRlID0gb2JqZWN0LnZhbHVlcyhldmVudC5kZXRhaWxbMV0pXG4gICAgICAgICAgICAgIGxldCBzdGF0dXMgPSBPYmplY3QudmFsdWVzKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IHN0YXR1c1swXTtcbiAgICAgICAgICAgICAgcXVpelN0ZXBzW2xvY2F0aW9uXS5jb21wbGV0ZSA9IHN0YXR1c1sxXTtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhxdWl6U3RlcHNbbG9jYXRpb25dKTtcblx0fVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5UZXN0IHlvdXIga25vd2xlZGdlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48bWFpbiB0cmFuc2l0aW9uOnNsaWRlPVwie3tkZWxheTogMTAwLCBkdXJhdGlvbjogNDAwLCBlYXNpbmc6IHF1aW50T3V0fX1cIj5cbiAgICAgICA8Q29tcGxldGlvbiBjbGFzcz0nc3RlcCc+XG4gICAgICAgICAgICAgIENoYXB0ZXIge3F1aXpTdGVwc1txdWl6TnVtXS5pZCArICc6ICcrIHF1aXpTdGVwc1txdWl6TnVtXS5uYW1lfVxuICAgICAgIDwvQ29tcGxldGlvbj5cbiAgICAgICA8c2VjdGlvbiBpZD1cIm1haW4tY29udGVudFwiPlxuICAgICAgICA8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXtxdWl6U3RlcHNbcXVpek51bV0uY29tcG9uZW50fSBvbjptZXNzYWdlPXtoYW5kbGVNZXNzYWdlfSAvPlxuICAgICAgIDwhLS08UXVpejIgb246bWVzc2FnZT17aGFuZGxlTWVzc2FnZX0vPiAtLT5cbjwhLS08c2VsZWN0IGJpbmQ6dmFsdWU9e3NlbGVjdGVkfT5cbiAgICAgICAgeyNlYWNoIHF1aXpTdGVwcyBhcyBxfVxuXHRcdDxvcHRpb24gdmFsdWU9e3F9PlF1ZXN0aW9uIHtxLmlkfTwvb3B0aW9uPlxuXHR7L2VhY2h9XG48L3NlbGVjdD4tLT5cbjwhLS08YnV0dG9uIG9uOmNsaWNrPXtoYW5kbGVDbGlja30+Q2xpY2sgbWU8L2J1dHRvbj4tLT5cbjwhLS08UHJvZ3Jlc3MgcGFzdD17cGFzdC5uYW1lfSBjdXJyZW50PXtzZWxlY3RlZC5uYW1lfSBuZXh0PXtuZXh0Lm5hbWV9Lz4tLT5cbiAgICAgICA8L3NlY3Rpb24+XG48L21haW4+XG48c3R5bGU+XG4gICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuXG4gICAgICAgfVxuICAgICAgIC5zdGVwe1xuXHRcdG1hcmdpbi1ib3R0b206IDU1cHg7XG4gICAgICAgfVxuICAgICAgICNtYWluLWNvbnRlbnR7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzODQyNEQ7XG4gICAgICAgICAgICAgIC8qaGVpZ2h0OiA4NnZoOyAqL1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDIycHggNDBweCAyMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA5LjN2aCA1dncgMHZoIDkuM3ZoO1xuICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgICAgLyptYXJnaW4tdG9wOiAtNTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIxdnc7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDsqL1xuICAgICAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBbUR1QixHQUFTLGdCQUFDLEdBQU8sS0FBRSxFQUFFLEdBQUcsSUFBSSxpQkFBRSxHQUFTLGdCQUFDLEdBQU8sS0FBRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztrRkFBckQsR0FBUyxnQkFBQyxHQUFPLEtBQUUsRUFBRSxHQUFHLElBQUksaUJBQUUsR0FBUyxnQkFBQyxHQUFPLEtBQUUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzVDLEdBQVMsZ0JBQUMsR0FBTyxLQUFFLFNBQVM7Ozs7Ozs7O21EQUFjLEdBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBQXZELEdBQVMsZ0JBQUMsR0FBTyxLQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7O3NEQUFjLEdBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFMN0QsS0FBSyxFQUFFLEdBQUc7TUFBRSxRQUFRLEVBQUUsR0FBRztNQUFFLE1BQU0sRUFBRSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FBM0MsS0FBSyxFQUFFLEdBQUc7S0FBRSxRQUFRLEVBQUUsR0FBRztLQUFFLE1BQU0sRUFBRSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E5QmpFLFNBQVMsR0FBRyxVQUFVOzs7O1VBaUJqQixhQUFhLENBQUMsS0FBSzs7O01BSVYsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU07O01BQ25DLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQztrQkFDdkIsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFQbkQsT0FBTyxHQUFHLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
