import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, v as validate_slots, r as createEventDispatcher, u as globals, a as space, e as element, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, x as claim_component, j as attr_dev, k as add_location, l as insert_dev, y as mount_component, m as append_dev, z as transition_out, A as check_outros, B as transition_in, C as add_render_callback, D as create_bidirectional_transition, E as destroy_component, t as text, h as claim_text, F as set_data_dev, G as group_outros } from './client.a979f3f9.js';
import { s as slide, q as quintOut, a as quintIn } from './index.42fd54b0.js';
import './complete.1ae9e41b.js';
import { c as count } from './store.72fe8897.js';
import './Next.f56f7974.js';
import Q1 from './q1.c7da3742.js';
import Q2 from './q2.2feafcf3.js';
import Q3 from './q3.a8463c3f.js';
import './Detect.053b8d7d.js';
import Q4 from './q4.1dc72190.js';
import Q5 from './q5.890c41e1.js';
import Q6 from './q6.d34b7778.js';
import Q7 from './q7.2a60c79d.js';
import Q8 from './q8.8b1ec7d6.js';
import Q9 from './q9.515a3b7e.js';
import Check1 from './check1.095bb0f3.js';
import Check2 from './check2.6d4c5685.js';
import Check3 from './check3.d9b9362f.js';
import { C as Completion } from './Completion.9412dbd0.js';
import { B as Back } from './Back.9097bc26.js';

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
	let t2;
	let back;
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

	back = new Back({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			main = element("main");
			create_component(completion.$$.fragment);
			t1 = space();
			section = element("section");
			if (switch_instance) create_component(switch_instance.$$.fragment);
			t2 = space();
			create_component(back.$$.fragment);
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
			t2 = claim_space(section_nodes);
			claim_component(back.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Test your knowledge";
			attr_dev(section, "id", "main-content");
			attr_dev(section, "class", "svelte-a9u78n");
			add_location(section, file, 53, 7, 2373);
			attr_dev(main, "class", "svelte-a9u78n");
			add_location(main, file, 49, 0, 2160);
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

			append_dev(section, t2);
			mount_component(back, section, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const completion_changes = {};

			if (dirty & /*$$scope, quizSteps, quizNum*/ 19) {
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
					mount_component(switch_instance, section, t2);
				} else {
					switch_instance = null;
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(completion.$$.fragment, local);
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			transition_in(back.$$.fragment, local);

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
			transition_out(back.$$.fragment, local);

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
			destroy_component(back);
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
	component_subscribe($$self, count, $$value => $$invalidate(3, $count = $$value));

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
		Back,
		count,
		quizSteps,
		handleMessage,
		quizNum,
		$count
	});

	$$self.$inject_state = $$props => {
		if ("quizNum" in $$props) $$invalidate(1, quizNum = $$props.quizNum);
	};

	let quizNum;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$count*/ 8) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpem1haW4uNWFkZTc1ZjMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpem1haW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gaW1wb3J0IFF1aXoxIGZyb20gJy4vcXVpei9xMS5zdmVsdGUnXG4gaW1wb3J0IFF1aXoyIGZyb20gJy4vcXVpei9xMi5zdmVsdGUnXG4gaW1wb3J0IFF1aXozIGZyb20gJy4vcXVpei9xMy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo0IGZyb20gJy4vcXVpei9xNC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo1IGZyb20gJy4vcXVpei9xNS5zdmVsdGUnXG4gaW1wb3J0IFF1aXo2IGZyb20gJy4vcXVpei9xNi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo3IGZyb20gJy4vcXVpei9xNy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo4IGZyb20gJy4vcXVpei9xOC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo5IGZyb20gJy4vcXVpei9xOS5zdmVsdGUnXG4gaW1wb3J0IENoZWNrcG9pbnQxIGZyb20gJy4vcXVpei9jaGVjazEuc3ZlbHRlJ1xuIGltcG9ydCBDaGVja3BvaW50MiBmcm9tICcuL3F1aXovY2hlY2syLnN2ZWx0ZSdcbiBpbXBvcnQgQ2hlY2twb2ludDMgZnJvbSAnLi9xdWl6L2NoZWNrMy5zdmVsdGUnXG4gaW1wb3J0IENvbXBsZXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Db21wbGV0aW9uLnN2ZWx0ZSdcbiBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuaW1wb3J0IHsgc2xpZGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5pbXBvcnQgeyBxdWludE91dCwgcXVpbnRJbiB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuaW1wb3J0IEJhY2sgZnJvbSAnLi4vY29tcG9uZW50cy9CYWNrLnN2ZWx0ZSdcblxuaW1wb3J0IHsgY291bnQgfSBmcm9tICcuLi9zdG9yZS5qcydcblxuIGNvbnN0IHF1aXpTdGVwcyA9ICBbXG4gICAgICAgIHsgaWQ6JzEnLCBjb21wb25lbnQ6IFF1aXoxLCBuYW1lOiAnV2ViY2FtIENoYWxsZW5nZScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzInLCBjb21wb25lbnQ6IFF1aXoyLCBuYW1lOiAnSFRUUFMgRXZlcnl3aGVyZScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzMnLCBjb21wb25lbnQ6IENoZWNrcG9pbnQxLCBuYW1lOiAnU2VjdXJpdHkgdnMgUHJpdmFjeScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzQnLCBjb21wb25lbnQ6IFF1aXozLCBuYW1lOiAnU2VhcmNoIEVuZ2luZScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzUnLCBjb21wb25lbnQ6IFF1aXo0LCBuYW1lOiAnUHJpdmFjeSBTZXR0aW5ncycsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzYnLCBjb21wb25lbnQ6IFF1aXo1LCBuYW1lOiAnVHJhY2tlciBibG9ja2VyJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnNycsIGNvbXBvbmVudDogUXVpejYsIG5hbWU6ICdETlMnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICc4JywgY29tcG9uZW50OiBDaGVja3BvaW50MiwgbmFtZTogJ1N1cnZlaWxsYW5jZSBDYXBpdGFsaXNtJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnOScsIGNvbXBvbmVudDogUXVpejcsIG5hbWU6ICdMb2NhdGlvbiBUcmFja2luZycsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzEwJywgY29tcG9uZW50OiBRdWl6OCwgbmFtZTogJ2lPVCcsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzExJywgY29tcG9uZW50OiBDaGVja3BvaW50MywgbmFtZTogJ0hvdyB0byBNYWtlIGNoYW5nZScsIGNvbXBsZXRlOmZhbHNlfSxcbl1cblxuJDpxdWl6TnVtID0gJGNvdW50O1xuZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy9xdWl6TnVtKys7XG4gICAgICAgICAgICAgIC8vcXVpelN0ZXBzW09iamVjdC52YWx1ZXMoZXZlbnQuZGV0YWlsWzBdKV0uY29tcGxldGUgPSBvYmplY3QudmFsdWVzKGV2ZW50LmRldGFpbFsxXSlcbiAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IE9iamVjdC52YWx1ZXMoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gc3RhdHVzWzBdO1xuICAgICAgICAgICAgICBxdWl6U3RlcHNbbG9jYXRpb25dLmNvbXBsZXRlID0gc3RhdHVzWzFdO1xuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHF1aXpTdGVwc1tsb2NhdGlvbl0pO1xuXHR9XG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlRlc3QgeW91ciBrbm93bGVkZ2U8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxtYWluIHRyYW5zaXRpb246c2xpZGU9XCJ7e2RlbGF5OiAxMDAsIGR1cmF0aW9uOiA0MDAsIGVhc2luZzogcXVpbnRPdXR9fVwiPlxuICAgICAgIDxDb21wbGV0aW9uIGNsYXNzPSdzdGVwJz5cbiAgICAgICAgICAgICAgQ2hhcHRlciB7cXVpelN0ZXBzW3F1aXpOdW1dLmlkICsgJzogJysgcXVpelN0ZXBzW3F1aXpOdW1dLm5hbWV9XG4gICAgICAgPC9Db21wbGV0aW9uPlxuICAgICAgIDxzZWN0aW9uIGlkPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgIDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9e3F1aXpTdGVwc1txdWl6TnVtXS5jb21wb25lbnR9IG9uOm1lc3NhZ2U9e2hhbmRsZU1lc3NhZ2V9IC8+XG4gICAgICAgIDxCYWNrPjwvQmFjaz5cbiAgICAgICA8IS0tPFF1aXoyIG9uOm1lc3NhZ2U9e2hhbmRsZU1lc3NhZ2V9Lz4gLS0+XG48IS0tPHNlbGVjdCBiaW5kOnZhbHVlPXtzZWxlY3RlZH0+XG4gICAgICAgIHsjZWFjaCBxdWl6U3RlcHMgYXMgcX1cblx0XHQ8b3B0aW9uIHZhbHVlPXtxfT5RdWVzdGlvbiB7cS5pZH08L29wdGlvbj5cblx0ey9lYWNofVxuPC9zZWxlY3Q+LS0+XG48IS0tPGJ1dHRvbiBvbjpjbGljaz17aGFuZGxlQ2xpY2t9PkNsaWNrIG1lPC9idXR0b24+LS0+XG48IS0tPFByb2dyZXNzIHBhc3Q9e3Bhc3QubmFtZX0gY3VycmVudD17c2VsZWN0ZWQubmFtZX0gbmV4dD17bmV4dC5uYW1lfS8+LS0+XG4gICAgICAgPC9zZWN0aW9uPlxuPC9tYWluPlxuPHN0eWxlPlxuICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcblxuICAgICAgIH1cbiAgICAgICAuc3RlcHtcblx0XHRtYXJnaW4tYm90dG9tOiA1NXB4O1xuICAgICAgIH1cbiAgICAgICAjbWFpbi1jb250ZW50e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzg0MjREO1xuICAgICAgICAgICAgICAvKmhlaWdodDogODZ2aDsgKi9cbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTJweCAyMnB4IDQwcHggMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogOS4zdmggNXZ3IDB2aCA5LjN2aDtcbiAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAgIC8qbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMXZ3O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7Ki9cbiAgICAgICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6WyJRdWl6MSIsIlF1aXoyIiwiQ2hlY2twb2ludDEiLCJRdWl6MyIsIlF1aXo0IiwiUXVpejUiLCJRdWl6NiIsIkNoZWNrcG9pbnQyIiwiUXVpejciLCJRdWl6OCIsIkNoZWNrcG9pbnQzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFtRHVCLEdBQVMsZ0JBQUMsR0FBTyxLQUFFLEVBQUUsR0FBRyxJQUFJLGlCQUFFLEdBQVMsZ0JBQUMsR0FBTyxLQUFFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O2tGQUFyRCxHQUFTLGdCQUFDLEdBQU8sS0FBRSxFQUFFLEdBQUcsSUFBSSxpQkFBRSxHQUFTLGdCQUFDLEdBQU8sS0FBRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUc1QyxHQUFTLGdCQUFDLEdBQU8sS0FBRSxTQUFTOzs7Ozs7OzttREFBYyxHQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBQXZELEdBQVMsZ0JBQUMsR0FBTyxLQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7O3NEQUFjLEdBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BTDdELEtBQUssRUFBRSxHQUFHO01BQUUsUUFBUSxFQUFFLEdBQUc7TUFBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUEzQyxLQUFLLEVBQUUsR0FBRztLQUFFLFFBQVEsRUFBRSxHQUFHO0tBQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E1QjlELFNBQVM7O0dBQ04sRUFBRSxFQUFDLEdBQUc7R0FBRSxTQUFTLEVBQUVBLEVBQUs7R0FBRSxJQUFJLEVBQUUsa0JBQWtCO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNsRSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxrQkFBa0I7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ25FLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxNQUFXO0dBQUUsSUFBSSxFQUFFLHFCQUFxQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDNUUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsZUFBZTtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDaEUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsa0JBQWtCO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNuRSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxpQkFBaUI7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ2xFLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLEtBQUs7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ3RELEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxNQUFXO0dBQUUsSUFBSSxFQUFFLHlCQUF5QjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDaEYsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsbUJBQW1CO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNwRSxFQUFFLEVBQUUsSUFBSTtHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxLQUFLO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUN2RCxFQUFFLEVBQUUsSUFBSTtHQUFFLFNBQVMsRUFBRUMsTUFBVztHQUFFLElBQUksRUFBRSxvQkFBb0I7R0FBRSxRQUFRLEVBQUMsS0FBSzs7OztVQUk3RSxhQUFhLENBQUMsS0FBSzs7O01BSVYsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU07O01BQ25DLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQztrQkFDdkIsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQVBuRCxPQUFPLEdBQUcsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
