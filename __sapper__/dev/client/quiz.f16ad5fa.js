import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a2 as subscribe, a as space, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, x as claim_component, l as insert_dev, y as mount_component, B as transition_in, z as transition_out, E as destroy_component, n as noop, K as set_store_value, e as element, f as claim_element, g as children, j as attr_dev, k as add_location, t as text, h as claim_text, m as append_dev, T as listen_dev } from './client.4d2ddc14.js';
import './index.cccde779.js';
import './index.01b49c54.js';
import { T as TransHelp } from './TransHelp.8f30ea0b.js';

/* src/routes/quiz.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz.svelte";

// (28:4) {:else}
function create_else_block(ctx) {
	let section;
	let h1;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let p1;
	let t4;
	let t5;
	let button;
	let a;
	let t6;

	const block = {
		c: function create() {
			section = element("section");
			h1 = element("h1");
			t0 = text("Chapter 1: Security");
			t1 = space();
			p0 = element("p");
			t2 = text("Through out this challenge, we need your permission to give us one time non-recurring access to your webcam to test your practice.");
			t3 = space();
			p1 = element("p");
			t4 = text("Please click allow for one time non-recurring access to your webcame to move to the next step to complete this challenge.");
			t5 = space();
			button = element("button");
			a = element("a");
			t6 = text("Start Challenge");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			h1 = claim_element(section_nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Chapter 1: Security");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Through out this challenge, we need your permission to give us one time non-recurring access to your webcam to test your practice.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "Please click allow for one time non-recurring access to your webcame to move to the next step to complete this challenge.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			button = claim_element(section_nodes, "BUTTON", { id: true, class: true });
			var button_nodes = children(button);
			a = claim_element(button_nodes, "A", { rel: true, href: true });
			var a_nodes = children(a);
			t6 = claim_text(a_nodes, "Start Challenge");
			a_nodes.forEach(detach_dev);
			button_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 29, 8, 1501);
			add_location(p0, file, 30, 8, 1538);
			add_location(p1, file, 31, 8, 1684);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", "quizmain");
			add_location(a, file, 32, 27, 1840);
			attr_dev(button, "id", "start");
			attr_dev(button, "class", "svelte-1gme2nj");
			add_location(button, file, 32, 8, 1821);
			attr_dev(section, "class", "svelte-1gme2nj");
			add_location(section, file, 28, 4, 1483);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h1);
			append_dev(h1, t0);
			append_dev(section, t1);
			append_dev(section, p0);
			append_dev(p0, t2);
			append_dev(section, t3);
			append_dev(section, p1);
			append_dev(p1, t4);
			append_dev(section, t5);
			append_dev(section, button);
			append_dev(button, a);
			append_dev(a, t6);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(28:4) {:else}",
		ctx
	});

	return block;
}

// (18:26) 
function create_if_block_1(ctx) {
	let section;
	let h1;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let h2;
	let t4;
	let t5;
	let button1;
	let button0;
	let t6;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			section = element("section");
			h1 = element("h1");
			t0 = text("Welcome to Mind Your Data Challenge");
			t1 = space();
			p = element("p");
			t2 = text("Only for educational purpose, this test will utilize blah blah blah. There will be no personal data collected or shared... This test will only  blah blah blah and utilize blah blah blah. There will be no data... This test will only do blah blah blah and utilize blah blah blah. There will be no data... This test will only do blah blah blah and utilize blah blah blah. There will be no data...");
			t3 = space();
			h2 = element("h2");
			t4 = text("this should get converted into a modal");
			t5 = space();
			button1 = element("button");
			button0 = element("button");
			t6 = text("Continue");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			h1 = claim_element(section_nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Welcome to Mind Your Data Challenge");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Only for educational purpose, this test will utilize blah blah blah. There will be no personal data collected or shared... This test will only  blah blah blah and utilize blah blah blah. There will be no data... This test will only do blah blah blah and utilize blah blah blah. There will be no data... This test will only do blah blah blah and utilize blah blah blah. There will be no data...");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t4 = claim_text(h2_nodes, "this should get converted into a modal");
			h2_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			button1 = claim_element(section_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			button0 = claim_element(button1_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t6 = claim_text(button0_nodes, "Continue");
			button0_nodes.forEach(detach_dev);
			button1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 19, 8, 835);
			add_location(p, file, 20, 8, 888);
			add_location(h2, file, 22, 8, 1311);
			attr_dev(button0, "class", "svelte-1gme2nj");
			add_location(button0, file, 25, 8, 1396);
			attr_dev(button1, "class", "svelte-1gme2nj");
			add_location(button1, file, 23, 8, 1367);
			attr_dev(section, "class", "svelte-1gme2nj");
			add_location(section, file, 18, 4, 817);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h1);
			append_dev(h1, t0);
			append_dev(section, t1);
			append_dev(section, p);
			append_dev(p, t2);
			append_dev(section, t3);
			append_dev(section, h2);
			append_dev(h2, t4);
			append_dev(section, t5);
			append_dev(section, button1);
			append_dev(button1, button0);
			append_dev(button0, t6);

			if (!mounted) {
				dispose = listen_dev(button0, "click", /*click_handler_1*/ ctx[3], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(18:26) ",
		ctx
	});

	return block;
}

// (11:4) {#if $part === 0}
function create_if_block(ctx) {
	let section;
	let h1;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let button;
	let t4;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			section = element("section");
			h1 = element("h1");
			t0 = text("Welcome to Mind Your Data Challenge");
			t1 = space();
			p = element("p");
			t2 = text("Only for educational purpose, this test will utilize blah blah blah. There will be no personal data collected or shared... This test will only  blah blah blah and utilize blah blah blah. There will be no data... This test will only do blah blah blah and utilize blah blah blah. There will be no data... This test will only do blah blah blah and utilize blah blah blah. There will be no data...");
			t3 = space();
			button = element("button");
			t4 = text("Start Challenge");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			h1 = claim_element(section_nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Welcome to Mind Your Data Challenge");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Only for educational purpose, this test will utilize blah blah blah. There will be no personal data collected or shared... This test will only  blah blah blah and utilize blah blah blah. There will be no data... This test will only do blah blah blah and utilize blah blah blah. There will be no data... This test will only do blah blah blah and utilize blah blah blah. There will be no data...");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			button = claim_element(section_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t4 = claim_text(button_nodes, "Start Challenge");
			button_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 12, 8, 233);
			add_location(p, file, 13, 8, 286);
			attr_dev(button, "class", "svelte-1gme2nj");
			add_location(button, file, 15, 8, 709);
			attr_dev(section, "class", "svelte-1gme2nj");
			add_location(section, file, 11, 4, 215);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h1);
			append_dev(h1, t0);
			append_dev(section, t1);
			append_dev(section, p);
			append_dev(p, t2);
			append_dev(section, t3);
			append_dev(section, button);
			append_dev(button, t4);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(11:4) {#if $part === 0}",
		ctx
	});

	return block;
}

// (9:0) <Trans>
function create_default_slot(ctx) {
	let main;

	function select_block_type(ctx, dirty) {
		if (/*$part*/ ctx[1] === 0) return create_if_block;
		if (/*$part*/ ctx[1] === 1) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			main = element("main");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			if_block.l(main_nodes);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(main, "class", "svelte-1gme2nj");
			add_location(main, file, 9, 0, 182);
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			if_block.m(main, null);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(main, null);
				}
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(main);
			if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(9:0) <Trans>",
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1tak1mj\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Data privacy quiz";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope, $part*/ 34) {
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
	let $part,
		$$unsubscribe_part = noop,
		$$subscribe_part = () => ($$unsubscribe_part(), $$unsubscribe_part = subscribe(part, $$value => $$invalidate(1, $part = $$value)), part);

	$$self.$$.on_destroy.push(() => $$unsubscribe_part());
	let current = initial;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Quiz> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Quiz", $$slots, []);
	const click_handler = () => set_store_value(part, $part = 1);
	const click_handler_1 = () => set_store_value(part, $part = 2);
	$$self.$capture_state = () => ({ Trans: TransHelp, current, part, $part });

	$$self.$inject_state = $$props => {
		if ("current" in $$props) current = $$props.current;
		if ("part" in $$props) $$subscribe_part($$invalidate(0, part = $$props.part));
	};

	let part;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	 $$subscribe_part($$invalidate(0, part = 0));
	return [part, $part, click_handler, click_handler_1];
}

class Quiz extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Quiz",
			options,
			id: create_fragment.name
		});
	}
}

export default Quiz;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5mMTZhZDVmYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9xdWl6LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgVHJhbnMgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlJ1xuICAkOnBhcnQgPSAwO1xuICBsZXQgY3VycmVudCA9IGluaXRpYWw7XG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkRhdGEgcHJpdmFjeSBxdWl6PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48VHJhbnM+XG48bWFpbj5cbiAgICB7I2lmICRwYXJ0ID09PSAwfVxuICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDE+V2VsY29tZSB0byBNaW5kIFlvdXIgRGF0YSBDaGFsbGVuZ2U8L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIE9ubHkgZm9yIGVkdWNhdGlvbmFsIHB1cnBvc2UsIHRoaXMgdGVzdCB3aWxsIHV0aWxpemUgYmxhaCBibGFoIGJsYWguIFRoZXJlIHdpbGwgYmUgbm8gcGVyc29uYWwgZGF0YSBjb2xsZWN0ZWQgb3Igc2hhcmVkLi4uIFRoaXMgdGVzdCB3aWxsIG9ubHkgIGJsYWggYmxhaCBibGFoIGFuZCB1dGlsaXplIGJsYWggYmxhaCBibGFoLiBUaGVyZSB3aWxsIGJlIG5vIGRhdGEuLi4gVGhpcyB0ZXN0IHdpbGwgb25seSBkbyBibGFoIGJsYWggYmxhaCBhbmQgdXRpbGl6ZSBibGFoIGJsYWggYmxhaC4gVGhlcmUgd2lsbCBiZSBubyBkYXRhLi4uIFRoaXMgdGVzdCB3aWxsIG9ubHkgZG8gYmxhaCBibGFoIGJsYWggYW5kIHV0aWxpemUgYmxhaCBibGFoIGJsYWguIFRoZXJlIHdpbGwgYmUgbm8gZGF0YS4uLiA8L3A+XG4gICAgICAgIDxidXR0b24gb246Y2xpY2s9J3soKSA9PiAkcGFydCA9IDF9Jz5TdGFydCBDaGFsbGVuZ2U8L2J1dHRvbj5cbiAgICA8L3NlY3Rpb24+XG4gICAgezplbHNlIGlmICRwYXJ0ID09PSAxfVxuICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDE+V2VsY29tZSB0byBNaW5kIFlvdXIgRGF0YSBDaGFsbGVuZ2U8L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIE9ubHkgZm9yIGVkdWNhdGlvbmFsIHB1cnBvc2UsIHRoaXMgdGVzdCB3aWxsIHV0aWxpemUgYmxhaCBibGFoIGJsYWguIFRoZXJlIHdpbGwgYmUgbm8gcGVyc29uYWwgZGF0YSBjb2xsZWN0ZWQgb3Igc2hhcmVkLi4uIFRoaXMgdGVzdCB3aWxsIG9ubHkgIGJsYWggYmxhaCBibGFoIGFuZCB1dGlsaXplIGJsYWggYmxhaCBibGFoLiBUaGVyZSB3aWxsIGJlIG5vIGRhdGEuLi4gVGhpcyB0ZXN0IHdpbGwgb25seSBkbyBibGFoIGJsYWggYmxhaCBhbmQgdXRpbGl6ZSBibGFoIGJsYWggYmxhaC4gVGhlcmUgd2lsbCBiZSBubyBkYXRhLi4uIFRoaXMgdGVzdCB3aWxsIG9ubHkgZG8gYmxhaCBibGFoIGJsYWggYW5kIHV0aWxpemUgYmxhaCBibGFoIGJsYWguIFRoZXJlIHdpbGwgYmUgbm8gZGF0YS4uLiA8L3A+XG4gICAgICAgIDxoMj50aGlzIHNob3VsZCBnZXQgY29udmVydGVkIGludG8gYSBtb2RhbDwvaDI+XG4gICAgICAgIDxidXR0b24+XG4gICAgICAgICAgIFxuICAgICAgICA8YnV0dG9uIG9uOmNsaWNrPSd7KCkgPT4gJHBhcnQgPSAyfSc+Q29udGludWU8L2J1dHRvbj5cbiAgICA8L3NlY3Rpb24+XG4gICAgezplbHNlfSBcbiAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxPkNoYXB0ZXIgMTogU2VjdXJpdHk8L2gxPlxuICAgICAgICA8cD5UaHJvdWdoIG91dCB0aGlzIGNoYWxsZW5nZSwgd2UgbmVlZCB5b3VyIHBlcm1pc3Npb24gdG8gZ2l2ZSB1cyBvbmUgdGltZSBub24tcmVjdXJyaW5nIGFjY2VzcyB0byB5b3VyIHdlYmNhbSB0byB0ZXN0IHlvdXIgcHJhY3RpY2UuPC9wPlxuICAgICAgICA8cD5QbGVhc2UgY2xpY2sgYWxsb3cgZm9yIG9uZSB0aW1lIG5vbi1yZWN1cnJpbmcgYWNjZXNzIHRvIHlvdXIgd2ViY2FtZSB0byBtb3ZlIHRvIHRoZSBuZXh0IHN0ZXAgdG8gY29tcGxldGUgdGhpcyBjaGFsbGVuZ2UuPC9wPlxuICAgICAgICA8YnV0dG9uIGlkPVwic3RhcnRcIj48YSByZWw9cHJlZmV0Y2ggaHJlZj0ncXVpem1haW4nID5TdGFydCBDaGFsbGVuZ2U8L2E+PC9idXR0b24+XG4gICAgPC9zZWN0aW9uPlxuICAgIHsvaWZ9XG4gICAgPC9tYWluPlxuPC9UcmFucz5cbjxzdHlsZT5cbiAgICBtYWluIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgIH1cbiAgICAgICAuc3RlcHtcblx0XHRtYXJnaW4tYm90dG9tOiA1NXB4O1xuICAgICAgIH1cbiAgICAgICBzZWN0aW9ue1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzg0MjREO1xuICAgICAgICAgICAgICB3aWR0aDogNjV2dztcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3NXZoO1xuICAgICAgICAgICAgICAvKmhlaWdodDogODZ2aDsgKi9cbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA5LjN2aCA1dncgMHZoIDkuM3ZoO1xuICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAvKm1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjF2dztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4OyovXG4gICAgICAgfVxuICAgICAgIGJ1dHRvbntcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHRcdG1hcmdpbjogMTBweDtcblx0XHRib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICBcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBVVMsR0FBSyxRQUFLLENBQUM7Z0JBT04sR0FBSyxRQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FkbkIsT0FBTyxHQUFHLE9BQU87Ozs7Ozs7OzttREFZVSxLQUFLLEdBQUcsQ0FBQztxREFVVCxLQUFLLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7bUNBdkJ0QyxJQUFJLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
