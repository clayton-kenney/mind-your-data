import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, O as onMount, P as onDestroy, v as validate_slots, Q as beforeUpdate, u as afterUpdate, R as globals, e as element, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, n as noop, o as validate_store, p as component_subscribe, a as space, w as create_component, q as query_selector_all, c as claim_space, x as claim_component, y as mount_component, B as transition_in, z as transition_out, E as destroy_component, K as set_store_value, G as group_outros, A as check_outros, t as text, h as claim_text, m as append_dev } from './client.f49ac345.js';
import './index.cccde779.js';
import './index.01b49c54.js';
import { T as TransHelp } from './TransHelp.d1e694ba.js';
import { c as count, s as step, q as quizSteps, t as timerActive, p as progress } from './store.43bfa362.js';
import { C as Complete, B as Back } from './Back.5fad98a0.js';
import { B as Btn } from './Btn.67e49cf5.js';

/* src/components/Vid.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/components/Vid.svelte";

function create_fragment(ctx) {
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
			add_location(video_1, file, 25, 0, 639);
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
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let video = document.querySelector("#videoElement");

	onMount(async () => {
		const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
		video.srcObject = mediaStream;
	});

	//stop video function on end of component   
	onDestroy(() => {
		//let video = document.querySelector('#videoElement');
		video.srcObject = null;

		navigator.getUserMedia(
			{ audio: true, video: true },
			function (stream) {
				let track = stream.getTracks()[0];
				track.stop();
			},
			function (error) {
				console.log("getUserMedia() error", error);
			}
		);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Vid> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Vid", $$slots, []);

	$$self.$capture_state = () => ({
		onMount,
		beforeUpdate,
		afterUpdate,
		onDestroy,
		video
	});

	$$self.$inject_state = $$props => {
		if ("video" in $$props) video = $$props.video;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [];
}

class Vid extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Vid",
			options,
			id: create_fragment.name
		});
	}
}

/* src/routes/quiz/q1.svelte generated by Svelte v3.23.2 */
const file$1 = "src/routes/quiz/q1.svelte";

// (69:0) {:else}
function create_else_block(ctx) {
	let vid;
	let t;
	let complete;
	let current;
	vid = new Vid({ $$inline: true });

	complete = new Complete({
			props: {
				p: 6.25,
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(vid.$$.fragment);
			t = space();
			create_component(complete.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(vid.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(complete.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(vid, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(complete, target, anchor);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(vid.$$.fragment, local);
			transition_in(complete.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(vid.$$.fragment, local);
			transition_out(complete.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(vid, detaching);
			if (detaching) detach_dev(t);
			destroy_component(complete, detaching);
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

// (60:19) 
function create_if_block_2(ctx) {
	let div;
	let vid;
	let t0;
	let p0;
	let t1;
	let t2;
	let p1;
	let t3;
	let t4;
	let complete;
	let current;
	vid = new Vid({ $$inline: true });

	complete = new Complete({
			props: {
				p: 6.25,
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			create_component(vid.$$.fragment);
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
			claim_component(vid.$$.fragment, div_nodes);
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
			attr_dev(div, "class", "video-holder svelte-1ei4p");
			add_location(div, file$1, 60, 3, 2428);
			attr_dev(p0, "id", "alert");
			attr_dev(p0, "class", "svelte-1ei4p");
			add_location(p0, file$1, 63, 4, 2489);
			attr_dev(p1, "id", "not-covered");
			attr_dev(p1, "class", "svelte-1ei4p");
			add_location(p1, file$1, 64, 4, 2529);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(vid, div, null);
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
			transition_in(vid.$$.fragment, local);
			transition_in(complete.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(vid.$$.fragment, local);
			transition_out(complete.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(vid);
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
		source: "(60:19) ",
		ctx
	});

	return block;
}

// (51:19) 
function create_if_block_1(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div;
	let btn;
	let t4;
	let complete;
	let current;

	btn = new Btn({
			props: {
				p: 6.25,
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	complete = new Complete({
			props: {
				success: false,
				p: 6.25,
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
			create_component(btn.$$.fragment);
			t4 = space();
			create_component(complete.$$.fragment);
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
			claim_component(btn.$$.fragment, div_nodes);
			t4 = claim_space(div_nodes);
			claim_component(complete.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file$1, 52, 1, 2008);
			add_location(p, file$1, 53, 1, 2036);
			attr_dev(div, "class", "button-holder svelte-1ei4p");
			add_location(div, file$1, 54, 1, 2237);
			add_location(section, file$1, 51, 0, 1997);
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
			mount_component(btn, div, null);
			append_dev(div, t4);
			mount_component(complete, div, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(btn.$$.fragment, local);
			transition_in(complete.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(btn.$$.fragment, local);
			transition_out(complete.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(btn);
			destroy_component(complete);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(51:19) ",
		ctx
	});

	return block;
}

// (45:0) {#if $step==0}
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
	let btn;
	let current;

	btn = new Btn({
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
			create_component(btn.$$.fragment);
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
			claim_component(btn.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file$1, 46, 1, 1471);
			add_location(br, file$1, 47, 125, 1630);
			add_location(p, file$1, 47, 4, 1509);
			add_location(section, file$1, 45, 0, 1460);
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
			mount_component(btn, section, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(btn.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(btn.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(btn);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(45:0) {#if $step==0}",
		ctx
	});

	return block;
}

// (71:4) <Complete p={6.25}>
function create_default_slot_5(ctx) {
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
		id: create_default_slot_5.name,
		type: "slot",
		source: "(71:4) <Complete p={6.25}>",
		ctx
	});

	return block;
}

// (66:4) <Complete p={6.25}>
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
		source: "(66:4) <Complete p={6.25}>",
		ctx
	});

	return block;
}

// (56:8) <Btn p={6.25}>
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
		source: "(56:8) <Btn p={6.25}>",
		ctx
	});

	return block;
}

// (57:8) <Complete success={false} p={6.25}>
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
		source: "(57:8) <Complete success={false} p={6.25}>",
		ctx
	});

	return block;
}

// (49:4) <Btn >
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
		source: "(49:4) <Btn >",
		ctx
	});

	return block;
}

// (43:0) <Trans>
function create_default_slot(ctx) {
	let current_block_type_index;
	let if_block;
	let t;
	let back;
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
	back = new Back({ $$inline: true });

	const block = {
		c: function create() {
			if_block.c();
			t = space();
			create_component(back.$$.fragment);
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			t = claim_space(nodes);
			claim_component(back.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, t, anchor);
			mount_component(back, target, anchor);
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
				if_block.m(t.parentNode, t);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			transition_in(back.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			transition_out(back.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(t);
			destroy_component(back, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(43:0) <Trans>",
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-11mvzac\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Webcam Challenge";
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
	let $timerActive;
	let $step;
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(1, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(2, $count = $$value));
	validate_store(timerActive, "timerActive");
	component_subscribe($$self, timerActive, $$value => $$invalidate(3, $timerActive = $$value));
	validate_store(step, "step");
	component_subscribe($$self, step, $$value => $$invalidate(0, $step = $$value));

	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
		timerActive.set(!$timerActive);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Q1> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q1", $$slots, []);

	$$self.$capture_state = () => ({
		onMount,
		beforeUpdate,
		afterUpdate,
		onDestroy,
		Vid,
		Trans: TransHelp,
		Complete,
		Btn,
		count,
		step,
		quizSteps,
		timerActive,
		progress,
		Back,
		$quizSteps,
		$count,
		$timerActive,
		$step
	});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTEuMTVjYTc2OTMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovcTEuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5pbXBvcnQgeyBvbk1vdW50LCBiZWZvcmVVcGRhdGUsIGFmdGVyVXBkYXRlLCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnO1xubGV0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWRlb0VsZW1lbnRcIik7XG5cdG9uTW91bnQoYXN5bmMoKSA9PiB7XG4gIGNvbnN0IG1lZGlhU3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe3ZpZGVvOiB0cnVlfSk7XG4gIHZpZGVvLnNyY09iamVjdCA9IG1lZGlhU3RyZWFtO1xuXG59KVxuLy9zdG9wIHZpZGVvIGZ1bmN0aW9uIG9uIGVuZCBvZiBjb21wb25lbnQgICBcbiAgIG9uRGVzdHJveSgoKSA9PiB7IFxuIC8vbGV0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZGVvRWxlbWVudCcpO1xuIHZpZGVvLnNyY09iamVjdCA9IG51bGw7XG4gbmF2aWdhdG9yLmdldFVzZXJNZWRpYSh7YXVkaW86IHRydWUsIHZpZGVvOiB0cnVlfSxcbiBmdW5jdGlvbihzdHJlYW0pIHtcbiAgIGxldCB0cmFjayA9IHN0cmVhbS5nZXRUcmFja3MoKVswXTtcbiAgIHRyYWNrLnN0b3AoKTtcbiB9LFxuIGZ1bmN0aW9uKGVycm9yKXtcbiAgY29uc29sZS5sb2coJ2dldFVzZXJNZWRpYSgpIGVycm9yJywgZXJyb3IpO1xuIH0pXG4gXG59KTtcbiBcblxuPC9zY3JpcHQ+XG48dmlkZW8gYXV0b3BsYXk9XCJ0cnVlXCIgaWQ9XCJ2aWRlb0VsZW1lbnRcIj48L3ZpZGVvPlxuIiwiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBvbk1vdW50LCBiZWZvcmVVcGRhdGUsIGFmdGVyVXBkYXRlLCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnO1xuICAgIGltcG9ydCBWaWQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWQuc3ZlbHRlJ1xuICAgIGltcG9ydCBUcmFucyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RyYW5zSGVscC5zdmVsdGUnO1xuICAgIGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSdcblx0aW1wb3J0IEJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J0bi5zdmVsdGUnIC8vc2V0IDxOZXh0IHE9ezJ9PiB0byBza2lwIG11bHRpcGxlIHN0ZXBzXG4gICAgaW1wb3J0IHsgY291bnQsIHN0ZXAsIHF1aXpTdGVwcywgdGltZXJBY3RpdmUsIHByb2dyZXNzfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcbiAgICBpbXBvcnQgQmFjayBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JhY2suc3ZlbHRlJ1xuXG4gICAgLy9zZXRzIGFzaWRlIGljb24gdG8gaW4gcHJvZ3Jlc3MgdmlhIHN0b3JlXG4gICBvbk1vdW50KGFzeW5jKCkgPT4ge1xuICAgICAgICAkcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMTtcbiAgICAgICAgdGltZXJBY3RpdmUuc2V0KCEkdGltZXJBY3RpdmUpfSk7XG4gICAgLy9TdGFydCBWaWRlbyBvbiB1cGRhdGVcbiAgICAvKlxuICAgIGxldCB2aWRlbztcblx0YWZ0ZXJVcGRhdGUoYXN5bmMoKSA9PiB7XG5cdHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWRlb0VsZW1lbnRcIik7XG5cdGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICBcdG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUgfSlcbiAgICAudGhlbihmdW5jdGlvbiAoc3RyZWFtKSB7XG5cdFx0XHR2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycjByKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vdCBsb2FkZWRcIik7XG4gICAgfSk7XG5cdFx0fVxufSlcbi8vc3RvcCB2aWRlbyBmdW5jdGlvbiBvbiBlbmQgb2YgY29tcG9uZW50ICAgXG4gICBvbkRlc3Ryb3koYXN5bmMoKSA9PiB7IFxuICAgICAgICBmdW5jdGlvbiBzdG9wU3RyZWFtZWRWaWRlbyh2aWRlbykgeyBcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbSA9IHZpZGVvLnNyY09iamVjdDtcbiAgICAgICAgICAgIGNvbnN0IHRyYWNrcyA9IHN0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAgICAgICAgICAgICB0cmFja3MuZm9yRWFjaCh0ID0+IHQuc3RvcCgpKTtcbiAgICAgICAgICAgICAgICBzdHJlYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3ZpZGVvLnNyY09iamVjdCA9IG51bGw7XG4gICAgICAgICAgICB9KTsqL1xuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5XZWJjYW0gQ2hhbGxlbmdlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48VHJhbnM+XG5cbnsjaWYgJHN0ZXA9PTB9XG48c2VjdGlvbj5cblx0PGgyPklzIHlvdXIgV2ViY2FtIENvdmVyZWQ/PC9oMj4gXG4gICAgPHA+SXTigJlzIGxpa2VseSB5b3VyIGNvbXB1dGVyIGFscmVhZHkgaGFzIGEgYnVpbHQtaW4gY2FtZXJhLCBhbmQgaXTigJlzIHBvc3NpYmxlIGZvciB0aGF0IGNhbWVyYSB0byBiZSB1c2VkIHRvIHNweSBvbiB5b3UuICA8YnI+ICBJZiB5b3VyIHdlYmNhbSBmb3Igd2hhdGV2ZXIgcmVhc29uIGhhcyBiZWVuIGhhY2tlZCwgdGhlIHBlcnNvbiBvbiB0aGUgb3RoZXIgc2lkZSBjYW4gdGFrZSBwaWN0dXJlcyBhbmQgdmlkZW8gb2YgYW55dGhpbmcgb3IgYW55b25lLiBObywgdGhpcyBpc27igJl0IGp1c3QgcGFyYW5vaWHigJNhIHJlY2VudCBzdXJ2ZXkgY29uZHVjdGVkIGJ5IEhQIGZvdW5kIHRoYXQgMTAlIGluIHRoZSBVLlMuIGVpdGhlciBrbm93IHNvbWVvbmUgd2hvc2Ugd2ViY2FtIHdhcyBoYWNrZWQgb3IgaGF2ZSBoYWQgdGhlaXIgb3duIHdlYmNhbSBoYWNrZWQuPC9wPlxuICAgIDxCdG4gPkNvbnRpbnVlPC9CdG4+XG48L3NlY3Rpb24+XG57OmVsc2UgaWYgJHN0ZXA9PTF9XG48c2VjdGlvbj5cblx0PGgyPkNvdmVyIFlvdXIgV2ViY2FtPC9oMj5cblx0PHA+Q292ZXIgeW91ciB3ZWJjYW0uIFlvdSBjYW4gZ2V0IGZhbmN5IHJlbW92YWJsZSBzdGlja2VycyBmb3IgdGhpcyBwdXJwb3NlLCBidXQgZm9yIG5vdywgZmluZCBhIHN0aWNreSBub3RlIG9yIHBpZWNlIG9mIG1hc2tpbmcgdGFwZSBhbmQgY292ZXIgeW91ciB3ZWJjYW0gd2hlbiBpdOKAmXMgbm90IGluIHVzZSAobGlrZSByaWdodCBub3cpLiA8L3A+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG4gICAgICAgIDxCdG4gcD17Ni4yNX0+SXQncyBjb3ZlcmVkPC9CdG4+XG4gICAgICAgIDxDb21wbGV0ZSBzdWNjZXNzPXtmYWxzZX0gcD17Ni4yNX0+Tm8gVGhhbmtzLCBJdCdzIGEgaGFzc2xlPC9Db21wbGV0ZT4gXG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuezplbHNlIGlmICRzdGVwPT0yfVxuICAgPGRpdiBjbGFzcz1cInZpZGVvLWhvbGRlclwiPlxuICAgICAgIDxWaWQ+PC9WaWQ+XG4gICAgPC9kaXY+XG4gICAgPHAgaWQ9XCJhbGVydFwiPkNvdmVyIHlvdXIgd2ViY2FtPC9wPlxuICAgIDxwIGlkPVwibm90LWNvdmVyZWRcIj5Zb3UgaGF2ZW7igJl0IGNvdmVyZWQgeW91ciB3ZWJjYW1lIG9yIGRpZCBub3QgZG8gaXQgcHJvcGVybHkuIFBsZWFzZSBjb3ZlciB5b3VyIHdlYmNhbSBjb21wbGV0ZWx5IHRvIHByb2NlZWQgdG8gdGhlIG5leHQgc3RlcC48L3A+XG4gICAgPENvbXBsZXRlIHA9ezYuMjV9PlxuICAgICAgICBPbndhcmRzIHRvIHRoZSBuZXh0IGNoYWxsZW5nZVxuICAgIDwvQ29tcGxldGU+XG57OmVsc2V9XG4gICAgPFZpZD48L1ZpZD5cbiAgICA8Q29tcGxldGUgcD17Ni4yNX0+XG4gICAgICAgIE9ud2FyZHMgdG8gdGhlIG5leHQgY2hhbGxlbmdlXG4gICAgPC9Db21wbGV0ZT5cbnsvaWZ9XG5cbjxCYWNrLz5cbjwvVHJhbnM+XG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIC52aWRlby1ob2xkZXJ7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG4gICAjYWxlcnQge1xuICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgfVxuICAgI25vdC1jb3ZlcmVkIHtcbiAgICAgICBjb2xvcjogcmVkO1xuICAgICAgIGJhY2tncm91bmQ6ICNGRkVFRUU7XG4gICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgIGJvcmRlcjogbm9uZTtcbiAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWU7O0NBQ2pELE9BQU87UUFDQSxXQUFXLFNBQVMsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLEdBQUUsS0FBSyxFQUFFLElBQUk7RUFDMUUsS0FBSyxDQUFDLFNBQVMsR0FBRyxXQUFXOzs7O0NBSTVCLFNBQVM7O0VBRVgsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJOztFQUN0QixTQUFTLENBQUMsWUFBWTtLQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUk7YUFDdkMsTUFBTTtRQUNULEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUM7SUFDaEMsS0FBSyxDQUFDLElBQUk7O2FBRUgsS0FBSztJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Db0QxQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BTEosSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BVkwsSUFBSTs7Ozs7Ozs7O2FBQ08sS0FBSztPQUFLLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBWnBDLEdBQUssT0FBRSxDQUFDO2dCQU1ILEdBQUssT0FBRSxDQUFDO2dCQVNSLEdBQUssT0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBakRmLE9BQU87NkJBQ0YsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQztFQUM3QixXQUFXLENBQUMsR0FBRyxFQUFFLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
