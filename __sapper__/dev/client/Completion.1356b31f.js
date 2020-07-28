import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, H as empty, l as insert_dev, n as noop, b as detach_dev, e as element, f as claim_element, j as attr_dev, k as add_location, I as create_slot, J as validate_each_argument, o as validate_store, p as component_subscribe, K as set_store_value, L as beforeUpdate, M as globals, B as transition_in, G as group_outros, z as transition_out, A as check_outros, a as space, t as text, g as children, c as claim_space, h as claim_text, N as toggle_class, m as append_dev, O as update_slot, F as set_data_dev, P as prop_dev, Q as destroy_each, w as create_component, x as claim_component, y as mount_component, E as destroy_component } from './client.b108dfee.js';
import { c as cubicOut } from './index.cccde779.js';
import { t as timerActive, q as quizSteps, p as progress, a as tweened } from './store.ae3cfc77.js';

/* src/components/Check.svelte generated by Svelte v3.23.2 */

const file = "src/components/Check.svelte";

// (13:0) {:else}
function create_else_block(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "./un_checked.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "completed");
			attr_dev(img, "class", "active lock svelte-n4s916");
			add_location(img, file, 13, 4, 261);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(13:0) {:else}",
		ctx
	});

	return block;
}

// (10:22) 
function create_if_block_1(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "./checked.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "completed");
			attr_dev(img, "class", "active lock svelte-n4s916");
			add_location(img, file, 10, 4, 182);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(10:22) ",
		ctx
	});

	return block;
}

// (7:0) {#if active < 1 }
function create_if_block(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "./blank_circle.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "completed");
			attr_dev(img, "class", "active lock svelte-n4s916");
			add_location(img, file, 7, 4, 81);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(7:0) {#if active < 1 }",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*active*/ ctx[0] < 1) return create_if_block;
		if (/*active*/ ctx[0] > 1) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

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
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type !== (current_block_type = select_block_type(ctx))) {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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
	let { active } = $$props;
	active = 0;
	const writable_props = ["active"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Check> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Check", $$slots, []);

	$$self.$set = $$props => {
		if ("active" in $$props) $$invalidate(0, active = $$props.active);
	};

	$$self.$capture_state = () => ({ active });

	$$self.$inject_state = $$props => {
		if ("active" in $$props) $$invalidate(0, active = $$props.active);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [active];
}

class Check extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { active: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Check",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*active*/ ctx[0] === undefined && !("active" in props)) {
			console.warn("<Check> was created without expected prop 'active'");
		}
	}

	get active() {
		throw new Error("<Check>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set active(value) {
		throw new Error("<Check>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/Completion.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file$1 = "src/components/Completion.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[14] = list[i];
	return child_ctx;
}

// (39:12) {#if challenge.type != 'checkpoint'}
function create_if_block$1(ctx) {
	let check;
	let current;

	check = new Check({
			props: { active: /*challenge*/ ctx[14].status },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(check.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(check.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(check, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const check_changes = {};
			if (dirty & /*$quizSteps*/ 32) check_changes.active = /*challenge*/ ctx[14].status;
			check.$set(check_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(check.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(check.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(check, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(39:12) {#if challenge.type != 'checkpoint'}",
		ctx
	});

	return block;
}

// (38:8) {#each $quizSteps as challenge}
function create_each_block(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*challenge*/ ctx[14].type != "checkpoint" && create_if_block$1(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*challenge*/ ctx[14].type != "checkpoint") {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*$quizSteps*/ 32) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
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
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(38:8) {#each $quizSteps as challenge}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let aside;
	let section0;
	let span0;
	let t0;
	let span1;
	let t1;
	let t2;
	let t3;
	let t4;
	let section1;
	let t5;
	let progress_1;
	let current;
	const default_slot_template = /*$$slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);
	let each_value = /*$quizSteps*/ ctx[5];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			aside = element("aside");
			section0 = element("section");
			span0 = element("span");
			if (default_slot) default_slot.c();
			t0 = space();
			span1 = element("span");
			t1 = text(/*minutes*/ ctx[0]);
			t2 = text(":");
			t3 = text(/*seconds*/ ctx[1]);
			t4 = space();
			section1 = element("section");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t5 = space();
			progress_1 = element("progress");
			this.h();
		},
		l: function claim(nodes) {
			aside = claim_element(nodes, "ASIDE", { class: true });
			var aside_nodes = children(aside);
			section0 = claim_element(aside_nodes, "SECTION", { id: true, class: true });
			var section0_nodes = children(section0);
			span0 = claim_element(section0_nodes, "SPAN", { id: true, class: true });
			var span0_nodes = children(span0);
			if (default_slot) default_slot.l(span0_nodes);
			span0_nodes.forEach(detach_dev);
			t0 = claim_space(section0_nodes);
			span1 = claim_element(section0_nodes, "SPAN", { id: true, class: true });
			var span1_nodes = children(span1);
			t1 = claim_text(span1_nodes, /*minutes*/ ctx[0]);
			t2 = claim_text(span1_nodes, ":");
			t3 = claim_text(span1_nodes, /*seconds*/ ctx[1]);
			span1_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t4 = claim_space(aside_nodes);
			section1 = claim_element(aside_nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(section1_nodes);
			}

			section1_nodes.forEach(detach_dev);
			t5 = claim_space(aside_nodes);
			progress_1 = claim_element(aside_nodes, "PROGRESS", { value: true, max: true, class: true });
			children(progress_1).forEach(detach_dev);
			aside_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "id", "remaining");
			attr_dev(span0, "class", "svelte-19wr0vz");
			add_location(span0, file$1, 29, 8, 893);
			attr_dev(span1, "id", "minutes");
			attr_dev(span1, "class", "svelte-19wr0vz");
			add_location(span1, file$1, 34, 8, 980);
			attr_dev(section0, "id", "timer");
			attr_dev(section0, "class", "svelte-19wr0vz");
			add_location(section0, file$1, 28, 4, 864);
			attr_dev(section1, "class", "done svelte-19wr0vz");
			add_location(section1, file$1, 36, 4, 1045);
			progress_1.value = /*$progress*/ ctx[6];
			attr_dev(progress_1, "max", "100");
			attr_dev(progress_1, "class", "svelte-19wr0vz");
			add_location(progress_1, file$1, 43, 4, 1258);
			attr_dev(aside, "class", "svelte-19wr0vz");
			toggle_class(aside, "bg1", /*bg1*/ ctx[2]);
			toggle_class(aside, "bg2", /*bg2*/ ctx[3]);
			toggle_class(aside, "bg3", /*bg3*/ ctx[4]);
			add_location(aside, file$1, 27, 0, 822);
		},
		m: function mount(target, anchor) {
			insert_dev(target, aside, anchor);
			append_dev(aside, section0);
			append_dev(section0, span0);

			if (default_slot) {
				default_slot.m(span0, null);
			}

			append_dev(section0, t0);
			append_dev(section0, span1);
			append_dev(span1, t1);
			append_dev(span1, t2);
			append_dev(span1, t3);
			append_dev(aside, t4);
			append_dev(aside, section1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(section1, null);
			}

			append_dev(aside, t5);
			append_dev(aside, progress_1);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 256) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[8], dirty, null, null);
				}
			}

			if (!current || dirty & /*minutes*/ 1) set_data_dev(t1, /*minutes*/ ctx[0]);
			if (!current || dirty & /*seconds*/ 2) set_data_dev(t3, /*seconds*/ ctx[1]);

			if (dirty & /*$quizSteps*/ 32) {
				each_value = /*$quizSteps*/ ctx[5];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(section1, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (!current || dirty & /*$progress*/ 64) {
				prop_dev(progress_1, "value", /*$progress*/ ctx[6]);
			}

			if (dirty & /*bg1*/ 4) {
				toggle_class(aside, "bg1", /*bg1*/ ctx[2]);
			}

			if (dirty & /*bg2*/ 8) {
				toggle_class(aside, "bg2", /*bg2*/ ctx[3]);
			}

			if (dirty & /*bg3*/ 16) {
				toggle_class(aside, "bg3", /*bg3*/ ctx[4]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(aside);
			if (default_slot) default_slot.d(detaching);
			destroy_each(each_blocks, detaching);
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
	let $timer;
	let $timerActive;
	let $quizSteps;
	let $progress;
	validate_store(timerActive, "timerActive");
	component_subscribe($$self, timerActive, $$value => $$invalidate(11, $timerActive = $$value));
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(5, $quizSteps = $$value));
	validate_store(progress, "progress");
	component_subscribe($$self, progress, $$value => $$invalidate(6, $progress = $$value));
	let start = 30 * 60;
	let timer = tweened(start);
	validate_store(timer, "timer");
	component_subscribe($$self, timer, value => $$invalidate(10, $timer = value));

	setInterval(
		() => {
			if ($timer > 0 && $timerActive) set_store_value(timer, $timer--, $timer);
		},
		1000
	);

	console.log(bg1, bg2, bg3);

	beforeUpdate(() => {
		if ($quizSteps.id > 3) {
			$$invalidate(2, bg1 = false);
			$$invalidate(3, bg2 = true);
		}

		{
			if ($quizSteps.id > 8) {
				$$invalidate(3, bg2 = false);
				$$invalidate(4, bg3 = true);
			}
		}
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Completion> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Completion", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(8, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		tweened,
		cubicOut,
		Check,
		quizSteps,
		timerActive,
		progress,
		beforeUpdate,
		start,
		timer,
		$timer,
		$timerActive,
		minutes,
		minname,
		seconds,
		bg1,
		bg2,
		bg3,
		$quizSteps,
		$progress
	});

	$$self.$inject_state = $$props => {
		if ("start" in $$props) start = $$props.start;
		if ("timer" in $$props) $$invalidate(7, timer = $$props.timer);
		if ("minutes" in $$props) $$invalidate(0, minutes = $$props.minutes);
		if ("minname" in $$props) minname = $$props.minname;
		if ("seconds" in $$props) $$invalidate(1, seconds = $$props.seconds);
		if ("bg1" in $$props) $$invalidate(2, bg1 = $$props.bg1);
		if ("bg2" in $$props) $$invalidate(3, bg2 = $$props.bg2);
		if ("bg3" in $$props) $$invalidate(4, bg3 = $$props.bg3);
	};

	let minutes;
	let minname;
	let seconds;
	let bg1;
	let bg2;
	let bg3;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$timer*/ 1024) {
			 $$invalidate(0, minutes = Math.floor($timer / 60));
		}

		if ($$self.$$.dirty & /*minutes*/ 1) {
			 minname = minutes > 1 ? "mins" : "min";
		}

		if ($$self.$$.dirty & /*$timer, minutes*/ 1025) {
			 $$invalidate(1, seconds = Math.floor($timer - minutes * 60).toLocaleString("en", {
				minimumIntegerDigits: 2,
				useGrouping: false
			}));
		}
	};

	 $$invalidate(2, bg1 = true);
	 $$invalidate(3, bg2 = false);
	 $$invalidate(4, bg3 = false);

	return [
		minutes,
		seconds,
		bg1,
		bg2,
		bg3,
		$quizSteps,
		$progress,
		timer,
		$$scope,
		$$slots
	];
}

class Completion extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Completion",
			options,
			id: create_fragment$1.name
		});
	}
}

export { Completion as C };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxldGlvbi4xMzU2YjMxZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2hlY2suc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblxuICAgIGV4cG9ydCBsZXQgYWN0aXZlO1xuICAgIGFjdGl2ZSA9MDtcblxuPC9zY3JpcHQ+XG57I2lmIGFjdGl2ZSA8IDEgfVxuICAgIDxpbWcgc3JjPScuL2JsYW5rX2NpcmNsZS5zdmcnIGFsdD1cImNvbXBsZXRlZFwiIGNsYXNzPSdhY3RpdmUgbG9jaycgLz5cbiAgICBcbns6ZWxzZSBpZiBhY3RpdmUgPiAxIH1cbiAgICA8aW1nIHNyYz0nLi9jaGVja2VkLnN2ZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2FjdGl2ZSBsb2NrJyAvPlxuICBcbns6ZWxzZX1cbiAgICA8aW1nIHNyYz0nLi91bl9jaGVja2VkLnN2ZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2FjdGl2ZSBsb2NrJyAvPlxuICAgIFxuey9pZn1cbiA8c3R5bGU+XG4gICAgIC5sb2NrIHtcbiAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgfVxuIDwvc3R5bGU+IiwiPHNjcmlwdD5cbiAgICAvL3RvdGFsIHRpbWUgZm9yIGNvdW50ZG93blxuaW1wb3J0IHsgdHdlZW5lZCB9IGZyb20gJ3N2ZWx0ZS9tb3Rpb24nO1xuaW1wb3J0IHsgY3ViaWNPdXQgfSBmcm9tICdzdmVsdGUvZWFzaW5nJztcbmltcG9ydCBDaGVjayBmcm9tICcuL0NoZWNrLnN2ZWx0ZSc7XG5pbXBvcnQgeyBxdWl6U3RlcHMsIHRpbWVyQWN0aXZlLCBwcm9ncmVzcyB9IGZyb20gJy4uL3N0b3JlLmpzJztcbmltcG9ydCB7IGJlZm9yZVVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSc7XG4vL2NvbnNvbGUubG9nKCRxdWl6U3RlcHMpO1xubGV0IHN0YXJ0PSAzMCAqIDYwO1xubGV0IHRpbWVyID0gdHdlZW5lZChzdGFydCk7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoJHRpbWVyID4gMCAmJiAkdGltZXJBY3RpdmUpICR0aW1lci0tO1xuICB9LCAxMDAwKTtcblxuICAkOiBtaW51dGVzID0gTWF0aC5mbG9vcigkdGltZXIgLyA2MCk7XG4gICQ6IG1pbm5hbWUgPSBtaW51dGVzID4gMSA/IFwibWluc1wiIDogXCJtaW5cIjtcbiAgJDogc2Vjb25kcyA9IE1hdGguZmxvb3IoJHRpbWVyIC0gbWludXRlcyAqIDYwKS50b0xvY2FsZVN0cmluZygnZW4nLCB7bWluaW11bUludGVnZXJEaWdpdHM6Mix1c2VHcm91cGluZzpmYWxzZX0pXG5cbiQ6IGJnMSA9IHRydWU7XG4kOiBiZzIgPSBmYWxzZTtcbiQ6IGJnMyA9IGZhbHNlO1xuY29uc29sZS5sb2coYmcxLCBiZzIsIGJnMyk7XG5iZWZvcmVVcGRhdGUoKCkgPT5cbntpZigkcXVpelN0ZXBzLmlkID4gMyl7YmcxID0gZmFsc2U7IGJnMiA9IHRydWU7fVxue2lmKCRxdWl6U3RlcHMuaWQgPiA4KXtiZzI9IGZhbHNlOyBiZzM9IHRydWU7fVxufX0pXG48L3NjcmlwdD5cbjxhc2lkZSBjbGFzczpiZzEgY2xhc3M6YmcyIGNsYXNzOmJnMz5cbiAgICA8c2VjdGlvbiBpZD1cInRpbWVyXCI+XG4gICAgICAgIDxzcGFuIGlkPSdyZW1haW5pbmcnPlxuICAgICAgICAgICAgPHNsb3Q+XG5cbiAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgPC9zcGFuPiBcbiAgICAgICAgPHNwYW4gaWQ9J21pbnV0ZXMnPnttaW51dGVzfTp7c2Vjb25kc308L3NwYW4+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzPSdkb25lJz5cbiAgICAgICAgeyNlYWNoICRxdWl6U3RlcHMgYXMgY2hhbGxlbmdlfVxuICAgICAgICAgICAgeyNpZiBjaGFsbGVuZ2UudHlwZSAhPSAnY2hlY2twb2ludCd9XG4gICAgICAgIDxDaGVjayBhY3RpdmU9e2NoYWxsZW5nZS5zdGF0dXN9Lz4gXG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICB7L2VhY2h9ICAgIFxuICAgIDwvc2VjdGlvbj5cbiAgICA8cHJvZ3Jlc3MgdmFsdWU9eyRwcm9ncmVzc30gbWF4PVwiMTAwXCI+PC9wcm9ncmVzcz5cblxuPC9hc2lkZT5cbjxzdHlsZT5cbiAgICBhc2lkZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDMzLjc1dnc7IFxuICAgICAgICBoZWlnaHQ6IDg2dmg7IFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0MjREO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgbWFyZ2luOiAxMnB4IDBweCA0MHB4IDIwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMzN2dztcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgdG9wOiA1MHB4O1xuICAgIH1cbiAgICAjdGltZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICAgICAgLyp3aWR0aDogMjB2dztcbiAgICAgICAgaGVpZ2h0OiAxMzVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjN2M3Yzc7Ki9cbiAgICB9XG4gICAgI3JlbWFpbmluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XG4gICAgICAgIGNvbG9yOiAjNzNFRjdCO1xuXG4gICAgfVxuICAgICNtaW51dGVzIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwRjIwMzM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgXG4gICAgICAgIGhlaWdodDogNi43dmg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBtYXJnaW46IDU1dmggMHZoIDB2aCAwdmg7IFxuXG5cbiAgICB9XG4gICAgLmRvbmUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHhcbiAgICB9XG4gICAgLmxvY2sge1xuICAgICAgICBcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uL2NoZWNrZWQuc3ZnKSBuby1yZXBlYXQ7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuXG4gICAgfVxuICAgIC5lbGxpcHNlIHtcbiAgICAgICAgd2lkdGg6M3B4O1xuICAgICAgICBoZWlnaHQ6M3B4O1xuICAgICAgICBtYXJnaW46IDNweDtcbiAgICB9XG4gICAgcHJvZ3Jlc3N7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0ICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA4NiU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiA1OXB4O1xuICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICAgIHByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLWJhciB7XG5cdCAgICBiYWNrZ3JvdW5kOiAjMzAzNTM4O1xuXHR9XG4gICAgcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNzRlZjdiO1xuICAgIH1cbiAgICAuYmcxIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9iZy1ncm91cDEucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgfVxuICAgIC5iZzIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2JnLWdyb3VwMi5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICB9XG4gICAgLmJnMyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYmctZ3JvdXAzLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIH1cbjwvc3R5bGU+XG48IS0tXG5cbiAgICAgICAgXG48ZGl2IGNsYXNzPSdkb25lJz5cbiAgICB7aWYgYWN0aXZlfVxuICAgIDxpbWcgc3JjPScuL2xvY2stYWN0aXZlLnN2ZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2FjdGl2ZSBsb2NrJyAvPlxuICAgIFxuICAgICAgICA8aW1nIHNyYz0nLi9FbGxpcHNlLWFjdGl2ZS5wbmcnIGFsdD1cImNvbXBsZXRlZFwiIGNsYXNzPSdlbGxpcHNlIGFjdGl2ZScgLz5cbiAgICAgICAgPGltZyBzcmM9Jy4vRWxsaXBzZS1pbmFjdGl2ZS5wbmcnIGFsdD1cImNvbXBsZXRlZFwiIGNsYXNzPSdlbGxpcHNlIGluYWN0aXZlJyAvPlxuPC9kaXY+XG48L2Rpdj4tLT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQU1LLEdBQU0sTUFBRyxDQUFDO2lCQUdMLEdBQU0sTUFBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FQTCxNQUFNO0NBQ2pCLE1BQU0sR0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ29DVSxHQUFTLEtBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7dUVBQWhCLEdBQVMsS0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFEdEIsR0FBUyxLQUFDLElBQUksSUFBSSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztxQkFBOUIsR0FBUyxLQUFDLElBQUksSUFBSSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FEaEMsR0FBVTs7OztnQ0FBZixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3lCQUhjLEdBQU87O3lCQUFHLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0Q0FBakIsR0FBTzs7NENBQUcsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQVN4QixHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUVBVEYsR0FBTzt1RUFBRyxHQUFPOzs7Z0NBRzlCLEdBQVU7Ozs7K0JBQWYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFBSixNQUFJOzs7Ozs7OztnREFNTyxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU5wQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E3QlYsS0FBSyxHQUFFLEVBQUUsR0FBRyxFQUFFO0tBQ2QsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLOzs7O0NBQ3ZCLFdBQVc7O09BQ0wsTUFBTSxHQUFHLENBQUMsSUFBSSxZQUFZLHlCQUFFLE1BQU07O0VBQ3JDLElBQUk7OztDQVNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHOztDQUN6QixZQUFZO01BQ1IsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDO21CQUFFLEdBQUcsR0FBRyxLQUFLO21CQUFFLEdBQUcsR0FBRyxJQUFJOzs7O09BQzFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztvQkFBRSxHQUFHLEdBQUUsS0FBSztvQkFBRSxHQUFHLEdBQUUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFWdkMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUU7Ozs7SUFDaEMsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLEtBQUs7Ozs7b0JBQ3RDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsRUFBRSxFQUFFLGNBQWMsQ0FBQyxJQUFJO0lBQUcsb0JBQW9CLEVBQUMsQ0FBQztJQUFDLFdBQVcsRUFBQyxLQUFLOzs7OztrQkFFNUcsR0FBRyxHQUFHLElBQUk7a0JBQ1YsR0FBRyxHQUFHLEtBQUs7a0JBQ1gsR0FBRyxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
