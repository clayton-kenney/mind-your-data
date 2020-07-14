import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, o as createEventDispatcher, p as globals, a as space, e as element, r as create_component, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, u as claim_component, j as attr_dev, k as add_location, l as insert_dev, w as mount_component, m as append_dev, x as transition_out, y as check_outros, z as transition_in, A as destroy_component, B as group_outros } from './client.e9ec61cb.js';
import Q0 from './q0.bf942f05.js';
import { q as quintOut } from './index.b08ea08f.js';
import Q1 from './q1.f40a636f.js';
import Q2 from './q2.12b568f8.js';
import Q3 from './q3.ea038a64.js';
import Q4 from './q4.bca645e1.js';
import Q5 from './q5.dd08c766.js';
import Q6 from './q6.44b120ed.js';
import Q7 from './q7.9198c196.js';
import Q8 from './q8.b047d2e0.js';
import Q9 from './q9.ba58c7e1.js';
import { C as Completion } from './Completion.ed98de5e.js';

/* src/routes/quizmain.svelte generated by Svelte v3.23.2 */

const { Object: Object_1, console: console_1 } = globals;
const file = "src/routes/quizmain.svelte";

function create_fragment(ctx) {
	let t0;
	let main;
	let completion;
	let t1;
	let section;
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
			attr_dev(section, "class", "svelte-2y5a9m");
			add_location(section, file, 48, 7, 1919);
			attr_dev(main, "class", "svelte-2y5a9m");
			add_location(main, file, 46, 0, 1871);
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
		quintOut,
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

	 $$invalidate(1, quizNum = 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpem1haW4uNDllMDQxOGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpem1haW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gaW1wb3J0IFF1aXoxIGZyb20gJy4vcXVpei9xMC5zdmVsdGUnXG4gaW1wb3J0IFF1aXoyIGZyb20gJy4vcXVpei9xMS5zdmVsdGUnXG4gaW1wb3J0IFF1aXozIGZyb20gJy4vcXVpei9xMi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo0IGZyb20gJy4vcXVpei9xMy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo1IGZyb20gJy4vcXVpei9xNC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo2IGZyb20gJy4vcXVpei9xNS5zdmVsdGUnXG4gaW1wb3J0IFF1aXo3IGZyb20gJy4vcXVpei9xNi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo4IGZyb20gJy4vcXVpei9xNy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo5IGZyb20gJy4vcXVpei9xOC5zdmVsdGUnXG4gaW1wb3J0IFF1aXoxMCBmcm9tICcuL3F1aXovcTkuc3ZlbHRlJ1xuIGltcG9ydCBDb21wbGV0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUnXG4gaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcbiBcbiBpbXBvcnQgeyBxdWludE91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXG5cblxuXG4gY29uc3QgcXVpelN0ZXBzID0gIFtcbiAgICAgICAgeyBpZDonMScsIGNvbXBvbmVudDogUXVpejEsIG5hbWU6ICdXZWJjYW0gQ2hhbGxlbmdlJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnMicsIGNvbXBvbmVudDogUXVpejIsIG5hbWU6ICdCcm93c2VyIENob2ljZScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzMnLCBjb21wb25lbnQ6IFF1aXozLCBuYW1lOiAnUHJpdmFjeSBTZXR0aW5nJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnNCcsIGNvbXBvbmVudDogUXVpejQsIG5hbWU6ICdIdHRwcyBldmVyeXdoZXJlJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnNScsIGNvbXBvbmVudDogUXVpejUsIG5hbWU6ICdMb2NhdGlvbiBTZXJ2aWNlcyAocGhvbmUgbmVlZGVkKScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzYnLCBjb21wb25lbnQ6IFF1aXo2LCBuYW1lOiAnVHJhY2tlciBibG9ja2VyJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnNycsIGNvbXBvbmVudDogUXVpejcsIG5hbWU6ICdsb2NhdGlvbiBUcmFja2luZycsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzgnLCBjb21wb25lbnQ6IFF1aXo4LCBuYW1lOiAnTW9iaWxlIGtleWJvYXJkJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnOScsIGNvbXBvbmVudDogUXVpejksIG5hbWU6ICdNZXNzZW5nZXIgcGxhdGZvcm0nLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICcxMCcsIGNvbXBvbmVudDogUXVpejEwLCBuYW1lOiAnaW90JywgdGltZTogJzJtaW5zJ31cbl1cbiQ6IHF1aXpOdW0gPSAxO1xuZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgcXVpek51bSsrO1xuICAgICAgICAgICAgICAvL3F1aXpTdGVwc1tPYmplY3QudmFsdWVzKGV2ZW50LmRldGFpbFswXSldLmNvbXBsZXRlID0gb2JqZWN0LnZhbHVlcyhldmVudC5kZXRhaWxbMV0pXG4gICAgICAgICAgICAgIGxldCBzdGF0dXMgPSBPYmplY3QudmFsdWVzKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXR1cyk7XG4gICAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IHN0YXR1c1swXTtcbiAgICAgICAgICAgICAgcXVpelN0ZXBzW2xvY2F0aW9uXS5jb21wbGV0ZSA9IHN0YXR1c1sxXTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocXVpelN0ZXBzW2xvY2F0aW9uXSk7XG5cdH1cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+VGVzdCB5b3VyIGtub3dsZWRnZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPG1haW4+XG4gICAgICAgPENvbXBsZXRpb24gY2xhc3M9J3N0ZXAnLz5cbiAgICAgICA8c2VjdGlvbiBpZD1cIm1haW4tY29udGVudFwiPlxuICAgICAgICA8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXtxdWl6U3RlcHNbcXVpek51bV0uY29tcG9uZW50fSBvbjptZXNzYWdlPXtoYW5kbGVNZXNzYWdlfSAvPlxuICAgICAgIDwhLS08UXVpejIgb246bWVzc2FnZT17aGFuZGxlTWVzc2FnZX0vPiAtLT5cbjwhLS08c2VsZWN0IGJpbmQ6dmFsdWU9e3NlbGVjdGVkfT5cbiAgICAgICAgeyNlYWNoIHF1aXpTdGVwcyBhcyBxfVxuXHRcdDxvcHRpb24gdmFsdWU9e3F9PlF1ZXN0aW9uIHtxLmlkfTwvb3B0aW9uPlxuXHR7L2VhY2h9XG48L3NlbGVjdD4tLT5cbjwhLS08YnV0dG9uIG9uOmNsaWNrPXtoYW5kbGVDbGlja30+Q2xpY2sgbWU8L2J1dHRvbj4tLT5cbjwhLS08UHJvZ3Jlc3MgcGFzdD17cGFzdC5uYW1lfSBjdXJyZW50PXtzZWxlY3RlZC5uYW1lfSBuZXh0PXtuZXh0Lm5hbWV9Lz4tLT5cbiAgICAgICA8L3NlY3Rpb24+XG48L21haW4+XG48c3R5bGU+XG4gICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6MjVweDtcblxuICAgICAgIH1cbiAgICAgICAuc3RlcHtcblx0XHRtYXJnaW4tYm90dG9tOiA1NXB4O1xuICAgICAgIH1cbiAgICAgICAjbWFpbi1jb250ZW50e1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIxdnc7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6WyJRdWl6MSIsIlF1aXoyIiwiUXVpejMiLCJRdWl6NCIsIlF1aXo1IiwiUXVpejYiLCJRdWl6NyIsIlF1aXo4IiwiUXVpejkiLCJRdWl6MTAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBaURnQyxHQUFTLGdCQUFDLEdBQU8sS0FBRSxTQUFTOzs7Ozs7OzttREFBYyxHQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFBdkQsR0FBUyxnQkFBQyxHQUFPLEtBQUUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7c0RBQWMsR0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTlCaEYsU0FBUzs7R0FDTixFQUFFLEVBQUMsR0FBRztHQUFFLFNBQVMsRUFBRUEsRUFBSztHQUFFLElBQUksRUFBRSxrQkFBa0I7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ2xFLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGdCQUFnQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDakUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsaUJBQWlCO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNsRSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxrQkFBa0I7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ25FLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGtDQUFrQztHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDbkYsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsaUJBQWlCO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNsRSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxtQkFBbUI7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ3BFLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGlCQUFpQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDbEUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsb0JBQW9CO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNyRSxFQUFFLEVBQUUsSUFBSTtHQUFFLFNBQVMsRUFBRUMsRUFBTTtHQUFFLElBQUksRUFBRSxLQUFLO0dBQUUsSUFBSSxFQUFFLE9BQU87Ozs7VUFHeEQsYUFBYSxDQUFDLEtBQUs7a0JBRWQsT0FBTzs7O01BRUgsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU07O0VBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTTtNQUNkLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQztrQkFDdkIsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUM7RUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBVHpDLE9BQU8sR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
