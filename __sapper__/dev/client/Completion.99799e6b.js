import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, H as empty, l as insert_dev, n as noop, b as detach_dev, e as element, f as claim_element, j as attr_dev, k as add_location, I as create_slot, J as validate_each_argument, o as validate_store, p as component_subscribe, K as set_store_value, u as afterUpdate, L as globals, B as transition_in, G as group_outros, z as transition_out, A as check_outros, a as space, t as text, g as children, c as claim_space, h as claim_text, M as toggle_class, m as append_dev, N as update_slot, F as set_data_dev, O as prop_dev, P as destroy_each, w as create_component, x as claim_component, y as mount_component, E as destroy_component } from './client.06f4ee70.js';
import { c as cubicOut } from './index.cccde779.js';
import { t as timerActive, q as quizSteps, c as count, p as progress, a as tweened } from './store.87cec236.js';

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
	child_ctx[15] = list[i];
	return child_ctx;
}

// (40:12) {#if challenge.type != 'checkpoint'}
function create_if_block$1(ctx) {
	let check;
	let current;

	check = new Check({
			props: { active: /*challenge*/ ctx[15].status },
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
			if (dirty & /*$quizSteps*/ 32) check_changes.active = /*challenge*/ ctx[15].status;
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
		source: "(40:12) {#if challenge.type != 'checkpoint'}",
		ctx
	});

	return block;
}

// (39:8) {#each $quizSteps as challenge}
function create_each_block(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*challenge*/ ctx[15].type != "checkpoint" && create_if_block$1(ctx);

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
			if (/*challenge*/ ctx[15].type != "checkpoint") {
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
		source: "(39:8) {#each $quizSteps as challenge}",
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
			t1 = text(/*minutes*/ ctx[3]);
			t2 = text(":");
			t3 = text(/*seconds*/ ctx[4]);
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
			t1 = claim_text(span1_nodes, /*minutes*/ ctx[3]);
			t2 = claim_text(span1_nodes, ":");
			t3 = claim_text(span1_nodes, /*seconds*/ ctx[4]);
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
			add_location(span0, file$1, 30, 8, 945);
			attr_dev(span1, "id", "minutes");
			attr_dev(span1, "class", "svelte-19wr0vz");
			add_location(span1, file$1, 35, 8, 1032);
			attr_dev(section0, "id", "timer");
			attr_dev(section0, "class", "svelte-19wr0vz");
			add_location(section0, file$1, 29, 4, 916);
			attr_dev(section1, "class", "done svelte-19wr0vz");
			add_location(section1, file$1, 37, 4, 1097);
			progress_1.value = /*$progress*/ ctx[6];
			attr_dev(progress_1, "max", "100");
			attr_dev(progress_1, "class", "svelte-19wr0vz");
			add_location(progress_1, file$1, 44, 4, 1310);
			attr_dev(aside, "class", "svelte-19wr0vz");
			toggle_class(aside, "bg1", /*bg1*/ ctx[0]);
			toggle_class(aside, "bg2", /*bg2*/ ctx[1]);
			toggle_class(aside, "bg3", /*bg3*/ ctx[2]);
			add_location(aside, file$1, 28, 0, 874);
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

			if (!current || dirty & /*minutes*/ 8) set_data_dev(t1, /*minutes*/ ctx[3]);
			if (!current || dirty & /*seconds*/ 16) set_data_dev(t3, /*seconds*/ ctx[4]);

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

			if (dirty & /*bg1*/ 1) {
				toggle_class(aside, "bg1", /*bg1*/ ctx[0]);
			}

			if (dirty & /*bg2*/ 2) {
				toggle_class(aside, "bg2", /*bg2*/ ctx[1]);
			}

			if (dirty & /*bg3*/ 4) {
				toggle_class(aside, "bg3", /*bg3*/ ctx[2]);
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
	let $count;
	let $progress;
	validate_store(timerActive, "timerActive");
	component_subscribe($$self, timerActive, $$value => $$invalidate(11, $timerActive = $$value));
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(5, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(13, $count = $$value));
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

	let bg1 = true;
	let bg2 = false;
	let bg3 = false;

	afterUpdate(() => {
		if ($quizSteps[$count].id > 3) {
			$$invalidate(0, bg1 = false);
			$$invalidate(1, bg2 = true);
		}

		{
			if ($quizSteps[$count].id > 8) {
				$$invalidate(1, bg2 = false);
				$$invalidate(2, bg3 = true);
			}

			{
				console.log(bg1, bg2, bg3, $quizSteps[$count].id);
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
		count,
		afterUpdate,
		start,
		timer,
		bg1,
		bg2,
		bg3,
		$timer,
		$timerActive,
		minutes,
		minname,
		seconds,
		$quizSteps,
		$count,
		$progress
	});

	$$self.$inject_state = $$props => {
		if ("start" in $$props) start = $$props.start;
		if ("timer" in $$props) $$invalidate(7, timer = $$props.timer);
		if ("bg1" in $$props) $$invalidate(0, bg1 = $$props.bg1);
		if ("bg2" in $$props) $$invalidate(1, bg2 = $$props.bg2);
		if ("bg3" in $$props) $$invalidate(2, bg3 = $$props.bg3);
		if ("minutes" in $$props) $$invalidate(3, minutes = $$props.minutes);
		if ("minname" in $$props) minname = $$props.minname;
		if ("seconds" in $$props) $$invalidate(4, seconds = $$props.seconds);
	};

	let minutes;
	let minname;
	let seconds;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$timer*/ 1024) {
			 $$invalidate(3, minutes = Math.floor($timer / 60));
		}

		if ($$self.$$.dirty & /*minutes*/ 8) {
			 minname = minutes > 1 ? "mins" : "min";
		}

		if ($$self.$$.dirty & /*$timer, minutes*/ 1032) {
			 $$invalidate(4, seconds = Math.floor($timer - minutes * 60).toLocaleString("en", {
				minimumIntegerDigits: 2,
				useGrouping: false
			}));
		}
	};

	return [
		bg1,
		bg2,
		bg3,
		minutes,
		seconds,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxldGlvbi45OTc5OWU2Yi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2hlY2suc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblxuICAgIGV4cG9ydCBsZXQgYWN0aXZlO1xuICAgIGFjdGl2ZSA9MDtcblxuPC9zY3JpcHQ+XG57I2lmIGFjdGl2ZSA8IDEgfVxuICAgIDxpbWcgc3JjPScuL2JsYW5rX2NpcmNsZS5zdmcnIGFsdD1cImNvbXBsZXRlZFwiIGNsYXNzPSdhY3RpdmUgbG9jaycgLz5cbiAgICBcbns6ZWxzZSBpZiBhY3RpdmUgPiAxIH1cbiAgICA8aW1nIHNyYz0nLi9jaGVja2VkLnN2ZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2FjdGl2ZSBsb2NrJyAvPlxuICBcbns6ZWxzZX1cbiAgICA8aW1nIHNyYz0nLi91bl9jaGVja2VkLnN2ZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2FjdGl2ZSBsb2NrJyAvPlxuICAgIFxuey9pZn1cbiA8c3R5bGU+XG4gICAgIC5sb2NrIHtcbiAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgfVxuIDwvc3R5bGU+IiwiPHNjcmlwdD5cbiAgICAvL3RvdGFsIHRpbWUgZm9yIGNvdW50ZG93blxuaW1wb3J0IHsgdHdlZW5lZCB9IGZyb20gJ3N2ZWx0ZS9tb3Rpb24nO1xuaW1wb3J0IHsgY3ViaWNPdXQgfSBmcm9tICdzdmVsdGUvZWFzaW5nJztcbmltcG9ydCBDaGVjayBmcm9tICcuL0NoZWNrLnN2ZWx0ZSc7XG5pbXBvcnQgeyBxdWl6U3RlcHMsIHRpbWVyQWN0aXZlLCBwcm9ncmVzcywgY291bnQgfSBmcm9tICcuLi9zdG9yZS5qcyc7XG5pbXBvcnQgeyBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSc7XG4vL2NvbnNvbGUubG9nKCRxdWl6U3RlcHMpO1xubGV0IHN0YXJ0PSAzMCAqIDYwO1xubGV0IHRpbWVyID0gdHdlZW5lZChzdGFydCk7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoJHRpbWVyID4gMCAmJiAkdGltZXJBY3RpdmUpICR0aW1lci0tO1xuICB9LCAxMDAwKTtcblxuICAkOiBtaW51dGVzID0gTWF0aC5mbG9vcigkdGltZXIgLyA2MCk7XG4gICQ6IG1pbm5hbWUgPSBtaW51dGVzID4gMSA/IFwibWluc1wiIDogXCJtaW5cIjtcbiAgJDogc2Vjb25kcyA9IE1hdGguZmxvb3IoJHRpbWVyIC0gbWludXRlcyAqIDYwKS50b0xvY2FsZVN0cmluZygnZW4nLCB7bWluaW11bUludGVnZXJEaWdpdHM6Mix1c2VHcm91cGluZzpmYWxzZX0pXG5cbmxldCBiZzEgPSB0cnVlO1xubGV0IGJnMiA9IGZhbHNlO1xubGV0IGJnMyA9IGZhbHNlO1xuXG5hZnRlclVwZGF0ZSgoKSA9PntcbiAgICBpZigkcXVpelN0ZXBzWyRjb3VudF0uaWQgPiAzKXtiZzEgPSBmYWxzZTsgYmcyID0gdHJ1ZTt9XG57aWYoJHF1aXpTdGVwc1skY291bnRdLmlkID4gOCl7YmcyPSBmYWxzZTsgYmczPSB0cnVlO31cbntjb25zb2xlLmxvZyhiZzEsIGJnMiwgYmczLCRxdWl6U3RlcHNbJGNvdW50XS5pZCl9XG59fSlcbjwvc2NyaXB0PlxuPGFzaWRlIGNsYXNzOmJnMSBjbGFzczpiZzIgY2xhc3M6YmczPlxuICAgIDxzZWN0aW9uIGlkPVwidGltZXJcIj5cbiAgICAgICAgPHNwYW4gaWQ9J3JlbWFpbmluZyc+XG4gICAgICAgICAgICA8c2xvdD5cblxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICA8L3NwYW4+IFxuICAgICAgICA8c3BhbiBpZD0nbWludXRlcyc+e21pbnV0ZXN9OntzZWNvbmRzfTwvc3Bhbj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3M9J2RvbmUnPlxuICAgICAgICB7I2VhY2ggJHF1aXpTdGVwcyBhcyBjaGFsbGVuZ2V9XG4gICAgICAgICAgICB7I2lmIGNoYWxsZW5nZS50eXBlICE9ICdjaGVja3BvaW50J31cbiAgICAgICAgPENoZWNrIGFjdGl2ZT17Y2hhbGxlbmdlLnN0YXR1c30vPiBcbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgIHsvZWFjaH0gICAgXG4gICAgPC9zZWN0aW9uPlxuICAgIDxwcm9ncmVzcyB2YWx1ZT17JHByb2dyZXNzfSBtYXg9XCIxMDBcIj48L3Byb2dyZXNzPlxuXG48L2FzaWRlPlxuPHN0eWxlPlxuICAgIGFzaWRlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMzMuNzV2dzsgXG4gICAgICAgIGhlaWdodDogODZ2aDsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODQyNEQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICBtYXJnaW46IDEycHggMHB4IDQwcHggMjBweDtcbiAgICAgICAgbWluLXdpZHRoOiAzM3Z3O1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgfVxuICAgICN0aW1lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgICAgICAvKndpZHRoOiAyMHZ3O1xuICAgICAgICBoZWlnaHQ6IDEzNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M3YzdjNzsqL1xuICAgIH1cbiAgICAjcmVtYWluaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDBweDtcbiAgICAgICAgY29sb3I6ICM3M0VGN0I7XG5cbiAgICB9XG4gICAgI21pbnV0ZXMge1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzBGMjAzMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBcbiAgICAgICAgaGVpZ2h0OiA2Ljd2aDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIG1hcmdpbjogNTV2aCAwdmggMHZoIDB2aDsgXG5cblxuICAgIH1cbiAgICAuZG9uZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweFxuICAgIH1cbiAgICAubG9jayB7XG4gICAgICAgIFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vY2hlY2tlZC5zdmcpIG5vLXJlcGVhdDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICB9XG4gICAgLmVsbGlwc2Uge1xuICAgICAgICB3aWR0aDozcHg7XG4gICAgICAgIGhlaWdodDozcHg7XG4gICAgICAgIG1hcmdpbjogM3B4O1xuICAgIH1cbiAgICBwcm9ncmVzc3tcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHQgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDg2JTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3R0b206IDU5cHg7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gICAgcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcblx0ICAgIGJhY2tncm91bmQ6ICMzMDM1Mzg7XG5cdH1cbiAgICBwcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM3NGVmN2I7XG4gICAgfVxuICAgIC5iZzEge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2JnLWdyb3VwMS5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICB9XG4gICAgLmJnMiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYmctZ3JvdXAyLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIH1cbiAgICAuYmczIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9iZy1ncm91cDMucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgfVxuPC9zdHlsZT5cbjwhLS1cblxuICAgICAgICBcbjxkaXYgY2xhc3M9J2RvbmUnPlxuICAgIHtpZiBhY3RpdmV9XG4gICAgPGltZyBzcmM9Jy4vbG9jay1hY3RpdmUuc3ZnJyBhbHQ9XCJjb21wbGV0ZWRcIiBjbGFzcz0nYWN0aXZlIGxvY2snIC8+XG4gICAgXG4gICAgICAgIDxpbWcgc3JjPScuL0VsbGlwc2UtYWN0aXZlLnBuZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2VsbGlwc2UgYWN0aXZlJyAvPlxuICAgICAgICA8aW1nIHNyYz0nLi9FbGxpcHNlLWluYWN0aXZlLnBuZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2VsbGlwc2UgaW5hY3RpdmUnIC8+XG48L2Rpdj5cbjwvZGl2Pi0tPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBTUssR0FBTSxNQUFHLENBQUM7aUJBR0wsR0FBTSxNQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQVBMLE1BQU07Q0FDakIsTUFBTSxHQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDcUNVLEdBQVMsS0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozt1RUFBaEIsR0FBUyxLQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUR0QixHQUFTLEtBQUMsSUFBSSxJQUFJLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUE5QixHQUFTLEtBQUMsSUFBSSxJQUFJLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQURoQyxHQUFVOzs7O2dDQUFmLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBSGMsR0FBTzs7eUJBQUcsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRDQUFqQixHQUFPOzs0Q0FBRyxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBU3hCLEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1RUFURixHQUFPO3dFQUFHLEdBQU87OztnQ0FHOUIsR0FBVTs7OzsrQkFBZixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFKLE1BQUk7Ozs7Ozs7O2dEQU1PLEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTnBCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTlCVixLQUFLLEdBQUUsRUFBRSxHQUFHLEVBQUU7S0FDZCxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUs7Ozs7Q0FDdkIsV0FBVzs7T0FDTCxNQUFNLEdBQUcsQ0FBQyxJQUFJLFlBQVkseUJBQUUsTUFBTTs7RUFDckMsSUFBSTs7O0tBTUwsR0FBRyxHQUFHLElBQUk7S0FDVixHQUFHLEdBQUcsS0FBSztLQUNYLEdBQUcsR0FBRyxLQUFLOztDQUVmLFdBQVc7TUFDSixVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxDQUFDO21CQUFFLEdBQUcsR0FBRyxLQUFLO21CQUFFLEdBQUcsR0FBRyxJQUFJOzs7O09BQ3JELFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLENBQUM7b0JBQUUsR0FBRyxHQUFFLEtBQUs7b0JBQUUsR0FBRyxHQUFFLElBQUk7Ozs7SUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFYM0MsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUU7Ozs7SUFDaEMsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLEtBQUs7Ozs7b0JBQ3RDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsRUFBRSxFQUFFLGNBQWMsQ0FBQyxJQUFJO0lBQUcsb0JBQW9CLEVBQUMsQ0FBQztJQUFDLFdBQVcsRUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
