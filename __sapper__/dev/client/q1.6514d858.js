import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, N as onMount, O as afterUpdate, v as validate_slots, P as beforeUpdate, Q as onDestroy, R as globals, a as space, u as create_component, q as query_selector_all, b as detach_dev, c as claim_space, w as claim_component, l as insert_dev, x as mount_component, A as transition_in, y as transition_out, D as destroy_component, J as set_store_value, F as group_outros, z as check_outros, e as element, f as claim_element, g as children, j as attr_dev, k as add_location, t as text, h as claim_text, m as append_dev } from './client.97501c25.js';
import './index.cccde779.js';
import './index.01b49c54.js';
import { T as TransHelp, C as Complete, B as Back } from './Back.ffa42a02.js';
import { c as count, s as step, q as quizSteps, t as timerActive, p as progress } from './store.b7336a1a.js';
import { B as Btn } from './Btn.3ebf1842.js';

/* src/routes/quiz/q1.svelte generated by Svelte v3.23.2 */

const { console: console_1, document: document_1 } = globals;
const file = "src/routes/quiz/q1.svelte";

// (65:0) {:else}
function create_else_block(ctx) {
	let video_1;
	let t;
	let complete;
	let current;

	complete = new Complete({
			props: {
				p: 4.1,
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			video_1 = element("video");
			t = space();
			create_component(complete.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			video_1 = claim_element(nodes, "VIDEO", { autoplay: true, id: true });
			children(video_1).forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(complete.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			video_1.autoplay = "true";
			attr_dev(video_1, "id", "videoElement");
			add_location(video_1, file, 65, 4, 2715);
		},
		m: function mount(target, anchor) {
			insert_dev(target, video_1, anchor);
			insert_dev(target, t, anchor);
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
			if (detaching) detach_dev(video_1);
			if (detaching) detach_dev(t);
			destroy_component(complete, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(65:0) {:else}",
		ctx
	});

	return block;
}

// (58:19) 
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
				p: 4.1,
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
			add_location(video_1, file, 58, 29, 2377);
			attr_dev(div, "class", "video-holder svelte-1ei4p");
			add_location(div, file, 58, 3, 2351);
			attr_dev(p0, "id", "alert");
			attr_dev(p0, "class", "svelte-1ei4p");
			add_location(p0, file, 59, 4, 2437);
			attr_dev(p1, "id", "not-covered");
			attr_dev(p1, "class", "svelte-1ei4p");
			add_location(p1, file, 60, 4, 2477);
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
		source: "(58:19) ",
		ctx
	});

	return block;
}

// (49:19) 
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
				p: 4.1,
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	complete = new Complete({
			props: {
				success: false,
				p: 4.1,
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
			add_location(h2, file, 50, 1, 1933);
			add_location(p, file, 51, 1, 1961);
			attr_dev(div, "class", "button-holder svelte-1ei4p");
			add_location(div, file, 52, 1, 2162);
			add_location(section, file, 49, 0, 1922);
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
		source: "(49:19) ",
		ctx
	});

	return block;
}

// (43:0) {#if $step==0}
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
				p: 4.1,
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
			add_location(h2, file, 44, 1, 1389);
			add_location(br, file, 45, 125, 1548);
			add_location(p, file, 45, 4, 1427);
			add_location(section, file, 43, 0, 1378);
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
		source: "(43:0) {#if $step==0}",
		ctx
	});

	return block;
}

// (67:4) <Complete p={4.1}>
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
		source: "(67:4) <Complete p={4.1}>",
		ctx
	});

	return block;
}

// (62:4) <Complete p={4.1}>
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
		source: "(62:4) <Complete p={4.1}>",
		ctx
	});

	return block;
}

// (54:8) <Btn p={4.1}>
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
		source: "(54:8) <Btn p={4.1}>",
		ctx
	});

	return block;
}

// (55:8) <Complete success={false} p={4.1}>
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
		source: "(55:8) <Complete success={false} p={4.1}>",
		ctx
	});

	return block;
}

// (47:4) <Btn p={4.1}>
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
		source: "(47:4) <Btn p={4.1}>",
		ctx
	});

	return block;
}

// (41:0) <Trans>
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
		source: "(41:0) <Trans>",
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

			if (dirty & /*$$scope, $step*/ 33) {
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
	let $step;
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(2, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(3, $count = $$value));
	validate_store(timerActive, "timerActive");
	component_subscribe($$self, timerActive, $$value => $$invalidate(4, $timerActive = $$value));
	validate_store(step, "step");
	component_subscribe($$self, step, $$value => $$invalidate(0, $step = $$value));

	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
		timerActive.set(!$timerActive);
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
	}); //video.srcObject = null;

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Q1> was created with unknown prop '${key}'`);
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
		Btn,
		count,
		step,
		quizSteps,
		timerActive,
		progress,
		Back,
		video,
		$quizSteps,
		$count,
		$timerActive,
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
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q1",
			options,
			id: create_fragment.name
		});
	}
}

export default Q1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTEuNjUxNGQ4NTguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBvbk1vdW50LCBiZWZvcmVVcGRhdGUsIGFmdGVyVXBkYXRlLCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnO1xuICAgIGltcG9ydCBUcmFucyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RyYW5zSGVscC5zdmVsdGUnO1xuICAgIGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSdcblx0aW1wb3J0IEJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J0bi5zdmVsdGUnIC8vc2V0IDxOZXh0IHE9ezJ9PiB0byBza2lwIG11bHRpcGxlIHN0ZXBzXG4gICAgaW1wb3J0IHsgY291bnQsIHN0ZXAsIHF1aXpTdGVwcywgdGltZXJBY3RpdmUsIHByb2dyZXNzfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcbiAgICBpbXBvcnQgQmFjayBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JhY2suc3ZlbHRlJ1xuXG4gICAgLy9zZXRzIGFzaWRlIGljb24gdG8gaW4gcHJvZ3Jlc3MgdmlhIHN0b3JlXG4gICAgb25Nb3VudChhc3luYygpID0+IHtcbiAgICAgICAgJHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDE7XG4gICAgICAgIHRpbWVyQWN0aXZlLnNldCghJHRpbWVyQWN0aXZlKX0pO1xuICAgIC8vU3RhcnQgVmlkZW8gb24gdXBkYXRlXG4gICAgbGV0IHZpZGVvO1xuXHRhZnRlclVwZGF0ZShhc3luYygpID0+IHtcblx0dmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZGVvRWxlbWVudFwiKTtcblx0aWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKSB7XG4gIFx0bmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyB2aWRlbzogdHJ1ZSB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChzdHJlYW0pIHtcblx0XHRcdHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyMHIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTm90IGxvYWRlZFwiKTtcbiAgICB9KTtcblx0XHR9XG59KVxuLy9zdG9wIHZpZGVvIGZ1bmN0aW9uIG9uIGVuZCBvZiBjb21wb25lbnQgICBcbiAgICBhZnRlclVwZGF0ZShhc3luYygpID0+IHsgXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BTdHJlYW1lZFZpZGVvKHZpZGVvKSB7IFxuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gdmlkZW8uc3JjT2JqZWN0O1xuICAgICAgICAgICAgY29uc3QgdHJhY2tzID0gc3RyZWFtLmdldFRyYWNrcygpO1xuICAgICAgICAgICAgICAgIHRyYWNrc1swXS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vdmlkZW8uc3JjT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5XZWJjYW0gQ2hhbGxlbmdlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48VHJhbnM+XG5cbnsjaWYgJHN0ZXA9PTB9XG48c2VjdGlvbj5cblx0PGgyPklzIHlvdXIgV2ViY2FtIENvdmVyZWQ/PC9oMj4gXG4gICAgPHA+SXTigJlzIGxpa2VseSB5b3VyIGNvbXB1dGVyIGFscmVhZHkgaGFzIGEgYnVpbHQtaW4gY2FtZXJhLCBhbmQgaXTigJlzIHBvc3NpYmxlIGZvciB0aGF0IGNhbWVyYSB0byBiZSB1c2VkIHRvIHNweSBvbiB5b3UuICA8YnI+ICBJZiB5b3VyIHdlYmNhbSBmb3Igd2hhdGV2ZXIgcmVhc29uIGhhcyBiZWVuIGhhY2tlZCwgdGhlIHBlcnNvbiBvbiB0aGUgb3RoZXIgc2lkZSBjYW4gdGFrZSBwaWN0dXJlcyBhbmQgdmlkZW8gb2YgYW55dGhpbmcgb3IgYW55b25lLiBObywgdGhpcyBpc27igJl0IGp1c3QgcGFyYW5vaWHigJNhIHJlY2VudCBzdXJ2ZXkgY29uZHVjdGVkIGJ5IEhQIGZvdW5kIHRoYXQgMTAlIGluIHRoZSBVLlMuIGVpdGhlciBrbm93IHNvbWVvbmUgd2hvc2Ugd2ViY2FtIHdhcyBoYWNrZWQgb3IgaGF2ZSBoYWQgdGhlaXIgb3duIHdlYmNhbSBoYWNrZWQuPC9wPlxuICAgIDxCdG4gcD17NC4xfT5Db250aW51ZTwvQnRuPlxuPC9zZWN0aW9uPlxuezplbHNlIGlmICRzdGVwPT0xfVxuPHNlY3Rpb24+XG5cdDxoMj5Db3ZlciBZb3VyIFdlYmNhbTwvaDI+XG5cdDxwPkNvdmVyIHlvdXIgd2ViY2FtLiBZb3UgY2FuIGdldCBmYW5jeSByZW1vdmFibGUgc3RpY2tlcnMgZm9yIHRoaXMgcHVycG9zZSwgYnV0IGZvciBub3csIGZpbmQgYSBzdGlja3kgbm90ZSBvciBwaWVjZSBvZiBtYXNraW5nIHRhcGUgYW5kIGNvdmVyIHlvdXIgd2ViY2FtIHdoZW4gaXTigJlzIG5vdCBpbiB1c2UgKGxpa2UgcmlnaHQgbm93KS4gPC9wPlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuICAgICAgICA8QnRuIHA9ezQuMX0+SXQncyBjb3ZlcmVkPC9CdG4+XG4gICAgICAgIDxDb21wbGV0ZSBzdWNjZXNzPXtmYWxzZX0gcD17NC4xfT5ObyBUaGFua3MsIEl0J3MgYSBoYXNzbGU8L0NvbXBsZXRlPiBcblx0PC9kaXY+XG48L3NlY3Rpb24+XG57OmVsc2UgaWYgJHN0ZXA9PTJ9XG4gICA8ZGl2IGNsYXNzPVwidmlkZW8taG9sZGVyXCI+PHZpZGVvIGF1dG9wbGF5PVwidHJ1ZVwiIGlkPVwidmlkZW9FbGVtZW50XCI+PC92aWRlbz48L2Rpdj5cbiAgICA8cCBpZD1cImFsZXJ0XCI+Q292ZXIgeW91ciB3ZWJjYW08L3A+XG4gICAgPHAgaWQ9XCJub3QtY292ZXJlZFwiPllvdSBoYXZlbuKAmXQgY292ZXJlZCB5b3VyIHdlYmNhbWUgb3IgZGlkIG5vdCBkbyBpdCBwcm9wZXJseS4gUGxlYXNlIGNvdmVyIHlvdXIgd2ViY2FtIGNvbXBsZXRlbHkgdG8gcHJvY2VlZCB0byB0aGUgbmV4dCBzdGVwLjwvcD5cbiAgICA8Q29tcGxldGUgcD17NC4xfT5cbiAgICAgICAgT253YXJkcyB0byB0aGUgbmV4dCBjaGFsbGVuZ2VcbiAgICA8L0NvbXBsZXRlPlxuezplbHNlfVxuICAgIDx2aWRlbyBhdXRvcGxheT1cInRydWVcIiBpZD1cInZpZGVvRWxlbWVudFwiPjwvdmlkZW8+XG4gICAgPENvbXBsZXRlIHA9ezQuMX0+XG4gICAgICAgIE9ud2FyZHMgdG8gdGhlIG5leHQgY2hhbGxlbmdlXG4gICAgPC9Db21wbGV0ZT5cbnsvaWZ9XG5cbjxCYWNrLz5cbjwvVHJhbnM+XG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIC52aWRlby1ob2xkZXJ7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG4gICAjYWxlcnQge1xuICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgfVxuICAgI25vdC1jb3ZlcmVkIHtcbiAgICAgICBjb2xvcjogcmVkO1xuICAgICAgIGJhY2tncm91bmQ6ICNGRkVFRUU7XG4gICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgIGJvcmRlcjogbm9uZTtcbiAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWtFaUIsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BTEgsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQVJKLEdBQUc7Ozs7Ozs7OzthQUNRLEtBQUs7T0FBSyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQVI1QixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBSlYsR0FBSyxPQUFFLENBQUM7Z0JBTUgsR0FBSyxPQUFFLENBQUM7Z0JBU1IsR0FBSyxPQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FoRGQsT0FBTzs2QkFDSCxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDO0VBQzdCLFdBQVcsQ0FBQyxHQUFHLEVBQUUsWUFBWTs7OztLQUU3QixLQUFLOztDQUNaLFdBQVc7RUFDWCxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlOztNQUMxQyxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVk7R0FDckMsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLEdBQUcsS0FBSyxFQUFFLElBQUksSUFDL0MsSUFBSSxXQUFXLE1BQU07SUFDdkIsS0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFNO01BRXRCLEtBQUssV0FBVyxLQUFLO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTs7Ozs7O0NBSzFCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
