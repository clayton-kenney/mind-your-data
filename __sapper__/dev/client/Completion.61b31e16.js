import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, J as empty, l as insert_dev, n as noop, b as detach_dev, e as element, f as claim_element, j as attr_dev, k as add_location, K as create_slot, L as validate_each_argument, o as validate_store, p as component_subscribe, M as set_store_value, u as afterUpdate, x as globals, D as transition_in, I as group_outros, B as transition_out, C as check_outros, t as text, a as space, g as children, h as claim_text, c as claim_space, N as set_style, O as toggle_class, m as append_dev, H as set_data_dev, P as update_slot, Q as prop_dev, R as destroy_each, y as create_component, z as claim_component, A as mount_component, G as destroy_component } from './client.01612e14.js';
import { c as cubicOut } from './index.cccde779.js';
import { t as timerActive, q as quizSteps, c as count, p as progress, a as tweened } from './store.1d07f850.js';

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

// (41:12) {#if challenge.type != 'checkpoint'}
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
		source: "(41:12) {#if challenge.type != 'checkpoint'}",
		ctx
	});

	return block;
}

// (40:8) {#each $quizSteps as challenge}
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
		source: "(40:8) {#each $quizSteps as challenge}",
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
			add_location(div0, file$1, 30, 7, 944);
			attr_dev(div1, "id", "minutes");
			set_style(div1, "white-space", "nowrap");
			attr_dev(div1, "class", "svelte-3amjcx");
			add_location(div1, file$1, 30, 34, 971);
			attr_dev(div2, "id", "challenge-name");
			attr_dev(div2, "class", "svelte-3amjcx");
			add_location(div2, file$1, 31, 7, 1051);
			attr_dev(section0, "id", "timer");
			attr_dev(section0, "class", "svelte-3amjcx");
			add_location(section0, file$1, 29, 4, 916);
			attr_dev(section1, "class", "done svelte-3amjcx");
			add_location(section1, file$1, 38, 4, 1170);
			progress_1.value = /*$progress*/ ctx[6];
			attr_dev(progress_1, "max", "100");
			attr_dev(progress_1, "class", "svelte-3amjcx");
			toggle_class(progress_1, "bg1", /*bg1*/ ctx[0]);
			toggle_class(progress_1, "bg2", /*bg2*/ ctx[1]);
			toggle_class(progress_1, "bg3", /*bg3*/ ctx[2]);
			add_location(progress_1, file$1, 45, 4, 1383);
			attr_dev(div3, "id", "progress-holder");
			attr_dev(div3, "class", "svelte-3amjcx");
			add_location(div3, file$1, 37, 4, 1139);
			attr_dev(aside, "class", "svelte-3amjcx");
			toggle_class(aside, "bg1", /*bg1*/ ctx[0]);
			toggle_class(aside, "bg2", /*bg2*/ ctx[1]);
			toggle_class(aside, "bg3", /*bg3*/ ctx[2]);
			add_location(aside, file$1, 28, 0, 874);
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
		if ($quizSteps[$count].id > 2) {
			$$invalidate(0, bg1 = false);
			$$invalidate(1, bg2 = true);
		}

		{
			if ($quizSteps[$count].id > 7) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxldGlvbi42MWIzMWUxNi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2hlY2suc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblxuICAgIGV4cG9ydCBsZXQgYWN0aXZlO1xuICAgIGFjdGl2ZSA9MDtcblxuPC9zY3JpcHQ+XG57I2lmIGFjdGl2ZSA8IDEgfVxuICAgIDxpbWcgc3JjPScuL2JsYW5rX2NpcmNsZS5zdmcnIGFsdD1cImNvbXBsZXRlZFwiIGNsYXNzPSdhY3RpdmUgbG9jaycgLz5cbiAgICBcbns6ZWxzZSBpZiBhY3RpdmUgPiAxIH1cbiAgICA8aW1nIHNyYz0nLi9jaGVja2VkLnN2ZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2FjdGl2ZSBsb2NrJyAvPlxuICBcbns6ZWxzZX1cbiAgICA8aW1nIHNyYz0nLi91bl9jaGVja2VkLnN2ZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2FjdGl2ZSBsb2NrJyAvPlxuICAgIFxuey9pZn1cbiA8c3R5bGU+XG4gICAgIC5sb2NrIHtcbiAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgfVxuIDwvc3R5bGU+IiwiPHNjcmlwdD5cbiAgICAvL3RvdGFsIHRpbWUgZm9yIGNvdW50ZG93blxuaW1wb3J0IHsgdHdlZW5lZCB9IGZyb20gJ3N2ZWx0ZS9tb3Rpb24nO1xuaW1wb3J0IHsgY3ViaWNPdXQgfSBmcm9tICdzdmVsdGUvZWFzaW5nJztcbmltcG9ydCBDaGVjayBmcm9tICcuL0NoZWNrLnN2ZWx0ZSc7XG5pbXBvcnQgeyBxdWl6U3RlcHMsIHRpbWVyQWN0aXZlLCBwcm9ncmVzcywgY291bnQgfSBmcm9tICcuLi9zdG9yZS5qcyc7XG5pbXBvcnQgeyBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSc7XG4vL2NvbnNvbGUubG9nKCRxdWl6U3RlcHMpO1xubGV0IHN0YXJ0PSAzMCAqIDYwO1xubGV0IHRpbWVyID0gdHdlZW5lZChzdGFydCk7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoJHRpbWVyID4gMCAmJiAkdGltZXJBY3RpdmUpICR0aW1lci0tO1xuICB9LCAxMDAwKTtcblxuICAkOiBtaW51dGVzID0gTWF0aC5mbG9vcigkdGltZXIgLyA2MCk7XG4gICQ6IG1pbm5hbWUgPSBtaW51dGVzID4gMSA/IFwibWluc1wiIDogXCJtaW5cIjtcbiAgJDogc2Vjb25kcyA9IE1hdGguZmxvb3IoJHRpbWVyIC0gbWludXRlcyAqIDYwKS50b0xvY2FsZVN0cmluZygnZW4nLCB7bWluaW11bUludGVnZXJEaWdpdHM6Mix1c2VHcm91cGluZzpmYWxzZX0pXG5cbmxldCBiZzEgPSB0cnVlO1xubGV0IGJnMiA9IGZhbHNlO1xubGV0IGJnMyA9IGZhbHNlO1xuXG5hZnRlclVwZGF0ZSgoKSA9PntcbiAgICBpZigkcXVpelN0ZXBzWyRjb3VudF0uaWQgPiAyKXtiZzEgPSBmYWxzZTsgYmcyID0gdHJ1ZTt9XG57aWYoJHF1aXpTdGVwc1skY291bnRdLmlkID4gNyl7YmcyPSBmYWxzZTsgYmczPSB0cnVlO31cbntjb25zb2xlLmxvZyhiZzEsIGJnMiwgYmczLCRxdWl6U3RlcHNbJGNvdW50XS5pZCl9XG59fSlcbjwvc2NyaXB0PlxuPGFzaWRlIGNsYXNzOmJnMSBjbGFzczpiZzIgY2xhc3M6YmczPlxuICAgIDxzZWN0aW9uIGlkPVwidGltZXJcIj5cbiAgICAgICA8ZGl2PlRpbWUgUmVtYWluaW5nOjwvZGl2PiA8ZGl2IGlkPSdtaW51dGVzJyBzdHlsZT0nd2hpdGUtc3BhY2U6bm93cmFwOyc+e21pbnV0ZXN9OntzZWNvbmRzfTwvZGl2PiBcbiAgICAgICA8ZGl2IGlkPSdjaGFsbGVuZ2UtbmFtZSc+XG4gICAgICAgIDxzbG90PlxuXG4gICAgICAgIDwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPGRpdiBpZD1cInByb2dyZXNzLWhvbGRlclwiPlxuICAgIDxzZWN0aW9uIGNsYXNzPSdkb25lJz5cbiAgICAgICAgeyNlYWNoICRxdWl6U3RlcHMgYXMgY2hhbGxlbmdlfVxuICAgICAgICAgICAgeyNpZiBjaGFsbGVuZ2UudHlwZSAhPSAnY2hlY2twb2ludCd9XG4gICAgICAgIDxDaGVjayBhY3RpdmU9e2NoYWxsZW5nZS5zdGF0dXN9Lz4gXG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICB7L2VhY2h9ICAgIFxuICAgIDwvc2VjdGlvbj5cbiAgICA8cHJvZ3Jlc3MgdmFsdWU9eyRwcm9ncmVzc30gbWF4PVwiMTAwXCIgY2xhc3M6YmcxIGNsYXNzOmJnMiBjbGFzczpiZzM+PC9wcm9ncmVzcz5cbiAgICA8L2Rpdj5cbjwvYXNpZGU+XG48c3R5bGU+XG4gICAgYXNpZGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzMy43NXZ3OyBcbiAgICAgICAgaGVpZ2h0OiA4NnZoOyBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NDI0RDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgIG1hcmdpbjogMTJweCAwcHggNDBweCAyMHB4O1xuICAgICAgICBtaW4td2lkdGg6IDMzdnc7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICB9XG4gICAgI3RpbWVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDsgXG4gICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMzBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgICNyZW1haW5pbmcge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMHB4O1xuXG4gICAgfVxuICAgICNtaW51dGVzIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwRjIwMzM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbWFyZ2luOiA4cHggMjBweDsgXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMnB4IDMwcHg7IFxuXG4gICAgfVxuICAgIC5kb25lIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gICAgfVxuICAgIC5sb2NrIHtcbiAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi9jaGVja2VkLnN2Zykgbm8tcmVwZWF0O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcblxuICAgIH1cbiAgICAuZWxsaXBzZSB7XG4gICAgICAgIHdpZHRoOjNweDtcbiAgICAgICAgaGVpZ2h0OjNweDtcbiAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgfVxuICAgIHByb2dyZXNze1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdCAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogODYlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvdHRvbTogNC43dmg7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfVxuICAgIHByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLWJhciB7XG5cdCAgICBiYWNrZ3JvdW5kOiAjMzAzNTM4O1xuXHR9XG4gICAgcHJvZ3Jlc3MuYmcxOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzc0ZWY3YjtcbiAgICB9XG4gICAgcHJvZ3Jlc3MuYmcyOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0YxQzMzMDtcbiAgICB9XG4gICAgcHJvZ3Jlc3MuYmczOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0U5NDA0MDtcbiAgICB9XG4gICAgLmJnMSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYmctZ3JvdXAxLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgICAgICBjb2xvcjogIzc0ZWY3YjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuYmcyIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9iZy1ncm91cDIucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgICAgIGNvbG9yOiAjRjFDMzMwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5iZzMge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2JnLWdyb3VwMy5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICAgICAgY29sb3I6ICNFOTQwNDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgI3Byb2dyZXNzLWhvbGRlciB7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgfVxuICAgICNjaGFsbGVuZ2UtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbjwvc3R5bGU+XG48IS0tXG5cbiAgICAgICAgXG48ZGl2IGNsYXNzPSdkb25lJz5cbiAgICB7aWYgYWN0aXZlfVxuICAgIDxpbWcgc3JjPScuL2xvY2stYWN0aXZlLnN2ZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2FjdGl2ZSBsb2NrJyAvPlxuICAgIFxuICAgICAgICA8aW1nIHNyYz0nLi9FbGxpcHNlLWFjdGl2ZS5wbmcnIGFsdD1cImNvbXBsZXRlZFwiIGNsYXNzPSdlbGxpcHNlIGFjdGl2ZScgLz5cbiAgICAgICAgPGltZyBzcmM9Jy4vRWxsaXBzZS1pbmFjdGl2ZS5wbmcnIGFsdD1cImNvbXBsZXRlZFwiIGNsYXNzPSdlbGxpcHNlIGluYWN0aXZlJyAvPlxuPC9kaXY+XG48L2Rpdj4tLT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
