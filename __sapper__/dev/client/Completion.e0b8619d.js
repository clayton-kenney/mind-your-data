import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, H as empty, l as insert_dev, n as noop, b as detach_dev, e as element, f as claim_element, j as attr_dev, k as add_location, I as create_slot, J as validate_each_argument, o as validate_store, p as component_subscribe, K as set_store_value, B as transition_in, G as group_outros, z as transition_out, A as check_outros, a as space, t as text, g as children, c as claim_space, h as claim_text, L as null_to_empty, m as append_dev, M as update_slot, F as set_data_dev, N as prop_dev, O as destroy_each, w as create_component, x as claim_component, y as mount_component, E as destroy_component } from './client.b5d30e34.js';
import { c as cubicOut } from './index.cccde779.js';
import { t as timerActive, q as quizSteps, p as progress, a as tweened } from './store.82e49fcc.js';

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
const file$1 = "src/components/Completion.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	return child_ctx;
}

// (32:12) {#if challenge.type != 'checkpoint'}
function create_if_block$1(ctx) {
	let check;
	let current;

	check = new Check({
			props: { active: /*challenge*/ ctx[12].status },
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
			if (dirty & /*$quizSteps*/ 8) check_changes.active = /*challenge*/ ctx[12].status;
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
		source: "(32:12) {#if challenge.type != 'checkpoint'}",
		ctx
	});

	return block;
}

// (31:8) {#each $quizSteps as challenge}
function create_each_block(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*challenge*/ ctx[12].type != "checkpoint" && create_if_block$1(ctx);

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
			if (/*challenge*/ ctx[12].type != "checkpoint") {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*$quizSteps*/ 8) {
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
		source: "(31:8) {#each $quizSteps as challenge}",
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
	let aside_class_value;
	let current;
	const default_slot_template = /*$$slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);
	let each_value = /*$quizSteps*/ ctx[3];
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
			t1 = text(/*minutes*/ ctx[1]);
			t2 = text(":");
			t3 = text(/*seconds*/ ctx[2]);
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
			t1 = claim_text(span1_nodes, /*minutes*/ ctx[1]);
			t2 = claim_text(span1_nodes, ":");
			t3 = claim_text(span1_nodes, /*seconds*/ ctx[2]);
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
			attr_dev(span0, "class", "svelte-1dlq17o");
			add_location(span0, file$1, 22, 8, 664);
			attr_dev(span1, "id", "minutes");
			attr_dev(span1, "class", "svelte-1dlq17o");
			add_location(span1, file$1, 27, 8, 751);
			attr_dev(section0, "id", "timer");
			attr_dev(section0, "class", "svelte-1dlq17o");
			add_location(section0, file$1, 21, 4, 635);
			attr_dev(section1, "class", "done svelte-1dlq17o");
			add_location(section1, file$1, 29, 4, 816);
			progress_1.value = /*$progress*/ ctx[4];
			attr_dev(progress_1, "max", "100");
			attr_dev(progress_1, "class", "svelte-1dlq17o");
			add_location(progress_1, file$1, 36, 4, 1029);
			attr_dev(aside, "class", aside_class_value = "" + (null_to_empty(/*bg*/ ctx[0]) + " svelte-1dlq17o"));
			add_location(aside, file$1, 20, 0, 612);
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
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			if (!current || dirty & /*minutes*/ 2) set_data_dev(t1, /*minutes*/ ctx[1]);
			if (!current || dirty & /*seconds*/ 4) set_data_dev(t3, /*seconds*/ ctx[2]);

			if (dirty & /*$quizSteps*/ 8) {
				each_value = /*$quizSteps*/ ctx[3];
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

			if (!current || dirty & /*$progress*/ 16) {
				prop_dev(progress_1, "value", /*$progress*/ ctx[4]);
			}

			if (!current || dirty & /*bg*/ 1 && aside_class_value !== (aside_class_value = "" + (null_to_empty(/*bg*/ ctx[0]) + " svelte-1dlq17o"))) {
				attr_dev(aside, "class", aside_class_value);
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
	component_subscribe($$self, timerActive, $$value => $$invalidate(9, $timerActive = $$value));
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(3, $quizSteps = $$value));
	validate_store(progress, "progress");
	component_subscribe($$self, progress, $$value => $$invalidate(4, $progress = $$value));
	let { bg = "bg1" } = $$props;

	//console.log($quizSteps);
	let start = 30 * 60;

	let timer = tweened(start);
	validate_store(timer, "timer");
	component_subscribe($$self, timer, value => $$invalidate(8, $timer = value));

	setInterval(
		() => {
			if ($timer > 0 && $timerActive) set_store_value(timer, $timer--, $timer);
		},
		1000
	);

	const writable_props = ["bg"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Completion> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Completion", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("bg" in $$props) $$invalidate(0, bg = $$props.bg);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		tweened,
		cubicOut,
		Check,
		quizSteps,
		timerActive,
		progress,
		bg,
		start,
		timer,
		$timer,
		$timerActive,
		minutes,
		minname,
		seconds,
		$quizSteps,
		$progress
	});

	$$self.$inject_state = $$props => {
		if ("bg" in $$props) $$invalidate(0, bg = $$props.bg);
		if ("start" in $$props) start = $$props.start;
		if ("timer" in $$props) $$invalidate(5, timer = $$props.timer);
		if ("minutes" in $$props) $$invalidate(1, minutes = $$props.minutes);
		if ("minname" in $$props) minname = $$props.minname;
		if ("seconds" in $$props) $$invalidate(2, seconds = $$props.seconds);
	};

	let minutes;
	let minname;
	let seconds;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$timer*/ 256) {
			 $$invalidate(1, minutes = Math.floor($timer / 60));
		}

		if ($$self.$$.dirty & /*minutes*/ 2) {
			 minname = minutes > 1 ? "mins" : "min";
		}

		if ($$self.$$.dirty & /*$timer, minutes*/ 258) {
			 $$invalidate(2, seconds = Math.floor($timer - minutes * 60).toLocaleString("en", {
				minimumIntegerDigits: 2,
				useGrouping: false
			}));
		}
	};

	return [bg, minutes, seconds, $quizSteps, $progress, timer, $$scope, $$slots];
}

class Completion extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { bg: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Completion",
			options,
			id: create_fragment$1.name
		});
	}

	get bg() {
		throw new Error("<Completion>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set bg(value) {
		throw new Error("<Completion>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Completion as C };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxldGlvbi5lMGI4NjE5ZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2hlY2suc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblxuICAgIGV4cG9ydCBsZXQgYWN0aXZlO1xuICAgIGFjdGl2ZSA9MDtcblxuPC9zY3JpcHQ+XG57I2lmIGFjdGl2ZSA8IDEgfVxuICAgIDxpbWcgc3JjPScuL2JsYW5rX2NpcmNsZS5zdmcnIGFsdD1cImNvbXBsZXRlZFwiIGNsYXNzPSdhY3RpdmUgbG9jaycgLz5cbiAgICBcbns6ZWxzZSBpZiBhY3RpdmUgPiAxIH1cbiAgICA8aW1nIHNyYz0nLi9jaGVja2VkLnN2ZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2FjdGl2ZSBsb2NrJyAvPlxuICBcbns6ZWxzZX1cbiAgICA8aW1nIHNyYz0nLi91bl9jaGVja2VkLnN2ZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2FjdGl2ZSBsb2NrJyAvPlxuICAgIFxuey9pZn1cbiA8c3R5bGU+XG4gICAgIC5sb2NrIHtcbiAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgfVxuIDwvc3R5bGU+IiwiPHNjcmlwdD5cbiAgICAvL3RvdGFsIHRpbWUgZm9yIGNvdW50ZG93blxuaW1wb3J0IHsgdHdlZW5lZCB9IGZyb20gJ3N2ZWx0ZS9tb3Rpb24nO1xuaW1wb3J0IHsgY3ViaWNPdXQgfSBmcm9tICdzdmVsdGUvZWFzaW5nJztcbmltcG9ydCBDaGVjayBmcm9tICcuL0NoZWNrLnN2ZWx0ZSc7XG5pbXBvcnQgeyBxdWl6U3RlcHMsIHRpbWVyQWN0aXZlLCBwcm9ncmVzcyB9IGZyb20gJy4uL3N0b3JlLmpzJztcbmV4cG9ydCBsZXQgYmc9ICdiZzEnO1xuLy9jb25zb2xlLmxvZygkcXVpelN0ZXBzKTtcbmxldCBzdGFydD0gMzAgKiA2MDtcbmxldCB0aW1lciA9IHR3ZWVuZWQoc3RhcnQpO1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKCR0aW1lciA+IDAgJiYgJHRpbWVyQWN0aXZlKSAkdGltZXItLTtcbiAgfSwgMTAwMCk7XG5cbiAgJDogbWludXRlcyA9IE1hdGguZmxvb3IoJHRpbWVyIC8gNjApO1xuICAkOiBtaW5uYW1lID0gbWludXRlcyA+IDEgPyBcIm1pbnNcIiA6IFwibWluXCI7XG4gICQ6IHNlY29uZHMgPSBNYXRoLmZsb29yKCR0aW1lciAtIG1pbnV0ZXMgKiA2MCkudG9Mb2NhbGVTdHJpbmcoJ2VuJywge21pbmltdW1JbnRlZ2VyRGlnaXRzOjIsdXNlR3JvdXBpbmc6ZmFsc2V9KVxuXG5cbjwvc2NyaXB0PlxuPGFzaWRlIGNsYXNzPXtiZ30+XG4gICAgPHNlY3Rpb24gaWQ9XCJ0aW1lclwiPlxuICAgICAgICA8c3BhbiBpZD0ncmVtYWluaW5nJz5cbiAgICAgICAgICAgIDxzbG90PlxuXG4gICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgIDwvc3Bhbj4gXG4gICAgICAgIDxzcGFuIGlkPSdtaW51dGVzJz57bWludXRlc306e3NlY29uZHN9PC9zcGFuPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzcz0nZG9uZSc+XG4gICAgICAgIHsjZWFjaCAkcXVpelN0ZXBzIGFzIGNoYWxsZW5nZX1cbiAgICAgICAgICAgIHsjaWYgY2hhbGxlbmdlLnR5cGUgIT0gJ2NoZWNrcG9pbnQnfVxuICAgICAgICA8Q2hlY2sgYWN0aXZlPXtjaGFsbGVuZ2Uuc3RhdHVzfS8+IFxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgey9lYWNofSAgICBcbiAgICA8L3NlY3Rpb24+XG4gICAgPHByb2dyZXNzIHZhbHVlPXskcHJvZ3Jlc3N9IG1heD1cIjEwMFwiPjwvcHJvZ3Jlc3M+XG5cbjwvYXNpZGU+XG48c3R5bGU+XG4gICAgYXNpZGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzMy43NXZ3OyBcbiAgICAgICAgaGVpZ2h0OiA4NnZoOyBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NDI0RDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgIG1hcmdpbjogMTJweCAwcHggNDBweCAyMHB4O1xuICAgICAgICBtaW4td2lkdGg6IDMzdnc7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICB9XG4gICAgI3RpbWVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgICAgIC8qd2lkdGg6IDIwdnc7XG4gICAgICAgIGhlaWdodDogMTM1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzdjN2M3OyovXG4gICAgfVxuICAgICNyZW1haW5pbmcge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMHB4O1xuICAgICAgICBjb2xvcjogIzczRUY3QjtcblxuICAgIH1cbiAgICAjbWludXRlcyB7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMEYyMDMzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIFxuICAgICAgICBoZWlnaHQ6IDYuN3ZoO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgbWFyZ2luOiA1NXZoIDB2aCAwdmggMHZoOyBcblxuXG4gICAgfVxuICAgIC5kb25lIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gICAgfVxuICAgIC5sb2NrIHtcbiAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi9jaGVja2VkLnN2Zykgbm8tcmVwZWF0O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcblxuICAgIH1cbiAgICAuZWxsaXBzZSB7XG4gICAgICAgIHdpZHRoOjNweDtcbiAgICAgICAgaGVpZ2h0OjNweDtcbiAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgfVxuICAgIHByb2dyZXNze1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdCAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogODYlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvdHRvbTogNTlweDtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgICBwcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xuXHQgICAgYmFja2dyb3VuZDogIzMwMzUzODtcblx0fVxuICAgIHByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzc0ZWY3YjtcbiAgICB9XG4gICAgYXNpZGUuYmcxIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9iZy1ncm91cDEucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsO1xuICAgIH1cbiAgICBhc2lkZS5iZzIge1xuICAgICAgICBcbiAgICB9XG4gICAgYXNpZGUuYmczIHtcbiAgICAgICAgXG4gICAgfVxuPC9zdHlsZT5cbjwhLS1cblxuICAgICAgICBcbjxkaXYgY2xhc3M9J2RvbmUnPlxuICAgIHtpZiBhY3RpdmV9XG4gICAgPGltZyBzcmM9Jy4vbG9jay1hY3RpdmUuc3ZnJyBhbHQ9XCJjb21wbGV0ZWRcIiBjbGFzcz0nYWN0aXZlIGxvY2snIC8+XG4gICAgXG4gICAgICAgIDxpbWcgc3JjPScuL0VsbGlwc2UtYWN0aXZlLnBuZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2VsbGlwc2UgYWN0aXZlJyAvPlxuICAgICAgICA8aW1nIHNyYz0nLi9FbGxpcHNlLWluYWN0aXZlLnBuZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2VsbGlwc2UgaW5hY3RpdmUnIC8+XG48L2Rpdj5cbjwvZGl2Pi0tPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBTUssR0FBTSxNQUFHLENBQUM7aUJBR0wsR0FBTSxNQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQVBMLE1BQU07Q0FDakIsTUFBTSxHQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQzZCVSxHQUFTLEtBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0VBQWhCLEdBQVMsS0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFEdEIsR0FBUyxLQUFDLElBQUksSUFBSSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztxQkFBOUIsR0FBUyxLQUFDLElBQUksSUFBSSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBRGhDLEdBQVU7Ozs7Z0NBQWYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFIYyxHQUFPOzt5QkFBRyxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NENBQWpCLEdBQU87OzRDQUFHLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FTeEIsR0FBUzs7OzsyRUFoQmhCLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VFQU9ZLEdBQU87dUVBQUcsR0FBTzs7O2dDQUc5QixHQUFVOzs7OytCQUFmLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQUosTUFBSTs7Ozs7Ozs7Z0RBTU8sR0FBUzs7OzZHQWhCaEIsR0FBRTs7Ozs7Ozs7a0NBVU4sTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BeEJILEVBQUUsR0FBRSxLQUFLOzs7S0FFaEIsS0FBSyxHQUFFLEVBQUUsR0FBRyxFQUFFOztLQUNkLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSzs7OztDQUN2QixXQUFXOztPQUNMLE1BQU0sR0FBRyxDQUFDLElBQUksWUFBWSx5QkFBRSxNQUFNOztFQUNyQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUVKLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFOzs7O0lBQ2hDLE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxLQUFLOzs7O29CQUN0QyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLEVBQUUsRUFBRSxjQUFjLENBQUMsSUFBSTtJQUFHLG9CQUFvQixFQUFDLENBQUM7SUFBQyxXQUFXLEVBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
