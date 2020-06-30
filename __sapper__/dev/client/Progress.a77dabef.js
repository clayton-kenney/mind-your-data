import { E as writable, F as identity, G as assign, H as now, I as loop, S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, J as create_slot, K as createEventDispatcher, L as validate_store, M as component_subscribe, N as set_store_value, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, O as listen_dev, z as set_data_dev, P as update_slot, u as transition_in, w as transition_out } from './client.8655070d.js';

function is_date(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
}

function get_interpolator(a, b) {
    if (a === b || a !== a)
        return () => a;
    const type = typeof a;
    if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
        throw new Error('Cannot interpolate values of different type');
    }
    if (Array.isArray(a)) {
        const arr = b.map((bi, i) => {
            return get_interpolator(a[i], bi);
        });
        return t => arr.map(fn => fn(t));
    }
    if (type === 'object') {
        if (!a || !b)
            throw new Error('Object cannot be null');
        if (is_date(a) && is_date(b)) {
            a = a.getTime();
            b = b.getTime();
            const delta = b - a;
            return t => new Date(a + t * delta);
        }
        const keys = Object.keys(b);
        const interpolators = {};
        keys.forEach(key => {
            interpolators[key] = get_interpolator(a[key], b[key]);
        });
        return t => {
            const result = {};
            keys.forEach(key => {
                result[key] = interpolators[key](t);
            });
            return result;
        };
    }
    if (type === 'number') {
        const delta = b - a;
        return t => a + t * delta;
    }
    throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
    const store = writable(value);
    let task;
    let target_value = value;
    function set(new_value, opts) {
        if (value == null) {
            store.set(value = new_value);
            return Promise.resolve();
        }
        target_value = new_value;
        let previous_task = task;
        let started = false;
        let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
        if (duration === 0) {
            if (previous_task) {
                previous_task.abort();
                previous_task = null;
            }
            store.set(value = target_value);
            return Promise.resolve();
        }
        const start = now() + delay;
        let fn;
        task = loop(now => {
            if (now < start)
                return true;
            if (!started) {
                fn = interpolate(value, new_value);
                if (typeof duration === 'function')
                    duration = duration(value, new_value);
                started = true;
            }
            if (previous_task) {
                previous_task.abort();
                previous_task = null;
            }
            const elapsed = now - start;
            if (elapsed > duration) {
                store.set(value = new_value);
                return false;
            }
            // @ts-ignore
            store.set(value = fn(easing(elapsed / duration)));
            return true;
        });
        return task.promise;
    }
    return {
        set,
        update: (fn, opts) => set(fn(target_value, value), opts),
        subscribe: store.subscribe
    };
}

/* src/routes/quiz/Progress.svelte generated by Svelte v3.23.2 */

const file = "src/routes/quiz/Progress.svelte";

function create_fragment(ctx) {
	let aside;
	let section0;
	let span0;
	let t0;
	let t1;
	let span1;
	let t2;
	let t3;
	let t4;
	let t5;
	let section1;
	let t6;
	let section2;
	let button0;
	let t7;
	let t8;
	let button1;
	let t9;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	const block = {
		c: function create() {
			aside = element("aside");
			section0 = element("section");
			span0 = element("span");
			t0 = text("Time remaining:");
			t1 = space();
			span1 = element("span");
			t2 = text(/*minutes*/ ctx[0]);
			t3 = text(":");
			t4 = text(/*seconds*/ ctx[1]);
			t5 = space();
			section1 = element("section");
			if (default_slot) default_slot.c();
			t6 = space();
			section2 = element("section");
			button0 = element("button");
			t7 = text("Next");
			t8 = space();
			button1 = element("button");
			t9 = text("Skip");
			this.h();
		},
		l: function claim(nodes) {
			aside = claim_element(nodes, "ASIDE", { id: true, class: true });
			var aside_nodes = children(aside);
			section0 = claim_element(aside_nodes, "SECTION", { id: true, class: true });
			var section0_nodes = children(section0);
			span0 = claim_element(section0_nodes, "SPAN", { id: true, class: true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "Time remaining:");
			span0_nodes.forEach(detach_dev);
			t1 = claim_space(section0_nodes);
			span1 = claim_element(section0_nodes, "SPAN", { id: true, class: true });
			var span1_nodes = children(span1);
			t2 = claim_text(span1_nodes, /*minutes*/ ctx[0]);
			t3 = claim_text(span1_nodes, ":");
			t4 = claim_text(span1_nodes, /*seconds*/ ctx[1]);
			span1_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t5 = claim_space(aside_nodes);
			section1 = claim_element(aside_nodes, "SECTION", { id: true, class: true });
			var section1_nodes = children(section1);
			if (default_slot) default_slot.l(section1_nodes);
			section1_nodes.forEach(detach_dev);
			t6 = claim_space(aside_nodes);
			section2 = claim_element(aside_nodes, "SECTION", { id: true, class: true });
			var section2_nodes = children(section2);
			button0 = claim_element(section2_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t7 = claim_text(button0_nodes, "Next");
			button0_nodes.forEach(detach_dev);
			t8 = claim_space(section2_nodes);
			button1 = claim_element(section2_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t9 = claim_text(button1_nodes, "Skip");
			button1_nodes.forEach(detach_dev);
			section2_nodes.forEach(detach_dev);
			aside_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "id", "remaining");
			attr_dev(span0, "class", "svelte-50f2g");
			add_location(span0, file, 84, 8, 1690);
			attr_dev(span1, "id", "minutes");
			attr_dev(span1, "class", "svelte-50f2g");
			add_location(span1, file, 85, 8, 1743);
			attr_dev(section0, "id", "timer");
			attr_dev(section0, "class", "svelte-50f2g");
			add_location(section0, file, 83, 4, 1661);
			attr_dev(section1, "id", "progress");
			attr_dev(section1, "class", "svelte-50f2g");
			add_location(section1, file, 87, 4, 1808);
			attr_dev(button0, "class", "btn-dark svelte-50f2g");
			add_location(button0, file, 93, 8, 1917);
			attr_dev(button1, "class", "btn-dark svelte-50f2g");
			add_location(button1, file, 94, 8, 1984);
			attr_dev(section2, "id", "next-skip");
			attr_dev(section2, "class", "svelte-50f2g");
			add_location(section2, file, 92, 4, 1883);
			attr_dev(aside, "id", "sidebar");
			attr_dev(aside, "class", "svelte-50f2g");
			add_location(aside, file, 82, 0, 1636);
		},
		m: function mount(target, anchor) {
			insert_dev(target, aside, anchor);
			append_dev(aside, section0);
			append_dev(section0, span0);
			append_dev(span0, t0);
			append_dev(section0, t1);
			append_dev(section0, span1);
			append_dev(span1, t2);
			append_dev(span1, t3);
			append_dev(span1, t4);
			append_dev(aside, t5);
			append_dev(aside, section1);

			if (default_slot) {
				default_slot.m(section1, null);
			}

			append_dev(aside, t6);
			append_dev(aside, section2);
			append_dev(section2, button0);
			append_dev(button0, t7);
			append_dev(section2, t8);
			append_dev(section2, button1);
			append_dev(button1, t9);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button0, "click", /*sayHello*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*minutes*/ 1) set_data_dev(t2, /*minutes*/ ctx[0]);
			if (!current || dirty & /*seconds*/ 2) set_data_dev(t4, /*seconds*/ ctx[1]);

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 16) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(aside);
			if (default_slot) default_slot.d(detaching);
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
	let $timer;
	let completed;
	const dispatch = createEventDispatcher();

	function sayHello() {
		num++;
		dispatch("message", { number: num });
	}

	let start = 30 * 60;
	let timer = tweened(start);
	validate_store(timer, "timer");
	component_subscribe($$self, timer, value => $$invalidate(7, $timer = value));

	setInterval(
		() => {
			if ($timer > 0) set_store_value(timer, $timer--, $timer);
		},
		1000
	);

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Progress> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Progress", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		completed,
		createEventDispatcher,
		dispatch,
		sayHello,
		tweened,
		start,
		timer,
		num,
		$timer,
		minutes,
		minname,
		seconds
	});

	$$self.$inject_state = $$props => {
		if ("completed" in $$props) completed = $$props.completed;
		if ("start" in $$props) start = $$props.start;
		if ("timer" in $$props) $$invalidate(3, timer = $$props.timer);
		if ("num" in $$props) num = $$props.num;
		if ("minutes" in $$props) $$invalidate(0, minutes = $$props.minutes);
		if ("minname" in $$props) minname = $$props.minname;
		if ("seconds" in $$props) $$invalidate(1, seconds = $$props.seconds);
	};

	let num;
	let minutes;
	let minname;
	let seconds;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$timer*/ 128) {
			 $$invalidate(0, minutes = Math.floor($timer / 60));
		}

		if ($$self.$$.dirty & /*minutes*/ 1) {
			 minname = minutes > 1 ? "mins" : "min";
		}

		if ($$self.$$.dirty & /*$timer, minutes*/ 129) {
			 $$invalidate(1, seconds = Math.floor($timer - minutes * 60));
		}
	};

	 num = 0;
	return [minutes, seconds, sayHello, timer, $$scope, $$slots];
}

class Progress extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Progress",
			options,
			id: create_fragment.name
		});
	}
}

export default Progress;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3MuYTc3ZGFiZWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvbW90aW9uL2luZGV4Lm1qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9Qcm9ncmVzcy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBub3csIGxvb3AsIGFzc2lnbiB9IGZyb20gJy4uL2ludGVybmFsJztcbmltcG9ydCB7IGxpbmVhciB9IGZyb20gJy4uL2Vhc2luZyc7XG5cbmZ1bmN0aW9uIGlzX2RhdGUob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbmZ1bmN0aW9uIHRpY2tfc3ByaW5nKGN0eCwgbGFzdF92YWx1ZSwgY3VycmVudF92YWx1ZSwgdGFyZ2V0X3ZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50X3ZhbHVlID09PSAnbnVtYmVyJyB8fCBpc19kYXRlKGN1cnJlbnRfdmFsdWUpKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgZGVsdGEgPSB0YXJnZXRfdmFsdWUgLSBjdXJyZW50X3ZhbHVlO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHZlbG9jaXR5ID0gKGN1cnJlbnRfdmFsdWUgLSBsYXN0X3ZhbHVlKSAvIChjdHguZHQgfHwgMSAvIDYwKTsgLy8gZ3VhcmQgZGl2IGJ5IDBcbiAgICAgICAgY29uc3Qgc3ByaW5nID0gY3R4Lm9wdHMuc3RpZmZuZXNzICogZGVsdGE7XG4gICAgICAgIGNvbnN0IGRhbXBlciA9IGN0eC5vcHRzLmRhbXBpbmcgKiB2ZWxvY2l0eTtcbiAgICAgICAgY29uc3QgYWNjZWxlcmF0aW9uID0gKHNwcmluZyAtIGRhbXBlcikgKiBjdHguaW52X21hc3M7XG4gICAgICAgIGNvbnN0IGQgPSAodmVsb2NpdHkgKyBhY2NlbGVyYXRpb24pICogY3R4LmR0O1xuICAgICAgICBpZiAoTWF0aC5hYnMoZCkgPCBjdHgub3B0cy5wcmVjaXNpb24gJiYgTWF0aC5hYnMoZGVsdGEpIDwgY3R4Lm9wdHMucHJlY2lzaW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0X3ZhbHVlOyAvLyBzZXR0bGVkXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdHguc2V0dGxlZCA9IGZhbHNlOyAvLyBzaWduYWwgbG9vcCB0byBrZWVwIHRpY2tpbmdcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHJldHVybiBpc19kYXRlKGN1cnJlbnRfdmFsdWUpID9cbiAgICAgICAgICAgICAgICBuZXcgRGF0ZShjdXJyZW50X3ZhbHVlLmdldFRpbWUoKSArIGQpIDogY3VycmVudF92YWx1ZSArIGQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50X3ZhbHVlKSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBjdXJyZW50X3ZhbHVlLm1hcCgoXywgaSkgPT4gdGlja19zcHJpbmcoY3R4LCBsYXN0X3ZhbHVlW2ldLCBjdXJyZW50X3ZhbHVlW2ldLCB0YXJnZXRfdmFsdWVbaV0pKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGN1cnJlbnRfdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IG5leHRfdmFsdWUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrIGluIGN1cnJlbnRfdmFsdWUpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBuZXh0X3ZhbHVlW2tdID0gdGlja19zcHJpbmcoY3R4LCBsYXN0X3ZhbHVlW2tdLCBjdXJyZW50X3ZhbHVlW2tdLCB0YXJnZXRfdmFsdWVba10pO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBuZXh0X3ZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc3ByaW5nICR7dHlwZW9mIGN1cnJlbnRfdmFsdWV9IHZhbHVlc2ApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNwcmluZyh2YWx1ZSwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3Qgc3RvcmUgPSB3cml0YWJsZSh2YWx1ZSk7XG4gICAgY29uc3QgeyBzdGlmZm5lc3MgPSAwLjE1LCBkYW1waW5nID0gMC44LCBwcmVjaXNpb24gPSAwLjAxIH0gPSBvcHRzO1xuICAgIGxldCBsYXN0X3RpbWU7XG4gICAgbGV0IHRhc2s7XG4gICAgbGV0IGN1cnJlbnRfdG9rZW47XG4gICAgbGV0IGxhc3RfdmFsdWUgPSB2YWx1ZTtcbiAgICBsZXQgdGFyZ2V0X3ZhbHVlID0gdmFsdWU7XG4gICAgbGV0IGludl9tYXNzID0gMTtcbiAgICBsZXQgaW52X21hc3NfcmVjb3ZlcnlfcmF0ZSA9IDA7XG4gICAgbGV0IGNhbmNlbF90YXNrID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSwgb3B0cyA9IHt9KSB7XG4gICAgICAgIHRhcmdldF92YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBjdXJyZW50X3Rva2VuID0ge307XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IG9wdHMuaGFyZCB8fCAoc3ByaW5nLnN0aWZmbmVzcyA+PSAxICYmIHNwcmluZy5kYW1waW5nID49IDEpKSB7XG4gICAgICAgICAgICBjYW5jZWxfdGFzayA9IHRydWU7IC8vIGNhbmNlbCBhbnkgcnVubmluZyBhbmltYXRpb25cbiAgICAgICAgICAgIGxhc3RfdGltZSA9IG5vdygpO1xuICAgICAgICAgICAgbGFzdF92YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IHRhcmdldF92YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0cy5zb2Z0KSB7XG4gICAgICAgICAgICBjb25zdCByYXRlID0gb3B0cy5zb2Z0ID09PSB0cnVlID8gLjUgOiArb3B0cy5zb2Z0O1xuICAgICAgICAgICAgaW52X21hc3NfcmVjb3ZlcnlfcmF0ZSA9IDEgLyAocmF0ZSAqIDYwKTtcbiAgICAgICAgICAgIGludl9tYXNzID0gMDsgLy8gaW5maW5pdGUgbWFzcywgdW5hZmZlY3RlZCBieSBzcHJpbmcgZm9yY2VzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXNrKSB7XG4gICAgICAgICAgICBsYXN0X3RpbWUgPSBub3coKTtcbiAgICAgICAgICAgIGNhbmNlbF90YXNrID0gZmFsc2U7XG4gICAgICAgICAgICB0YXNrID0gbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjYW5jZWxfdGFzaykge1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxfdGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0YXNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnZfbWFzcyA9IE1hdGgubWluKGludl9tYXNzICsgaW52X21hc3NfcmVjb3ZlcnlfcmF0ZSwgMSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICBpbnZfbWFzcyxcbiAgICAgICAgICAgICAgICAgICAgb3B0czogc3ByaW5nLFxuICAgICAgICAgICAgICAgICAgICBzZXR0bGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdDogKG5vdyAtIGxhc3RfdGltZSkgKiA2MCAvIDEwMDBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRfdmFsdWUgPSB0aWNrX3NwcmluZyhjdHgsIGxhc3RfdmFsdWUsIHZhbHVlLCB0YXJnZXRfdmFsdWUpO1xuICAgICAgICAgICAgICAgIGxhc3RfdGltZSA9IG5vdztcbiAgICAgICAgICAgICAgICBsYXN0X3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0KHZhbHVlID0gbmV4dF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5zZXR0bGVkKVxuICAgICAgICAgICAgICAgICAgICB0YXNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWN0eC5zZXR0bGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bGZpbCA9PiB7XG4gICAgICAgICAgICB0YXNrLnByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuID09PSBjdXJyZW50X3Rva2VuKVxuICAgICAgICAgICAgICAgICAgICBmdWxmaWwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgc3ByaW5nID0ge1xuICAgICAgICBzZXQsXG4gICAgICAgIHVwZGF0ZTogKGZuLCBvcHRzKSA9PiBzZXQoZm4odGFyZ2V0X3ZhbHVlLCB2YWx1ZSksIG9wdHMpLFxuICAgICAgICBzdWJzY3JpYmU6IHN0b3JlLnN1YnNjcmliZSxcbiAgICAgICAgc3RpZmZuZXNzLFxuICAgICAgICBkYW1waW5nLFxuICAgICAgICBwcmVjaXNpb25cbiAgICB9O1xuICAgIHJldHVybiBzcHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldF9pbnRlcnBvbGF0b3IoYSwgYikge1xuICAgIGlmIChhID09PSBiIHx8IGEgIT09IGEpXG4gICAgICAgIHJldHVybiAoKSA9PiBhO1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgYTtcbiAgICBpZiAodHlwZSAhPT0gdHlwZW9mIGIgfHwgQXJyYXkuaXNBcnJheShhKSAhPT0gQXJyYXkuaXNBcnJheShiKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBpbnRlcnBvbGF0ZSB2YWx1ZXMgb2YgZGlmZmVyZW50IHR5cGUnKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgY29uc3QgYXJyID0gYi5tYXAoKGJpLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0X2ludGVycG9sYXRvcihhW2ldLCBiaSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdCA9PiBhcnIubWFwKGZuID0+IGZuKHQpKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICghYSB8fCAhYilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT2JqZWN0IGNhbm5vdCBiZSBudWxsJyk7XG4gICAgICAgIGlmIChpc19kYXRlKGEpICYmIGlzX2RhdGUoYikpIHtcbiAgICAgICAgICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gYiAtIGE7XG4gICAgICAgICAgICByZXR1cm4gdCA9PiBuZXcgRGF0ZShhICsgdCAqIGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYik7XG4gICAgICAgIGNvbnN0IGludGVycG9sYXRvcnMgPSB7fTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpbnRlcnBvbGF0b3JzW2tleV0gPSBnZXRfaW50ZXJwb2xhdG9yKGFba2V5XSwgYltrZXldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBpbnRlcnBvbGF0b3JzW2tleV0odCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25zdCBkZWx0YSA9IGIgLSBhO1xuICAgICAgICByZXR1cm4gdCA9PiBhICsgdCAqIGRlbHRhO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBpbnRlcnBvbGF0ZSAke3R5cGV9IHZhbHVlc2ApO1xufVxuZnVuY3Rpb24gdHdlZW5lZCh2YWx1ZSwgZGVmYXVsdHMgPSB7fSkge1xuICAgIGNvbnN0IHN0b3JlID0gd3JpdGFibGUodmFsdWUpO1xuICAgIGxldCB0YXNrO1xuICAgIGxldCB0YXJnZXRfdmFsdWUgPSB2YWx1ZTtcbiAgICBmdW5jdGlvbiBzZXQobmV3X3ZhbHVlLCBvcHRzKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSBuZXdfdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldF92YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgbGV0IHByZXZpb3VzX3Rhc2sgPSB0YXNrO1xuICAgICAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBsaW5lYXIsIGludGVycG9sYXRlID0gZ2V0X2ludGVycG9sYXRvciB9ID0gYXNzaWduKGFzc2lnbih7fSwgZGVmYXVsdHMpLCBvcHRzKTtcbiAgICAgICAgaWYgKGR1cmF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICBpZiAocHJldmlvdXNfdGFzaykge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2suYWJvcnQoKTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c190YXNrID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IHRhcmdldF92YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBsZXQgZm47XG4gICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAobm93IDwgc3RhcnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAoIXN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICBmbiA9IGludGVycG9sYXRlKHZhbHVlLCBuZXdfdmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24odmFsdWUsIG5ld192YWx1ZSk7XG4gICAgICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldmlvdXNfdGFzaykge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2suYWJvcnQoKTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c190YXNrID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBub3cgLSBzdGFydDtcbiAgICAgICAgICAgIGlmIChlbGFwc2VkID4gZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSBuZXdfdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IGZuKGVhc2luZyhlbGFwc2VkIC8gZHVyYXRpb24pKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXNrLnByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldCxcbiAgICAgICAgdXBkYXRlOiAoZm4sIG9wdHMpID0+IHNldChmbih0YXJnZXRfdmFsdWUsIHZhbHVlKSwgb3B0cyksXG4gICAgICAgIHN1YnNjcmliZTogc3RvcmUuc3Vic2NyaWJlXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgc3ByaW5nLCB0d2VlbmVkIH07XG4iLCI8c2NyaXB0PlxubGV0IGNvbXBsZXRlZDtcbi8vcGFzcyB0byBldmVudHMgdG8gcXVpeiBjb21wb25lbnRzXG5pbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuICAgICQ6IG51bSA9IDA7XG5cdGZ1bmN0aW9uIHNheUhlbGxvKCkge1xuICAgICAgICBudW0rK1xuXHRcdGRpc3BhdGNoKCdtZXNzYWdlJywge1xuXHRcdFx0bnVtYmVyOiBudW1cblx0XHR9KTtcblx0fVxuXG5cblxuXG4vL3RvdGFsIHRpbWUgZm9yIGNvdW50ZG93blxuaW1wb3J0IHsgdHdlZW5lZCB9IGZyb20gJ3N2ZWx0ZS9tb3Rpb24nO1xubGV0IHN0YXJ0PSAzMCAqIDYwO1xubGV0IHRpbWVyID0gdHdlZW5lZChzdGFydCk7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoJHRpbWVyID4gMCkgJHRpbWVyLS07XG4gIH0sIDEwMDApO1xuXG4gICQ6IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCR0aW1lciAvIDYwKTtcbiAgJDogbWlubmFtZSA9IG1pbnV0ZXMgPiAxID8gXCJtaW5zXCIgOiBcIm1pblwiO1xuICAkOiBzZWNvbmRzID0gTWF0aC5mbG9vcigkdGltZXIgLSBtaW51dGVzICogNjApXG5cbjwvc2NyaXB0PlxuPHN0eWxlPlxuICAgIGFzaWRlIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6NTVweDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzdjN2M3O1xuICAgIH1cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDIwcHggMTBweDtcbiAgICB9XG4gICAgI3RpbWVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzdjN2M3O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB9XG4gICAgI3JlbWFpbmluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweCAyMHB4IDBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG5cbiAgICB9XG4gICAgI21pbnV0ZXMge1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzBGMjAzMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcblxuICAgIH1cbiAgICAuYnRuLWRhcmsge1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzBGMjAzMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIH1cbiAgICAjbmV4dC1za2lwIHtcbiAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweCAyMHB4IDBweDtcbiAgICB9XG4gICAgXG48L3N0eWxlPlxuPGFzaWRlIGlkPSdzaWRlYmFyJz5cbiAgICA8c2VjdGlvbiBpZD1cInRpbWVyXCI+XG4gICAgICAgIDxzcGFuIGlkPSdyZW1haW5pbmcnPlRpbWUgcmVtYWluaW5nOjwvc3Bhbj4gXG4gICAgICAgIDxzcGFuIGlkPSdtaW51dGVzJz57bWludXRlc306e3NlY29uZHN9PC9zcGFuPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBpZD1cInByb2dyZXNzXCI+XG4gICAgICAgIDxzbG90PlxuXG4gICAgICAgIDwvc2xvdD5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gaWQ9J25leHQtc2tpcCc+IFxuICAgICAgICA8YnV0dG9uIG9uOmNsaWNrPXtzYXlIZWxsb30gY2xhc3M9J2J0bi1kYXJrJz5OZXh0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gIGNsYXNzPSdidG4tZGFyayc+U2tpcDwvYnV0dG9uPlxuICAgICAgICA8IS0tPGJ1dHRvbiBvbjpjbGljaz17aGFuZGxlQ2xpY2tNaW51c30+U2tpcDwvYnV0dG9uPi0tPlxuICAgIDwvc2VjdGlvbj5cbjwvYXNpZGU+Il0sIm5hbWVzIjpbImxpbmVhciJdLCJtYXBwaW5ncyI6Ijs7QUFJQSxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFDdEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxlQUFlLENBQUM7QUFDbkUsQ0FBQztBQTBHRDtBQUNBLFNBQVMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUMx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
