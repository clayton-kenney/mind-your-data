import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, N as create_slot, v as validate_slots, u as globals, e as element, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, T as listen_dev, Q as update_slot, B as transition_in, z as transition_out, o as validate_store, p as component_subscribe, U as onMount, V as afterUpdate, W as beforeUpdate, X as onDestroy, a as space, w as create_component, q as query_selector_all, c as claim_space, x as claim_component, y as mount_component, E as destroy_component, P as set_store_value, M as empty, G as group_outros, A as check_outros, n as noop, t as text, h as claim_text, m as append_dev } from './client.c2c77aa7.js';
import './index.42fd54b0.js';
import { T as TransHelp, C as Complete } from './complete.8e61663e.js';
import { s as step, c as count, q as quizSteps } from './store.db71a637.js';

/* src/components/Next.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/components/Next.svelte";

function create_fragment(ctx) {
	let button;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	const block = {
		c: function create() {
			button = element("button");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			if (default_slot) default_slot.l(button_nodes);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "svelte-7cbo9q");
			add_location(button, file, 8, 0, 178);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler*/ ctx[4], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
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
	let { num = 1 } = $$props;

	function increase(num) {
		step.update(n => n += num);
		console.log(step);
	}

	const writable_props = ["num"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Next> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Next", $$slots, ['default']);
	const click_handler = () => increase(num);

	$$self.$set = $$props => {
		if ("num" in $$props) $$invalidate(0, num = $$props.num);
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({ step, num, increase });

	$$self.$inject_state = $$props => {
		if ("num" in $$props) $$invalidate(0, num = $$props.num);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [num, increase, $$scope, $$slots, click_handler];
}

class Next extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { num: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Next",
			options,
			id: create_fragment.name
		});
	}

	get num() {
		throw new Error("<Next>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set num(value) {
		throw new Error("<Next>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/quiz/q1.svelte generated by Svelte v3.23.2 */

const { console: console_1$1, document: document_1 } = globals;
const file$1 = "src/routes/quiz/q1.svelte";

// (69:0) {:else}
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
			add_location(video_1, file$1, 69, 4, 2700);
		},
		m: function mount(target, anchor) {
			insert_dev(target, video_1, anchor);
		},
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
		source: "(69:0) {:else}",
		ctx
	});

	return block;
}

// (61:19) 
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
				$$slots: { default: [create_default_slot_4] },
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
			add_location(video_1, file$1, 61, 29, 2289);
			attr_dev(div, "class", "video-holder svelte-1sss75x");
			add_location(div, file$1, 61, 3, 2263);
			attr_dev(p0, "id", "alert");
			attr_dev(p0, "class", "svelte-1sss75x");
			add_location(p0, file$1, 62, 4, 2349);
			attr_dev(p1, "id", "not-covered");
			attr_dev(p1, "class", "svelte-1sss75x");
			add_location(p1, file$1, 63, 4, 2389);
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
		source: "(61:19) ",
		ctx
	});

	return block;
}

// (52:19) 
function create_if_block_1(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div;
	let next0;
	let t4;
	let next1;
	let current;

	next0 = new Next({
			props: {
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	next1 = new Next({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

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
			create_component(next0.$$.fragment);
			t4 = space();
			create_component(next1.$$.fragment);
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
			claim_component(next0.$$.fragment, div_nodes);
			t4 = claim_space(div_nodes);
			claim_component(next1.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file$1, 53, 1, 1855);
			add_location(p, file$1, 54, 1, 1883);
			attr_dev(div, "class", "button-holder svelte-1sss75x");
			add_location(div, file$1, 55, 1, 2084);
			add_location(section, file$1, 52, 0, 1844);
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
			mount_component(next0, div, null);
			append_dev(div, t4);
			mount_component(next1, div, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(next0.$$.fragment, local);
			transition_in(next1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(next0.$$.fragment, local);
			transition_out(next1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(next0);
			destroy_component(next1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(52:19) ",
		ctx
	});

	return block;
}

// (44:0) {#if $step==0}
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
	let next;
	let current;

	next = new Next({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

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
			create_component(next.$$.fragment);
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
			claim_component(next.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file$1, 45, 1, 1303);
			add_location(br, file$1, 46, 125, 1462);
			add_location(p, file$1, 46, 4, 1341);
			add_location(section, file$1, 44, 0, 1292);
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
			mount_component(next, section, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(next.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(next.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(next);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(44:0) {#if $step==0}",
		ctx
	});

	return block;
}

// (66:4) <Complete>
function create_default_slot_4(ctx) {
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
		id: create_default_slot_4.name,
		type: "slot",
		source: "(66:4) <Complete>",
		ctx
	});

	return block;
}

// (57:8) <Next>
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("It's covered");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "It's covered");
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
		id: create_default_slot_3.name,
		type: "slot",
		source: "(57:8) <Next>",
		ctx
	});

	return block;
}

// (58:8) <Next>
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("No Thanks, It's a hassle");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "No Thanks, It's a hassle");
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
		id: create_default_slot_2.name,
		type: "slot",
		source: "(58:8) <Next>",
		ctx
	});

	return block;
}

// (48:4) <Next>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Continue");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Continue");
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
		source: "(48:4) <Next>",
		ctx
	});

	return block;
}

// (42:0) <Trans>
function create_default_slot(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_if_block_1, create_if_block_2, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*$step*/ ctx[0] == 0) return 0;
		if (/*$step*/ ctx[0] == 1) return 1;
		if (/*$step*/ ctx[0] == 2) return 2;
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

			if (current_block_type_index !== previous_block_index) {
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
		source: "(42:0) <Trans>",
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

			if (dirty & /*$$scope, $step*/ 17) {
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
	let $quizSteps;
	let $count;
	let $step;
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(2, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(3, $count = $$value));
	validate_store(step, "step");
	component_subscribe($$self, step, $$value => $$invalidate(0, $step = $$value));

	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
	});

	//Start Video on update
	let video;

	afterUpdate(async () => {
		console.log(step);
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
	afterUpdate(async () => {

		video.srcObject = null;
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<Q1> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q1", $$slots, []);

	$$self.$capture_state = () => ({
		onMount,
		beforeUpdate,
		afterUpdate,
		onDestroy,
		Trans: TransHelp,
		Complete,
		Next,
		count,
		step,
		quizSteps,
		video,
		$quizSteps,
		$count,
		$step
	});

	$$self.$inject_state = $$props => {
		if ("video" in $$props) video = $$props.video;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [$step];
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

export default Q1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTEuZDRjYzhhYWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05leHQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9xdWl6L3ExLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCB7IHN0ZXAgfSBmcm9tICcuLi9zdG9yZS5qcydcbiAgICBleHBvcnQgbGV0IG51bSA9IDE7XG4gICAgZnVuY3Rpb24gaW5jcmVhc2UobnVtKSB7XG4gICAgICAgIHN0ZXAudXBkYXRlKG4gPT4gbis9IG51bSlcbiAgICAgICAgY29uc29sZS5sb2coc3RlcCk7XG4gICAgfVxuPC9zY3JpcHQ+XG48YnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBpbmNyZWFzZShudW0pfT5cbiAgICA8c2xvdD5cblxuICAgIDwvc2xvdD5cbjwvYnV0dG9uPlxuXG48c3R5bGU+XG4gICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cbjwvc3R5bGU+XG5cbiIsIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgb25Nb3VudCwgYmVmb3JlVXBkYXRlLCBhZnRlclVwZGF0ZSwgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcbiAgICBpbXBvcnQgVHJhbnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlJztcbiAgICBpbXBvcnQgQ29tcGxldGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wbGV0ZS5zdmVsdGUnXG4gICAgaW1wb3J0IE5leHQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OZXh0LnN2ZWx0ZSdcbiAgICBpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG4gICAgLy9pbXBvcnQgeyBxdWl6U3RlcHMgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblx0XG5cblx0XG4gICAgLy9zZXRzIGFzaWRlIGljb24gdG8gaW4gcHJvZ3Jlc3MgdmlhIHN0b3JlXG4gICAgb25Nb3VudChhc3luYygpID0+IHskcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMX0pO1xuICAgIC8vU3RhcnQgVmlkZW8gb24gdXBkYXRlXG4gICAgbGV0IHZpZGVvO1xuXHRhZnRlclVwZGF0ZShhc3luYygpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGVwKTtcblx0dmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZGVvRWxlbWVudFwiKTtcblx0aWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKSB7XG4gIFx0bmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyB2aWRlbzogdHJ1ZSB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChzdHJlYW0pIHtcblx0XHRcdHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyMHIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTm90IGxvYWRlZFwiKTtcbiAgICB9KTtcblx0XHR9XG59KVxuLy9zdG9wIHZpZGVvIGZ1bmN0aW9uIG9uIGVuZCBvZiBjb21wb25lbnQgICBcbiAgICBhZnRlclVwZGF0ZShhc3luYygpID0+IHsgXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BTdHJlYW1lZFZpZGVvKHZpZGVvKSB7IFxuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gdmlkZW8uc3JjT2JqZWN0O1xuICAgICAgICAgICAgY29uc3QgdHJhY2tzID0gc3RyZWFtLmdldFRyYWNrcygpO1xuICAgICAgICAgICAgICAgIHRyYWNrc1swXS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+V2ViY2FtIENoYWxsZW5nZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPFRyYW5zPlxuXG57I2lmICRzdGVwPT0wfVxuPHNlY3Rpb24+XG5cdDxoMj5JcyB5b3VyIFdlYmNhbSBDb3ZlcmVkPzwvaDI+IFxuICAgIDxwPkl04oCZcyBsaWtlbHkgeW91ciBjb21wdXRlciBhbHJlYWR5IGhhcyBhIGJ1aWx0LWluIGNhbWVyYSwgYW5kIGl04oCZcyBwb3NzaWJsZSBmb3IgdGhhdCBjYW1lcmEgdG8gYmUgdXNlZCB0byBzcHkgb24geW91LiAgPGJyPiAgSWYgeW91ciB3ZWJjYW0gZm9yIHdoYXRldmVyIHJlYXNvbiBoYXMgYmVlbiBoYWNrZWQsIHRoZSBwZXJzb24gb24gdGhlIG90aGVyIHNpZGUgY2FuIHRha2UgcGljdHVyZXMgYW5kIHZpZGVvIG9mIGFueXRoaW5nIG9yIGFueW9uZS4gTm8sIHRoaXMgaXNu4oCZdCBqdXN0IHBhcmFub2lh4oCTYSByZWNlbnQgc3VydmV5IGNvbmR1Y3RlZCBieSBIUCBmb3VuZCB0aGF0IDEwJSBpbiB0aGUgVS5TLiBlaXRoZXIga25vdyBzb21lb25lIHdob3NlIHdlYmNhbSB3YXMgaGFja2VkIG9yIGhhdmUgaGFkIHRoZWlyIG93biB3ZWJjYW0gaGFja2VkLjwvcD5cbiAgICA8TmV4dD5cbiAgICAgICAgQ29udGludWVcbiAgICA8L05leHQ+XG48L3NlY3Rpb24+XG57OmVsc2UgaWYgJHN0ZXA9PTF9XG48c2VjdGlvbj5cblx0PGgyPkNvdmVyIFlvdXIgV2ViY2FtPC9oMj5cblx0PHA+Q292ZXIgeW91ciB3ZWJjYW0uIFlvdSBjYW4gZ2V0IGZhbmN5IHJlbW92YWJsZSBzdGlja2VycyBmb3IgdGhpcyBwdXJwb3NlLCBidXQgZm9yIG5vdywgZmluZCBhIHN0aWNreSBub3RlIG9yIHBpZWNlIG9mIG1hc2tpbmcgdGFwZSBhbmQgY292ZXIgeW91ciB3ZWJjYW0gd2hlbiBpdOKAmXMgbm90IGluIHVzZSAobGlrZSByaWdodCBub3cpLiA8L3A+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG4gICAgICAgIDxOZXh0Pkl0J3MgY292ZXJlZDwvTmV4dD5cbiAgICAgICAgPE5leHQ+Tm8gVGhhbmtzLCBJdCdzIGEgaGFzc2xlPC9OZXh0PiA8IS0tIGNoYW5nZSB0byBpbmNvbXBsZXRlLS0+XG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuezplbHNlIGlmICRzdGVwPT0yfVxuICAgPGRpdiBjbGFzcz1cInZpZGVvLWhvbGRlclwiPjx2aWRlbyBhdXRvcGxheT1cInRydWVcIiBpZD1cInZpZGVvRWxlbWVudFwiPjwvdmlkZW8+PC9kaXY+XG4gICAgPHAgaWQ9XCJhbGVydFwiPkNvdmVyIHlvdXIgd2ViY2FtPC9wPlxuICAgIDxwIGlkPVwibm90LWNvdmVyZWRcIj5Zb3UgaGF2ZW7igJl0IGNvdmVyZWQgeW91ciB3ZWJjYW1lIG9yIGRpZCBub3QgZG8gaXQgcHJvcGVybHkuIFBsZWFzZSBjb3ZlciB5b3VyIHdlYmNhbSBjb21wbGV0ZWx5IHRvIHByb2NlZWQgdG8gdGhlIG5leHQgc3RlcC48L3A+XG4gICAgPCEtLTxidXR0b24gb246Y2xpY2s9e2luY29tcGxldGV9Pk9ud2FyZHMgdG8gdGhlIG5leHQgY2hhbGxlbmdlPC9idXR0b24+IC0tPlxuICAgIDxDb21wbGV0ZT5cbiAgICAgICAgT253YXJkcyB0byB0aGUgbmV4dCBjaGFsbGVuZ2VcbiAgICA8L0NvbXBsZXRlPlxuezplbHNlfVxuICAgIDx2aWRlbyBhdXRvcGxheT1cInRydWVcIiBpZD1cInZpZGVvRWxlbWVudFwiPjwvdmlkZW8+XG57L2lmfVxuPCEtLTxCYWNrLz4tLT5cbjwvVHJhbnM+XG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIC52aWRlby1ob2xkZXJ7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG4gICBidXR0b24ge1xuXHQgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdCAgIG1hcmdpbjogMTBweDtcblx0ICAgYm9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG5cdCAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgIH1cbiAgICNhbGVydCB7XG4gICAgICAgY29sb3I6IHJlZDtcbiAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICB9XG4gICAjbm90LWNvdmVyZWQge1xuICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgYmFja2dyb3VuZDogI0ZGRUVFRTtcbiAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgYm9yZGVyOiBub25lO1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQUVlLEdBQUcsR0FBRyxDQUFDOztVQUNULFFBQVEsQ0FBQyxHQUFHO0VBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBRyxHQUFHO0VBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7NkJBR0EsUUFBUSxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQ21DL0IsR0FBSyxPQUFFLENBQUM7Z0JBUUgsR0FBSyxPQUFFLENBQUM7Z0JBU1IsR0FBSyxPQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWpEZCxPQUFPOzZCQUFhLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7Ozs7S0FFN0MsS0FBSzs7Q0FDWixXQUFXO0VBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJO0VBQ25CLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWU7O01BQzFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWTtHQUNyQyxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxLQUFLLEVBQUUsSUFBSSxJQUMvQyxJQUFJLFdBQVcsTUFBTTtJQUN2QixLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU07TUFFdEIsS0FBSyxXQUFXLEtBQUs7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZOzs7Ozs7Q0FLMUIsV0FBVzs7RUFPQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
