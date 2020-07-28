import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, x as claim_component, l as insert_dev, y as mount_component, B as transition_in, z as transition_out, E as destroy_component, e as element, f as claim_element, g as children, j as attr_dev, k as add_location, t as text, h as claim_text, m as append_dev, n as noop, T as listen_dev } from './client.d20f7554.js';
import './index.cccde779.js';
import './index.01b49c54.js';
import { T as TransHelp } from './TransHelp.7da40846.js';

/* src/routes/quiz.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz.svelte";

// (17:4) {:else}
function create_else_block(ctx) {
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
	let button0;
	let a0;
	let t6;
	let t7;
	let button1;
	let a1;
	let t8;

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
			button0 = element("button");
			a0 = element("a");
			t6 = text("cancel");
			t7 = space();
			button1 = element("button");
			a1 = element("a");
			t8 = text("Agree");
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
			button0 = claim_element(section_nodes, "BUTTON", {});
			var button0_nodes = children(button0);
			a0 = claim_element(button0_nodes, "A", { rel: true, href: true });
			var a0_nodes = children(a0);
			t6 = claim_text(a0_nodes, "cancel");
			a0_nodes.forEach(detach_dev);
			button0_nodes.forEach(detach_dev);
			t7 = claim_space(section_nodes);
			button1 = claim_element(section_nodes, "BUTTON", { id: true });
			var button1_nodes = children(button1);
			a1 = claim_element(button1_nodes, "A", { rel: true, href: true });
			var a1_nodes = children(a1);
			t8 = claim_text(a1_nodes, "Agree");
			a1_nodes.forEach(detach_dev);
			button1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 18, 8, 798);
			add_location(p, file, 19, 8, 851);
			add_location(h2, file, 21, 8, 1274);
			attr_dev(a0, "rel", "prefetch");
			attr_dev(a0, "href", ".");
			add_location(a0, file, 23, 12, 1351);
			add_location(button0, file, 22, 8, 1330);
			attr_dev(a1, "rel", "prefetch");
			attr_dev(a1, "href", "quizmain");
			add_location(a1, file, 25, 27, 1436);
			attr_dev(button1, "id", "agree");
			add_location(button1, file, 25, 8, 1417);
			attr_dev(section, "class", "svelte-8tljur");
			add_location(section, file, 17, 4, 780);
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
			append_dev(section, button0);
			append_dev(button0, a0);
			append_dev(a0, t6);
			append_dev(section, t7);
			append_dev(section, button1);
			append_dev(button1, a1);
			append_dev(a1, t8);
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
		source: "(17:4) {:else}",
		ctx
	});

	return block;
}

// (10:4) {#if !active}
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
			button = claim_element(section_nodes, "BUTTON", {});
			var button_nodes = children(button);
			t4 = claim_text(button_nodes, "Start Challenge");
			button_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 11, 8, 204);
			add_location(p, file, 12, 8, 257);
			add_location(button, file, 14, 8, 680);
			attr_dev(section, "class", "svelte-8tljur");
			add_location(section, file, 10, 4, 186);
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
				dispose = listen_dev(button, "click", /*click_handler*/ ctx[1], false, false, false);
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
		source: "(10:4) {#if !active}",
		ctx
	});

	return block;
}

// (8:0) <Trans>
function create_default_slot(ctx) {
	let main;

	function select_block_type(ctx, dirty) {
		if (!/*active*/ ctx[0]) return create_if_block;
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
			attr_dev(main, "class", "svelte-8tljur");
			add_location(main, file, 8, 0, 157);
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
		source: "(8:0) <Trans>",
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

			if (dirty & /*$$scope, active*/ 5) {
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
	let active;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Quiz> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Quiz", $$slots, []);
	const click_handler = () => $$invalidate(0, active = !active);
	$$self.$capture_state = () => ({ Trans: TransHelp, active });

	$$self.$inject_state = $$props => {
		if ("active" in $$props) $$invalidate(0, active = $$props.active);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [active, click_handler];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei4yOTM0NzQyZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9xdWl6LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgVHJhbnMgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlJ1xuICBsZXQgYWN0aXZlO1xuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5EYXRhIHByaXZhY3kgcXVpejwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPFRyYW5zPlxuPG1haW4+XG4gICAgeyNpZiAhYWN0aXZlfVxuICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDE+V2VsY29tZSB0byBNaW5kIFlvdXIgRGF0YSBDaGFsbGVuZ2U8L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIE9ubHkgZm9yIGVkdWNhdGlvbmFsIHB1cnBvc2UsIHRoaXMgdGVzdCB3aWxsIHV0aWxpemUgYmxhaCBibGFoIGJsYWguIFRoZXJlIHdpbGwgYmUgbm8gcGVyc29uYWwgZGF0YSBjb2xsZWN0ZWQgb3Igc2hhcmVkLi4uIFRoaXMgdGVzdCB3aWxsIG9ubHkgIGJsYWggYmxhaCBibGFoIGFuZCB1dGlsaXplIGJsYWggYmxhaCBibGFoLiBUaGVyZSB3aWxsIGJlIG5vIGRhdGEuLi4gVGhpcyB0ZXN0IHdpbGwgb25seSBkbyBibGFoIGJsYWggYmxhaCBhbmQgdXRpbGl6ZSBibGFoIGJsYWggYmxhaC4gVGhlcmUgd2lsbCBiZSBubyBkYXRhLi4uIFRoaXMgdGVzdCB3aWxsIG9ubHkgZG8gYmxhaCBibGFoIGJsYWggYW5kIHV0aWxpemUgYmxhaCBibGFoIGJsYWguIFRoZXJlIHdpbGwgYmUgbm8gZGF0YS4uLiA8L3A+XG4gICAgICAgIDxidXR0b24gb246Y2xpY2s9J3soKSA9PiBhY3RpdmUgPSAhYWN0aXZlfSc+U3RhcnQgQ2hhbGxlbmdlPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPlxuICAgIHs6ZWxzZX1cbiAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxPldlbGNvbWUgdG8gTWluZCBZb3VyIERhdGEgQ2hhbGxlbmdlPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICBPbmx5IGZvciBlZHVjYXRpb25hbCBwdXJwb3NlLCB0aGlzIHRlc3Qgd2lsbCB1dGlsaXplIGJsYWggYmxhaCBibGFoLiBUaGVyZSB3aWxsIGJlIG5vIHBlcnNvbmFsIGRhdGEgY29sbGVjdGVkIG9yIHNoYXJlZC4uLiBUaGlzIHRlc3Qgd2lsbCBvbmx5ICBibGFoIGJsYWggYmxhaCBhbmQgdXRpbGl6ZSBibGFoIGJsYWggYmxhaC4gVGhlcmUgd2lsbCBiZSBubyBkYXRhLi4uIFRoaXMgdGVzdCB3aWxsIG9ubHkgZG8gYmxhaCBibGFoIGJsYWggYW5kIHV0aWxpemUgYmxhaCBibGFoIGJsYWguIFRoZXJlIHdpbGwgYmUgbm8gZGF0YS4uLiBUaGlzIHRlc3Qgd2lsbCBvbmx5IGRvIGJsYWggYmxhaCBibGFoIGFuZCB1dGlsaXplIGJsYWggYmxhaCBibGFoLiBUaGVyZSB3aWxsIGJlIG5vIGRhdGEuLi4gPC9wPlxuICAgICAgICA8aDI+dGhpcyBzaG91bGQgZ2V0IGNvbnZlcnRlZCBpbnRvIGEgbW9kYWw8L2gyPlxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgPGEgcmVsPXByZWZldGNoIGhyZWY9Jy4nPmNhbmNlbDwvYT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYWdyZWVcIj48YSByZWw9cHJlZmV0Y2ggaHJlZj0ncXVpem1haW4nID5BZ3JlZTwvYT48L2J1dHRvbj5cbiAgICA8L3NlY3Rpb24+XG4gICAgey9pZn1cbjwvVHJhbnM+XG48c3R5bGU+XG4gICAgbWFpbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICB9XG4gICAgICAgLnN0ZXB7XG5cdFx0bWFyZ2luLWJvdHRvbTogNTVweDtcbiAgICAgICB9XG4gICAgICAgc2VjdGlvbntcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzM4NDI0RDtcbiAgICAgICAgICAgICAgd2lkdGg6IDY1dnc7XG4gICAgICAgICAgICAgIGhlaWdodDogNzV2aDtcbiAgICAgICAgICAgICAgLypoZWlnaHQ6IDg2dmg7ICovXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogOS4zdmggNXZ3IDB2aCA5LjN2aDtcbiAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgLyptYXJnaW4tdG9wOiAtNTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIxdnc7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDsqL1xuICAgICAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFTVSxHQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVBWLE1BQU07Ozs7Ozs7Ozs2Q0FZcUIsTUFBTSxJQUFJLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
