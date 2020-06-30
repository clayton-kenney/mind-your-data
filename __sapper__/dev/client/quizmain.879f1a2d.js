import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, o as create_component, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, p as claim_component, k as add_location, l as insert_dev, r as mount_component, n as noop, u as transition_in, w as transition_out, x as destroy_component } from './client.3f21808a.js';
import Q0 from './q0.54879b00.js';
import './Progress.47d9fc09.js';
import Q1 from './q1.84fa4ad5.js';
import Q2 from './q2.4e0a0a7e.js';
import Q3 from './q3.06b9c769.js';
import Q4 from './q4.7131c29e.js';
import Q5 from './q5.dfad3172.js';
import Q6 from './q6.2befba1d.js';
import Q7 from './q7.4a829814.js';
import Q8 from './q8.b537abba.js';
import Q9 from './q9.9730dc91.js';

/* src/routes/quizmain.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quizmain.svelte";

function create_fragment(ctx) {
	let t;
	let div;
	let quiz2;
	let current;
	quiz2 = new Q1({ $$inline: true });

	const block = {
		c: function create() {
			t = space();
			div = element("div");
			create_component(quiz2.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-7q3d4x\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			claim_component(quiz2.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Test your knowledge";
			add_location(div, file, 32, 0, 1776);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);
			mount_component(quiz2, div, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(quiz2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(quiz2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
			destroy_component(quiz2);
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
			time: "2mins",
			description: "If your computer has a built-in camera, also known as a webcam, you should know that it can be used to spy on you. And no, this is not just science fiction as a recent survey conducted by HP shows that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked. In this challenge, we are going to walk you through the best practice to avoid this risk."
		},
		{
			id: "2",
			component: Q1,
			name: "Browser Choice",
			time: "3mins"
		},
		{
			id: "3",
			component: Q2,
			name: "Privacy Setting",
			time: "4mins"
		},
		{
			id: "4",
			component: Q3,
			name: "Https everywhere",
			time: "4mins"
		},
		{
			id: "5",
			component: Q4,
			name: "Location Services (phone needed)",
			time: "3mins"
		},
		{
			id: "6",
			component: Q5,
			name: "Tracker blocker",
			time: "3mins"
		},
		{
			id: "7",
			component: Q6,
			name: "location Tracking",
			time: "1mins"
		},
		{
			id: "8",
			component: Q7,
			name: "Mobile keyboard",
			time: "5mins"
		},
		{
			id: "9",
			component: Q8,
			name: "Messenger platform",
			time: "2mins"
		},
		{
			id: "10",
			component: Q9,
			name: "iot",
			time: "2mins"
		}
	];

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Quizmain> was created with unknown prop '${key}'`);
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
		quizSteps
	});

	return [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpem1haW4uODc5ZjFhMmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpem1haW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gaW1wb3J0IFF1aXoxIGZyb20gJy4vcXVpei9xMC5zdmVsdGUnXG4gaW1wb3J0IFF1aXoyIGZyb20gJy4vcXVpei9xMS5zdmVsdGUnXG4gaW1wb3J0IFF1aXozIGZyb20gJy4vcXVpei9xMi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo0IGZyb20gJy4vcXVpei9xMy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo1IGZyb20gJy4vcXVpei9xNC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo2IGZyb20gJy4vcXVpei9xNS5zdmVsdGUnXG4gaW1wb3J0IFF1aXo3IGZyb20gJy4vcXVpei9xNi5zdmVsdGUnXG4gaW1wb3J0IFF1aXo4IGZyb20gJy4vcXVpei9xNy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo5IGZyb20gJy4vcXVpei9xOC5zdmVsdGUnXG4gaW1wb3J0IFF1aXoxMCBmcm9tICcuL3F1aXovcTkuc3ZlbHRlJ1xuXG4gY29uc3QgcXVpelN0ZXBzID0gIFtcbiAgICAgICAgeyBpZDonMScsIGNvbXBvbmVudDogUXVpejEsIG5hbWU6ICdXZWJjYW0gQ2hhbGxlbmdlJywgdGltZTogJzJtaW5zJywgZGVzY3JpcHRpb246XCJJZiB5b3VyIGNvbXB1dGVyIGhhcyBhIGJ1aWx0LWluIGNhbWVyYSwgYWxzbyBrbm93biBhcyBhIHdlYmNhbSwgeW91IHNob3VsZCBrbm93IHRoYXQgaXQgY2FuIGJlIHVzZWQgdG8gc3B5IG9uIHlvdS4gQW5kIG5vLCB0aGlzIGlzIG5vdCBqdXN0IHNjaWVuY2UgZmljdGlvbiBhcyBhIHJlY2VudCBzdXJ2ZXkgY29uZHVjdGVkIGJ5IEhQIHNob3dzIHRoYXQgMTAlIGluIHRoZSBVLlMuIGVpdGhlciBrbm93IHNvbWVvbmUgd2hvc2Ugd2ViY2FtIHdhcyBoYWNrZWQgb3IgaGF2ZSBoYWQgdGhlaXIgb3duIHdlYmNhbSBoYWNrZWQuIEluIHRoaXMgY2hhbGxlbmdlLCB3ZSBhcmUgZ29pbmcgdG8gd2FsayB5b3UgdGhyb3VnaCB0aGUgYmVzdCBwcmFjdGljZSB0byBhdm9pZCB0aGlzIHJpc2suXCJ9LFxuICAgICAgICB7IGlkOiAnMicsIGNvbXBvbmVudDogUXVpejIsIG5hbWU6ICdCcm93c2VyIENob2ljZScsIHRpbWU6ICczbWlucyd9LFxuICAgICAgICB7IGlkOiAnMycsIGNvbXBvbmVudDogUXVpejMsIG5hbWU6ICdQcml2YWN5IFNldHRpbmcnLCB0aW1lOiAnNG1pbnMnfSxcbiAgICAgICAgeyBpZDogJzQnLCBjb21wb25lbnQ6IFF1aXo0LCBuYW1lOiAnSHR0cHMgZXZlcnl3aGVyZScsIHRpbWU6ICc0bWlucyd9LFxuICAgICAgICB7IGlkOiAnNScsIGNvbXBvbmVudDogUXVpejUsIG5hbWU6ICdMb2NhdGlvbiBTZXJ2aWNlcyAocGhvbmUgbmVlZGVkKScsIHRpbWU6ICczbWlucyd9LFxuICAgICAgICB7IGlkOiAnNicsIGNvbXBvbmVudDogUXVpejYsIG5hbWU6ICdUcmFja2VyIGJsb2NrZXInLCB0aW1lOiAnM21pbnMnfSxcbiAgICAgICAgeyBpZDogJzcnLCBjb21wb25lbnQ6IFF1aXo3LCBuYW1lOiAnbG9jYXRpb24gVHJhY2tpbmcnLCB0aW1lOiAnMW1pbnMnfSxcbiAgICAgICAgeyBpZDogJzgnLCBjb21wb25lbnQ6IFF1aXo4LCBuYW1lOiAnTW9iaWxlIGtleWJvYXJkJywgdGltZTogJzVtaW5zJ30sXG4gICAgICAgIHsgaWQ6ICc5JywgY29tcG9uZW50OiBRdWl6OSwgbmFtZTogJ01lc3NlbmdlciBwbGF0Zm9ybScsIHRpbWU6ICcybWlucyd9LFxuICAgICAgICB7IGlkOiAnMTAnLCBjb21wb25lbnQ6IFF1aXoxMCwgbmFtZTogJ2lvdCcsIHRpbWU6ICcybWlucyd9XG5dXG4vL2xldCBzZWxlY3RlZCA9IHF1aXpTdGVwc1sxXTtcbi8vbGV0IG5leHQgPSBxdWl6U3RlcHNbMV07XG5cbi8vZXQgc2VsZWN0ZWQ9IHF1aXpTdGVwc1txXTsgICBcbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+VGVzdCB5b3VyIGtub3dsZWRnZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdj5cbiAgICAgICA8IS0tIDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9e3F1aXpTdGVwc1sxXX0vPi0tPlxuICAgICAgIDxRdWl6MiAvPlxuXG48IS0tPHNlbGVjdCBiaW5kOnZhbHVlPXtzZWxlY3RlZH0+XG4gICAgICAgIHsjZWFjaCBxdWl6U3RlcHMgYXMgcX1cblx0XHQ8b3B0aW9uIHZhbHVlPXtxfT5RdWVzdGlvbiB7cS5pZH08L29wdGlvbj5cblx0ey9lYWNofVxuPC9zZWxlY3Q+LS0+XG48IS0tPGJ1dHRvbiBvbjpjbGljaz17aGFuZGxlQ2xpY2t9PkNsaWNrIG1lPC9idXR0b24+LS0+XG48IS0tPFByb2dyZXNzIHBhc3Q9e3Bhc3QubmFtZX0gY3VycmVudD17c2VsZWN0ZWQubmFtZX0gbmV4dD17bmV4dC5uYW1lfS8+LS0+XG48L2Rpdj5cbjxzdHlsZT5cbjwvc3R5bGU+Il0sIm5hbWVzIjpbIlF1aXoxIiwiUXVpejIiLCJRdWl6MyIsIlF1aXo0IiwiUXVpejUiLCJRdWl6NiIsIlF1aXo3IiwiUXVpejgiLCJRdWl6OSIsIlF1aXoxMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQVlPLFNBQVM7O0dBQ04sRUFBRSxFQUFDLEdBQUc7R0FBRSxTQUFTLEVBQUVBLEVBQUs7R0FBRSxJQUFJLEVBQUUsa0JBQWtCO0dBQUUsSUFBSSxFQUFFLE9BQU87R0FBRSxXQUFXLEVBQUMsc1lBQXNZOzs7R0FDcmQsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsZ0JBQWdCO0dBQUUsSUFBSSxFQUFFLE9BQU87OztHQUNoRSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxpQkFBaUI7R0FBRSxJQUFJLEVBQUUsT0FBTzs7O0dBQ2pFLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLGtCQUFrQjtHQUFFLElBQUksRUFBRSxPQUFPOzs7R0FDbEUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsa0NBQWtDO0dBQUUsSUFBSSxFQUFFLE9BQU87OztHQUNsRixFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxpQkFBaUI7R0FBRSxJQUFJLEVBQUUsT0FBTzs7O0dBQ2pFLEVBQUUsRUFBRSxHQUFHO0dBQUUsU0FBUyxFQUFFQyxFQUFLO0dBQUUsSUFBSSxFQUFFLG1CQUFtQjtHQUFFLElBQUksRUFBRSxPQUFPOzs7R0FDbkUsRUFBRSxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUVDLEVBQUs7R0FBRSxJQUFJLEVBQUUsaUJBQWlCO0dBQUUsSUFBSSxFQUFFLE9BQU87OztHQUNqRSxFQUFFLEVBQUUsR0FBRztHQUFFLFNBQVMsRUFBRUMsRUFBSztHQUFFLElBQUksRUFBRSxvQkFBb0I7R0FBRSxJQUFJLEVBQUUsT0FBTzs7O0dBQ3BFLEVBQUUsRUFBRSxJQUFJO0dBQUUsU0FBUyxFQUFFQyxFQUFNO0dBQUUsSUFBSSxFQUFFLEtBQUs7R0FBRSxJQUFJLEVBQUUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
