import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, o as createEventDispatcher, p as globals, a as space, e as element, r as create_component, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, u as claim_component, j as attr_dev, k as add_location, l as insert_dev, w as mount_component, m as append_dev, x as transition_out, y as check_outros, z as transition_in, A as destroy_component, B as group_outros } from './client.20b6586a.js';
import Q0 from './q0.b0e43149.js';
import { C as Completion, Q as Q1 } from './q1.bce71151.js';
import Q2 from './q2.92e8fdbf.js';
import Q3 from './q3.b39d06ca.js';
import Q4 from './q4.3a025bf2.js';
import Q5 from './q5.f1846d35.js';
import Q6 from './q6.2e78c461.js';
import Q7 from './q7.5b07380b.js';
import Q8 from './q8.4d1cf053.js';
import Q9 from './q9.4069a04d.js';

/* src/routes/quizmain.svelte generated by Svelte v3.23.2 */

const { Object: Object_1, console: console_1 } = globals;
const file = "src/routes/quizmain.svelte";

function create_fragment(ctx) {
	let t0;
	let main;
	let completion;
	let t1;
	let switch_instance;
	let current;
	completion = new Completion({ props: { class: "step" }, $$inline: true });
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
			if (switch_instance) claim_component(switch_instance.$$.fragment, main_nodes);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Test your knowledge";
			attr_dev(main, "class", "svelte-g0hp58");
			add_location(main, file, 43, 0, 1811);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, main, anchor);
			mount_component(completion, main, null);
			append_dev(main, t1);

			if (switch_instance) {
				mount_component(switch_instance, main, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
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
					mount_component(switch_instance, main, null);
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
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(main);
			destroy_component(completion);
			if (switch_instance) destroy_component(switch_instance);
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
	const quizSteps = [
		{
			id: "1",
			component: Q0,
			name: "Webcam Challenge",
			complete: false
		},
		{
			id: "2",
			component: Q1,
			name: "Browser Choice",
			complete: false
		},
		{
			id: "3",
			component: Q2,
			name: "Privacy Setting",
			complete: false
		},
		{
			id: "4",
			component: Q3,
			name: "Https everywhere",
			complete: false
		},
		{
			id: "5",
			component: Q4,
			name: "Location Services (phone needed)",
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
			name: "location Tracking",
			complete: false
		},
		{
			id: "8",
			component: Q7,
			name: "Mobile keyboard",
			complete: false
		},
		{
			id: "9",
			component: Q8,
			name: "Messenger platform",
			complete: false
		},
		{
			id: "10",
			component: Q9,
			name: "iot",
			time: "2mins"
		}
	];

	function handleMessage(event) {
		$$invalidate(1, quizNum++, quizNum);

		//quizSteps[Object.values(event.detail[0])].complete = object.values(event.detail[1])
		let status = Object.values(event.detail);

		console.log(status);
		let location = status[0];
		$$invalidate(0, quizSteps[location].complete = status[1], quizSteps);
		console.log(quizSteps[location]);
	}

	const writable_props = [];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Quizmain> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Quizmain", $$slots, []);

	$$self.$capture_state = () => ({
		Quiz1: Q0,
		Quiz2: Q1,
		Quiz3: Q2,
		Quiz4: Q3,
		Quiz5: Q4,
		Quiz6: Q5,
		Quiz7: Q6,
		Quiz8: Q7,
		Quiz9: Q8,
		Quiz10: Q9,
		Completion,
		createEventDispatcher,
		quizSteps,
		handleMessage,
		quizNum
	});

	$$self.$inject_state = $$props => {
		if ("quizNum" in $$props) $$invalidate(1, quizNum = $$props.quizNum);
	};

	let quizNum;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	 $$invalidate(1, quizNum = 6);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpem1haW4uNTM2NDk2ODUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpem1haW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gaW1wb3J0IFF1aXoxIGZyb20gJy4vcXVpei9xMC5zdmVsdGUnXG4gaW1wb3J0IFF1aXoyIGZyb20gJy4vcXVpei9xMS5zdmVsdGUnXG4gaW1wb3J0IFF1aXozIGZyb20gJy4vcXVpei9xMi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo0IGZyb20gJy4vcXVpei9xMy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo1IGZyb20gJy4vcXVpei9xNC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo2IGZyb20gJy4vcXVpei9xNS5zdmVsdGUnXG4gaW1wb3J0IFF1aXo3IGZyb20gJy4vcXVpei9xNi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo4IGZyb20gJy4vcXVpei9xNy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo5IGZyb20gJy4vcXVpei9xOC5zdmVsdGUnXG4gaW1wb3J0IFF1aXoxMCBmcm9tICcuL3F1aXovcTkuc3ZlbHRlJ1xuIGltcG9ydCBDb21wbGV0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUnXG4gaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblxuXG5cblxuIGNvbnN0IHF1aXpTdGVwcyA9ICBbXG4gICAgICAgIHsgaWQ6JzEnLCBjb21wb25lbnQ6IFF1aXoxLCBuYW1lOiAnV2ViY2FtIENoYWxsZW5nZScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzInLCBjb21wb25lbnQ6IFF1aXoyLCBuYW1lOiAnQnJvd3NlciBDaG9pY2UnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICczJywgY29tcG9uZW50OiBRdWl6MywgbmFtZTogJ1ByaXZhY3kgU2V0dGluZycsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzQnLCBjb21wb25lbnQ6IFF1aXo0LCBuYW1lOiAnSHR0cHMgZXZlcnl3aGVyZScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzUnLCBjb21wb25lbnQ6IFF1aXo1LCBuYW1lOiAnTG9jYXRpb24gU2VydmljZXMgKHBob25lIG5lZWRlZCknLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICc2JywgY29tcG9uZW50OiBRdWl6NiwgbmFtZTogJ1RyYWNrZXIgYmxvY2tlcicsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzcnLCBjb21wb25lbnQ6IFF1aXo3LCBuYW1lOiAnbG9jYXRpb24gVHJhY2tpbmcnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICc4JywgY29tcG9uZW50OiBRdWl6OCwgbmFtZTogJ01vYmlsZSBrZXlib2FyZCcsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzknLCBjb21wb25lbnQ6IFF1aXo5LCBuYW1lOiAnTWVzc2VuZ2VyIHBsYXRmb3JtJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnMTAnLCBjb21wb25lbnQ6IFF1aXoxMCwgbmFtZTogJ2lvdCcsIHRpbWU6ICcybWlucyd9XG5dXG4kOiBxdWl6TnVtID0gNjtcbmZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgcXVpek51bSsrO1xuICAgICAgICAgICAgICAvL3F1aXpTdGVwc1tPYmplY3QudmFsdWVzKGV2ZW50LmRldGFpbFswXSldLmNvbXBsZXRlID0gb2JqZWN0LnZhbHVlcyhldmVudC5kZXRhaWxbMV0pXG4gICAgICAgICAgICAgIGxldCBzdGF0dXMgPSBPYmplY3QudmFsdWVzKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXR1cyk7XG4gICAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IHN0YXR1c1swXTtcbiAgICAgICAgICAgICAgcXVpelN0ZXBzW2xvY2F0aW9uXS5jb21wbGV0ZSA9IHN0YXR1c1sxXTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocXVpelN0ZXBzW2xvY2F0aW9uXSk7XG5cdH1cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+VGVzdCB5b3VyIGtub3dsZWRnZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPG1haW4+XG4gICAgICAgPENvbXBsZXRpb24gY2xhc3M9J3N0ZXAnLz5cbiAgICAgICAgPHN2ZWx0ZTpjb21wb25lbnQgdGhpcz17cXVpelN0ZXBzW3F1aXpOdW1dLmNvbXBvbmVudH0gb246bWVzc2FnZT17aGFuZGxlTWVzc2FnZX0vPlxuICAgICAgIDwhLS08UXVpejIgb246bWVzc2FnZT17aGFuZGxlTWVzc2FnZX0vPiAtLT5cblxuPCEtLTxzZWxlY3QgYmluZDp2YWx1ZT17c2VsZWN0ZWR9PlxuICAgICAgICB7I2VhY2ggcXVpelN0ZXBzIGFzIHF9XG5cdFx0PG9wdGlvbiB2YWx1ZT17cX0+UXVlc3Rpb24ge3EuaWR9PC9vcHRpb24+XG5cdHsvZWFjaH1cbjwvc2VsZWN0Pi0tPlxuPCEtLTxidXR0b24gb246Y2xpY2s9e2hhbmRsZUNsaWNrfT5DbGljayBtZTwvYnV0dG9uPi0tPlxuPCEtLTxQcm9ncmVzcyBwYXN0PXtwYXN0Lm5hbWV9IGN1cnJlbnQ9e3NlbGVjdGVkLm5hbWV9IG5leHQ9e25leHQubmFtZX0vPi0tPlxuPC9tYWluPlxuPHN0eWxlPlxuICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo1MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOjI1cHg7XG5cbiAgICAgICB9XG4gICAgICAgLnN0ZXB7XG5cdFx0bWFyZ2luLWJvdHRvbTogNTVweDtcbiAgICAgICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6WyJRdWl6MSIsIlF1aXoyIiwiUXVpejMiLCJRdWl6NCIsIlF1aXo1IiwiUXVpejYiLCJRdWl6NyIsIlF1aXo4IiwiUXVpejkiLCJRdWl6MTAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBNkNnQyxHQUFTLGdCQUFDLEdBQU8sS0FBRSxTQUFTOzs7Ozs7OzttREFBYyxHQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBQXZELEdBQVMsZ0JBQUMsR0FBTyxLQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7O3NEQUFjLEdBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E1QmhGLFNBQVM7O0dBQ04sRUFBRSxFQUFDLEdBQUc7R0FBRSxTQUFTLEVBQUVBLEVBQUs7R0FBRSxJQUFJLEVBQUUsa0JBQWtCO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNsRSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxnQkFBZ0I7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ2pFLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGlCQUFpQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDbEUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsa0JBQWtCO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNuRSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxrQ0FBa0M7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ25GLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGlCQUFpQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDbEUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsbUJBQW1CO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNwRSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxpQkFBaUI7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ2xFLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLG9CQUFvQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDckUsRUFBRSxFQUFFLElBQUk7R0FBRSxTQUFTLEVBQUVDLEVBQU07R0FBRSxJQUFJLEVBQUUsS0FBSztHQUFFLElBQUksRUFBRSxPQUFPOzs7O1VBR3hELGFBQWEsQ0FBQyxLQUFLO2tCQUNkLE9BQU87OztNQUVILE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNOztFQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU07TUFDZCxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUM7a0JBQ3ZCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0VBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBUnpDLE9BQU8sR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==