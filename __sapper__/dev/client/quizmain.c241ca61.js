import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, v as validate_slots, r as createEventDispatcher, a as space, e as element, u as create_component, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, w as claim_component, j as attr_dev, k as add_location, l as insert_dev, x as mount_component, m as append_dev, y as transition_out, z as check_outros, A as transition_in, B as add_render_callback, C as create_bidirectional_transition, D as destroy_component, t as text, h as claim_text, E as set_data_dev, F as group_outros } from './client.935ad035.js';
import { s as slide, q as quintOut, a as quintIn } from './index.42fd54b0.js';
import './Back.c55a7f4d.js';
import { c as count } from './store.840c92de.js';
import './Btn.8828f8a4.js';
import Q1 from './q1.b50dccf9.js';
import Q2 from './q2.3087b641.js';
import Q3 from './q3.97db37dd.js';
import './Detect.b335e61a.js';
import Q4 from './q4.cbaee832.js';
import Q5 from './q5.8b372d85.js';
import Q6 from './q6.a1fae533.js';
import Q7 from './q7.779eece2.js';
import Q8 from './q8.e87cd096.js';
import Q9 from './q9.c35972e8.js';
import Check1 from './check1.c90f97ee.js';
import Check2 from './check2.0d316200.js';
import Check3 from './check3.39dd63b9.js';
import { C as Completion } from './Completion.a34067bc.js';

/* src/routes/quizmain.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quizmain.svelte";

// (49:7) <Completion class='step'>
function create_default_slot(ctx) {
	let t0;
	let t1_value = /*quizSteps*/ ctx[1][/*quizNum*/ ctx[0]].id + ": " + /*quizSteps*/ ctx[1][/*quizNum*/ ctx[0]].name + "";
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
			if (dirty & /*quizNum*/ 1 && t1_value !== (t1_value = /*quizSteps*/ ctx[1][/*quizNum*/ ctx[0]].id + ": " + /*quizSteps*/ ctx[1][/*quizNum*/ ctx[0]].name + "")) set_data_dev(t1, t1_value);
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
		source: "(49:7) <Completion class='step'>",
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

	var switch_value = /*quizSteps*/ ctx[1][/*quizNum*/ ctx[0]].component;

	function switch_props(ctx) {
		return { $$inline: true };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props());
		switch_instance.$on("message", handleMessage);
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
			add_location(section, file, 51, 7, 2333);
			attr_dev(main, "class", "svelte-a9u78n");
			add_location(main, file, 47, 0, 2120);
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

			if (dirty & /*$$scope, quizNum*/ 9) {
				completion_changes.$$scope = { dirty, ctx };
			}

			completion.$set(completion_changes);

			if (switch_value !== (switch_value = /*quizSteps*/ ctx[1][/*quizNum*/ ctx[0]].component)) {
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
					switch_instance.$on("message", handleMessage);
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

function handleMessage(event) {
	
} //quizNum++;
//quizSteps[Object.values(event.detail[0])].complete = object.values(event.detail[1])

function instance($$self, $$props, $$invalidate) {
	let $count;
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(2, $count = $$value));

	const quizSteps = [
		{
			id: "1",
			component: Q1,
			name: "Webcam Challenge",
			complete: false
		},
		{
			id: "2",
			component: Q2,
			name: "HTTPS Everywhere",
			complete: false
		},
		{
			id: "3",
			component: Check1,
			name: "Security vs Privacy",
			complete: false
		},
		{
			id: "4",
			component: Q3,
			name: "Search Engine",
			complete: false
		},
		{
			id: "5",
			component: Q4,
			name: "Privacy Settings",
			complete: false
		},
		{
			id: "6",
			component: Q5,
			name: "Tracker blocker",
			complete: false
		},
		{
			id: "7",
			component: Q6,
			name: "DNS",
			complete: false
		},
		{
			id: "8",
			component: Check2,
			name: "Surveillance Capitalism",
			complete: false
		},
		{
			id: "9",
			component: Q7,
			name: "Location Tracking",
			complete: false
		},
		{
			id: "10",
			component: Q8,
			name: "iOT",
			complete: false
		},
		{
			id: "11",
			component: Check3,
			name: "How to Make change",
			complete: false
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
		slide,
		quintOut,
		quintIn,
		count,
		quizSteps,
		handleMessage,
		quizNum,
		$count
	});

	$$self.$inject_state = $$props => {
		if ("quizNum" in $$props) $$invalidate(0, quizNum = $$props.quizNum);
	};

	let quizNum;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$count*/ 4) {
			 $$invalidate(0, quizNum = $count);
		}
	};

	return [quizNum, quizSteps];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpem1haW4uYzI0MWNhNjEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpem1haW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gaW1wb3J0IFF1aXoxIGZyb20gJy4vcXVpei9xMS5zdmVsdGUnXG4gaW1wb3J0IFF1aXoyIGZyb20gJy4vcXVpei9xMi5zdmVsdGUnXG4gaW1wb3J0IFF1aXozIGZyb20gJy4vcXVpei9xMy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo0IGZyb20gJy4vcXVpei9xNC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo1IGZyb20gJy4vcXVpei9xNS5zdmVsdGUnXG4gaW1wb3J0IFF1aXo2IGZyb20gJy4vcXVpei9xNi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo3IGZyb20gJy4vcXVpei9xNy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo4IGZyb20gJy4vcXVpei9xOC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo5IGZyb20gJy4vcXVpei9xOS5zdmVsdGUnXG4gaW1wb3J0IENoZWNrcG9pbnQxIGZyb20gJy4vcXVpei9jaGVjazEuc3ZlbHRlJ1xuIGltcG9ydCBDaGVja3BvaW50MiBmcm9tICcuL3F1aXovY2hlY2syLnN2ZWx0ZSdcbiBpbXBvcnQgQ2hlY2twb2ludDMgZnJvbSAnLi9xdWl6L2NoZWNrMy5zdmVsdGUnXG4gaW1wb3J0IENvbXBsZXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Db21wbGV0aW9uLnN2ZWx0ZSdcbiBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuaW1wb3J0IHsgc2xpZGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5pbXBvcnQgeyBxdWludE91dCwgcXVpbnRJbiB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuaW1wb3J0IHsgY291bnQgfSBmcm9tICcuLi9zdG9yZS5qcydcblxuIGNvbnN0IHF1aXpTdGVwcyA9ICBbXG4gICAgICAgIHsgaWQ6JzEnLCBjb21wb25lbnQ6IFF1aXoxLCBuYW1lOiAnV2ViY2FtIENoYWxsZW5nZScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzInLCBjb21wb25lbnQ6IFF1aXoyLCBuYW1lOiAnSFRUUFMgRXZlcnl3aGVyZScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzMnLCBjb21wb25lbnQ6IENoZWNrcG9pbnQxLCBuYW1lOiAnU2VjdXJpdHkgdnMgUHJpdmFjeScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzQnLCBjb21wb25lbnQ6IFF1aXozLCBuYW1lOiAnU2VhcmNoIEVuZ2luZScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzUnLCBjb21wb25lbnQ6IFF1aXo0LCBuYW1lOiAnUHJpdmFjeSBTZXR0aW5ncycsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzYnLCBjb21wb25lbnQ6IFF1aXo1LCBuYW1lOiAnVHJhY2tlciBibG9ja2VyJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnNycsIGNvbXBvbmVudDogUXVpejYsIG5hbWU6ICdETlMnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICc4JywgY29tcG9uZW50OiBDaGVja3BvaW50MiwgbmFtZTogJ1N1cnZlaWxsYW5jZSBDYXBpdGFsaXNtJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnOScsIGNvbXBvbmVudDogUXVpejcsIG5hbWU6ICdMb2NhdGlvbiBUcmFja2luZycsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzEwJywgY29tcG9uZW50OiBRdWl6OCwgbmFtZTogJ2lPVCcsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzExJywgY29tcG9uZW50OiBDaGVja3BvaW50MywgbmFtZTogJ0hvdyB0byBNYWtlIGNoYW5nZScsIGNvbXBsZXRlOmZhbHNlfSxcbl1cblxuJDpxdWl6TnVtID0gJGNvdW50O1xuZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy9xdWl6TnVtKys7XG4gICAgICAgICAgICAgIC8vcXVpelN0ZXBzW09iamVjdC52YWx1ZXMoZXZlbnQuZGV0YWlsWzBdKV0uY29tcGxldGUgPSBvYmplY3QudmFsdWVzKGV2ZW50LmRldGFpbFsxXSlcbiAgICAgICAgICAgICAgLy9sZXQgc3RhdHVzID0gT2JqZWN0LnZhbHVlcyhldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAvL2xldCBsb2NhdGlvbiA9IHN0YXR1c1swXTtcbiAgICAgICAgICAgICAgLy9xdWl6U3RlcHNbbG9jYXRpb25dLmNvbXBsZXRlID0gc3RhdHVzWzFdO1xuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHF1aXpTdGVwc1tsb2NhdGlvbl0pO1xuXHR9XG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlRlc3QgeW91ciBrbm93bGVkZ2U8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxtYWluIHRyYW5zaXRpb246c2xpZGU9XCJ7e2RlbGF5OiAxMDAsIGR1cmF0aW9uOiA0MDAsIGVhc2luZzogcXVpbnRPdXR9fVwiPlxuICAgICAgIDxDb21wbGV0aW9uIGNsYXNzPSdzdGVwJz5cbiAgICAgICAgICAgICAgQ2hhcHRlciB7cXVpelN0ZXBzW3F1aXpOdW1dLmlkICsgJzogJysgcXVpelN0ZXBzW3F1aXpOdW1dLm5hbWV9XG4gICAgICAgPC9Db21wbGV0aW9uPlxuICAgICAgIDxzZWN0aW9uIGlkPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgIDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9e3F1aXpTdGVwc1txdWl6TnVtXS5jb21wb25lbnR9IG9uOm1lc3NhZ2U9e2hhbmRsZU1lc3NhZ2V9IC8+XG4gICAgICAgPCEtLTxRdWl6MiBvbjptZXNzYWdlPXtoYW5kbGVNZXNzYWdlfS8+IC0tPlxuPCEtLTxzZWxlY3QgYmluZDp2YWx1ZT17c2VsZWN0ZWR9PlxuICAgICAgICB7I2VhY2ggcXVpelN0ZXBzIGFzIHF9XG5cdFx0PG9wdGlvbiB2YWx1ZT17cX0+UXVlc3Rpb24ge3EuaWR9PC9vcHRpb24+XG5cdHsvZWFjaH1cbjwvc2VsZWN0Pi0tPlxuPCEtLTxidXR0b24gb246Y2xpY2s9e2hhbmRsZUNsaWNrfT5DbGljayBtZTwvYnV0dG9uPi0tPlxuPCEtLTxQcm9ncmVzcyBwYXN0PXtwYXN0Lm5hbWV9IGN1cnJlbnQ9e3NlbGVjdGVkLm5hbWV9IG5leHQ9e25leHQubmFtZX0vPi0tPlxuICAgICAgIDwvc2VjdGlvbj5cbjwvbWFpbj5cbjxzdHlsZT5cbiAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG5cbiAgICAgICB9XG4gICAgICAgLnN0ZXB7XG5cdFx0bWFyZ2luLWJvdHRvbTogNTVweDtcbiAgICAgICB9XG4gICAgICAgI21haW4tY29udGVudHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzM4NDI0RDtcbiAgICAgICAgICAgICAgLypoZWlnaHQ6IDg2dmg7ICovXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDEycHggMjJweCA0MHB4IDIwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDkuM3ZoIDV2dyAwdmggOS4zdmg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICAvKm1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjF2dztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4OyovXG4gICAgICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOlsiUXVpejEiLCJRdWl6MiIsIkNoZWNrcG9pbnQxIiwiUXVpejMiLCJRdWl6NCIsIlF1aXo1IiwiUXVpejYiLCJDaGVja3BvaW50MiIsIlF1aXo3IiwiUXVpejgiLCJDaGVja3BvaW50MyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBaUR1QixHQUFTLGdCQUFDLEdBQU8sS0FBRSxFQUFFLEdBQUcsSUFBSSxpQkFBRSxHQUFTLGdCQUFDLEdBQU8sS0FBRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozt1RUFBckQsR0FBUyxnQkFBQyxHQUFPLEtBQUUsRUFBRSxHQUFHLElBQUksaUJBQUUsR0FBUyxnQkFBQyxHQUFPLEtBQUUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzVDLEdBQVMsZ0JBQUMsR0FBTyxLQUFFLFNBQVM7Ozs7Ozs7O2lDQUFjLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBQXZELEdBQVMsZ0JBQUMsR0FBTyxLQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7O29DQUFjLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFMN0QsS0FBSyxFQUFFLEdBQUc7TUFBRSxRQUFRLEVBQUUsR0FBRztNQUFFLE1BQU0sRUFBRSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FBM0MsS0FBSyxFQUFFLEdBQUc7S0FBRSxRQUFRLEVBQUUsR0FBRztLQUFFLE1BQU0sRUFBRSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBYjVELGFBQWEsQ0FBQyxLQUFLOzs7Ozs7Ozs7O09BZnJCLFNBQVM7O0dBQ04sRUFBRSxFQUFDLEdBQUc7R0FBRSxTQUFTLEVBQUVBLEVBQUs7R0FBRSxJQUFJLEVBQUUsa0JBQWtCO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNsRSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxrQkFBa0I7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ25FLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxNQUFXO0dBQUUsSUFBSSxFQUFFLHFCQUFxQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDNUUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsZUFBZTtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDaEUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsa0JBQWtCO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNuRSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxpQkFBaUI7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ2xFLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLEtBQUs7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ3RELEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxNQUFXO0dBQUUsSUFBSSxFQUFFLHlCQUF5QjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDaEYsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsbUJBQW1CO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNwRSxFQUFFLEVBQUUsSUFBSTtHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxLQUFLO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUN2RCxFQUFFLEVBQUUsSUFBSTtHQUFFLFNBQVMsRUFBRUMsTUFBVztHQUFFLElBQUksRUFBRSxvQkFBb0I7R0FBRSxRQUFRLEVBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBR3BGLE9BQU8sR0FBRyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
