import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, u as globals, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, o as validate_store, p as component_subscribe, T as onMount, U as afterUpdate, V as beforeUpdate, W as onDestroy, a as space, w as create_component, q as query_selector_all, c as claim_space, x as claim_component, y as mount_component, B as transition_in, z as transition_out, E as destroy_component, P as set_store_value, G as group_outros, A as check_outros, j as attr_dev, X as listen_dev, Y as run_all } from './client.515cba29.js';
import './index.42fd54b0.js';
import { T as TransHelp, C as Complete } from './complete.03b34fb3.js';
import { c as count, s as step, q as quizSteps } from './store.c97b8231.js';

/* src/components/Back.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/components/Back.svelte";

function create_fragment(ctx) {
	let button;
	let t;

	const block = {
		c: function create() {
			button = element("button");
			t = text("Back");
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", {});
			var button_nodes = children(button);
			t = claim_text(button_nodes, "Back");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(button, file, 6, 0, 123);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
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

function goBack() {
	console.log("something");
}

function instance($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Back> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Back", $$slots, []);
	$$self.$capture_state = () => ({ count, step, quizSteps, goBack });
	return [];
}

class Back extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Back",
			options,
			id: create_fragment.name
		});
	}
}

/* src/routes/quiz/q1dup.svelte generated by Svelte v3.23.2 */

const { console: console_1$1, document: document_1 } = globals;
const file$1 = "src/routes/quiz/q1dup.svelte";

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
			add_location(video_1, file$1, 77, 4, 2869);
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
			add_location(video_1, file$1, 69, 29, 2458);
			attr_dev(div, "class", "video-holder svelte-1sss75x");
			add_location(div, file$1, 69, 3, 2432);
			attr_dev(p0, "id", "alert");
			attr_dev(p0, "class", "svelte-1sss75x");
			add_location(p0, file$1, 70, 4, 2518);
			attr_dev(p1, "id", "not-covered");
			attr_dev(p1, "class", "svelte-1sss75x");
			add_location(p1, file$1, 71, 4, 2558);
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
			add_location(h2, file$1, 61, 1, 2008);
			add_location(p, file$1, 62, 1, 2036);
			attr_dev(button0, "class", "svelte-1sss75x");
			add_location(button0, file$1, 64, 8, 2273);
			attr_dev(button1, "class", "svelte-1sss75x");
			add_location(button1, file$1, 65, 8, 2330);
			attr_dev(div, "class", "button-holder svelte-1sss75x");
			add_location(div, file$1, 63, 1, 2237);
			add_location(section, file$1, 60, 0, 1997);
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
			add_location(h2, file$1, 55, 1, 1457);
			add_location(br, file$1, 56, 122, 1613);
			add_location(p, file$1, 56, 1, 1492);
			attr_dev(button, "class", "svelte-1sss75x");
			add_location(button, file$1, 57, 1, 1925);
			add_location(section, file$1, 54, 0, 1446);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<Q1dup> was created with unknown prop '${key}'`);
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
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q1dup",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Q1dup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTFkdXAuMjQxYzI0NjkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0JhY2suc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9xdWl6L3ExZHVwLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgY291bnQsIHN0ZXAsIHF1aXpTdGVwcyB9IGZyb20gJy4uL3N0b3JlLmpzJ1xuZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGNvbnNvbGUubG9nKCdzb21ldGhpbmcnKVxufVxuPC9zY3JpcHQ+XG48YnV0dG9uPlxuICAgIEJhY2tcbjwvYnV0dG9uPlxuPHN0eWxlPlxuXG48L3N0eWxlPiIsIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgb25Nb3VudCwgYmVmb3JlVXBkYXRlLCBhZnRlclVwZGF0ZSwgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcbiAgICBpbXBvcnQgVHJhbnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlJztcbiAgICBpbXBvcnQgQ29tcGxldGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wbGV0ZS5zdmVsdGUnXG4gICAgaW1wb3J0IEJhY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYWNrLnN2ZWx0ZSdcbiAgICBpbXBvcnQgeyBjb3VudCB9IGZyb20gJy4uLy4uL3N0b3JlLmpzJ1xuICAgIGltcG9ydCB7IHF1aXpTdGVwcyB9IGZyb20gJy4uLy4uL3N0b3JlLmpzJ1xuXHRcbiAgICBsZXQgcSA9IDA7XG4gICAgbGV0IGlzQWN0aXZlO1xuXHRmdW5jdGlvbiBhZHZhbmNlKCkge1xuXHRcdHErKztcbiAgICAgICAgY29uc29sZS5sb2cocSk7XG4gICAgICAgIGlmIChxPTIpIHtcbiAgICAgICAgICAgIGlzQWN0aXZlPSB0cnVlO1xuICAgICAgICB9XG5cdH1cblx0ZnVuY3Rpb24gYWR2YW5jZVR3bygpIHtcblx0XHRxKz0yO1xuXHRcdGNvbnNvbGUubG9nKHEpO1xuICAgIH1cbiAgICAvL3NldHMgYXNpZGUgaWNvbiB0byBpbiBwcm9ncmVzcyB2aWEgc3RvcmVcbiAgICBvbk1vdW50KGFzeW5jKCkgPT4geyRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxfSk7XG4gICAgLy9TdGFydCBWaWRlbyBvbiB1cGRhdGVcbiAgICBsZXQgdmlkZW87XG5cdGFmdGVyVXBkYXRlKGFzeW5jKCkgPT4ge1xuXHR2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlkZW9FbGVtZW50XCIpO1xuXHRpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpIHtcbiAgXHRuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IHZpZGVvOiB0cnVlIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHN0cmVhbSkge1xuXHRcdFx0dmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIwcikge1xuICAgICAgY29uc29sZS5sb2coXCJOb3QgbG9hZGVkXCIpO1xuICAgIH0pO1xuXHRcdH1cbn0pXG4vL3N0b3AgdmlkZW8gZnVuY3Rpb24gb24gZW5kIG9mIGNvbXBvbmVudCAgIFxuICAgIGFmdGVyVXBkYXRlKGFzeW5jKCkgPT4geyBcbiAgICAgICAgZnVuY3Rpb24gc3RvcFN0cmVhbWVkVmlkZW8odmlkZW8pIHsgXG4gICAgICAgICAgICBjb25zdCBzdHJlYW0gPSB2aWRlby5zcmNPYmplY3Q7XG4gICAgICAgICAgICBjb25zdCB0cmFja3MgPSBzdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgICAgICAgICAgICAgdHJhY2tzWzBdLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5XZWJjYW0gQ2hhbGxlbmdlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48VHJhbnM+XG5cbnsjaWYgcT09MH1cbjxzZWN0aW9uPlxuXHQ8aDI+SXMgeW91ciBXZWJjYW0gQ292ZXJlZD88L2gyPiBcblx0PHA+SXTigJlzIGxpa2VseSB5b3VyIGNvbXB1dGVyIGFscmVhZHkgaGFzIGEgYnVpbHQtaW4gY2FtZXJhLCBhbmQgaXTigJlzIHBvc3NpYmxlIGZvciB0aGF0IGNhbWVyYSB0byBiZSB1c2VkIHRvIHNweSBvbiB5b3UuICA8YnI+ICBJZiB5b3VyIHdlYmNhbSBmb3Igd2hhdGV2ZXIgcmVhc29uIGhhcyBiZWVuIGhhY2tlZCwgdGhlIHBlcnNvbiBvbiB0aGUgb3RoZXIgc2lkZSBjYW4gdGFrZSBwaWN0dXJlcyBhbmQgdmlkZW8gb2YgYW55dGhpbmcgb3IgYW55b25lLiBObywgdGhpcyBpc27igJl0IGp1c3QgcGFyYW5vaWHigJNhIHJlY2VudCBzdXJ2ZXkgY29uZHVjdGVkIGJ5IEhQIGZvdW5kIHRoYXQgMTAlIGluIHRoZSBVLlMuIGVpdGhlciBrbm93IHNvbWVvbmUgd2hvc2Ugd2ViY2FtIHdhcyBoYWNrZWQgb3IgaGF2ZSBoYWQgdGhlaXIgb3duIHdlYmNhbSBoYWNrZWQuPC9wPlxuXHQ8YnV0dG9uIG9uOmNsaWNrPXthZHZhbmNlfT5Db250aW51ZTwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuezplbHNlIGlmIHE9PTF9XG48c2VjdGlvbj5cblx0PGgyPkNvdmVyIFlvdXIgV2ViY2FtPC9oMj5cblx0PHA+Q292ZXIgeW91ciB3ZWJjYW0uIFlvdSBjYW4gZ2V0IGZhbmN5IHJlbW92YWJsZSBzdGlja2VycyBmb3IgdGhpcyBwdXJwb3NlLCBidXQgZm9yIG5vdywgZmluZCBhIHN0aWNreSBub3RlIG9yIHBpZWNlIG9mIG1hc2tpbmcgdGFwZSBhbmQgY292ZXIgeW91ciB3ZWJjYW0gd2hlbiBpdOKAmXMgbm90IGluIHVzZSAobGlrZSByaWdodCBub3cpLiA8L3A+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG4gICAgICAgIDxidXR0b24gb246Y2xpY2s9e2FkdmFuY2V9Pkl0J3MgY292ZXJlZDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uOmNsaWNrPXthZHZhbmNlVHdvfT5ObyBUaGFua3MsIEl0J3MgYSBoYXNzbGU8L2J1dHRvbj5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57OmVsc2UgaWYgcT09Mn1cbiAgIDxkaXYgY2xhc3M9XCJ2aWRlby1ob2xkZXJcIj48dmlkZW8gYXV0b3BsYXk9XCJ0cnVlXCIgaWQ9XCJ2aWRlb0VsZW1lbnRcIj48L3ZpZGVvPjwvZGl2PlxuICAgIDxwIGlkPVwiYWxlcnRcIj5Db3ZlciB5b3VyIHdlYmNhbTwvcD5cbiAgICA8cCBpZD1cIm5vdC1jb3ZlcmVkXCI+WW91IGhhdmVu4oCZdCBjb3ZlcmVkIHlvdXIgd2ViY2FtZSBvciBkaWQgbm90IGRvIGl0IHByb3Blcmx5LiBQbGVhc2UgY292ZXIgeW91ciB3ZWJjYW0gY29tcGxldGVseSB0byBwcm9jZWVkIHRvIHRoZSBuZXh0IHN0ZXAuPC9wPlxuICAgIDwhLS08YnV0dG9uIG9uOmNsaWNrPXtpbmNvbXBsZXRlfT5PbndhcmRzIHRvIHRoZSBuZXh0IGNoYWxsZW5nZTwvYnV0dG9uPiAtLT5cbiAgICA8Q29tcGxldGU+XG4gICAgICAgIE9ud2FyZHMgdG8gdGhlIG5leHQgY2hhbGxlbmdlXG4gICAgPC9Db21wbGV0ZT5cbns6ZWxzZX1cbiAgICA8dmlkZW8gYXV0b3BsYXk9XCJ0cnVlXCIgaWQ9XCJ2aWRlb0VsZW1lbnRcIj48L3ZpZGVvPlxuey9pZn1cbjxCYWNrLz5cbjwvVHJhbnM+XG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIC52aWRlby1ob2xkZXJ7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG4gICBidXR0b24ge1xuXHQgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdCAgIG1hcmdpbjogMTBweDtcblx0ICAgYm9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG5cdCAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgIH1cbiAgICNhbGVydCB7XG4gICAgICAgY29sb3I6IHJlZDtcbiAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICB9XG4gICAjbm90LWNvdmVyZWQge1xuICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgYmFja2dyb3VuZDogI0ZGRUVFRTtcbiAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgYm9yZGVyOiBub25lO1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFUyxNQUFNO0NBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQzZERCxHQUFPO2lEQUNQLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFSakIsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSnJCLEdBQUMsT0FBRSxDQUFDO1lBTUMsR0FBQyxPQUFFLENBQUM7WUFTSixHQUFDLE9BQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E1RE4sQ0FBQyxHQUFHLENBQUM7S0FDTCxRQUFROztVQUNOLE9BQU87a0JBQ2YsQ0FBQztFQUNLLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7c0JBQ1QsQ0FBQyxHQUFDLENBQUM7R0FDSCxRQUFRLEdBQUUsSUFBSTs7OztVQUdoQixVQUFVO2tCQUNsQixDQUFDLElBQUUsQ0FBQztFQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7OztDQUdYLE9BQU87NkJBQWEsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQzs7OztLQUU3QyxLQUFLOztDQUNaLFdBQVc7RUFDWCxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlOztNQUMxQyxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVk7R0FDckMsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLEdBQUcsS0FBSyxFQUFFLElBQUksSUFDL0MsSUFBSSxXQUFXLE1BQU07SUFDdkIsS0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFNO01BRXRCLEtBQUssV0FBVyxLQUFLO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTs7Ozs7O0NBSzFCLFdBQVc7O0VBT0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
