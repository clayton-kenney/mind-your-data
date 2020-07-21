import { H as writable, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, M as create_slot, r as createEventDispatcher, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, k as add_location, l as insert_dev, P as listen_dev, O as update_slot, C as transition_in, A as transition_out, Q as afterUpdate, R as onDestroy, T as onMount, u as globals, a as space, w as create_component, q as query_selector_all, c as claim_space, x as claim_component, y as mount_component, F as destroy_component, U as empty, G as group_outros, B as check_outros, j as attr_dev, n as noop, t as text, h as claim_text, m as append_dev, V as run_all } from './client.23098360.js';
import { T as TransHelp } from './TransHelp.a498c47a.js';

const count = writable(3);

/* src/components/complete.svelte generated by Svelte v3.23.2 */
const file = "src/components/complete.svelte";

function create_fragment(ctx) {
	let button;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[2].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);

	const block = {
		c: function create() {
			button = element("button");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", {});
			var button_nodes = children(button);
			if (default_slot) default_slot.l(button_nodes);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(button, file, 13, 0, 341);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*increment*/ ctx[0], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 2) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[1], dirty, null, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			if (default_slot) default_slot.d(detaching);
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

	function increment() {
		count.update(n => {
		});
	} //dispatch('message', {
	// question: $count, //Q-1 becaue of array

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Complete> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Complete", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		count,
		createEventDispatcher,
		dispatch,
		increment
	});

	return [increment, $$scope, $$slots];
}

class Complete extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Complete",
			options,
			id: create_fragment.name
		});
	}
}

/* src/routes/quiz/q1.svelte generated by Svelte v3.23.2 */

const { console: console_1, document: document_1 } = globals;
const file$1 = "src/routes/quiz/q1.svelte";

// (83:0) {:else}
function create_else_block(ctx) {
	let video_1;

	const block = {
		c: function create() {
			video_1 = element("video");
			this.h();
		},
		l: function claim(nodes) {
			video_1 = claim_element(nodes, "VIDEO", { autoplay: true, id: true });
			children(video_1).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			video_1.autoplay = "true";
			attr_dev(video_1, "id", "videoElement");
			add_location(video_1, file$1, 83, 4, 2921);
		},
		m: function mount(target, anchor) {
			insert_dev(target, video_1, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(video_1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(83:0) {:else}",
		ctx
	});

	return block;
}

// (75:15) 
function create_if_block_2(ctx) {
	let div;
	let video_1;
	let t0;
	let p0;
	let t1;
	let t2;
	let p1;
	let t3;
	let t4;
	let complete;
	let current;

	complete = new Complete({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			video_1 = element("video");
			t0 = space();
			p0 = element("p");
			t1 = text("Cover your webcam");
			t2 = space();
			p1 = element("p");
			t3 = text("You haven’t covered your webcame or did not do it properly. Please cover your webcam completely to proceed to the next step.");
			t4 = space();
			create_component(complete.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			video_1 = claim_element(div_nodes, "VIDEO", { autoplay: true, id: true });
			children(video_1).forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			p0 = claim_element(nodes, "P", { id: true, class: true });
			var p0_nodes = children(p0);
			t1 = claim_text(p0_nodes, "Cover your webcam");
			p0_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p1 = claim_element(nodes, "P", { id: true, class: true });
			var p1_nodes = children(p1);
			t3 = claim_text(p1_nodes, "You haven’t covered your webcame or did not do it properly. Please cover your webcam completely to proceed to the next step.");
			p1_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			claim_component(complete.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			video_1.autoplay = "true";
			attr_dev(video_1, "id", "videoElement");
			add_location(video_1, file$1, 75, 29, 2510);
			attr_dev(div, "class", "video-holder svelte-1sss75x");
			add_location(div, file$1, 75, 3, 2484);
			attr_dev(p0, "id", "alert");
			attr_dev(p0, "class", "svelte-1sss75x");
			add_location(p0, file$1, 76, 4, 2570);
			attr_dev(p1, "id", "not-covered");
			attr_dev(p1, "class", "svelte-1sss75x");
			add_location(p1, file$1, 77, 4, 2610);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, video_1);
			insert_dev(target, t0, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t3);
			insert_dev(target, t4, anchor);
			mount_component(complete, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const complete_changes = {};

			if (dirty & /*$$scope*/ 128) {
				complete_changes.$$scope = { dirty, ctx };
			}

			complete.$set(complete_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(complete.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(complete.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t4);
			destroy_component(complete, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(75:15) ",
		ctx
	});

	return block;
}

// (66:15) 
function create_if_block_1(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div;
	let button0;
	let t4;
	let t5;
	let button1;
	let t6;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Cover Your Webcam");
			t1 = space();
			p = element("p");
			t2 = text("Cover your webcam. You can get fancy removable stickers for this purpose, but for now, find a sticky note or piece of masking tape and cover your webcam when it’s not in use (like right now).");
			t3 = space();
			div = element("div");
			button0 = element("button");
			t4 = text("It's covered");
			t5 = space();
			button1 = element("button");
			t6 = text("No Thanks, It's a hassle");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Cover Your Webcam");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Cover your webcam. You can get fancy removable stickers for this purpose, but for now, find a sticky note or piece of masking tape and cover your webcam when it’s not in use (like right now).");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			button0 = claim_element(div_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t4 = claim_text(button0_nodes, "It's covered");
			button0_nodes.forEach(detach_dev);
			t5 = claim_space(div_nodes);
			button1 = claim_element(div_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t6 = claim_text(button1_nodes, "No Thanks, It's a hassle");
			button1_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file$1, 67, 1, 2060);
			add_location(p, file$1, 68, 1, 2088);
			attr_dev(button0, "class", "svelte-1sss75x");
			add_location(button0, file$1, 70, 8, 2325);
			attr_dev(button1, "class", "svelte-1sss75x");
			add_location(button1, file$1, 71, 8, 2382);
			attr_dev(div, "class", "button-holder svelte-1sss75x");
			add_location(div, file$1, 69, 1, 2289);
			add_location(section, file$1, 66, 0, 2049);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p);
			append_dev(p, t2);
			append_dev(section, t3);
			append_dev(section, div);
			append_dev(div, button0);
			append_dev(button0, t4);
			append_dev(div, t5);
			append_dev(div, button1);
			append_dev(button1, t6);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*advance*/ ctx[1], false, false, false),
					listen_dev(button1, "click", /*advanceTwo*/ ctx[2], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(66:15) ",
		ctx
	});

	return block;
}

// (60:0) {#if q==0}
function create_if_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let br;
	let t3;
	let t4;
	let button;
	let t5;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Is your Webcam Covered?");
			t1 = space();
			p = element("p");
			t2 = text("It’s likely your computer already has a built-in camera, and it’s possible for that camera to be used to spy on you.  ");
			br = element("br");
			t3 = text("  If your webcam for whatever reason has been hacked, the person on the other side can take pictures and video of anything or anyone. No, this isn’t just paranoia–a recent survey conducted by HP found that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.");
			t4 = space();
			button = element("button");
			t5 = text("Continue");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Is your Webcam Covered?");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "It’s likely your computer already has a built-in camera, and it’s possible for that camera to be used to spy on you.  ");
			br = claim_element(p_nodes, "BR", {});
			t3 = claim_text(p_nodes, "  If your webcam for whatever reason has been hacked, the person on the other side can take pictures and video of anything or anyone. No, this isn’t just paranoia–a recent survey conducted by HP found that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.");
			p_nodes.forEach(detach_dev);
			t4 = claim_space(section_nodes);
			button = claim_element(section_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t5 = claim_text(button_nodes, "Continue");
			button_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file$1, 61, 1, 1509);
			add_location(br, file$1, 62, 122, 1665);
			add_location(p, file$1, 62, 1, 1544);
			attr_dev(button, "class", "svelte-1sss75x");
			add_location(button, file$1, 63, 1, 1977);
			add_location(section, file$1, 60, 0, 1498);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p);
			append_dev(p, t2);
			append_dev(p, br);
			append_dev(p, t3);
			append_dev(section, t4);
			append_dev(section, button);
			append_dev(button, t5);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*advance*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
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
		source: "(60:0) {#if q==0}",
		ctx
	});

	return block;
}

// (80:4) <Complete>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Onwards to the next challenge");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Onwards to the next challenge");
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
		source: "(80:4) <Complete>",
		ctx
	});

	return block;
}

// (59:0) <Trans>
function create_default_slot(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_if_block_1, create_if_block_2, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*q*/ ctx[0] == 0) return 0;
		if (/*q*/ ctx[0] == 1) return 1;
		if (/*q*/ ctx[0] == 2) return 2;
		return 3;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(59:0) <Trans>",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-11mvzac\"]", document_1.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document_1.title = "Webcam Challenge";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope, q*/ 129) {
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
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();

	//confirm comletion of quiz to master quiz component
	function incomplete() {
		dispatch("message", {
			question: 0, //Q-1 becaue of array
			complete: "false"
		});
	}

	let q = 0;
	let isActive;

	function advance() {
		$$invalidate(0, q++, q);
		console.log(q);

		if ($$invalidate(0, q = 2)) {
			isActive = true;
		}
	}

	function advanceTwo() {
		$$invalidate(0, q += 2);
		console.log(q);
	}

	//Start Video on update
	let video;

	afterUpdate(async () => {
		video = document.querySelector("#videoElement");

		if (navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
				video.srcObject = stream;
			}).catch(function (err0r) {
				console.log("Not loaded");
			});
		}
	});

	//stop video function on end of component   
	onDestroy(async () => {

		video.srcObject = null;
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Q1> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q1", $$slots, []);

	$$self.$capture_state = () => ({
		createEventDispatcher,
		onMount,
		afterUpdate,
		onDestroy,
		Trans: TransHelp,
		Complete,
		count,
		dispatch,
		incomplete,
		q,
		isActive,
		advance,
		advanceTwo,
		video
	});

	$$self.$inject_state = $$props => {
		if ("q" in $$props) $$invalidate(0, q = $$props.q);
		if ("isActive" in $$props) isActive = $$props.isActive;
		if ("video" in $$props) video = $$props.video;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [q, advance, advanceTwo];
}

class Q1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q1",
			options,
			id: create_fragment$1.name
		});
	}
}

var q1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Q1
});

export { Q1 as Q, count as c, q1 as q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTEuMjc0M2UzMjQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdG9yZS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuZXhwb3J0IGNvbnN0IGNvdW50ID0gd3JpdGFibGUoMyk7IiwiPHNjcmlwdD5cbmltcG9ydCB7IGNvdW50IH0gZnJvbSAnLi4vc3RvcmUuanMnXG5pbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblxuZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuICAgICAgICBjb3VudC51cGRhdGUobiA9PiB7biArIDF9KVxuICAgICAgICAvL2Rpc3BhdGNoKCdtZXNzYWdlJywge1xuICAgICAgICAgICAvLyBxdWVzdGlvbjogJGNvdW50LCAvL1EtMSBiZWNhdWUgb2YgYXJyYXlcbiAgICAgICAgICAgLy8gY29tcGxldGU6ICd0cnVlJ1xuICAgICAgICAvL30pO1xuICAgIH1cbjwvc2NyaXB0PlxuPGJ1dHRvbiBvbjpjbGljaz17aW5jcmVtZW50fT5cbiAgICA8c2xvdD5cblxuICAgIDwvc2xvdD5cbjwvYnV0dG9uPlxuIiwiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuICAgIGltcG9ydCB7IG9uTW91bnQsIGFmdGVyVXBkYXRlLCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnO1xuICAgIGltcG9ydCBUcmFucyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RyYW5zSGVscC5zdmVsdGUnO1xuICAgIGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSdcbiAgICBpbXBvcnQgeyBjb3VudCB9IGZyb20gJy4uLy4uL3N0b3JlLmpzJ1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXG5cdC8vY29uZmlybSBjb21sZXRpb24gb2YgcXVpeiB0byBtYXN0ZXIgcXVpeiBjb21wb25lbnRcblx0XG5cdGZ1bmN0aW9uIGluY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMCwgLy9RLTEgYmVjYXVlIG9mIGFycmF5XG5cdFx0XHRjb21wbGV0ZTogJ2ZhbHNlJ1xuXHRcdH0pO1xuXHR9XG4gICAgbGV0IHEgPSAwO1xuICAgIGxldCBpc0FjdGl2ZTtcblx0ZnVuY3Rpb24gYWR2YW5jZSgpIHtcblx0XHRxKys7XG4gICAgICAgIGNvbnNvbGUubG9nKHEpO1xuICAgICAgICBpZiAocT0yKSB7XG4gICAgICAgICAgICBpc0FjdGl2ZT0gdHJ1ZTtcbiAgICAgICAgfVxuXHR9XG5cdGZ1bmN0aW9uIGFkdmFuY2VUd28oKSB7XG5cdFx0cSs9Mjtcblx0XHRjb25zb2xlLmxvZyhxKTtcbiAgICB9XG4gICAgXG4gICAgLy9TdGFydCBWaWRlbyBvbiB1cGRhdGVcbiAgICBsZXQgdmlkZW87XG5cdGFmdGVyVXBkYXRlKGFzeW5jKCkgPT4ge1xuXHR2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlkZW9FbGVtZW50XCIpO1xuXHRpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpIHtcbiAgXHRuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IHZpZGVvOiB0cnVlIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHN0cmVhbSkge1xuXHRcdFx0dmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIwcikge1xuICAgICAgY29uc29sZS5sb2coXCJOb3QgbG9hZGVkXCIpO1xuICAgIH0pO1xuXHRcdH1cbn0pXG4vL3N0b3AgdmlkZW8gZnVuY3Rpb24gb24gZW5kIG9mIGNvbXBvbmVudCAgIFxuICAgIG9uRGVzdHJveShhc3luYygpID0+IHsgXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BTdHJlYW1lZFZpZGVvKHZpZGVvKSB7IFxuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gdmlkZW8uc3JjT2JqZWN0O1xuICAgICAgICAgICAgY29uc3QgdHJhY2tzID0gc3RyZWFtLmdldFRyYWNrcygpO1xuICAgICAgICAgICAgICAgIHRyYWNrc1swXS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+V2ViY2FtIENoYWxsZW5nZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPFRyYW5zPlxueyNpZiBxPT0wfVxuPHNlY3Rpb24+XG5cdDxoMj5JcyB5b3VyIFdlYmNhbSBDb3ZlcmVkPzwvaDI+IFxuXHQ8cD5JdOKAmXMgbGlrZWx5IHlvdXIgY29tcHV0ZXIgYWxyZWFkeSBoYXMgYSBidWlsdC1pbiBjYW1lcmEsIGFuZCBpdOKAmXMgcG9zc2libGUgZm9yIHRoYXQgY2FtZXJhIHRvIGJlIHVzZWQgdG8gc3B5IG9uIHlvdS4gIDxicj4gIElmIHlvdXIgd2ViY2FtIGZvciB3aGF0ZXZlciByZWFzb24gaGFzIGJlZW4gaGFja2VkLCB0aGUgcGVyc29uIG9uIHRoZSBvdGhlciBzaWRlIGNhbiB0YWtlIHBpY3R1cmVzIGFuZCB2aWRlbyBvZiBhbnl0aGluZyBvciBhbnlvbmUuIE5vLCB0aGlzIGlzbuKAmXQganVzdCBwYXJhbm9pYeKAk2EgcmVjZW50IHN1cnZleSBjb25kdWN0ZWQgYnkgSFAgZm91bmQgdGhhdCAxMCUgaW4gdGhlIFUuUy4gZWl0aGVyIGtub3cgc29tZW9uZSB3aG9zZSB3ZWJjYW0gd2FzIGhhY2tlZCBvciBoYXZlIGhhZCB0aGVpciBvd24gd2ViY2FtIGhhY2tlZC48L3A+XG5cdDxidXR0b24gb246Y2xpY2s9e2FkdmFuY2V9PkNvbnRpbnVlPC9idXR0b24+XG48L3NlY3Rpb24+XG57OmVsc2UgaWYgcT09MX1cbjxzZWN0aW9uPlxuXHQ8aDI+Q292ZXIgWW91ciBXZWJjYW08L2gyPlxuXHQ8cD5Db3ZlciB5b3VyIHdlYmNhbS4gWW91IGNhbiBnZXQgZmFuY3kgcmVtb3ZhYmxlIHN0aWNrZXJzIGZvciB0aGlzIHB1cnBvc2UsIGJ1dCBmb3Igbm93LCBmaW5kIGEgc3RpY2t5IG5vdGUgb3IgcGllY2Ugb2YgbWFza2luZyB0YXBlIGFuZCBjb3ZlciB5b3VyIHdlYmNhbSB3aGVuIGl04oCZcyBub3QgaW4gdXNlIChsaWtlIHJpZ2h0IG5vdykuIDwvcD5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBvbjpjbGljaz17YWR2YW5jZX0+SXQncyBjb3ZlcmVkPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb246Y2xpY2s9e2FkdmFuY2VUd299Pk5vIFRoYW5rcywgSXQncyBhIGhhc3NsZTwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbns6ZWxzZSBpZiBxPT0yfVxuICAgPGRpdiBjbGFzcz1cInZpZGVvLWhvbGRlclwiPjx2aWRlbyBhdXRvcGxheT1cInRydWVcIiBpZD1cInZpZGVvRWxlbWVudFwiPjwvdmlkZW8+PC9kaXY+XG4gICAgPHAgaWQ9XCJhbGVydFwiPkNvdmVyIHlvdXIgd2ViY2FtPC9wPlxuICAgIDxwIGlkPVwibm90LWNvdmVyZWRcIj5Zb3UgaGF2ZW7igJl0IGNvdmVyZWQgeW91ciB3ZWJjYW1lIG9yIGRpZCBub3QgZG8gaXQgcHJvcGVybHkuIFBsZWFzZSBjb3ZlciB5b3VyIHdlYmNhbSBjb21wbGV0ZWx5IHRvIHByb2NlZWQgdG8gdGhlIG5leHQgc3RlcC48L3A+XG4gICAgPCEtLTxidXR0b24gb246Y2xpY2s9e2luY29tcGxldGV9Pk9ud2FyZHMgdG8gdGhlIG5leHQgY2hhbGxlbmdlPC9idXR0b24+IC0tPlxuICAgIDxDb21wbGV0ZT5cbiAgICAgICAgT253YXJkcyB0byB0aGUgbmV4dCBjaGFsbGVuZ2VcbiAgICA8L0NvbXBsZXRlPlxuezplbHNlfVxuICAgIDx2aWRlbyBhdXRvcGxheT1cInRydWVcIiBpZD1cInZpZGVvRWxlbWVudFwiPjwvdmlkZW8+XG57L2lmfVxuPC9UcmFucz5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgLnZpZGVvLWhvbGRlcntcbiAgICAgICB3aWR0aDogMTAwJTtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuICAgI2FsZXJ0IHtcbiAgICAgICBjb2xvcjogcmVkO1xuICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgIH1cbiAgICNub3QtY292ZXJlZCB7XG4gICAgICAgY29sb3I6IHJlZDtcbiAgICAgICBiYWNrZ3JvdW5kOiAjRkZFRUVFO1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICBib3JkZXI6IG5vbmU7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDWSxNQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dEQ1liLEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FWckIsUUFBUSxHQUFHLHFCQUFxQjs7VUFFN0IsU0FBUztFQUNWLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0NnRUksR0FBTztpREFDUCxHQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBUmpCLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSnJCLEdBQUMsT0FBRSxDQUFDO1lBTUMsR0FBQyxPQUFFLENBQUM7WUFTSixHQUFDLE9BQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXBFUCxRQUFRLEdBQUcscUJBQXFCOzs7VUFJN0IsVUFBVTtFQUNsQixRQUFRLENBQUMsU0FBUztHQUNqQixRQUFRLEVBQUUsQ0FBQztHQUNYLFFBQVEsRUFBRSxPQUFPOzs7O0tBR1osQ0FBQyxHQUFHLENBQUM7S0FDTCxRQUFROztVQUNOLE9BQU87a0JBQ2YsQ0FBQztFQUNLLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7c0JBQ1QsQ0FBQyxHQUFDLENBQUM7R0FDSCxRQUFRLEdBQUUsSUFBSTs7OztVQUdoQixVQUFVO2tCQUNsQixDQUFDLElBQUUsQ0FBQztFQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7OztLQUlQLEtBQUs7O0NBQ1osV0FBVztFQUNYLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWU7O01BQzFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWTtHQUNyQyxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxLQUFLLEVBQUUsSUFBSSxJQUMvQyxJQUFJLFdBQVcsTUFBTTtJQUN2QixLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU07TUFFdEIsS0FBSyxXQUFXLEtBQUs7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZOzs7Ozs7Q0FLMUIsU0FBUzs7RUFPRyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
