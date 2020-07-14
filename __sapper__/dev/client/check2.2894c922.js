import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as createEventDispatcher, v as validate_slots, P as onMount, N as afterUpdate, p as globals, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, R as listen_dev, n as noop, A as add_render_callback, Y as create_in_transition, Z as create_out_transition } from './client.f2ae260e.js';
import { s as slide, q as quintOut, a as quintIn } from './index.42fd54b0.js';
import { D as Detect } from './Detect.a3ff96ed.js';

/* src/routes/quiz/check2.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/check2.svelte";

function create_fragment(ctx) {
	let t0;
	let div1;
	let h1;
	let t1;
	let t2;
	let p;
	let t3;
	let t4;
	let div0;
	let button;
	let t5;
	let div1_intro;
	let div1_outro;
	let current;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			t0 = space();
			div1 = element("div");
			h1 = element("h1");
			t1 = text("Surveillance Capitalism How did this happen?");
			t2 = space();
			p = element("p");
			t3 = text("(I’m thinking spruced up version of the predictions market or surveillance capitalism flow)\n\n            It started with the internet, then google realized that they had a data surplus, and our behavior has value. Now they sell it to the highest bidder.");
			t4 = space();
			div0 = element("div");
			button = element("button");
			t5 = text("Continue Challege");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-qv8f8s\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", {});
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Surveillance Capitalism How did this happen?");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "(I’m thinking spruced up version of the predictions market or surveillance capitalism flow)\n\n            It started with the internet, then google realized that they had a data surplus, and our behavior has value. Now they sell it to the highest bidder.");
			p_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			button = claim_element(div0_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t5 = claim_text(button_nodes, "Continue Challege");
			button_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Surveillance Capitalism How did this happen?";
			add_location(h1, file, 35, 4, 933);
			add_location(p, file, 36, 8, 995);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 41, 8, 1309);
			attr_dev(div0, "class", "button-holder svelte-9jf7df");
			add_location(div0, file, 40, 4, 1273);
			add_location(div1, file, 34, 0, 803);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, h1);
			append_dev(h1, t1);
			append_dev(div1, t2);
			append_dev(div1, p);
			append_dev(p, t3);
			append_dev(div1, t4);
			append_dev(div1, div0);
			append_dev(div0, button);
			append_dev(button, t5);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*complete*/ ctx[0], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (div1_outro) div1_outro.end(1);

				if (!div1_intro) div1_intro = create_in_transition(div1, slide, {
					delay: 100,
					duration: 400,
					easing: quintOut
				});

				div1_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			if (div1_intro) div1_intro.invalidate();

			div1_outro = create_out_transition(div1, slide, {
				delay: 100,
				duration: 400,
				easing: quintOut
			});

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			if (detaching && div1_outro) div1_outro.end();
			mounted = false;
			dispose();
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
	const dispatch = createEventDispatcher();

	//confirm comletion of quiz to master quiz component
	function complete() {
		dispatch("message", {
			question: 7, //Q-1 becaue of array
			complete: "true"
		});
	}

	function incomplete() {
		dispatch("message", {
			question: 7, //Q-1 becaue of array
			complete: "false"
		});
	}

	let q = 0;

	function advance() {
		q++;
		console.log(q);
	}

	function advanceTwo() {
		q += 2;
		console.log(q);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Check2> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Check2", $$slots, []);

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		onMount,
		afterUpdate,
		Detect,
		slide,
		quintOut,
		quintIn,
		complete,
		incomplete,
		q,
		advance,
		advanceTwo
	});

	$$self.$inject_state = $$props => {
		if ("q" in $$props) q = $$props.q;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [complete];
}

class Check2 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Check2",
			options,
			id: create_fragment.name
		});
	}
}

export default Check2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2syLjI4OTRjOTIyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2syLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGltcG9ydCBEZXRlY3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXRlY3Quc3ZlbHRlJ1xuXG5cdGltcG9ydCB7IHNsaWRlIH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIGltcG9ydCB7IHF1aW50T3V0LCBxdWludEluIH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG5cdC8vY29uZmlybSBjb21sZXRpb24gb2YgcXVpeiB0byBtYXN0ZXIgcXVpeiBjb21wb25lbnRcblx0ZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogNywgLy9RLTEgYmVjYXVlIG9mIGFycmF5XG5cdFx0XHRjb21wbGV0ZTogJ3RydWUnXG5cdFx0fSk7XG5cdH1cblx0ZnVuY3Rpb24gaW5jb21wbGV0ZSgpIHtcblx0XHRkaXNwYXRjaCgnbWVzc2FnZScsIHtcblx0XHRcdHF1ZXN0aW9uOiA3LCAvL1EtMSBiZWNhdWUgb2YgYXJyYXlcblx0XHRcdGNvbXBsZXRlOiAnZmFsc2UnXG5cdFx0fSk7XG5cdH1cblx0bGV0IHEgPSAwO1xuXHRmdW5jdGlvbiBhZHZhbmNlKCkge1xuXHRcdHErKztcblx0XHRjb25zb2xlLmxvZyhxKTtcblx0fVxuXHRmdW5jdGlvbiBhZHZhbmNlVHdvKCkge1xuXHRcdHErPTI7XG5cdFx0Y29uc29sZS5sb2cocSk7XG5cdH1cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+U3VydmVpbGxhbmNlIENhcGl0YWxpc20gSG93IGRpZCB0aGlzIGhhcHBlbj88L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxkaXYgaW46c2xpZGU9XCJ7e2RlbGF5OiAxMDAsIGR1cmF0aW9uOiA0MDAsIGVhc2luZzogcXVpbnRPdXR9fVwiIG91dDpzbGlkZT1cInt7ZGVsYXk6IDEwMCwgZHVyYXRpb246IDQwMCwgZWFzaW5nOiBxdWludE91dH19XCIgPlxuICAgIDxoMT5TdXJ2ZWlsbGFuY2UgQ2FwaXRhbGlzbSBIb3cgZGlkIHRoaXMgaGFwcGVuPzwvaDE+XG4gICAgICAgIDxwPihJ4oCZbSB0aGlua2luZyBzcHJ1Y2VkIHVwIHZlcnNpb24gb2YgdGhlIHByZWRpY3Rpb25zIG1hcmtldCBvciBzdXJ2ZWlsbGFuY2UgY2FwaXRhbGlzbSBmbG93KVxuXG4gICAgICAgICAgICBJdCBzdGFydGVkIHdpdGggdGhlIGludGVybmV0LCB0aGVuIGdvb2dsZSByZWFsaXplZCB0aGF0IHRoZXkgaGFkIGEgZGF0YSBzdXJwbHVzLCBhbmQgb3VyIGJlaGF2aW9yIGhhcyB2YWx1ZS4gTm93IHRoZXkgc2VsbCBpdCB0byB0aGUgaGlnaGVzdCBiaWRkZXIuXG4gICAgICAgICAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBvbjpjbGljaz17Y29tcGxldGV9PkNvbnRpbnVlIENoYWxsZWdlPC9idXR0b24+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgYnV0dG9uIHtcblx0ICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHQgICBtYXJnaW46IDEwcHg7XG5cdCAgIGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHQgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dURBeUMwQixHQUFROzs7Ozs7Ozs7Ozs7S0FQakIsS0FBSyxFQUFFLEdBQUc7S0FBRSxRQUFRLEVBQUUsR0FBRztLQUFFLE1BQU0sRUFBRSxRQUFROzs7Ozs7Ozs7Ozs7SUFBaUIsS0FBSyxFQUFFLEdBQUc7SUFBRSxRQUFRLEVBQUUsR0FBRztJQUFFLE1BQU0sRUFBRSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWhDakgsUUFBUSxHQUFHLHFCQUFxQjs7O1VBTzdCLFFBQVE7RUFDaEIsUUFBUSxDQUFDLFNBQVM7R0FDakIsUUFBUSxFQUFFLENBQUM7R0FDWCxRQUFRLEVBQUUsTUFBTTs7OztVQUdULFVBQVU7RUFDbEIsUUFBUSxDQUFDLFNBQVM7R0FDakIsUUFBUSxFQUFFLENBQUM7R0FDWCxRQUFRLEVBQUUsT0FBTzs7OztLQUdmLENBQUMsR0FBRyxDQUFDOztVQUNBLE9BQU87RUFDZixDQUFDO0VBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7VUFFTCxVQUFVO0VBQ2xCLENBQUMsSUFBRSxDQUFDO0VBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
