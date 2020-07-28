import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, U as empty, n as insert_dev, G as noop, j as detach_dev, f as element, g as claim_element, k as attr_dev, l as add_location, y as create_slot, Y as validate_each_argument, H as validate_store, I as component_subscribe, Q as set_store_value, L as afterUpdate, t as transition_in, w as group_outros, b as transition_out, x as check_outros, C as text, B as space, h as children, F as claim_text, E as claim_space, Z as set_style, W as toggle_class, p as append_dev, N as set_data_dev, z as update_slot, T as prop_dev, _ as destroy_each, c as create_component, a as claim_component, m as mount_component, e as destroy_component } from './client.dbadfca2.js';
import { a as cubicOut } from './index.44998259.js';
import { t as timerActive, q as quizSteps, c as count, p as progress, a as tweened } from './store.9eed25a6.js';

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
			add_location(div0, file$1, 29, 7, 893);
			attr_dev(div1, "id", "minutes");
			set_style(div1, "white-space", "nowrap");
			attr_dev(div1, "class", "svelte-f5a52t");
			add_location(div1, file$1, 29, 34, 920);
			attr_dev(div2, "id", "challenge-name");
			attr_dev(div2, "class", "svelte-f5a52t");
			add_location(div2, file$1, 30, 7, 1000);
			attr_dev(section0, "id", "timer");
			attr_dev(section0, "class", "svelte-f5a52t");
			add_location(section0, file$1, 28, 4, 865);
			attr_dev(section1, "class", "done svelte-f5a52t");
			add_location(section1, file$1, 37, 4, 1119);
			progress_1.value = /*$progress*/ ctx[6];
			attr_dev(progress_1, "max", "100");
			attr_dev(progress_1, "class", "svelte-f5a52t");
			toggle_class(progress_1, "bg1", /*bg1*/ ctx[0]);
			toggle_class(progress_1, "bg2", /*bg2*/ ctx[1]);
			toggle_class(progress_1, "bg3", /*bg3*/ ctx[2]);
			add_location(progress_1, file$1, 44, 4, 1332);
			attr_dev(div3, "id", "progress-holder");
			attr_dev(div3, "class", "svelte-f5a52t");
			add_location(div3, file$1, 36, 4, 1088);
			attr_dev(aside, "class", "svelte-f5a52t");
			toggle_class(aside, "bg1", /*bg1*/ ctx[0]);
			toggle_class(aside, "bg2", /*bg2*/ ctx[1]);
			toggle_class(aside, "bg3", /*bg3*/ ctx[2]);
			add_location(aside, file$1, 27, 0, 823);
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
		if ($quizSteps[$count].id > 4) {
			$$invalidate(0, bg1 = false);
			$$invalidate(1, bg2 = true);
		}

		{
			if ($quizSteps[$count].id > 7) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxldGlvbi4wYmRiMjMwYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2hlY2suc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblxuICAgIGV4cG9ydCBsZXQgYWN0aXZlO1xuICAgIGFjdGl2ZSA9MDtcblxuPC9zY3JpcHQ+XG57I2lmIGFjdGl2ZSA8IDEgfVxuICAgIDxpbWcgc3JjPScuL2JsYW5rX2NpcmNsZS5zdmcnIGFsdD1cImNvbXBsZXRlZFwiIGNsYXNzPSdhY3RpdmUgbG9jaycgLz5cbiAgICBcbns6ZWxzZSBpZiBhY3RpdmUgPiAxIH1cbiAgICA8aW1nIHNyYz0nLi9jaGVja2VkLnN2ZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2FjdGl2ZSBsb2NrJyAvPlxuICBcbns6ZWxzZX1cbiAgICA8aW1nIHNyYz0nLi91bl9jaGVja2VkLnN2ZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2FjdGl2ZSBsb2NrJyAvPlxuICAgIFxuey9pZn1cbiA8c3R5bGU+XG4gICAgIC5sb2NrIHtcbiAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgfVxuIDwvc3R5bGU+IiwiPHNjcmlwdD5cbiAgICAvL3RvdGFsIHRpbWUgZm9yIGNvdW50ZG93blxuaW1wb3J0IHsgdHdlZW5lZCB9IGZyb20gJ3N2ZWx0ZS9tb3Rpb24nO1xuaW1wb3J0IHsgY3ViaWNPdXQgfSBmcm9tICdzdmVsdGUvZWFzaW5nJztcbmltcG9ydCBDaGVjayBmcm9tICcuL0NoZWNrLnN2ZWx0ZSc7XG5pbXBvcnQgeyBxdWl6U3RlcHMsIHRpbWVyQWN0aXZlLCBwcm9ncmVzcywgY291bnQgfSBmcm9tICcuLi9zdG9yZS5qcyc7XG5pbXBvcnQgeyBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSc7XG4vL2NvbnNvbGUubG9nKCRxdWl6U3RlcHMpO1xubGV0IHN0YXJ0PSAzMCAqIDYwO1xubGV0IHRpbWVyID0gdHdlZW5lZChzdGFydCk7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoJHRpbWVyID4gMCAmJiAkdGltZXJBY3RpdmUpICR0aW1lci0tO1xuICB9LCAxMDAwKTtcblxuICAkOiBtaW51dGVzID0gTWF0aC5mbG9vcigkdGltZXIgLyA2MCk7XG4gICQ6IG1pbm5hbWUgPSBtaW51dGVzID4gMSA/IFwibWluc1wiIDogXCJtaW5cIjtcbiAgJDogc2Vjb25kcyA9IE1hdGguZmxvb3IoJHRpbWVyIC0gbWludXRlcyAqIDYwKS50b0xvY2FsZVN0cmluZygnZW4nLCB7bWluaW11bUludGVnZXJEaWdpdHM6Mix1c2VHcm91cGluZzpmYWxzZX0pXG5cbmxldCBiZzEgPSB0cnVlO1xubGV0IGJnMiA9IGZhbHNlO1xubGV0IGJnMyA9IGZhbHNlO1xuXG5hZnRlclVwZGF0ZSgoKSA9PntcbiAgICBpZigkcXVpelN0ZXBzWyRjb3VudF0uaWQgPiA0KXtiZzEgPSBmYWxzZTsgYmcyID0gdHJ1ZTt9XG57aWYoJHF1aXpTdGVwc1skY291bnRdLmlkID4gNyl7YmcyPSBmYWxzZTsgYmczPSB0cnVlO31cbn19KVxuPC9zY3JpcHQ+XG48YXNpZGUgY2xhc3M6YmcxIGNsYXNzOmJnMiBjbGFzczpiZzM+XG4gICAgPHNlY3Rpb24gaWQ9XCJ0aW1lclwiPlxuICAgICAgIDxkaXY+VGltZSBSZW1haW5pbmc6PC9kaXY+IDxkaXYgaWQ9J21pbnV0ZXMnIHN0eWxlPSd3aGl0ZS1zcGFjZTpub3dyYXA7Jz57bWludXRlc306e3NlY29uZHN9PC9kaXY+IFxuICAgICAgIDxkaXYgaWQ9J2NoYWxsZW5nZS1uYW1lJz5cbiAgICAgICAgPHNsb3Q+XG5cbiAgICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8ZGl2IGlkPVwicHJvZ3Jlc3MtaG9sZGVyXCI+XG4gICAgPHNlY3Rpb24gY2xhc3M9J2RvbmUnPlxuICAgICAgICB7I2VhY2ggJHF1aXpTdGVwcyBhcyBjaGFsbGVuZ2V9XG4gICAgICAgICAgICB7I2lmIGNoYWxsZW5nZS50eXBlICE9ICdjaGVja3BvaW50J31cbiAgICAgICAgPENoZWNrIGFjdGl2ZT17Y2hhbGxlbmdlLnN0YXR1c30vPiBcbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgIHsvZWFjaH0gICAgXG4gICAgPC9zZWN0aW9uPlxuICAgIDxwcm9ncmVzcyB2YWx1ZT17JHByb2dyZXNzfSBtYXg9XCIxMDBcIiBjbGFzczpiZzEgY2xhc3M6YmcyIGNsYXNzOmJnMz48L3Byb2dyZXNzPlxuICAgIDwvZGl2PlxuPC9hc2lkZT5cbjxzdHlsZT5cbiAgICBhc2lkZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDMzLjc1dnc7IFxuICAgICAgICBoZWlnaHQ6IDg2dmg7IFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0MjREO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgbWFyZ2luOiAxMnB4IDBweCA0MHB4IDIwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMzN2dztcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgdG9wOiA1MHB4O1xuICAgIH1cbiAgICAjdGltZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwOyBcbiAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAzMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgI3JlbWFpbmluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XG5cbiAgICB9XG4gICAgI21pbnV0ZXMge1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzBGMjAzMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBtYXJnaW46IDhweCAyMHB4OyBcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAycHggMzBweDsgXG5cbiAgICB9XG4gICAgLmRvbmUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHhcbiAgICB9XG4gICAgLmxvY2sge1xuICAgICAgICBcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uL2NoZWNrZWQuc3ZnKSBuby1yZXBlYXQ7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuXG4gICAgfVxuICAgIC5lbGxpcHNlIHtcbiAgICAgICAgd2lkdGg6M3B4O1xuICAgICAgICBoZWlnaHQ6M3B4O1xuICAgICAgICBtYXJnaW46IDNweDtcbiAgICB9XG4gICAgcHJvZ3Jlc3N7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0ICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA4NiU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiA0Ljd2aDtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBtYXJnaW4tbGVmdDogMzFweDtcbiAgICB9XG4gICAgcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcblx0ICAgIGJhY2tncm91bmQ6ICMzMDM1Mzg7XG5cdH1cbiAgICBwcm9ncmVzcy5iZzE6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNzRlZjdiO1xuICAgIH1cbiAgICBwcm9ncmVzcy5iZzI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjFDMzMwO1xuICAgIH1cbiAgICBwcm9ncmVzcy5iZzM6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRTk0MDQwO1xuICAgIH1cbiAgICAuYmcxIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9iZy1ncm91cDEucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgICAgIGNvbG9yOiAjNzRlZjdiO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5iZzIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2JnLWdyb3VwMi5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICAgICAgY29sb3I6ICNGMUMzMzA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmJnMyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYmctZ3JvdXAzLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgICAgICBjb2xvcjogI0U5NDA0MDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAjcHJvZ3Jlc3MtaG9sZGVyIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgI2NoYWxsZW5nZS1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuPC9zdHlsZT5cbjwhLS1cblxuICAgICAgICBcbjxkaXYgY2xhc3M9J2RvbmUnPlxuICAgIHtpZiBhY3RpdmV9XG4gICAgPGltZyBzcmM9Jy4vbG9jay1hY3RpdmUuc3ZnJyBhbHQ9XCJjb21wbGV0ZWRcIiBjbGFzcz0nYWN0aXZlIGxvY2snIC8+XG4gICAgXG4gICAgICAgIDxpbWcgc3JjPScuL0VsbGlwc2UtYWN0aXZlLnBuZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2VsbGlwc2UgYWN0aXZlJyAvPlxuICAgICAgICA8aW1nIHNyYz0nLi9FbGxpcHNlLWluYWN0aXZlLnBuZycgYWx0PVwiY29tcGxldGVkXCIgY2xhc3M9J2VsbGlwc2UgaW5hY3RpdmUnIC8+XG48L2Rpdj5cbjwvZGl2Pi0tPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
