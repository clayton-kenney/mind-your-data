import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as onMount, O as onDestroy, v as validate_slots, K as beforeUpdate, L as afterUpdate, P as globals, f as element, g as claim_element, h as children, j as detach_dev, k as attr_dev, l as add_location, n as insert_dev, G as noop, H as validate_store, I as component_subscribe, B as space, c as create_component, D as query_selector_all, E as claim_space, a as claim_component, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, Q as set_store_value, w as group_outros, x as check_outros, p as append_dev, C as text, F as claim_text } from './client.dbadfca2.js';
import './index.44998259.js';
import './index.53cf0887.js';
import { T as TransHelp } from './TransHelp.cc659317.js';
import { c as count, s as step, q as quizSteps, t as timerActive, p as progress } from './store.9eed25a6.js';
import { C as Complete, B as Back } from './Back.d6303312.js';
import { B as Btn } from './Btn.3b096327.js';

/* src/components/Vid.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/components/Vid.svelte";

function create_fragment(ctx) {
	let video;

	const block = {
		c: function create() {
			video = element("video");
			this.h();
		},
		l: function claim(nodes) {
			video = claim_element(nodes, "VIDEO", { autoplay: true, id: true });
			children(video).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			video.autoplay = "true";
			attr_dev(video, "id", "videoElement");
			add_location(video, file, 27, 0, 678);
		},
		m: function mount(target, anchor) {
			insert_dev(target, video, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(video);
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
	onMount(async () => {
		let video = document.querySelector("#videoElement");

		const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true }).then(mediaStream => {
			video.srcObject = mediaStream;
		}).catch(console.log);
	});

	//stop video function on end of component   
	onDestroy(() => {
		//let video = document.querySelector('#videoElement');
		//video.srcObject = null;
		navigator.getUserMedia(
			{ video: true },
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
		onDestroy
	});

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

// (73:0) {:else}
function create_else_block(ctx) {
	let section;
	let vid;
	let t;
	let div;
	let complete;
	let current;
	vid = new Vid({ $$inline: true });

	complete = new Complete({
			props: {
				p: 4.75,
				green: true,
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			create_component(vid.$$.fragment);
			t = space();
			div = element("div");
			create_component(complete.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			claim_component(vid.$$.fragment, section_nodes);
			t = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(complete.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "button-holder");
			add_location(div, file$1, 75, 4, 2938);
			add_location(section, file$1, 73, 0, 2908);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			mount_component(vid, section, null);
			append_dev(section, t);
			append_dev(section, div);
			mount_component(complete, div, null);
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
			if (detaching) detach_dev(section);
			destroy_component(vid);
			destroy_component(complete);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(73:0) {:else}",
		ctx
	});

	return block;
}

// (60:19) 
function create_if_block_2(ctx) {
	let section;
	let div0;
	let vid;
	let t0;
	let p0;
	let t1;
	let t2;
	let p1;
	let t3;
	let t4;
	let div1;
	let complete;
	let current;
	vid = new Vid({ $$inline: true });

	complete = new Complete({
			props: {
				p: 4.75,
				green: true,
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			div0 = element("div");
			create_component(vid.$$.fragment);
			t0 = space();
			p0 = element("p");
			t1 = text("Cover your webcam");
			t2 = space();
			p1 = element("p");
			t3 = text("You haven’t covered your webcame or did not do it properly. Please cover your webcam completely to proceed to the next step.");
			t4 = space();
			div1 = element("div");
			create_component(complete.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(vid.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", { id: true, class: true });
			var p0_nodes = children(p0);
			t1 = claim_text(p0_nodes, "Cover your webcam");
			p0_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", { id: true, class: true });
			var p1_nodes = children(p1);
			t3 = claim_text(p1_nodes, "You haven’t covered your webcame or did not do it properly. Please cover your webcam completely to proceed to the next step.");
			p1_nodes.forEach(detach_dev);
			t4 = claim_space(section_nodes);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(complete.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "video-holder svelte-1eg3wlj");
			add_location(div0, file$1, 61, 3, 2505);
			attr_dev(p0, "id", "alert");
			attr_dev(p0, "class", "svelte-1eg3wlj");
			add_location(p0, file$1, 64, 4, 2566);
			attr_dev(p1, "id", "not-covered");
			attr_dev(p1, "class", "svelte-1eg3wlj");
			add_location(p1, file$1, 65, 4, 2606);
			attr_dev(div1, "class", "button-holder");
			add_location(div1, file$1, 66, 4, 2759);
			add_location(section, file$1, 60, 0, 2492);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div0);
			mount_component(vid, div0, null);
			append_dev(section, t0);
			append_dev(section, p0);
			append_dev(p0, t1);
			append_dev(section, t2);
			append_dev(section, p1);
			append_dev(p1, t3);
			append_dev(section, t4);
			append_dev(section, div1);
			mount_component(complete, div1, null);
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
			if (detaching) detach_dev(section);
			destroy_component(vid);
			destroy_component(complete);
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
				p: 4.75,
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	complete = new Complete({
			props: {
				success: false,
				p: 8.5,
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
			t2 = text("Cover your webcam. You can find removable stickers for this purpose, but simple fixes can be found at your home or office. You can use a sticky note or  a piece of masking tape to obscure your webcam when it’s not in use. Like right now.");
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
			t2 = claim_text(p_nodes, "Cover your webcam. You can find removable stickers for this purpose, but simple fixes can be found at your home or office. You can use a sticky note or  a piece of masking tape to obscure your webcam when it’s not in use. Like right now.");
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
			add_location(h2, file$1, 52, 1, 2030);
			add_location(p, file$1, 53, 1, 2058);
			attr_dev(div, "class", "button-holder");
			add_location(div, file$1, 54, 1, 2305);
			add_location(section, file$1, 51, 0, 2019);
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
	let p0;
	let t2;
	let t3;
	let p1;
	let t4;
	let t5;
	let btn;
	let current;

	btn = new Btn({
			props: {
				p: 4.75,
				green: true,
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
			p0 = element("p");
			t2 = text("It’s likely your computer already has a built-in camera, and it’s possible for that camera to be used to spy on you.");
			t3 = space();
			p1 = element("p");
			t4 = text("If your webcam for whatever reason has been hacked, the person on the other side can take pictures and video of anything or anyone. No, this isn’t just paranoia–a recent survey conducted by HP found that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.");
			t5 = space();
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
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "It’s likely your computer already has a built-in camera, and it’s possible for that camera to be used to spy on you.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "If your webcam for whatever reason has been hacked, the person on the other side can take pictures and video of anything or anyone. No, this isn’t just paranoia–a recent survey conducted by HP found that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			claim_component(btn.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file$1, 46, 1, 1471);
			add_location(p0, file$1, 47, 4, 1509);
			add_location(p1, file$1, 47, 129, 1634);
			add_location(section, file$1, 45, 0, 1460);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p0);
			append_dev(p0, t2);
			append_dev(section, t3);
			append_dev(section, p1);
			append_dev(p1, t4);
			append_dev(section, t5);
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

// (77:4) <Complete p={4.75} green={true}>
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
		source: "(77:4) <Complete p={4.75} green={true}>",
		ctx
	});

	return block;
}

// (68:4) <Complete p={4.75} green={true}>
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
		source: "(68:4) <Complete p={4.75} green={true}>",
		ctx
	});

	return block;
}

// (56:8) <Btn p={4.75}>
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
		source: "(56:8) <Btn p={4.75}>",
		ctx
	});

	return block;
}

// (57:8) <Complete success={false} p={8.5}>
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
		source: "(57:8) <Complete success={false} p={8.5}>",
		ctx
	});

	return block;
}

// (49:4) <Btn p={4.75} green={true}>
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
		source: "(49:4) <Btn p={4.75} green={true}>",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTEuOWFiNjY3NTguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovcTEuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5pbXBvcnQgeyBvbk1vdW50LCBiZWZvcmVVcGRhdGUsIGFmdGVyVXBkYXRlLCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnO1xuXHRvbk1vdW50KGFzeW5jKCkgPT4ge1xuICAgIGxldCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlkZW9FbGVtZW50XCIpO1xuXG4gIGNvbnN0IG1lZGlhU3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe3ZpZGVvOiB0cnVlfSlcbiAgLnRoZW4obWVkaWFTdHJlYW0gPT4ge3ZpZGVvLnNyY09iamVjdCA9IG1lZGlhU3RyZWFtfSlcbiAgLmNhdGNoKGNvbnNvbGUubG9nKTtcblxufSlcbi8vc3RvcCB2aWRlbyBmdW5jdGlvbiBvbiBlbmQgb2YgY29tcG9uZW50ICAgXG4gICBvbkRlc3Ryb3koKCkgPT4geyBcbiAvL2xldCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWRlb0VsZW1lbnQnKTtcbiAvL3ZpZGVvLnNyY09iamVjdCA9IG51bGw7XG4gbmF2aWdhdG9yLmdldFVzZXJNZWRpYSh7dmlkZW86IHRydWV9LFxuIGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgbGV0IHRyYWNrID0gc3RyZWFtLmdldFRyYWNrcygpWzBdO1xuICAgdHJhY2suc3RvcCgpO1xuIH0sXG4gZnVuY3Rpb24oZXJyb3Ipe1xuICBjb25zb2xlLmxvZygnZ2V0VXNlck1lZGlhKCkgZXJyb3InLCBlcnJvcik7XG4gfSlcbiBcbn0pO1xuIFxuXG48L3NjcmlwdD5cbjx2aWRlbyBhdXRvcGxheT1cInRydWVcIiBpZD1cInZpZGVvRWxlbWVudFwiPjwvdmlkZW8+XG4iLCI8c2NyaXB0PlxuICAgIGltcG9ydCB7IG9uTW91bnQsIGJlZm9yZVVwZGF0ZSwgYWZ0ZXJVcGRhdGUsIG9uRGVzdHJveSB9IGZyb20gJ3N2ZWx0ZSc7XG4gICAgaW1wb3J0IFZpZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZpZC5zdmVsdGUnXG4gICAgaW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG4gICAgaW1wb3J0IENvbXBsZXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcGxldGUuc3ZlbHRlJ1xuXHRpbXBvcnQgQnRuIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnRuLnN2ZWx0ZScgLy9zZXQgPE5leHQgcT17Mn0+IHRvIHNraXAgbXVsdGlwbGUgc3RlcHNcbiAgICBpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzLCB0aW1lckFjdGl2ZSwgcHJvZ3Jlc3N9IGZyb20gJy4uLy4uL3N0b3JlLmpzJ1xuICAgIGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cbiAgICAvL3NldHMgYXNpZGUgaWNvbiB0byBpbiBwcm9ncmVzcyB2aWEgc3RvcmVcbiAgIG9uTW91bnQoYXN5bmMoKSA9PiB7XG4gICAgICAgICRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxO1xuICAgICAgICB0aW1lckFjdGl2ZS5zZXQoISR0aW1lckFjdGl2ZSl9KTtcbiAgICAvL1N0YXJ0IFZpZGVvIG9uIHVwZGF0ZVxuICAgIC8qXG4gICAgbGV0IHZpZGVvO1xuXHRhZnRlclVwZGF0ZShhc3luYygpID0+IHtcblx0dmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZGVvRWxlbWVudFwiKTtcblx0aWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKSB7XG4gIFx0bmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyB2aWRlbzogdHJ1ZSB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChzdHJlYW0pIHtcblx0XHRcdHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyMHIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTm90IGxvYWRlZFwiKTtcbiAgICB9KTtcblx0XHR9XG59KVxuLy9zdG9wIHZpZGVvIGZ1bmN0aW9uIG9uIGVuZCBvZiBjb21wb25lbnQgICBcbiAgIG9uRGVzdHJveShhc3luYygpID0+IHsgXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BTdHJlYW1lZFZpZGVvKHZpZGVvKSB7IFxuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gdmlkZW8uc3JjT2JqZWN0O1xuICAgICAgICAgICAgY29uc3QgdHJhY2tzID0gc3RyZWFtLmdldFRyYWNrcygpO1xuICAgICAgICAgICAgICAgIHRyYWNrcy5mb3JFYWNoKHQgPT4gdC5zdG9wKCkpO1xuICAgICAgICAgICAgICAgIHN0cmVhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vdmlkZW8uc3JjT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIH0pOyovXG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPldlYmNhbSBDaGFsbGVuZ2U8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucz5cblxueyNpZiAkc3RlcD09MH1cbjxzZWN0aW9uPlxuXHQ8aDI+SXMgeW91ciBXZWJjYW0gQ292ZXJlZD88L2gyPiBcbiAgICA8cD5JdOKAmXMgbGlrZWx5IHlvdXIgY29tcHV0ZXIgYWxyZWFkeSBoYXMgYSBidWlsdC1pbiBjYW1lcmEsIGFuZCBpdOKAmXMgcG9zc2libGUgZm9yIHRoYXQgY2FtZXJhIHRvIGJlIHVzZWQgdG8gc3B5IG9uIHlvdS48L3A+ICA8cD5JZiB5b3VyIHdlYmNhbSBmb3Igd2hhdGV2ZXIgcmVhc29uIGhhcyBiZWVuIGhhY2tlZCwgdGhlIHBlcnNvbiBvbiB0aGUgb3RoZXIgc2lkZSBjYW4gdGFrZSBwaWN0dXJlcyBhbmQgdmlkZW8gb2YgYW55dGhpbmcgb3IgYW55b25lLiBObywgdGhpcyBpc27igJl0IGp1c3QgcGFyYW5vaWHigJNhIHJlY2VudCBzdXJ2ZXkgY29uZHVjdGVkIGJ5IEhQIGZvdW5kIHRoYXQgMTAlIGluIHRoZSBVLlMuIGVpdGhlciBrbm93IHNvbWVvbmUgd2hvc2Ugd2ViY2FtIHdhcyBoYWNrZWQgb3IgaGF2ZSBoYWQgdGhlaXIgb3duIHdlYmNhbSBoYWNrZWQuPC9wPlxuICAgIDxCdG4gcD17NC43NX0gZ3JlZW49e3RydWV9PkNvbnRpbnVlPC9CdG4+XG48L3NlY3Rpb24+XG57OmVsc2UgaWYgJHN0ZXA9PTF9XG48c2VjdGlvbj5cblx0PGgyPkNvdmVyIFlvdXIgV2ViY2FtPC9oMj5cblx0PHA+Q292ZXIgeW91ciB3ZWJjYW0uIFlvdSBjYW4gZmluZCByZW1vdmFibGUgc3RpY2tlcnMgZm9yIHRoaXMgcHVycG9zZSwgYnV0IHNpbXBsZSBmaXhlcyBjYW4gYmUgZm91bmQgYXQgeW91ciBob21lIG9yIG9mZmljZS4gWW91IGNhbiB1c2UgYSBzdGlja3kgbm90ZSBvciAgYSBwaWVjZSBvZiBtYXNraW5nIHRhcGUgdG8gb2JzY3VyZSB5b3VyIHdlYmNhbSB3aGVuIGl04oCZcyBub3QgaW4gdXNlLiBMaWtlIHJpZ2h0IG5vdy4gPC9wPlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuICAgICAgICA8QnRuIHA9ezQuNzV9Pkl0J3MgY292ZXJlZDwvQnRuPlxuICAgICAgICA8Q29tcGxldGUgc3VjY2Vzcz17ZmFsc2V9IHA9ezguNX0+Tm8gVGhhbmtzLCBJdCdzIGEgaGFzc2xlPC9Db21wbGV0ZT4gXG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuezplbHNlIGlmICRzdGVwPT0yfVxuPHNlY3Rpb24+XG4gICA8ZGl2IGNsYXNzPVwidmlkZW8taG9sZGVyXCI+XG4gICAgICAgPFZpZD48L1ZpZD5cbiAgICA8L2Rpdj5cbiAgICA8cCBpZD1cImFsZXJ0XCI+Q292ZXIgeW91ciB3ZWJjYW08L3A+XG4gICAgPHAgaWQ9XCJub3QtY292ZXJlZFwiPllvdSBoYXZlbuKAmXQgY292ZXJlZCB5b3VyIHdlYmNhbWUgb3IgZGlkIG5vdCBkbyBpdCBwcm9wZXJseS4gUGxlYXNlIGNvdmVyIHlvdXIgd2ViY2FtIGNvbXBsZXRlbHkgdG8gcHJvY2VlZCB0byB0aGUgbmV4dCBzdGVwLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuICAgIDxDb21wbGV0ZSBwPXs0Ljc1fSBncmVlbj17dHJ1ZX0+XG4gICAgICAgIE9ud2FyZHMgdG8gdGhlIG5leHQgY2hhbGxlbmdlXG4gICAgPC9Db21wbGV0ZT5cbiAgICA8L2Rpdj5cbjwvc2VjdGlvbj5cbns6ZWxzZX1cbjxzZWN0aW9uPlxuICAgIDxWaWQ+PC9WaWQ+XG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cbiAgICA8Q29tcGxldGUgcD17NC43NX0gZ3JlZW49e3RydWV9PlxuICAgICAgICBPbndhcmRzIHRvIHRoZSBuZXh0IGNoYWxsZW5nZVxuICAgIDwvQ29tcGxldGU+XG4gICAgPC9kaXY+XG48L3NlY3Rpb24+XG57L2lmfVxuXG48QmFjay8+XG48L1RyYW5zPlxuPHN0eWxlPlxuICAgLnZpZGVvLWhvbGRlcntcbiAgICAgICB3aWR0aDogMTAwJTtcbiAgIH1cbiAgICNhbGVydCB7XG4gICAgICAgY29sb3I6IHJlZDtcbiAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICB9XG4gICAjbm90LWNvdmVyZWQge1xuICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgYmFja2dyb3VuZDogI0ZGRUVFRTtcbiAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgYm9yZGVyOiBub25lO1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUMsT0FBTztNQUNBLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWU7O1FBRTlDLFdBQVcsU0FBUyxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRSxLQUFLLEVBQUUsSUFBSSxJQUN6RSxJQUFJLENBQUMsV0FBVztHQUFLLEtBQUssQ0FBQyxTQUFTLEdBQUcsV0FBVztLQUNsRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUc7Ozs7Q0FJakIsU0FBUzs7O0VBR1gsU0FBUyxDQUFDLFlBQVk7S0FBRSxLQUFLLEVBQUUsSUFBSTthQUMxQixNQUFNO1FBQ1QsS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQztJQUNoQyxLQUFLLENBQUMsSUFBSTs7YUFFSCxLQUFLO0lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQ3dEMUIsSUFBSTtXQUFTLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BVGpCLElBQUk7V0FBUyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQVpsQixJQUFJOzs7Ozs7Ozs7YUFDTyxLQUFLO09BQUssR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BUjVCLElBQUk7V0FBUyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFKeEIsR0FBSyxPQUFFLENBQUM7Z0JBTUgsR0FBSyxPQUFFLENBQUM7Z0JBU1IsR0FBSyxPQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FqRGYsT0FBTzs2QkFDRixVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDO0VBQzdCLFdBQVcsQ0FBQyxHQUFHLEVBQUUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
