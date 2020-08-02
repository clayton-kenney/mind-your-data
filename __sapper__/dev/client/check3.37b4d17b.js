import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, J as createEventDispatcher, o as onMount, O as onDestroy, v as validate_slots, L as afterUpdate, B as space, c as create_component, D as query_selector_all, j as detach_dev, E as claim_space, a as claim_component, n as insert_dev, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, R as set_store_value, f as element, C as text, g as claim_element, h as children, F as claim_text, l as add_location, k as attr_dev, p as append_dev } from './client.6b2fd41c.js';
import './index.cde359a8.js';
import { T as TransHelp } from './TransHelp.79a4eb4d.js';
import { c as count, q as quizSteps, t as timerActive } from './store.485e89c1.js';
import { C as Complete, B as Back } from './Back.6c601ea3.js';
import { B as Btn } from './Btn.d8a3d8b4.js';

/* src/routes/quiz/check3.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/check3.svelte";

// (26:32) <Btn p={0}>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("See your results");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "See your results");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(26:32) <Btn p={0}>",
		ctx
	});

	return block;
}

// (20:0) <Trans id="main-content">
function create_default_slot(ctx) {
	let section;
	let div1;
	let h1;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div0;
	let a;
	let btn;
	let t4;
	let button0;
	let t5;
	let t6;
	let button1;
	let t7;
	let t8;
	let back;
	let current;

	btn = new Btn({
			props: {
				p: 0,
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	back = new Back({ $$inline: true });

	const block = {
		c: function create() {
			section = element("section");
			div1 = element("div");
			h1 = element("h1");
			t0 = text("We must claim our right to privacy.");
			t1 = space();
			p = element("p");
			t2 = text("Agitate for change. Like most rights, privacy draws notice only after it’s gone. At that point, it’s harder to regain. Just as we see the environmental impact of the early Industrial Age, future generations will judge today’s society on how well it rose to the challenges of surveillance and massive information collection. Push for reform.");
			t3 = space();
			div0 = element("div");
			a = element("a");
			create_component(btn.$$.fragment);
			t4 = space();
			button0 = element("button");
			t5 = text("Sign a Petition");
			t6 = space();
			button1 = element("button");
			t7 = text("Contact your Rep");
			t8 = space();
			create_component(back.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "We must claim our right to privacy.");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Agitate for change. Like most rights, privacy draws notice only after it’s gone. At that point, it’s harder to regain. Just as we see the environmental impact of the early Industrial Age, future generations will judge today’s society on how well it rose to the challenges of surveillance and massive information collection. Push for reform.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			a = claim_element(div0_nodes, "A", { rel: true, href: true });
			var a_nodes = children(a);
			claim_component(btn.$$.fragment, a_nodes);
			a_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			button0 = claim_element(div0_nodes, "BUTTON", {});
			var button0_nodes = children(button0);
			t5 = claim_text(button0_nodes, "Sign a Petition");
			button0_nodes.forEach(detach_dev);
			t6 = claim_space(div0_nodes);
			button1 = claim_element(div0_nodes, "BUTTON", {});
			var button1_nodes = children(button1);
			t7 = claim_text(button1_nodes, "Contact your Rep");
			button1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t8 = claim_space(section_nodes);
			claim_component(back.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 22, 4, 790);
			add_location(p, file, 23, 8, 843);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", "review");
			add_location(a, file, 25, 2, 1225);
			add_location(button0, file, 26, 8, 1301);
			add_location(button1, file, 27, 8, 1343);
			attr_dev(div0, "class", "button-holder svelte-fqq2f8");
			add_location(div0, file, 24, 4, 1195);
			attr_dev(div1, "class", "svelte-fqq2f8");
			add_location(div1, file, 21, 2, 780);
			attr_dev(section, "class", "svelte-fqq2f8");
			add_location(section, file, 20, 1, 768);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div1);
			append_dev(div1, h1);
			append_dev(h1, t0);
			append_dev(div1, t1);
			append_dev(div1, p);
			append_dev(p, t2);
			append_dev(div1, t3);
			append_dev(div1, div0);
			append_dev(div0, a);
			mount_component(btn, a, null);
			append_dev(div0, t4);
			append_dev(div0, button0);
			append_dev(button0, t5);
			append_dev(div0, t6);
			append_dev(div0, button1);
			append_dev(button1, t7);
			append_dev(section, t8);
			mount_component(back, section, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const btn_changes = {};

			if (dirty & /*$$scope*/ 16) {
				btn_changes.$$scope = { dirty, ctx };
			}

			btn.$set(btn_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(btn.$$.fragment, local);
			transition_in(back.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(btn.$$.fragment, local);
			transition_out(back.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(btn);
			destroy_component(back);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(20:0) <Trans id=\\\"main-content\\\">",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let trans;
	let current;

	trans = new TransHelp({
			props: {
				id: "main-content",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t = space();
			create_component(trans.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1mhgd6m\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "How  to make change?";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope*/ 16) {
				trans_changes.$$scope = { dirty, ctx };
			}

			trans.$set(trans_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(trans.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(trans.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			destroy_component(trans, detaching);
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
	let $timerActive;
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(0, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(1, $count = $$value));
	validate_store(timerActive, "timerActive");
	component_subscribe($$self, timerActive, $$value => $$invalidate(2, $timerActive = $$value));
	const dispatch = createEventDispatcher();

	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
		timerActive.set(!$timerActive);
	});

	onDestroy(() => timerActive.set(!$timerActive));
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Check3> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Check3", $$slots, []);

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		onMount,
		afterUpdate,
		onDestroy,
		Complete,
		Btn,
		Trans: TransHelp,
		count,
		quizSteps,
		timerActive,
		Back,
		$quizSteps,
		$count,
		$timerActive
	});

	return [];
}

class Check3 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Check3",
			options,
			id: create_fragment.name
		});
	}
}

export default Check3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2szLjM3YjRkMTdiLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2szLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSwgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IENvbXBsZXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcGxldGUuc3ZlbHRlJ1xuXHRpbXBvcnQgQnRuIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnRuLnN2ZWx0ZScgLy9zZXQgPE5leHQgcT17Mn0+IHRvIHNraXAgbXVsdGlwbGUgc3RlcHNcbiAgICBpbXBvcnQgVHJhbnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlJztcbiAvL3NldHMgYXNpZGUgaWNvbiB0byBpbiBwcm9ncmVzcyB2aWEgc3RvcmVcbiBpbXBvcnQgeyBjb3VudCwgcXVpelN0ZXBzLCB0aW1lckFjdGl2ZSB9IGZyb20gJy4uLy4uL3N0b3JlLmpzJ1xuIGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cdG9uTW91bnQoYXN5bmMoKSA9PiB7XG5cdFx0JHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDE7XG5cdFx0dGltZXJBY3RpdmUuc2V0KCEkdGltZXJBY3RpdmUpO1xuXHR9KTtcblx0b25EZXN0cm95KCgpID0+IHRpbWVyQWN0aXZlLnNldCghJHRpbWVyQWN0aXZlKSlcbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+SG93ICB0byBtYWtlIGNoYW5nZT88L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucyBpZD1cIm1haW4tY29udGVudFwiPlxuXHQ8c2VjdGlvbj5cblx0XHQ8ZGl2PlxuICAgIDxoMT5XZSBtdXN0IGNsYWltIG91ciByaWdodCB0byBwcml2YWN5LjwvaDE+XG4gICAgICAgIDxwPkFnaXRhdGUgZm9yIGNoYW5nZS4gTGlrZSBtb3N0IHJpZ2h0cywgcHJpdmFjeSBkcmF3cyBub3RpY2Ugb25seSBhZnRlciBpdOKAmXMgZ29uZS4gQXQgdGhhdCBwb2ludCwgaXTigJlzIGhhcmRlciB0byByZWdhaW4uIEp1c3QgYXMgd2Ugc2VlIHRoZSBlbnZpcm9ubWVudGFsIGltcGFjdCBvZiB0aGUgZWFybHkgSW5kdXN0cmlhbCBBZ2UsIGZ1dHVyZSBnZW5lcmF0aW9ucyB3aWxsIGp1ZGdlIHRvZGF54oCZcyBzb2NpZXR5IG9uIGhvdyB3ZWxsIGl0IHJvc2UgdG8gdGhlIGNoYWxsZW5nZXMgb2Ygc3VydmVpbGxhbmNlIGFuZCBtYXNzaXZlIGluZm9ybWF0aW9uIGNvbGxlY3Rpb24uIFB1c2ggZm9yIHJlZm9ybS48L3A+XG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8YSByZWw9cHJlZmV0Y2ggaHJlZj1cInJldmlld1wiPjxCdG4gcD17MH0+U2VlIHlvdXIgcmVzdWx0czwvQnRuPjwvYT5cbiAgICAgICAgPGJ1dHRvbiA+U2lnbiBhIFBldGl0aW9uPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gPkNvbnRhY3QgeW91ciBSZXA8L2J1dHRvbj5cblx0PC9kaXY+XG5cdDwvZGl2PlxuPEJhY2svPlxuPC9zZWN0aW9uPlxuPC9UcmFucz5cblxuPHN0eWxlPlxuICAgc2VjdGlvbntcblx0XHRcdHdpZHRoOjEwMHZ3O1xuXHRcdFx0aGVpZ2h0OiAxMDB2aDtcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1NzQxMTczMi0xNzk3YTkxNzFmY2Y/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTc1MCZxPTgwKTtcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdHBhZGRpbmctdG9wOiAxNXB4O1xuICAgfVxuICAgZGl2IHtcblx0d2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzg0MjREOyBcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA5LjN2aCA1dncgMHZoIDkuM3ZoO1xuICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgIH1cbiAgXG4gICBzdHJvbmcge1xuXHQgICBmb250LXdlaWdodDogNzAwO1xuXHQgICBmb250LXNpemU6IDIycHg7XG4gICB9XG4gICBcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BeUJ3QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F2QmxDLFFBQVEsR0FBRyxxQkFBcUI7O0NBUXRDLE9BQU87NkJBQ04sVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQztFQUM3QixXQUFXLENBQUMsR0FBRyxFQUFFLFlBQVk7OztDQUU5QixTQUFTLE9BQU8sV0FBVyxDQUFDLEdBQUcsRUFBRSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
