import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, v as validate_slots, r as createEventDispatcher, u as globals, a as space, e as element, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, x as claim_component, j as attr_dev, k as add_location, l as insert_dev, y as mount_component, m as append_dev, z as transition_out, A as check_outros, B as transition_in, C as add_render_callback, D as create_bidirectional_transition, E as destroy_component, t as text, h as claim_text, F as set_data_dev, G as group_outros } from './client.4ac8ab05.js';
import { s as slide, q as quintOut, a as quintIn } from './index.42fd54b0.js';
import './complete.01179ec4.js';
import { c as count } from './store.4e95b661.js';
import './Next.df4118f3.js';
import Q1 from './q1.ef2c7db2.js';
import Q2 from './q2.1cdee295.js';
import Q3 from './q3.b454169b.js';
import './Detect.6c2208ce.js';
import Q4 from './q4.8c6896aa.js';
import Q5 from './q5.c571a8e1.js';
import Q6 from './q6.974763c4.js';
import Q7 from './q7.804143ec.js';
import Q8 from './q8.e8c48d2e.js';
import Q9 from './q9.408e7cc8.js';
import Check1 from './check1.cfd6609d.js';
import Check2 from './check2.abb614d2.js';
import Check3 from './check3.6bbc9a09.js';
import { C as Completion } from './Completion.d7aaf128.js';

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
			add_location(section, file, 53, 7, 2364);
			attr_dev(main, "class", "svelte-a9u78n");
			add_location(main, file, 49, 0, 2151);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpem1haW4uZTEzNTQ0OTMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpem1haW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gaW1wb3J0IFF1aXoxIGZyb20gJy4vcXVpei9xMS5zdmVsdGUnXG4gaW1wb3J0IFF1aXoyIGZyb20gJy4vcXVpei9xMi5zdmVsdGUnXG4gaW1wb3J0IFF1aXozIGZyb20gJy4vcXVpei9xMy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo0IGZyb20gJy4vcXVpei9xNC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo1IGZyb20gJy4vcXVpei9xNS5zdmVsdGUnXG4gaW1wb3J0IFF1aXo2IGZyb20gJy4vcXVpei9xNi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo3IGZyb20gJy4vcXVpei9xNy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo4IGZyb20gJy4vcXVpei9xOC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo5IGZyb20gJy4vcXVpei9xOS5zdmVsdGUnXG4gaW1wb3J0IENoZWNrcG9pbnQxIGZyb20gJy4vcXVpei9jaGVjazEuc3ZlbHRlJ1xuIGltcG9ydCBDaGVja3BvaW50MiBmcm9tICcuL3F1aXovY2hlY2syLnN2ZWx0ZSdcbiBpbXBvcnQgQ2hlY2twb2ludDMgZnJvbSAnLi9xdWl6L2NoZWNrMy5zdmVsdGUnXG4gaW1wb3J0IENvbXBsZXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Db21wbGV0aW9uLnN2ZWx0ZSdcbiBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuaW1wb3J0IHsgc2xpZGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5pbXBvcnQgeyBxdWludE91dCwgcXVpbnRJbiB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXG5pbXBvcnQgeyBjb3VudCB9IGZyb20gJy4uL3N0b3JlLmpzJ1xuXG4gY29uc3QgcXVpelN0ZXBzID0gIFtcbiAgICAgICAgeyBpZDonMScsIGNvbXBvbmVudDogUXVpejEsIG5hbWU6ICdXZWJjYW0gQ2hhbGxlbmdlJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnMicsIGNvbXBvbmVudDogUXVpejIsIG5hbWU6ICdIVFRQUyBFdmVyeXdoZXJlJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnMycsIGNvbXBvbmVudDogQ2hlY2twb2ludDEsIG5hbWU6ICdTZWN1cml0eSB2cyBQcml2YWN5JywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnNCcsIGNvbXBvbmVudDogUXVpejMsIG5hbWU6ICdTZWFyY2ggRW5naW5lJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnNScsIGNvbXBvbmVudDogUXVpejQsIG5hbWU6ICdQcml2YWN5IFNldHRpbmdzJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnNicsIGNvbXBvbmVudDogUXVpejUsIG5hbWU6ICdUcmFja2VyIGJsb2NrZXInLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICc3JywgY29tcG9uZW50OiBRdWl6NiwgbmFtZTogJ0ROUycsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICAgICAgeyBpZDogJzgnLCBjb21wb25lbnQ6IENoZWNrcG9pbnQyLCBuYW1lOiAnU3VydmVpbGxhbmNlIENhcGl0YWxpc20nLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgICAgIHsgaWQ6ICc5JywgY29tcG9uZW50OiBRdWl6NywgbmFtZTogJ0xvY2F0aW9uIFRyYWNraW5nJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnMTAnLCBjb21wb25lbnQ6IFF1aXo4LCBuYW1lOiAnaU9UJywgY29tcGxldGU6ZmFsc2V9LFxuICAgICAgICB7IGlkOiAnMTEnLCBjb21wb25lbnQ6IENoZWNrcG9pbnQzLCBuYW1lOiAnSG93IHRvIE1ha2UgY2hhbmdlJywgY29tcGxldGU6ZmFsc2V9LFxuXVxuLy8kOiBxdWl6TnVtID0gMDtcbi8vbGV0IHF1aXpOdW0gPSAyO1xuJDpxdWl6TnVtID0gJGNvdW50O1xuZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy9xdWl6TnVtKys7XG4gICAgICAgICAgICAgIC8vcXVpelN0ZXBzW09iamVjdC52YWx1ZXMoZXZlbnQuZGV0YWlsWzBdKV0uY29tcGxldGUgPSBvYmplY3QudmFsdWVzKGV2ZW50LmRldGFpbFsxXSlcbiAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IE9iamVjdC52YWx1ZXMoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gc3RhdHVzWzBdO1xuICAgICAgICAgICAgICBxdWl6U3RlcHNbbG9jYXRpb25dLmNvbXBsZXRlID0gc3RhdHVzWzFdO1xuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHF1aXpTdGVwc1tsb2NhdGlvbl0pO1xuXHR9XG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlRlc3QgeW91ciBrbm93bGVkZ2U8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxtYWluIHRyYW5zaXRpb246c2xpZGU9XCJ7e2RlbGF5OiAxMDAsIGR1cmF0aW9uOiA0MDAsIGVhc2luZzogcXVpbnRPdXR9fVwiPlxuICAgICAgIDxDb21wbGV0aW9uIGNsYXNzPSdzdGVwJz5cbiAgICAgICAgICAgICAgQ2hhcHRlciB7cXVpelN0ZXBzW3F1aXpOdW1dLmlkICsgJzogJysgcXVpelN0ZXBzW3F1aXpOdW1dLm5hbWV9XG4gICAgICAgPC9Db21wbGV0aW9uPlxuICAgICAgIDxzZWN0aW9uIGlkPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgIDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9e3F1aXpTdGVwc1txdWl6TnVtXS5jb21wb25lbnR9IG9uOm1lc3NhZ2U9e2hhbmRsZU1lc3NhZ2V9IC8+XG4gICAgICAgPCEtLTxRdWl6MiBvbjptZXNzYWdlPXtoYW5kbGVNZXNzYWdlfS8+IC0tPlxuPCEtLTxzZWxlY3QgYmluZDp2YWx1ZT17c2VsZWN0ZWR9PlxuICAgICAgICB7I2VhY2ggcXVpelN0ZXBzIGFzIHF9XG5cdFx0PG9wdGlvbiB2YWx1ZT17cX0+UXVlc3Rpb24ge3EuaWR9PC9vcHRpb24+XG5cdHsvZWFjaH1cbjwvc2VsZWN0Pi0tPlxuPCEtLTxidXR0b24gb246Y2xpY2s9e2hhbmRsZUNsaWNrfT5DbGljayBtZTwvYnV0dG9uPi0tPlxuPCEtLTxQcm9ncmVzcyBwYXN0PXtwYXN0Lm5hbWV9IGN1cnJlbnQ9e3NlbGVjdGVkLm5hbWV9IG5leHQ9e25leHQubmFtZX0vPi0tPlxuICAgICAgIDwvc2VjdGlvbj5cbjwvbWFpbj5cbjxzdHlsZT5cbiAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG5cbiAgICAgICB9XG4gICAgICAgLnN0ZXB7XG5cdFx0bWFyZ2luLWJvdHRvbTogNTVweDtcbiAgICAgICB9XG4gICAgICAgI21haW4tY29udGVudHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzM4NDI0RDtcbiAgICAgICAgICAgICAgLypoZWlnaHQ6IDg2dmg7ICovXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDEycHggMjJweCA0MHB4IDIwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDkuM3ZoIDV2dyAwdmggOS4zdmg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICAvKm1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjF2dztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4OyovXG4gICAgICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOlsiUXVpejEiLCJRdWl6MiIsIkNoZWNrcG9pbnQxIiwiUXVpejMiLCJRdWl6NCIsIlF1aXo1IiwiUXVpejYiLCJDaGVja3BvaW50MiIsIlF1aXo3IiwiUXVpejgiLCJDaGVja3BvaW50MyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFtRHVCLEdBQVMsZ0JBQUMsR0FBTyxLQUFFLEVBQUUsR0FBRyxJQUFJLGlCQUFFLEdBQVMsZ0JBQUMsR0FBTyxLQUFFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O2tGQUFyRCxHQUFTLGdCQUFDLEdBQU8sS0FBRSxFQUFFLEdBQUcsSUFBSSxpQkFBRSxHQUFTLGdCQUFDLEdBQU8sS0FBRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHNUMsR0FBUyxnQkFBQyxHQUFPLEtBQUUsU0FBUzs7Ozs7Ozs7bURBQWMsR0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFBdkQsR0FBUyxnQkFBQyxHQUFPLEtBQUUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7c0RBQWMsR0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUw3RCxLQUFLLEVBQUUsR0FBRztNQUFFLFFBQVEsRUFBRSxHQUFHO01BQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUEzQyxLQUFLLEVBQUUsR0FBRztLQUFFLFFBQVEsRUFBRSxHQUFHO0tBQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTdCOUQsU0FBUzs7R0FDTixFQUFFLEVBQUMsR0FBRztHQUFFLFNBQVMsRUFBRUEsRUFBSztHQUFFLElBQUksRUFBRSxrQkFBa0I7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ2xFLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGtCQUFrQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDbkUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLE1BQVc7R0FBRSxJQUFJLEVBQUUscUJBQXFCO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUM1RSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxlQUFlO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNoRSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxrQkFBa0I7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ25FLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGlCQUFpQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDbEUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsS0FBSztHQUFFLFFBQVEsRUFBQyxLQUFLOzs7R0FDdEQsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLE1BQVc7R0FBRSxJQUFJLEVBQUUseUJBQXlCO0dBQUUsUUFBUSxFQUFDLEtBQUs7OztHQUNoRixFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxtQkFBbUI7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ3BFLEVBQUUsRUFBRSxJQUFJO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLEtBQUs7R0FBRSxRQUFRLEVBQUMsS0FBSzs7O0dBQ3ZELEVBQUUsRUFBRSxJQUFJO0dBQUUsU0FBUyxFQUFFQyxNQUFXO0dBQUUsSUFBSSxFQUFFLG9CQUFvQjtHQUFFLFFBQVEsRUFBQyxLQUFLOzs7O1VBSzdFLGFBQWEsQ0FBQyxLQUFLOzs7TUFJVixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTTs7TUFDbkMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDO2tCQUN2QixTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQVBuRCxPQUFPLEdBQUcsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
