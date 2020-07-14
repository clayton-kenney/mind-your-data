import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, o as createEventDispatcher, p as globals, a as space, e as element, r as create_component, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, u as claim_component, j as attr_dev, k as add_location, l as insert_dev, w as mount_component, m as append_dev, x as transition_out, y as check_outros, z as transition_in, A as add_render_callback, B as create_bidirectional_transition, C as destroy_component, D as group_outros } from './client.9332a395.js';
import { s as slide, q as quintOut, a as quintIn } from './index.0c0fb0ea.js';
import Q0 from './q0.a7c246dd.js';
import Q1 from './q1.1ff5dec4.js';
import Q2 from './q2.8dfeddec.js';
import Q3 from './q3.0d2f1935.js';
import Q4 from './q4.eac6c156.js';
import Q5 from './q5.9e1e1ea0.js';
import Q6 from './q6.6cc3f4df.js';
import Q7 from './q7.5b5ced67.js';
import Q8 from './q8.c852f8d6.js';
import Q9 from './q9.c3ca2c0a.js';
import { C as Completion } from './Completion.b245e49b.js';

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
	let main_transition;
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
			add_location(section, file, 49, 7, 2113);
			attr_dev(main, "class", "svelte-2y5a9m");
			add_location(main, file, 47, 0, 1998);
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
	const quizSteps = [
		{
			id: "1",
			component: Q0,
			name: "Webcam Challenge",
			complete: false
		},
		{
			id: "4",
			component: Q2,
			name: "Privacy Settings",
			complete: false
		},
		{
			id: "8",
			component: Checkpoint1,
			name: "Security vs Privacy",
			complete: false
		},
		{
			id: "2",
			component: Q1,
			name: "Search Engine",
			complete: false
		},
		{
			id: "10",
			component: Q7,
			name: "Privacy Settings",
			complete: false
		},
		{
			id: "8",
			component: Q5,
			name: "Tracker blocker",
			complete: false
		},
		{
			id: "6",
			component: Q4,
			name: "DNS",
			complete: false
		},
		{
			id: "8",
			component: Checkpoint2,
			name: "Surveillance Capitalism",
			complete: false
		},
		{
			id: "5",
			component: Q3,
			name: "Location Tracking",
			complete: false
		},
		{
			id: "9",
			component: Q6,
			name: "iOT",
			complete: false
		},
		{
			id: "11",
			component: Q8,
			name: "How to Make change",
			complete: false
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
		slide,
		quintOut,
		quintIn,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpem1haW4uMTNjYzk1OTIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpem1haW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gaW1wb3J0IFF1aXoxIGZyb20gJy4vcXVpei9xMC5zdmVsdGUnXG4gaW1wb3J0IFF1aXoyIGZyb20gJy4vcXVpei9xMS5zdmVsdGUnXG4gaW1wb3J0IFF1aXozIGZyb20gJy4vcXVpei9xMi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo0IGZyb20gJy4vcXVpei9xMy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo1IGZyb20gJy4vcXVpei9xNC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo2IGZyb20gJy4vcXVpei9xNS5zdmVsdGUnXG4gaW1wb3J0IFF1aXo3IGZyb20gJy4vcXVpei9xNi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo4IGZyb20gJy4vcXVpei9xNy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo5IGZyb20gJy4vcXVpei9xOC5zdmVsdGUnXG4gaW1wb3J0IFF1aXoxMCBmcm9tICcuL3F1aXovcTkuc3ZlbHRlJ1xuIGltcG9ydCBDb21wbGV0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUnXG4gaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHsgc2xpZGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5pbXBvcnQgeyBxdWludE91dCwgcXVpbnRJbiB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXG5cblxuXG4gY29uc3QgcXVpelN0ZXBzID0gIFtcbiAgICAgICAgeyBpZDonMScsIGNvbXBvbmVudDogUXVpejEsIG5hbWU6ICdXZWJjYW0gQ2hhbGxlbmdlJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnNCcsIGNvbXBvbmVudDogUXVpejMsIG5hbWU6ICdQcml2YWN5IFNldHRpbmdzJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnOCcsIGNvbXBvbmVudDogQ2hlY2twb2ludDEsIG5hbWU6ICdTZWN1cml0eSB2cyBQcml2YWN5JywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnMicsIGNvbXBvbmVudDogUXVpejIsIG5hbWU6ICdTZWFyY2ggRW5naW5lJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnMTAnLCBjb21wb25lbnQ6IFF1aXo4LCBuYW1lOiAnUHJpdmFjeSBTZXR0aW5ncycsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzgnLCBjb21wb25lbnQ6IFF1aXo2LCBuYW1lOiAnVHJhY2tlciBibG9ja2VyJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnNicsIGNvbXBvbmVudDogUXVpejUsIG5hbWU6ICdETlMnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICc4JywgY29tcG9uZW50OiBDaGVja3BvaW50MiwgbmFtZTogJ1N1cnZlaWxsYW5jZSBDYXBpdGFsaXNtJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnNScsIGNvbXBvbmVudDogUXVpejQsIG5hbWU6ICdMb2NhdGlvbiBUcmFja2luZycsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzknLCBjb21wb25lbnQ6IFF1aXo3LCBuYW1lOiAnaU9UJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnMTEnLCBjb21wb25lbnQ6IFF1aXo5LCBuYW1lOiAnSG93IHRvIE1ha2UgY2hhbmdlJywgY29tcGxldGU6ZmFsc2V9LFxuXVxuJDogcXVpek51bSA9IDE7XG5mdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBxdWl6TnVtKys7XG4gICAgICAgICAgICAgIC8vcXVpelN0ZXBzW09iamVjdC52YWx1ZXMoZXZlbnQuZGV0YWlsWzBdKV0uY29tcGxldGUgPSBvYmplY3QudmFsdWVzKGV2ZW50LmRldGFpbFsxXSlcbiAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IE9iamVjdC52YWx1ZXMoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzKTtcbiAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gc3RhdHVzWzBdO1xuICAgICAgICAgICAgICBxdWl6U3RlcHNbbG9jYXRpb25dLmNvbXBsZXRlID0gc3RhdHVzWzFdO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhxdWl6U3RlcHNbbG9jYXRpb25dKTtcblx0fVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5UZXN0IHlvdXIga25vd2xlZGdlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48bWFpbiB0cmFuc2l0aW9uOnNsaWRlPVwie3tkZWxheTogMTAwLCBkdXJhdGlvbjogNDAwLCBlYXNpbmc6IHF1aW50T3V0fX1cIj5cbiAgICAgICA8Q29tcGxldGlvbiBjbGFzcz0nc3RlcCcvPlxuICAgICAgIDxzZWN0aW9uIGlkPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgIDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9e3F1aXpTdGVwc1txdWl6TnVtXS5jb21wb25lbnR9IG9uOm1lc3NhZ2U9e2hhbmRsZU1lc3NhZ2V9IC8+XG4gICAgICAgPCEtLTxRdWl6MiBvbjptZXNzYWdlPXtoYW5kbGVNZXNzYWdlfS8+IC0tPlxuPCEtLTxzZWxlY3QgYmluZDp2YWx1ZT17c2VsZWN0ZWR9PlxuICAgICAgICB7I2VhY2ggcXVpelN0ZXBzIGFzIHF9XG5cdFx0PG9wdGlvbiB2YWx1ZT17cX0+UXVlc3Rpb24ge3EuaWR9PC9vcHRpb24+XG5cdHsvZWFjaH1cbjwvc2VsZWN0Pi0tPlxuPCEtLTxidXR0b24gb246Y2xpY2s9e2hhbmRsZUNsaWNrfT5DbGljayBtZTwvYnV0dG9uPi0tPlxuPCEtLTxQcm9ncmVzcyBwYXN0PXtwYXN0Lm5hbWV9IGN1cnJlbnQ9e3NlbGVjdGVkLm5hbWV9IG5leHQ9e25leHQubmFtZX0vPi0tPlxuICAgICAgIDwvc2VjdGlvbj5cbjwvbWFpbj5cbjxzdHlsZT5cbiAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDoyNXB4O1xuXG4gICAgICAgfVxuICAgICAgIC5zdGVwe1xuXHRcdG1hcmdpbi1ib3R0b206IDU1cHg7XG4gICAgICAgfVxuICAgICAgICNtYWluLWNvbnRlbnR7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjF2dztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbIlF1aXoxIiwiUXVpejMiLCJRdWl6MiIsIlF1aXo4IiwiUXVpejYiLCJRdWl6NSIsIlF1aXo0IiwiUXVpejciLCJRdWl6OSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBa0RnQyxHQUFTLGdCQUFDLEdBQU8sS0FBRSxTQUFTOzs7Ozs7OzttREFBYyxHQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFBdkQsR0FBUyxnQkFBQyxHQUFPLEtBQUUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7c0RBQWMsR0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUg3RCxLQUFLLEVBQUUsR0FBRztNQUFFLFFBQVEsRUFBRSxHQUFHO01BQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUEzQyxLQUFLLEVBQUUsR0FBRztLQUFFLFFBQVEsRUFBRSxHQUFHO0tBQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BNUI5RCxTQUFTOztHQUNOLEVBQUUsRUFBQyxHQUFHO0dBQUUsU0FBUyxFQUFFQSxFQUFLO0dBQUUsSUFBSSxFQUFFLGtCQUFrQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDbEUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsa0JBQWtCO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNuRSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRSxXQUFXO0dBQUUsSUFBSSxFQUFFLHFCQUFxQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDNUUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsZUFBZTtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDaEUsRUFBRSxFQUFFLElBQUk7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsa0JBQWtCO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNwRSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxpQkFBaUI7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ2xFLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLEtBQUs7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ3RELEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFLFdBQVc7R0FBRSxJQUFJLEVBQUUseUJBQXlCO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNoRixFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxtQkFBbUI7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ3BFLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLEtBQUs7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ3RELEVBQUUsRUFBRSxJQUFJO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLG9CQUFvQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7O1VBR3ZFLGFBQWEsQ0FBQyxLQUFLO2tCQUVkLE9BQU87OztNQUVILE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNOztFQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU07TUFDZCxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUM7a0JBQ3ZCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0VBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBVHpDLE9BQU8sR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
