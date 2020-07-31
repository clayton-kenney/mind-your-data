import { $ as writable, A as identity, a0 as assign, a1 as now, a2 as loop } from './client.733dbd71.js';
import { g as cubicOut } from './index.4d8be7ed.js';

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

//determines what quiz component is showing
const count = writable(10); //max 10

//steps within each quiz component
const step = writable(0);

//is the timer running?
const timerActive = writable(false);
//holds number 0-100 that displays progress bar
const progress = tweened(0, {
    duration: 600,
    easing: cubicOut
});
/*
export const quizSteps =  writable([
    { id:'1',  component: "Quiz1", name: 'Cover Webcam', complete:false, status: 0, steps: 3, displayProgress: true},
    { id: '2', component: "Quiz2", name: 'Https Everywhere', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '7', component: 'Quiz6', name: 'Change DNS', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '3', type:'checkpoint', component: "Checkpoint1", name: 'Security vs Privacy', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '4', component: "Quiz3", name: 'Change Search Engine', complete:false, status: 0, steps: 2, displayProgress: true},
    { id: '5', component: 'Quiz4', name: 'Change Privacy Settings', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '6', component: 'Quiz5', name: 'Tracker blocker', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '8', type:'checkpoint', component: 'Checkpoint2', name: 'Surveillance Capitalism', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '10', component: 'Quiz7', name: 'Internet of Things', complete:false, status: 0, steps: 2, displayProgress: true},
    { id: '9', component: 'Quiz8', name: 'Disable Location Tracking', complete:false, status: 0, steps: 2, displayProgress: true},
    { id: '11', type:'checkpoint', component: 'Checkpoint3', name: 'How to Make change', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '12', type:'checkpoint', component: 'Review', name: 'Review', complete:false, status: 0, steps: 0, displayProgress: false},
])
*/
const quizSteps =  writable([
    { id:'1',  component: "Quiz1", name: 'Cover Webcam', complete:true, status: 0, steps: 3, displayProgress: true},
    { id: '2', component: "Quiz2", name: 'Https Everywhere', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '7', component: 'Quiz6', name: 'Change DNS', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '3', type:'checkpoint', component: "Checkpoint1", name: 'Security vs Privacy', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '4', component: "Quiz3", name: 'Change Search Engine', complete:false, status: 0, steps: 2, displayProgress: true},
    { id: '5', component: 'Quiz4', name: 'Change Privacy Settings', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '6', component: 'Quiz5', name: 'Tracker blocker', complete:true, status: 0, steps: 1, displayProgress: true},
    { id: '8', type:'checkpoint', component: 'Checkpoint2', name: 'Surveillance Capitalism', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '10', component: 'Quiz7', name: 'Internet of Things', complete:true, status: 0, steps: 2, displayProgress: true},
    { id: '9', component: 'Quiz8', name: 'Disable Location Tracking', complete:true, status: 0, steps: 2, displayProgress: true},
    { id: '11', type:'checkpoint', component: 'Checkpoint3', name: 'How to Make change', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '12', type:'checkpoint', component: 'Review', name: 'Review', complete:false, status: 0, steps: 0, displayProgress: false},
]);
/*
export const quizSteps =  writable([
    { id:'1',  component: "Quiz1", name: 'Cover Webcam', complete:false, status: 0, steps: 3, displayProgress: true},
    { id: '2', component: "Quiz2", name: 'Https Everywhere', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '7', component: 'Quiz6', name: 'Change DNS', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '3', type:'checkpoint', component: "Checkpoint1", name: 'Security vs Privacy', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '4', component: "Quiz3", name: 'Change Search Engine', complete:false, status: 0, steps: 2, displayProgress: true},
    { id: '5', component: 'Quiz4', name: 'Change Privacy Settings', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '6', component: 'Quiz5', name: 'Tracker blocker', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '8', type:'checkpoint', component: 'Checkpoint2', name: 'Surveillance Capitalism', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '10', component: 'Quiz7', name: 'Internet of Things', complete:false, status: 0, steps: 2, displayProgress: true},
    { id: '9', component: 'Quiz8', name: 'Disable Location Tracking', complete:false, status: 0, steps: 2, displayProgress: true},
    { id: '11', type:'checkpoint', component: 'Checkpoint3', name: 'How to Make change', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '12', type:'checkpoint', component: 'Review', name: 'Review', complete:false, status: 0, steps: 0, displayProgress: false},
])
*/

export { tweened as a, count as c, progress as p, quizSteps as q, step as s, timerActive as t };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuNGQ1MjlkOTYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvbW90aW9uL2luZGV4Lm1qcyIsIi4uLy4uLy4uL3NyYy9zdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IG5vdywgbG9vcCwgYXNzaWduIH0gZnJvbSAnLi4vaW50ZXJuYWwnO1xuaW1wb3J0IHsgbGluZWFyIH0gZnJvbSAnLi4vZWFzaW5nJztcblxuZnVuY3Rpb24gaXNfZGF0ZShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuZnVuY3Rpb24gdGlja19zcHJpbmcoY3R4LCBsYXN0X3ZhbHVlLCBjdXJyZW50X3ZhbHVlLCB0YXJnZXRfdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRfdmFsdWUgPT09ICdudW1iZXInIHx8IGlzX2RhdGUoY3VycmVudF92YWx1ZSkpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBkZWx0YSA9IHRhcmdldF92YWx1ZSAtIGN1cnJlbnRfdmFsdWU7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSAoY3VycmVudF92YWx1ZSAtIGxhc3RfdmFsdWUpIC8gKGN0eC5kdCB8fCAxIC8gNjApOyAvLyBndWFyZCBkaXYgYnkgMFxuICAgICAgICBjb25zdCBzcHJpbmcgPSBjdHgub3B0cy5zdGlmZm5lc3MgKiBkZWx0YTtcbiAgICAgICAgY29uc3QgZGFtcGVyID0gY3R4Lm9wdHMuZGFtcGluZyAqIHZlbG9jaXR5O1xuICAgICAgICBjb25zdCBhY2NlbGVyYXRpb24gPSAoc3ByaW5nIC0gZGFtcGVyKSAqIGN0eC5pbnZfbWFzcztcbiAgICAgICAgY29uc3QgZCA9ICh2ZWxvY2l0eSArIGFjY2VsZXJhdGlvbikgKiBjdHguZHQ7XG4gICAgICAgIGlmIChNYXRoLmFicyhkKSA8IGN0eC5vcHRzLnByZWNpc2lvbiAmJiBNYXRoLmFicyhkZWx0YSkgPCBjdHgub3B0cy5wcmVjaXNpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRfdmFsdWU7IC8vIHNldHRsZWRcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5zZXR0bGVkID0gZmFsc2U7IC8vIHNpZ25hbCBsb29wIHRvIGtlZXAgdGlja2luZ1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgcmV0dXJuIGlzX2RhdGUoY3VycmVudF92YWx1ZSkgP1xuICAgICAgICAgICAgICAgIG5ldyBEYXRlKGN1cnJlbnRfdmFsdWUuZ2V0VGltZSgpICsgZCkgOiBjdXJyZW50X3ZhbHVlICsgZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRfdmFsdWUpKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRfdmFsdWUubWFwKChfLCBpKSA9PiB0aWNrX3NwcmluZyhjdHgsIGxhc3RfdmFsdWVbaV0sIGN1cnJlbnRfdmFsdWVbaV0sIHRhcmdldF92YWx1ZVtpXSkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY3VycmVudF92YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbmV4dF92YWx1ZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGsgaW4gY3VycmVudF92YWx1ZSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG5leHRfdmFsdWVba10gPSB0aWNrX3NwcmluZyhjdHgsIGxhc3RfdmFsdWVba10sIGN1cnJlbnRfdmFsdWVba10sIHRhcmdldF92YWx1ZVtrXSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIG5leHRfdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzcHJpbmcgJHt0eXBlb2YgY3VycmVudF92YWx1ZX0gdmFsdWVzYCk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3ByaW5nKHZhbHVlLCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBzdG9yZSA9IHdyaXRhYmxlKHZhbHVlKTtcbiAgICBjb25zdCB7IHN0aWZmbmVzcyA9IDAuMTUsIGRhbXBpbmcgPSAwLjgsIHByZWNpc2lvbiA9IDAuMDEgfSA9IG9wdHM7XG4gICAgbGV0IGxhc3RfdGltZTtcbiAgICBsZXQgdGFzaztcbiAgICBsZXQgY3VycmVudF90b2tlbjtcbiAgICBsZXQgbGFzdF92YWx1ZSA9IHZhbHVlO1xuICAgIGxldCB0YXJnZXRfdmFsdWUgPSB2YWx1ZTtcbiAgICBsZXQgaW52X21hc3MgPSAxO1xuICAgIGxldCBpbnZfbWFzc19yZWNvdmVyeV9yYXRlID0gMDtcbiAgICBsZXQgY2FuY2VsX3Rhc2sgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBzZXQobmV3X3ZhbHVlLCBvcHRzID0ge30pIHtcbiAgICAgICAgdGFyZ2V0X3ZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICBjb25zdCB0b2tlbiA9IGN1cnJlbnRfdG9rZW4gPSB7fTtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgb3B0cy5oYXJkIHx8IChzcHJpbmcuc3RpZmZuZXNzID49IDEgJiYgc3ByaW5nLmRhbXBpbmcgPj0gMSkpIHtcbiAgICAgICAgICAgIGNhbmNlbF90YXNrID0gdHJ1ZTsgLy8gY2FuY2VsIGFueSBydW5uaW5nIGFuaW1hdGlvblxuICAgICAgICAgICAgbGFzdF90aW1lID0gbm93KCk7XG4gICAgICAgICAgICBsYXN0X3ZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgc3RvcmUuc2V0KHZhbHVlID0gdGFyZ2V0X3ZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRzLnNvZnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhdGUgPSBvcHRzLnNvZnQgPT09IHRydWUgPyAuNSA6ICtvcHRzLnNvZnQ7XG4gICAgICAgICAgICBpbnZfbWFzc19yZWNvdmVyeV9yYXRlID0gMSAvIChyYXRlICogNjApO1xuICAgICAgICAgICAgaW52X21hc3MgPSAwOyAvLyBpbmZpbml0ZSBtYXNzLCB1bmFmZmVjdGVkIGJ5IHNwcmluZyBmb3JjZXNcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgICAgIGxhc3RfdGltZSA9IG5vdygpO1xuICAgICAgICAgICAgY2FuY2VsX3Rhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbF90YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbF90YXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGludl9tYXNzID0gTWF0aC5taW4oaW52X21hc3MgKyBpbnZfbWFzc19yZWNvdmVyeV9yYXRlLCAxKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICAgICAgICAgIGludl9tYXNzLFxuICAgICAgICAgICAgICAgICAgICBvcHRzOiBzcHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR0OiAobm93IC0gbGFzdF90aW1lKSAqIDYwIC8gMTAwMFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dF92YWx1ZSA9IHRpY2tfc3ByaW5nKGN0eCwgbGFzdF92YWx1ZSwgdmFsdWUsIHRhcmdldF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgbGFzdF90aW1lID0gbm93O1xuICAgICAgICAgICAgICAgIGxhc3RfdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSBuZXh0X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LnNldHRsZWQpXG4gICAgICAgICAgICAgICAgICAgIHRhc2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiAhY3R4LnNldHRsZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVsZmlsID0+IHtcbiAgICAgICAgICAgIHRhc2sucHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4gPT09IGN1cnJlbnRfdG9rZW4pXG4gICAgICAgICAgICAgICAgICAgIGZ1bGZpbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBzcHJpbmcgPSB7XG4gICAgICAgIHNldCxcbiAgICAgICAgdXBkYXRlOiAoZm4sIG9wdHMpID0+IHNldChmbih0YXJnZXRfdmFsdWUsIHZhbHVlKSwgb3B0cyksXG4gICAgICAgIHN1YnNjcmliZTogc3RvcmUuc3Vic2NyaWJlLFxuICAgICAgICBzdGlmZm5lc3MsXG4gICAgICAgIGRhbXBpbmcsXG4gICAgICAgIHByZWNpc2lvblxuICAgIH07XG4gICAgcmV0dXJuIHNwcmluZztcbn1cblxuZnVuY3Rpb24gZ2V0X2ludGVycG9sYXRvcihhLCBiKSB7XG4gICAgaWYgKGEgPT09IGIgfHwgYSAhPT0gYSlcbiAgICAgICAgcmV0dXJuICgpID0+IGE7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBhO1xuICAgIGlmICh0eXBlICE9PSB0eXBlb2YgYiB8fCBBcnJheS5pc0FycmF5KGEpICE9PSBBcnJheS5pc0FycmF5KGIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGludGVycG9sYXRlIHZhbHVlcyBvZiBkaWZmZXJlbnQgdHlwZScpO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICBjb25zdCBhcnIgPSBiLm1hcCgoYmksIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRfaW50ZXJwb2xhdG9yKGFbaV0sIGJpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0ID0+IGFyci5tYXAoZm4gPT4gZm4odCkpO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKCFhIHx8ICFiKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPYmplY3QgY2Fubm90IGJlIG51bGwnKTtcbiAgICAgICAgaWYgKGlzX2RhdGUoYSkgJiYgaXNfZGF0ZShiKSkge1xuICAgICAgICAgICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgICAgICAgICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBiIC0gYTtcbiAgICAgICAgICAgIHJldHVybiB0ID0+IG5ldyBEYXRlKGEgKyB0ICogZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhiKTtcbiAgICAgICAgY29uc3QgaW50ZXJwb2xhdG9ycyA9IHt9O1xuICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGludGVycG9sYXRvcnNba2V5XSA9IGdldF9pbnRlcnBvbGF0b3IoYVtrZXldLCBiW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IGludGVycG9sYXRvcnNba2V5XSh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gYiAtIGE7XG4gICAgICAgIHJldHVybiB0ID0+IGEgKyB0ICogZGVsdGE7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGludGVycG9sYXRlICR7dHlwZX0gdmFsdWVzYCk7XG59XG5mdW5jdGlvbiB0d2VlbmVkKHZhbHVlLCBkZWZhdWx0cyA9IHt9KSB7XG4gICAgY29uc3Qgc3RvcmUgPSB3cml0YWJsZSh2YWx1ZSk7XG4gICAgbGV0IHRhc2s7XG4gICAgbGV0IHRhcmdldF92YWx1ZSA9IHZhbHVlO1xuICAgIGZ1bmN0aW9uIHNldChuZXdfdmFsdWUsIG9wdHMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IG5ld192YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0X3ZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICBsZXQgcHJldmlvdXNfdGFzayA9IHRhc2s7XG4gICAgICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgIGxldCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGxpbmVhciwgaW50ZXJwb2xhdGUgPSBnZXRfaW50ZXJwb2xhdG9yIH0gPSBhc3NpZ24oYXNzaWduKHt9LCBkZWZhdWx0cyksIG9wdHMpO1xuICAgICAgICBpZiAoZHVyYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c190YXNrKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNfdGFzay5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2sgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RvcmUuc2V0KHZhbHVlID0gdGFyZ2V0X3ZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydCA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGxldCBmbjtcbiAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChub3cgPCBzdGFydClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghc3RhcnRlZCkge1xuICAgICAgICAgICAgICAgIGZuID0gaW50ZXJwb2xhdGUodmFsdWUsIG5ld192YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbih2YWx1ZSwgbmV3X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcmV2aW91c190YXNrKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNfdGFzay5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2sgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IG5vdyAtIHN0YXJ0O1xuICAgICAgICAgICAgaWYgKGVsYXBzZWQgPiBkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IG5ld192YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgc3RvcmUuc2V0KHZhbHVlID0gZm4oZWFzaW5nKGVsYXBzZWQgLyBkdXJhdGlvbikpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRhc2sucHJvbWlzZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0LFxuICAgICAgICB1cGRhdGU6IChmbiwgb3B0cykgPT4gc2V0KGZuKHRhcmdldF92YWx1ZSwgdmFsdWUpLCBvcHRzKSxcbiAgICAgICAgc3Vic2NyaWJlOiBzdG9yZS5zdWJzY3JpYmVcbiAgICB9O1xufVxuXG5leHBvcnQgeyBzcHJpbmcsIHR3ZWVuZWQgfTtcbiIsImltcG9ydCB7IHdyaXRhYmxlLCB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5pbXBvcnQgeyB0d2VlbmVkIH0gZnJvbSAnc3ZlbHRlL21vdGlvbic7XG5pbXBvcnQgeyBjdWJpY091dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXG4vL2RldGVybWluZXMgd2hhdCBxdWl6IGNvbXBvbmVudCBpcyBzaG93aW5nXG5leHBvcnQgY29uc3QgY291bnQgPSB3cml0YWJsZSgxMCk7IC8vbWF4IDEwXG5cbi8vc3RlcHMgd2l0aGluIGVhY2ggcXVpeiBjb21wb25lbnRcbmV4cG9ydCBjb25zdCBzdGVwID0gd3JpdGFibGUoMCk7XG5cbi8vaXMgdGhlIHRpbWVyIHJ1bm5pbmc/XG5leHBvcnQgY29uc3QgdGltZXJBY3RpdmUgPSB3cml0YWJsZShmYWxzZSk7XG4vL2hvbGRzIG51bWJlciAwLTEwMCB0aGF0IGRpc3BsYXlzIHByb2dyZXNzIGJhclxuZXhwb3J0IGNvbnN0IHByb2dyZXNzID0gdHdlZW5lZCgwLCB7XG4gICAgZHVyYXRpb246IDYwMCxcbiAgICBlYXNpbmc6IGN1YmljT3V0XG59KVxuLypcbmV4cG9ydCBjb25zdCBxdWl6U3RlcHMgPSAgd3JpdGFibGUoW1xuICAgIHsgaWQ6JzEnLCAgY29tcG9uZW50OiBcIlF1aXoxXCIsIG5hbWU6ICdDb3ZlciBXZWJjYW0nLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMywgZGlzcGxheVByb2dyZXNzOiB0cnVlfSxcbiAgICB7IGlkOiAnMicsIGNvbXBvbmVudDogXCJRdWl6MlwiLCBuYW1lOiAnSHR0cHMgRXZlcnl3aGVyZScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAxLCBkaXNwbGF5UHJvZ3Jlc3M6IHRydWV9LFxuICAgIHsgaWQ6ICc3JywgY29tcG9uZW50OiAnUXVpejYnLCBuYW1lOiAnQ2hhbmdlIEROUycsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAxLCBkaXNwbGF5UHJvZ3Jlc3M6IHRydWV9LFxuICAgIHsgaWQ6ICczJywgdHlwZTonY2hlY2twb2ludCcsIGNvbXBvbmVudDogXCJDaGVja3BvaW50MVwiLCBuYW1lOiAnU2VjdXJpdHkgdnMgUHJpdmFjeScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAwLCBkaXNwbGF5UHJvZ3Jlc3M6IGZhbHNlfSxcbiAgICB7IGlkOiAnNCcsIGNvbXBvbmVudDogXCJRdWl6M1wiLCBuYW1lOiAnQ2hhbmdlIFNlYXJjaCBFbmdpbmUnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMiwgZGlzcGxheVByb2dyZXNzOiB0cnVlfSxcbiAgICB7IGlkOiAnNScsIGNvbXBvbmVudDogJ1F1aXo0JywgbmFtZTogJ0NoYW5nZSBQcml2YWN5IFNldHRpbmdzJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDEsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzYnLCBjb21wb25lbnQ6ICdRdWl6NScsIG5hbWU6ICdUcmFja2VyIGJsb2NrZXInLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMSwgZGlzcGxheVByb2dyZXNzOiB0cnVlfSxcbiAgICB7IGlkOiAnOCcsIHR5cGU6J2NoZWNrcG9pbnQnLCBjb21wb25lbnQ6ICdDaGVja3BvaW50MicsIG5hbWU6ICdTdXJ2ZWlsbGFuY2UgQ2FwaXRhbGlzbScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAwLCBkaXNwbGF5UHJvZ3Jlc3M6IGZhbHNlfSxcbiAgICB7IGlkOiAnMTAnLCBjb21wb25lbnQ6ICdRdWl6NycsIG5hbWU6ICdJbnRlcm5ldCBvZiBUaGluZ3MnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMiwgZGlzcGxheVByb2dyZXNzOiB0cnVlfSxcbiAgICB7IGlkOiAnOScsIGNvbXBvbmVudDogJ1F1aXo4JywgbmFtZTogJ0Rpc2FibGUgTG9jYXRpb24gVHJhY2tpbmcnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMiwgZGlzcGxheVByb2dyZXNzOiB0cnVlfSxcbiAgICB7IGlkOiAnMTEnLCB0eXBlOidjaGVja3BvaW50JywgY29tcG9uZW50OiAnQ2hlY2twb2ludDMnLCBuYW1lOiAnSG93IHRvIE1ha2UgY2hhbmdlJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDAsIGRpc3BsYXlQcm9ncmVzczogZmFsc2V9LFxuICAgIHsgaWQ6ICcxMicsIHR5cGU6J2NoZWNrcG9pbnQnLCBjb21wb25lbnQ6ICdSZXZpZXcnLCBuYW1lOiAnUmV2aWV3JywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDAsIGRpc3BsYXlQcm9ncmVzczogZmFsc2V9LFxuXSlcbiovXG5leHBvcnQgY29uc3QgcXVpelN0ZXBzID0gIHdyaXRhYmxlKFtcbiAgICB7IGlkOicxJywgIGNvbXBvbmVudDogXCJRdWl6MVwiLCBuYW1lOiAnQ292ZXIgV2ViY2FtJywgY29tcGxldGU6dHJ1ZSwgc3RhdHVzOiAwLCBzdGVwczogMywgZGlzcGxheVByb2dyZXNzOiB0cnVlfSxcbiAgICB7IGlkOiAnMicsIGNvbXBvbmVudDogXCJRdWl6MlwiLCBuYW1lOiAnSHR0cHMgRXZlcnl3aGVyZScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAxLCBkaXNwbGF5UHJvZ3Jlc3M6IHRydWV9LFxuICAgIHsgaWQ6ICc3JywgY29tcG9uZW50OiAnUXVpejYnLCBuYW1lOiAnQ2hhbmdlIEROUycsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAxLCBkaXNwbGF5UHJvZ3Jlc3M6IHRydWV9LFxuICAgIHsgaWQ6ICczJywgdHlwZTonY2hlY2twb2ludCcsIGNvbXBvbmVudDogXCJDaGVja3BvaW50MVwiLCBuYW1lOiAnU2VjdXJpdHkgdnMgUHJpdmFjeScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAwLCBkaXNwbGF5UHJvZ3Jlc3M6IGZhbHNlfSxcbiAgICB7IGlkOiAnNCcsIGNvbXBvbmVudDogXCJRdWl6M1wiLCBuYW1lOiAnQ2hhbmdlIFNlYXJjaCBFbmdpbmUnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMiwgZGlzcGxheVByb2dyZXNzOiB0cnVlfSxcbiAgICB7IGlkOiAnNScsIGNvbXBvbmVudDogJ1F1aXo0JywgbmFtZTogJ0NoYW5nZSBQcml2YWN5IFNldHRpbmdzJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDEsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzYnLCBjb21wb25lbnQ6ICdRdWl6NScsIG5hbWU6ICdUcmFja2VyIGJsb2NrZXInLCBjb21wbGV0ZTp0cnVlLCBzdGF0dXM6IDAsIHN0ZXBzOiAxLCBkaXNwbGF5UHJvZ3Jlc3M6IHRydWV9LFxuICAgIHsgaWQ6ICc4JywgdHlwZTonY2hlY2twb2ludCcsIGNvbXBvbmVudDogJ0NoZWNrcG9pbnQyJywgbmFtZTogJ1N1cnZlaWxsYW5jZSBDYXBpdGFsaXNtJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDAsIGRpc3BsYXlQcm9ncmVzczogZmFsc2V9LFxuICAgIHsgaWQ6ICcxMCcsIGNvbXBvbmVudDogJ1F1aXo3JywgbmFtZTogJ0ludGVybmV0IG9mIFRoaW5ncycsIGNvbXBsZXRlOnRydWUsIHN0YXR1czogMCwgc3RlcHM6IDIsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzknLCBjb21wb25lbnQ6ICdRdWl6OCcsIG5hbWU6ICdEaXNhYmxlIExvY2F0aW9uIFRyYWNraW5nJywgY29tcGxldGU6dHJ1ZSwgc3RhdHVzOiAwLCBzdGVwczogMiwgZGlzcGxheVByb2dyZXNzOiB0cnVlfSxcbiAgICB7IGlkOiAnMTEnLCB0eXBlOidjaGVja3BvaW50JywgY29tcG9uZW50OiAnQ2hlY2twb2ludDMnLCBuYW1lOiAnSG93IHRvIE1ha2UgY2hhbmdlJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDAsIGRpc3BsYXlQcm9ncmVzczogZmFsc2V9LFxuICAgIHsgaWQ6ICcxMicsIHR5cGU6J2NoZWNrcG9pbnQnLCBjb21wb25lbnQ6ICdSZXZpZXcnLCBuYW1lOiAnUmV2aWV3JywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDAsIGRpc3BsYXlQcm9ncmVzczogZmFsc2V9LFxuXSlcbi8qXG5leHBvcnQgY29uc3QgcXVpelN0ZXBzID0gIHdyaXRhYmxlKFtcbiAgICB7IGlkOicxJywgIGNvbXBvbmVudDogXCJRdWl6MVwiLCBuYW1lOiAnQ292ZXIgV2ViY2FtJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDMsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzInLCBjb21wb25lbnQ6IFwiUXVpejJcIiwgbmFtZTogJ0h0dHBzIEV2ZXJ5d2hlcmUnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMSwgZGlzcGxheVByb2dyZXNzOiB0cnVlfSxcbiAgICB7IGlkOiAnNycsIGNvbXBvbmVudDogJ1F1aXo2JywgbmFtZTogJ0NoYW5nZSBETlMnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMSwgZGlzcGxheVByb2dyZXNzOiB0cnVlfSxcbiAgICB7IGlkOiAnMycsIHR5cGU6J2NoZWNrcG9pbnQnLCBjb21wb25lbnQ6IFwiQ2hlY2twb2ludDFcIiwgbmFtZTogJ1NlY3VyaXR5IHZzIFByaXZhY3knLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMCwgZGlzcGxheVByb2dyZXNzOiBmYWxzZX0sXG4gICAgeyBpZDogJzQnLCBjb21wb25lbnQ6IFwiUXVpejNcIiwgbmFtZTogJ0NoYW5nZSBTZWFyY2ggRW5naW5lJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDIsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzUnLCBjb21wb25lbnQ6ICdRdWl6NCcsIG5hbWU6ICdDaGFuZ2UgUHJpdmFjeSBTZXR0aW5ncycsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAxLCBkaXNwbGF5UHJvZ3Jlc3M6IHRydWV9LFxuICAgIHsgaWQ6ICc2JywgY29tcG9uZW50OiAnUXVpejUnLCBuYW1lOiAnVHJhY2tlciBibG9ja2VyJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDEsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzgnLCB0eXBlOidjaGVja3BvaW50JywgY29tcG9uZW50OiAnQ2hlY2twb2ludDInLCBuYW1lOiAnU3VydmVpbGxhbmNlIENhcGl0YWxpc20nLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMCwgZGlzcGxheVByb2dyZXNzOiBmYWxzZX0sXG4gICAgeyBpZDogJzEwJywgY29tcG9uZW50OiAnUXVpejcnLCBuYW1lOiAnSW50ZXJuZXQgb2YgVGhpbmdzJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDIsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzknLCBjb21wb25lbnQ6ICdRdWl6OCcsIG5hbWU6ICdEaXNhYmxlIExvY2F0aW9uIFRyYWNraW5nJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDIsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzExJywgdHlwZTonY2hlY2twb2ludCcsIGNvbXBvbmVudDogJ0NoZWNrcG9pbnQzJywgbmFtZTogJ0hvdyB0byBNYWtlIGNoYW5nZScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAwLCBkaXNwbGF5UHJvZ3Jlc3M6IGZhbHNlfSxcbiAgICB7IGlkOiAnMTInLCB0eXBlOidjaGVja3BvaW50JywgY29tcG9uZW50OiAnUmV2aWV3JywgbmFtZTogJ1JldmlldycsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAwLCBkaXNwbGF5UHJvZ3Jlc3M6IGZhbHNlfSxcbl0pXG4qLyJdLCJuYW1lcyI6WyJsaW5lYXIiXSwibWFwcGluZ3MiOiI7OztBQUlBLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUN0QixJQUFJLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGVBQWUsQ0FBQztBQUNuRSxDQUFDO0FBMEdEO0FBQ0EsU0FBUyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQzFCLFFBQVEsT0FBTyxNQUFNLENBQUMsQ0FBQztBQUN2QixJQUFJLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQzFCLElBQUksSUFBSSxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3BFLFFBQVEsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0FBQ3ZFLEtBQUs7QUFDTCxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUMxQixRQUFRLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLO0FBQ3JDLFlBQVksT0FBTyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxD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
