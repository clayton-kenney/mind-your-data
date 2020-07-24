import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as validate_store, p as component_subscribe, v as validate_slots, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, X as listen_dev, n as noop, M as empty, P as set_store_value } from './client.8405a250.js';
import { c as count, s as step, q as quizSteps } from './store.da3634cd.js';

/* src/components/Back.svelte generated by Svelte v3.23.2 */
const file = "src/components/Back.svelte";

// (18:0) {#if $count >= 1}
function create_if_block(ctx) {
	let button;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t = text("Back");
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t = claim_text(button_nodes, "Back");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "svelte-96bmx6");
			add_location(button, file, 18, 0, 513);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(18:0) {#if $count >= 1}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let if_block_anchor;
	let if_block = /*$count*/ ctx[0] >= 1 && create_if_block(ctx);

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
		},
		p: function update(ctx, [dirty]) {
			if (/*$count*/ ctx[0] >= 1) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
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
	let $count;
	let $step;
	let $quizSteps;
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(0, $count = $$value));
	validate_store(step, "step");
	component_subscribe($$self, step, $$value => $$invalidate(3, $step = $$value));
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(4, $quizSteps = $$value));

	function goBack() {
		if ($count >= 1 && $step == 0) {
			alert("Are you sure you want to go back?");

			//$quizSteps[$count].complete = true;
			count.update(n => n - 1);

			set_store_value(quizSteps, $quizSteps[$count + 1].status = 0, $quizSteps);

			if ($quizSteps[$count].status != 2) {
				set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
			}

			step.set($quizSteps[$count].steps);
		} else {
			step.update(n => n - 1);
		}
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Back> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Back", $$slots, []);
	const click_handler = () => goBack();

	$$self.$capture_state = () => ({
		count,
		step,
		quizSteps,
		goBack,
		$count,
		$step,
		$quizSteps
	});

	return [$count, goBack, click_handler];
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

export { Back as B };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFjay5hMWNmMTE0Ni5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQmFjay5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCB7IGNvdW50LCBzdGVwLCBxdWl6U3RlcHMgfSBmcm9tICcuLi9zdG9yZS5qcydcbmZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBpZigkY291bnQgPj0gMSAmJiAkc3RlcCA9PSAwKSB7XG4gICAgICAgIGFsZXJ0KCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZ28gYmFjaz8nKVxuICAgICAgICAvLyRxdWl6U3RlcHNbJGNvdW50XS5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIGNvdW50LnVwZGF0ZShuID0+IG4gLSAxKVxuICAgICAgICAkcXVpelN0ZXBzWyRjb3VudCsxXS5zdGF0dXMgPSAwO1xuICAgICAgICBpZiAoJHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyAhPSAyKSB7XG4gICAgICAgICAgICAkcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMTtcbiAgICAgICAgfVxuICAgICAgICBzdGVwLnNldCgkcXVpelN0ZXBzWyRjb3VudF0uc3RlcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ZXAudXBkYXRlKG4gPT4gbiAtIDEpXG4gICAgfVxufVxuPC9zY3JpcHQ+XG57I2lmICRjb3VudCA+PSAxfVxuPGJ1dHRvbiBvbjpjbGljaz17KCkgPT4gZ29CYWNrKCl9PlxuICAgIEJhY2tcbjwvYnV0dG9uPlxuey9pZn1cbjxzdHlsZT5cbiAgICBidXR0b24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0Ym9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQWlCSyxHQUFNLE9BQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztrQkFBWCxHQUFNLE9BQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQWZQLE1BQU07TUFDUixNQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0dBQ3hCLEtBQUssQ0FBQyxtQ0FBbUM7OztHQUV6QyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7OEJBQ3ZCLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDOztPQUMzQixVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sSUFBSSxDQUFDOytCQUM5QixVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDOzs7R0FFakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUs7O0dBRWpDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7NkJBS04sTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
