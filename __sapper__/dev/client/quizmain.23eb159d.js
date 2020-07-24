import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, v as validate_slots, r as createEventDispatcher, u as globals, a as space, e as element, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, x as claim_component, j as attr_dev, k as add_location, l as insert_dev, y as mount_component, m as append_dev, z as transition_out, A as check_outros, B as transition_in, C as add_render_callback, D as create_bidirectional_transition, E as destroy_component, t as text, h as claim_text, F as set_data_dev, G as group_outros } from './client.19fed521.js';
import { s as slide, q as quintOut, a as quintIn } from './index.42fd54b0.js';
import './complete.341ed69f.js';
import { c as count } from './store.5fcada15.js';
import './Next.9b8298fc.js';
import './Back.3a030022.js';
import Q1 from './q1.fc690d2c.js';
import Q2 from './q2.409d89ac.js';
import Q3 from './q3.f0a0b0c2.js';
import './Detect.6b73ede7.js';
import Q4 from './q4.8325c80e.js';
import Q5 from './q5.1d5e9b95.js';
import Q6 from './q6.9b4aa7e7.js';
import Q7 from './q7.bb537932.js';
import Q8 from './q8.0b087e1f.js';
import Q9 from './q9.aee7e906.js';
import Check1 from './check1.53e79a90.js';
import Check2 from './check2.6be3b255.js';
import Check3 from './check3.7b81303f.js';
import { C as Completion } from './Completion.cd354f2d.js';

/* src/routes/quizmain.svelte generated by Svelte v3.23.2 */

const { Object: Object_1 } = globals;
const file = "src/routes/quizmain.svelte";

// (50:7) <Completion class='step'>
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
		source: "(50:7) <Completion class='step'>",
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
			add_location(section, file, 52, 7, 2328);
			attr_dev(main, "class", "svelte-a9u78n");
			add_location(main, file, 48, 0, 2115);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpem1haW4uMjNlYjE1OWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpem1haW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gaW1wb3J0IFF1aXoxIGZyb20gJy4vcXVpei9xMS5zdmVsdGUnXG4gaW1wb3J0IFF1aXoyIGZyb20gJy4vcXVpei9xMi5zdmVsdGUnXG4gaW1wb3J0IFF1aXozIGZyb20gJy4vcXVpei9xMy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo0IGZyb20gJy4vcXVpei9xNC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo1IGZyb20gJy4vcXVpei9xNS5zdmVsdGUnXG4gaW1wb3J0IFF1aXo2IGZyb20gJy4vcXVpei9xNi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo3IGZyb20gJy4vcXVpei9xNy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo4IGZyb20gJy4vcXVpei9xOC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo5IGZyb20gJy4vcXVpei9xOS5zdmVsdGUnXG4gaW1wb3J0IENoZWNrcG9pbnQxIGZyb20gJy4vcXVpei9jaGVjazEuc3ZlbHRlJ1xuIGltcG9ydCBDaGVja3BvaW50MiBmcm9tICcuL3F1aXovY2hlY2syLnN2ZWx0ZSdcbiBpbXBvcnQgQ2hlY2twb2ludDMgZnJvbSAnLi9xdWl6L2NoZWNrMy5zdmVsdGUnXG4gaW1wb3J0IENvbXBsZXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Db21wbGV0aW9uLnN2ZWx0ZSdcbiBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuaW1wb3J0IHsgc2xpZGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5pbXBvcnQgeyBxdWludE91dCwgcXVpbnRJbiB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXG5pbXBvcnQgeyBjb3VudCB9IGZyb20gJy4uL3N0b3JlLmpzJ1xuXG4gY29uc3QgcXVpelN0ZXBzID0gIFtcbiAgICAgICAgeyBpZDonMScsIGNvbXBvbmVudDogUXVpejEsIG5hbWU6ICdXZWJjYW0gQ2hhbGxlbmdlJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnMicsIGNvbXBvbmVudDogUXVpejIsIG5hbWU6ICdIVFRQUyBFdmVyeXdoZXJlJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnMycsIGNvbXBvbmVudDogQ2hlY2twb2ludDEsIG5hbWU6ICdTZWN1cml0eSB2cyBQcml2YWN5JywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnNCcsIGNvbXBvbmVudDogUXVpejMsIG5hbWU6ICdTZWFyY2ggRW5naW5lJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnNScsIGNvbXBvbmVudDogUXVpejQsIG5hbWU6ICdQcml2YWN5IFNldHRpbmdzJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnNicsIGNvbXBvbmVudDogUXVpejUsIG5hbWU6ICdUcmFja2VyIGJsb2NrZXInLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICc3JywgY29tcG9uZW50OiBRdWl6NiwgbmFtZTogJ0ROUycsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzgnLCBjb21wb25lbnQ6IENoZWNrcG9pbnQyLCBuYW1lOiAnU3VydmVpbGxhbmNlIENhcGl0YWxpc20nLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICc5JywgY29tcG9uZW50OiBRdWl6NywgbmFtZTogJ0xvY2F0aW9uIFRyYWNraW5nJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnMTAnLCBjb21wb25lbnQ6IFF1aXo4LCBuYW1lOiAnaU9UJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnMTEnLCBjb21wb25lbnQ6IENoZWNrcG9pbnQzLCBuYW1lOiAnSG93IHRvIE1ha2UgY2hhbmdlJywgY29tcGxldGU6ZmFsc2V9LFxuXVxuXG4kOnF1aXpOdW0gPSAkY291bnQ7XG5mdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvL3F1aXpOdW0rKztcbiAgICAgICAgICAgICAgLy9xdWl6U3RlcHNbT2JqZWN0LnZhbHVlcyhldmVudC5kZXRhaWxbMF0pXS5jb21wbGV0ZSA9IG9iamVjdC52YWx1ZXMoZXZlbnQuZGV0YWlsWzFdKVxuICAgICAgICAgICAgICBsZXQgc3RhdHVzID0gT2JqZWN0LnZhbHVlcyhldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICBsZXQgbG9jYXRpb24gPSBzdGF0dXNbMF07XG4gICAgICAgICAgICAgIHF1aXpTdGVwc1tsb2NhdGlvbl0uY29tcGxldGUgPSBzdGF0dXNbMV07XG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocXVpelN0ZXBzW2xvY2F0aW9uXSk7XG5cdH1cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+VGVzdCB5b3VyIGtub3dsZWRnZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPG1haW4gdHJhbnNpdGlvbjpzbGlkZT1cInt7ZGVsYXk6IDEwMCwgZHVyYXRpb246IDQwMCwgZWFzaW5nOiBxdWludE91dH19XCI+XG4gICAgICAgPENvbXBsZXRpb24gY2xhc3M9J3N0ZXAnPlxuICAgICAgICAgICAgICBDaGFwdGVyIHtxdWl6U3RlcHNbcXVpek51bV0uaWQgKyAnOiAnKyBxdWl6U3RlcHNbcXVpek51bV0ubmFtZX1cbiAgICAgICA8L0NvbXBsZXRpb24+XG4gICAgICAgPHNlY3Rpb24gaWQ9XCJtYWluLWNvbnRlbnRcIj5cbiAgICAgICAgPHN2ZWx0ZTpjb21wb25lbnQgdGhpcz17cXVpelN0ZXBzW3F1aXpOdW1dLmNvbXBvbmVudH0gb246bWVzc2FnZT17aGFuZGxlTWVzc2FnZX0gLz5cbiAgICAgICA8IS0tPFF1aXoyIG9uOm1lc3NhZ2U9e2hhbmRsZU1lc3NhZ2V9Lz4gLS0+XG48IS0tPHNlbGVjdCBiaW5kOnZhbHVlPXtzZWxlY3RlZH0+XG4gICAgICAgIHsjZWFjaCBxdWl6U3RlcHMgYXMgcX1cblx0XHQ8b3B0aW9uIHZhbHVlPXtxfT5RdWVzdGlvbiB7cS5pZH08L29wdGlvbj5cblx0ey9lYWNofVxuPC9zZWxlY3Q+LS0+XG48IS0tPGJ1dHRvbiBvbjpjbGljaz17aGFuZGxlQ2xpY2t9PkNsaWNrIG1lPC9idXR0b24+LS0+XG48IS0tPFByb2dyZXNzIHBhc3Q9e3Bhc3QubmFtZX0gY3VycmVudD17c2VsZWN0ZWQubmFtZX0gbmV4dD17bmV4dC5uYW1lfS8+LS0+XG4gICAgICAgPC9zZWN0aW9uPlxuPC9tYWluPlxuPHN0eWxlPlxuICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcblxuICAgICAgIH1cbiAgICAgICAuc3RlcHtcblx0XHRtYXJnaW4tYm90dG9tOiA1NXB4O1xuICAgICAgIH1cbiAgICAgICAjbWFpbi1jb250ZW50e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzg0MjREO1xuICAgICAgICAgICAgICAvKmhlaWdodDogODZ2aDsgKi9cbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTJweCAyMnB4IDQwcHggMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogOS4zdmggNXZ3IDB2aCA5LjN2aDtcbiAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAgIC8qbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMXZ3O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7Ki9cbiAgICAgICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6WyJRdWl6MSIsIlF1aXoyIiwiQ2hlY2twb2ludDEiLCJRdWl6MyIsIlF1aXo0IiwiUXVpejUiLCJRdWl6NiIsIkNoZWNrcG9pbnQyIiwiUXVpejciLCJRdWl6OCIsIkNoZWNrcG9pbnQzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFrRHVCLEdBQVMsZ0JBQUMsR0FBTyxLQUFFLEVBQUUsR0FBRyxJQUFJLGlCQUFFLEdBQVMsZ0JBQUMsR0FBTyxLQUFFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O2tGQUFyRCxHQUFTLGdCQUFDLEdBQU8sS0FBRSxFQUFFLEdBQUcsSUFBSSxpQkFBRSxHQUFTLGdCQUFDLEdBQU8sS0FBRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHNUMsR0FBUyxnQkFBQyxHQUFPLEtBQUUsU0FBUzs7Ozs7Ozs7bURBQWMsR0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFBdkQsR0FBUyxnQkFBQyxHQUFPLEtBQUUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7c0RBQWMsR0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUw3RCxLQUFLLEVBQUUsR0FBRztNQUFFLFFBQVEsRUFBRSxHQUFHO01BQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUEzQyxLQUFLLEVBQUUsR0FBRztLQUFFLFFBQVEsRUFBRSxHQUFHO0tBQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTVCOUQsU0FBUzs7R0FDTixFQUFFLEVBQUMsR0FBRztHQUFFLFNBQVMsRUFBRUEsRUFBSztHQUFFLElBQUksRUFBRSxrQkFBa0I7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ2xFLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGtCQUFrQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDbkUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLE1BQVc7R0FBRSxJQUFJLEVBQUUscUJBQXFCO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUM1RSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxlQUFlO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNoRSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxrQkFBa0I7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ25FLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGlCQUFpQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDbEUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsS0FBSztHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDdEQsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLE1BQVc7R0FBRSxJQUFJLEVBQUUseUJBQXlCO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNoRixFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxtQkFBbUI7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ3BFLEVBQUUsRUFBRSxJQUFJO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLEtBQUs7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ3ZELEVBQUUsRUFBRSxJQUFJO0dBQUUsU0FBUyxFQUFFQyxNQUFXO0dBQUUsSUFBSSxFQUFFLG9CQUFvQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7O1VBSTdFLGFBQWEsQ0FBQyxLQUFLOzs7TUFJVixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTTs7TUFDbkMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDO2tCQUN2QixTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFQbkQsT0FBTyxHQUFHLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
