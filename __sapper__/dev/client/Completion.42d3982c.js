import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, U as empty, n as insert_dev, G as noop, j as detach_dev, f as element, g as claim_element, k as attr_dev, l as add_location, y as create_slot, Y as validate_each_argument, H as validate_store, I as component_subscribe, Q as set_store_value, L as afterUpdate, t as transition_in, w as group_outros, b as transition_out, x as check_outros, C as text, B as space, h as children, F as claim_text, E as claim_space, Z as set_style, W as toggle_class, p as append_dev, N as set_data_dev, z as update_slot, T as prop_dev, _ as destroy_each, c as create_component, a as claim_component, m as mount_component, e as destroy_component } from './client.b3a7a928.js';
import { a as cubicOut } from './index.44998259.js';
import { t as timerActive, c as count, q as quizSteps, p as progress, a as tweened } from './store.b7feafcc.js';

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
	let div0;
	let t0;
	let t1;
	let div1;
	let t2;
	let t3;
	let t4;
	let t5;
	let div2;
	let t6;
	let div3;
	let section1;
	let t7;
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
			div0 = element("div");
			t0 = text("Time Remaining:");
			t1 = space();
			div1 = element("div");
			t2 = text(/*minutes*/ ctx[3]);
			t3 = text(":");
			t4 = text(/*seconds*/ ctx[4]);
			t5 = space();
			div2 = element("div");
			if (default_slot) default_slot.c();
			t6 = space();
			div3 = element("div");
			section1 = element("section");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t7 = space();
			progress_1 = element("progress");
			this.h();
		},
		l: function claim(nodes) {
			aside = claim_element(nodes, "ASIDE", { class: true });
			var aside_nodes = children(aside);
			section0 = claim_element(aside_nodes, "SECTION", { id: true, class: true });
			var section0_nodes = children(section0);
			div0 = claim_element(section0_nodes, "DIV", {});
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Time Remaining:");
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(section0_nodes);
			div1 = claim_element(section0_nodes, "DIV", { id: true, style: true, class: true });
			var div1_nodes = children(div1);
			t2 = claim_text(div1_nodes, /*minutes*/ ctx[3]);
			t3 = claim_text(div1_nodes, ":");
			t4 = claim_text(div1_nodes, /*seconds*/ ctx[4]);
			div1_nodes.forEach(detach_dev);
			t5 = claim_space(section0_nodes);
			div2 = claim_element(section0_nodes, "DIV", { id: true, class: true });
			var div2_nodes = children(div2);
			if (default_slot) default_slot.l(div2_nodes);
			div2_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t6 = claim_space(aside_nodes);
			div3 = claim_element(aside_nodes, "DIV", { id: true, class: true });
			var div3_nodes = children(div3);
			section1 = claim_element(div3_nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(section1_nodes);
			}

			section1_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			progress_1 = claim_element(div3_nodes, "PROGRESS", { value: true, max: true, class: true });
			children(progress_1).forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			aside_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div0, file$1, 29, 7, 865);
			attr_dev(div1, "id", "minutes");
			set_style(div1, "white-space", "nowrap");
			attr_dev(div1, "class", "svelte-f5a52t");
			add_location(div1, file$1, 29, 34, 892);
			attr_dev(div2, "id", "challenge-name");
			attr_dev(div2, "class", "svelte-f5a52t");
			add_location(div2, file$1, 30, 7, 972);
			attr_dev(section0, "id", "timer");
			attr_dev(section0, "class", "svelte-f5a52t");
			add_location(section0, file$1, 28, 4, 837);
			attr_dev(section1, "class", "done svelte-f5a52t");
			add_location(section1, file$1, 37, 4, 1091);
			progress_1.value = /*$progress*/ ctx[6];
			attr_dev(progress_1, "max", "100");
			attr_dev(progress_1, "class", "svelte-f5a52t");
			toggle_class(progress_1, "bg1", /*bg1*/ ctx[0]);
			toggle_class(progress_1, "bg2", /*bg2*/ ctx[1]);
			toggle_class(progress_1, "bg3", /*bg3*/ ctx[2]);
			add_location(progress_1, file$1, 44, 4, 1304);
			attr_dev(div3, "id", "progress-holder");
			attr_dev(div3, "class", "svelte-f5a52t");
			add_location(div3, file$1, 36, 4, 1060);
			attr_dev(aside, "class", "svelte-f5a52t");
			toggle_class(aside, "bg1", /*bg1*/ ctx[0]);
			toggle_class(aside, "bg2", /*bg2*/ ctx[1]);
			toggle_class(aside, "bg3", /*bg3*/ ctx[2]);
			add_location(aside, file$1, 27, 0, 795);
		},
		m: function mount(target, anchor) {
			insert_dev(target, aside, anchor);
			append_dev(aside, section0);
			append_dev(section0, div0);
			append_dev(div0, t0);
			append_dev(section0, t1);
			append_dev(section0, div1);
			append_dev(div1, t2);
			append_dev(div1, t3);
			append_dev(div1, t4);
			append_dev(section0, t5);
			append_dev(section0, div2);

			if (default_slot) {
				default_slot.m(div2, null);
			}

			append_dev(aside, t6);
			append_dev(aside, div3);
			append_dev(div3, section1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(section1, null);
			}

			append_dev(div3, t7);
			append_dev(div3, progress_1);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*minutes*/ 8) set_data_dev(t2, /*minutes*/ ctx[3]);
			if (!current || dirty & /*seconds*/ 16) set_data_dev(t4, /*seconds*/ ctx[4]);

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 256) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[8], dirty, null, null);
				}
			}

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
				toggle_class(progress_1, "bg1", /*bg1*/ ctx[0]);
			}

			if (dirty & /*bg2*/ 2) {
				toggle_class(progress_1, "bg2", /*bg2*/ ctx[1]);
			}

			if (dirty & /*bg3*/ 4) {
				toggle_class(progress_1, "bg3", /*bg3*/ ctx[2]);
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
	let $count;
	let $quizSteps;
	let $progress;
	validate_store(timerActive, "timerActive");
	component_subscribe($$self, timerActive, $$value => $$invalidate(11, $timerActive = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(13, $count = $$value));
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

	let bg1 = true;
	let bg2 = false;
	let bg3 = false;

	afterUpdate(() => {
		if ($count > 3) {
			$$invalidate(0, bg1 = false);
			$$invalidate(1, bg2 = true);
		}

		{
			if ($count > 7) {
				$$invalidate(1, bg2 = false);
				$$invalidate(2, bg3 = true);
			}
		}
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Completion> was created with unknown prop '${key}'`);
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
		$count,
		$quizSteps,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxldGlvbi40MmQzOTgyYy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2hlY2suc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblxuICAgIGV4cG9ydCBsZXQgYWN0aXZlO1xuICAgIGFjdGl2ZSA9MDtcblxuPC9zY3JpcHQ+XG57I2lmIGFjdGl2ZSA8IDEgfVxuICAgIDxpbWcgc3JjPScuL2JsYW5rX2NpcmNsZS5zdmcnIGFsdD1cImNvbXBsZXRlZFwiIGNsYXNzPSdhY3RpdmUgbG9jaycgLz5cbiAgICBcbns6ZWxzZSBpZiBhY3RpdmUgPiAxIH1cbiAgICA8aW1nIHNyYz0nLi9jaGVja2VkLnN2ZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2FjdGl2ZSBsb2NrJyAvPlxuICBcbns6ZWxzZX1cbiAgICA8aW1nIHNyYz0nLi91bl9jaGVja2VkLnN2ZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2FjdGl2ZSBsb2NrJyAvPlxuICAgIFxuey9pZn1cbiA8c3R5bGU+XG4gICAgIC5sb2NrIHtcbiAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgfVxuIDwvc3R5bGU+IiwiPHNjcmlwdD5cbiAgICAvL3RvdGFsIHRpbWUgZm9yIGNvdW50ZG93blxuaW1wb3J0IHsgdHdlZW5lZCB9IGZyb20gJ3N2ZWx0ZS9tb3Rpb24nO1xuaW1wb3J0IHsgY3ViaWNPdXQgfSBmcm9tICdzdmVsdGUvZWFzaW5nJztcbmltcG9ydCBDaGVjayBmcm9tICcuL0NoZWNrLnN2ZWx0ZSc7XG5pbXBvcnQgeyBxdWl6U3RlcHMsIHRpbWVyQWN0aXZlLCBwcm9ncmVzcywgY291bnQgfSBmcm9tICcuLi9zdG9yZS5qcyc7XG5pbXBvcnQgeyBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSc7XG4vL2NvbnNvbGUubG9nKCRxdWl6U3RlcHMpO1xubGV0IHN0YXJ0PSAzMCAqIDYwO1xubGV0IHRpbWVyID0gdHdlZW5lZChzdGFydCk7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoJHRpbWVyID4gMCAmJiAkdGltZXJBY3RpdmUpICR0aW1lci0tO1xuICB9LCAxMDAwKTtcblxuICAkOiBtaW51dGVzID0gTWF0aC5mbG9vcigkdGltZXIgLyA2MCk7XG4gICQ6IG1pbm5hbWUgPSBtaW51dGVzID4gMSA/IFwibWluc1wiIDogXCJtaW5cIjtcbiAgJDogc2Vjb25kcyA9IE1hdGguZmxvb3IoJHRpbWVyIC0gbWludXRlcyAqIDYwKS50b0xvY2FsZVN0cmluZygnZW4nLCB7bWluaW11bUludGVnZXJEaWdpdHM6Mix1c2VHcm91cGluZzpmYWxzZX0pXG5cbmxldCBiZzEgPSB0cnVlO1xubGV0IGJnMiA9IGZhbHNlO1xubGV0IGJnMyA9IGZhbHNlO1xuXG5hZnRlclVwZGF0ZSgoKSA9PntcbiAgICBpZigkY291bnQgPiAzKXtiZzEgPSBmYWxzZTsgYmcyID0gdHJ1ZTt9XG57aWYoICRjb3VudCAgPiA3KXtiZzI9IGZhbHNlOyBiZzM9IHRydWU7fVxufX0pXG48L3NjcmlwdD5cbjxhc2lkZSBjbGFzczpiZzEgY2xhc3M6YmcyIGNsYXNzOmJnMz5cbiAgICA8c2VjdGlvbiBpZD1cInRpbWVyXCI+XG4gICAgICAgPGRpdj5UaW1lIFJlbWFpbmluZzo8L2Rpdj4gPGRpdiBpZD0nbWludXRlcycgc3R5bGU9J3doaXRlLXNwYWNlOm5vd3JhcDsnPnttaW51dGVzfTp7c2Vjb25kc308L2Rpdj4gXG4gICAgICAgPGRpdiBpZD0nY2hhbGxlbmdlLW5hbWUnPlxuICAgICAgICA8c2xvdD5cblxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxkaXYgaWQ9XCJwcm9ncmVzcy1ob2xkZXJcIj5cbiAgICA8c2VjdGlvbiBjbGFzcz0nZG9uZSc+XG4gICAgICAgIHsjZWFjaCAkcXVpelN0ZXBzIGFzIGNoYWxsZW5nZX1cbiAgICAgICAgICAgIHsjaWYgY2hhbGxlbmdlLnR5cGUgIT0gJ2NoZWNrcG9pbnQnfVxuICAgICAgICA8Q2hlY2sgYWN0aXZlPXtjaGFsbGVuZ2Uuc3RhdHVzfS8+IFxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgey9lYWNofSAgICBcbiAgICA8L3NlY3Rpb24+XG4gICAgPHByb2dyZXNzIHZhbHVlPXskcHJvZ3Jlc3N9IG1heD1cIjEwMFwiIGNsYXNzOmJnMSBjbGFzczpiZzIgY2xhc3M6YmczPjwvcHJvZ3Jlc3M+XG4gICAgPC9kaXY+XG48L2FzaWRlPlxuPHN0eWxlPlxuICAgIGFzaWRlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMzMuNzV2dzsgXG4gICAgICAgIGhlaWdodDogODZ2aDsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODQyNEQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICBtYXJnaW46IDEycHggMHB4IDQwcHggMjBweDtcbiAgICAgICAgbWluLXdpZHRoOiAzM3Z3O1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgfVxuICAgICN0aW1lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7IFxuICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDMwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAjcmVtYWluaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDBweDtcblxuICAgIH1cbiAgICAjbWludXRlcyB7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMEYyMDMzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDIwcHg7IFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDJweCAzMHB4OyBcblxuICAgIH1cbiAgICAuZG9uZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweFxuICAgIH1cbiAgICAubG9jayB7XG4gICAgICAgIFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vY2hlY2tlZC5zdmcpIG5vLXJlcGVhdDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICB9XG4gICAgLmVsbGlwc2Uge1xuICAgICAgICB3aWR0aDozcHg7XG4gICAgICAgIGhlaWdodDozcHg7XG4gICAgICAgIG1hcmdpbjogM3B4O1xuICAgIH1cbiAgICBwcm9ncmVzc3tcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHQgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDg2JTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3R0b206IDQuN3ZoO1xuICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMXB4O1xuICAgIH1cbiAgICBwcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xuXHQgICAgYmFja2dyb3VuZDogIzMwMzUzODtcblx0fVxuICAgIHByb2dyZXNzLmJnMTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM3NGVmN2I7XG4gICAgfVxuICAgIHByb2dyZXNzLmJnMjo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGMUMzMzA7XG4gICAgfVxuICAgIHByb2dyZXNzLmJnMzo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNFOTQwNDA7XG4gICAgfVxuICAgIC5iZzEge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2JnLWdyb3VwMS5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICAgICAgY29sb3I6ICM3NGVmN2I7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmJnMiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYmctZ3JvdXAyLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgICAgICBjb2xvcjogI0YxQzMzMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuYmczIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9iZy1ncm91cDMucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgICAgIGNvbG9yOiAjRTk0MDQwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgICNwcm9ncmVzcy1ob2xkZXIge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgICAjY2hhbGxlbmdlLW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG48L3N0eWxlPlxuPCEtLVxuXG4gICAgICAgIFxuPGRpdiBjbGFzcz0nZG9uZSc+XG4gICAge2lmIGFjdGl2ZX1cbiAgICA8aW1nIHNyYz0nLi9sb2NrLWFjdGl2ZS5zdmcnIGFsdD1cImNvbXBsZXRlZFwiIGNsYXNzPSdhY3RpdmUgbG9jaycgLz5cbiAgICBcbiAgICAgICAgPGltZyBzcmM9Jy4vRWxsaXBzZS1hY3RpdmUucG5nJyBhbHQ9XCJjb21wbGV0ZWRcIiBjbGFzcz0nZWxsaXBzZSBhY3RpdmUnIC8+XG4gICAgICAgIDxpbWcgc3JjPScuL0VsbGlwc2UtaW5hY3RpdmUucG5nJyBhbHQ9XCJjb21wbGV0ZWRcIiBjbGFzcz0nZWxsaXBzZSBpbmFjdGl2ZScgLz5cbjwvZGl2PlxuPC9kaXY+LS0+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
