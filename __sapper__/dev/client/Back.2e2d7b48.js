import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as validate_store, p as component_subscribe, v as validate_slots, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, T as listen_dev, n as noop } from './client.85f32382.js';
import { c as count, q as quizSteps, s as step } from './store.07036999.js';

/* src/components/Back.svelte generated by Svelte v3.23.2 */
const file = "src/components/Back.svelte";

function create_fragment(ctx) {
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
			attr_dev(button, "class", "svelte-we73oe");
			add_location(button, file, 10, 0, 232);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
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
	let $quizSteps;
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(2, $count = $$value));
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(3, $quizSteps = $$value));

	function goBack() {
		if (step == 0) {
			alert("Going back to " + $count);
		} else {
			alert("Going back to " + $quizSteps[count].steps);
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
		$quizSteps
	});

	return [goBack, click_handler];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFjay4yZTJkN2I0OC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQmFjay5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCB7IGNvdW50LCBzdGVwLCBxdWl6U3RlcHMgfSBmcm9tICcuLi9zdG9yZS5qcydcbmZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBpZihzdGVwID09IDApIHtcbiAgICAgICAgYWxlcnQoJ0dvaW5nIGJhY2sgdG8gJyArICRjb3VudClcbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnR29pbmcgYmFjayB0byAnICsgJHF1aXpTdGVwc1tjb3VudF0uc3RlcHMpXG4gICAgfVxufVxuPC9zY3JpcHQ+XG48YnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBnb0JhY2soKX0+XG4gICAgQmFja1xuPC9idXR0b24+XG48c3R5bGU+XG4gICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFFUyxNQUFNO01BQ1IsSUFBSSxJQUFJLENBQUM7R0FDUixLQUFLLENBQUMsZ0JBQWdCLEdBQUcsTUFBTTs7R0FFL0IsS0FBSyxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSzs7Ozs7Ozs7Ozs7OzZCQUloQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=