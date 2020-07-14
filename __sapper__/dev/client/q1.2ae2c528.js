import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as createEventDispatcher, N as afterUpdate, O as onDestroy, v as validate_slots, P as onMount, p as globals, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, k as add_location, l as insert_dev, A as add_render_callback, Q as create_in_transition, R as create_out_transition, j as attr_dev, n as noop, t as text, h as claim_text, m as append_dev, T as listen_dev, U as run_all } from './client.34fb4cd5.js';
import { s as slide, q as quintOut, a as quintIn } from './index.0c0fb0ea.js';

/* src/routes/quiz/q1.svelte generated by Svelte v3.23.2 */

const { console: console_1, document: document_1 } = globals;
const file = "src/routes/quiz/q1.svelte";

// (86:0) {:else}
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
			add_location(video_1, file, 86, 4, 3016);
		},
		m: function mount(target, anchor) {
			insert_dev(target, video_1, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(video_1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(86:0) {:else}",
		ctx
	});

	return block;
}

// (81:15) 
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
	let button;
	let t5;
	let mounted;
	let dispose;

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
			button = element("button");
			t5 = text("Onwards to the next challenge");
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
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t5 = claim_text(button_nodes, "Onwards to the next challenge");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			video_1.autoplay = "true";
			attr_dev(video_1, "id", "videoElement");
			add_location(video_1, file, 81, 29, 2682);
			attr_dev(div, "class", "video-holder svelte-1sss75x");
			add_location(div, file, 81, 3, 2656);
			attr_dev(p0, "id", "alert");
			attr_dev(p0, "class", "svelte-1sss75x");
			add_location(p0, file, 82, 4, 2742);
			attr_dev(p1, "id", "not-covered");
			attr_dev(p1, "class", "svelte-1sss75x");
			add_location(p1, file, 83, 4, 2782);
			attr_dev(button, "class", "svelte-1sss75x");
			add_location(button, file, 84, 4, 2935);
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
			insert_dev(target, button, anchor);
			append_dev(button, t5);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*incomplete*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(81:15) ",
		ctx
	});

	return block;
}

// (72:15) 
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
			add_location(h2, file, 73, 1, 2232);
			add_location(p, file, 74, 1, 2260);
			attr_dev(button0, "class", "svelte-1sss75x");
			add_location(button0, file, 76, 8, 2497);
			attr_dev(button1, "class", "svelte-1sss75x");
			add_location(button1, file, 77, 8, 2554);
			attr_dev(div, "class", "button-holder svelte-1sss75x");
			add_location(div, file, 75, 1, 2461);
			add_location(section, file, 72, 0, 2221);
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
					listen_dev(button0, "click", /*advance*/ ctx[2], false, false, false),
					listen_dev(button1, "click", /*advanceTwo*/ ctx[3], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
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
		source: "(72:15) ",
		ctx
	});

	return block;
}

// (66:0) {#if q==0}
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
			add_location(h2, file, 67, 1, 1681);
			add_location(br, file, 68, 122, 1837);
			add_location(p, file, 68, 1, 1716);
			attr_dev(button, "class", "svelte-1sss75x");
			add_location(button, file, 69, 1, 2149);
			add_location(section, file, 66, 0, 1670);
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
				dispose = listen_dev(button, "click", /*advance*/ ctx[2], false, false, false);
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
		source: "(66:0) {#if q==0}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let div;
	let div_intro;
	let div_outro;
	let current;

	function select_block_type(ctx, dirty) {
		if (/*q*/ ctx[0] == 0) return create_if_block;
		if (/*q*/ ctx[0] == 1) return create_if_block_1;
		if (/*q*/ ctx[0] == 2) return create_if_block_2;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			t = space();
			div = element("div");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-11mvzac\"]", document_1.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document_1.title = "Webcam Challenge";
			add_location(div, file, 64, 0, 1533);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);
			if_block.m(div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (div_outro) div_outro.end(1);

				if (!div_intro) div_intro = create_in_transition(div, slide, {
					delay: 200,
					duration: 1000,
					easing: quintOut
				});

				div_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			if (div_intro) div_intro.invalidate();

			div_outro = create_out_transition(div, slide, {
				delay: 100,
				duration: 800,
				easing: quintIn
			});

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
			if_block.d();
			if (detaching && div_outro) div_outro.end();
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

	//confirm comletion of quiz to master quiz component
	function complete() {
		dispatch("message", {
			question: 0, //Q-1 becaue of array
			complete: "true"
		});
	}

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
		slide,
		quintOut,
		quintIn,
		dispatch,
		complete,
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

	return [q, incomplete, advance, advanceTwo];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTEuMmFlMmM1MjguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuICAgIGltcG9ydCB7IG9uTW91bnQsIGFmdGVyVXBkYXRlLCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnO1xuICAgIGltcG9ydCB7IHNsaWRlIH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIGltcG9ydCB7IHF1aW50T3V0LCBxdWludEluIH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG5cblxuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXG5cdC8vY29uZmlybSBjb21sZXRpb24gb2YgcXVpeiB0byBtYXN0ZXIgcXVpeiBjb21wb25lbnRcblx0ZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMCwgLy9RLTEgYmVjYXVlIG9mIGFycmF5XG5cdFx0XHRjb21wbGV0ZTogJ3RydWUnXG5cdFx0fSk7XG5cdH1cblx0ZnVuY3Rpb24gaW5jb21wbGV0ZSgpIHtcblx0XHRkaXNwYXRjaCgnbWVzc2FnZScsIHtcblx0XHRcdHF1ZXN0aW9uOiAwLCAvL1EtMSBiZWNhdWUgb2YgYXJyYXlcblx0XHRcdGNvbXBsZXRlOiAnZmFsc2UnXG5cdFx0fSk7XG5cdH1cbiAgICBsZXQgcSA9IDA7XG4gICAgbGV0IGlzQWN0aXZlO1xuXHRmdW5jdGlvbiBhZHZhbmNlKCkge1xuXHRcdHErKztcbiAgICAgICAgY29uc29sZS5sb2cocSk7XG4gICAgICAgIGlmIChxPTIpIHtcbiAgICAgICAgICAgIGlzQWN0aXZlPSB0cnVlO1xuICAgICAgICB9XG5cdH1cblx0ZnVuY3Rpb24gYWR2YW5jZVR3bygpIHtcblx0XHRxKz0yO1xuXHRcdGNvbnNvbGUubG9nKHEpO1xuICAgIH1cbiAgICBcbiAgICAvL1N0YXJ0IFZpZGVvIG9uIHVwZGF0ZVxuICAgIGxldCB2aWRlbztcblx0YWZ0ZXJVcGRhdGUoYXN5bmMoKSA9PiB7XG5cdHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWRlb0VsZW1lbnRcIik7XG5cdGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICBcdG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUgfSlcbiAgICAudGhlbihmdW5jdGlvbiAoc3RyZWFtKSB7XG5cdFx0XHR2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycjByKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vdCBsb2FkZWRcIik7XG4gICAgfSk7XG5cdFx0fVxufSlcbi8vc3RvcCB2aWRlbyBmdW5jdGlvbiBvbiBlbmQgb2YgY29tcG9uZW50ICAgXG4gICAgb25EZXN0cm95KGFzeW5jKCkgPT4geyBcbiAgICAgICAgZnVuY3Rpb24gc3RvcFN0cmVhbWVkVmlkZW8odmlkZW8pIHsgXG4gICAgICAgICAgICBjb25zdCBzdHJlYW0gPSB2aWRlby5zcmNPYmplY3Q7XG4gICAgICAgICAgICBjb25zdCB0cmFja3MgPSBzdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgICAgICAgICAgICAgdHJhY2tzWzBdLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5XZWJjYW0gQ2hhbGxlbmdlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48ZGl2IGluOnNsaWRlPVwie3tkZWxheTogMjAwLCBkdXJhdGlvbjogMTAwMCwgZWFzaW5nOiBxdWludE91dH19XCIgb3V0OnNsaWRlPVwie3tkZWxheTogMTAwLCBkdXJhdGlvbjogODAwLCBlYXNpbmc6IHF1aW50SW59fVwiID5cbnsjaWYgcT09MH1cbjxzZWN0aW9uPlxuXHQ8aDI+SXMgeW91ciBXZWJjYW0gQ292ZXJlZD88L2gyPiBcblx0PHA+SXTigJlzIGxpa2VseSB5b3VyIGNvbXB1dGVyIGFscmVhZHkgaGFzIGEgYnVpbHQtaW4gY2FtZXJhLCBhbmQgaXTigJlzIHBvc3NpYmxlIGZvciB0aGF0IGNhbWVyYSB0byBiZSB1c2VkIHRvIHNweSBvbiB5b3UuICA8YnI+ICBJZiB5b3VyIHdlYmNhbSBmb3Igd2hhdGV2ZXIgcmVhc29uIGhhcyBiZWVuIGhhY2tlZCwgdGhlIHBlcnNvbiBvbiB0aGUgb3RoZXIgc2lkZSBjYW4gdGFrZSBwaWN0dXJlcyBhbmQgdmlkZW8gb2YgYW55dGhpbmcgb3IgYW55b25lLiBObywgdGhpcyBpc27igJl0IGp1c3QgcGFyYW5vaWHigJNhIHJlY2VudCBzdXJ2ZXkgY29uZHVjdGVkIGJ5IEhQIGZvdW5kIHRoYXQgMTAlIGluIHRoZSBVLlMuIGVpdGhlciBrbm93IHNvbWVvbmUgd2hvc2Ugd2ViY2FtIHdhcyBoYWNrZWQgb3IgaGF2ZSBoYWQgdGhlaXIgb3duIHdlYmNhbSBoYWNrZWQuPC9wPlxuXHQ8YnV0dG9uIG9uOmNsaWNrPXthZHZhbmNlfT5Db250aW51ZTwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuezplbHNlIGlmIHE9PTF9XG48c2VjdGlvbj5cblx0PGgyPkNvdmVyIFlvdXIgV2ViY2FtPC9oMj5cblx0PHA+Q292ZXIgeW91ciB3ZWJjYW0uIFlvdSBjYW4gZ2V0IGZhbmN5IHJlbW92YWJsZSBzdGlja2VycyBmb3IgdGhpcyBwdXJwb3NlLCBidXQgZm9yIG5vdywgZmluZCBhIHN0aWNreSBub3RlIG9yIHBpZWNlIG9mIG1hc2tpbmcgdGFwZSBhbmQgY292ZXIgeW91ciB3ZWJjYW0gd2hlbiBpdOKAmXMgbm90IGluIHVzZSAobGlrZSByaWdodCBub3cpLiA8L3A+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG4gICAgICAgIDxidXR0b24gb246Y2xpY2s9e2FkdmFuY2V9Pkl0J3MgY292ZXJlZDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uOmNsaWNrPXthZHZhbmNlVHdvfT5ObyBUaGFua3MsIEl0J3MgYSBoYXNzbGU8L2J1dHRvbj5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57OmVsc2UgaWYgcT09Mn1cbiAgIDxkaXYgY2xhc3M9XCJ2aWRlby1ob2xkZXJcIj48dmlkZW8gYXV0b3BsYXk9XCJ0cnVlXCIgaWQ9XCJ2aWRlb0VsZW1lbnRcIj48L3ZpZGVvPjwvZGl2PlxuICAgIDxwIGlkPVwiYWxlcnRcIj5Db3ZlciB5b3VyIHdlYmNhbTwvcD5cbiAgICA8cCBpZD1cIm5vdC1jb3ZlcmVkXCI+WW91IGhhdmVu4oCZdCBjb3ZlcmVkIHlvdXIgd2ViY2FtZSBvciBkaWQgbm90IGRvIGl0IHByb3Blcmx5LiBQbGVhc2UgY292ZXIgeW91ciB3ZWJjYW0gY29tcGxldGVseSB0byBwcm9jZWVkIHRvIHRoZSBuZXh0IHN0ZXAuPC9wPlxuICAgIDxidXR0b24gb246Y2xpY2s9e2luY29tcGxldGV9Pk9ud2FyZHMgdG8gdGhlIG5leHQgY2hhbGxlbmdlPC9idXR0b24+XG57OmVsc2V9XG4gICAgPHZpZGVvIGF1dG9wbGF5PVwidHJ1ZVwiIGlkPVwidmlkZW9FbGVtZW50XCI+PC92aWRlbz5cbnsvaWZ9XG48L2Rpdj5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgLnZpZGVvLWhvbGRlcntcbiAgICAgICB3aWR0aDogMTAwJTtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuICAgI2FsZXJ0IHtcbiAgICAgICBjb2xvcjogcmVkO1xuICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgIH1cbiAgICNub3QtY292ZXJlZCB7XG4gICAgICAgY29sb3I6IHJlZDtcbiAgICAgICBiYWNrZ3JvdW5kOiAjRkZFRUVFO1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICBib3JkZXI6IG5vbmU7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lEQW9Gc0IsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQVJOLEdBQU87aURBQ1AsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFSakIsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUpyQixHQUFDLE9BQUUsQ0FBQztZQU1DLEdBQUMsT0FBRSxDQUFDO1lBU0osR0FBQyxPQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWhCRyxLQUFLLEVBQUUsR0FBRztLQUFFLFFBQVEsRUFBRSxJQUFJO0tBQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7OztJQUFpQixLQUFLLEVBQUUsR0FBRztJQUFFLFFBQVEsRUFBRSxHQUFHO0lBQUUsTUFBTSxFQUFFLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F6RGpILFFBQVEsR0FBRyxxQkFBcUI7OztVQUc3QixRQUFRO0VBQ2hCLFFBQVEsQ0FBQyxTQUFTO0dBQ2pCLFFBQVEsRUFBRSxDQUFDO0dBQ1gsUUFBUSxFQUFFLE1BQU07Ozs7VUFHVCxVQUFVO0VBQ2xCLFFBQVEsQ0FBQyxTQUFTO0dBQ2pCLFFBQVEsRUFBRSxDQUFDO0dBQ1gsUUFBUSxFQUFFLE9BQU87Ozs7S0FHWixDQUFDLEdBQUcsQ0FBQztLQUNMLFFBQVE7O1VBQ04sT0FBTztrQkFDZixDQUFDO0VBQ0ssT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztzQkFDVCxDQUFDLEdBQUMsQ0FBQztHQUNILFFBQVEsR0FBRSxJQUFJOzs7O1VBR2hCLFVBQVU7a0JBQ2xCLENBQUMsSUFBRSxDQUFDO0VBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7O0tBSVAsS0FBSzs7Q0FDWixXQUFXO0VBQ1gsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZTs7TUFDMUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZO0dBQ3JDLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLEtBQUssRUFBRSxJQUFJLElBQy9DLElBQUksV0FBVyxNQUFNO0lBQ3ZCLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTTtNQUV0QixLQUFLLFdBQVcsS0FBSztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7Ozs7OztDQUsxQixTQUFTOztFQU9HLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
