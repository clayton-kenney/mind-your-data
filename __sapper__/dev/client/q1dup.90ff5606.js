import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, Q as onMount, u as afterUpdate, v as validate_slots, T as beforeUpdate, R as onDestroy, L as globals, a as space, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, x as claim_component, l as insert_dev, y as mount_component, B as transition_in, z as transition_out, E as destroy_component, K as set_store_value, G as group_outros, A as check_outros, e as element, f as claim_element, g as children, j as attr_dev, k as add_location, n as noop, t as text, h as claim_text, m as append_dev, U as listen_dev, V as run_all } from './client.b99bc151.js';
import './index.cccde779.js';
import './index.01b49c54.js';
import { T as TransHelp } from './TransHelp.71ddb5ac.js';
import { c as count, q as quizSteps } from './store.5bc54248.js';
import { C as Complete, B as Back } from './Back.a315b0a2.js';

/* src/routes/quiz/q1dup.svelte generated by Svelte v3.23.2 */

const { console: console_1, document: document_1 } = globals;
const file = "src/routes/quiz/q1dup.svelte";

// (77:0) {:else}
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
			add_location(video_1, file, 77, 4, 2869);
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
		source: "(77:0) {:else}",
		ctx
	});

	return block;
}

// (69:15) 
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
			add_location(video_1, file, 69, 29, 2458);
			attr_dev(div, "class", "video-holder svelte-1sss75x");
			add_location(div, file, 69, 3, 2432);
			attr_dev(p0, "id", "alert");
			attr_dev(p0, "class", "svelte-1sss75x");
			add_location(p0, file, 70, 4, 2518);
			attr_dev(p1, "id", "not-covered");
			attr_dev(p1, "class", "svelte-1sss75x");
			add_location(p1, file, 71, 4, 2558);
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
		source: "(69:15) ",
		ctx
	});

	return block;
}

// (60:15) 
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
			add_location(h2, file, 61, 1, 2008);
			add_location(p, file, 62, 1, 2036);
			attr_dev(button0, "class", "svelte-1sss75x");
			add_location(button0, file, 64, 8, 2273);
			attr_dev(button1, "class", "svelte-1sss75x");
			add_location(button1, file, 65, 8, 2330);
			attr_dev(div, "class", "button-holder svelte-1sss75x");
			add_location(div, file, 63, 1, 2237);
			add_location(section, file, 60, 0, 1997);
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
		source: "(60:15) ",
		ctx
	});

	return block;
}

// (54:0) {#if q==0}
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
			add_location(h2, file, 55, 1, 1457);
			add_location(br, file, 56, 122, 1613);
			add_location(p, file, 56, 1, 1492);
			attr_dev(button, "class", "svelte-1sss75x");
			add_location(button, file, 57, 1, 1925);
			add_location(section, file, 54, 0, 1446);
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
		source: "(54:0) {#if q==0}",
		ctx
	});

	return block;
}

// (74:4) <Complete>
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
		source: "(74:4) <Complete>",
		ctx
	});

	return block;
}

// (52:0) <Trans>
function create_default_slot(ctx) {
	let current_block_type_index;
	let if_block;
	let t;
	let back;
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
		source: "(52:0) <Trans>",
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
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(5, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(6, $count = $$value));
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

	//sets aside icon to in progress via store
	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
	});

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
	afterUpdate(async () => {

		video.srcObject = null;
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Q1dup> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q1dup", $$slots, []);

	$$self.$capture_state = () => ({
		onMount,
		beforeUpdate,
		afterUpdate,
		onDestroy,
		Trans: TransHelp,
		Complete,
		Back,
		count,
		quizSteps,
		q,
		isActive,
		advance,
		advanceTwo,
		video,
		$quizSteps,
		$count
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

class Q1dup extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q1dup",
			options,
			id: create_fragment.name
		});
	}
}

export default Q1dup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTFkdXAuOTBmZjU2MDYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMWR1cC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBvbk1vdW50LCBiZWZvcmVVcGRhdGUsIGFmdGVyVXBkYXRlLCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnO1xuICAgIGltcG9ydCBUcmFucyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RyYW5zSGVscC5zdmVsdGUnO1xuICAgIGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSdcbiAgICBpbXBvcnQgQmFjayBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JhY2suc3ZlbHRlJ1xuICAgIGltcG9ydCB7IGNvdW50IH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG4gICAgaW1wb3J0IHsgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdFxuICAgIGxldCBxID0gMDtcbiAgICBsZXQgaXNBY3RpdmU7XG5cdGZ1bmN0aW9uIGFkdmFuY2UoKSB7XG5cdFx0cSsrO1xuICAgICAgICBjb25zb2xlLmxvZyhxKTtcbiAgICAgICAgaWYgKHE9Mikge1xuICAgICAgICAgICAgaXNBY3RpdmU9IHRydWU7XG4gICAgICAgIH1cblx0fVxuXHRmdW5jdGlvbiBhZHZhbmNlVHdvKCkge1xuXHRcdHErPTI7XG5cdFx0Y29uc29sZS5sb2cocSk7XG4gICAgfVxuICAgIC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuICAgIG9uTW91bnQoYXN5bmMoKSA9PiB7JHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDF9KTtcbiAgICAvL1N0YXJ0IFZpZGVvIG9uIHVwZGF0ZVxuICAgIGxldCB2aWRlbztcblx0YWZ0ZXJVcGRhdGUoYXN5bmMoKSA9PiB7XG5cdHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWRlb0VsZW1lbnRcIik7XG5cdGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICBcdG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUgfSlcbiAgICAudGhlbihmdW5jdGlvbiAoc3RyZWFtKSB7XG5cdFx0XHR2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycjByKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vdCBsb2FkZWRcIik7XG4gICAgfSk7XG5cdFx0fVxufSlcbi8vc3RvcCB2aWRlbyBmdW5jdGlvbiBvbiBlbmQgb2YgY29tcG9uZW50ICAgXG4gICAgYWZ0ZXJVcGRhdGUoYXN5bmMoKSA9PiB7IFxuICAgICAgICBmdW5jdGlvbiBzdG9wU3RyZWFtZWRWaWRlbyh2aWRlbykgeyBcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbSA9IHZpZGVvLnNyY09iamVjdDtcbiAgICAgICAgICAgIGNvbnN0IHRyYWNrcyA9IHN0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAgICAgICAgICAgICB0cmFja3NbMF0uc3RvcCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2aWRlby5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgICAgICAgfSk7XG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPldlYmNhbSBDaGFsbGVuZ2U8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucz5cblxueyNpZiBxPT0wfVxuPHNlY3Rpb24+XG5cdDxoMj5JcyB5b3VyIFdlYmNhbSBDb3ZlcmVkPzwvaDI+IFxuXHQ8cD5JdOKAmXMgbGlrZWx5IHlvdXIgY29tcHV0ZXIgYWxyZWFkeSBoYXMgYSBidWlsdC1pbiBjYW1lcmEsIGFuZCBpdOKAmXMgcG9zc2libGUgZm9yIHRoYXQgY2FtZXJhIHRvIGJlIHVzZWQgdG8gc3B5IG9uIHlvdS4gIDxicj4gIElmIHlvdXIgd2ViY2FtIGZvciB3aGF0ZXZlciByZWFzb24gaGFzIGJlZW4gaGFja2VkLCB0aGUgcGVyc29uIG9uIHRoZSBvdGhlciBzaWRlIGNhbiB0YWtlIHBpY3R1cmVzIGFuZCB2aWRlbyBvZiBhbnl0aGluZyBvciBhbnlvbmUuIE5vLCB0aGlzIGlzbuKAmXQganVzdCBwYXJhbm9pYeKAk2EgcmVjZW50IHN1cnZleSBjb25kdWN0ZWQgYnkgSFAgZm91bmQgdGhhdCAxMCUgaW4gdGhlIFUuUy4gZWl0aGVyIGtub3cgc29tZW9uZSB3aG9zZSB3ZWJjYW0gd2FzIGhhY2tlZCBvciBoYXZlIGhhZCB0aGVpciBvd24gd2ViY2FtIGhhY2tlZC48L3A+XG5cdDxidXR0b24gb246Y2xpY2s9e2FkdmFuY2V9PkNvbnRpbnVlPC9idXR0b24+XG48L3NlY3Rpb24+XG57OmVsc2UgaWYgcT09MX1cbjxzZWN0aW9uPlxuXHQ8aDI+Q292ZXIgWW91ciBXZWJjYW08L2gyPlxuXHQ8cD5Db3ZlciB5b3VyIHdlYmNhbS4gWW91IGNhbiBnZXQgZmFuY3kgcmVtb3ZhYmxlIHN0aWNrZXJzIGZvciB0aGlzIHB1cnBvc2UsIGJ1dCBmb3Igbm93LCBmaW5kIGEgc3RpY2t5IG5vdGUgb3IgcGllY2Ugb2YgbWFza2luZyB0YXBlIGFuZCBjb3ZlciB5b3VyIHdlYmNhbSB3aGVuIGl04oCZcyBub3QgaW4gdXNlIChsaWtlIHJpZ2h0IG5vdykuIDwvcD5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBvbjpjbGljaz17YWR2YW5jZX0+SXQncyBjb3ZlcmVkPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb246Y2xpY2s9e2FkdmFuY2VUd299Pk5vIFRoYW5rcywgSXQncyBhIGhhc3NsZTwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbns6ZWxzZSBpZiBxPT0yfVxuICAgPGRpdiBjbGFzcz1cInZpZGVvLWhvbGRlclwiPjx2aWRlbyBhdXRvcGxheT1cInRydWVcIiBpZD1cInZpZGVvRWxlbWVudFwiPjwvdmlkZW8+PC9kaXY+XG4gICAgPHAgaWQ9XCJhbGVydFwiPkNvdmVyIHlvdXIgd2ViY2FtPC9wPlxuICAgIDxwIGlkPVwibm90LWNvdmVyZWRcIj5Zb3UgaGF2ZW7igJl0IGNvdmVyZWQgeW91ciB3ZWJjYW1lIG9yIGRpZCBub3QgZG8gaXQgcHJvcGVybHkuIFBsZWFzZSBjb3ZlciB5b3VyIHdlYmNhbSBjb21wbGV0ZWx5IHRvIHByb2NlZWQgdG8gdGhlIG5leHQgc3RlcC48L3A+XG4gICAgPCEtLTxidXR0b24gb246Y2xpY2s9e2luY29tcGxldGV9Pk9ud2FyZHMgdG8gdGhlIG5leHQgY2hhbGxlbmdlPC9idXR0b24+IC0tPlxuICAgIDxDb21wbGV0ZT5cbiAgICAgICAgT253YXJkcyB0byB0aGUgbmV4dCBjaGFsbGVuZ2VcbiAgICA8L0NvbXBsZXRlPlxuezplbHNlfVxuICAgIDx2aWRlbyBhdXRvcGxheT1cInRydWVcIiBpZD1cInZpZGVvRWxlbWVudFwiPjwvdmlkZW8+XG57L2lmfVxuPEJhY2svPlxuPC9UcmFucz5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgLnZpZGVvLWhvbGRlcntcbiAgICAgICB3aWR0aDogMTAwJTtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuICAgI2FsZXJ0IHtcbiAgICAgICBjb2xvcjogcmVkO1xuICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgIH1cbiAgICNub3QtY292ZXJlZCB7XG4gICAgICAgY29sb3I6IHJlZDtcbiAgICAgICBiYWNrZ3JvdW5kOiAjRkZFRUVFO1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICBib3JkZXI6IG5vbmU7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FnRTBCLEdBQU87aURBQ1AsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQVJqQixHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFKckIsR0FBQyxPQUFFLENBQUM7WUFNQyxHQUFDLE9BQUUsQ0FBQztZQVNKLEdBQUMsT0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTVETixDQUFDLEdBQUcsQ0FBQztLQUNMLFFBQVE7O1VBQ04sT0FBTztrQkFDZixDQUFDO0VBQ0ssT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztzQkFDVCxDQUFDLEdBQUMsQ0FBQztHQUNILFFBQVEsR0FBRSxJQUFJOzs7O1VBR2hCLFVBQVU7a0JBQ2xCLENBQUMsSUFBRSxDQUFDO0VBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7O0NBR1gsT0FBTzs2QkFBYSxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDOzs7O0tBRTdDLEtBQUs7O0NBQ1osV0FBVztFQUNYLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWU7O01BQzFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWTtHQUNyQyxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxLQUFLLEVBQUUsSUFBSSxJQUMvQyxJQUFJLFdBQVcsTUFBTTtJQUN2QixLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU07TUFFdEIsS0FBSyxXQUFXLEtBQUs7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZOzs7Ozs7Q0FLMUIsV0FBVzs7RUFPQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
