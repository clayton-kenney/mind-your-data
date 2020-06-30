'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sirv = _interopDefault(require('sirv'));
var polka = _interopDefault(require('polka'));
var compression = _interopDefault(require('compression'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var Stream = _interopDefault(require('stream'));
var http = _interopDefault(require('http'));
var Url = _interopDefault(require('url'));
var https = _interopDefault(require('https'));
var zlib = _interopDefault(require('zlib'));

// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What is Sapper?',
		slug: 'what-is-sapper',
		html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
	},

	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}

var route_0 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get
});

const lookup = new Map();
posts.forEach(post => {
	lookup.set(post.slug, JSON.stringify(post));
});

function get$1(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}

var route_1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get$1
});

function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function validate_store(store, name) {
    if (store != null && typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}
function null_to_empty(value) {
    return value == null ? '' : value;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

const tasks = new Set();
function run_tasks(now) {
    tasks.forEach(task => {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        raf(run_tasks);
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    let task;
    if (tasks.size === 0)
        raf(run_tasks);
    return {
        promise: new Promise(fulfill => {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
            tasks.delete(task);
        }
    };
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

/* src/routes/index.svelte generated by Svelte v3.23.2 */

const css = {
	code: "h1.svelte-1acdip2.svelte-1acdip2,p.svelte-1acdip2.svelte-1acdip2{text-align:center;margin:0 auto}.hero.svelte-1acdip2.svelte-1acdip2{background-color:#3e4b59;padding-left:80px;padding-top:30vh;width:100%;height:60vh}.hero.svelte-1acdip2 p.svelte-1acdip2{margin:1em auto;color:white}h1.svelte-1acdip2.svelte-1acdip2{font-size:2.8em;text-align:left;text-transform:uppercase;font-weight:700;margin:0 0 0.5em 0;color:white;letter-spacing:25%}h2.svelte-1acdip2.svelte-1acdip2{text-align:left;margin:auto;text-transform:uppercase}h3.svelte-1acdip2.svelte-1acdip2{text-align:center;margin:auto}.bigImg.svelte-1acdip2.svelte-1acdip2{max-width:1400px;background-color:grey}button.svelte-1acdip2.svelte-1acdip2{background:#7AAF54;text-transform:uppercase;padding:10px 20px 10px 20px;font-size:30px;line-height:38px;border:none;border-radius:10px;color:white;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25)}img.svelte-1acdip2.svelte-1acdip2{width:100%;max-width:400px;margin:0 0 1em 0}.about.svelte-1acdip2.svelte-1acdip2{padding:1.5em}p.svelte-1acdip2.svelte-1acdip2{color:black;text-align:left}ul.svelte-1acdip2.svelte-1acdip2{display:flex;flex-direction:row;list-style:none;margin-block-start:0px;margin-block-end:0px;padding-inline-start:0px}li.svelte-1acdip2.svelte-1acdip2{justify-content:space-around;margin:auto}.why.svelte-1acdip2.svelte-1acdip2{padding-left:80px;margin:1em auto}a.svelte-1acdip2.svelte-1acdip2{text-decoration:none;padding:4px 30px}@media(min-width: 480px){h1.svelte-1acdip2.svelte-1acdip2{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<style>\\n\\tmain {\\n\\t\\twidth: 100%;\\n\\t}\\n\\th1, figure, p {\\n\\t\\ttext-align: center;\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\t\\n\\t.hero {\\n\\t\\tbackground-color: #3e4b59;\\n\\t\\tpadding-left: 80px;\\n\\t\\tpadding-top: 30vh;\\n\\t\\twidth: 100%;\\n\\t\\theight: 60vh;\\n\\t}\\n\\t.hero p {\\n\\t\\tmargin: 1em auto;\\n\\t\\tcolor: white;\\n\\t}\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\ttext-align: left;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t\\tcolor: white;\\n\\t\\tletter-spacing: 25%;\\n\\t}\\n\\th2 {\\n\\t\\ttext-align: left;\\n\\t\\tmargin: auto;\\n\\t\\ttext-transform: uppercase;\\n\\t}\\n\\th3 {\\n\\t\\ttext-align: center;\\n\\t\\tmargin: auto;\\n\\t}\\n\\t.bigImg {\\n\\t\\tmax-width: 1400px;\\n\\t\\tbackground-color: grey;\\n\\t}\\n\\n\\tfigure {\\n\\t\\tmargin: 0 0 1em 0;\\n\\t}\\n\\tbutton {\\n\\t\\tbackground: #7AAF54;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tpadding: 10px 20px 10px 20px;\\n\\t\\tfont-size: 30px;\\n\\t\\tline-height: 38px;\\n\\t\\tborder: none;\\n\\t\\tborder-radius: 10px;\\n\\t\\tcolor: white;\\n\\t\\tbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\\n\\t}\\n\\timg {\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: 400px;\\n\\t\\tmargin: 0 0 1em 0;\\n\\t}\\n\\t.about {\\n\\t\\tpadding: 1.5em;\\n\\t}\\n\\tp {\\n\\t\\tcolor: black;\\n\\t\\ttext-align: left;\\n\\t}\\n\\tul {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: row;\\n\\t\\t\\n\\t\\tlist-style: none;\\n\\t\\tmargin-block-start: 0px;\\n\\t\\tmargin-block-end: 0px;\\n\\t\\tpadding-inline-start: 0px;\\n\\t}\\n\\tli {\\n\\t\\tjustify-content: space-around;\\n\\t\\tmargin: auto;\\n\\t}\\n\\t.why{\\n\\t\\tpadding-left: 80px;\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\t.why h2 {\\n\\t\\ttext-transform: uppercase;\\n\\t\\ttext-align: left;\\n\\t}\\n\\ta {\\n\\t\\ttext-decoration: none;\\n\\t\\tpadding: 4px 30px;\\n\\t}\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>Mind Your Data: Aka Fuck surveillance capitalism</title>\\n</svelte:head>\\n\\n<div class=\\\"hero\\\">\\n\\t<h1>Mind Your Data</h1>\\n\\t<p >We believe that everyone in this world should be the only owner of our data.<br>\\n\\t\\tBut most of us blah blah blah </p>\\n\\t<button><a rel=prefetch href=\\\"/quiz\\\">Start the lesson</a></button>\\n</div>\\n<ul>\\n\\t<li class='about'>\\n\\t\\t<h3>Who We Are</h3>\\n\\t\\t<p class='about'>For anyone concerned about loss of privacy and the implications it has for our democracy, Mind your Data educates, and empowers citizens to fight for a more equitable form of survillance capitalism because, our future freedom to privacy depends on the actions we take now.</p>\\n\\t</li>\\n\\t<li class='about'>\\t\\t\\n\\t\\t<h3>Our Mission</h3>\\n\\t\\t<p class='about'>We are to educate people about the implications of surveillance capitalism and empower them to Opt out and to help bring forth institutions, regulations, and laws to promote a social form of surveillance capitalism that serves all. </p>\\n\\t</li>\\n\\t<li class='about'>\\t\\t\\n\\t\\t<h3>Somethign Else</h3>\\n\\t\\t<p class='about'>We are to educate people about the implications of surveillance capitalism and empower them to Opt out and to help bring forth institutions, regulations, and laws to promote a social form of surveillance capitalism that serves all. </p>\\n\\t</li>\\n</ul>\\n<img src='./1400x450.png' class=\\\"bigImg\\\" alt='placeholder'>\\n<h2 class='why'>Why it matters</h2>\\n\\t<p class=\\\"why\\\">I'm baby mixtape selfies duis before they sold out cronut iPhone. Butcher duis williamsburg food truck sustainable quis next level ipsum thundercats synth. Schlitz umami in meggings yuccie food truck. Fashion axe crucifix laboris asymmetrical jean shorts dolore. Freegan chillwave fashion axe vice pinterest bicycle rights vaporware four loko af eiusmod raw denim. Vexillologist fingerstache organic yr poke, lyft nulla portland heirloom elit marfa brunch. Bushwick deep v ut, thundercats air plant banjo palo santo taxidermy succulents before they sold out put a bird on it live-edge hoodie hella.\\n\\t</p>\\n\"],\"names\":[],\"mappings\":\"AAIC,gCAAE,CAAU,CAAC,8BAAC,CAAC,AACd,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,KAAK,8BAAC,CAAC,AACN,gBAAgB,CAAE,OAAO,CACzB,YAAY,CAAE,IAAI,CAClB,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACb,CAAC,AACD,oBAAK,CAAC,CAAC,eAAC,CAAC,AACR,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,KAAK,CAAE,KAAK,AACb,CAAC,AACD,EAAE,8BAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,IAAI,CAChB,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CACnB,KAAK,CAAE,KAAK,CACZ,cAAc,CAAE,GAAG,AACpB,CAAC,AACD,EAAE,8BAAC,CAAC,AACH,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,cAAc,CAAE,SAAS,AAC1B,CAAC,AACD,EAAE,8BAAC,CAAC,AACH,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,IAAI,AACb,CAAC,AACD,OAAO,8BAAC,CAAC,AACR,SAAS,CAAE,MAAM,CACjB,gBAAgB,CAAE,IAAI,AACvB,CAAC,AAKD,MAAM,8BAAC,CAAC,AACP,UAAU,CAAE,OAAO,CACnB,cAAc,CAAE,SAAS,CACzB,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAC5B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,AAC5C,CAAC,AACD,GAAG,8BAAC,CAAC,AACJ,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,AAClB,CAAC,AACD,MAAM,8BAAC,CAAC,AACP,OAAO,CAAE,KAAK,AACf,CAAC,AACD,CAAC,8BAAC,CAAC,AACF,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,IAAI,AACjB,CAAC,AACD,EAAE,8BAAC,CAAC,AACH,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CAEnB,UAAU,CAAE,IAAI,CAChB,kBAAkB,CAAE,GAAG,CACvB,gBAAgB,CAAE,GAAG,CACrB,oBAAoB,CAAE,GAAG,AAC1B,CAAC,AACD,EAAE,8BAAC,CAAC,AACH,eAAe,CAAE,YAAY,CAC7B,MAAM,CAAE,IAAI,AACb,CAAC,AACD,kCAAI,CAAC,AACJ,YAAY,CAAE,IAAI,CAClB,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAKD,CAAC,8BAAC,CAAC,AACF,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,GAAG,CAAC,IAAI,AAClB,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,8BAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Routes = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css);

	return `${($$result.head += `${($$result.title = `<title>Mind Your Data: Aka Fuck surveillance capitalism</title>`, "")}`, "")}

<div class="${"hero svelte-1acdip2"}"><h1 class="${"svelte-1acdip2"}">Mind Your Data</h1>
	<p class="${"svelte-1acdip2"}">We believe that everyone in this world should be the only owner of our data.<br>
		But most of us blah blah blah </p>
	<button class="${"svelte-1acdip2"}"><a rel="${"prefetch"}" href="${"/quiz"}" class="${"svelte-1acdip2"}">Start the lesson</a></button></div>
<ul class="${"svelte-1acdip2"}"><li class="${"about svelte-1acdip2"}"><h3 class="${"svelte-1acdip2"}">Who We Are</h3>
		<p class="${"about svelte-1acdip2"}">For anyone concerned about loss of privacy and the implications it has for our democracy, Mind your Data educates, and empowers citizens to fight for a more equitable form of survillance capitalism because, our future freedom to privacy depends on the actions we take now.</p></li>
	<li class="${"about svelte-1acdip2"}"><h3 class="${"svelte-1acdip2"}">Our Mission</h3>
		<p class="${"about svelte-1acdip2"}">We are to educate people about the implications of surveillance capitalism and empower them to Opt out and to help bring forth institutions, regulations, and laws to promote a social form of surveillance capitalism that serves all. </p></li>
	<li class="${"about svelte-1acdip2"}"><h3 class="${"svelte-1acdip2"}">Somethign Else</h3>
		<p class="${"about svelte-1acdip2"}">We are to educate people about the implications of surveillance capitalism and empower them to Opt out and to help bring forth institutions, regulations, and laws to promote a social form of surveillance capitalism that serves all. </p></li></ul>
<img src="${"./1400x450.png"}" class="${"bigImg svelte-1acdip2"}" alt="${"placeholder"}">
<h2 class="${"why svelte-1acdip2"}">Why it matters</h2>
	<p class="${"why svelte-1acdip2"}">I&#39;m baby mixtape selfies duis before they sold out cronut iPhone. Butcher duis williamsburg food truck sustainable quis next level ipsum thundercats synth. Schlitz umami in meggings yuccie food truck. Fashion axe crucifix laboris asymmetrical jean shorts dolore. Freegan chillwave fashion axe vice pinterest bicycle rights vaporware four loko af eiusmod raw denim. Vexillologist fingerstache organic yr poke, lyft nulla portland heirloom elit marfa brunch. Bushwick deep v ut, thundercats air plant banjo palo santo taxidermy succulents before they sold out put a bird on it live-edge hoodie hella.
	</p>`;
});

/* src/routes/resources.svelte generated by Svelte v3.23.2 */

const Resources = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<p>so much data privacy</p>`;
});

/* src/routes/quiz/q0.svelte generated by Svelte v3.23.2 */

const css$1 = {
	code: ".num.svelte-m0bqhn{padding-right:100px}div.svelte-m0bqhn{color:black}.active.svelte-m0bqhn{display:block}",
	map: "{\"version\":3,\"file\":\"q0.svelte\",\"sources\":[\"q0.svelte\"],\"sourcesContent\":[\"<script>\\n\\n     const quizSteps =  [\\n        { id: 'q1', name: 'Webcam Challenge', time: '2mins', description:\\\"If your computer has a built-in camera, also known as a webcam, you should know that it can be used to spy on you. And no, this is not just science fiction as a recent survey conducted by HP shows that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked. In this challenge, we are going to walk you through the best practice to avoid this risk.\\\"},\\n        { id: 'q2', name: 'Browser Choice', time: '3mins'},\\n        { id: 'q3', name: 'Privacy Setting', time: '4mins'},\\n        { id: 'q4', name: 'Https everywhere', time: '4mins'},\\n        { id: 'q5', name: 'Location Services (phone needed)', time: '3mins'},\\n        { id: 'q6', name: 'Tracker blocker', time: '3mins'},\\n        { id: 'q7', name: 'location Tracking', time: '1mins'},\\n        { id: 'q8', name: 'Mobile keyboard', time: '5mins'},\\n        { id: 'q9', name: 'Messenger platform', time: '2mins'},\\n        { id: 'q10', name: 'iot', time: '2mins'}\\n     ]\\n    let active = true;\\n     function handleMouseShow(){\\n        active = false;\\n\\n     }\\n</script>\\n<svelte:head>\\n\\t<title>Quiz Overview</title>\\n</svelte:head>\\n<h2>This test contains 10 unique privacy tests that will take you about 30 minutes to complete. Throught the test, we will provide...</h2>\\n<div>\\n    {#each quizSteps as {id, name, time, description}, i}\\n    <div class='num'>{i}{name} ({time})</div><div class:active={active}>{description}</div>\\n    {/each}\\n</div>\\n\\n<style>\\n    .num {\\n        padding-right: 100px;\\n     \\n    }\\n    div {\\n        color:black;\\n    }\\n    .active {\\n        display: block;\\n    }\\n    \\n</style>\"],\"names\":[],\"mappings\":\"AA+BI,IAAI,cAAC,CAAC,AACF,aAAa,CAAE,KAAK,AAExB,CAAC,AACD,GAAG,cAAC,CAAC,AACD,MAAM,KAAK,AACf,CAAC,AACD,OAAO,cAAC,CAAC,AACL,OAAO,CAAE,KAAK,AAClB,CAAC\"}"
};

const Q0 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	const quizSteps = [
		{
			id: "q1",
			name: "Webcam Challenge",
			time: "2mins",
			description: "If your computer has a built-in camera, also known as a webcam, you should know that it can be used to spy on you. And no, this is not just science fiction as a recent survey conducted by HP shows that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked. In this challenge, we are going to walk you through the best practice to avoid this risk."
		},
		{
			id: "q2",
			name: "Browser Choice",
			time: "3mins"
		},
		{
			id: "q3",
			name: "Privacy Setting",
			time: "4mins"
		},
		{
			id: "q4",
			name: "Https everywhere",
			time: "4mins"
		},
		{
			id: "q5",
			name: "Location Services (phone needed)",
			time: "3mins"
		},
		{
			id: "q6",
			name: "Tracker blocker",
			time: "3mins"
		},
		{
			id: "q7",
			name: "location Tracking",
			time: "1mins"
		},
		{
			id: "q8",
			name: "Mobile keyboard",
			time: "5mins"
		},
		{
			id: "q9",
			name: "Messenger platform",
			time: "2mins"
		},
		{ id: "q10", name: "iot", time: "2mins" }
	];

	$$result.css.add(css$1);

	return `${($$result.head += `${($$result.title = `<title>Quiz Overview</title>`, "")}`, "")}
<h2>This test contains 10 unique privacy tests that will take you about 30 minutes to complete. Throught the test, we will provide...</h2>
<div class="${"svelte-m0bqhn"}">${each(quizSteps, ({ id, name, time, description }, i) => `<div class="${"num svelte-m0bqhn"}">${escape(i)}${escape(name)} (${escape(time)})</div><div class="${["svelte-m0bqhn",  "active" ].join(" ").trim()}">${escape(description)}</div>`)}
</div>`;
});

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

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

const css$2 = {
	code: "aside.svelte-50f2g{position:fixed;top:55px;right:0;width:25%;height:100%;background-color:#e4e4e4;border:2px solid #c7c7c7}section.svelte-50f2g{padding:10px 10px 20px 10px}#timer.svelte-50f2g{display:flex;flex-direction:column;border-bottom:1px solid #c7c7c7;margin-left:15px}#remaining.svelte-50f2g{font-size:20px;padding:5px 0px 20px 0px;margin-left:15px}#minutes.svelte-50f2g{color:white;background:#0F2033;border-radius:6px;width:30%;text-align:center;padding:5px 10px;margin-left:15px}.btn-dark.svelte-50f2g{color:white;background:#0F2033;border-radius:6px;width:30%;text-align:center;padding:5px 10px}button.svelte-50f2g{border:none;padding:5px 10px}#next-skip.svelte-50f2g{margin:5px 10px;padding:5px 0px 20px 0px}",
	map: "{\"version\":3,\"file\":\"Progress.svelte\",\"sources\":[\"Progress.svelte\"],\"sourcesContent\":[\"<script>\\nlet completed;\\n//pass to events to quiz components\\nimport { createEventDispatcher } from 'svelte';\\n\\tconst dispatch = createEventDispatcher();\\n    $: num = 0;\\n\\tfunction sayHello() {\\n        num++;\\n\\t\\tdispatch('message', {\\n\\t\\t\\tnumber: num\\n\\t\\t});\\n\\t}\\n\\n\\n\\n\\n//total time for countdown\\nimport { tweened } from 'svelte/motion';\\nlet start= 30 * 60;\\nlet timer = tweened(start);\\n  setInterval(() => {\\n    if ($timer > 0) $timer--;\\n  }, 1000);\\n\\n  $: minutes = Math.floor($timer / 60);\\n  $: minname = minutes > 1 ? \\\"mins\\\" : \\\"min\\\";\\n  $: seconds = Math.floor($timer - minutes * 60)\\n\\n</script>\\n<style>\\n    aside {\\n        position: fixed;\\n        top:55px;\\n        right:0;\\n        width: 25%;\\n        height: 100%;\\n        background-color: #e4e4e4;\\n        border: 2px solid #c7c7c7;\\n    }\\n    section {\\n        padding: 10px 10px 20px 10px;\\n    }\\n    #timer {\\n        display: flex;\\n        flex-direction: column; \\n        border-bottom: 1px solid #c7c7c7;\\n        margin-left: 15px;\\n    }\\n    #remaining {\\n        font-size: 20px;\\n        padding: 5px 0px 20px 0px;\\n        margin-left: 15px;\\n\\n    }\\n    #minutes {\\n        color:white;\\n        background: #0F2033;\\n        border-radius: 6px;\\n        width: 30%;\\n        text-align: center;\\n        padding: 5px 10px;\\n        margin-left: 15px;\\n\\n    }\\n    .btn-dark {\\n        color:white;\\n        background: #0F2033;\\n        border-radius: 6px;\\n        width: 30%;\\n        text-align: center;\\n        padding: 5px 10px;\\n    }\\n    button {\\n        border: none;\\n        padding: 5px 10px;\\n    }\\n    #next-skip {\\n        margin: 5px 10px;\\n        padding: 5px 0px 20px 0px;\\n    }\\n    \\n</style>\\n<aside id='sidebar'>\\n    <section id=\\\"timer\\\">\\n        <span id='remaining'>Time remaining:</span> \\n        <span id='minutes'>{minutes}:{seconds}</span>\\n    </section>\\n    <section id=\\\"progress\\\">\\n        <slot>\\n\\n        </slot>\\n    </section>\\n    <section id='next-skip'> \\n        <button on:click={sayHello} class='btn-dark'>Next</button>\\n        <button  class='btn-dark'>Skip</button>\\n        <!--<button on:click={handleClickMinus}>Skip</button>-->\\n    </section>\\n</aside>\"],\"names\":[],\"mappings\":\"AA8BI,KAAK,aAAC,CAAC,AACH,QAAQ,CAAE,KAAK,CACf,IAAI,IAAI,CACR,MAAM,CAAC,CACP,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,AAC7B,CAAC,AACD,OAAO,aAAC,CAAC,AACL,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,AAChC,CAAC,AACD,MAAM,aAAC,CAAC,AACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAChC,WAAW,CAAE,IAAI,AACrB,CAAC,AACD,UAAU,aAAC,CAAC,AACR,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CACzB,WAAW,CAAE,IAAI,AAErB,CAAC,AACD,QAAQ,aAAC,CAAC,AACN,MAAM,KAAK,CACX,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,WAAW,CAAE,IAAI,AAErB,CAAC,AACD,SAAS,aAAC,CAAC,AACP,MAAM,KAAK,CACX,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,GAAG,CAAC,IAAI,AACrB,CAAC,AACD,MAAM,aAAC,CAAC,AACJ,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CAAC,IAAI,AACrB,CAAC,AACD,UAAU,aAAC,CAAC,AACR,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,OAAO,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,AAC7B,CAAC\"}"
};

const Progress = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $timer;
	const dispatch = createEventDispatcher();

	let start = 30 * 60;
	let timer = tweened(start);
	validate_store(timer, "timer");
	$timer = get_store_value(timer);

	setInterval(
		() => {
			if ($timer > 0) $timer--;
		},
		1000
	);

	$$result.css.add(css$2);
	validate_store(timer, "timer");
	$timer = get_store_value(timer);
	let minutes = Math.floor($timer / 60);
	let seconds = Math.floor($timer - minutes * 60);

	return `<aside id="${"sidebar"}" class="${"svelte-50f2g"}"><section id="${"timer"}" class="${"svelte-50f2g"}"><span id="${"remaining"}" class="${"svelte-50f2g"}">Time remaining:</span> 
        <span id="${"minutes"}" class="${"svelte-50f2g"}">${escape(minutes)}:${escape(seconds)}</span></section>
    <section id="${"progress"}" class="${"svelte-50f2g"}">${$$slots.default
	? $$slots.default({})
	: `

        `}</section>
    <section id="${"next-skip"}" class="${"svelte-50f2g"}"><button class="${"btn-dark svelte-50f2g"}">Next</button>
        <button class="${"btn-dark svelte-50f2g"}">Skip</button>
        </section></aside>`;
});

/* src/routes/quiz/q1.svelte generated by Svelte v3.23.2 */

const css$3 = {
	code: ".quiz-holder.svelte-1u03q0h{width:70%;padding:20px 40px}.incomplete.svelte-1u03q0h{color:#a0a0a0}",
	map: "{\"version\":3,\"file\":\"q1.svelte\",\"sources\":[\"q1.svelte\"],\"sourcesContent\":[\"<script>\\nimport Progress from './Progress.svelte'\\n\\tlet q1Steps = [\\n\\t{ stepNum: '1', \\n\\th2: 'Webcam Challenge', \\n\\tname: 'Introduction', \\n\\tclass: 'complete',\\n\\tcopy: 'If your computer has a built-in camera, also known as a webcam, you should know that it can be used to spy on you. And no, this is not just science fiction as a recent survey conducted by HP shows that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.'},\\n\\t{ stepNum: '2', \\n\\th2: 'Cover Your Webcam', \\n\\tname: 'Permissions', \\n\\tclass: 'incomplete',\\n\\tcopy: 'Please have your webcam covered and proceed to next step. We will access to your webcam to make sure you covered the webcam properly. Click “Test” button to proceed challenge.'},\\n\\t{ stepNum: '3', \\n\\th2: 'Great! It’s properly covered.', \\n\\tname: 'Cover your webcam', \\n\\tclass: 'incomplete',\\n\\tcopy: 'Please remember to leave your webcam covered while its not being used. This can prevent...'}\\n\\t]\\n\\tlet q = 0;\\n\\tfunction handleMessage(event) {\\n\\t\\t\\t\\tq = event.detail.number;\\n\\t\\t\\t\\tq1Steps[q].class = 'complete';\\n\\t\\t}\\n\\t\\t\\n\\t$: headline = q1Steps[q].h2;\\n\\t$: body = q1Steps[q].copy;\\n</script>\\n<svelte:head>\\n\\t<title>Webcam Challenge</title>\\n</svelte:head>\\n<div class='quiz-holder'>\\n<h2>{headline}</h2> \\n<p>{body}</p> \\n</div>\\n\\t<Progress on:message={handleMessage}>\\n\\t\\t<ul>\\n\\t\\t{#each q1Steps as step }\\n\\t\\t\\t<li class={step.class} >{step.name}</li>\\n\\t\\t{/each}\\n\\t\\t</ul>\\n\\t</Progress>\\n<style>\\n   .quiz-holder {\\n\\t   width: 70%;\\n       padding: 20px 40px;\\n   }\\n   .incomplete {\\n        color: #a0a0a0;\\n    }\\n</style>\"],\"names\":[],\"mappings\":\"AA2CG,YAAY,eAAC,CAAC,AACb,KAAK,CAAE,GAAG,CACP,OAAO,CAAE,IAAI,CAAC,IAAI,AACtB,CAAC,AACD,WAAW,eAAC,CAAC,AACR,KAAK,CAAE,OAAO,AAClB,CAAC\"}"
};

const Q1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let q1Steps = [
		{
			stepNum: "1",
			h2: "Webcam Challenge",
			name: "Introduction",
			class: "complete",
			copy: "If your computer has a built-in camera, also known as a webcam, you should know that it can be used to spy on you. And no, this is not just science fiction as a recent survey conducted by HP shows that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked."
		},
		{
			stepNum: "2",
			h2: "Cover Your Webcam",
			name: "Permissions",
			class: "incomplete",
			copy: "Please have your webcam covered and proceed to next step. We will access to your webcam to make sure you covered the webcam properly. Click “Test” button to proceed challenge."
		},
		{
			stepNum: "3",
			h2: "Great! It’s properly covered.",
			name: "Cover your webcam",
			class: "incomplete",
			copy: "Please remember to leave your webcam covered while its not being used. This can prevent..."
		}
	];

	let q = 0;

	$$result.css.add(css$3);
	let headline = q1Steps[q].h2;
	let body = q1Steps[q].copy;

	return `${($$result.head += `${($$result.title = `<title>Webcam Challenge</title>`, "")}`, "")}
<div class="${"quiz-holder svelte-1u03q0h"}"><h2>${escape(headline)}</h2> 
<p>${escape(body)}</p></div>
	${validate_component(Progress, "Progress").$$render($$result, {}, {}, {
		default: () => `<ul>${each(q1Steps, step => `<li class="${escape(null_to_empty(step.class)) + " svelte-1u03q0h"}">${escape(step.name)}</li>`)}</ul>
	`
	})}`;
});

/* src/routes/quiz/q2.svelte generated by Svelte v3.23.2 */

const Q2 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `${($$result.title = `<title>Search engine/Browser</title>`, "")}`, "")}
<h2>Search engine/Browser</h2> 
<p>Did you know everything time you look up something using search engine, you are giving your information to thousands of 3rd party advertisers? Vast amount of your data has been taken from you without a single consent only to manipulate your purchase habit and long-term behavior. In this exercise, we will walk through with you how to avoid....</p>`;
});

/* src/routes/quiz/q3.svelte generated by Svelte v3.23.2 */

const Q3 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `${($$result.title = `<title>Http Everywhere</title>`, "")}`, "")}
<h2>Http Everywhere</h2> 
<p>Many websites offer encryption. With HTTPS, people running the network between your device and the server hosting the website you’re browsing can’t see your requests and your internet traffic. But some websites still load unencrypted pages by default (HTTP), which also causes a security risk. The EFF has developed a browser extension that makes sure that you access all websites that offer HTTPS using… HTTPS.</p>`;
});

/* src/routes/quiz/q4.svelte generated by Svelte v3.23.2 */

const Q4 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `${($$result.title = `<title>Quiz number</title>`, "")}`, "")}
<h2>totally differnt content oh yea</h2>`;
});

/* src/routes/quiz/q5.svelte generated by Svelte v3.23.2 */

const Q5 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `${($$result.title = `<title>Quiz number</title>`, "")}`, "")}
<h2>totally differnt content oh yea</h2>`;
});

/* src/routes/quiz/q6.svelte generated by Svelte v3.23.2 */

const Q6 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `${($$result.title = `<title>Quiz number</title>`, "")}`, "")}
<h2>totally differnt content oh yea</h2>`;
});

/* src/routes/quiz/q7.svelte generated by Svelte v3.23.2 */

const Q7 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `${($$result.title = `<title>Quiz number</title>`, "")}`, "")}
<h2>totally differnt content oh yea</h2>`;
});

/* src/routes/quiz/q8.svelte generated by Svelte v3.23.2 */

const Q8 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `${($$result.title = `<title>Quiz number</title>`, "")}`, "")}
<h2>totally differnt content oh yea</h2>`;
});

/* src/routes/quiz/q9.svelte generated by Svelte v3.23.2 */

const Q9 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `${($$result.title = `<title>Quiz number</title>`, "")}`, "")}
<h2>totally differnt content oh yea</h2>`;
});

/* src/routes/quizmain.svelte generated by Svelte v3.23.2 */

const Quizmain = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {

	return `${($$result.head += `${($$result.title = `<title>Test your knowledge</title>`, "")}`, "")}
<div>
       ${validate_component(Q1, "Quiz2").$$render($$result, {}, {}, {})}




</div>`;
});

/* src/routes/about.svelte generated by Svelte v3.23.2 */

const About = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `${($$result.title = `<title>About</title>`, "")}`, "")}

<h1>About this site</h1>

<p>This is the &#39;about&#39; page. There&#39;s not much here.</p>`;
});

/* src/routes/blog/index.svelte generated by Svelte v3.23.2 */

const css$4 = {
	code: "ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport function preload({ params, query }) {\\n\\t\\treturn this.fetch(`blog.json`).then(r => r.json()).then(posts => {\\n\\t\\t\\treturn { posts };\\n\\t\\t});\\n\\t}\\n</script>\\n\\n<script>\\n\\texport let posts;\\n</script>\\n\\n<style>\\n\\tul {\\n\\t\\tmargin: 0 0 1em 0;\\n\\t\\tline-height: 1.5;\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>Blog</title>\\n</svelte:head>\\n\\n<h1>Recent posts</h1>\\n\\n<ul>\\n\\t{#each posts as post}\\n\\t\\t<!-- we're using the non-standard `rel=prefetch` attribute to\\n\\t\\t\\t\\ttell Sapper to load the data for the page as soon as\\n\\t\\t\\t\\tthe user hovers over the link or taps it, instead of\\n\\t\\t\\t\\twaiting for the 'click' event -->\\n\\t\\t<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>\\n\\t{/each}\\n</ul>\"],\"names\":[],\"mappings\":\"AAaC,EAAE,eAAC,CAAC,AACH,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACjB,WAAW,CAAE,GAAG,AACjB,CAAC\"}"
};

function preload({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

const Blog = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { posts } = $$props;
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	$$result.css.add(css$4);

	return `${($$result.head += `${($$result.title = `<title>Blog</title>`, "")}`, "")}

<h1>Recent posts</h1>

<ul class="${"svelte-1frg2tf"}">${each(posts, post => `
		<li><a rel="${"prefetch"}" href="${"blog/" + escape(post.slug)}">${escape(post.title)}</a></li>`)}</ul>`;
});

/* src/routes/blog/[slug].svelte generated by Svelte v3.23.2 */

const css$5 = {
	code: ".content.svelte-gnxal1 h2{font-size:1.4em;font-weight:500}.content.svelte-gnxal1 pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0,0,0,0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-gnxal1 pre code{background-color:transparent;padding:0}.content.svelte-gnxal1 ul{line-height:1.5}.content.svelte-gnxal1 li{margin:0 0 0.5em 0}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport async function preload({ params, query }) {\\n\\t\\t// the `slug` parameter is available because\\n\\t\\t// this file is called [slug].svelte\\n\\t\\tconst res = await this.fetch(`blog/${params.slug}.json`);\\n\\t\\tconst data = await res.json();\\n\\n\\t\\tif (res.status === 200) {\\n\\t\\t\\treturn { post: data };\\n\\t\\t} else {\\n\\t\\t\\tthis.error(res.status, data.message);\\n\\t\\t}\\n\\t}\\n</script>\\n\\n<script>\\n\\texport let post;\\n</script>\\n\\n<style>\\n\\t/*\\n\\t\\tBy default, CSS is locally scoped to the component,\\n\\t\\tand any unused styles are dead-code-eliminated.\\n\\t\\tIn this page, Svelte can't know which elements are\\n\\t\\tgoing to appear inside the {{{post.html}}} block,\\n\\t\\tso we have to use the :global(...) modifier to target\\n\\t\\tall elements inside .content\\n\\t*/\\n\\t.content :global(h2) {\\n\\t\\tfont-size: 1.4em;\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\n\\t.content :global(pre) {\\n\\t\\tbackground-color: #f9f9f9;\\n\\t\\tbox-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);\\n\\t\\tpadding: 0.5em;\\n\\t\\tborder-radius: 2px;\\n\\t\\toverflow-x: auto;\\n\\t}\\n\\n\\t.content :global(pre) :global(code) {\\n\\t\\tbackground-color: transparent;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t.content :global(ul) {\\n\\t\\tline-height: 1.5;\\n\\t}\\n\\n\\t.content :global(li) {\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{post.title}</title>\\n</svelte:head>\\n\\n<h1>{post.title}</h1>\\n\\n<div class='content'>\\n\\t{@html post.html}\\n</div>\\n\"],\"names\":[],\"mappings\":\"AA4BC,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAE,CAAC,AACtB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9C,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAC,CAAC,AAAQ,IAAI,AAAE,CAAC,AACpC,gBAAgB,CAAE,WAAW,CAC7B,OAAO,CAAE,CAAC,AACX,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC\"}"
};

async function preload$1({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const res = await this.fetch(`blog/${params.slug}.json`);

	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { post } = $$props;
	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
	$$result.css.add(css$5);

	return `${($$result.head += `${($$result.title = `<title>${escape(post.title)}</title>`, "")}`, "")}

<h1>${escape(post.title)}</h1>

<div class="${"content svelte-gnxal1"}">${post.html}</div>`;
});

/* src/routes/quiz.svelte generated by Svelte v3.23.2 */

const css$6 = {
	code: "a.svelte-earzo7{text-decoration:none}#agree.svelte-earzo7{float:right}",
	map: "{\"version\":3,\"file\":\"quiz.svelte\",\"sources\":[\"quiz.svelte\"],\"sourcesContent\":[\"\\n<svelte:head>\\n\\t<title>Data privacy quiz</title>\\n</svelte:head>\\n<h1>Welcome to Mind Your Data Quiz</h1>\\n<p>\\nOnly for educational purpose, this test will utilize blah blah blah. \\nThere will be no personal data collected or shared... \\nThis test will only  blah blah blah and utilize blah blah blah. \\n<h2>this should get converted into a modal</h2>\\n<button>\\n    <a rel=prefetch href='.'>cancel</a>\\n    </button>\\n<button id=\\\"agree\\\"><a rel=prefetch href='quizmain' >Agree</a></button>\\n<style>\\n    a {\\n        text-decoration: none;\\n    }\\n    #agree{\\n        float: right;\\n    }\\n</style>\"],\"names\":[],\"mappings\":\"AAeI,CAAC,cAAC,CAAC,AACC,eAAe,CAAE,IAAI,AACzB,CAAC,AACD,oBAAM,CAAC,AACH,KAAK,CAAE,KAAK,AAChB,CAAC\"}"
};

const Quiz = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$6);

	return `${($$result.head += `${($$result.title = `<title>Data privacy quiz</title>`, "")}`, "")}
<h1>Welcome to Mind Your Data Quiz</h1>
<p>Only for educational purpose, this test will utilize blah blah blah. 
There will be no personal data collected or shared... 
This test will only  blah blah blah and utilize blah blah blah. 
</p><h2>this should get converted into a modal</h2>
<button><a rel="${"prefetch"}" href="${"."}" class="${"svelte-earzo7"}">cancel</a></button>
<button id="${"agree"}" class="${"svelte-earzo7"}"><a rel="${"prefetch"}" href="${"quizmain"}" class="${"svelte-earzo7"}">Agree</a></button>`;
});

/* src/components/Nav.svelte generated by Svelte v3.23.2 */

const css$7 = {
	code: "nav.svelte-lsy7z7{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:center;background-color:#3e4b59;font-weight:300;padding:0 1em}ul.svelte-lsy7z7{display:flex;list-style:none;justify-content:flex-end;margin:0;padding:0;color:#c7c7c7}img.svelte-lsy7z7{display:flex;justify-content:flex-start;height:40px}li.svelte-lsy7z7{display:flex;margin:0px 20px 0px 20px;text-transform:uppercase}[aria-current].svelte-lsy7z7{position:relative;display:inline-block}[aria-current].svelte-lsy7z7::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:#e74e45;display:block}a.svelte-lsy7z7{display:flex;padding:1em 0.5em;text-decoration:none;margin:2em, 0em}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let segment;\\n</script>\\n\\n<style>\\n\\tnav {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-flow: row wrap;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\tbackground-color: #3e4b59;\\n\\t\\t/*border-bottom: 1px solid rgba(255,62,0,0.1);*/\\n\\t\\tfont-weight: 300;\\n\\t\\tpadding: 0 1em;\\n\\t}\\n\\tul {\\n\\t\\tdisplay: flex;\\n\\t\\tlist-style: none;\\n\\t\\tjustify-content: flex-end;\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t\\tcolor: #c7c7c7;\\n\\t}\\n\\timg {\\n\\t\\t/*display: block;\\n\\t\\tfloat: left;*/\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: flex-start;\\n\\t\\theight: 40px;\\n\\t}\\n\\tli{\\n\\t\\tdisplay: flex;\\n\\t\\tmargin: 0px 20px 0px 20px;\\n\\t\\ttext-transform: uppercase;\\n\\t}\\n\\n\\t[aria-current] {\\n\\t\\tposition: relative;\\n\\t\\tdisplay: inline-block;\\n\\t}\\n\\n\\t[aria-current]::after {\\n\\t\\tposition: absolute;\\n\\t\\tcontent: '';\\n\\t\\twidth: calc(100% - 1em);\\n\\t\\theight: 2px;\\n\\t\\tbackground-color:#e74e45;\\n\\t\\tdisplay: block;\\n\\t\\t/*bottom: -1px;*/\\n\\t}\\n\\ta {\\n\\t\\tdisplay: flex;\\n\\t\\tpadding: 1em 0.5em;\\n\\t\\ttext-decoration: none;\\n\\t\\tmargin: 2em, 0em;\\n\\n\\t}\\n</style>\\n\\n<nav>\\n\\t<img  src='./MYDlogo_small.png' alt=\\\"Mind your Data logo\\\">\\n\\t<ul id=\\\"navigation\\\">\\n\\t\\t<li><a aria-current=\\\"{segment === undefined ? 'page' : undefined}\\\" href=\\\".\\\">home</a></li>\\n\\t\\t<li><a aria-current=\\\"{segment === 'quiz' ? 'page' : undefined}\\\" href=\\\"quiz\\\">quiz</a></li>\\n\\t\\t<li><a aria-current=\\\"{segment === 'about' ? 'page' : undefined}\\\" href=\\\"about\\\">about</a></li>\\n\\t\\t<li><a aria-current=\\\"{segment === 'resources' ? 'page' : undefined}\\\" href=\\\"resources\\\">resources</a></li>\\n\\n\\t\\t<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches\\n\\t\\t     the blog data when we hover over the link or tap it on a touchscreen -->\\n\\t<!--\\t<li><a rel=prefetch aria-current=\\\"{segment === 'blog' ? 'page' : undefined}\\\" href=\\\"blog\\\">blog</a></li> -->\\n\\t</ul>\\n</nav>\\n\"],\"names\":[],\"mappings\":\"AAKC,GAAG,cAAC,CAAC,AACJ,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,GAAG,CAAC,IAAI,CACnB,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,gBAAgB,CAAE,OAAO,CAEzB,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,CAAC,CAAC,GAAG,AACf,CAAC,AACD,EAAE,cAAC,CAAC,AACH,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,QAAQ,CACzB,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,OAAO,AACf,CAAC,AACD,GAAG,cAAC,CAAC,AAGJ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,UAAU,CAC3B,MAAM,CAAE,IAAI,AACb,CAAC,AACD,gBAAE,CAAC,AACF,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,IAAI,CACzB,cAAc,CAAE,SAAS,AAC1B,CAAC,AAED,CAAC,YAAY,CAAC,cAAC,CAAC,AACf,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,AACtB,CAAC,AAED,CAAC,YAAY,eAAC,OAAO,AAAC,CAAC,AACtB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,iBAAiB,OAAO,CACxB,OAAO,CAAE,KAAK,AAEf,CAAC,AACD,CAAC,cAAC,CAAC,AACF,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,eAAe,CAAE,IAAI,CACrB,MAAM,CAAE,GAAG,CAAC,CAAC,GAAG,AAEjB,CAAC\"}"
};

const Nav = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$7);

	return `<nav class="${"svelte-lsy7z7"}"><img src="${"./MYDlogo_small.png"}" alt="${"Mind your Data logo"}" class="${"svelte-lsy7z7"}">
	<ul id="${"navigation"}" class="${"svelte-lsy7z7"}"><li class="${"svelte-lsy7z7"}"><a${add_attribute("aria-current", segment === undefined ? "page" : undefined, 0)} href="${"."}" class="${"svelte-lsy7z7"}">home</a></li>
		<li class="${"svelte-lsy7z7"}"><a${add_attribute("aria-current", segment === "quiz" ? "page" : undefined, 0)} href="${"quiz"}" class="${"svelte-lsy7z7"}">quiz</a></li>
		<li class="${"svelte-lsy7z7"}"><a${add_attribute("aria-current", segment === "about" ? "page" : undefined, 0)} href="${"about"}" class="${"svelte-lsy7z7"}">about</a></li>
		<li class="${"svelte-lsy7z7"}"><a${add_attribute("aria-current", segment === "resources" ? "page" : undefined, 0)} href="${"resources"}" class="${"svelte-lsy7z7"}">resources</a></li>

		
	</ul></nav>`;
});

/* src/routes/_layout.svelte generated by Svelte v3.23.2 */

const css$8 = {
	code: "main.svelte-o5lmjh{position:relative;background-color:white;box-sizing:border-box}",
	map: "{\"version\":3,\"file\":\"_layout.svelte\",\"sources\":[\"_layout.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport Nav from '../components/Nav.svelte';\\n\\texport let segment;\\n</script>\\n\\n<style>\\n\\tmain {\\n\\t\\tposition: relative;\\n\\t\\tbackground-color: white;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n</style>\\n\\n<Nav {segment}/>\\n\\n<main>\\n\\t<slot></slot>\\n</main>\\n<!--<Progress />-->\"],\"names\":[],\"mappings\":\"AAMC,IAAI,cAAC,CAAC,AACL,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,KAAK,CACvB,UAAU,CAAE,UAAU,AACvB,CAAC\"}"
};

const Layout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$8);

	return `${validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})}

<main class="${"svelte-o5lmjh"}">${$$slots.default ? $$slots.default({}) : ``}</main>
`;
});

/* src/routes/_error.svelte generated by Svelte v3.23.2 */

const css$9 = {
	code: "h1.svelte-8od9u6,p.svelte-8od9u6{margin:0 auto}h1.svelte-8od9u6{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8od9u6{margin:1em auto}@media(min-width: 480px){h1.svelte-8od9u6{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let status;\\n\\texport let error;\\n\\n\\tconst dev = \\\"development\\\" === 'development';\\n</script>\\n\\n<style>\\n\\th1, p {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<p>{error.message}</p>\\n\\n{#if dev && error.stack}\\n\\t<pre>{error.stack}</pre>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAQC,gBAAE,CAAE,CAAC,cAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,cAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css$9);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}

<h1 class="${"svelte-8od9u6"}">${escape(status)}</h1>

<p class="${"svelte-8od9u6"}">${escape(error.message)}</p>

${ error.stack
	? `<pre>${escape(error.stack)}</pre>`
	: ``}`;
});

// This file is generated by Sapper — do not edit it!

const d = decodeURIComponent;

const manifest = {
	server_routes: [
		{
			// blog/index.json.js
			pattern: /^\/blog\.json$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// blog/[slug].json.js
			pattern: /^\/blog\/([^\/]+?)\.json$/,
			handlers: route_1,
			params: match => ({ slug: d(match[1]) })
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: Routes }
			]
		},

		{
			// resources.svelte
			pattern: /^\/resources\/?$/,
			parts: [
				{ name: "resources", file: "resources.svelte", component: Resources }
			]
		},

		{
			// quizmain.svelte
			pattern: /^\/quizmain\/?$/,
			parts: [
				{ name: "quizmain", file: "quizmain.svelte", component: Quizmain }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: About }
			]
		},

		{
			// blog/index.svelte
			pattern: /^\/blog\/?$/,
			parts: [
				{ name: "blog", file: "blog/index.svelte", component: Blog, preload: preload }
			]
		},

		{
			// blog/[slug].svelte
			pattern: /^\/blog\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "blog_$slug", file: "blog/[slug].svelte", component: U5Bslugu5D, preload: preload$1, params: match => ({ slug: d(match[1]) }) }
			]
		},

		{
			// quiz/Progress.svelte
			pattern: /^\/quiz\/Progress\/?$/,
			parts: [
				null,
				{ name: "quiz_Progress", file: "quiz/Progress.svelte", component: Progress }
			]
		},

		{
			// quiz/q0.svelte
			pattern: /^\/quiz\/q0\/?$/,
			parts: [
				null,
				{ name: "quiz_q0", file: "quiz/q0.svelte", component: Q0 }
			]
		},

		{
			// quiz/q1.svelte
			pattern: /^\/quiz\/q1\/?$/,
			parts: [
				null,
				{ name: "quiz_q1", file: "quiz/q1.svelte", component: Q1 }
			]
		},

		{
			// quiz/q2.svelte
			pattern: /^\/quiz\/q2\/?$/,
			parts: [
				null,
				{ name: "quiz_q2", file: "quiz/q2.svelte", component: Q2 }
			]
		},

		{
			// quiz/q3.svelte
			pattern: /^\/quiz\/q3\/?$/,
			parts: [
				null,
				{ name: "quiz_q3", file: "quiz/q3.svelte", component: Q3 }
			]
		},

		{
			// quiz/q4.svelte
			pattern: /^\/quiz\/q4\/?$/,
			parts: [
				null,
				{ name: "quiz_q4", file: "quiz/q4.svelte", component: Q4 }
			]
		},

		{
			// quiz/q5.svelte
			pattern: /^\/quiz\/q5\/?$/,
			parts: [
				null,
				{ name: "quiz_q5", file: "quiz/q5.svelte", component: Q5 }
			]
		},

		{
			// quiz/q6.svelte
			pattern: /^\/quiz\/q6\/?$/,
			parts: [
				null,
				{ name: "quiz_q6", file: "quiz/q6.svelte", component: Q6 }
			]
		},

		{
			// quiz/q7.svelte
			pattern: /^\/quiz\/q7\/?$/,
			parts: [
				null,
				{ name: "quiz_q7", file: "quiz/q7.svelte", component: Q7 }
			]
		},

		{
			// quiz/q8.svelte
			pattern: /^\/quiz\/q8\/?$/,
			parts: [
				null,
				{ name: "quiz_q8", file: "quiz/q8.svelte", component: Q8 }
			]
		},

		{
			// quiz/q9.svelte
			pattern: /^\/quiz\/q9\/?$/,
			parts: [
				null,
				{ name: "quiz_q9", file: "quiz/q9.svelte", component: Q9 }
			]
		},

		{
			// quiz.svelte
			pattern: /^\/quiz\/?$/,
			parts: [
				{ name: "quiz", file: "quiz.svelte", component: Quiz }
			]
		}
	],

	root: Layout,
	root_preload: () => {},
	error: Error$1
};

const build_dir = "__sapper__/dev";

const src_dir = "src";

const CONTEXT_KEY = {};

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.23.2 */

const App = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/bdoc":["bdoc"],"application/ccxml+xml":["ccxml"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-diff+xml":["xdf"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

function get_server_route_handler(routes) {
	async function handle_route(route, req, res, next) {
		req.params = route.params(route.pattern.exec(req.path));

		const method = req.method.toLowerCase();
		// 'delete' cannot be exported from a module because it is a keyword,
		// so check for 'del' instead
		const method_export = method === 'delete' ? 'del' : method;
		const handle_method = route.handlers[method_export];
		if (handle_method) {
			if (process.env.SAPPER_EXPORT) {
				const { write, end, setHeader } = res;
				const chunks = [];
				const headers = {};

				// intercept data so that it can be exported
				res.write = function(chunk) {
					chunks.push(Buffer.from(chunk));
					write.apply(res, arguments);
				};

				res.setHeader = function(name, value) {
					headers[name.toLowerCase()] = value;
					setHeader.apply(res, arguments);
				};

				res.end = function(chunk) {
					if (chunk) chunks.push(Buffer.from(chunk));
					end.apply(res, arguments);

					process.send({
						__sapper__: true,
						event: 'file',
						url: req.url,
						method: req.method,
						status: res.statusCode,
						type: headers['content-type'],
						body: Buffer.concat(chunks).toString()
					});
				};
			}

			const handle_next = (err) => {
				if (err) {
					res.statusCode = 500;
					res.end(err.message);
				} else {
					process.nextTick(next);
				}
			};

			try {
				await handle_method(req, res, handle_next);
			} catch (err) {
				console.error(err);
				handle_next(err);
			}
		} else {
			// no matching handler for method
			process.nextTick(next);
		}
	}

	return function find_route(req, res, next) {
		for (const route of routes) {
			if (route.pattern.test(req.path)) {
				handle_route(route, req, res, next);
				return;
			}
		}

		next();
	};
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var cookie = {
	parse: parse_1,
	serialize: serialize_1
};

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return thing.toString();
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

function get_page_handler(
	manifest,
	session_getter
) {
	const get_build_info =  () => JSON.parse(fs.readFileSync(path.join(build_dir, 'build.json'), 'utf-8'))
		;

	const template =  () => read_template(src_dir)
		;

	const has_service_worker = fs.existsSync(path.join(build_dir, 'service-worker.js'));

	const { server_routes, pages } = manifest;
	const error_route = manifest.error;

	function bail(req, res, err) {
		console.error(err);

		const message =  escape_html(err.message) ;

		res.statusCode = 500;
		res.end(`<pre>${message}</pre>`);
	}

	function handle_error(req, res, statusCode, error) {
		handle_page({
			pattern: null,
			parts: [
				{ name: null, component: error_route }
			]
		}, req, res, statusCode, error || new Error('Unknown error in preload function'));
	}

	async function handle_page(page, req, res, status = 200, error = null) {
		const is_service_worker_index = req.path === '/service-worker-index.html';
		const build_info




 = get_build_info();

		res.setHeader('Content-Type', 'text/html');
		res.setHeader('Cache-Control',  'no-cache' );

		// preload main.js and current route
		// TODO detect other stuff we can preload? images, CSS, fonts?
		let preloaded_chunks = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
		if (!error && !is_service_worker_index) {
			page.parts.forEach(part => {
				if (!part) return;

				// using concat because it could be a string or an array. thanks webpack!
				preloaded_chunks = preloaded_chunks.concat(build_info.assets[part.name]);
			});
		}

		if (build_info.bundler === 'rollup') {
			// TODO add dependencies and CSS
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map(file => `<${req.baseUrl}/client/${file}>;rel="modulepreload"`)
				.join(', ');

			res.setHeader('Link', link);
		} else {
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map((file) => {
					const as = /\.css$/.test(file) ? 'style' : 'script';
					return `<${req.baseUrl}/client/${file}>;rel="preload";as="${as}"`;
				})
				.join(', ');

			res.setHeader('Link', link);
		}

		let session;
		try {
			session = await session_getter(req, res);
		} catch (err) {
			return bail(req, res, err);
		}

		let redirect;
		let preload_error;

		const preload_context = {
			redirect: (statusCode, location) => {
				if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
					throw new Error(`Conflicting redirects`);
				}
				location = location.replace(/^\//g, ''); // leading slash (only)
				redirect = { statusCode, location };
			},
			error: (statusCode, message) => {
				preload_error = { statusCode, message };
			},
			fetch: (url, opts) => {
				const parsed = new Url.URL(url, `http://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' :''}`);

				opts = Object.assign({}, opts);

				const include_credentials = (
					opts.credentials === 'include' ||
					opts.credentials !== 'omit' && parsed.origin === `http://127.0.0.1:${process.env.PORT}`
				);

				if (include_credentials) {
					opts.headers = Object.assign({}, opts.headers);

					const cookies = Object.assign(
						{},
						cookie.parse(req.headers.cookie || ''),
						cookie.parse(opts.headers.cookie || '')
					);

					const set_cookie = res.getHeader('Set-Cookie');
					(Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach(str => {
						const match = /([^=]+)=([^;]+)/.exec(str);
						if (match) cookies[match[1]] = match[2];
					});

					const str = Object.keys(cookies)
						.map(key => `${key}=${cookies[key]}`)
						.join('; ');

					opts.headers.cookie = str;

					if (!opts.headers.authorization && req.headers.authorization) {
						opts.headers.authorization = req.headers.authorization;
					}
				}

				return fetch(parsed.href, opts);
			}
		};

		let preloaded;
		let match;
		let params;

		try {
			const root_preloaded = manifest.root_preload
				? manifest.root_preload.call(preload_context, {
					host: req.headers.host,
					path: req.path,
					query: req.query,
					params: {}
				}, session)
				: {};

			match = error ? null : page.pattern.exec(req.path);


			let toPreload = [root_preloaded];
			if (!is_service_worker_index) {
				toPreload = toPreload.concat(page.parts.map(part => {
					if (!part) return null;

					// the deepest level is used below, to initialise the store
					params = part.params ? part.params(match) : {};

					return part.preload
						? part.preload.call(preload_context, {
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}, session)
						: {};
				}));
			}

			preloaded = await Promise.all(toPreload);
		} catch (err) {
			if (error) {
				return bail(req, res, err)
			}

			preload_error = { statusCode: 500, message: err };
			preloaded = []; // appease TypeScript
		}

		try {
			if (redirect) {
				const location = Url.resolve((req.baseUrl || '') + '/', redirect.location);

				res.statusCode = redirect.statusCode;
				res.setHeader('Location', location);
				res.end();

				return;
			}

			if (preload_error) {
				handle_error(req, res, preload_error.statusCode, preload_error.message);
				return;
			}

			const segments = req.path.split('/').filter(Boolean);

			// TODO make this less confusing
			const layout_segments = [segments[0]];
			let l = 1;

			page.parts.forEach((part, i) => {
				layout_segments[l] = segments[i + 1];
				if (!part) return null;
				l++;
			});

			const props = {
				stores: {
					page: {
						subscribe: writable({
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}).subscribe
					},
					preloading: {
						subscribe: writable(null).subscribe
					},
					session: writable(session)
				},
				segments: layout_segments,
				status: error ? status : 200,
				error: error ? error instanceof Error ? error : { message: error } : null,
				level0: {
					props: preloaded[0]
				},
				level1: {
					segment: segments[0],
					props: {}
				}
			};

			if (!is_service_worker_index) {
				let l = 1;
				for (let i = 0; i < page.parts.length; i += 1) {
					const part = page.parts[i];
					if (!part) continue;

					props[`level${l++}`] = {
						component: part.component,
						props: preloaded[i + 1] || {},
						segment: segments[i]
					};
				}
			}

			const { html, head, css } = App.render(props);

			const serialized = {
				preloaded: `[${preloaded.map(data => try_serialize(data)).join(',')}]`,
				session: session && try_serialize(session, err => {
					throw new Error(`Failed to serialize session data: ${err.message}`);
				}),
				error: error && serialize_error(props.error)
			};

			let script = `__SAPPER__={${[
				error && `error:${serialized.error},status:${status}`,
				`baseUrl:"${req.baseUrl}"`,
				serialized.preloaded && `preloaded:${serialized.preloaded}`,
				serialized.session && `session:${serialized.session}`
			].filter(Boolean).join(',')}};`;

			if (has_service_worker) {
				script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
			}

			const file = [].concat(build_info.assets.main).filter(file => file && /\.js$/.test(file))[0];
			const main = `${req.baseUrl}/client/${file}`;

			if (build_info.bundler === 'rollup') {
				if (build_info.legacy_assets) {
					const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
					script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
				} else {
					script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
				}
			} else {
				script += `</script><script src="${main}">`;
			}

			let styles;

			// TODO make this consistent across apps
			// TODO embed build_info in placeholder.ts
			if (build_info.css && build_info.css.main) {
				const css_chunks = new Set();
				if (build_info.css.main) css_chunks.add(build_info.css.main);
				page.parts.forEach(part => {
					if (!part) return;
					const css_chunks_for_part = build_info.css.chunks[part.file];

					if (css_chunks_for_part) {
						css_chunks_for_part.forEach(file => {
							css_chunks.add(file);
						});
					}
				});

				styles = Array.from(css_chunks)
					.map(href => `<link rel="stylesheet" href="client/${href}">`)
					.join('');
			} else {
				styles = (css && css.code ? `<style>${css.code}</style>` : '');
			}

			// users can set a CSP nonce using res.locals.nonce
			const nonce_attr = (res.locals && res.locals.nonce) ? ` nonce="${res.locals.nonce}"` : '';

			const body = template()
				.replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
				.replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
				.replace('%sapper.html%', () => html)
				.replace('%sapper.head%', () => `<noscript id='sapper-head-start'></noscript>${head}<noscript id='sapper-head-end'></noscript>`)
				.replace('%sapper.styles%', () => styles);

			res.statusCode = status;
			res.end(body);
		} catch(err) {
			if (error) {
				bail(req, res, err);
			} else {
				handle_error(req, res, 500, err);
			}
		}
	}

	return function find_route(req, res, next) {
		if (req.path === '/service-worker-index.html') {
			const homePage = pages.find(page => page.pattern.test('/'));
			handle_page(homePage, req, res);
			return;
		}

		for (const page of pages) {
			if (page.pattern.test(req.path)) {
				handle_page(page, req, res);
				return;
			}
		}

		handle_error(req, res, 404, 'Not found');
	};
}

function read_template(dir = build_dir) {
	return fs.readFileSync(`${dir}/template.html`, 'utf-8');
}

function try_serialize(data, fail) {
	try {
		return devalue(data);
	} catch (err) {
		if (fail) fail(err);
		return null;
	}
}

// Ensure we return something truthy so the client will not re-render the page over the error
function serialize_error(error) {
	if (!error) return null;
	let serialized = try_serialize(error);
	if (!serialized) {
		const { name, message, stack } = error ;
		serialized = try_serialize({ name, message, stack });
	}
	if (!serialized) {
		serialized = '{}';
	}
	return serialized;
}

function escape_html(html) {
	const chars = {
		'"' : 'quot',
		"'": '#39',
		'&': 'amp',
		'<' : 'lt',
		'>' : 'gt'
	};

	return html.replace(/["'&<>]/g, c => `&${chars[c]};`);
}

function middleware(opts


 = {}) {
	const { session, ignore } = opts;

	let emitted_basepath = false;

	return compose_handlers(ignore, [
		(req, res, next) => {
			if (req.baseUrl === undefined) {
				let { originalUrl } = req;
				if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
					originalUrl += '/';
				}

				req.baseUrl = originalUrl
					? originalUrl.slice(0, -req.url.length)
					: '';
			}

			if (!emitted_basepath && process.send) {
				process.send({
					__sapper__: true,
					event: 'basepath',
					basepath: req.baseUrl
				});

				emitted_basepath = true;
			}

			if (req.path === undefined) {
				req.path = req.url.replace(/\?.*/, '');
			}

			next();
		},

		fs.existsSync(path.join(build_dir, 'service-worker.js')) && serve({
			pathname: '/service-worker.js',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		fs.existsSync(path.join(build_dir, 'service-worker.js.map')) && serve({
			pathname: '/service-worker.js.map',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		serve({
			prefix: '/client/',
			cache_control:  'no-cache' 
		}),

		get_server_route_handler(manifest.server_routes),

		get_page_handler(manifest, session || noop$1)
	].filter(Boolean));
}

function compose_handlers(ignore, handlers) {
	const total = handlers.length;

	function nth_handler(n, req, res, next) {
		if (n >= total) {
			return next();
		}

		handlers[n](req, res, () => nth_handler(n+1, req, res, next));
	}

	return !ignore
		? (req, res, next) => nth_handler(0, req, res, next)
		: (req, res, next) => {
			if (should_ignore(req.path, ignore)) {
				next();
			} else {
				nth_handler(0, req, res, next);
			}
		};
}

function should_ignore(uri, val) {
	if (Array.isArray(val)) return val.some(x => should_ignore(uri, x));
	if (val instanceof RegExp) return val.test(uri);
	if (typeof val === 'function') return val(uri);
	return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}

function serve({ prefix, pathname, cache_control }



) {
	const filter = pathname
		? (req) => req.path === pathname
		: (req) => req.path.startsWith(prefix);

	const read =  (file) => fs.readFileSync(path.join(build_dir, file))
		;

	return (req, res, next) => {
		if (filter(req)) {
			const type = lite.getType(req.path);

			try {
				const file = path.posix.normalize(decodeURIComponent(req.path));
				const data = read(file);

				res.setHeader('Content-Type', type);
				res.setHeader('Cache-Control', cache_control);
				res.end(data);
			} catch (err) {
				res.statusCode = 404;
				res.end('not found');
			}
		} else {
			next();
		}
	};
}

function noop$1(){}

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2Jsb2cvX3Bvc3RzLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9ibG9nL2luZGV4Lmpzb24uanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2Jsb2cvW3NsdWddLmpzb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL2ludGVybmFsL2luZGV4Lm1qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMC5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3N0b3JlL2luZGV4Lm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvbW90aW9uL2luZGV4Lm1qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9Qcm9ncmVzcy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovcTEuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9ibG9nL2luZGV4LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9bc2x1Z10uc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTmF2LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX2xheW91dC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL19lcnJvci5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvbm9kZV9tb2R1bGVzL0BzYXBwZXIvaW50ZXJuYWwvbWFuaWZlc3Qtc2VydmVyLm1qcyIsIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9zaGFyZWQubWpzIiwiLi4vLi4vLi4vc3JjL25vZGVfbW9kdWxlcy9Ac2FwcGVyL2ludGVybmFsL0FwcC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvbm9kZV9tb2R1bGVzL0BzYXBwZXIvc2VydmVyLm1qcyIsIi4uLy4uLy4uL3NyYy9zZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gT3JkaW5hcmlseSwgeW91J2QgZ2VuZXJhdGUgdGhpcyBkYXRhIGZyb20gbWFya2Rvd24gZmlsZXMgaW4geW91clxuLy8gcmVwbywgb3IgZmV0Y2ggdGhlbSBmcm9tIGEgZGF0YWJhc2Ugb2Ygc29tZSBraW5kLiBCdXQgaW4gb3JkZXIgdG9cbi8vIGF2b2lkIHVubmVjZXNzYXJ5IGRlcGVuZGVuY2llcyBpbiB0aGUgc3RhcnRlciB0ZW1wbGF0ZSwgYW5kIGluIHRoZVxuLy8gc2VydmljZSBvZiBvYnZpb3VzbmVzcywgd2UncmUganVzdCBnb2luZyB0byBsZWF2ZSBpdCBoZXJlLlxuXG4vLyBUaGlzIGZpbGUgaXMgY2FsbGVkIGBfcG9zdHMuanNgIHJhdGhlciB0aGFuIGBwb3N0cy5qc2AsIGJlY2F1c2Vcbi8vIHdlIGRvbid0IHdhbnQgdG8gY3JlYXRlIGFuIGAvYmxvZy9wb3N0c2Agcm91dGUg4oCUIHRoZSBsZWFkaW5nXG4vLyB1bmRlcnNjb3JlIHRlbGxzIFNhcHBlciBub3QgdG8gZG8gdGhhdC5cblxuY29uc3QgcG9zdHMgPSBbXG5cdHtcblx0XHR0aXRsZTogJ1doYXQgaXMgU2FwcGVyPycsXG5cdFx0c2x1ZzogJ3doYXQtaXMtc2FwcGVyJyxcblx0XHRodG1sOiBgXG5cdFx0XHQ8cD5GaXJzdCwgeW91IGhhdmUgdG8ga25vdyB3aGF0IDxhIGhyZWY9J2h0dHBzOi8vc3ZlbHRlLmRldic+U3ZlbHRlPC9hPiBpcy4gU3ZlbHRlIGlzIGEgVUkgZnJhbWV3b3JrIHdpdGggYSBib2xkIG5ldyBpZGVhOiByYXRoZXIgdGhhbiBwcm92aWRpbmcgYSBsaWJyYXJ5IHRoYXQgeW91IHdyaXRlIGNvZGUgd2l0aCAobGlrZSBSZWFjdCBvciBWdWUsIGZvciBleGFtcGxlKSwgaXQncyBhIGNvbXBpbGVyIHRoYXQgdHVybnMgeW91ciBjb21wb25lbnRzIGludG8gaGlnaGx5IG9wdGltaXplZCB2YW5pbGxhIEphdmFTY3JpcHQuIElmIHlvdSBoYXZlbid0IGFscmVhZHkgcmVhZCB0aGUgPGEgaHJlZj0naHR0cHM6Ly9zdmVsdGUuZGV2L2Jsb2cvZnJhbWV3b3Jrcy13aXRob3V0LXRoZS1mcmFtZXdvcmsnPmludHJvZHVjdG9yeSBibG9nIHBvc3Q8L2E+LCB5b3Ugc2hvdWxkITwvcD5cblxuXHRcdFx0PHA+U2FwcGVyIGlzIGEgTmV4dC5qcy1zdHlsZSBmcmFtZXdvcmsgKDxhIGhyZWY9J2Jsb2cvaG93LWlzLXNhcHBlci1kaWZmZXJlbnQtZnJvbS1uZXh0Jz5tb3JlIG9uIHRoYXQgaGVyZTwvYT4pIGJ1aWx0IGFyb3VuZCBTdmVsdGUuIEl0IG1ha2VzIGl0IGVtYmFycmFzc2luZ2x5IGVhc3kgdG8gY3JlYXRlIGV4dHJlbWVseSBoaWdoIHBlcmZvcm1hbmNlIHdlYiBhcHBzLiBPdXQgb2YgdGhlIGJveCwgeW91IGdldDo8L3A+XG5cblx0XHRcdDx1bD5cblx0XHRcdFx0PGxpPkNvZGUtc3BsaXR0aW5nLCBkeW5hbWljIGltcG9ydHMgYW5kIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQsIHBvd2VyZWQgYnkgd2VicGFjazwvbGk+XG5cdFx0XHRcdDxsaT5TZXJ2ZXItc2lkZSByZW5kZXJpbmcgKFNTUikgd2l0aCBjbGllbnQtc2lkZSBoeWRyYXRpb248L2xpPlxuXHRcdFx0XHQ8bGk+U2VydmljZSB3b3JrZXIgZm9yIG9mZmxpbmUgc3VwcG9ydCwgYW5kIGFsbCB0aGUgUFdBIGJlbGxzIGFuZCB3aGlzdGxlczwvbGk+XG5cdFx0XHRcdDxsaT5UaGUgbmljZXN0IGRldmVsb3BtZW50IGV4cGVyaWVuY2UgeW91J3ZlIGV2ZXIgaGFkLCBvciB5b3VyIG1vbmV5IGJhY2s8L2xpPlxuXHRcdFx0PC91bD5cblxuXHRcdFx0PHA+SXQncyBpbXBsZW1lbnRlZCBhcyBFeHByZXNzIG1pZGRsZXdhcmUuIEV2ZXJ5dGhpbmcgaXMgc2V0IHVwIGFuZCB3YWl0aW5nIGZvciB5b3UgdG8gZ2V0IHN0YXJ0ZWQsIGJ1dCB5b3Uga2VlcCBjb21wbGV0ZSBjb250cm9sIG92ZXIgdGhlIHNlcnZlciwgc2VydmljZSB3b3JrZXIsIHdlYnBhY2sgY29uZmlnIGFuZCBldmVyeXRoaW5nIGVsc2UsIHNvIGl0J3MgYXMgZmxleGlibGUgYXMgeW91IG5lZWQgaXQgdG8gYmUuPC9wPlxuXHRcdGBcblx0fSxcblxuXHR7XG5cdFx0dGl0bGU6ICdIb3cgdG8gdXNlIFNhcHBlcicsXG5cdFx0c2x1ZzogJ2hvdy10by11c2Utc2FwcGVyJyxcblx0XHRodG1sOiBgXG5cdFx0XHQ8aDI+U3RlcCBvbmU8L2gyPlxuXHRcdFx0PHA+Q3JlYXRlIGEgbmV3IHByb2plY3QsIHVzaW5nIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9SaWNoLUhhcnJpcy9kZWdpdCc+ZGVnaXQ8L2E+OjwvcD5cblxuXHRcdFx0PHByZT48Y29kZT5ucHggZGVnaXQgXCJzdmVsdGVqcy9zYXBwZXItdGVtcGxhdGUjcm9sbHVwXCIgbXktYXBwXG5cdFx0XHRjZCBteS1hcHBcblx0XHRcdG5wbSBpbnN0YWxsICMgb3IgeWFybiFcblx0XHRcdG5wbSBydW4gZGV2XG5cdFx0XHQ8L2NvZGU+PC9wcmU+XG5cblx0XHRcdDxoMj5TdGVwIHR3bzwvaDI+XG5cdFx0XHQ8cD5HbyB0byA8YSBocmVmPSdodHRwOi8vbG9jYWxob3N0OjMwMDAnPmxvY2FsaG9zdDozMDAwPC9hPi4gT3BlbiA8Y29kZT5teS1hcHA8L2NvZGU+IGluIHlvdXIgZWRpdG9yLiBFZGl0IHRoZSBmaWxlcyBpbiB0aGUgPGNvZGU+c3JjL3JvdXRlczwvY29kZT4gZGlyZWN0b3J5IG9yIGFkZCBuZXcgb25lcy48L3A+XG5cblx0XHRcdDxoMj5TdGVwIHRocmVlPC9oMj5cblx0XHRcdDxwPi4uLjwvcD5cblxuXHRcdFx0PGgyPlN0ZXAgZm91cjwvaDI+XG5cdFx0XHQ8cD5SZXNpc3Qgb3ZlcmRvbmUgam9rZSBmb3JtYXRzLjwvcD5cblx0XHRgXG5cdH0sXG5cblx0e1xuXHRcdHRpdGxlOiAnV2h5IHRoZSBuYW1lPycsXG5cdFx0c2x1ZzogJ3doeS10aGUtbmFtZScsXG5cdFx0aHRtbDogYFxuXHRcdFx0PHA+SW4gd2FyLCB0aGUgc29sZGllcnMgd2hvIGJ1aWxkIGJyaWRnZXMsIHJlcGFpciByb2FkcywgY2xlYXIgbWluZWZpZWxkcyBhbmQgY29uZHVjdCBkZW1vbGl0aW9ucyDigJQgYWxsIHVuZGVyIGNvbWJhdCBjb25kaXRpb25zIOKAlCBhcmUga25vd24gYXMgPGVtPnNhcHBlcnM8L2VtPi48L3A+XG5cblx0XHRcdDxwPkZvciB3ZWIgZGV2ZWxvcGVycywgdGhlIHN0YWtlcyBhcmUgZ2VuZXJhbGx5IGxvd2VyIHRoYW4gdGhvc2UgZm9yIGNvbWJhdCBlbmdpbmVlcnMuIEJ1dCB3ZSBmYWNlIG91ciBvd24gaG9zdGlsZSBlbnZpcm9ubWVudDogdW5kZXJwb3dlcmVkIGRldmljZXMsIHBvb3IgbmV0d29yayBjb25uZWN0aW9ucywgYW5kIHRoZSBjb21wbGV4aXR5IGluaGVyZW50IGluIGZyb250LWVuZCBlbmdpbmVlcmluZy4gU2FwcGVyLCB3aGljaCBpcyBzaG9ydCBmb3IgPHN0cm9uZz5TPC9zdHJvbmc+dmVsdGUgPHN0cm9uZz5hcHA8L3N0cm9uZz4gbWFrPHN0cm9uZz5lcjwvc3Ryb25nPiwgaXMgeW91ciBjb3VyYWdlb3VzIGFuZCBkdXRpZnVsIGFsbHkuPC9wPlxuXHRcdGBcblx0fSxcblxuXHR7XG5cdFx0dGl0bGU6ICdIb3cgaXMgU2FwcGVyIGRpZmZlcmVudCBmcm9tIE5leHQuanM/Jyxcblx0XHRzbHVnOiAnaG93LWlzLXNhcHBlci1kaWZmZXJlbnQtZnJvbS1uZXh0Jyxcblx0XHRodG1sOiBgXG5cdFx0XHQ8cD48YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzJz5OZXh0LmpzPC9hPiBpcyBhIFJlYWN0IGZyYW1ld29yayBmcm9tIDxhIGhyZWY9J2h0dHBzOi8vdmVyY2VsLmNvbS8nPlZlcmNlbDwvYT4sIGFuZCBpcyB0aGUgaW5zcGlyYXRpb24gZm9yIFNhcHBlci4gVGhlcmUgYXJlIGEgZmV3IG5vdGFibGUgZGlmZmVyZW5jZXMsIGhvd2V2ZXI6PC9wPlxuXG5cdFx0XHQ8dWw+XG5cdFx0XHRcdDxsaT5JdCdzIHBvd2VyZWQgYnkgPGEgaHJlZj0naHR0cHM6Ly9zdmVsdGUuZGV2Jz5TdmVsdGU8L2E+IGluc3RlYWQgb2YgUmVhY3QsIHNvIGl0J3MgZmFzdGVyIGFuZCB5b3VyIGFwcHMgYXJlIHNtYWxsZXI8L2xpPlxuXHRcdFx0XHQ8bGk+SW5zdGVhZCBvZiByb3V0ZSBtYXNraW5nLCB3ZSBlbmNvZGUgcm91dGUgcGFyYW1ldGVycyBpbiBmaWxlbmFtZXMuIEZvciBleGFtcGxlLCB0aGUgcGFnZSB5b3UncmUgbG9va2luZyBhdCByaWdodCBub3cgaXMgPGNvZGU+c3JjL3JvdXRlcy9ibG9nL1tzbHVnXS5zdmVsdGU8L2NvZGU+PC9saT5cblx0XHRcdFx0PGxpPkFzIHdlbGwgYXMgcGFnZXMgKFN2ZWx0ZSBjb21wb25lbnRzLCB3aGljaCByZW5kZXIgb24gc2VydmVyIG9yIGNsaWVudCksIHlvdSBjYW4gY3JlYXRlIDxlbT5zZXJ2ZXIgcm91dGVzPC9lbT4gaW4geW91ciA8Y29kZT5yb3V0ZXM8L2NvZGU+IGRpcmVjdG9yeS4gVGhlc2UgYXJlIGp1c3QgPGNvZGU+LmpzPC9jb2RlPiBmaWxlcyB0aGF0IGV4cG9ydCBmdW5jdGlvbnMgY29ycmVzcG9uZGluZyB0byBIVFRQIG1ldGhvZHMsIGFuZCByZWNlaXZlIEV4cHJlc3MgPGNvZGU+cmVxdWVzdDwvY29kZT4gYW5kIDxjb2RlPnJlc3BvbnNlPC9jb2RlPiBvYmplY3RzIGFzIGFyZ3VtZW50cy4gVGhpcyBtYWtlcyBpdCB2ZXJ5IGVhc3kgdG8sIGZvciBleGFtcGxlLCBhZGQgYSBKU09OIEFQSSBzdWNoIGFzIHRoZSBvbmUgPGEgaHJlZj0nYmxvZy9ob3ctaXMtc2FwcGVyLWRpZmZlcmVudC1mcm9tLW5leHQuanNvbic+cG93ZXJpbmcgdGhpcyB2ZXJ5IHBhZ2U8L2E+PC9saT5cblx0XHRcdFx0PGxpPkxpbmtzIGFyZSBqdXN0IDxjb2RlPiZsdDthJmd0OzwvY29kZT4gZWxlbWVudHMsIHJhdGhlciB0aGFuIGZyYW1ld29yay1zcGVjaWZpYyA8Y29kZT4mbHQ7TGluayZndDs8L2NvZGU+IGNvbXBvbmVudHMuIFRoYXQgbWVhbnMsIGZvciBleGFtcGxlLCB0aGF0IDxhIGhyZWY9J2Jsb2cvaG93LWNhbi1pLWdldC1pbnZvbHZlZCc+dGhpcyBsaW5rIHJpZ2h0IGhlcmU8L2E+LCBkZXNwaXRlIGJlaW5nIGluc2lkZSBhIGJsb2Igb2YgSFRNTCwgd29ya3Mgd2l0aCB0aGUgcm91dGVyIGFzIHlvdSdkIGV4cGVjdC48L2xpPlxuXHRcdFx0PC91bD5cblx0XHRgXG5cdH0sXG5cblx0e1xuXHRcdHRpdGxlOiAnSG93IGNhbiBJIGdldCBpbnZvbHZlZD8nLFxuXHRcdHNsdWc6ICdob3ctY2FuLWktZ2V0LWludm9sdmVkJyxcblx0XHRodG1sOiBgXG5cdFx0XHQ8cD5XZSdyZSBzbyBnbGFkIHlvdSBhc2tlZCEgQ29tZSBvbiBvdmVyIHRvIHRoZSA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlJz5TdmVsdGU8L2E+IGFuZCA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc2FwcGVyJz5TYXBwZXI8L2E+IHJlcG9zLCBhbmQgam9pbiB1cyBpbiB0aGUgPGEgaHJlZj0naHR0cHM6Ly9zdmVsdGUuZGV2L2NoYXQnPkRpc2NvcmQgY2hhdHJvb208L2E+LiBFdmVyeW9uZSBpcyB3ZWxjb21lLCBlc3BlY2lhbGx5IHlvdSE8L3A+XG5cdFx0YFxuXHR9XG5dO1xuXG5wb3N0cy5mb3JFYWNoKHBvc3QgPT4ge1xuXHRwb3N0Lmh0bWwgPSBwb3N0Lmh0bWwucmVwbGFjZSgvXlxcdHszfS9nbSwgJycpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RzO1xuIiwiaW1wb3J0IHBvc3RzIGZyb20gJy4vX3Bvc3RzLmpzJztcblxuY29uc3QgY29udGVudHMgPSBKU09OLnN0cmluZ2lmeShwb3N0cy5tYXAocG9zdCA9PiB7XG5cdHJldHVybiB7XG5cdFx0dGl0bGU6IHBvc3QudGl0bGUsXG5cdFx0c2x1ZzogcG9zdC5zbHVnXG5cdH07XG59KSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQocmVxLCByZXMpIHtcblx0cmVzLndyaXRlSGVhZCgyMDAsIHtcblx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdH0pO1xuXG5cdHJlcy5lbmQoY29udGVudHMpO1xufSIsImltcG9ydCBwb3N0cyBmcm9tICcuL19wb3N0cy5qcyc7XG5cbmNvbnN0IGxvb2t1cCA9IG5ldyBNYXAoKTtcbnBvc3RzLmZvckVhY2gocG9zdCA9PiB7XG5cdGxvb2t1cC5zZXQocG9zdC5zbHVnLCBKU09OLnN0cmluZ2lmeShwb3N0KSk7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChyZXEsIHJlcywgbmV4dCkge1xuXHQvLyB0aGUgYHNsdWdgIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgYmVjYXVzZVxuXHQvLyB0aGlzIGZpbGUgaXMgY2FsbGVkIFtzbHVnXS5qc29uLmpzXG5cdGNvbnN0IHsgc2x1ZyB9ID0gcmVxLnBhcmFtcztcblxuXHRpZiAobG9va3VwLmhhcyhzbHVnKSkge1xuXHRcdHJlcy53cml0ZUhlYWQoMjAwLCB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0fSk7XG5cblx0XHRyZXMuZW5kKGxvb2t1cC5nZXQoc2x1ZykpO1xuXHR9IGVsc2Uge1xuXHRcdHJlcy53cml0ZUhlYWQoNDA0LCB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0fSk7XG5cblx0XHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdG1lc3NhZ2U6IGBOb3QgZm91bmRgXG5cdFx0fSkpO1xuXHR9XG59XG4iLCJmdW5jdGlvbiBub29wKCkgeyB9XG5jb25zdCBpZGVudGl0eSA9IHggPT4geDtcbmZ1bmN0aW9uIGFzc2lnbih0YXIsIHNyYykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBmb3IgKGNvbnN0IGsgaW4gc3JjKVxuICAgICAgICB0YXJba10gPSBzcmNba107XG4gICAgcmV0dXJuIHRhcjtcbn1cbmZ1bmN0aW9uIGlzX3Byb21pc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGFkZF9sb2NhdGlvbihlbGVtZW50LCBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIpIHtcbiAgICBlbGVtZW50Ll9fc3ZlbHRlX21ldGEgPSB7XG4gICAgICAgIGxvYzogeyBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIgfVxuICAgIH07XG59XG5mdW5jdGlvbiBydW4oZm4pIHtcbiAgICByZXR1cm4gZm4oKTtcbn1cbmZ1bmN0aW9uIGJsYW5rX29iamVjdCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cbmZ1bmN0aW9uIHJ1bl9hbGwoZm5zKSB7XG4gICAgZm5zLmZvckVhY2gocnVuKTtcbn1cbmZ1bmN0aW9uIGlzX2Z1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIHNhZmVfbm90X2VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYiB8fCAoKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5mdW5jdGlvbiBub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfc3RvcmUoc3RvcmUsIG5hbWUpIHtcbiAgICBpZiAoc3RvcmUgIT0gbnVsbCAmJiB0eXBlb2Ygc3RvcmUuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7bmFtZX0nIGlzIG5vdCBhIHN0b3JlIHdpdGggYSAnc3Vic2NyaWJlJyBtZXRob2RgKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmUoc3RvcmUsIC4uLmNhbGxiYWNrcykge1xuICAgIGlmIChzdG9yZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBub29wO1xuICAgIH1cbiAgICBjb25zdCB1bnN1YiA9IHN0b3JlLnN1YnNjcmliZSguLi5jYWxsYmFja3MpO1xuICAgIHJldHVybiB1bnN1Yi51bnN1YnNjcmliZSA/ICgpID0+IHVuc3ViLnVuc3Vic2NyaWJlKCkgOiB1bnN1Yjtcbn1cbmZ1bmN0aW9uIGdldF9zdG9yZV92YWx1ZShzdG9yZSkge1xuICAgIGxldCB2YWx1ZTtcbiAgICBzdWJzY3JpYmUoc3RvcmUsIF8gPT4gdmFsdWUgPSBfKSgpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNvbXBvbmVudF9zdWJzY3JpYmUoY29tcG9uZW50LCBzdG9yZSwgY2FsbGJhY2spIHtcbiAgICBjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKHN1YnNjcmliZShzdG9yZSwgY2FsbGJhY2spKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zbG90KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBzbG90X2N0eCA9IGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbik7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uWzBdKHNsb3RfY3R4KTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICByZXR1cm4gZGVmaW5pdGlvblsxXSAmJiBmblxuICAgICAgICA/IGFzc2lnbigkJHNjb3BlLmN0eC5zbGljZSgpLCBkZWZpbml0aW9uWzFdKGZuKGN0eCkpKVxuICAgICAgICA6ICQkc2NvcGUuY3R4O1xufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY2hhbmdlcyhkZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvblsyXSAmJiBmbikge1xuICAgICAgICBjb25zdCBsZXRzID0gZGVmaW5pdGlvblsyXShmbihkaXJ0eSkpO1xuICAgICAgICBpZiAoJCRzY29wZS5kaXJ0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbGV0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxldHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE1hdGgubWF4KCQkc2NvcGUuZGlydHkubGVuZ3RoLCBsZXRzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkW2ldID0gJCRzY29wZS5kaXJ0eVtpXSB8IGxldHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkJHNjb3BlLmRpcnR5IHwgbGV0cztcbiAgICB9XG4gICAgcmV0dXJuICQkc2NvcGUuZGlydHk7XG59XG5mdW5jdGlvbiB1cGRhdGVfc2xvdChzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZGlydHksIGdldF9zbG90X2NoYW5nZXNfZm4sIGdldF9zbG90X2NvbnRleHRfZm4pIHtcbiAgICBjb25zdCBzbG90X2NoYW5nZXMgPSBnZXRfc2xvdF9jaGFuZ2VzKHNsb3RfZGVmaW5pdGlvbiwgJCRzY29wZSwgZGlydHksIGdldF9zbG90X2NoYW5nZXNfZm4pO1xuICAgIGlmIChzbG90X2NoYW5nZXMpIHtcbiAgICAgICAgY29uc3Qgc2xvdF9jb250ZXh0ID0gZ2V0X3Nsb3RfY29udGV4dChzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZ2V0X3Nsb3RfY29udGV4dF9mbik7XG4gICAgICAgIHNsb3QucChzbG90X2NvbnRleHQsIHNsb3RfY2hhbmdlcyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZXhjbHVkZV9pbnRlcm5hbF9wcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3VsdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb21wdXRlX3Jlc3RfcHJvcHMocHJvcHMsIGtleXMpIHtcbiAgICBjb25zdCByZXN0ID0ge307XG4gICAga2V5cyA9IG5ldyBTZXQoa2V5cyk7XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoIWtleXMuaGFzKGspICYmIGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3Rba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdDtcbn1cbmZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICBsZXQgcmFuID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGlmIChyYW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJhbiA9IHRydWU7XG4gICAgICAgIGZuLmNhbGwodGhpcywgLi4uYXJncyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG51bGxfdG9fZW1wdHkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5mdW5jdGlvbiBzZXRfc3RvcmVfdmFsdWUoc3RvcmUsIHJldCwgdmFsdWUgPSByZXQpIHtcbiAgICBzdG9yZS5zZXQodmFsdWUpO1xuICAgIHJldHVybiByZXQ7XG59XG5jb25zdCBoYXNfcHJvcCA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xuZnVuY3Rpb24gYWN0aW9uX2Rlc3Ryb3llcihhY3Rpb25fcmVzdWx0KSB7XG4gICAgcmV0dXJuIGFjdGlvbl9yZXN1bHQgJiYgaXNfZnVuY3Rpb24oYWN0aW9uX3Jlc3VsdC5kZXN0cm95KSA/IGFjdGlvbl9yZXN1bHQuZGVzdHJveSA6IG5vb3A7XG59XG5cbmNvbnN0IGlzX2NsaWVudCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xubGV0IG5vdyA9IGlzX2NsaWVudFxuICAgID8gKCkgPT4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgOiAoKSA9PiBEYXRlLm5vdygpO1xubGV0IHJhZiA9IGlzX2NsaWVudCA/IGNiID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYikgOiBub29wO1xuLy8gdXNlZCBpbnRlcm5hbGx5IGZvciB0ZXN0aW5nXG5mdW5jdGlvbiBzZXRfbm93KGZuKSB7XG4gICAgbm93ID0gZm47XG59XG5mdW5jdGlvbiBzZXRfcmFmKGZuKSB7XG4gICAgcmFmID0gZm47XG59XG5cbmNvbnN0IHRhc2tzID0gbmV3IFNldCgpO1xuZnVuY3Rpb24gcnVuX3Rhc2tzKG5vdykge1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGlmICghdGFzay5jKG5vdykpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgICAgIHRhc2suZigpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRhc2tzLnNpemUgIT09IDApXG4gICAgICAgIHJhZihydW5fdGFza3MpO1xufVxuLyoqXG4gKiBGb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5IVxuICovXG5mdW5jdGlvbiBjbGVhcl9sb29wcygpIHtcbiAgICB0YXNrcy5jbGVhcigpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHRhc2sgdGhhdCBydW5zIG9uIGVhY2ggcmFmIGZyYW1lXG4gKiB1bnRpbCBpdCByZXR1cm5zIGEgZmFsc3kgdmFsdWUgb3IgaXMgYWJvcnRlZFxuICovXG5mdW5jdGlvbiBsb29wKGNhbGxiYWNrKSB7XG4gICAgbGV0IHRhc2s7XG4gICAgaWYgKHRhc2tzLnNpemUgPT09IDApXG4gICAgICAgIHJhZihydW5fdGFza3MpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bGZpbGwgPT4ge1xuICAgICAgICAgICAgdGFza3MuYWRkKHRhc2sgPSB7IGM6IGNhbGxiYWNrLCBmOiBmdWxmaWxsIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgYWJvcnQoKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBub2RlKSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfZWFjaChpdGVyYXRpb25zLCBkZXRhY2hpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGl0ZXJhdGlvbnNbaV0pXG4gICAgICAgICAgICBpdGVyYXRpb25zW2ldLmQoZGV0YWNoaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBlbGVtZW50KG5hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRfaXMobmFtZSwgaXMpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lLCB7IGlzIH0pO1xufVxuZnVuY3Rpb24gb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcyhvYmosIGV4Y2x1ZGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmIChoYXNfcHJvcChvYmosIGspXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0YXJnZXRba10gPSBvYmpba107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIHN2Z19lbGVtZW50KG5hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5hbWUpO1xufVxuZnVuY3Rpb24gdGV4dChkYXRhKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpO1xufVxuZnVuY3Rpb24gc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRleHQoJyAnKTtcbn1cbmZ1bmN0aW9uIGVtcHR5KCkge1xuICAgIHJldHVybiB0ZXh0KCcnKTtcbn1cbmZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuICgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBwcmV2ZW50X2RlZmF1bHQoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzdG9wX3Byb3BhZ2F0aW9uKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNlbGYoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcylcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICBlbHNlIGlmIChub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpICE9PSB2YWx1ZSlcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobm9kZS5fX3Byb3RvX18pO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXNba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ19fdmFsdWUnKSB7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlc2NyaXB0b3JzW2tleV0gJiYgZGVzY3JpcHRvcnNba2V5XS5zZXQpIHtcbiAgICAgICAgICAgIG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X3N2Z19hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIHByb3AsIHZhbHVlKSB7XG4gICAgaWYgKHByb3AgaW4gbm9kZSkge1xuICAgICAgICBub2RlW3Byb3BdID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhdHRyKG5vZGUsIHByb3AsIHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiB4bGlua19hdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBnZXRfYmluZGluZ19ncm91cF92YWx1ZShncm91cCwgX192YWx1ZSwgY2hlY2tlZCkge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGdyb3VwW2ldLmNoZWNrZWQpXG4gICAgICAgICAgICB2YWx1ZS5hZGQoZ3JvdXBbaV0uX192YWx1ZSk7XG4gICAgfVxuICAgIGlmICghY2hlY2tlZCkge1xuICAgICAgICB2YWx1ZS5kZWxldGUoX192YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHRvX251bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJycgPyB1bmRlZmluZWQgOiArdmFsdWU7XG59XG5mdW5jdGlvbiB0aW1lX3Jhbmdlc190b19hcnJheShyYW5nZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuZnVuY3Rpb24gY2xhaW1fZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcywgc3ZnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICBsZXQgaiA9IDA7XG4gICAgICAgICAgICBjb25zdCByZW1vdmUgPSBbXTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG5vZGUuYXR0cmlidXRlc1tqKytdO1xuICAgICAgICAgICAgICAgIGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlLnB1c2goYXR0cmlidXRlLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcmVtb3ZlLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUocmVtb3ZlW2tdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2Rlcy5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN2ZyA/IHN2Z19lbGVtZW50KG5hbWUpIDogZWxlbWVudChuYW1lKTtcbn1cbmZ1bmN0aW9uIGNsYWltX3RleHQobm9kZXMsIGRhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9ICcnICsgZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBub2Rlcy5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHQoZGF0YSk7XG59XG5mdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuICAgIHJldHVybiBjbGFpbV90ZXh0KG5vZGVzLCAnICcpO1xufVxuZnVuY3Rpb24gc2V0X2RhdGEodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQuZGF0YSAhPT0gZGF0YSlcbiAgICAgICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF92YWx1ZShpbnB1dCwgdmFsdWUpIHtcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X2lucHV0X3R5cGUoaW5wdXQsIHR5cGUpIHtcbiAgICB0cnkge1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUsIGltcG9ydGFudCA/ICdpbXBvcnRhbnQnIDogJycpO1xufVxuZnVuY3Rpb24gc2VsZWN0X29wdGlvbihzZWxlY3QsIHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgaWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuICAgIGNvbnN0IHNlbGVjdGVkX29wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpIHx8IHNlbGVjdC5vcHRpb25zWzBdO1xuICAgIHJldHVybiBzZWxlY3RlZF9vcHRpb24gJiYgc2VsZWN0ZWRfb3B0aW9uLl9fdmFsdWU7XG59XG5mdW5jdGlvbiBzZWxlY3RfbXVsdGlwbGVfdmFsdWUoc2VsZWN0KSB7XG4gICAgcmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCBvcHRpb24gPT4gb3B0aW9uLl9fdmFsdWUpO1xufVxuLy8gdW5mb3J0dW5hdGVseSB0aGlzIGNhbid0IGJlIGEgY29uc3RhbnQgYXMgdGhhdCB3b3VsZG4ndCBiZSB0cmVlLXNoYWtlYWJsZVxuLy8gc28gd2UgY2FjaGUgdGhlIHJlc3VsdCBpbnN0ZWFkXG5sZXQgY3Jvc3NvcmlnaW47XG5mdW5jdGlvbiBpc19jcm9zc29yaWdpbigpIHtcbiAgICBpZiAoY3Jvc3NvcmlnaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjcm9zc29yaWdpbiA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB2b2lkIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjcm9zc29yaWdpbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyb3Nzb3JpZ2luO1xufVxuZnVuY3Rpb24gYWRkX3Jlc2l6ZV9saXN0ZW5lcihub2RlLCBmbikge1xuICAgIGNvbnN0IGNvbXB1dGVkX3N0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB6X2luZGV4ID0gKHBhcnNlSW50KGNvbXB1dGVkX3N0eWxlLnpJbmRleCkgfHwgMCkgLSAxO1xuICAgIGlmIChjb21wdXRlZF9zdHlsZS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfVxuICAgIGNvbnN0IGlmcmFtZSA9IGVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGRpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgYCArXG4gICAgICAgIGBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDA7IG9wYWNpdHk6IDA7IHBvaW50ZXItZXZlbnRzOiBub25lOyB6LWluZGV4OiAke3pfaW5kZXh9O2ApO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBpZnJhbWUudGFiSW5kZXggPSAtMTtcbiAgICBjb25zdCBjcm9zc29yaWdpbiA9IGlzX2Nyb3Nzb3JpZ2luKCk7XG4gICAgbGV0IHVuc3Vic2NyaWJlO1xuICAgIGlmIChjcm9zc29yaWdpbikge1xuICAgICAgICBpZnJhbWUuc3JjID0gYGRhdGE6dGV4dC9odG1sLDxzY3JpcHQ+b25yZXNpemU9ZnVuY3Rpb24oKXtwYXJlbnQucG9zdE1lc3NhZ2UoMCwnKicpfTwvc2NyaXB0PmA7XG4gICAgICAgIHVuc3Vic2NyaWJlID0gbGlzdGVuKHdpbmRvdywgJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGlmcmFtZS5jb250ZW50V2luZG93KVxuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWZyYW1lLnNyYyA9ICdhYm91dDpibGFuayc7XG4gICAgICAgIGlmcmFtZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSA9IGxpc3RlbihpZnJhbWUuY29udGVudFdpbmRvdywgJ3Jlc2l6ZScsIGZuKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYXBwZW5kKG5vZGUsIGlmcmFtZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGNyb3Nzb3JpZ2luKSB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHVuc3Vic2NyaWJlICYmIGlmcmFtZS5jb250ZW50V2luZG93KSB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIGRldGFjaChpZnJhbWUpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0b2dnbGVfY2xhc3MoZWxlbWVudCwgbmFtZSwgdG9nZ2xlKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3RbdG9nZ2xlID8gJ2FkZCcgOiAncmVtb3ZlJ10obmFtZSk7XG59XG5mdW5jdGlvbiBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsKSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGZhbHNlLCBmYWxzZSwgZGV0YWlsKTtcbiAgICByZXR1cm4gZTtcbn1cbmZ1bmN0aW9uIHF1ZXJ5X3NlbGVjdG9yX2FsbChzZWxlY3RvciwgcGFyZW50ID0gZG9jdW1lbnQuYm9keSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59XG5jbGFzcyBIdG1sVGFnIHtcbiAgICBjb25zdHJ1Y3RvcihhbmNob3IgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuYSA9IGFuY2hvcjtcbiAgICAgICAgdGhpcy5lID0gdGhpcy5uID0gbnVsbDtcbiAgICB9XG4gICAgbShodG1sLCB0YXJnZXQsIGFuY2hvciA9IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmUpIHtcbiAgICAgICAgICAgIHRoaXMuZSA9IGVsZW1lbnQodGFyZ2V0Lm5vZGVOYW1lKTtcbiAgICAgICAgICAgIHRoaXMudCA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuaChodG1sKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmkoYW5jaG9yKTtcbiAgICB9XG4gICAgaChodG1sKSB7XG4gICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB0aGlzLm4gPSBBcnJheS5mcm9tKHRoaXMuZS5jaGlsZE5vZGVzKTtcbiAgICB9XG4gICAgaShhbmNob3IpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGluc2VydCh0aGlzLnQsIHRoaXMubltpXSwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwKGh0bWwpIHtcbiAgICAgICAgdGhpcy5kKCk7XG4gICAgICAgIHRoaXMuaChodG1sKTtcbiAgICAgICAgdGhpcy5pKHRoaXMuYSk7XG4gICAgfVxuICAgIGQoKSB7XG4gICAgICAgIHRoaXMubi5mb3JFYWNoKGRldGFjaCk7XG4gICAgfVxufVxuXG5jb25zdCBhY3RpdmVfZG9jcyA9IG5ldyBTZXQoKTtcbmxldCBhY3RpdmUgPSAwO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gICAgbGV0IGhhc2ggPSA1MzgxO1xuICAgIGxldCBpID0gc3RyLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gaGFzaCA+Pj4gMDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9ydWxlKG5vZGUsIGEsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzZSwgZm4sIHVpZCA9IDApIHtcbiAgICBjb25zdCBzdGVwID0gMTYuNjY2IC8gZHVyYXRpb247XG4gICAgbGV0IGtleWZyYW1lcyA9ICd7XFxuJztcbiAgICBmb3IgKGxldCBwID0gMDsgcCA8PSAxOyBwICs9IHN0ZXApIHtcbiAgICAgICAgY29uc3QgdCA9IGEgKyAoYiAtIGEpICogZWFzZShwKTtcbiAgICAgICAga2V5ZnJhbWVzICs9IHAgKiAxMDAgKyBgJXske2ZuKHQsIDEgLSB0KX19XFxuYDtcbiAgICB9XG4gICAgY29uc3QgcnVsZSA9IGtleWZyYW1lcyArIGAxMDAlIHske2ZuKGIsIDEgLSBiKX19XFxufWA7XG4gICAgY29uc3QgbmFtZSA9IGBfX3N2ZWx0ZV8ke2hhc2gocnVsZSl9XyR7dWlkfWA7XG4gICAgY29uc3QgZG9jID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIGFjdGl2ZV9kb2NzLmFkZChkb2MpO1xuICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBkb2MuX19zdmVsdGVfc3R5bGVzaGVldCB8fCAoZG9jLl9fc3ZlbHRlX3N0eWxlc2hlZXQgPSBkb2MuaGVhZC5hcHBlbmRDaGlsZChlbGVtZW50KCdzdHlsZScpKS5zaGVldCk7XG4gICAgY29uc3QgY3VycmVudF9ydWxlcyA9IGRvYy5fX3N2ZWx0ZV9ydWxlcyB8fCAoZG9jLl9fc3ZlbHRlX3J1bGVzID0ge30pO1xuICAgIGlmICghY3VycmVudF9ydWxlc1tuYW1lXSkge1xuICAgICAgICBjdXJyZW50X3J1bGVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgc3R5bGVzaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzICR7bmFtZX0gJHtydWxlfWAsIHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICB9XG4gICAgY29uc3QgYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJyc7XG4gICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBgJHthbmltYXRpb24gPyBgJHthbmltYXRpb259LCBgIDogYGB9JHtuYW1lfSAke2R1cmF0aW9ufW1zIGxpbmVhciAke2RlbGF5fW1zIDEgYm90aGA7XG4gICAgYWN0aXZlICs9IDE7XG4gICAgcmV0dXJuIG5hbWU7XG59XG5mdW5jdGlvbiBkZWxldGVfcnVsZShub2RlLCBuYW1lKSB7XG4gICAgY29uc3QgcHJldmlvdXMgPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpLnNwbGl0KCcsICcpO1xuICAgIGNvbnN0IG5leHQgPSBwcmV2aW91cy5maWx0ZXIobmFtZVxuICAgICAgICA/IGFuaW0gPT4gYW5pbS5pbmRleE9mKG5hbWUpIDwgMCAvLyByZW1vdmUgc3BlY2lmaWMgYW5pbWF0aW9uXG4gICAgICAgIDogYW5pbSA9PiBhbmltLmluZGV4T2YoJ19fc3ZlbHRlJykgPT09IC0xIC8vIHJlbW92ZSBhbGwgU3ZlbHRlIGFuaW1hdGlvbnNcbiAgICApO1xuICAgIGNvbnN0IGRlbGV0ZWQgPSBwcmV2aW91cy5sZW5ndGggLSBuZXh0Lmxlbmd0aDtcbiAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5leHQuam9pbignLCAnKTtcbiAgICAgICAgYWN0aXZlIC09IGRlbGV0ZWQ7XG4gICAgICAgIGlmICghYWN0aXZlKVxuICAgICAgICAgICAgY2xlYXJfcnVsZXMoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjbGVhcl9ydWxlcygpIHtcbiAgICByYWYoKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBhY3RpdmVfZG9jcy5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZXNoZWV0ID0gZG9jLl9fc3ZlbHRlX3N0eWxlc2hlZXQ7XG4gICAgICAgICAgICBsZXQgaSA9IHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGktLSlcbiAgICAgICAgICAgICAgICBzdHlsZXNoZWV0LmRlbGV0ZVJ1bGUoaSk7XG4gICAgICAgICAgICBkb2MuX19zdmVsdGVfcnVsZXMgPSB7fTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFjdGl2ZV9kb2NzLmNsZWFyKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9hbmltYXRpb24obm9kZSwgZnJvbSwgZm4sIHBhcmFtcykge1xuICAgIGlmICghZnJvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgdG8gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChmcm9tLmxlZnQgPT09IHRvLmxlZnQgJiYgZnJvbS5yaWdodCA9PT0gdG8ucmlnaHQgJiYgZnJvbS50b3AgPT09IHRvLnRvcCAmJiBmcm9tLmJvdHRvbSA9PT0gdG8uYm90dG9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86IHNob3VsZCB0aGlzIGJlIHNlcGFyYXRlZCBmcm9tIGRlc3RydWN0dXJpbmc/IE9yIHN0YXJ0L2VuZCBhZGRlZCB0byBwdWJsaWMgYXBpIGFuZCBkb2N1bWVudGF0aW9uP1xuICAgIHN0YXJ0OiBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheSwgXG4gICAgLy8gQHRzLWlnbm9yZSB0b2RvOlxuICAgIGVuZCA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbiwgdGljayA9IG5vb3AsIGNzcyB9ID0gZm4obm9kZSwgeyBmcm9tLCB0byB9LCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgIGxldCBuYW1lO1xuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICBuYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkZWxheSkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpO1xuICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgaWYgKCFzdGFydGVkICYmIG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRlZCAmJiBub3cgPj0gZW5kKSB7XG4gICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcnVubmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gbm93IC0gc3RhcnRfdGltZTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSAwICsgMSAqIGVhc2luZyhwIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgc3RhcnQoKTtcbiAgICB0aWNrKDAsIDEpO1xuICAgIHJldHVybiBzdG9wO1xufVxuZnVuY3Rpb24gZml4X3Bvc2l0aW9uKG5vZGUpIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgaWYgKHN0eWxlLnBvc2l0aW9uICE9PSAnYWJzb2x1dGUnICYmIHN0eWxlLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3R5bGU7XG4gICAgICAgIGNvbnN0IGEgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgYWRkX3RyYW5zZm9ybShub2RlLCBhKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpIHtcbiAgICBjb25zdCBiID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoYS5sZWZ0ICE9PSBiLmxlZnQgfHwgYS50b3AgIT09IGIudG9wKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSBgJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgke2EubGVmdCAtIGIubGVmdH1weCwgJHthLnRvcCAtIGIudG9wfXB4KWA7XG4gICAgfVxufVxuXG5sZXQgY3VycmVudF9jb21wb25lbnQ7XG5mdW5jdGlvbiBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgY3VycmVudF9jb21wb25lbnQgPSBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBnZXRfY3VycmVudF9jb21wb25lbnQoKSB7XG4gICAgaWYgKCFjdXJyZW50X2NvbXBvbmVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGdW5jdGlvbiBjYWxsZWQgb3V0c2lkZSBjb21wb25lbnQgaW5pdGlhbGl6YXRpb25gKTtcbiAgICByZXR1cm4gY3VycmVudF9jb21wb25lbnQ7XG59XG5mdW5jdGlvbiBiZWZvcmVVcGRhdGUoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5iZWZvcmVfdXBkYXRlLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gb25Nb3VudChmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX21vdW50LnB1c2goZm4pO1xufVxuZnVuY3Rpb24gYWZ0ZXJVcGRhdGUoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5hZnRlcl91cGRhdGUucHVzaChmbik7XG59XG5mdW5jdGlvbiBvbkRlc3Ryb3koZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9kZXN0cm95LnB1c2goZm4pO1xufVxuZnVuY3Rpb24gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IGdldF9jdXJyZW50X2NvbXBvbmVudCgpO1xuICAgIHJldHVybiAodHlwZSwgZGV0YWlsKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbdHlwZV07XG4gICAgICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gYXJlIHRoZXJlIHNpdHVhdGlvbnMgd2hlcmUgZXZlbnRzIGNvdWxkIGJlIGRpc3BhdGNoZWRcbiAgICAgICAgICAgIC8vIGluIGEgc2VydmVyIChub24tRE9NKSBlbnZpcm9ubWVudD9cbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCk7XG4gICAgICAgICAgICBjYWxsYmFja3Muc2xpY2UoKS5mb3JFYWNoKGZuID0+IHtcbiAgICAgICAgICAgICAgICBmbi5jYWxsKGNvbXBvbmVudCwgZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gc2V0Q29udGV4dChrZXksIGNvbnRleHQpIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LnNldChrZXksIGNvbnRleHQpO1xufVxuZnVuY3Rpb24gZ2V0Q29udGV4dChrZXkpIHtcbiAgICByZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5nZXQoa2V5KTtcbn1cbi8vIFRPRE8gZmlndXJlIG91dCBpZiB3ZSBzdGlsbCB3YW50IHRvIHN1cHBvcnRcbi8vIHNob3J0aGFuZCBldmVudHMsIG9yIGlmIHdlIHdhbnQgdG8gaW1wbGVtZW50XG4vLyBhIHJlYWwgYnViYmxpbmcgbWVjaGFuaXNtXG5mdW5jdGlvbiBidWJibGUoY29tcG9uZW50LCBldmVudCkge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbZXZlbnQudHlwZV07XG4gICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICBjYWxsYmFja3Muc2xpY2UoKS5mb3JFYWNoKGZuID0+IGZuKGV2ZW50KSk7XG4gICAgfVxufVxuXG5jb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG5jb25zdCBpbnRyb3MgPSB7IGVuYWJsZWQ6IGZhbHNlIH07XG5jb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG5jb25zdCByZXNvbHZlZF9wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5sZXQgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc2NoZWR1bGVfdXBkYXRlKCkge1xuICAgIGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuICAgICAgICB1cGRhdGVfc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZWRfcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0aWNrKCkge1xuICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgIHJldHVybiByZXNvbHZlZF9wcm9taXNlO1xufVxuZnVuY3Rpb24gYWRkX3JlbmRlcl9jYWxsYmFjayhmbikge1xuICAgIHJlbmRlcl9jYWxsYmFja3MucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZGRfZmx1c2hfY2FsbGJhY2soZm4pIHtcbiAgICBmbHVzaF9jYWxsYmFja3MucHVzaChmbik7XG59XG5sZXQgZmx1c2hpbmcgPSBmYWxzZTtcbmNvbnN0IHNlZW5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgaWYgKGZsdXNoaW5nKVxuICAgICAgICByZXR1cm47XG4gICAgZmx1c2hpbmcgPSB0cnVlO1xuICAgIGRvIHtcbiAgICAgICAgLy8gZmlyc3QsIGNhbGwgYmVmb3JlVXBkYXRlIGZ1bmN0aW9uc1xuICAgICAgICAvLyBhbmQgdXBkYXRlIGNvbXBvbmVudHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBkaXJ0eV9jb21wb25lbnRzW2ldO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICAgICAgfVxuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCA9IDA7XG4gICAgICAgIHdoaWxlIChiaW5kaW5nX2NhbGxiYWNrcy5sZW5ndGgpXG4gICAgICAgICAgICBiaW5kaW5nX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgICAgICAvLyB0aGVuLCBvbmNlIGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQsIGNhbGxcbiAgICAgICAgLy8gYWZ0ZXJVcGRhdGUgZnVuY3Rpb25zLiBUaGlzIG1heSBjYXVzZVxuICAgICAgICAvLyBzdWJzZXF1ZW50IHVwZGF0ZXMuLi5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHJlbmRlcl9jYWxsYmFja3NbaV07XG4gICAgICAgICAgICBpZiAoIXNlZW5fY2FsbGJhY2tzLmhhcyhjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAvLyAuLi5zbyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGxvb3BzXG4gICAgICAgICAgICAgICAgc2Vlbl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICB9IHdoaWxlIChkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCk7XG4gICAgd2hpbGUgKGZsdXNoX2NhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgZmx1c2hfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgfVxuICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBmbHVzaGluZyA9IGZhbHNlO1xuICAgIHNlZW5fY2FsbGJhY2tzLmNsZWFyKCk7XG59XG5mdW5jdGlvbiB1cGRhdGUoJCQpIHtcbiAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgJCQudXBkYXRlKCk7XG4gICAgICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgICAgIGNvbnN0IGRpcnR5ID0gJCQuZGlydHk7XG4gICAgICAgICQkLmRpcnR5ID0gWy0xXTtcbiAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQucCgkJC5jdHgsIGRpcnR5KTtcbiAgICAgICAgJCQuYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG4gICAgfVxufVxuXG5sZXQgcHJvbWlzZTtcbmZ1bmN0aW9uIHdhaXQoKSB7XG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBkaXNwYXRjaChub2RlLCBkaXJlY3Rpb24sIGtpbmQpIHtcbiAgICBub2RlLmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KGAke2RpcmVjdGlvbiA/ICdpbnRybycgOiAnb3V0cm8nfSR7a2luZH1gKSk7XG59XG5jb25zdCBvdXRyb2luZyA9IG5ldyBTZXQoKTtcbmxldCBvdXRyb3M7XG5mdW5jdGlvbiBncm91cF9vdXRyb3MoKSB7XG4gICAgb3V0cm9zID0ge1xuICAgICAgICByOiAwLFxuICAgICAgICBjOiBbXSxcbiAgICAgICAgcDogb3V0cm9zIC8vIHBhcmVudCBncm91cFxuICAgIH07XG59XG5mdW5jdGlvbiBjaGVja19vdXRyb3MoKSB7XG4gICAgaWYgKCFvdXRyb3Mucikge1xuICAgICAgICBydW5fYWxsKG91dHJvcy5jKTtcbiAgICB9XG4gICAgb3V0cm9zID0gb3V0cm9zLnA7XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uX2luKGJsb2NrLCBsb2NhbCkge1xuICAgIGlmIChibG9jayAmJiBibG9jay5pKSB7XG4gICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgIGJsb2NrLmkobG9jYWwpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25fb3V0KGJsb2NrLCBsb2NhbCwgZGV0YWNoLCBjYWxsYmFjaykge1xuICAgIGlmIChibG9jayAmJiBibG9jay5vKSB7XG4gICAgICAgIGlmIChvdXRyb2luZy5oYXMoYmxvY2spKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBvdXRyb2luZy5hZGQoYmxvY2spO1xuICAgICAgICBvdXRyb3MuYy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWNoKVxuICAgICAgICAgICAgICAgICAgICBibG9jay5kKDEpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBibG9jay5vKGxvY2FsKTtcbiAgICB9XG59XG5jb25zdCBudWxsX3RyYW5zaXRpb24gPSB7IGR1cmF0aW9uOiAwIH07XG5mdW5jdGlvbiBjcmVhdGVfaW5fdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgbGV0IHRhc2s7XG4gICAgbGV0IHVpZCA9IDA7XG4gICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcywgdWlkKyspO1xuICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgIGlmICh0YXNrKVxuICAgICAgICAgICAgdGFzay5hYm9ydCgpO1xuICAgICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCB0cnVlLCAnc3RhcnQnKSk7XG4gICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0ZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSk7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKGdvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGludmFsaWRhdGUoKSB7XG4gICAgICAgICAgICBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfb3V0X3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgY29uc3QgZ3JvdXAgPSBvdXRyb3M7XG4gICAgZ3JvdXAuciArPSAxO1xuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAxLCAwLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnc3RhcnQnKSk7XG4gICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIS0tZ3JvdXAucikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJlc3VsdCBpbiBgZW5kKClgIGJlaW5nIGNhbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gY2xlYW4gdXAgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGljaygxIC0gdCwgdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgIGdvKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ28oKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW5kKHJlc2V0KSB7XG4gICAgICAgICAgICBpZiAocmVzZXQgJiYgY29uZmlnLnRpY2spIHtcbiAgICAgICAgICAgICAgICBjb25maWcudGljaygxLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcywgaW50cm8pIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgdCA9IGludHJvID8gMCA6IDE7XG4gICAgbGV0IHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lID0gbnVsbDtcbiAgICBmdW5jdGlvbiBjbGVhcl9hbmltYXRpb24oKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5pdChwcm9ncmFtLCBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBkID0gcHJvZ3JhbS5iIC0gdDtcbiAgICAgICAgZHVyYXRpb24gKj0gTWF0aC5hYnMoZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiB0LFxuICAgICAgICAgICAgYjogcHJvZ3JhbS5iLFxuICAgICAgICAgICAgZCxcbiAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgc3RhcnQ6IHByb2dyYW0uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHByb2dyYW0uc3RhcnQgKyBkdXJhdGlvbixcbiAgICAgICAgICAgIGdyb3VwOiBwcm9ncmFtLmdyb3VwXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKGIpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBub3coKSArIGRlbGF5LFxuICAgICAgICAgICAgYlxuICAgICAgICB9O1xuICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBwcm9ncmFtLmdyb3VwID0gb3V0cm9zO1xuICAgICAgICAgICAgb3V0cm9zLnIgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhbiBpbnRybywgYW5kIHRoZXJlJ3MgYSBkZWxheSwgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW4gaW5pdGlhbCB0aWNrIGFuZC9vciBhcHBseSBDU1MgYW5pbWF0aW9uIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiKVxuICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHByb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgYiwgJ3N0YXJ0JykpO1xuICAgICAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nX3Byb2dyYW0gJiYgbm93ID4gcGVuZGluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocGVuZGluZ19wcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnc3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIHJ1bm5pbmdfcHJvZ3JhbS5iLCBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24sIDAsIGVhc2luZywgY29uZmlnLmNzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCA9IHJ1bm5pbmdfcHJvZ3JhbS5iLCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwZW5kaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSdyZSBkb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbS5iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludHJvIOKAlCB3ZSBjYW4gdGlkeSB1cCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG91dHJvIOKAlCBuZWVkcyB0byBiZSBjb29yZGluYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIS0tcnVubmluZ19wcm9ncmFtLmdyb3VwLnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKHJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBydW5uaW5nX3Byb2dyYW0uc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gcnVubmluZ19wcm9ncmFtLmEgKyBydW5uaW5nX3Byb2dyYW0uZCAqIGVhc2luZyhwIC8gcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhIShydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJ1bihiKSB7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbyhiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlX3Byb21pc2UocHJvbWlzZSwgaW5mbykge1xuICAgIGNvbnN0IHRva2VuID0gaW5mby50b2tlbiA9IHt9O1xuICAgIGZ1bmN0aW9uIHVwZGF0ZSh0eXBlLCBpbmRleCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoaW5mby50b2tlbiAhPT0gdG9rZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGluZm8ucmVzb2x2ZWQgPSB2YWx1ZTtcbiAgICAgICAgbGV0IGNoaWxkX2N0eCA9IGluZm8uY3R4O1xuICAgICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNoaWxkX2N0eCA9IGNoaWxkX2N0eC5zbGljZSgpO1xuICAgICAgICAgICAgY2hpbGRfY3R4W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBibG9jayA9IHR5cGUgJiYgKGluZm8uY3VycmVudCA9IHR5cGUpKGNoaWxkX2N0eCk7XG4gICAgICAgIGxldCBuZWVkc19mbHVzaCA9IGZhbHNlO1xuICAgICAgICBpZiAoaW5mby5ibG9jaykge1xuICAgICAgICAgICAgaWYgKGluZm8uYmxvY2tzKSB7XG4gICAgICAgICAgICAgICAgaW5mby5ibG9ja3MuZm9yRWFjaCgoYmxvY2ssIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IGluZGV4ICYmIGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cF9vdXRyb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25fb3V0KGJsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5ibG9ja3NbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja19vdXRyb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5mby5ibG9jay5kKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgICAgICBibG9jay5tKGluZm8ubW91bnQoKSwgaW5mby5hbmNob3IpO1xuICAgICAgICAgICAgbmVlZHNfZmx1c2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluZm8uYmxvY2sgPSBibG9jaztcbiAgICAgICAgaWYgKGluZm8uYmxvY2tzKVxuICAgICAgICAgICAgaW5mby5ibG9ja3NbaW5kZXhdID0gYmxvY2s7XG4gICAgICAgIGlmIChuZWVkc19mbHVzaCkge1xuICAgICAgICAgICAgZmx1c2goKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNfcHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50X2NvbXBvbmVudCA9IGdldF9jdXJyZW50X2NvbXBvbmVudCgpO1xuICAgICAgICBwcm9taXNlLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGN1cnJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHZhbHVlKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGN1cnJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLmNhdGNoLCAyLCBpbmZvLmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiB3ZSBwcmV2aW91c2x5IGhhZCBhIHRoZW4vY2F0Y2ggYmxvY2ssIGRlc3Ryb3kgaXRcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHByb21pc2U7XG4gICAgfVxufVxuXG5jb25zdCBnbG9iYWxzID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgPyB3aW5kb3dcbiAgICA6IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IGdsb2JhbFRoaXNcbiAgICAgICAgOiBnbG9iYWwpO1xuXG5mdW5jdGlvbiBkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5kKDEpO1xuICAgIGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcbn1cbmZ1bmN0aW9uIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuZnVuY3Rpb24gZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZigpO1xuICAgIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuZnVuY3Rpb24gdXBkYXRlX2tleWVkX2VhY2gob2xkX2Jsb2NrcywgZGlydHksIGdldF9rZXksIGR5bmFtaWMsIGN0eCwgbGlzdCwgbG9va3VwLCBub2RlLCBkZXN0cm95LCBjcmVhdGVfZWFjaF9ibG9jaywgbmV4dCwgZ2V0X2NvbnRleHQpIHtcbiAgICBsZXQgbyA9IG9sZF9ibG9ja3MubGVuZ3RoO1xuICAgIGxldCBuID0gbGlzdC5sZW5ndGg7XG4gICAgbGV0IGkgPSBvO1xuICAgIGNvbnN0IG9sZF9pbmRleGVzID0ge307XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgb2xkX2luZGV4ZXNbb2xkX2Jsb2Nrc1tpXS5rZXldID0gaTtcbiAgICBjb25zdCBuZXdfYmxvY2tzID0gW107XG4gICAgY29uc3QgbmV3X2xvb2t1cCA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBkZWx0YXMgPSBuZXcgTWFwKCk7XG4gICAgaSA9IG47XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25zdCBjaGlsZF9jdHggPSBnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpO1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRfa2V5KGNoaWxkX2N0eCk7XG4gICAgICAgIGxldCBibG9jayA9IGxvb2t1cC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFibG9jaykge1xuICAgICAgICAgICAgYmxvY2sgPSBjcmVhdGVfZWFjaF9ibG9jayhrZXksIGNoaWxkX2N0eCk7XG4gICAgICAgICAgICBibG9jay5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHluYW1pYykge1xuICAgICAgICAgICAgYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KTtcbiAgICAgICAgfVxuICAgICAgICBuZXdfbG9va3VwLnNldChrZXksIG5ld19ibG9ja3NbaV0gPSBibG9jayk7XG4gICAgICAgIGlmIChrZXkgaW4gb2xkX2luZGV4ZXMpXG4gICAgICAgICAgICBkZWx0YXMuc2V0KGtleSwgTWF0aC5hYnMoaSAtIG9sZF9pbmRleGVzW2tleV0pKTtcbiAgICB9XG4gICAgY29uc3Qgd2lsbF9tb3ZlID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IGRpZF9tb3ZlID0gbmV3IFNldCgpO1xuICAgIGZ1bmN0aW9uIGluc2VydChibG9jaykge1xuICAgICAgICB0cmFuc2l0aW9uX2luKGJsb2NrLCAxKTtcbiAgICAgICAgYmxvY2subShub2RlLCBuZXh0KTtcbiAgICAgICAgbG9va3VwLnNldChibG9jay5rZXksIGJsb2NrKTtcbiAgICAgICAgbmV4dCA9IGJsb2NrLmZpcnN0O1xuICAgICAgICBuLS07XG4gICAgfVxuICAgIHdoaWxlIChvICYmIG4pIHtcbiAgICAgICAgY29uc3QgbmV3X2Jsb2NrID0gbmV3X2Jsb2Nrc1tuIC0gMV07XG4gICAgICAgIGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3NbbyAtIDFdO1xuICAgICAgICBjb25zdCBuZXdfa2V5ID0gbmV3X2Jsb2NrLmtleTtcbiAgICAgICAgY29uc3Qgb2xkX2tleSA9IG9sZF9ibG9jay5rZXk7XG4gICAgICAgIGlmIChuZXdfYmxvY2sgPT09IG9sZF9ibG9jaykge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgbmV4dCA9IG5ld19ibG9jay5maXJzdDtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgICAgIG4tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvbGQgYmxvY2tcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFsb29rdXAuaGFzKG5ld19rZXkpIHx8IHdpbGxfbW92ZS5oYXMobmV3X2tleSkpIHtcbiAgICAgICAgICAgIGluc2VydChuZXdfYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpZF9tb3ZlLmhhcyhvbGRfa2V5KSkge1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlbHRhcy5nZXQobmV3X2tleSkgPiBkZWx0YXMuZ2V0KG9sZF9rZXkpKSB7XG4gICAgICAgICAgICBkaWRfbW92ZS5hZGQobmV3X2tleSk7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdpbGxfbW92ZS5hZGQob2xkX2tleSk7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgd2hpbGUgKG8tLSkge1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW29dO1xuICAgICAgICBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9ibG9jay5rZXkpKVxuICAgICAgICAgICAgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG4gICAgfVxuICAgIHdoaWxlIChuKVxuICAgICAgICBpbnNlcnQobmV3X2Jsb2Nrc1tuIC0gMV0pO1xuICAgIHJldHVybiBuZXdfYmxvY2tzO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9rZXlzKGN0eCwgbGlzdCwgZ2V0X2NvbnRleHQsIGdldF9rZXkpIHtcbiAgICBjb25zdCBrZXlzID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRfa2V5KGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSkpO1xuICAgICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgaGF2ZSBkdXBsaWNhdGUga2V5cyBpbiBhIGtleWVkIGVhY2hgKTtcbiAgICAgICAgfVxuICAgICAgICBrZXlzLmFkZChrZXkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0X3NwcmVhZF91cGRhdGUobGV2ZWxzLCB1cGRhdGVzKSB7XG4gICAgY29uc3QgdXBkYXRlID0ge307XG4gICAgY29uc3QgdG9fbnVsbF9vdXQgPSB7fTtcbiAgICBjb25zdCBhY2NvdW50ZWRfZm9yID0geyAkJHNjb3BlOiAxIH07XG4gICAgbGV0IGkgPSBsZXZlbHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgbyA9IGxldmVsc1tpXTtcbiAgICAgICAgY29uc3QgbiA9IHVwZGF0ZXNbaV07XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIG4pKVxuICAgICAgICAgICAgICAgICAgICB0b19udWxsX291dFtrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnRlZF9mb3Jba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVba2V5XSA9IG5ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXZlbHNbaV0gPSBuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdG9fbnVsbF9vdXQpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIHVwZGF0ZSkpXG4gICAgICAgICAgICB1cGRhdGVba2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHVwZGF0ZTtcbn1cbmZ1bmN0aW9uIGdldF9zcHJlYWRfb2JqZWN0KHNwcmVhZF9wcm9wcykge1xuICAgIHJldHVybiB0eXBlb2Ygc3ByZWFkX3Byb3BzID09PSAnb2JqZWN0JyAmJiBzcHJlYWRfcHJvcHMgIT09IG51bGwgPyBzcHJlYWRfcHJvcHMgOiB7fTtcbn1cblxuLy8gc291cmNlOiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmRpY2VzLmh0bWxcbmNvbnN0IGJvb2xlYW5fYXR0cmlidXRlcyA9IG5ldyBTZXQoW1xuICAgICdhbGxvd2Z1bGxzY3JlZW4nLFxuICAgICdhbGxvd3BheW1lbnRyZXF1ZXN0JyxcbiAgICAnYXN5bmMnLFxuICAgICdhdXRvZm9jdXMnLFxuICAgICdhdXRvcGxheScsXG4gICAgJ2NoZWNrZWQnLFxuICAgICdjb250cm9scycsXG4gICAgJ2RlZmF1bHQnLFxuICAgICdkZWZlcicsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZm9ybW5vdmFsaWRhdGUnLFxuICAgICdoaWRkZW4nLFxuICAgICdpc21hcCcsXG4gICAgJ2xvb3AnLFxuICAgICdtdWx0aXBsZScsXG4gICAgJ211dGVkJyxcbiAgICAnbm9tb2R1bGUnLFxuICAgICdub3ZhbGlkYXRlJyxcbiAgICAnb3BlbicsXG4gICAgJ3BsYXlzaW5saW5lJyxcbiAgICAncmVhZG9ubHknLFxuICAgICdyZXF1aXJlZCcsXG4gICAgJ3JldmVyc2VkJyxcbiAgICAnc2VsZWN0ZWQnXG5dKTtcblxuY29uc3QgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIgPSAvW1xccydcIj4vPVxcdXtGREQwfS1cXHV7RkRFRn1cXHV7RkZGRX1cXHV7RkZGRn1cXHV7MUZGRkV9XFx1ezFGRkZGfVxcdXsyRkZGRX1cXHV7MkZGRkZ9XFx1ezNGRkZFfVxcdXszRkZGRn1cXHV7NEZGRkV9XFx1ezRGRkZGfVxcdXs1RkZGRX1cXHV7NUZGRkZ9XFx1ezZGRkZFfVxcdXs2RkZGRn1cXHV7N0ZGRkV9XFx1ezdGRkZGfVxcdXs4RkZGRX1cXHV7OEZGRkZ9XFx1ezlGRkZFfVxcdXs5RkZGRn1cXHV7QUZGRkV9XFx1e0FGRkZGfVxcdXtCRkZGRX1cXHV7QkZGRkZ9XFx1e0NGRkZFfVxcdXtDRkZGRn1cXHV7REZGRkV9XFx1e0RGRkZGfVxcdXtFRkZGRX1cXHV7RUZGRkZ9XFx1e0ZGRkZFfVxcdXtGRkZGRn1cXHV7MTBGRkZFfVxcdXsxMEZGRkZ9XS91O1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0yXG4vLyBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jbm9uY2hhcmFjdGVyXG5mdW5jdGlvbiBzcHJlYWQoYXJncywgY2xhc3Nlc190b19hZGQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgLi4uYXJncyk7XG4gICAgaWYgKGNsYXNzZXNfdG9fYWRkKSB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmNsYXNzID09IG51bGwpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuY2xhc3MgPSBjbGFzc2VzX3RvX2FkZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuY2xhc3MgKz0gJyAnICsgY2xhc3Nlc190b19hZGQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGlmIChpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3Rlci50ZXN0KG5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHN0ciArPSBcIiBcIiArIG5hbWU7XG4gICAgICAgIGVsc2UgaWYgKGJvb2xlYW5fYXR0cmlidXRlcy5oYXMobmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgICAgIHN0ciArPSBcIiBcIiArIG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgc3RyICs9IGAgJHtuYW1lfT1cIiR7U3RyaW5nKHZhbHVlKS5yZXBsYWNlKC9cIi9nLCAnJiMzNDsnKS5yZXBsYWNlKC8nL2csICcmIzM5OycpfVwiYDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdHI7XG59XG5jb25zdCBlc2NhcGVkID0ge1xuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiMzOTsnLFxuICAgICcmJzogJyZhbXA7JyxcbiAgICAnPCc6ICcmbHQ7JyxcbiAgICAnPic6ICcmZ3Q7J1xufTtcbmZ1bmN0aW9uIGVzY2FwZShodG1sKSB7XG4gICAgcmV0dXJuIFN0cmluZyhodG1sKS5yZXBsYWNlKC9bXCInJjw+XS9nLCBtYXRjaCA9PiBlc2NhcGVkW21hdGNoXSk7XG59XG5mdW5jdGlvbiBlYWNoKGl0ZW1zLCBmbikge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHN0ciArPSBmbihpdGVtc1tpXSwgaSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5jb25zdCBtaXNzaW5nX2NvbXBvbmVudCA9IHtcbiAgICAkJHJlbmRlcjogKCkgPT4gJydcbn07XG5mdW5jdGlvbiB2YWxpZGF0ZV9jb21wb25lbnQoY29tcG9uZW50LCBuYW1lKSB7XG4gICAgaWYgKCFjb21wb25lbnQgfHwgIWNvbXBvbmVudC4kJHJlbmRlcikge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ3N2ZWx0ZTpjb21wb25lbnQnKVxuICAgICAgICAgICAgbmFtZSArPSAnIHRoaXM9ey4uLn0nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYDwke25hbWV9PiBpcyBub3QgYSB2YWxpZCBTU1IgY29tcG9uZW50LiBZb3UgbWF5IG5lZWQgdG8gcmV2aWV3IHlvdXIgYnVpbGQgY29uZmlnIHRvIGVuc3VyZSB0aGF0IGRlcGVuZGVuY2llcyBhcmUgY29tcGlsZWQsIHJhdGhlciB0aGFuIGltcG9ydGVkIGFzIHByZS1jb21waWxlZCBtb2R1bGVzYCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBkZWJ1ZyhmaWxlLCBsaW5lLCBjb2x1bW4sIHZhbHVlcykge1xuICAgIGNvbnNvbGUubG9nKGB7QGRlYnVnfSAke2ZpbGUgPyBmaWxlICsgJyAnIDogJyd9KCR7bGluZX06JHtjb2x1bW59KWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICByZXR1cm4gJyc7XG59XG5sZXQgb25fZGVzdHJveTtcbmZ1bmN0aW9uIGNyZWF0ZV9zc3JfY29tcG9uZW50KGZuKSB7XG4gICAgZnVuY3Rpb24gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICAgICAgY29uc3QgJCQgPSB7XG4gICAgICAgICAgICBvbl9kZXN0cm95LFxuICAgICAgICAgICAgY29udGV4dDogbmV3IE1hcChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pLFxuICAgICAgICAgICAgLy8gdGhlc2Ugd2lsbCBiZSBpbW1lZGlhdGVseSBkaXNjYXJkZWRcbiAgICAgICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KClcbiAgICAgICAgfTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHsgJCQgfSk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBmbihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMpO1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXI6IChwcm9wcyA9IHt9LCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3kgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdGl0bGU6ICcnLCBoZWFkOiAnJywgY3NzOiBuZXcgU2V0KCkgfTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCB7fSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBydW5fYWxsKG9uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBBcnJheS5mcm9tKHJlc3VsdC5jc3MpLm1hcChjc3MgPT4gY3NzLmNvZGUpLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG51bGwgLy8gVE9ET1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZDogcmVzdWx0LnRpdGxlICsgcmVzdWx0LmhlYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgICQkcmVuZGVyXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZF9hdHRyaWJ1dGUobmFtZSwgdmFsdWUsIGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAoYm9vbGVhbiAmJiAhdmFsdWUpKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgcmV0dXJuIGAgJHtuYW1lfSR7dmFsdWUgPT09IHRydWUgPyAnJyA6IGA9JHt0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gSlNPTi5zdHJpbmdpZnkoZXNjYXBlKHZhbHVlKSkgOiBgXCIke3ZhbHVlfVwiYH1gfWA7XG59XG5mdW5jdGlvbiBhZGRfY2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgcmV0dXJuIGNsYXNzZXMgPyBgIGNsYXNzPVwiJHtjbGFzc2VzfVwiYCA6IGBgO1xufVxuXG5mdW5jdGlvbiBiaW5kKGNvbXBvbmVudCwgbmFtZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBpbmRleCA9IGNvbXBvbmVudC4kJC5wcm9wc1tuYW1lXTtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21wb25lbnQuJCQuYm91bmRbaW5kZXhdID0gY2FsbGJhY2s7XG4gICAgICAgIGNhbGxiYWNrKGNvbXBvbmVudC4kJC5jdHhbaW5kZXhdKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVfY29tcG9uZW50KGJsb2NrKSB7XG4gICAgYmxvY2sgJiYgYmxvY2suYygpO1xufVxuZnVuY3Rpb24gY2xhaW1fY29tcG9uZW50KGJsb2NrLCBwYXJlbnRfbm9kZXMpIHtcbiAgICBibG9jayAmJiBibG9jay5sKHBhcmVudF9ub2Rlcyk7XG59XG5mdW5jdGlvbiBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCB0YXJnZXQsIGFuY2hvcikge1xuICAgIGNvbnN0IHsgZnJhZ21lbnQsIG9uX21vdW50LCBvbl9kZXN0cm95LCBhZnRlcl91cGRhdGUgfSA9IGNvbXBvbmVudC4kJDtcbiAgICBmcmFnbWVudCAmJiBmcmFnbWVudC5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICAvLyBvbk1vdW50IGhhcHBlbnMgYmVmb3JlIHRoZSBpbml0aWFsIGFmdGVyVXBkYXRlXG4gICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld19vbl9kZXN0cm95ID0gb25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgaWYgKG9uX2Rlc3Ryb3kpIHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3kucHVzaCguLi5uZXdfb25fZGVzdHJveSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBFZGdlIGNhc2UgLSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseSxcbiAgICAgICAgICAgIC8vIG1vc3QgbGlrZWx5IGFzIGEgcmVzdWx0IG9mIGEgYmluZGluZyBpbml0aWFsaXNpbmdcbiAgICAgICAgICAgIHJ1bl9hbGwobmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC4kJC5vbl9tb3VudCA9IFtdO1xuICAgIH0pO1xuICAgIGFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gZGVzdHJveV9jb21wb25lbnQoY29tcG9uZW50LCBkZXRhY2hpbmcpIHtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJDtcbiAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcnVuX2FsbCgkJC5vbl9kZXN0cm95KTtcbiAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpO1xuICAgICAgICAvLyBUT0RPIG51bGwgb3V0IG90aGVyIHJlZnMsIGluY2x1ZGluZyBjb21wb25lbnQuJCQgKGJ1dCBuZWVkIHRvXG4gICAgICAgIC8vIHByZXNlcnZlIGZpbmFsIHN0YXRlPylcbiAgICAgICAgJCQub25fZGVzdHJveSA9ICQkLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgJCQuY3R4ID0gW107XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpIHtcbiAgICBpZiAoY29tcG9uZW50LiQkLmRpcnR5WzBdID09PSAtMSkge1xuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgICAgIGNvbXBvbmVudC4kJC5kaXJ0eS5maWxsKDApO1xuICAgIH1cbiAgICBjb21wb25lbnQuJCQuZGlydHlbKGkgLyAzMSkgfCAwXSB8PSAoMSA8PCAoaSAlIDMxKSk7XG59XG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgbm90X2VxdWFsLCBwcm9wcywgZGlydHkgPSBbLTFdKSB7XG4gICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgIGNvbnN0IHByb3BfdmFsdWVzID0gb3B0aW9ucy5wcm9wcyB8fCB7fTtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJCA9IHtcbiAgICAgICAgZnJhZ21lbnQ6IG51bGwsXG4gICAgICAgIGN0eDogbnVsbCxcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHVwZGF0ZTogbm9vcCxcbiAgICAgICAgbm90X2VxdWFsLFxuICAgICAgICBib3VuZDogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIC8vIGxpZmVjeWNsZVxuICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgIG9uX2Rlc3Ryb3k6IFtdLFxuICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgY29udGV4dDogbmV3IE1hcChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pLFxuICAgICAgICAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgZGlydHlcbiAgICB9O1xuICAgIGxldCByZWFkeSA9IGZhbHNlO1xuICAgICQkLmN0eCA9IGluc3RhbmNlXG4gICAgICAgID8gaW5zdGFuY2UoY29tcG9uZW50LCBwcm9wX3ZhbHVlcywgKGksIHJldCwgLi4ucmVzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN0Lmxlbmd0aCA/IHJlc3RbMF0gOiByZXQ7XG4gICAgICAgICAgICBpZiAoJCQuY3R4ICYmIG5vdF9lcXVhbCgkJC5jdHhbaV0sICQkLmN0eFtpXSA9IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICgkJC5ib3VuZFtpXSlcbiAgICAgICAgICAgICAgICAgICAgJCQuYm91bmRbaV0odmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChyZWFkeSlcbiAgICAgICAgICAgICAgICAgICAgbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSlcbiAgICAgICAgOiBbXTtcbiAgICAkJC51cGRhdGUoKTtcbiAgICByZWFkeSA9IHRydWU7XG4gICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAvLyBgZmFsc2VgIGFzIGEgc3BlY2lhbCBjYXNlIG9mIG5vIERPTSBjb21wb25lbnRcbiAgICAkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCA/IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpIDogZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmh5ZHJhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4ob3B0aW9ucy50YXJnZXQpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50Lmwobm9kZXMpO1xuICAgICAgICAgICAgbm9kZXMuZm9yRWFjaChkZXRhY2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5pbnRybylcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oY29tcG9uZW50LiQkLmZyYWdtZW50KTtcbiAgICAgICAgbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yKTtcbiAgICAgICAgZmx1c2goKTtcbiAgICB9XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xufVxubGV0IFN2ZWx0ZUVsZW1lbnQ7XG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgU3ZlbHRlRWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLiQkLnNsb3R0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy4kJC5zbG90dGVkW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyLCBfb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzW2F0dHJdID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgJGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgICAgICB9XG4gICAgICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gVE9ETyBzaG91bGQgdGhpcyBkZWxlZ2F0ZSB0byBhZGRFdmVudExpc3RlbmVyP1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAkc2V0KCkge1xuICAgICAgICAgICAgLy8gb3ZlcnJpZGRlbiBieSBpbnN0YW5jZSwgaWYgaXQgaGFzIHByb3BzXG4gICAgICAgIH1cbiAgICB9O1xufVxuY2xhc3MgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgIH1cbiAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJHNldCgpIHtcbiAgICAgICAgLy8gb3ZlcnJpZGRlbiBieSBpbnN0YW5jZSwgaWYgaXQgaGFzIHByb3BzXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwYXRjaF9kZXYodHlwZSwgZGV0YWlsKSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQodHlwZSwgT2JqZWN0LmFzc2lnbih7IHZlcnNpb246ICczLjIzLjInIH0sIGRldGFpbCkpKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9kZXYodGFyZ2V0LCBub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NSW5zZXJ0XCIsIHsgdGFyZ2V0LCBub2RlIH0pO1xuICAgIGFwcGVuZCh0YXJnZXQsIG5vZGUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2Rldih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTUluc2VydFwiLCB7IHRhcmdldCwgbm9kZSwgYW5jaG9yIH0pO1xuICAgIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG59XG5mdW5jdGlvbiBkZXRhY2hfZGV2KG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01SZW1vdmVcIiwgeyBub2RlIH0pO1xuICAgIGRldGFjaChub2RlKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9iZXR3ZWVuX2RldihiZWZvcmUsIGFmdGVyKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYmVmb3JlX2RldihhZnRlcikge1xuICAgIHdoaWxlIChhZnRlci5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9hZnRlcl9kZXYoYmVmb3JlKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbGlzdGVuX2Rldihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucywgaGFzX3ByZXZlbnRfZGVmYXVsdCwgaGFzX3N0b3BfcHJvcGFnYXRpb24pIHtcbiAgICBjb25zdCBtb2RpZmllcnMgPSBvcHRpb25zID09PSB0cnVlID8gW1wiY2FwdHVyZVwiXSA6IG9wdGlvbnMgPyBBcnJheS5mcm9tKE9iamVjdC5rZXlzKG9wdGlvbnMpKSA6IFtdO1xuICAgIGlmIChoYXNfcHJldmVudF9kZWZhdWx0KVxuICAgICAgICBtb2RpZmllcnMucHVzaCgncHJldmVudERlZmF1bHQnKTtcbiAgICBpZiAoaGFzX3N0b3BfcHJvcGFnYXRpb24pXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdzdG9wUHJvcGFnYXRpb24nKTtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01BZGRFdmVudExpc3RlbmVyXCIsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICBjb25zdCBkaXNwb3NlID0gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01SZW1vdmVFdmVudExpc3RlbmVyXCIsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICAgICAgZGlzcG9zZSgpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyX2Rldihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NUmVtb3ZlQXR0cmlidXRlXCIsIHsgbm9kZSwgYXR0cmlidXRlIH0pO1xuICAgIGVsc2VcbiAgICAgICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NU2V0QXR0cmlidXRlXCIsIHsgbm9kZSwgYXR0cmlidXRlLCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHByb3BfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NU2V0UHJvcGVydHlcIiwgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBkYXRhc2V0X2Rldihub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlLmRhdGFzZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NU2V0RGF0YXNldFwiLCB7IG5vZGUsIHByb3BlcnR5LCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhX2Rldih0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC5kYXRhID09PSBkYXRhKVxuICAgICAgICByZXR1cm47XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NU2V0RGF0YVwiLCB7IG5vZGU6IHRleHQsIGRhdGEgfSk7XG4gICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2VhY2hfYXJndW1lbnQoYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdzdHJpbmcnICYmICEoYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIGFyZykpIHtcbiAgICAgICAgbGV0IG1zZyA9ICd7I2VhY2h9IG9ubHkgaXRlcmF0ZXMgb3ZlciBhcnJheS1saWtlIG9iamVjdHMuJztcbiAgICAgICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgYXJnICYmIFN5bWJvbC5pdGVyYXRvciBpbiBhcmcpIHtcbiAgICAgICAgICAgIG1zZyArPSAnIFlvdSBjYW4gdXNlIGEgc3ByZWFkIHRvIGNvbnZlcnQgdGhpcyBpdGVyYWJsZSBpbnRvIGFuIGFycmF5Lic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVfc2xvdHMobmFtZSwgc2xvdCwga2V5cykge1xuICAgIGZvciAoY29uc3Qgc2xvdF9rZXkgb2YgT2JqZWN0LmtleXMoc2xvdCkpIHtcbiAgICAgICAgaWYgKCF+a2V5cy5pbmRleE9mKHNsb3Rfa2V5KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGA8JHtuYW1lfT4gcmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBzbG90IFwiJHtzbG90X2tleX1cIi5gKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudERldiBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgKCFvcHRpb25zLnRhcmdldCAmJiAhb3B0aW9ucy4kJGlubGluZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJ3RhcmdldCcgaXMgYSByZXF1aXJlZCBvcHRpb25gKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuJGRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50IHdhcyBhbHJlYWR5IGRlc3Ryb3llZGApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJGNhcHR1cmVfc3RhdGUoKSB7IH1cbiAgICAkaW5qZWN0X3N0YXRlKCkgeyB9XG59XG5mdW5jdGlvbiBsb29wX2d1YXJkKHRpbWVvdXQpIHtcbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA+IHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5maW5pdGUgbG9vcCBkZXRlY3RlZGApO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgSHRtbFRhZywgU3ZlbHRlQ29tcG9uZW50LCBTdmVsdGVDb21wb25lbnREZXYsIFN2ZWx0ZUVsZW1lbnQsIGFjdGlvbl9kZXN0cm95ZXIsIGFkZF9hdHRyaWJ1dGUsIGFkZF9jbGFzc2VzLCBhZGRfZmx1c2hfY2FsbGJhY2ssIGFkZF9sb2NhdGlvbiwgYWRkX3JlbmRlcl9jYWxsYmFjaywgYWRkX3Jlc2l6ZV9saXN0ZW5lciwgYWRkX3RyYW5zZm9ybSwgYWZ0ZXJVcGRhdGUsIGFwcGVuZCwgYXBwZW5kX2RldiwgYXNzaWduLCBhdHRyLCBhdHRyX2RldiwgYmVmb3JlVXBkYXRlLCBiaW5kLCBiaW5kaW5nX2NhbGxiYWNrcywgYmxhbmtfb2JqZWN0LCBidWJibGUsIGNoZWNrX291dHJvcywgY2hpbGRyZW4sIGNsYWltX2NvbXBvbmVudCwgY2xhaW1fZWxlbWVudCwgY2xhaW1fc3BhY2UsIGNsYWltX3RleHQsIGNsZWFyX2xvb3BzLCBjb21wb25lbnRfc3Vic2NyaWJlLCBjb21wdXRlX3Jlc3RfcHJvcHMsIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciwgY3JlYXRlX2FuaW1hdGlvbiwgY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbiwgY3JlYXRlX2NvbXBvbmVudCwgY3JlYXRlX2luX3RyYW5zaXRpb24sIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbiwgY3JlYXRlX3Nsb3QsIGNyZWF0ZV9zc3JfY29tcG9uZW50LCBjdXJyZW50X2NvbXBvbmVudCwgY3VzdG9tX2V2ZW50LCBkYXRhc2V0X2RldiwgZGVidWcsIGRlc3Ryb3lfYmxvY2ssIGRlc3Ryb3lfY29tcG9uZW50LCBkZXN0cm95X2VhY2gsIGRldGFjaCwgZGV0YWNoX2FmdGVyX2RldiwgZGV0YWNoX2JlZm9yZV9kZXYsIGRldGFjaF9iZXR3ZWVuX2RldiwgZGV0YWNoX2RldiwgZGlydHlfY29tcG9uZW50cywgZGlzcGF0Y2hfZGV2LCBlYWNoLCBlbGVtZW50LCBlbGVtZW50X2lzLCBlbXB0eSwgZXNjYXBlLCBlc2NhcGVkLCBleGNsdWRlX2ludGVybmFsX3Byb3BzLCBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2ssIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIGZpeF9wb3NpdGlvbiwgZmx1c2gsIGdldENvbnRleHQsIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlLCBnZXRfY3VycmVudF9jb21wb25lbnQsIGdldF9zbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHQsIGdldF9zcHJlYWRfb2JqZWN0LCBnZXRfc3ByZWFkX3VwZGF0ZSwgZ2V0X3N0b3JlX3ZhbHVlLCBnbG9iYWxzLCBncm91cF9vdXRyb3MsIGhhbmRsZV9wcm9taXNlLCBoYXNfcHJvcCwgaWRlbnRpdHksIGluaXQsIGluc2VydCwgaW5zZXJ0X2RldiwgaW50cm9zLCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciwgaXNfY2xpZW50LCBpc19jcm9zc29yaWdpbiwgaXNfZnVuY3Rpb24sIGlzX3Byb21pc2UsIGxpc3RlbiwgbGlzdGVuX2RldiwgbG9vcCwgbG9vcF9ndWFyZCwgbWlzc2luZ19jb21wb25lbnQsIG1vdW50X2NvbXBvbmVudCwgbm9vcCwgbm90X2VxdWFsLCBub3csIG51bGxfdG9fZW1wdHksIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMsIG9uRGVzdHJveSwgb25Nb3VudCwgb25jZSwgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIHByZXZlbnRfZGVmYXVsdCwgcHJvcF9kZXYsIHF1ZXJ5X3NlbGVjdG9yX2FsbCwgcmFmLCBydW4sIHJ1bl9hbGwsIHNhZmVfbm90X2VxdWFsLCBzY2hlZHVsZV91cGRhdGUsIHNlbGVjdF9tdWx0aXBsZV92YWx1ZSwgc2VsZWN0X29wdGlvbiwgc2VsZWN0X29wdGlvbnMsIHNlbGVjdF92YWx1ZSwgc2VsZiwgc2V0Q29udGV4dCwgc2V0X2F0dHJpYnV0ZXMsIHNldF9jdXJyZW50X2NvbXBvbmVudCwgc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEsIHNldF9kYXRhLCBzZXRfZGF0YV9kZXYsIHNldF9pbnB1dF90eXBlLCBzZXRfaW5wdXRfdmFsdWUsIHNldF9ub3csIHNldF9yYWYsIHNldF9zdG9yZV92YWx1ZSwgc2V0X3N0eWxlLCBzZXRfc3ZnX2F0dHJpYnV0ZXMsIHNwYWNlLCBzcHJlYWQsIHN0b3BfcHJvcGFnYXRpb24sIHN1YnNjcmliZSwgc3ZnX2VsZW1lbnQsIHRleHQsIHRpY2ssIHRpbWVfcmFuZ2VzX3RvX2FycmF5LCB0b19udW1iZXIsIHRvZ2dsZV9jbGFzcywgdHJhbnNpdGlvbl9pbiwgdHJhbnNpdGlvbl9vdXQsIHVwZGF0ZV9rZXllZF9lYWNoLCB1cGRhdGVfc2xvdCwgdmFsaWRhdGVfY29tcG9uZW50LCB2YWxpZGF0ZV9lYWNoX2FyZ3VtZW50LCB2YWxpZGF0ZV9lYWNoX2tleXMsIHZhbGlkYXRlX3Nsb3RzLCB2YWxpZGF0ZV9zdG9yZSwgeGxpbmtfYXR0ciB9O1xuIiwiPHNjcmlwdD5cblxuICAgICBjb25zdCBxdWl6U3RlcHMgPSAgW1xuICAgICAgICB7IGlkOiAncTEnLCBuYW1lOiAnV2ViY2FtIENoYWxsZW5nZScsIHRpbWU6ICcybWlucycsIGRlc2NyaXB0aW9uOlwiSWYgeW91ciBjb21wdXRlciBoYXMgYSBidWlsdC1pbiBjYW1lcmEsIGFsc28ga25vd24gYXMgYSB3ZWJjYW0sIHlvdSBzaG91bGQga25vdyB0aGF0IGl0IGNhbiBiZSB1c2VkIHRvIHNweSBvbiB5b3UuIEFuZCBubywgdGhpcyBpcyBub3QganVzdCBzY2llbmNlIGZpY3Rpb24gYXMgYSByZWNlbnQgc3VydmV5IGNvbmR1Y3RlZCBieSBIUCBzaG93cyB0aGF0IDEwJSBpbiB0aGUgVS5TLiBlaXRoZXIga25vdyBzb21lb25lIHdob3NlIHdlYmNhbSB3YXMgaGFja2VkIG9yIGhhdmUgaGFkIHRoZWlyIG93biB3ZWJjYW0gaGFja2VkLiBJbiB0aGlzIGNoYWxsZW5nZSwgd2UgYXJlIGdvaW5nIHRvIHdhbGsgeW91IHRocm91Z2ggdGhlIGJlc3QgcHJhY3RpY2UgdG8gYXZvaWQgdGhpcyByaXNrLlwifSxcbiAgICAgICAgeyBpZDogJ3EyJywgbmFtZTogJ0Jyb3dzZXIgQ2hvaWNlJywgdGltZTogJzNtaW5zJ30sXG4gICAgICAgIHsgaWQ6ICdxMycsIG5hbWU6ICdQcml2YWN5IFNldHRpbmcnLCB0aW1lOiAnNG1pbnMnfSxcbiAgICAgICAgeyBpZDogJ3E0JywgbmFtZTogJ0h0dHBzIGV2ZXJ5d2hlcmUnLCB0aW1lOiAnNG1pbnMnfSxcbiAgICAgICAgeyBpZDogJ3E1JywgbmFtZTogJ0xvY2F0aW9uIFNlcnZpY2VzIChwaG9uZSBuZWVkZWQpJywgdGltZTogJzNtaW5zJ30sXG4gICAgICAgIHsgaWQ6ICdxNicsIG5hbWU6ICdUcmFja2VyIGJsb2NrZXInLCB0aW1lOiAnM21pbnMnfSxcbiAgICAgICAgeyBpZDogJ3E3JywgbmFtZTogJ2xvY2F0aW9uIFRyYWNraW5nJywgdGltZTogJzFtaW5zJ30sXG4gICAgICAgIHsgaWQ6ICdxOCcsIG5hbWU6ICdNb2JpbGUga2V5Ym9hcmQnLCB0aW1lOiAnNW1pbnMnfSxcbiAgICAgICAgeyBpZDogJ3E5JywgbmFtZTogJ01lc3NlbmdlciBwbGF0Zm9ybScsIHRpbWU6ICcybWlucyd9LFxuICAgICAgICB7IGlkOiAncTEwJywgbmFtZTogJ2lvdCcsIHRpbWU6ICcybWlucyd9XG4gICAgIF1cbiAgICBsZXQgYWN0aXZlID0gdHJ1ZTtcbiAgICAgZnVuY3Rpb24gaGFuZGxlTW91c2VTaG93KCl7XG4gICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgIH1cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+UXVpeiBPdmVydmlldzwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPGgyPlRoaXMgdGVzdCBjb250YWlucyAxMCB1bmlxdWUgcHJpdmFjeSB0ZXN0cyB0aGF0IHdpbGwgdGFrZSB5b3UgYWJvdXQgMzAgbWludXRlcyB0byBjb21wbGV0ZS4gVGhyb3VnaHQgdGhlIHRlc3QsIHdlIHdpbGwgcHJvdmlkZS4uLjwvaDI+XG48ZGl2PlxuICAgIHsjZWFjaCBxdWl6U3RlcHMgYXMge2lkLCBuYW1lLCB0aW1lLCBkZXNjcmlwdGlvbn0sIGl9XG4gICAgPGRpdiBjbGFzcz0nbnVtJz57aX17bmFtZX0gKHt0aW1lfSk8L2Rpdj48ZGl2IGNsYXNzOmFjdGl2ZT17YWN0aXZlfT57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgey9lYWNofVxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgICAubnVtIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAwcHg7XG4gICAgIFxuICAgIH1cbiAgICBkaXYge1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICBcbjwvc3R5bGU+IiwiaW1wb3J0IHsgbm9vcCwgc2FmZV9ub3RfZXF1YWwsIHN1YnNjcmliZSwgcnVuX2FsbCwgaXNfZnVuY3Rpb24gfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5leHBvcnQgeyBnZXRfc3RvcmVfdmFsdWUgYXMgZ2V0IH0gZnJvbSAnLi4vaW50ZXJuYWwnO1xuXG5jb25zdCBzdWJzY3JpYmVyX3F1ZXVlID0gW107XG4vKipcbiAqIENyZWF0ZXMgYSBgUmVhZGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXJ9c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiByZWFkYWJsZSh2YWx1ZSwgc3RhcnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IHdyaXRhYmxlKHZhbHVlLCBzdGFydCkuc3Vic2NyaWJlLFxuICAgIH07XG59XG4vKipcbiAqIENyZWF0ZSBhIGBXcml0YWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gKiBAcGFyYW0geyo9fXZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXI9fXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gd3JpdGFibGUodmFsdWUsIHN0YXJ0ID0gbm9vcCkge1xuICAgIGxldCBzdG9wO1xuICAgIGNvbnN0IHN1YnNjcmliZXJzID0gW107XG4gICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSkge1xuICAgICAgICBpZiAoc2FmZV9ub3RfZXF1YWwodmFsdWUsIG5ld192YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgaWYgKHN0b3ApIHsgLy8gc3RvcmUgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICBjb25zdCBydW5fcXVldWUgPSAhc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzID0gc3Vic2NyaWJlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgIHNbMV0oKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5wdXNoKHMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bl9xdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJfcXVldWUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWVbaV1bMF0oc3Vic2NyaWJlcl9xdWV1ZVtpICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG4gICAgICAgIHNldChmbih2YWx1ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gW3J1biwgaW52YWxpZGF0ZV07XG4gICAgICAgIHN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHN0b3AgPSBzdGFydChzZXQpIHx8IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgcnVuKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnMuaW5kZXhPZihzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgICAgICBzdG9wID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0LCB1cGRhdGUsIHN1YnNjcmliZSB9O1xufVxuZnVuY3Rpb24gZGVyaXZlZChzdG9yZXMsIGZuLCBpbml0aWFsX3ZhbHVlKSB7XG4gICAgY29uc3Qgc2luZ2xlID0gIUFycmF5LmlzQXJyYXkoc3RvcmVzKTtcbiAgICBjb25zdCBzdG9yZXNfYXJyYXkgPSBzaW5nbGVcbiAgICAgICAgPyBbc3RvcmVzXVxuICAgICAgICA6IHN0b3JlcztcbiAgICBjb25zdCBhdXRvID0gZm4ubGVuZ3RoIDwgMjtcbiAgICByZXR1cm4gcmVhZGFibGUoaW5pdGlhbF92YWx1ZSwgKHNldCkgPT4ge1xuICAgICAgICBsZXQgaW5pdGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgICBsZXQgcGVuZGluZyA9IDA7XG4gICAgICAgIGxldCBjbGVhbnVwID0gbm9vcDtcbiAgICAgICAgY29uc3Qgc3luYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4oc2luZ2xlID8gdmFsdWVzWzBdIDogdmFsdWVzLCBzZXQpO1xuICAgICAgICAgICAgaWYgKGF1dG8pIHtcbiAgICAgICAgICAgICAgICBzZXQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsZWFudXAgPSBpc19mdW5jdGlvbihyZXN1bHQpID8gcmVzdWx0IDogbm9vcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmVycyA9IHN0b3Jlc19hcnJheS5tYXAoKHN0b3JlLCBpKSA9PiBzdWJzY3JpYmUoc3RvcmUsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICBwZW5kaW5nICY9IH4oMSA8PCBpKTtcbiAgICAgICAgICAgIGlmIChpbml0ZWQpIHtcbiAgICAgICAgICAgICAgICBzeW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHBlbmRpbmcgfD0gKDEgPDwgaSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgc3luYygpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwodW5zdWJzY3JpYmVycyk7XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGRlcml2ZWQsIHJlYWRhYmxlLCB3cml0YWJsZSB9O1xuIiwiaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBub3csIGxvb3AsIGFzc2lnbiB9IGZyb20gJy4uL2ludGVybmFsJztcbmltcG9ydCB7IGxpbmVhciB9IGZyb20gJy4uL2Vhc2luZyc7XG5cbmZ1bmN0aW9uIGlzX2RhdGUob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbmZ1bmN0aW9uIHRpY2tfc3ByaW5nKGN0eCwgbGFzdF92YWx1ZSwgY3VycmVudF92YWx1ZSwgdGFyZ2V0X3ZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50X3ZhbHVlID09PSAnbnVtYmVyJyB8fCBpc19kYXRlKGN1cnJlbnRfdmFsdWUpKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgZGVsdGEgPSB0YXJnZXRfdmFsdWUgLSBjdXJyZW50X3ZhbHVlO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHZlbG9jaXR5ID0gKGN1cnJlbnRfdmFsdWUgLSBsYXN0X3ZhbHVlKSAvIChjdHguZHQgfHwgMSAvIDYwKTsgLy8gZ3VhcmQgZGl2IGJ5IDBcbiAgICAgICAgY29uc3Qgc3ByaW5nID0gY3R4Lm9wdHMuc3RpZmZuZXNzICogZGVsdGE7XG4gICAgICAgIGNvbnN0IGRhbXBlciA9IGN0eC5vcHRzLmRhbXBpbmcgKiB2ZWxvY2l0eTtcbiAgICAgICAgY29uc3QgYWNjZWxlcmF0aW9uID0gKHNwcmluZyAtIGRhbXBlcikgKiBjdHguaW52X21hc3M7XG4gICAgICAgIGNvbnN0IGQgPSAodmVsb2NpdHkgKyBhY2NlbGVyYXRpb24pICogY3R4LmR0O1xuICAgICAgICBpZiAoTWF0aC5hYnMoZCkgPCBjdHgub3B0cy5wcmVjaXNpb24gJiYgTWF0aC5hYnMoZGVsdGEpIDwgY3R4Lm9wdHMucHJlY2lzaW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0X3ZhbHVlOyAvLyBzZXR0bGVkXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdHguc2V0dGxlZCA9IGZhbHNlOyAvLyBzaWduYWwgbG9vcCB0byBrZWVwIHRpY2tpbmdcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHJldHVybiBpc19kYXRlKGN1cnJlbnRfdmFsdWUpID9cbiAgICAgICAgICAgICAgICBuZXcgRGF0ZShjdXJyZW50X3ZhbHVlLmdldFRpbWUoKSArIGQpIDogY3VycmVudF92YWx1ZSArIGQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50X3ZhbHVlKSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBjdXJyZW50X3ZhbHVlLm1hcCgoXywgaSkgPT4gdGlja19zcHJpbmcoY3R4LCBsYXN0X3ZhbHVlW2ldLCBjdXJyZW50X3ZhbHVlW2ldLCB0YXJnZXRfdmFsdWVbaV0pKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGN1cnJlbnRfdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IG5leHRfdmFsdWUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrIGluIGN1cnJlbnRfdmFsdWUpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBuZXh0X3ZhbHVlW2tdID0gdGlja19zcHJpbmcoY3R4LCBsYXN0X3ZhbHVlW2tdLCBjdXJyZW50X3ZhbHVlW2tdLCB0YXJnZXRfdmFsdWVba10pO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBuZXh0X3ZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc3ByaW5nICR7dHlwZW9mIGN1cnJlbnRfdmFsdWV9IHZhbHVlc2ApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNwcmluZyh2YWx1ZSwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3Qgc3RvcmUgPSB3cml0YWJsZSh2YWx1ZSk7XG4gICAgY29uc3QgeyBzdGlmZm5lc3MgPSAwLjE1LCBkYW1waW5nID0gMC44LCBwcmVjaXNpb24gPSAwLjAxIH0gPSBvcHRzO1xuICAgIGxldCBsYXN0X3RpbWU7XG4gICAgbGV0IHRhc2s7XG4gICAgbGV0IGN1cnJlbnRfdG9rZW47XG4gICAgbGV0IGxhc3RfdmFsdWUgPSB2YWx1ZTtcbiAgICBsZXQgdGFyZ2V0X3ZhbHVlID0gdmFsdWU7XG4gICAgbGV0IGludl9tYXNzID0gMTtcbiAgICBsZXQgaW52X21hc3NfcmVjb3ZlcnlfcmF0ZSA9IDA7XG4gICAgbGV0IGNhbmNlbF90YXNrID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSwgb3B0cyA9IHt9KSB7XG4gICAgICAgIHRhcmdldF92YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBjdXJyZW50X3Rva2VuID0ge307XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IG9wdHMuaGFyZCB8fCAoc3ByaW5nLnN0aWZmbmVzcyA+PSAxICYmIHNwcmluZy5kYW1waW5nID49IDEpKSB7XG4gICAgICAgICAgICBjYW5jZWxfdGFzayA9IHRydWU7IC8vIGNhbmNlbCBhbnkgcnVubmluZyBhbmltYXRpb25cbiAgICAgICAgICAgIGxhc3RfdGltZSA9IG5vdygpO1xuICAgICAgICAgICAgbGFzdF92YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IHRhcmdldF92YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0cy5zb2Z0KSB7XG4gICAgICAgICAgICBjb25zdCByYXRlID0gb3B0cy5zb2Z0ID09PSB0cnVlID8gLjUgOiArb3B0cy5zb2Z0O1xuICAgICAgICAgICAgaW52X21hc3NfcmVjb3ZlcnlfcmF0ZSA9IDEgLyAocmF0ZSAqIDYwKTtcbiAgICAgICAgICAgIGludl9tYXNzID0gMDsgLy8gaW5maW5pdGUgbWFzcywgdW5hZmZlY3RlZCBieSBzcHJpbmcgZm9yY2VzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXNrKSB7XG4gICAgICAgICAgICBsYXN0X3RpbWUgPSBub3coKTtcbiAgICAgICAgICAgIGNhbmNlbF90YXNrID0gZmFsc2U7XG4gICAgICAgICAgICB0YXNrID0gbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjYW5jZWxfdGFzaykge1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxfdGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0YXNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnZfbWFzcyA9IE1hdGgubWluKGludl9tYXNzICsgaW52X21hc3NfcmVjb3ZlcnlfcmF0ZSwgMSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICBpbnZfbWFzcyxcbiAgICAgICAgICAgICAgICAgICAgb3B0czogc3ByaW5nLFxuICAgICAgICAgICAgICAgICAgICBzZXR0bGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdDogKG5vdyAtIGxhc3RfdGltZSkgKiA2MCAvIDEwMDBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRfdmFsdWUgPSB0aWNrX3NwcmluZyhjdHgsIGxhc3RfdmFsdWUsIHZhbHVlLCB0YXJnZXRfdmFsdWUpO1xuICAgICAgICAgICAgICAgIGxhc3RfdGltZSA9IG5vdztcbiAgICAgICAgICAgICAgICBsYXN0X3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0KHZhbHVlID0gbmV4dF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5zZXR0bGVkKVxuICAgICAgICAgICAgICAgICAgICB0YXNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWN0eC5zZXR0bGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bGZpbCA9PiB7XG4gICAgICAgICAgICB0YXNrLnByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuID09PSBjdXJyZW50X3Rva2VuKVxuICAgICAgICAgICAgICAgICAgICBmdWxmaWwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgc3ByaW5nID0ge1xuICAgICAgICBzZXQsXG4gICAgICAgIHVwZGF0ZTogKGZuLCBvcHRzKSA9PiBzZXQoZm4odGFyZ2V0X3ZhbHVlLCB2YWx1ZSksIG9wdHMpLFxuICAgICAgICBzdWJzY3JpYmU6IHN0b3JlLnN1YnNjcmliZSxcbiAgICAgICAgc3RpZmZuZXNzLFxuICAgICAgICBkYW1waW5nLFxuICAgICAgICBwcmVjaXNpb25cbiAgICB9O1xuICAgIHJldHVybiBzcHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldF9pbnRlcnBvbGF0b3IoYSwgYikge1xuICAgIGlmIChhID09PSBiIHx8IGEgIT09IGEpXG4gICAgICAgIHJldHVybiAoKSA9PiBhO1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgYTtcbiAgICBpZiAodHlwZSAhPT0gdHlwZW9mIGIgfHwgQXJyYXkuaXNBcnJheShhKSAhPT0gQXJyYXkuaXNBcnJheShiKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBpbnRlcnBvbGF0ZSB2YWx1ZXMgb2YgZGlmZmVyZW50IHR5cGUnKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgY29uc3QgYXJyID0gYi5tYXAoKGJpLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0X2ludGVycG9sYXRvcihhW2ldLCBiaSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdCA9PiBhcnIubWFwKGZuID0+IGZuKHQpKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICghYSB8fCAhYilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT2JqZWN0IGNhbm5vdCBiZSBudWxsJyk7XG4gICAgICAgIGlmIChpc19kYXRlKGEpICYmIGlzX2RhdGUoYikpIHtcbiAgICAgICAgICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gYiAtIGE7XG4gICAgICAgICAgICByZXR1cm4gdCA9PiBuZXcgRGF0ZShhICsgdCAqIGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYik7XG4gICAgICAgIGNvbnN0IGludGVycG9sYXRvcnMgPSB7fTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpbnRlcnBvbGF0b3JzW2tleV0gPSBnZXRfaW50ZXJwb2xhdG9yKGFba2V5XSwgYltrZXldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBpbnRlcnBvbGF0b3JzW2tleV0odCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25zdCBkZWx0YSA9IGIgLSBhO1xuICAgICAgICByZXR1cm4gdCA9PiBhICsgdCAqIGRlbHRhO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBpbnRlcnBvbGF0ZSAke3R5cGV9IHZhbHVlc2ApO1xufVxuZnVuY3Rpb24gdHdlZW5lZCh2YWx1ZSwgZGVmYXVsdHMgPSB7fSkge1xuICAgIGNvbnN0IHN0b3JlID0gd3JpdGFibGUodmFsdWUpO1xuICAgIGxldCB0YXNrO1xuICAgIGxldCB0YXJnZXRfdmFsdWUgPSB2YWx1ZTtcbiAgICBmdW5jdGlvbiBzZXQobmV3X3ZhbHVlLCBvcHRzKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSBuZXdfdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldF92YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgbGV0IHByZXZpb3VzX3Rhc2sgPSB0YXNrO1xuICAgICAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBsaW5lYXIsIGludGVycG9sYXRlID0gZ2V0X2ludGVycG9sYXRvciB9ID0gYXNzaWduKGFzc2lnbih7fSwgZGVmYXVsdHMpLCBvcHRzKTtcbiAgICAgICAgaWYgKGR1cmF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICBpZiAocHJldmlvdXNfdGFzaykge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2suYWJvcnQoKTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c190YXNrID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IHRhcmdldF92YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBsZXQgZm47XG4gICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAobm93IDwgc3RhcnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAoIXN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICBmbiA9IGludGVycG9sYXRlKHZhbHVlLCBuZXdfdmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24odmFsdWUsIG5ld192YWx1ZSk7XG4gICAgICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldmlvdXNfdGFzaykge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2suYWJvcnQoKTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c190YXNrID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBub3cgLSBzdGFydDtcbiAgICAgICAgICAgIGlmIChlbGFwc2VkID4gZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSBuZXdfdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IGZuKGVhc2luZyhlbGFwc2VkIC8gZHVyYXRpb24pKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXNrLnByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldCxcbiAgICAgICAgdXBkYXRlOiAoZm4sIG9wdHMpID0+IHNldChmbih0YXJnZXRfdmFsdWUsIHZhbHVlKSwgb3B0cyksXG4gICAgICAgIHN1YnNjcmliZTogc3RvcmUuc3Vic2NyaWJlXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgc3ByaW5nLCB0d2VlbmVkIH07XG4iLCI8c2NyaXB0PlxubGV0IGNvbXBsZXRlZDtcbi8vcGFzcyB0byBldmVudHMgdG8gcXVpeiBjb21wb25lbnRzXG5pbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuICAgICQ6IG51bSA9IDA7XG5cdGZ1bmN0aW9uIHNheUhlbGxvKCkge1xuICAgICAgICBudW0rKztcblx0XHRkaXNwYXRjaCgnbWVzc2FnZScsIHtcblx0XHRcdG51bWJlcjogbnVtXG5cdFx0fSk7XG5cdH1cblxuXG5cblxuLy90b3RhbCB0aW1lIGZvciBjb3VudGRvd25cbmltcG9ydCB7IHR3ZWVuZWQgfSBmcm9tICdzdmVsdGUvbW90aW9uJztcbmxldCBzdGFydD0gMzAgKiA2MDtcbmxldCB0aW1lciA9IHR3ZWVuZWQoc3RhcnQpO1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKCR0aW1lciA+IDApICR0aW1lci0tO1xuICB9LCAxMDAwKTtcblxuICAkOiBtaW51dGVzID0gTWF0aC5mbG9vcigkdGltZXIgLyA2MCk7XG4gICQ6IG1pbm5hbWUgPSBtaW51dGVzID4gMSA/IFwibWluc1wiIDogXCJtaW5cIjtcbiAgJDogc2Vjb25kcyA9IE1hdGguZmxvb3IoJHRpbWVyIC0gbWludXRlcyAqIDYwKVxuXG48L3NjcmlwdD5cbjxzdHlsZT5cbiAgICBhc2lkZSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOjU1cHg7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2M3YzdjNztcbiAgICB9XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAyMHB4IDEwcHg7XG4gICAgfVxuICAgICN0aW1lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M3YzdjNztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfVxuICAgICNyZW1haW5pbmcge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHggMjBweCAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuXG4gICAgfVxuICAgICNtaW51dGVzIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwRjIwMzM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG5cbiAgICB9XG4gICAgLmJ0bi1kYXJrIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwRjIwMzM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICB9XG4gICAgI25leHQtc2tpcCB7XG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHggMjBweCAwcHg7XG4gICAgfVxuICAgIFxuPC9zdHlsZT5cbjxhc2lkZSBpZD0nc2lkZWJhcic+XG4gICAgPHNlY3Rpb24gaWQ9XCJ0aW1lclwiPlxuICAgICAgICA8c3BhbiBpZD0ncmVtYWluaW5nJz5UaW1lIHJlbWFpbmluZzo8L3NwYW4+IFxuICAgICAgICA8c3BhbiBpZD0nbWludXRlcyc+e21pbnV0ZXN9OntzZWNvbmRzfTwvc3Bhbj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gaWQ9XCJwcm9ncmVzc1wiPlxuICAgICAgICA8c2xvdD5cblxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGlkPSduZXh0LXNraXAnPiBcbiAgICAgICAgPGJ1dHRvbiBvbjpjbGljaz17c2F5SGVsbG99IGNsYXNzPSdidG4tZGFyayc+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uICBjbGFzcz0nYnRuLWRhcmsnPlNraXA8L2J1dHRvbj5cbiAgICAgICAgPCEtLTxidXR0b24gb246Y2xpY2s9e2hhbmRsZUNsaWNrTWludXN9PlNraXA8L2J1dHRvbj4tLT5cbiAgICA8L3NlY3Rpb24+XG48L2FzaWRlPiIsIjxzY3JpcHQ+XG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi9Qcm9ncmVzcy5zdmVsdGUnXG5cdGxldCBxMVN0ZXBzID0gW1xuXHR7IHN0ZXBOdW06ICcxJywgXG5cdGgyOiAnV2ViY2FtIENoYWxsZW5nZScsIFxuXHRuYW1lOiAnSW50cm9kdWN0aW9uJywgXG5cdGNsYXNzOiAnY29tcGxldGUnLFxuXHRjb3B5OiAnSWYgeW91ciBjb21wdXRlciBoYXMgYSBidWlsdC1pbiBjYW1lcmEsIGFsc28ga25vd24gYXMgYSB3ZWJjYW0sIHlvdSBzaG91bGQga25vdyB0aGF0IGl0IGNhbiBiZSB1c2VkIHRvIHNweSBvbiB5b3UuIEFuZCBubywgdGhpcyBpcyBub3QganVzdCBzY2llbmNlIGZpY3Rpb24gYXMgYSByZWNlbnQgc3VydmV5IGNvbmR1Y3RlZCBieSBIUCBzaG93cyB0aGF0IDEwJSBpbiB0aGUgVS5TLiBlaXRoZXIga25vdyBzb21lb25lIHdob3NlIHdlYmNhbSB3YXMgaGFja2VkIG9yIGhhdmUgaGFkIHRoZWlyIG93biB3ZWJjYW0gaGFja2VkLid9LFxuXHR7IHN0ZXBOdW06ICcyJywgXG5cdGgyOiAnQ292ZXIgWW91ciBXZWJjYW0nLCBcblx0bmFtZTogJ1Blcm1pc3Npb25zJywgXG5cdGNsYXNzOiAnaW5jb21wbGV0ZScsXG5cdGNvcHk6ICdQbGVhc2UgaGF2ZSB5b3VyIHdlYmNhbSBjb3ZlcmVkIGFuZCBwcm9jZWVkIHRvIG5leHQgc3RlcC4gV2Ugd2lsbCBhY2Nlc3MgdG8geW91ciB3ZWJjYW0gdG8gbWFrZSBzdXJlIHlvdSBjb3ZlcmVkIHRoZSB3ZWJjYW0gcHJvcGVybHkuIENsaWNrIOKAnFRlc3TigJ0gYnV0dG9uIHRvIHByb2NlZWQgY2hhbGxlbmdlLid9LFxuXHR7IHN0ZXBOdW06ICczJywgXG5cdGgyOiAnR3JlYXQhIEl04oCZcyBwcm9wZXJseSBjb3ZlcmVkLicsIFxuXHRuYW1lOiAnQ292ZXIgeW91ciB3ZWJjYW0nLCBcblx0Y2xhc3M6ICdpbmNvbXBsZXRlJyxcblx0Y29weTogJ1BsZWFzZSByZW1lbWJlciB0byBsZWF2ZSB5b3VyIHdlYmNhbSBjb3ZlcmVkIHdoaWxlIGl0cyBub3QgYmVpbmcgdXNlZC4gVGhpcyBjYW4gcHJldmVudC4uLid9XG5cdF1cblx0bGV0IHEgPSAwO1xuXHRmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG5cdFx0XHRcdHEgPSBldmVudC5kZXRhaWwubnVtYmVyO1xuXHRcdFx0XHRxMVN0ZXBzW3FdLmNsYXNzID0gJ2NvbXBsZXRlJztcblx0XHR9XG5cdFx0XG5cdCQ6IGhlYWRsaW5lID0gcTFTdGVwc1txXS5oMjtcblx0JDogYm9keSA9IHExU3RlcHNbcV0uY29weTtcbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+V2ViY2FtIENoYWxsZW5nZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdiBjbGFzcz0ncXVpei1ob2xkZXInPlxuPGgyPntoZWFkbGluZX08L2gyPiBcbjxwPntib2R5fTwvcD4gXG48L2Rpdj5cblx0PFByb2dyZXNzIG9uOm1lc3NhZ2U9e2hhbmRsZU1lc3NhZ2V9PlxuXHRcdDx1bD5cblx0XHR7I2VhY2ggcTFTdGVwcyBhcyBzdGVwIH1cblx0XHRcdDxsaSBjbGFzcz17c3RlcC5jbGFzc30gPntzdGVwLm5hbWV9PC9saT5cblx0XHR7L2VhY2h9XG5cdFx0PC91bD5cblx0PC9Qcm9ncmVzcz5cbjxzdHlsZT5cbiAgIC5xdWl6LWhvbGRlciB7XG5cdCAgIHdpZHRoOiA3MCU7XG4gICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xuICAgfVxuICAgLmluY29tcGxldGUge1xuICAgICAgICBjb2xvcjogI2EwYTBhMDtcbiAgICB9XG48L3N0eWxlPiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBibG9nLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocG9zdHMgPT4ge1xuXHRcdFx0cmV0dXJuIHsgcG9zdHMgfTtcblx0XHR9KTtcblx0fVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgcG9zdHM7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHR1bCB7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+QmxvZzwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+UmVjZW50IHBvc3RzPC9oMT5cblxuPHVsPlxuXHR7I2VhY2ggcG9zdHMgYXMgcG9zdH1cblx0XHQ8IS0tIHdlJ3JlIHVzaW5nIHRoZSBub24tc3RhbmRhcmQgYHJlbD1wcmVmZXRjaGAgYXR0cmlidXRlIHRvXG5cdFx0XHRcdHRlbGwgU2FwcGVyIHRvIGxvYWQgdGhlIGRhdGEgZm9yIHRoZSBwYWdlIGFzIHNvb24gYXNcblx0XHRcdFx0dGhlIHVzZXIgaG92ZXJzIG92ZXIgdGhlIGxpbmsgb3IgdGFwcyBpdCwgaW5zdGVhZCBvZlxuXHRcdFx0XHR3YWl0aW5nIGZvciB0aGUgJ2NsaWNrJyBldmVudCAtLT5cblx0XHQ8bGk+PGEgcmVsPSdwcmVmZXRjaCcgaHJlZj0nYmxvZy97cG9zdC5zbHVnfSc+e3Bvc3QudGl0bGV9PC9hPjwvbGk+XG5cdHsvZWFjaH1cbjwvdWw+IiwiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG5cdFx0Ly8gdGhlIGBzbHVnYCBwYXJhbWV0ZXIgaXMgYXZhaWxhYmxlIGJlY2F1c2Vcblx0XHQvLyB0aGlzIGZpbGUgaXMgY2FsbGVkIFtzbHVnXS5zdmVsdGVcblx0XHRjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBibG9nLyR7cGFyYW1zLnNsdWd9Lmpzb25gKTtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuXHRcdGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcblx0XHRcdHJldHVybiB7IHBvc3Q6IGRhdGEgfTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5lcnJvcihyZXMuc3RhdHVzLCBkYXRhLm1lc3NhZ2UpO1xuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgcG9zdDtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC8qXG5cdFx0QnkgZGVmYXVsdCwgQ1NTIGlzIGxvY2FsbHkgc2NvcGVkIHRvIHRoZSBjb21wb25lbnQsXG5cdFx0YW5kIGFueSB1bnVzZWQgc3R5bGVzIGFyZSBkZWFkLWNvZGUtZWxpbWluYXRlZC5cblx0XHRJbiB0aGlzIHBhZ2UsIFN2ZWx0ZSBjYW4ndCBrbm93IHdoaWNoIGVsZW1lbnRzIGFyZVxuXHRcdGdvaW5nIHRvIGFwcGVhciBpbnNpZGUgdGhlIHt7e3Bvc3QuaHRtbH19fSBibG9jayxcblx0XHRzbyB3ZSBoYXZlIHRvIHVzZSB0aGUgOmdsb2JhbCguLi4pIG1vZGlmaWVyIHRvIHRhcmdldFxuXHRcdGFsbCBlbGVtZW50cyBpbnNpZGUgLmNvbnRlbnRcblx0Ki9cblx0LmNvbnRlbnQgOmdsb2JhbChoMikge1xuXHRcdGZvbnQtc2l6ZTogMS40ZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0fVxuXG5cdC5jb250ZW50IDpnbG9iYWwocHJlKSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcblx0XHRib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMDUpO1xuXHRcdHBhZGRpbmc6IDAuNWVtO1xuXHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRvdmVyZmxvdy14OiBhdXRvO1xuXHR9XG5cblx0LmNvbnRlbnQgOmdsb2JhbChwcmUpIDpnbG9iYWwoY29kZSkge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdHBhZGRpbmc6IDA7XG5cdH1cblxuXHQuY29udGVudCA6Z2xvYmFsKHVsKSB7XG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0fVxuXG5cdC5jb250ZW50IDpnbG9iYWwobGkpIHtcblx0XHRtYXJnaW46IDAgMCAwLjVlbSAwO1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgxPntwb3N0LnRpdGxlfTwvaDE+XG5cbjxkaXYgY2xhc3M9J2NvbnRlbnQnPlxuXHR7QGh0bWwgcG9zdC5odG1sfVxuPC9kaXY+XG4iLCI8c2NyaXB0PlxuXHRleHBvcnQgbGV0IHNlZ21lbnQ7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRuYXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1mbG93OiByb3cgd3JhcDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U0YjU5O1xuXHRcdC8qYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDYyLDAsMC4xKTsqL1xuXHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0cGFkZGluZzogMCAxZW07XG5cdH1cblx0dWwge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdGNvbG9yOiAjYzdjN2M3O1xuXHR9XG5cdGltZyB7XG5cdFx0LypkaXNwbGF5OiBibG9jaztcblx0XHRmbG9hdDogbGVmdDsqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGhlaWdodDogNDBweDtcblx0fVxuXHRsaXtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdG1hcmdpbjogMHB4IDIwcHggMHB4IDIwcHg7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0fVxuXG5cdFthcmlhLWN1cnJlbnRdIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR9XG5cblx0W2FyaWEtY3VycmVudF06OmFmdGVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDFlbSk7XG5cdFx0aGVpZ2h0OiAycHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjojZTc0ZTQ1O1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdC8qYm90dG9tOiAtMXB4OyovXG5cdH1cblx0YSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRwYWRkaW5nOiAxZW0gMC41ZW07XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdG1hcmdpbjogMmVtLCAwZW07XG5cblx0fVxuPC9zdHlsZT5cblxuPG5hdj5cblx0PGltZyAgc3JjPScuL01ZRGxvZ29fc21hbGwucG5nJyBhbHQ9XCJNaW5kIHlvdXIgRGF0YSBsb2dvXCI+XG5cdDx1bCBpZD1cIm5hdmlnYXRpb25cIj5cblx0XHQ8bGk+PGEgYXJpYS1jdXJyZW50PVwie3NlZ21lbnQgPT09IHVuZGVmaW5lZCA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cIiBocmVmPVwiLlwiPmhvbWU8L2E+PC9saT5cblx0XHQ8bGk+PGEgYXJpYS1jdXJyZW50PVwie3NlZ21lbnQgPT09ICdxdWl6JyA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cIiBocmVmPVwicXVpelwiPnF1aXo8L2E+PC9saT5cblx0XHQ8bGk+PGEgYXJpYS1jdXJyZW50PVwie3NlZ21lbnQgPT09ICdhYm91dCcgPyAncGFnZScgOiB1bmRlZmluZWR9XCIgaHJlZj1cImFib3V0XCI+YWJvdXQ8L2E+PC9saT5cblx0XHQ8bGk+PGEgYXJpYS1jdXJyZW50PVwie3NlZ21lbnQgPT09ICdyZXNvdXJjZXMnID8gJ3BhZ2UnIDogdW5kZWZpbmVkfVwiIGhyZWY9XCJyZXNvdXJjZXNcIj5yZXNvdXJjZXM8L2E+PC9saT5cblxuXHRcdDwhLS0gZm9yIHRoZSBibG9nIGxpbmssIHdlJ3JlIHVzaW5nIHJlbD1wcmVmZXRjaCBzbyB0aGF0IFNhcHBlciBwcmVmZXRjaGVzXG5cdFx0ICAgICB0aGUgYmxvZyBkYXRhIHdoZW4gd2UgaG92ZXIgb3ZlciB0aGUgbGluayBvciB0YXAgaXQgb24gYSB0b3VjaHNjcmVlbiAtLT5cblx0PCEtLVx0PGxpPjxhIHJlbD1wcmVmZXRjaCBhcmlhLWN1cnJlbnQ9XCJ7c2VnbWVudCA9PT0gJ2Jsb2cnID8gJ3BhZ2UnIDogdW5kZWZpbmVkfVwiIGhyZWY9XCJibG9nXCI+YmxvZzwvYT48L2xpPiAtLT5cblx0PC91bD5cbjwvbmF2PlxuIiwiPHNjcmlwdD5cblx0aW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdi5zdmVsdGUnO1xuXHRleHBvcnQgbGV0IHNlZ21lbnQ7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRtYWluIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0fVxuPC9zdHlsZT5cblxuPE5hdiB7c2VnbWVudH0vPlxuXG48bWFpbj5cblx0PHNsb3Q+PC9zbG90PlxuPC9tYWluPlxuPCEtLTxQcm9ncmVzcyAvPi0tPiIsIjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgc3RhdHVzO1xuXHRleHBvcnQgbGV0IGVycm9yO1xuXG5cdGNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0aDEsIHAge1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG5cblx0aDEge1xuXHRcdGZvbnQtc2l6ZTogMi44ZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRtYXJnaW46IDAgMCAwLjVlbSAwO1xuXHR9XG5cblx0cCB7XG5cdFx0bWFyZ2luOiAxZW0gYXV0bztcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHRcdGgxIHtcblx0XHRcdGZvbnQtc2l6ZTogNGVtO1xuXHRcdH1cblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+e3N0YXR1c308L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgxPntzdGF0dXN9PC9oMT5cblxuPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuXG57I2lmIGRldiAmJiBlcnJvci5zdGFja31cblx0PHByZT57ZXJyb3Iuc3RhY2t9PC9wcmU+XG57L2lmfVxuIiwiLy8gVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBieSBTYXBwZXIg4oCUIGRvIG5vdCBlZGl0IGl0IVxuaW1wb3J0ICogYXMgcm91dGVfMCBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL2Jsb2cvaW5kZXguanNvbi5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfMSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL2Jsb2cvW3NsdWddLmpzb24uanNcIjtcbmltcG9ydCBjb21wb25lbnRfMCBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL2luZGV4LnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvcmVzb3VyY2VzLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8yIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvcXVpem1haW4uc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzMgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9hYm91dC5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfNCwgeyBwcmVsb2FkIGFzIHByZWxvYWRfNCB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfNSwgeyBwcmVsb2FkIGFzIHByZWxvYWRfNSB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvYmxvZy9bc2x1Z10uc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzYgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9xdWl6L1Byb2dyZXNzLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF83IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvcXVpei9xMC5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfOCBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3F1aXovcTEuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzkgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9xdWl6L3EyLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xMCBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3F1aXovcTMuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzExIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvcXVpei9xNC5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMTIgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9xdWl6L3E1LnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xMyBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3F1aXovcTYuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzE0IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvcXVpei9xNy5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMTUgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9xdWl6L3E4LnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xNiBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3F1aXovcTkuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzE3IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvcXVpei5zdmVsdGVcIjtcbmltcG9ydCByb290IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvX2xheW91dC5zdmVsdGVcIjtcbmltcG9ydCBlcnJvciBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL19lcnJvci5zdmVsdGVcIjtcblxuY29uc3QgZCA9IGRlY29kZVVSSUNvbXBvbmVudDtcblxuZXhwb3J0IGNvbnN0IG1hbmlmZXN0ID0ge1xuXHRzZXJ2ZXJfcm91dGVzOiBbXG5cdFx0e1xuXHRcdFx0Ly8gYmxvZy9pbmRleC5qc29uLmpzXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL2Jsb2dcXC5qc29uJC8sXG5cdFx0XHRoYW5kbGVyczogcm91dGVfMCxcblx0XHRcdHBhcmFtczogKCkgPT4gKHt9KVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBibG9nL1tzbHVnXS5qc29uLmpzXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL2Jsb2dcXC8oW15cXC9dKz8pXFwuanNvbiQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzEsXG5cdFx0XHRwYXJhbXM6IG1hdGNoID0+ICh7IHNsdWc6IGQobWF0Y2hbMV0pIH0pXG5cdFx0fVxuXHRdLFxuXG5cdHBhZ2VzOiBbXG5cdFx0e1xuXHRcdFx0Ly8gaW5kZXguc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcLyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBcImluZGV4XCIsIGZpbGU6IFwiaW5kZXguc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzAgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyByZXNvdXJjZXMuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Jlc291cmNlc1xcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdHsgbmFtZTogXCJyZXNvdXJjZXNcIiwgZmlsZTogXCJyZXNvdXJjZXMuc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzEgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBxdWl6bWFpbi5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvcXVpem1haW5cXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwicXVpem1haW5cIiwgZmlsZTogXCJxdWl6bWFpbi5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMiB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIGFib3V0LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9hYm91dFxcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdHsgbmFtZTogXCJhYm91dFwiLCBmaWxlOiBcImFib3V0LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8zIH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gYmxvZy9pbmRleC5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvYmxvZ1xcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdHsgbmFtZTogXCJibG9nXCIsIGZpbGU6IFwiYmxvZy9pbmRleC5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfNCwgcHJlbG9hZDogcHJlbG9hZF80IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gYmxvZy9bc2x1Z10uc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL2Jsb2dcXC8oW15cXC9dKz8pXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcImJsb2dfJHNsdWdcIiwgZmlsZTogXCJibG9nL1tzbHVnXS5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfNSwgcHJlbG9hZDogcHJlbG9hZF81LCBwYXJhbXM6IG1hdGNoID0+ICh7IHNsdWc6IGQobWF0Y2hbMV0pIH0pIH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gcXVpei9Qcm9ncmVzcy5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvcXVpelxcL1Byb2dyZXNzXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInF1aXpfUHJvZ3Jlc3NcIiwgZmlsZTogXCJxdWl6L1Byb2dyZXNzLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF82IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gcXVpei9xMC5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvcXVpelxcL3EwXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInF1aXpfcTBcIiwgZmlsZTogXCJxdWl6L3EwLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF83IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gcXVpei9xMS5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvcXVpelxcL3ExXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInF1aXpfcTFcIiwgZmlsZTogXCJxdWl6L3ExLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF84IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gcXVpei9xMi5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvcXVpelxcL3EyXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInF1aXpfcTJcIiwgZmlsZTogXCJxdWl6L3EyLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF85IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gcXVpei9xMy5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvcXVpelxcL3EzXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInF1aXpfcTNcIiwgZmlsZTogXCJxdWl6L3EzLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8xMCB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHF1aXovcTQuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3F1aXpcXC9xNFxcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJxdWl6X3E0XCIsIGZpbGU6IFwicXVpei9xNC5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTEgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBxdWl6L3E1LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9xdWl6XFwvcTVcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR7IG5hbWU6IFwicXVpel9xNVwiLCBmaWxlOiBcInF1aXovcTUuc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzEyIH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gcXVpei9xNi5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvcXVpelxcL3E2XFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInF1aXpfcTZcIiwgZmlsZTogXCJxdWl6L3E2LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8xMyB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHF1aXovcTcuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3F1aXpcXC9xN1xcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJxdWl6X3E3XCIsIGZpbGU6IFwicXVpei9xNy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMTQgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBxdWl6L3E4LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9xdWl6XFwvcThcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR7IG5hbWU6IFwicXVpel9xOFwiLCBmaWxlOiBcInF1aXovcTguc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzE1IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gcXVpei9xOS5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvcXVpelxcL3E5XFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInF1aXpfcTlcIiwgZmlsZTogXCJxdWl6L3E5LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8xNiB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHF1aXouc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3F1aXpcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwicXVpelwiLCBmaWxlOiBcInF1aXouc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzE3IH1cblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cblx0cm9vdCxcblx0cm9vdF9wcmVsb2FkOiAoKSA9PiB7fSxcblx0ZXJyb3Jcbn07XG5cbmV4cG9ydCBjb25zdCBidWlsZF9kaXIgPSBcIl9fc2FwcGVyX18vZGV2XCI7XG5cbmV4cG9ydCBjb25zdCBzcmNfZGlyID0gXCJzcmNcIjtcblxuZXhwb3J0IGNvbnN0IGRldiA9IHRydWU7IiwiaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgQ09OVEVYVF9LRVkgPSB7fTtcblxuZXhwb3J0IGNvbnN0IHByZWxvYWQgPSAoKSA9PiAoe30pOyIsIjwhLS0gVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBieSBTYXBwZXIg4oCUIGRvIG5vdCBlZGl0IGl0ISAtLT5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IHNldENvbnRleHQsIGFmdGVyVXBkYXRlIH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IHsgQ09OVEVYVF9LRVkgfSBmcm9tICcuL3NoYXJlZCc7XG5cdGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vcm91dGVzL19sYXlvdXQuc3ZlbHRlJztcblx0aW1wb3J0IEVycm9yIGZyb20gJy4uLy4uLy4uL3JvdXRlcy9fZXJyb3Iuc3ZlbHRlJztcblxuXHRleHBvcnQgbGV0IHN0b3Jlcztcblx0ZXhwb3J0IGxldCBlcnJvcjtcblx0ZXhwb3J0IGxldCBzdGF0dXM7XG5cdGV4cG9ydCBsZXQgc2VnbWVudHM7XG5cdGV4cG9ydCBsZXQgbGV2ZWwwO1xuXHRleHBvcnQgbGV0IGxldmVsMSA9IG51bGw7XG5cdGV4cG9ydCBsZXQgbm90aWZ5O1xuXG5cdGFmdGVyVXBkYXRlKG5vdGlmeSk7XG5cdHNldENvbnRleHQoQ09OVEVYVF9LRVksIHN0b3Jlcyk7XG48L3NjcmlwdD5cblxuPExheW91dCBzZWdtZW50PVwie3NlZ21lbnRzWzBdfVwiIHsuLi5sZXZlbDAucHJvcHN9PlxuXHR7I2lmIGVycm9yfVxuXHRcdDxFcnJvciB7ZXJyb3J9IHtzdGF0dXN9Lz5cblx0ezplbHNlfVxuXHRcdDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9XCJ7bGV2ZWwxLmNvbXBvbmVudH1cIiB7Li4ubGV2ZWwxLnByb3BzfS8+XG5cdHsvaWZ9XG48L0xheW91dD4iLCJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZXYsIGJ1aWxkX2Rpciwgc3JjX2RpciwgbWFuaWZlc3QgfSBmcm9tICcuL2ludGVybmFsL21hbmlmZXN0LXNlcnZlcic7XG5pbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5pbXBvcnQgU3RyZWFtIGZyb20gJ3N0cmVhbSc7XG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCBodHRwcyBmcm9tICdodHRwcyc7XG5pbXBvcnQgemxpYiBmcm9tICd6bGliJztcbmltcG9ydCBBcHAgZnJvbSAnLi9pbnRlcm5hbC9BcHAuc3ZlbHRlJztcblxuLyoqXG4gKiBAcGFyYW0gdHlwZU1hcCBbT2JqZWN0XSBNYXAgb2YgTUlNRSB0eXBlIC0+IEFycmF5W2V4dGVuc2lvbnNdXG4gKiBAcGFyYW0gLi4uXG4gKi9cbmZ1bmN0aW9uIE1pbWUoKSB7XG4gIHRoaXMuX3R5cGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fZXh0ZW5zaW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLmRlZmluZShhcmd1bWVudHNbaV0pO1xuICB9XG5cbiAgdGhpcy5kZWZpbmUgPSB0aGlzLmRlZmluZS5iaW5kKHRoaXMpO1xuICB0aGlzLmdldFR5cGUgPSB0aGlzLmdldFR5cGUuYmluZCh0aGlzKTtcbiAgdGhpcy5nZXRFeHRlbnNpb24gPSB0aGlzLmdldEV4dGVuc2lvbi5iaW5kKHRoaXMpO1xufVxuXG4vKipcbiAqIERlZmluZSBtaW1ldHlwZSAtPiBleHRlbnNpb24gbWFwcGluZ3MuICBFYWNoIGtleSBpcyBhIG1pbWUtdHlwZSB0aGF0IG1hcHNcbiAqIHRvIGFuIGFycmF5IG9mIGV4dGVuc2lvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSB0eXBlLiAgVGhlIGZpcnN0IGV4dGVuc2lvbiBpc1xuICogdXNlZCBhcyB0aGUgZGVmYXVsdCBleHRlbnNpb24gZm9yIHRoZSB0eXBlLlxuICpcbiAqIGUuZy4gbWltZS5kZWZpbmUoeydhdWRpby9vZ2cnLCBbJ29nYScsICdvZ2cnLCAnc3B4J119KTtcbiAqXG4gKiBJZiBhIHR5cGUgZGVjbGFyZXMgYW4gZXh0ZW5zaW9uIHRoYXQgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLCBhbiBlcnJvciB3aWxsXG4gKiBiZSB0aHJvd24uICBUbyBzdXBwcmVzcyB0aGlzIGVycm9yIGFuZCBmb3JjZSB0aGUgZXh0ZW5zaW9uIHRvIGJlIGFzc29jaWF0ZWRcbiAqIHdpdGggdGhlIG5ldyB0eXBlLCBwYXNzIGBmb3JjZWA9dHJ1ZS4gIEFsdGVybmF0aXZlbHksIHlvdSBtYXkgcHJlZml4IHRoZVxuICogZXh0ZW5zaW9uIHdpdGggXCIqXCIgdG8gbWFwIHRoZSB0eXBlIHRvIGV4dGVuc2lvbiwgd2l0aG91dCBtYXBwaW5nIHRoZVxuICogZXh0ZW5zaW9uIHRvIHRoZSB0eXBlLlxuICpcbiAqIGUuZy4gbWltZS5kZWZpbmUoeydhdWRpby93YXYnLCBbJ3dhdiddfSwgeydhdWRpby94LXdhdicsIFsnKndhdiddfSk7XG4gKlxuICpcbiAqIEBwYXJhbSBtYXAgKE9iamVjdCkgdHlwZSBkZWZpbml0aW9uc1xuICogQHBhcmFtIGZvcmNlIChCb29sZWFuKSBpZiB0cnVlLCBmb3JjZSBvdmVycmlkaW5nIG9mIGV4aXN0aW5nIGRlZmluaXRpb25zXG4gKi9cbk1pbWUucHJvdG90eXBlLmRlZmluZSA9IGZ1bmN0aW9uKHR5cGVNYXAsIGZvcmNlKSB7XG4gIGZvciAodmFyIHR5cGUgaW4gdHlwZU1hcCkge1xuICAgIHZhciBleHRlbnNpb25zID0gdHlwZU1hcFt0eXBlXS5tYXAoZnVuY3Rpb24odCkge3JldHVybiB0LnRvTG93ZXJDYXNlKCl9KTtcbiAgICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZXh0ID0gZXh0ZW5zaW9uc1tpXTtcblxuICAgICAgLy8gJyonIHByZWZpeCA9IG5vdCB0aGUgcHJlZmVycmVkIHR5cGUgZm9yIHRoaXMgZXh0ZW5zaW9uLiAgU28gZml4dXAgdGhlXG4gICAgICAvLyBleHRlbnNpb24sIGFuZCBza2lwIGl0LlxuICAgICAgaWYgKGV4dFswXSA9PSAnKicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9yY2UgJiYgKGV4dCBpbiB0aGlzLl90eXBlcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdBdHRlbXB0IHRvIGNoYW5nZSBtYXBwaW5nIGZvciBcIicgKyBleHQgK1xuICAgICAgICAgICdcIiBleHRlbnNpb24gZnJvbSBcIicgKyB0aGlzLl90eXBlc1tleHRdICsgJ1wiIHRvIFwiJyArIHR5cGUgK1xuICAgICAgICAgICdcIi4gUGFzcyBgZm9yY2U9dHJ1ZWAgdG8gYWxsb3cgdGhpcywgb3RoZXJ3aXNlIHJlbW92ZSBcIicgKyBleHQgK1xuICAgICAgICAgICdcIiBmcm9tIHRoZSBsaXN0IG9mIGV4dGVuc2lvbnMgZm9yIFwiJyArIHR5cGUgKyAnXCIuJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90eXBlc1tleHRdID0gdHlwZTtcbiAgICB9XG5cbiAgICAvLyBVc2UgZmlyc3QgZXh0ZW5zaW9uIGFzIGRlZmF1bHRcbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuX2V4dGVuc2lvbnNbdHlwZV0pIHtcbiAgICAgIHZhciBleHQgPSBleHRlbnNpb25zWzBdO1xuICAgICAgdGhpcy5fZXh0ZW5zaW9uc1t0eXBlXSA9IChleHRbMF0gIT0gJyonKSA/IGV4dCA6IGV4dC5zdWJzdHIoMSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIExvb2t1cCBhIG1pbWUgdHlwZSBiYXNlZCBvbiBleHRlbnNpb25cbiAqL1xuTWltZS5wcm90b3R5cGUuZ2V0VHlwZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcGF0aCA9IFN0cmluZyhwYXRoKTtcbiAgdmFyIGxhc3QgPSBwYXRoLnJlcGxhY2UoL14uKlsvXFxcXF0vLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgdmFyIGV4dCA9IGxhc3QucmVwbGFjZSgvXi4qXFwuLywgJycpLnRvTG93ZXJDYXNlKCk7XG5cbiAgdmFyIGhhc1BhdGggPSBsYXN0Lmxlbmd0aCA8IHBhdGgubGVuZ3RoO1xuICB2YXIgaGFzRG90ID0gZXh0Lmxlbmd0aCA8IGxhc3QubGVuZ3RoIC0gMTtcblxuICByZXR1cm4gKGhhc0RvdCB8fCAhaGFzUGF0aCkgJiYgdGhpcy5fdHlwZXNbZXh0XSB8fCBudWxsO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gZmlsZSBleHRlbnNpb24gYXNzb2NpYXRlZCB3aXRoIGEgbWltZSB0eXBlXG4gKi9cbk1pbWUucHJvdG90eXBlLmdldEV4dGVuc2lvbiA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdHlwZSA9IC9eXFxzKihbXjtcXHNdKikvLnRlc3QodHlwZSkgJiYgUmVnRXhwLiQxO1xuICByZXR1cm4gdHlwZSAmJiB0aGlzLl9leHRlbnNpb25zW3R5cGUudG9Mb3dlckNhc2UoKV0gfHwgbnVsbDtcbn07XG5cbnZhciBNaW1lXzEgPSBNaW1lO1xuXG52YXIgc3RhbmRhcmQgPSB7XCJhcHBsaWNhdGlvbi9hbmRyZXctaW5zZXRcIjpbXCJlelwiXSxcImFwcGxpY2F0aW9uL2FwcGxpeHdhcmVcIjpbXCJhd1wiXSxcImFwcGxpY2F0aW9uL2F0b20reG1sXCI6W1wiYXRvbVwiXSxcImFwcGxpY2F0aW9uL2F0b21jYXQreG1sXCI6W1wiYXRvbWNhdFwiXSxcImFwcGxpY2F0aW9uL2F0b21zdmMreG1sXCI6W1wiYXRvbXN2Y1wiXSxcImFwcGxpY2F0aW9uL2Jkb2NcIjpbXCJiZG9jXCJdLFwiYXBwbGljYXRpb24vY2N4bWwreG1sXCI6W1wiY2N4bWxcIl0sXCJhcHBsaWNhdGlvbi9jZG1pLWNhcGFiaWxpdHlcIjpbXCJjZG1pYVwiXSxcImFwcGxpY2F0aW9uL2NkbWktY29udGFpbmVyXCI6W1wiY2RtaWNcIl0sXCJhcHBsaWNhdGlvbi9jZG1pLWRvbWFpblwiOltcImNkbWlkXCJdLFwiYXBwbGljYXRpb24vY2RtaS1vYmplY3RcIjpbXCJjZG1pb1wiXSxcImFwcGxpY2F0aW9uL2NkbWktcXVldWVcIjpbXCJjZG1pcVwiXSxcImFwcGxpY2F0aW9uL2N1LXNlZW1lXCI6W1wiY3VcIl0sXCJhcHBsaWNhdGlvbi9kYXNoK3htbFwiOltcIm1wZFwiXSxcImFwcGxpY2F0aW9uL2Rhdm1vdW50K3htbFwiOltcImRhdm1vdW50XCJdLFwiYXBwbGljYXRpb24vZG9jYm9vayt4bWxcIjpbXCJkYmtcIl0sXCJhcHBsaWNhdGlvbi9kc3NjK2RlclwiOltcImRzc2NcIl0sXCJhcHBsaWNhdGlvbi9kc3NjK3htbFwiOltcInhkc3NjXCJdLFwiYXBwbGljYXRpb24vZWNtYXNjcmlwdFwiOltcImVjbWFcIixcImVzXCJdLFwiYXBwbGljYXRpb24vZW1tYSt4bWxcIjpbXCJlbW1hXCJdLFwiYXBwbGljYXRpb24vZXB1Yit6aXBcIjpbXCJlcHViXCJdLFwiYXBwbGljYXRpb24vZXhpXCI6W1wiZXhpXCJdLFwiYXBwbGljYXRpb24vZm9udC10ZHBmclwiOltcInBmclwiXSxcImFwcGxpY2F0aW9uL2dlbytqc29uXCI6W1wiZ2VvanNvblwiXSxcImFwcGxpY2F0aW9uL2dtbCt4bWxcIjpbXCJnbWxcIl0sXCJhcHBsaWNhdGlvbi9ncHgreG1sXCI6W1wiZ3B4XCJdLFwiYXBwbGljYXRpb24vZ3hmXCI6W1wiZ3hmXCJdLFwiYXBwbGljYXRpb24vZ3ppcFwiOltcImd6XCJdLFwiYXBwbGljYXRpb24vaGpzb25cIjpbXCJoanNvblwiXSxcImFwcGxpY2F0aW9uL2h5cGVyc3R1ZGlvXCI6W1wic3RrXCJdLFwiYXBwbGljYXRpb24vaW5rbWwreG1sXCI6W1wiaW5rXCIsXCJpbmttbFwiXSxcImFwcGxpY2F0aW9uL2lwZml4XCI6W1wiaXBmaXhcIl0sXCJhcHBsaWNhdGlvbi9qYXZhLWFyY2hpdmVcIjpbXCJqYXJcIixcIndhclwiLFwiZWFyXCJdLFwiYXBwbGljYXRpb24vamF2YS1zZXJpYWxpemVkLW9iamVjdFwiOltcInNlclwiXSxcImFwcGxpY2F0aW9uL2phdmEtdm1cIjpbXCJjbGFzc1wiXSxcImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIjpbXCJqc1wiLFwibWpzXCJdLFwiYXBwbGljYXRpb24vanNvblwiOltcImpzb25cIixcIm1hcFwiXSxcImFwcGxpY2F0aW9uL2pzb241XCI6W1wianNvbjVcIl0sXCJhcHBsaWNhdGlvbi9qc29ubWwranNvblwiOltcImpzb25tbFwiXSxcImFwcGxpY2F0aW9uL2xkK2pzb25cIjpbXCJqc29ubGRcIl0sXCJhcHBsaWNhdGlvbi9sb3N0K3htbFwiOltcImxvc3R4bWxcIl0sXCJhcHBsaWNhdGlvbi9tYWMtYmluaGV4NDBcIjpbXCJocXhcIl0sXCJhcHBsaWNhdGlvbi9tYWMtY29tcGFjdHByb1wiOltcImNwdFwiXSxcImFwcGxpY2F0aW9uL21hZHMreG1sXCI6W1wibWFkc1wiXSxcImFwcGxpY2F0aW9uL21hbmlmZXN0K2pzb25cIjpbXCJ3ZWJtYW5pZmVzdFwiXSxcImFwcGxpY2F0aW9uL21hcmNcIjpbXCJtcmNcIl0sXCJhcHBsaWNhdGlvbi9tYXJjeG1sK3htbFwiOltcIm1yY3hcIl0sXCJhcHBsaWNhdGlvbi9tYXRoZW1hdGljYVwiOltcIm1hXCIsXCJuYlwiLFwibWJcIl0sXCJhcHBsaWNhdGlvbi9tYXRobWwreG1sXCI6W1wibWF0aG1sXCJdLFwiYXBwbGljYXRpb24vbWJveFwiOltcIm1ib3hcIl0sXCJhcHBsaWNhdGlvbi9tZWRpYXNlcnZlcmNvbnRyb2wreG1sXCI6W1wibXNjbWxcIl0sXCJhcHBsaWNhdGlvbi9tZXRhbGluayt4bWxcIjpbXCJtZXRhbGlua1wiXSxcImFwcGxpY2F0aW9uL21ldGFsaW5rNCt4bWxcIjpbXCJtZXRhNFwiXSxcImFwcGxpY2F0aW9uL21ldHMreG1sXCI6W1wibWV0c1wiXSxcImFwcGxpY2F0aW9uL21vZHMreG1sXCI6W1wibW9kc1wiXSxcImFwcGxpY2F0aW9uL21wMjFcIjpbXCJtMjFcIixcIm1wMjFcIl0sXCJhcHBsaWNhdGlvbi9tcDRcIjpbXCJtcDRzXCIsXCJtNHBcIl0sXCJhcHBsaWNhdGlvbi9tc3dvcmRcIjpbXCJkb2NcIixcImRvdFwiXSxcImFwcGxpY2F0aW9uL214ZlwiOltcIm14ZlwiXSxcImFwcGxpY2F0aW9uL24tcXVhZHNcIjpbXCJucVwiXSxcImFwcGxpY2F0aW9uL24tdHJpcGxlc1wiOltcIm50XCJdLFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI6W1wiYmluXCIsXCJkbXNcIixcImxyZlwiLFwibWFyXCIsXCJzb1wiLFwiZGlzdFwiLFwiZGlzdHpcIixcInBrZ1wiLFwiYnBrXCIsXCJkdW1wXCIsXCJlbGNcIixcImRlcGxveVwiLFwiZXhlXCIsXCJkbGxcIixcImRlYlwiLFwiZG1nXCIsXCJpc29cIixcImltZ1wiLFwibXNpXCIsXCJtc3BcIixcIm1zbVwiLFwiYnVmZmVyXCJdLFwiYXBwbGljYXRpb24vb2RhXCI6W1wib2RhXCJdLFwiYXBwbGljYXRpb24vb2VicHMtcGFja2FnZSt4bWxcIjpbXCJvcGZcIl0sXCJhcHBsaWNhdGlvbi9vZ2dcIjpbXCJvZ3hcIl0sXCJhcHBsaWNhdGlvbi9vbWRvYyt4bWxcIjpbXCJvbWRvY1wiXSxcImFwcGxpY2F0aW9uL29uZW5vdGVcIjpbXCJvbmV0b2NcIixcIm9uZXRvYzJcIixcIm9uZXRtcFwiLFwib25lcGtnXCJdLFwiYXBwbGljYXRpb24vb3hwc1wiOltcIm94cHNcIl0sXCJhcHBsaWNhdGlvbi9wYXRjaC1vcHMtZXJyb3IreG1sXCI6W1wieGVyXCJdLFwiYXBwbGljYXRpb24vcGRmXCI6W1wicGRmXCJdLFwiYXBwbGljYXRpb24vcGdwLWVuY3J5cHRlZFwiOltcInBncFwiXSxcImFwcGxpY2F0aW9uL3BncC1zaWduYXR1cmVcIjpbXCJhc2NcIixcInNpZ1wiXSxcImFwcGxpY2F0aW9uL3BpY3MtcnVsZXNcIjpbXCJwcmZcIl0sXCJhcHBsaWNhdGlvbi9wa2NzMTBcIjpbXCJwMTBcIl0sXCJhcHBsaWNhdGlvbi9wa2NzNy1taW1lXCI6W1wicDdtXCIsXCJwN2NcIl0sXCJhcHBsaWNhdGlvbi9wa2NzNy1zaWduYXR1cmVcIjpbXCJwN3NcIl0sXCJhcHBsaWNhdGlvbi9wa2NzOFwiOltcInA4XCJdLFwiYXBwbGljYXRpb24vcGtpeC1hdHRyLWNlcnRcIjpbXCJhY1wiXSxcImFwcGxpY2F0aW9uL3BraXgtY2VydFwiOltcImNlclwiXSxcImFwcGxpY2F0aW9uL3BraXgtY3JsXCI6W1wiY3JsXCJdLFwiYXBwbGljYXRpb24vcGtpeC1wa2lwYXRoXCI6W1wicGtpcGF0aFwiXSxcImFwcGxpY2F0aW9uL3BraXhjbXBcIjpbXCJwa2lcIl0sXCJhcHBsaWNhdGlvbi9wbHMreG1sXCI6W1wicGxzXCJdLFwiYXBwbGljYXRpb24vcG9zdHNjcmlwdFwiOltcImFpXCIsXCJlcHNcIixcInBzXCJdLFwiYXBwbGljYXRpb24vcHNrYyt4bWxcIjpbXCJwc2tjeG1sXCJdLFwiYXBwbGljYXRpb24vcmFtbCt5YW1sXCI6W1wicmFtbFwiXSxcImFwcGxpY2F0aW9uL3JkZit4bWxcIjpbXCJyZGZcIixcIm93bFwiXSxcImFwcGxpY2F0aW9uL3JlZ2luZm8reG1sXCI6W1wicmlmXCJdLFwiYXBwbGljYXRpb24vcmVsYXgtbmctY29tcGFjdC1zeW50YXhcIjpbXCJybmNcIl0sXCJhcHBsaWNhdGlvbi9yZXNvdXJjZS1saXN0cyt4bWxcIjpbXCJybFwiXSxcImFwcGxpY2F0aW9uL3Jlc291cmNlLWxpc3RzLWRpZmYreG1sXCI6W1wicmxkXCJdLFwiYXBwbGljYXRpb24vcmxzLXNlcnZpY2VzK3htbFwiOltcInJzXCJdLFwiYXBwbGljYXRpb24vcnBraS1naG9zdGJ1c3RlcnNcIjpbXCJnYnJcIl0sXCJhcHBsaWNhdGlvbi9ycGtpLW1hbmlmZXN0XCI6W1wibWZ0XCJdLFwiYXBwbGljYXRpb24vcnBraS1yb2FcIjpbXCJyb2FcIl0sXCJhcHBsaWNhdGlvbi9yc2QreG1sXCI6W1wicnNkXCJdLFwiYXBwbGljYXRpb24vcnNzK3htbFwiOltcInJzc1wiXSxcImFwcGxpY2F0aW9uL3J0ZlwiOltcInJ0ZlwiXSxcImFwcGxpY2F0aW9uL3NibWwreG1sXCI6W1wic2JtbFwiXSxcImFwcGxpY2F0aW9uL3NjdnAtY3YtcmVxdWVzdFwiOltcInNjcVwiXSxcImFwcGxpY2F0aW9uL3NjdnAtY3YtcmVzcG9uc2VcIjpbXCJzY3NcIl0sXCJhcHBsaWNhdGlvbi9zY3ZwLXZwLXJlcXVlc3RcIjpbXCJzcHFcIl0sXCJhcHBsaWNhdGlvbi9zY3ZwLXZwLXJlc3BvbnNlXCI6W1wic3BwXCJdLFwiYXBwbGljYXRpb24vc2RwXCI6W1wic2RwXCJdLFwiYXBwbGljYXRpb24vc2V0LXBheW1lbnQtaW5pdGlhdGlvblwiOltcInNldHBheVwiXSxcImFwcGxpY2F0aW9uL3NldC1yZWdpc3RyYXRpb24taW5pdGlhdGlvblwiOltcInNldHJlZ1wiXSxcImFwcGxpY2F0aW9uL3NoZit4bWxcIjpbXCJzaGZcIl0sXCJhcHBsaWNhdGlvbi9zaWV2ZVwiOltcInNpdlwiLFwic2lldmVcIl0sXCJhcHBsaWNhdGlvbi9zbWlsK3htbFwiOltcInNtaVwiLFwic21pbFwiXSxcImFwcGxpY2F0aW9uL3NwYXJxbC1xdWVyeVwiOltcInJxXCJdLFwiYXBwbGljYXRpb24vc3BhcnFsLXJlc3VsdHMreG1sXCI6W1wic3J4XCJdLFwiYXBwbGljYXRpb24vc3Jnc1wiOltcImdyYW1cIl0sXCJhcHBsaWNhdGlvbi9zcmdzK3htbFwiOltcImdyeG1sXCJdLFwiYXBwbGljYXRpb24vc3J1K3htbFwiOltcInNydVwiXSxcImFwcGxpY2F0aW9uL3NzZGwreG1sXCI6W1wic3NkbFwiXSxcImFwcGxpY2F0aW9uL3NzbWwreG1sXCI6W1wic3NtbFwiXSxcImFwcGxpY2F0aW9uL3RlaSt4bWxcIjpbXCJ0ZWlcIixcInRlaWNvcnB1c1wiXSxcImFwcGxpY2F0aW9uL3RocmF1ZCt4bWxcIjpbXCJ0ZmlcIl0sXCJhcHBsaWNhdGlvbi90aW1lc3RhbXBlZC1kYXRhXCI6W1widHNkXCJdLFwiYXBwbGljYXRpb24vdm9pY2V4bWwreG1sXCI6W1widnhtbFwiXSxcImFwcGxpY2F0aW9uL3dhc21cIjpbXCJ3YXNtXCJdLFwiYXBwbGljYXRpb24vd2lkZ2V0XCI6W1wid2d0XCJdLFwiYXBwbGljYXRpb24vd2luaGxwXCI6W1wiaGxwXCJdLFwiYXBwbGljYXRpb24vd3NkbCt4bWxcIjpbXCJ3c2RsXCJdLFwiYXBwbGljYXRpb24vd3Nwb2xpY3kreG1sXCI6W1wid3Nwb2xpY3lcIl0sXCJhcHBsaWNhdGlvbi94YW1sK3htbFwiOltcInhhbWxcIl0sXCJhcHBsaWNhdGlvbi94Y2FwLWRpZmYreG1sXCI6W1wieGRmXCJdLFwiYXBwbGljYXRpb24veGVuYyt4bWxcIjpbXCJ4ZW5jXCJdLFwiYXBwbGljYXRpb24veGh0bWwreG1sXCI6W1wieGh0bWxcIixcInhodFwiXSxcImFwcGxpY2F0aW9uL3htbFwiOltcInhtbFwiLFwieHNsXCIsXCJ4c2RcIixcInJuZ1wiXSxcImFwcGxpY2F0aW9uL3htbC1kdGRcIjpbXCJkdGRcIl0sXCJhcHBsaWNhdGlvbi94b3AreG1sXCI6W1wieG9wXCJdLFwiYXBwbGljYXRpb24veHByb2MreG1sXCI6W1wieHBsXCJdLFwiYXBwbGljYXRpb24veHNsdCt4bWxcIjpbXCJ4c2x0XCJdLFwiYXBwbGljYXRpb24veHNwZit4bWxcIjpbXCJ4c3BmXCJdLFwiYXBwbGljYXRpb24veHYreG1sXCI6W1wibXhtbFwiLFwieGh2bWxcIixcInh2bWxcIixcInh2bVwiXSxcImFwcGxpY2F0aW9uL3lhbmdcIjpbXCJ5YW5nXCJdLFwiYXBwbGljYXRpb24veWluK3htbFwiOltcInlpblwiXSxcImFwcGxpY2F0aW9uL3ppcFwiOltcInppcFwiXSxcImF1ZGlvLzNncHBcIjpbXCIqM2dwcFwiXSxcImF1ZGlvL2FkcGNtXCI6W1wiYWRwXCJdLFwiYXVkaW8vYmFzaWNcIjpbXCJhdVwiLFwic25kXCJdLFwiYXVkaW8vbWlkaVwiOltcIm1pZFwiLFwibWlkaVwiLFwia2FyXCIsXCJybWlcIl0sXCJhdWRpby9tcDNcIjpbXCIqbXAzXCJdLFwiYXVkaW8vbXA0XCI6W1wibTRhXCIsXCJtcDRhXCJdLFwiYXVkaW8vbXBlZ1wiOltcIm1wZ2FcIixcIm1wMlwiLFwibXAyYVwiLFwibXAzXCIsXCJtMmFcIixcIm0zYVwiXSxcImF1ZGlvL29nZ1wiOltcIm9nYVwiLFwib2dnXCIsXCJzcHhcIl0sXCJhdWRpby9zM21cIjpbXCJzM21cIl0sXCJhdWRpby9zaWxrXCI6W1wic2lsXCJdLFwiYXVkaW8vd2F2XCI6W1wid2F2XCJdLFwiYXVkaW8vd2F2ZVwiOltcIip3YXZcIl0sXCJhdWRpby93ZWJtXCI6W1wid2ViYVwiXSxcImF1ZGlvL3htXCI6W1wieG1cIl0sXCJmb250L2NvbGxlY3Rpb25cIjpbXCJ0dGNcIl0sXCJmb250L290ZlwiOltcIm90ZlwiXSxcImZvbnQvdHRmXCI6W1widHRmXCJdLFwiZm9udC93b2ZmXCI6W1wid29mZlwiXSxcImZvbnQvd29mZjJcIjpbXCJ3b2ZmMlwiXSxcImltYWdlL2FjZXNcIjpbXCJleHJcIl0sXCJpbWFnZS9hcG5nXCI6W1wiYXBuZ1wiXSxcImltYWdlL2JtcFwiOltcImJtcFwiXSxcImltYWdlL2NnbVwiOltcImNnbVwiXSxcImltYWdlL2RpY29tLXJsZVwiOltcImRybGVcIl0sXCJpbWFnZS9lbWZcIjpbXCJlbWZcIl0sXCJpbWFnZS9maXRzXCI6W1wiZml0c1wiXSxcImltYWdlL2czZmF4XCI6W1wiZzNcIl0sXCJpbWFnZS9naWZcIjpbXCJnaWZcIl0sXCJpbWFnZS9oZWljXCI6W1wiaGVpY1wiXSxcImltYWdlL2hlaWMtc2VxdWVuY2VcIjpbXCJoZWljc1wiXSxcImltYWdlL2hlaWZcIjpbXCJoZWlmXCJdLFwiaW1hZ2UvaGVpZi1zZXF1ZW5jZVwiOltcImhlaWZzXCJdLFwiaW1hZ2UvaWVmXCI6W1wiaWVmXCJdLFwiaW1hZ2UvamxzXCI6W1wiamxzXCJdLFwiaW1hZ2UvanAyXCI6W1wianAyXCIsXCJqcGcyXCJdLFwiaW1hZ2UvanBlZ1wiOltcImpwZWdcIixcImpwZ1wiLFwianBlXCJdLFwiaW1hZ2UvanBtXCI6W1wianBtXCJdLFwiaW1hZ2UvanB4XCI6W1wianB4XCIsXCJqcGZcIl0sXCJpbWFnZS9qeHJcIjpbXCJqeHJcIl0sXCJpbWFnZS9rdHhcIjpbXCJrdHhcIl0sXCJpbWFnZS9wbmdcIjpbXCJwbmdcIl0sXCJpbWFnZS9zZ2lcIjpbXCJzZ2lcIl0sXCJpbWFnZS9zdmcreG1sXCI6W1wic3ZnXCIsXCJzdmd6XCJdLFwiaW1hZ2UvdDM4XCI6W1widDM4XCJdLFwiaW1hZ2UvdGlmZlwiOltcInRpZlwiLFwidGlmZlwiXSxcImltYWdlL3RpZmYtZnhcIjpbXCJ0ZnhcIl0sXCJpbWFnZS93ZWJwXCI6W1wid2VicFwiXSxcImltYWdlL3dtZlwiOltcIndtZlwiXSxcIm1lc3NhZ2UvZGlzcG9zaXRpb24tbm90aWZpY2F0aW9uXCI6W1wiZGlzcG9zaXRpb24tbm90aWZpY2F0aW9uXCJdLFwibWVzc2FnZS9nbG9iYWxcIjpbXCJ1OG1zZ1wiXSxcIm1lc3NhZ2UvZ2xvYmFsLWRlbGl2ZXJ5LXN0YXR1c1wiOltcInU4ZHNuXCJdLFwibWVzc2FnZS9nbG9iYWwtZGlzcG9zaXRpb24tbm90aWZpY2F0aW9uXCI6W1widThtZG5cIl0sXCJtZXNzYWdlL2dsb2JhbC1oZWFkZXJzXCI6W1widThoZHJcIl0sXCJtZXNzYWdlL3JmYzgyMlwiOltcImVtbFwiLFwibWltZVwiXSxcIm1vZGVsLzNtZlwiOltcIjNtZlwiXSxcIm1vZGVsL2dsdGYranNvblwiOltcImdsdGZcIl0sXCJtb2RlbC9nbHRmLWJpbmFyeVwiOltcImdsYlwiXSxcIm1vZGVsL2lnZXNcIjpbXCJpZ3NcIixcImlnZXNcIl0sXCJtb2RlbC9tZXNoXCI6W1wibXNoXCIsXCJtZXNoXCIsXCJzaWxvXCJdLFwibW9kZWwvc3RsXCI6W1wic3RsXCJdLFwibW9kZWwvdnJtbFwiOltcIndybFwiLFwidnJtbFwiXSxcIm1vZGVsL3gzZCtiaW5hcnlcIjpbXCIqeDNkYlwiLFwieDNkYnpcIl0sXCJtb2RlbC94M2QrZmFzdGluZm9zZXRcIjpbXCJ4M2RiXCJdLFwibW9kZWwveDNkK3ZybWxcIjpbXCIqeDNkdlwiLFwieDNkdnpcIl0sXCJtb2RlbC94M2QreG1sXCI6W1wieDNkXCIsXCJ4M2R6XCJdLFwibW9kZWwveDNkLXZybWxcIjpbXCJ4M2R2XCJdLFwidGV4dC9jYWNoZS1tYW5pZmVzdFwiOltcImFwcGNhY2hlXCIsXCJtYW5pZmVzdFwiXSxcInRleHQvY2FsZW5kYXJcIjpbXCJpY3NcIixcImlmYlwiXSxcInRleHQvY29mZmVlc2NyaXB0XCI6W1wiY29mZmVlXCIsXCJsaXRjb2ZmZWVcIl0sXCJ0ZXh0L2Nzc1wiOltcImNzc1wiXSxcInRleHQvY3N2XCI6W1wiY3N2XCJdLFwidGV4dC9odG1sXCI6W1wiaHRtbFwiLFwiaHRtXCIsXCJzaHRtbFwiXSxcInRleHQvamFkZVwiOltcImphZGVcIl0sXCJ0ZXh0L2pzeFwiOltcImpzeFwiXSxcInRleHQvbGVzc1wiOltcImxlc3NcIl0sXCJ0ZXh0L21hcmtkb3duXCI6W1wibWFya2Rvd25cIixcIm1kXCJdLFwidGV4dC9tYXRobWxcIjpbXCJtbWxcIl0sXCJ0ZXh0L21keFwiOltcIm1keFwiXSxcInRleHQvbjNcIjpbXCJuM1wiXSxcInRleHQvcGxhaW5cIjpbXCJ0eHRcIixcInRleHRcIixcImNvbmZcIixcImRlZlwiLFwibGlzdFwiLFwibG9nXCIsXCJpblwiLFwiaW5pXCJdLFwidGV4dC9yaWNodGV4dFwiOltcInJ0eFwiXSxcInRleHQvcnRmXCI6W1wiKnJ0ZlwiXSxcInRleHQvc2dtbFwiOltcInNnbWxcIixcInNnbVwiXSxcInRleHQvc2hleFwiOltcInNoZXhcIl0sXCJ0ZXh0L3NsaW1cIjpbXCJzbGltXCIsXCJzbG1cIl0sXCJ0ZXh0L3N0eWx1c1wiOltcInN0eWx1c1wiLFwic3R5bFwiXSxcInRleHQvdGFiLXNlcGFyYXRlZC12YWx1ZXNcIjpbXCJ0c3ZcIl0sXCJ0ZXh0L3Ryb2ZmXCI6W1widFwiLFwidHJcIixcInJvZmZcIixcIm1hblwiLFwibWVcIixcIm1zXCJdLFwidGV4dC90dXJ0bGVcIjpbXCJ0dGxcIl0sXCJ0ZXh0L3VyaS1saXN0XCI6W1widXJpXCIsXCJ1cmlzXCIsXCJ1cmxzXCJdLFwidGV4dC92Y2FyZFwiOltcInZjYXJkXCJdLFwidGV4dC92dHRcIjpbXCJ2dHRcIl0sXCJ0ZXh0L3htbFwiOltcIip4bWxcIl0sXCJ0ZXh0L3lhbWxcIjpbXCJ5YW1sXCIsXCJ5bWxcIl0sXCJ2aWRlby8zZ3BwXCI6W1wiM2dwXCIsXCIzZ3BwXCJdLFwidmlkZW8vM2dwcDJcIjpbXCIzZzJcIl0sXCJ2aWRlby9oMjYxXCI6W1wiaDI2MVwiXSxcInZpZGVvL2gyNjNcIjpbXCJoMjYzXCJdLFwidmlkZW8vaDI2NFwiOltcImgyNjRcIl0sXCJ2aWRlby9qcGVnXCI6W1wianBndlwiXSxcInZpZGVvL2pwbVwiOltcIipqcG1cIixcImpwZ21cIl0sXCJ2aWRlby9tajJcIjpbXCJtajJcIixcIm1qcDJcIl0sXCJ2aWRlby9tcDJ0XCI6W1widHNcIl0sXCJ2aWRlby9tcDRcIjpbXCJtcDRcIixcIm1wNHZcIixcIm1wZzRcIl0sXCJ2aWRlby9tcGVnXCI6W1wibXBlZ1wiLFwibXBnXCIsXCJtcGVcIixcIm0xdlwiLFwibTJ2XCJdLFwidmlkZW8vb2dnXCI6W1wib2d2XCJdLFwidmlkZW8vcXVpY2t0aW1lXCI6W1wicXRcIixcIm1vdlwiXSxcInZpZGVvL3dlYm1cIjpbXCJ3ZWJtXCJdfTtcblxudmFyIGxpdGUgPSBuZXcgTWltZV8xKHN0YW5kYXJkKTtcblxuZnVuY3Rpb24gZ2V0X3NlcnZlcl9yb3V0ZV9oYW5kbGVyKHJvdXRlcykge1xuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVfcm91dGUocm91dGUsIHJlcSwgcmVzLCBuZXh0KSB7XG5cdFx0cmVxLnBhcmFtcyA9IHJvdXRlLnBhcmFtcyhyb3V0ZS5wYXR0ZXJuLmV4ZWMocmVxLnBhdGgpKTtcblxuXHRcdGNvbnN0IG1ldGhvZCA9IHJlcS5tZXRob2QudG9Mb3dlckNhc2UoKTtcblx0XHQvLyAnZGVsZXRlJyBjYW5ub3QgYmUgZXhwb3J0ZWQgZnJvbSBhIG1vZHVsZSBiZWNhdXNlIGl0IGlzIGEga2V5d29yZCxcblx0XHQvLyBzbyBjaGVjayBmb3IgJ2RlbCcgaW5zdGVhZFxuXHRcdGNvbnN0IG1ldGhvZF9leHBvcnQgPSBtZXRob2QgPT09ICdkZWxldGUnID8gJ2RlbCcgOiBtZXRob2Q7XG5cdFx0Y29uc3QgaGFuZGxlX21ldGhvZCA9IHJvdXRlLmhhbmRsZXJzW21ldGhvZF9leHBvcnRdO1xuXHRcdGlmIChoYW5kbGVfbWV0aG9kKSB7XG5cdFx0XHRpZiAocHJvY2Vzcy5lbnYuU0FQUEVSX0VYUE9SVCkge1xuXHRcdFx0XHRjb25zdCB7IHdyaXRlLCBlbmQsIHNldEhlYWRlciB9ID0gcmVzO1xuXHRcdFx0XHRjb25zdCBjaHVua3MgPSBbXTtcblx0XHRcdFx0Y29uc3QgaGVhZGVycyA9IHt9O1xuXG5cdFx0XHRcdC8vIGludGVyY2VwdCBkYXRhIHNvIHRoYXQgaXQgY2FuIGJlIGV4cG9ydGVkXG5cdFx0XHRcdHJlcy53cml0ZSA9IGZ1bmN0aW9uKGNodW5rKSB7XG5cdFx0XHRcdFx0Y2h1bmtzLnB1c2goQnVmZmVyLmZyb20oY2h1bmspKTtcblx0XHRcdFx0XHR3cml0ZS5hcHBseShyZXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0cmVzLnNldEhlYWRlciA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG5cdFx0XHRcdFx0aGVhZGVyc1tuYW1lLnRvTG93ZXJDYXNlKCldID0gdmFsdWU7XG5cdFx0XHRcdFx0c2V0SGVhZGVyLmFwcGx5KHJlcywgYXJndW1lbnRzKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRyZXMuZW5kID0gZnVuY3Rpb24oY2h1bmspIHtcblx0XHRcdFx0XHRpZiAoY2h1bmspIGNodW5rcy5wdXNoKEJ1ZmZlci5mcm9tKGNodW5rKSk7XG5cdFx0XHRcdFx0ZW5kLmFwcGx5KHJlcywgYXJndW1lbnRzKTtcblxuXHRcdFx0XHRcdHByb2Nlc3Muc2VuZCh7XG5cdFx0XHRcdFx0XHRfX3NhcHBlcl9fOiB0cnVlLFxuXHRcdFx0XHRcdFx0ZXZlbnQ6ICdmaWxlJyxcblx0XHRcdFx0XHRcdHVybDogcmVxLnVybCxcblx0XHRcdFx0XHRcdG1ldGhvZDogcmVxLm1ldGhvZCxcblx0XHRcdFx0XHRcdHN0YXR1czogcmVzLnN0YXR1c0NvZGUsXG5cdFx0XHRcdFx0XHR0eXBlOiBoZWFkZXJzWydjb250ZW50LXR5cGUnXSxcblx0XHRcdFx0XHRcdGJvZHk6IEJ1ZmZlci5jb25jYXQoY2h1bmtzKS50b1N0cmluZygpXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGhhbmRsZV9uZXh0ID0gKGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdFx0cmVzLnN0YXR1c0NvZGUgPSA1MDA7XG5cdFx0XHRcdFx0cmVzLmVuZChlcnIubWVzc2FnZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHJvY2Vzcy5uZXh0VGljayhuZXh0KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgaGFuZGxlX21ldGhvZChyZXEsIHJlcywgaGFuZGxlX25leHQpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRcdFx0aGFuZGxlX25leHQoZXJyKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gbm8gbWF0Y2hpbmcgaGFuZGxlciBmb3IgbWV0aG9kXG5cdFx0XHRwcm9jZXNzLm5leHRUaWNrKG5leHQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmdW5jdGlvbiBmaW5kX3JvdXRlKHJlcSwgcmVzLCBuZXh0KSB7XG5cdFx0Zm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcblx0XHRcdGlmIChyb3V0ZS5wYXR0ZXJuLnRlc3QocmVxLnBhdGgpKSB7XG5cdFx0XHRcdGhhbmRsZV9yb3V0ZShyb3V0ZSwgcmVxLCByZXMsIG5leHQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bmV4dCgpO1xuXHR9O1xufVxuXG4vKiFcbiAqIGNvb2tpZVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBSb21hbiBTaHR5bG1hblxuICogQ29weXJpZ2h0KGMpIDIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxudmFyIHBhcnNlXzEgPSBwYXJzZTtcbnZhciBzZXJpYWxpemVfMSA9IHNlcmlhbGl6ZTtcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50O1xudmFyIGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcbnZhciBwYWlyU3BsaXRSZWdFeHAgPSAvOyAqLztcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggZmllbGQtY29udGVudCBpbiBSRkMgNzIzMCBzZWMgMy4yXG4gKlxuICogZmllbGQtY29udGVudCA9IGZpZWxkLXZjaGFyIFsgMSooIFNQIC8gSFRBQiApIGZpZWxkLXZjaGFyIF1cbiAqIGZpZWxkLXZjaGFyICAgPSBWQ0hBUiAvIG9icy10ZXh0XG4gKiBvYnMtdGV4dCAgICAgID0gJXg4MC1GRlxuICovXG5cbnZhciBmaWVsZENvbnRlbnRSZWdFeHAgPSAvXltcXHUwMDA5XFx1MDAyMC1cXHUwMDdlXFx1MDA4MC1cXHUwMGZmXSskLztcblxuLyoqXG4gKiBQYXJzZSBhIGNvb2tpZSBoZWFkZXIuXG4gKlxuICogUGFyc2UgdGhlIGdpdmVuIGNvb2tpZSBoZWFkZXIgc3RyaW5nIGludG8gYW4gb2JqZWN0XG4gKiBUaGUgb2JqZWN0IGhhcyB0aGUgdmFyaW91cyBjb29raWVzIGFzIGtleXMobmFtZXMpID0+IHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc3RyIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdChwYWlyU3BsaXRSZWdFeHApO1xuICB2YXIgZGVjID0gb3B0LmRlY29kZSB8fCBkZWNvZGU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYWlyID0gcGFpcnNbaV07XG4gICAgdmFyIGVxX2lkeCA9IHBhaXIuaW5kZXhPZignPScpO1xuXG4gICAgLy8gc2tpcCB0aGluZ3MgdGhhdCBkb24ndCBsb29rIGxpa2Uga2V5PXZhbHVlXG4gICAgaWYgKGVxX2lkeCA8IDApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBrZXkgPSBwYWlyLnN1YnN0cigwLCBlcV9pZHgpLnRyaW0oKTtcbiAgICB2YXIgdmFsID0gcGFpci5zdWJzdHIoKytlcV9pZHgsIHBhaXIubGVuZ3RoKS50cmltKCk7XG5cbiAgICAvLyBxdW90ZWQgdmFsdWVzXG4gICAgaWYgKCdcIicgPT0gdmFsWzBdKSB7XG4gICAgICB2YWwgPSB2YWwuc2xpY2UoMSwgLTEpO1xuICAgIH1cblxuICAgIC8vIG9ubHkgYXNzaWduIG9uY2VcbiAgICBpZiAodW5kZWZpbmVkID09IG9ialtrZXldKSB7XG4gICAgICBvYmpba2V5XSA9IHRyeURlY29kZSh2YWwsIGRlYyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgZGF0YSBpbnRvIGEgY29va2llIGhlYWRlci5cbiAqXG4gKiBTZXJpYWxpemUgdGhlIGEgbmFtZSB2YWx1ZSBwYWlyIGludG8gYSBjb29raWUgc3RyaW5nIHN1aXRhYmxlIGZvclxuICogaHR0cCBoZWFkZXJzLiBBbiBvcHRpb25hbCBvcHRpb25zIG9iamVjdCBzcGVjaWZpZWQgY29va2llIHBhcmFtZXRlcnMuXG4gKlxuICogc2VyaWFsaXplKCdmb28nLCAnYmFyJywgeyBodHRwT25seTogdHJ1ZSB9KVxuICogICA9PiBcImZvbz1iYXI7IGh0dHBPbmx5XCJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShuYW1lLCB2YWwsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG4gIHZhciBlbmMgPSBvcHQuZW5jb2RlIHx8IGVuY29kZTtcblxuICBpZiAodHlwZW9mIGVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBlbmNvZGUgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChuYW1lKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IG5hbWUgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgdmFyIHZhbHVlID0gZW5jKHZhbCk7XG5cbiAgaWYgKHZhbHVlICYmICFmaWVsZENvbnRlbnRSZWdFeHAudGVzdCh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCB2YWwgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgdmFyIHN0ciA9IG5hbWUgKyAnPScgKyB2YWx1ZTtcblxuICBpZiAobnVsbCAhPSBvcHQubWF4QWdlKSB7XG4gICAgdmFyIG1heEFnZSA9IG9wdC5tYXhBZ2UgLSAwO1xuICAgIGlmIChpc05hTihtYXhBZ2UpKSB0aHJvdyBuZXcgRXJyb3IoJ21heEFnZSBzaG91bGQgYmUgYSBOdW1iZXInKTtcbiAgICBzdHIgKz0gJzsgTWF4LUFnZT0nICsgTWF0aC5mbG9vcihtYXhBZ2UpO1xuICB9XG5cbiAgaWYgKG9wdC5kb21haW4pIHtcbiAgICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG9wdC5kb21haW4pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZG9tYWluIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgRG9tYWluPScgKyBvcHQuZG9tYWluO1xuICB9XG5cbiAgaWYgKG9wdC5wYXRoKSB7XG4gICAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChvcHQucGF0aCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBwYXRoIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgUGF0aD0nICsgb3B0LnBhdGg7XG4gIH1cblxuICBpZiAob3B0LmV4cGlyZXMpIHtcbiAgICBpZiAodHlwZW9mIG9wdC5leHBpcmVzLnRvVVRDU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZXhwaXJlcyBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IEV4cGlyZXM9JyArIG9wdC5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XG4gIH1cblxuICBpZiAob3B0Lmh0dHBPbmx5KSB7XG4gICAgc3RyICs9ICc7IEh0dHBPbmx5JztcbiAgfVxuXG4gIGlmIChvcHQuc2VjdXJlKSB7XG4gICAgc3RyICs9ICc7IFNlY3VyZSc7XG4gIH1cblxuICBpZiAob3B0LnNhbWVTaXRlKSB7XG4gICAgdmFyIHNhbWVTaXRlID0gdHlwZW9mIG9wdC5zYW1lU2l0ZSA9PT0gJ3N0cmluZydcbiAgICAgID8gb3B0LnNhbWVTaXRlLnRvTG93ZXJDYXNlKCkgOiBvcHQuc2FtZVNpdGU7XG5cbiAgICBzd2l0Y2ggKHNhbWVTaXRlKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1TdHJpY3QnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xheCc6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1MYXgnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmljdCc6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1TdHJpY3QnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9Tm9uZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHNhbWVTaXRlIGlzIGludmFsaWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIFRyeSBkZWNvZGluZyBhIHN0cmluZyB1c2luZyBhIGRlY29kaW5nIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRlY29kZVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0cnlEZWNvZGUoc3RyLCBkZWNvZGUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlKHN0cik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cbnZhciBjb29raWUgPSB7XG5cdHBhcnNlOiBwYXJzZV8xLFxuXHRzZXJpYWxpemU6IHNlcmlhbGl6ZV8xXG59O1xuXG52YXIgY2hhcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWl8kJztcbnZhciB1bnNhZmVDaGFycyA9IC9bPD5cXGJcXGZcXG5cXHJcXHRcXDBcXHUyMDI4XFx1MjAyOV0vZztcbnZhciByZXNlcnZlZCA9IC9eKD86ZG98aWZ8aW58Zm9yfGludHxsZXR8bmV3fHRyeXx2YXJ8Ynl0ZXxjYXNlfGNoYXJ8ZWxzZXxlbnVtfGdvdG98bG9uZ3x0aGlzfHZvaWR8d2l0aHxhd2FpdHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxmaW5hbHxmbG9hdHxzaG9ydHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZG91YmxlfGV4cG9ydHxpbXBvcnR8bmF0aXZlfHJldHVybnxzd2l0Y2h8dGhyb3dzfHR5cGVvZnxib29sZWFufGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxhYnN0cmFjdHxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnx2b2xhdGlsZXxpbnRlcmZhY2V8cHJvdGVjdGVkfHRyYW5zaWVudHxpbXBsZW1lbnRzfGluc3RhbmNlb2Z8c3luY2hyb25pemVkKSQvO1xudmFyIGVzY2FwZWQgPSB7XG4gICAgJzwnOiAnXFxcXHUwMDNDJyxcbiAgICAnPic6ICdcXFxcdTAwM0UnLFxuICAgICcvJzogJ1xcXFx1MDAyRicsXG4gICAgJ1xcXFwnOiAnXFxcXFxcXFwnLFxuICAgICdcXGInOiAnXFxcXGInLFxuICAgICdcXGYnOiAnXFxcXGYnLFxuICAgICdcXG4nOiAnXFxcXG4nLFxuICAgICdcXHInOiAnXFxcXHInLFxuICAgICdcXHQnOiAnXFxcXHQnLFxuICAgICdcXDAnOiAnXFxcXDAnLFxuICAgICdcXHUyMDI4JzogJ1xcXFx1MjAyOCcsXG4gICAgJ1xcdTIwMjknOiAnXFxcXHUyMDI5J1xufTtcbnZhciBvYmplY3RQcm90b093blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QucHJvdG90eXBlKS5zb3J0KCkuam9pbignXFwwJyk7XG5mdW5jdGlvbiBkZXZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIGNvdW50cyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiB3YWxrKHRoaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzdHJpbmdpZnkgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnRzLmhhcyh0aGluZykpIHtcbiAgICAgICAgICAgIGNvdW50cy5zZXQodGhpbmcsIGNvdW50cy5nZXQodGhpbmcpICsgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY291bnRzLnNldCh0aGluZywgMSk7XG4gICAgICAgIGlmICghaXNQcmltaXRpdmUodGhpbmcpKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGdldFR5cGUodGhpbmcpO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnTnVtYmVyJzpcbiAgICAgICAgICAgICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1JlZ0V4cCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJheSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaW5nLmZvckVhY2god2Fsayk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1NldCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnTWFwJzpcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGluZykuZm9yRWFjaCh3YWxrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3RvICE9PSBPYmplY3QucHJvdG90eXBlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm90byAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG8pLnNvcnQoKS5qb2luKCdcXDAnKSAhPT0gb2JqZWN0UHJvdG9Pd25Qcm9wZXJ0eU5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc3RyaW5naWZ5IGFyYml0cmFyeSBub24tUE9KT3NcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGhpbmcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzdHJpbmdpZnkgUE9KT3Mgd2l0aCBzeW1ib2xpYyBrZXlzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaW5nKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHdhbGsodGhpbmdba2V5XSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHdhbGsodmFsdWUpO1xuICAgIHZhciBuYW1lcyA9IG5ldyBNYXAoKTtcbiAgICBBcnJheS5mcm9tKGNvdW50cylcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZW50cnkpIHsgcmV0dXJuIGVudHJ5WzFdID4gMTsgfSlcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGJbMV0gLSBhWzFdOyB9KVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoZW50cnksIGkpIHtcbiAgICAgICAgbmFtZXMuc2V0KGVudHJ5WzBdLCBnZXROYW1lKGkpKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBzdHJpbmdpZnkodGhpbmcpIHtcbiAgICAgICAgaWYgKG5hbWVzLmhhcyh0aGluZykpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lcy5nZXQodGhpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh0aGluZykpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZnlQcmltaXRpdmUodGhpbmcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0eXBlID0gZ2V0VHlwZSh0aGluZyk7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnTnVtYmVyJzpcbiAgICAgICAgICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICAgICAgICBjYXNlICdCb29sZWFuJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPYmplY3QoXCIgKyBzdHJpbmdpZnkodGhpbmcudmFsdWVPZigpKSArIFwiKVwiO1xuICAgICAgICAgICAgY2FzZSAnUmVnRXhwJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpbmcudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5ldyBEYXRlKFwiICsgdGhpbmcuZ2V0VGltZSgpICsgXCIpXCI7XG4gICAgICAgICAgICBjYXNlICdBcnJheSc6XG4gICAgICAgICAgICAgICAgdmFyIG1lbWJlcnMgPSB0aGluZy5tYXAoZnVuY3Rpb24gKHYsIGkpIHsgcmV0dXJuIGkgaW4gdGhpbmcgPyBzdHJpbmdpZnkodikgOiAnJzsgfSk7XG4gICAgICAgICAgICAgICAgdmFyIHRhaWwgPSB0aGluZy5sZW5ndGggPT09IDAgfHwgKHRoaW5nLmxlbmd0aCAtIDEgaW4gdGhpbmcpID8gJycgOiAnLCc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiW1wiICsgbWVtYmVycy5qb2luKCcsJykgKyB0YWlsICsgXCJdXCI7XG4gICAgICAgICAgICBjYXNlICdTZXQnOlxuICAgICAgICAgICAgY2FzZSAnTWFwJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJuZXcgXCIgKyB0eXBlICsgXCIoW1wiICsgQXJyYXkuZnJvbSh0aGluZykubWFwKHN0cmluZ2lmeSkuam9pbignLCcpICsgXCJdKVwiO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gXCJ7XCIgKyBPYmplY3Qua2V5cyh0aGluZykubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHNhZmVLZXkoa2V5KSArIFwiOlwiICsgc3RyaW5naWZ5KHRoaW5nW2tleV0pOyB9KS5qb2luKCcsJykgKyBcIn1cIjtcbiAgICAgICAgICAgICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpbmcpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksXCIgKyBvYmogKyBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk9iamVjdC5jcmVhdGUobnVsbClcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgc3RyID0gc3RyaW5naWZ5KHZhbHVlKTtcbiAgICBpZiAobmFtZXMuc2l6ZSkge1xuICAgICAgICB2YXIgcGFyYW1zXzEgPSBbXTtcbiAgICAgICAgdmFyIHN0YXRlbWVudHNfMSA9IFtdO1xuICAgICAgICB2YXIgdmFsdWVzXzEgPSBbXTtcbiAgICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSwgdGhpbmcpIHtcbiAgICAgICAgICAgIHBhcmFtc18xLnB1c2gobmFtZSk7XG4gICAgICAgICAgICBpZiAoaXNQcmltaXRpdmUodGhpbmcpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaChzdHJpbmdpZnlQcmltaXRpdmUodGhpbmcpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGdldFR5cGUodGhpbmcpO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnTnVtYmVyJzpcbiAgICAgICAgICAgICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNfMS5wdXNoKFwiT2JqZWN0KFwiICsgc3RyaW5naWZ5KHRoaW5nLnZhbHVlT2YoKSkgKyBcIilcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1JlZ0V4cCc6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2godGhpbmcudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNfMS5wdXNoKFwibmV3IERhdGUoXCIgKyB0aGluZy5nZXRUaW1lKCkgKyBcIilcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaChcIkFycmF5KFwiICsgdGhpbmcubGVuZ3RoICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGluZy5mb3JFYWNoKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzXzEucHVzaChuYW1lICsgXCJbXCIgKyBpICsgXCJdPVwiICsgc3RyaW5naWZ5KHYpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1NldCc6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2goXCJuZXcgU2V0XCIpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzXzEucHVzaChuYW1lICsgXCIuXCIgKyBBcnJheS5mcm9tKHRoaW5nKS5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIFwiYWRkKFwiICsgc3RyaW5naWZ5KHYpICsgXCIpXCI7IH0pLmpvaW4oJy4nKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ01hcCc6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2goXCJuZXcgTWFwXCIpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzXzEucHVzaChuYW1lICsgXCIuXCIgKyBBcnJheS5mcm9tKHRoaW5nKS5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IF9hWzBdLCB2ID0gX2FbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzZXQoXCIgKyBzdHJpbmdpZnkoaykgKyBcIiwgXCIgKyBzdHJpbmdpZnkodikgKyBcIilcIjtcbiAgICAgICAgICAgICAgICAgICAgfSkuam9pbignLicpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpbmcpID09PSBudWxsID8gJ09iamVjdC5jcmVhdGUobnVsbCknIDogJ3t9Jyk7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaW5nKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudHNfMS5wdXNoKFwiXCIgKyBuYW1lICsgc2FmZVByb3Aoa2V5KSArIFwiPVwiICsgc3RyaW5naWZ5KHRoaW5nW2tleV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzdGF0ZW1lbnRzXzEucHVzaChcInJldHVybiBcIiArIHN0cik7XG4gICAgICAgIHJldHVybiBcIihmdW5jdGlvbihcIiArIHBhcmFtc18xLmpvaW4oJywnKSArIFwiKXtcIiArIHN0YXRlbWVudHNfMS5qb2luKCc7JykgKyBcIn0oXCIgKyB2YWx1ZXNfMS5qb2luKCcsJykgKyBcIikpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldE5hbWUobnVtKSB7XG4gICAgdmFyIG5hbWUgPSAnJztcbiAgICBkbyB7XG4gICAgICAgIG5hbWUgPSBjaGFyc1tudW0gJSBjaGFycy5sZW5ndGhdICsgbmFtZTtcbiAgICAgICAgbnVtID0gfn4obnVtIC8gY2hhcnMubGVuZ3RoKSAtIDE7XG4gICAgfSB3aGlsZSAobnVtID49IDApO1xuICAgIHJldHVybiByZXNlcnZlZC50ZXN0KG5hbWUpID8gbmFtZSArIFwiX1wiIDogbmFtZTtcbn1cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKHRoaW5nKSB7XG4gICAgcmV0dXJuIE9iamVjdCh0aGluZykgIT09IHRoaW5nO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5UHJpbWl0aXZlKHRoaW5nKSB7XG4gICAgaWYgKHR5cGVvZiB0aGluZyA9PT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiBzdHJpbmdpZnlTdHJpbmcodGhpbmcpO1xuICAgIGlmICh0aGluZyA9PT0gdm9pZCAwKVxuICAgICAgICByZXR1cm4gJ3ZvaWQgMCc7XG4gICAgaWYgKHRoaW5nID09PSAwICYmIDEgLyB0aGluZyA8IDApXG4gICAgICAgIHJldHVybiAnLTAnO1xuICAgIHZhciBzdHIgPSBTdHJpbmcodGhpbmcpO1xuICAgIGlmICh0eXBlb2YgdGhpbmcgPT09ICdudW1iZXInKVxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL14oLSk/MFxcLi8sICckMS4nKTtcbiAgICByZXR1cm4gc3RyO1xufVxuZnVuY3Rpb24gZ2V0VHlwZSh0aGluZykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpbmcpLnNsaWNlKDgsIC0xKTtcbn1cbmZ1bmN0aW9uIGVzY2FwZVVuc2FmZUNoYXIoYykge1xuICAgIHJldHVybiBlc2NhcGVkW2NdIHx8IGM7XG59XG5mdW5jdGlvbiBlc2NhcGVVbnNhZmVDaGFycyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UodW5zYWZlQ2hhcnMsIGVzY2FwZVVuc2FmZUNoYXIpO1xufVxuZnVuY3Rpb24gc2FmZUtleShrZXkpIHtcbiAgICByZXR1cm4gL15bXyRhLXpBLVpdW18kYS16QS1aMC05XSokLy50ZXN0KGtleSkgPyBrZXkgOiBlc2NhcGVVbnNhZmVDaGFycyhKU09OLnN0cmluZ2lmeShrZXkpKTtcbn1cbmZ1bmN0aW9uIHNhZmVQcm9wKGtleSkge1xuICAgIHJldHVybiAvXltfJGEtekEtWl1bXyRhLXpBLVowLTldKiQvLnRlc3Qoa2V5KSA/IFwiLlwiICsga2V5IDogXCJbXCIgKyBlc2NhcGVVbnNhZmVDaGFycyhKU09OLnN0cmluZ2lmeShrZXkpKSArIFwiXVwiO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5U3RyaW5nKHN0cikge1xuICAgIHZhciByZXN1bHQgPSAnXCInO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgdmFyIGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGlmIChjaGFyID09PSAnXCInKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcXFxcIic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hhciBpbiBlc2NhcGVkKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gZXNjYXBlZFtjaGFyXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2RlID49IDB4ZDgwMCAmJiBjb2RlIDw9IDB4ZGZmZikge1xuICAgICAgICAgICAgdmFyIG5leHQgPSBzdHIuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIHRoZSBiZWdpbm5pbmcgb2YgYSBbaGlnaCwgbG93XSBzdXJyb2dhdGUgcGFpcixcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgbmV4dCB0d28gY2hhcmFjdGVycywgb3RoZXJ3aXNlIGVzY2FwZVxuICAgICAgICAgICAgaWYgKGNvZGUgPD0gMHhkYmZmICYmIChuZXh0ID49IDB4ZGMwMCAmJiBuZXh0IDw9IDB4ZGZmZikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gY2hhciArIHN0clsrK2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiXFxcXHVcIiArIGNvZGUudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gY2hhcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgKz0gJ1wiJztcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vdG1wdmFyL2pzZG9tL2Jsb2IvYWE4NWIyYWJmMDc3NjZmZjdiZjVjMWY2ZGFhZmIzNzI2ZjJmMmRiNS9saWIvanNkb20vbGl2aW5nL2Jsb2IuanNcblxuLy8gZml4IGZvciBcIlJlYWRhYmxlXCIgaXNuJ3QgYSBuYW1lZCBleHBvcnQgaXNzdWVcbmNvbnN0IFJlYWRhYmxlID0gU3RyZWFtLlJlYWRhYmxlO1xuXG5jb25zdCBCVUZGRVIgPSBTeW1ib2woJ2J1ZmZlcicpO1xuY29uc3QgVFlQRSA9IFN5bWJvbCgndHlwZScpO1xuXG5jbGFzcyBCbG9iIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpc1tUWVBFXSA9ICcnO1xuXG5cdFx0Y29uc3QgYmxvYlBhcnRzID0gYXJndW1lbnRzWzBdO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBhcmd1bWVudHNbMV07XG5cblx0XHRjb25zdCBidWZmZXJzID0gW107XG5cdFx0bGV0IHNpemUgPSAwO1xuXG5cdFx0aWYgKGJsb2JQYXJ0cykge1xuXHRcdFx0Y29uc3QgYSA9IGJsb2JQYXJ0cztcblx0XHRcdGNvbnN0IGxlbmd0aCA9IE51bWJlcihhLmxlbmd0aCk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBhW2ldO1xuXHRcdFx0XHRsZXQgYnVmZmVyO1xuXHRcdFx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuXHRcdFx0XHRcdGJ1ZmZlciA9IGVsZW1lbnQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGVsZW1lbnQpKSB7XG5cdFx0XHRcdFx0YnVmZmVyID0gQnVmZmVyLmZyb20oZWxlbWVudC5idWZmZXIsIGVsZW1lbnQuYnl0ZU9mZnNldCwgZWxlbWVudC5ieXRlTGVuZ3RoKTtcblx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcblx0XHRcdFx0XHRidWZmZXIgPSBCdWZmZXIuZnJvbShlbGVtZW50KTtcblx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQmxvYikge1xuXHRcdFx0XHRcdGJ1ZmZlciA9IGVsZW1lbnRbQlVGRkVSXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRidWZmZXIgPSBCdWZmZXIuZnJvbSh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBlbGVtZW50IDogU3RyaW5nKGVsZW1lbnQpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzaXplICs9IGJ1ZmZlci5sZW5ndGg7XG5cdFx0XHRcdGJ1ZmZlcnMucHVzaChidWZmZXIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXNbQlVGRkVSXSA9IEJ1ZmZlci5jb25jYXQoYnVmZmVycyk7XG5cblx0XHRsZXQgdHlwZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy50eXBlICE9PSB1bmRlZmluZWQgJiYgU3RyaW5nKG9wdGlvbnMudHlwZSkudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAodHlwZSAmJiAhL1teXFx1MDAyMC1cXHUwMDdFXS8udGVzdCh0eXBlKSkge1xuXHRcdFx0dGhpc1tUWVBFXSA9IHR5cGU7XG5cdFx0fVxuXHR9XG5cdGdldCBzaXplKCkge1xuXHRcdHJldHVybiB0aGlzW0JVRkZFUl0ubGVuZ3RoO1xuXHR9XG5cdGdldCB0eXBlKCkge1xuXHRcdHJldHVybiB0aGlzW1RZUEVdO1xuXHR9XG5cdHRleHQoKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzW0JVRkZFUl0udG9TdHJpbmcoKSk7XG5cdH1cblx0YXJyYXlCdWZmZXIoKSB7XG5cdFx0Y29uc3QgYnVmID0gdGhpc1tCVUZGRVJdO1xuXHRcdGNvbnN0IGFiID0gYnVmLmJ1ZmZlci5zbGljZShidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVPZmZzZXQgKyBidWYuYnl0ZUxlbmd0aCk7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhYik7XG5cdH1cblx0c3RyZWFtKCkge1xuXHRcdGNvbnN0IHJlYWRhYmxlID0gbmV3IFJlYWRhYmxlKCk7XG5cdFx0cmVhZGFibGUuX3JlYWQgPSBmdW5jdGlvbiAoKSB7fTtcblx0XHRyZWFkYWJsZS5wdXNoKHRoaXNbQlVGRkVSXSk7XG5cdFx0cmVhZGFibGUucHVzaChudWxsKTtcblx0XHRyZXR1cm4gcmVhZGFibGU7XG5cdH1cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdbb2JqZWN0IEJsb2JdJztcblx0fVxuXHRzbGljZSgpIHtcblx0XHRjb25zdCBzaXplID0gdGhpcy5zaXplO1xuXG5cdFx0Y29uc3Qgc3RhcnQgPSBhcmd1bWVudHNbMF07XG5cdFx0Y29uc3QgZW5kID0gYXJndW1lbnRzWzFdO1xuXHRcdGxldCByZWxhdGl2ZVN0YXJ0LCByZWxhdGl2ZUVuZDtcblx0XHRpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmVsYXRpdmVTdGFydCA9IDA7XG5cdFx0fSBlbHNlIGlmIChzdGFydCA8IDApIHtcblx0XHRcdHJlbGF0aXZlU3RhcnQgPSBNYXRoLm1heChzaXplICsgc3RhcnQsIDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWxhdGl2ZVN0YXJ0ID0gTWF0aC5taW4oc3RhcnQsIHNpemUpO1xuXHRcdH1cblx0XHRpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJlbGF0aXZlRW5kID0gc2l6ZTtcblx0XHR9IGVsc2UgaWYgKGVuZCA8IDApIHtcblx0XHRcdHJlbGF0aXZlRW5kID0gTWF0aC5tYXgoc2l6ZSArIGVuZCwgMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbGF0aXZlRW5kID0gTWF0aC5taW4oZW5kLCBzaXplKTtcblx0XHR9XG5cdFx0Y29uc3Qgc3BhbiA9IE1hdGgubWF4KHJlbGF0aXZlRW5kIC0gcmVsYXRpdmVTdGFydCwgMCk7XG5cblx0XHRjb25zdCBidWZmZXIgPSB0aGlzW0JVRkZFUl07XG5cdFx0Y29uc3Qgc2xpY2VkQnVmZmVyID0gYnVmZmVyLnNsaWNlKHJlbGF0aXZlU3RhcnQsIHJlbGF0aXZlU3RhcnQgKyBzcGFuKTtcblx0XHRjb25zdCBibG9iID0gbmV3IEJsb2IoW10sIHsgdHlwZTogYXJndW1lbnRzWzJdIH0pO1xuXHRcdGJsb2JbQlVGRkVSXSA9IHNsaWNlZEJ1ZmZlcjtcblx0XHRyZXR1cm4gYmxvYjtcblx0fVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhCbG9iLnByb3RvdHlwZSwge1xuXHRzaXplOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0dHlwZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHNsaWNlOiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCbG9iLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdHZhbHVlOiAnQmxvYicsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbi8qKlxuICogZmV0Y2gtZXJyb3IuanNcbiAqXG4gKiBGZXRjaEVycm9yIGludGVyZmFjZSBmb3Igb3BlcmF0aW9uYWwgZXJyb3JzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgRmV0Y2hFcnJvciBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAgIFN0cmluZyAgICAgIG1lc3NhZ2UgICAgICBFcnJvciBtZXNzYWdlIGZvciBodW1hblxuICogQHBhcmFtICAgU3RyaW5nICAgICAgdHlwZSAgICAgICAgIEVycm9yIHR5cGUgZm9yIG1hY2hpbmVcbiAqIEBwYXJhbSAgIFN0cmluZyAgICAgIHN5c3RlbUVycm9yICBGb3IgTm9kZS5qcyBzeXN0ZW0gZXJyb3JcbiAqIEByZXR1cm4gIEZldGNoRXJyb3JcbiAqL1xuZnVuY3Rpb24gRmV0Y2hFcnJvcihtZXNzYWdlLCB0eXBlLCBzeXN0ZW1FcnJvcikge1xuICBFcnJvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgLy8gd2hlbiBlcnIudHlwZSBpcyBgc3lzdGVtYCwgZXJyLmNvZGUgY29udGFpbnMgc3lzdGVtIGVycm9yIGNvZGVcbiAgaWYgKHN5c3RlbUVycm9yKSB7XG4gICAgdGhpcy5jb2RlID0gdGhpcy5lcnJubyA9IHN5c3RlbUVycm9yLmNvZGU7XG4gIH1cblxuICAvLyBoaWRlIGN1c3RvbSBlcnJvciBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIGZyb20gZW5kLXVzZXJzXG4gIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xufVxuXG5GZXRjaEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkZldGNoRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRmV0Y2hFcnJvcjtcbkZldGNoRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnRmV0Y2hFcnJvcic7XG5cbmxldCBjb252ZXJ0O1xudHJ5IHtcblx0Y29udmVydCA9IHJlcXVpcmUoJ2VuY29kaW5nJykuY29udmVydDtcbn0gY2F0Y2ggKGUpIHt9XG5cbmNvbnN0IElOVEVSTkFMUyA9IFN5bWJvbCgnQm9keSBpbnRlcm5hbHMnKTtcblxuLy8gZml4IGFuIGlzc3VlIHdoZXJlIFwiUGFzc1Rocm91Z2hcIiBpc24ndCBhIG5hbWVkIGV4cG9ydCBmb3Igbm9kZSA8MTBcbmNvbnN0IFBhc3NUaHJvdWdoID0gU3RyZWFtLlBhc3NUaHJvdWdoO1xuXG4vKipcbiAqIEJvZHkgbWl4aW5cbiAqXG4gKiBSZWY6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNib2R5XG4gKlxuICogQHBhcmFtICAgU3RyZWFtICBib2R5ICBSZWFkYWJsZSBzdHJlYW1cbiAqIEBwYXJhbSAgIE9iamVjdCAgb3B0cyAgUmVzcG9uc2Ugb3B0aW9uc1xuICogQHJldHVybiAgVm9pZFxuICovXG5mdW5jdGlvbiBCb2R5KGJvZHkpIHtcblx0dmFyIF90aGlzID0gdGhpcztcblxuXHR2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge30sXG5cdCAgICBfcmVmJHNpemUgPSBfcmVmLnNpemU7XG5cblx0bGV0IHNpemUgPSBfcmVmJHNpemUgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJHNpemU7XG5cdHZhciBfcmVmJHRpbWVvdXQgPSBfcmVmLnRpbWVvdXQ7XG5cdGxldCB0aW1lb3V0ID0gX3JlZiR0aW1lb3V0ID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiR0aW1lb3V0O1xuXG5cdGlmIChib2R5ID09IG51bGwpIHtcblx0XHQvLyBib2R5IGlzIHVuZGVmaW5lZCBvciBudWxsXG5cdFx0Ym9keSA9IG51bGw7XG5cdH0gZWxzZSBpZiAoaXNVUkxTZWFyY2hQYXJhbXMoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGEgVVJMU2VhcmNoUGFyYW1zXG5cdFx0Ym9keSA9IEJ1ZmZlci5mcm9tKGJvZHkudG9TdHJpbmcoKSk7XG5cdH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSA7IGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkgOyBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcblx0XHQvLyBib2R5IGlzIEFycmF5QnVmZmVyXG5cdFx0Ym9keSA9IEJ1ZmZlci5mcm9tKGJvZHkpO1xuXHR9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgQXJyYXlCdWZmZXJWaWV3XG5cdFx0Ym9keSA9IEJ1ZmZlci5mcm9tKGJvZHkuYnVmZmVyLCBib2R5LmJ5dGVPZmZzZXQsIGJvZHkuYnl0ZUxlbmd0aCk7XG5cdH0gZWxzZSBpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkgOyBlbHNlIHtcblx0XHQvLyBub25lIG9mIHRoZSBhYm92ZVxuXHRcdC8vIGNvZXJjZSB0byBzdHJpbmcgdGhlbiBidWZmZXJcblx0XHRib2R5ID0gQnVmZmVyLmZyb20oU3RyaW5nKGJvZHkpKTtcblx0fVxuXHR0aGlzW0lOVEVSTkFMU10gPSB7XG5cdFx0Ym9keSxcblx0XHRkaXN0dXJiZWQ6IGZhbHNlLFxuXHRcdGVycm9yOiBudWxsXG5cdH07XG5cdHRoaXMuc2l6ZSA9IHNpemU7XG5cdHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG5cblx0aWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pIHtcblx0XHRib2R5Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdGNvbnN0IGVycm9yID0gZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJyA/IGVyciA6IG5ldyBGZXRjaEVycm9yKGBJbnZhbGlkIHJlc3BvbnNlIGJvZHkgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICR7X3RoaXMudXJsfTogJHtlcnIubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyKTtcblx0XHRcdF90aGlzW0lOVEVSTkFMU10uZXJyb3IgPSBlcnJvcjtcblx0XHR9KTtcblx0fVxufVxuXG5Cb2R5LnByb3RvdHlwZSA9IHtcblx0Z2V0IGJvZHkoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTXS5ib2R5O1xuXHR9LFxuXG5cdGdldCBib2R5VXNlZCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLmRpc3R1cmJlZDtcblx0fSxcblxuXHQvKipcbiAgKiBEZWNvZGUgcmVzcG9uc2UgYXMgQXJyYXlCdWZmZXJcbiAgKlxuICAqIEByZXR1cm4gIFByb21pc2VcbiAgKi9cblx0YXJyYXlCdWZmZXIoKSB7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmKSB7XG5cdFx0XHRyZXR1cm4gYnVmLmJ1ZmZlci5zbGljZShidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVPZmZzZXQgKyBidWYuYnl0ZUxlbmd0aCk7XG5cdFx0fSk7XG5cdH0sXG5cblx0LyoqXG4gICogUmV0dXJuIHJhdyByZXNwb25zZSBhcyBCbG9iXG4gICpcbiAgKiBAcmV0dXJuIFByb21pc2VcbiAgKi9cblx0YmxvYigpIHtcblx0XHRsZXQgY3QgPSB0aGlzLmhlYWRlcnMgJiYgdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykgfHwgJyc7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihcblx0XHRcdC8vIFByZXZlbnQgY29weWluZ1xuXHRcdFx0bmV3IEJsb2IoW10sIHtcblx0XHRcdFx0dHlwZTogY3QudG9Mb3dlckNhc2UoKVxuXHRcdFx0fSksIHtcblx0XHRcdFx0W0JVRkZFUl06IGJ1ZlxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIGpzb25cbiAgKlxuICAqIEByZXR1cm4gIFByb21pc2VcbiAgKi9cblx0anNvbigpIHtcblx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdHJldHVybiBjb25zdW1lQm9keS5jYWxsKHRoaXMpLnRoZW4oZnVuY3Rpb24gKGJ1ZmZlcikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoYnVmZmVyLnRvU3RyaW5nKCkpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHJldHVybiBCb2R5LlByb21pc2UucmVqZWN0KG5ldyBGZXRjaEVycm9yKGBpbnZhbGlkIGpzb24gcmVzcG9uc2UgYm9keSBhdCAke190aGlzMi51cmx9IHJlYXNvbjogJHtlcnIubWVzc2FnZX1gLCAnaW52YWxpZC1qc29uJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXG5cdC8qKlxuICAqIERlY29kZSByZXNwb25zZSBhcyB0ZXh0XG4gICpcbiAgKiBAcmV0dXJuICBQcm9taXNlXG4gICovXG5cdHRleHQoKSB7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmZmVyKSB7XG5cdFx0XHRyZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCk7XG5cdFx0fSk7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIGJ1ZmZlciAobm9uLXNwZWMgYXBpKVxuICAqXG4gICogQHJldHVybiAgUHJvbWlzZVxuICAqL1xuXHRidWZmZXIoKSB7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcyk7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIHRleHQsIHdoaWxlIGF1dG9tYXRpY2FsbHkgZGV0ZWN0aW5nIHRoZSBlbmNvZGluZyBhbmRcbiAgKiB0cnlpbmcgdG8gZGVjb2RlIHRvIFVURi04IChub24tc3BlYyBhcGkpXG4gICpcbiAgKiBAcmV0dXJuICBQcm9taXNlXG4gICovXG5cdHRleHRDb252ZXJ0ZWQoKSB7XG5cdFx0dmFyIF90aGlzMyA9IHRoaXM7XG5cblx0XHRyZXR1cm4gY29uc3VtZUJvZHkuY2FsbCh0aGlzKS50aGVuKGZ1bmN0aW9uIChidWZmZXIpIHtcblx0XHRcdHJldHVybiBjb252ZXJ0Qm9keShidWZmZXIsIF90aGlzMy5oZWFkZXJzKTtcblx0XHR9KTtcblx0fVxufTtcblxuLy8gSW4gYnJvd3NlcnMsIGFsbCBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhYmxlLlxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQm9keS5wcm90b3R5cGUsIHtcblx0Ym9keTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGJvZHlVc2VkOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0YXJyYXlCdWZmZXI6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRibG9iOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0anNvbjogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHRleHQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcblxuQm9keS5taXhJbiA9IGZ1bmN0aW9uIChwcm90bykge1xuXHRmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQm9keS5wcm90b3R5cGUpKSB7XG5cdFx0Ly8gaXN0YW5idWwgaWdub3JlIGVsc2U6IGZ1dHVyZSBwcm9vZlxuXHRcdGlmICghKG5hbWUgaW4gcHJvdG8pKSB7XG5cdFx0XHRjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihCb2R5LnByb3RvdHlwZSwgbmFtZSk7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIG5hbWUsIGRlc2MpO1xuXHRcdH1cblx0fVxufTtcblxuLyoqXG4gKiBDb25zdW1lIGFuZCBjb252ZXJ0IGFuIGVudGlyZSBCb2R5IHRvIGEgQnVmZmVyLlxuICpcbiAqIFJlZjogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtYm9keS1jb25zdW1lLWJvZHlcbiAqXG4gKiBAcmV0dXJuICBQcm9taXNlXG4gKi9cbmZ1bmN0aW9uIGNvbnN1bWVCb2R5KCkge1xuXHR2YXIgX3RoaXM0ID0gdGhpcztcblxuXHRpZiAodGhpc1tJTlRFUk5BTFNdLmRpc3R1cmJlZCkge1xuXHRcdHJldHVybiBCb2R5LlByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoYGJvZHkgdXNlZCBhbHJlYWR5IGZvcjogJHt0aGlzLnVybH1gKSk7XG5cdH1cblxuXHR0aGlzW0lOVEVSTkFMU10uZGlzdHVyYmVkID0gdHJ1ZTtcblxuXHRpZiAodGhpc1tJTlRFUk5BTFNdLmVycm9yKSB7XG5cdFx0cmV0dXJuIEJvZHkuUHJvbWlzZS5yZWplY3QodGhpc1tJTlRFUk5BTFNdLmVycm9yKTtcblx0fVxuXG5cdGxldCBib2R5ID0gdGhpcy5ib2R5O1xuXG5cdC8vIGJvZHkgaXMgbnVsbFxuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBCb2R5LlByb21pc2UucmVzb2x2ZShCdWZmZXIuYWxsb2MoMCkpO1xuXHR9XG5cblx0Ly8gYm9keSBpcyBibG9iXG5cdGlmIChpc0Jsb2IoYm9keSkpIHtcblx0XHRib2R5ID0gYm9keS5zdHJlYW0oKTtcblx0fVxuXG5cdC8vIGJvZHkgaXMgYnVmZmVyXG5cdGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlc29sdmUoYm9keSk7XG5cdH1cblxuXHQvLyBpc3RhbmJ1bCBpZ25vcmUgaWY6IHNob3VsZCBuZXZlciBoYXBwZW5cblx0aWYgKCEoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkpIHtcblx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlc29sdmUoQnVmZmVyLmFsbG9jKDApKTtcblx0fVxuXG5cdC8vIGJvZHkgaXMgc3RyZWFtXG5cdC8vIGdldCByZWFkeSB0byBhY3R1YWxseSBjb25zdW1lIHRoZSBib2R5XG5cdGxldCBhY2N1bSA9IFtdO1xuXHRsZXQgYWNjdW1CeXRlcyA9IDA7XG5cdGxldCBhYm9ydCA9IGZhbHNlO1xuXG5cdHJldHVybiBuZXcgQm9keS5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRsZXQgcmVzVGltZW91dDtcblxuXHRcdC8vIGFsbG93IHRpbWVvdXQgb24gc2xvdyByZXNwb25zZSBib2R5XG5cdFx0aWYgKF90aGlzNC50aW1lb3V0KSB7XG5cdFx0XHRyZXNUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGFib3J0ID0gdHJ1ZTtcblx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBSZXNwb25zZSB0aW1lb3V0IHdoaWxlIHRyeWluZyB0byBmZXRjaCAke190aGlzNC51cmx9IChvdmVyICR7X3RoaXM0LnRpbWVvdXR9bXMpYCwgJ2JvZHktdGltZW91dCcpKTtcblx0XHRcdH0sIF90aGlzNC50aW1lb3V0KTtcblx0XHR9XG5cblx0XHQvLyBoYW5kbGUgc3RyZWFtIGVycm9yc1xuXHRcdGJvZHkub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuXHRcdFx0aWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcblx0XHRcdFx0Ly8gaWYgdGhlIHJlcXVlc3Qgd2FzIGFib3J0ZWQsIHJlamVjdCB3aXRoIHRoaXMgRXJyb3Jcblx0XHRcdFx0YWJvcnQgPSB0cnVlO1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIG90aGVyIGVycm9ycywgc3VjaCBhcyBpbmNvcnJlY3QgY29udGVudC1lbmNvZGluZ1xuXHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYEludmFsaWQgcmVzcG9uc2UgYm9keSB3aGlsZSB0cnlpbmcgdG8gZmV0Y2ggJHtfdGhpczQudXJsfTogJHtlcnIubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRib2R5Lm9uKCdkYXRhJywgZnVuY3Rpb24gKGNodW5rKSB7XG5cdFx0XHRpZiAoYWJvcnQgfHwgY2h1bmsgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoX3RoaXM0LnNpemUgJiYgYWNjdW1CeXRlcyArIGNodW5rLmxlbmd0aCA+IF90aGlzNC5zaXplKSB7XG5cdFx0XHRcdGFib3J0ID0gdHJ1ZTtcblx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBjb250ZW50IHNpemUgYXQgJHtfdGhpczQudXJsfSBvdmVyIGxpbWl0OiAke190aGlzNC5zaXplfWAsICdtYXgtc2l6ZScpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRhY2N1bUJ5dGVzICs9IGNodW5rLmxlbmd0aDtcblx0XHRcdGFjY3VtLnB1c2goY2h1bmspO1xuXHRcdH0pO1xuXG5cdFx0Ym9keS5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGFib3J0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y2xlYXJUaW1lb3V0KHJlc1RpbWVvdXQpO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXNvbHZlKEJ1ZmZlci5jb25jYXQoYWNjdW0sIGFjY3VtQnl0ZXMpKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHQvLyBoYW5kbGUgc3RyZWFtcyB0aGF0IGhhdmUgYWNjdW11bGF0ZWQgdG9vIG11Y2ggZGF0YSAoaXNzdWUgIzQxNClcblx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBDb3VsZCBub3QgY3JlYXRlIEJ1ZmZlciBmcm9tIHJlc3BvbnNlIGJvZHkgZm9yICR7X3RoaXM0LnVybH06ICR7ZXJyLm1lc3NhZ2V9YCwgJ3N5c3RlbScsIGVycikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBEZXRlY3QgYnVmZmVyIGVuY29kaW5nIGFuZCBjb252ZXJ0IHRvIHRhcmdldCBlbmNvZGluZ1xuICogcmVmOiBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1dELWh0bWw1LTIwMTEwMTEzL3BhcnNpbmcuaHRtbCNkZXRlcm1pbmluZy10aGUtY2hhcmFjdGVyLWVuY29kaW5nXG4gKlxuICogQHBhcmFtICAgQnVmZmVyICBidWZmZXIgICAgSW5jb21pbmcgYnVmZmVyXG4gKiBAcGFyYW0gICBTdHJpbmcgIGVuY29kaW5nICBUYXJnZXQgZW5jb2RpbmdcbiAqIEByZXR1cm4gIFN0cmluZ1xuICovXG5mdW5jdGlvbiBjb252ZXJ0Qm9keShidWZmZXIsIGhlYWRlcnMpIHtcblx0aWYgKHR5cGVvZiBjb252ZXJ0ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgcGFja2FnZSBgZW5jb2RpbmdgIG11c3QgYmUgaW5zdGFsbGVkIHRvIHVzZSB0aGUgdGV4dENvbnZlcnRlZCgpIGZ1bmN0aW9uJyk7XG5cdH1cblxuXHRjb25zdCBjdCA9IGhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcblx0bGV0IGNoYXJzZXQgPSAndXRmLTgnO1xuXHRsZXQgcmVzLCBzdHI7XG5cblx0Ly8gaGVhZGVyXG5cdGlmIChjdCkge1xuXHRcdHJlcyA9IC9jaGFyc2V0PShbXjtdKikvaS5leGVjKGN0KTtcblx0fVxuXG5cdC8vIG5vIGNoYXJzZXQgaW4gY29udGVudCB0eXBlLCBwZWVrIGF0IHJlc3BvbnNlIGJvZHkgZm9yIGF0IG1vc3QgMTAyNCBieXRlc1xuXHRzdHIgPSBidWZmZXIuc2xpY2UoMCwgMTAyNCkudG9TdHJpbmcoKTtcblxuXHQvLyBodG1sNVxuXHRpZiAoIXJlcyAmJiBzdHIpIHtcblx0XHRyZXMgPSAvPG1ldGEuKz9jaGFyc2V0PShbJ1wiXSkoLis/KVxcMS9pLmV4ZWMoc3RyKTtcblx0fVxuXG5cdC8vIGh0bWw0XG5cdGlmICghcmVzICYmIHN0cikge1xuXHRcdHJlcyA9IC88bWV0YVtcXHNdKz9odHRwLWVxdWl2PShbJ1wiXSljb250ZW50LXR5cGVcXDFbXFxzXSs/Y29udGVudD0oWydcIl0pKC4rPylcXDIvaS5leGVjKHN0cik7XG5cblx0XHRpZiAocmVzKSB7XG5cdFx0XHRyZXMgPSAvY2hhcnNldD0oLiopL2kuZXhlYyhyZXMucG9wKCkpO1xuXHRcdH1cblx0fVxuXG5cdC8vIHhtbFxuXHRpZiAoIXJlcyAmJiBzdHIpIHtcblx0XHRyZXMgPSAvPFxcP3htbC4rP2VuY29kaW5nPShbJ1wiXSkoLis/KVxcMS9pLmV4ZWMoc3RyKTtcblx0fVxuXG5cdC8vIGZvdW5kIGNoYXJzZXRcblx0aWYgKHJlcykge1xuXHRcdGNoYXJzZXQgPSByZXMucG9wKCk7XG5cblx0XHQvLyBwcmV2ZW50IGRlY29kZSBpc3N1ZXMgd2hlbiBzaXRlcyB1c2UgaW5jb3JyZWN0IGVuY29kaW5nXG5cdFx0Ly8gcmVmOiBodHRwczovL2hzaXZvbmVuLmZpL2VuY29kaW5nLW1lbnUvXG5cdFx0aWYgKGNoYXJzZXQgPT09ICdnYjIzMTInIHx8IGNoYXJzZXQgPT09ICdnYmsnKSB7XG5cdFx0XHRjaGFyc2V0ID0gJ2diMTgwMzAnO1xuXHRcdH1cblx0fVxuXG5cdC8vIHR1cm4gcmF3IGJ1ZmZlcnMgaW50byBhIHNpbmdsZSB1dGYtOCBidWZmZXJcblx0cmV0dXJuIGNvbnZlcnQoYnVmZmVyLCAnVVRGLTgnLCBjaGFyc2V0KS50b1N0cmluZygpO1xufVxuXG4vKipcbiAqIERldGVjdCBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2JpdGlubi9ub2RlLWZldGNoL2lzc3Vlcy8yOTYjaXNzdWVjb21tZW50LTMwNzU5ODE0M1xuICpcbiAqIEBwYXJhbSAgIE9iamVjdCAgb2JqICAgICBPYmplY3QgdG8gZGV0ZWN0IGJ5IHR5cGUgb3IgYnJhbmRcbiAqIEByZXR1cm4gIFN0cmluZ1xuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyhvYmopIHtcblx0Ly8gRHVjay10eXBpbmcgYXMgYSBuZWNlc3NhcnkgY29uZGl0aW9uLlxuXHRpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iai5hcHBlbmQgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG9iai5kZWxldGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG9iai5nZXQgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG9iai5nZXRBbGwgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG9iai5oYXMgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG9iai5zZXQgIT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBCcmFuZC1jaGVja2luZyBhbmQgbW9yZSBkdWNrLXR5cGluZyBhcyBvcHRpb25hbCBjb25kaXRpb24uXG5cdHJldHVybiBvYmouY29uc3RydWN0b3IubmFtZSA9PT0gJ1VSTFNlYXJjaFBhcmFtcycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFVSTFNlYXJjaFBhcmFtc10nIHx8IHR5cGVvZiBvYmouc29ydCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIFczQyBgQmxvYmAgb2JqZWN0ICh3aGljaCBgRmlsZWAgaW5oZXJpdHMgZnJvbSlcbiAqIEBwYXJhbSAgeyp9IG9ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNCbG9iKG9iaikge1xuXHRyZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5hcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnR5cGUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBvYmouc3RyZWFtID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5uYW1lID09PSAnc3RyaW5nJyAmJiAvXihCbG9ifEZpbGUpJC8udGVzdChvYmouY29uc3RydWN0b3IubmFtZSkgJiYgL14oQmxvYnxGaWxlKSQvLnRlc3Qob2JqW1N5bWJvbC50b1N0cmluZ1RhZ10pO1xufVxuXG4vKipcbiAqIENsb25lIGJvZHkgZ2l2ZW4gUmVzL1JlcSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAgIE1peGVkICBpbnN0YW5jZSAgUmVzcG9uc2Ugb3IgUmVxdWVzdCBpbnN0YW5jZVxuICogQHJldHVybiAgTWl4ZWRcbiAqL1xuZnVuY3Rpb24gY2xvbmUoaW5zdGFuY2UpIHtcblx0bGV0IHAxLCBwMjtcblx0bGV0IGJvZHkgPSBpbnN0YW5jZS5ib2R5O1xuXG5cdC8vIGRvbid0IGFsbG93IGNsb25pbmcgYSB1c2VkIGJvZHlcblx0aWYgKGluc3RhbmNlLmJvZHlVc2VkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgY2xvbmUgYm9keSBhZnRlciBpdCBpcyB1c2VkJyk7XG5cdH1cblxuXHQvLyBjaGVjayB0aGF0IGJvZHkgaXMgYSBzdHJlYW0gYW5kIG5vdCBmb3JtLWRhdGEgb2JqZWN0XG5cdC8vIG5vdGU6IHdlIGNhbid0IGNsb25lIHRoZSBmb3JtLWRhdGEgb2JqZWN0IHdpdGhvdXQgaGF2aW5nIGl0IGFzIGEgZGVwZW5kZW5jeVxuXHRpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSAmJiB0eXBlb2YgYm9keS5nZXRCb3VuZGFyeSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIHRlZSBpbnN0YW5jZSBib2R5XG5cdFx0cDEgPSBuZXcgUGFzc1Rocm91Z2goKTtcblx0XHRwMiA9IG5ldyBQYXNzVGhyb3VnaCgpO1xuXHRcdGJvZHkucGlwZShwMSk7XG5cdFx0Ym9keS5waXBlKHAyKTtcblx0XHQvLyBzZXQgaW5zdGFuY2UgYm9keSB0byB0ZWVkIGJvZHkgYW5kIHJldHVybiB0aGUgb3RoZXIgdGVlZCBib2R5XG5cdFx0aW5zdGFuY2VbSU5URVJOQUxTXS5ib2R5ID0gcDE7XG5cdFx0Ym9keSA9IHAyO1xuXHR9XG5cblx0cmV0dXJuIGJvZHk7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgdGhlIG9wZXJhdGlvbiBcImV4dHJhY3QgYSBgQ29udGVudC1UeXBlYCB2YWx1ZSBmcm9tIHxvYmplY3R8XCIgYXNcbiAqIHNwZWNpZmllZCBpbiB0aGUgc3BlY2lmaWNhdGlvbjpcbiAqIGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWJvZHlpbml0LWV4dHJhY3RcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBpbnN0YW5jZS5ib2R5IGlzIHByZXNlbnQuXG4gKlxuICogQHBhcmFtICAgTWl4ZWQgIGluc3RhbmNlICBBbnkgb3B0aW9ucy5ib2R5IGlucHV0XG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RDb250ZW50VHlwZShib2R5KSB7XG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0Ly8gYm9keSBpcyBudWxsXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG5cdFx0Ly8gYm9keSBpcyBzdHJpbmdcblx0XHRyZXR1cm4gJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCc7XG5cdH0gZWxzZSBpZiAoaXNVUkxTZWFyY2hQYXJhbXMoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGEgVVJMU2VhcmNoUGFyYW1zXG5cdFx0cmV0dXJuICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCc7XG5cdH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBibG9iXG5cdFx0cmV0dXJuIGJvZHkudHlwZSB8fCBudWxsO1xuXHR9IGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgYnVmZmVyXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGJvZHkpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSB7XG5cdFx0Ly8gYm9keSBpcyBBcnJheUJ1ZmZlclxuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgQXJyYXlCdWZmZXJWaWV3XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGJvZHkuZ2V0Qm91bmRhcnkgPT09ICdmdW5jdGlvbicpIHtcblx0XHQvLyBkZXRlY3QgZm9ybSBkYXRhIGlucHV0IGZyb20gZm9ybS1kYXRhIG1vZHVsZVxuXHRcdHJldHVybiBgbXVsdGlwYXJ0L2Zvcm0tZGF0YTtib3VuZGFyeT0ke2JvZHkuZ2V0Qm91bmRhcnkoKX1gO1xuXHR9IGVsc2UgaWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pIHtcblx0XHQvLyBib2R5IGlzIHN0cmVhbVxuXHRcdC8vIGNhbid0IHJlYWxseSBkbyBtdWNoIGFib3V0IHRoaXNcblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIHtcblx0XHQvLyBCb2R5IGNvbnN0cnVjdG9yIGRlZmF1bHRzIG90aGVyIHRoaW5ncyB0byBzdHJpbmdcblx0XHRyZXR1cm4gJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCc7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgRmV0Y2ggU3RhbmRhcmQgdHJlYXRzIHRoaXMgYXMgaWYgXCJ0b3RhbCBieXRlc1wiIGlzIGEgcHJvcGVydHkgb24gdGhlIGJvZHkuXG4gKiBGb3IgdXMsIHdlIGhhdmUgdG8gZXhwbGljaXRseSBnZXQgaXQgd2l0aCBhIGZ1bmN0aW9uLlxuICpcbiAqIHJlZjogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtYm9keS10b3RhbC1ieXRlc1xuICpcbiAqIEBwYXJhbSAgIEJvZHkgICAgaW5zdGFuY2UgICBJbnN0YW5jZSBvZiBCb2R5XG4gKiBAcmV0dXJuICBOdW1iZXI/ICAgICAgICAgICAgTnVtYmVyIG9mIGJ5dGVzLCBvciBudWxsIGlmIG5vdCBwb3NzaWJsZVxuICovXG5mdW5jdGlvbiBnZXRUb3RhbEJ5dGVzKGluc3RhbmNlKSB7XG5cdGNvbnN0IGJvZHkgPSBpbnN0YW5jZS5ib2R5O1xuXG5cblx0aWYgKGJvZHkgPT09IG51bGwpIHtcblx0XHQvLyBib2R5IGlzIG51bGxcblx0XHRyZXR1cm4gMDtcblx0fSBlbHNlIGlmIChpc0Jsb2IoYm9keSkpIHtcblx0XHRyZXR1cm4gYm9keS5zaXplO1xuXHR9IGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgYnVmZmVyXG5cdFx0cmV0dXJuIGJvZHkubGVuZ3RoO1xuXHR9IGVsc2UgaWYgKGJvZHkgJiYgdHlwZW9mIGJvZHkuZ2V0TGVuZ3RoU3luYyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIGRldGVjdCBmb3JtIGRhdGEgaW5wdXQgZnJvbSBmb3JtLWRhdGEgbW9kdWxlXG5cdFx0aWYgKGJvZHkuX2xlbmd0aFJldHJpZXZlcnMgJiYgYm9keS5fbGVuZ3RoUmV0cmlldmVycy5sZW5ndGggPT0gMCB8fCAvLyAxLnhcblx0XHRib2R5Lmhhc0tub3duTGVuZ3RoICYmIGJvZHkuaGFzS25vd25MZW5ndGgoKSkge1xuXHRcdFx0Ly8gMi54XG5cdFx0XHRyZXR1cm4gYm9keS5nZXRMZW5ndGhTeW5jKCk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGJvZHkgaXMgc3RyZWFtXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuLyoqXG4gKiBXcml0ZSBhIEJvZHkgdG8gYSBOb2RlLmpzIFdyaXRhYmxlU3RyZWFtIChlLmcuIGh0dHAuUmVxdWVzdCkgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSAgIEJvZHkgICAgaW5zdGFuY2UgICBJbnN0YW5jZSBvZiBCb2R5XG4gKiBAcmV0dXJuICBWb2lkXG4gKi9cbmZ1bmN0aW9uIHdyaXRlVG9TdHJlYW0oZGVzdCwgaW5zdGFuY2UpIHtcblx0Y29uc3QgYm9keSA9IGluc3RhbmNlLmJvZHk7XG5cblxuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdC8vIGJvZHkgaXMgbnVsbFxuXHRcdGRlc3QuZW5kKCk7XG5cdH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSB7XG5cdFx0Ym9keS5zdHJlYW0oKS5waXBlKGRlc3QpO1xuXHR9IGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgYnVmZmVyXG5cdFx0ZGVzdC53cml0ZShib2R5KTtcblx0XHRkZXN0LmVuZCgpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGJvZHkgaXMgc3RyZWFtXG5cdFx0Ym9keS5waXBlKGRlc3QpO1xuXHR9XG59XG5cbi8vIGV4cG9zZSBQcm9taXNlXG5Cb2R5LlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcblxuLyoqXG4gKiBoZWFkZXJzLmpzXG4gKlxuICogSGVhZGVycyBjbGFzcyBvZmZlcnMgY29udmVuaWVudCBoZWxwZXJzXG4gKi9cblxuY29uc3QgaW52YWxpZFRva2VuUmVnZXggPSAvW15cXF5fYGEtekEtWlxcLTAtOSEjJCUmJyorLnx+XS87XG5jb25zdCBpbnZhbGlkSGVhZGVyQ2hhclJlZ2V4ID0gL1teXFx0XFx4MjAtXFx4N2VcXHg4MC1cXHhmZl0vO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU5hbWUobmFtZSkge1xuXHRuYW1lID0gYCR7bmFtZX1gO1xuXHRpZiAoaW52YWxpZFRva2VuUmVnZXgudGVzdChuYW1lKSB8fCBuYW1lID09PSAnJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYCR7bmFtZX0gaXMgbm90IGEgbGVnYWwgSFRUUCBoZWFkZXIgbmFtZWApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVmFsdWUodmFsdWUpIHtcblx0dmFsdWUgPSBgJHt2YWx1ZX1gO1xuXHRpZiAoaW52YWxpZEhlYWRlckNoYXJSZWdleC50ZXN0KHZhbHVlKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYCR7dmFsdWV9IGlzIG5vdCBhIGxlZ2FsIEhUVFAgaGVhZGVyIHZhbHVlYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBGaW5kIHRoZSBrZXkgaW4gdGhlIG1hcCBvYmplY3QgZ2l2ZW4gYSBoZWFkZXIgbmFtZS5cbiAqXG4gKiBSZXR1cm5zIHVuZGVmaW5lZCBpZiBub3QgZm91bmQuXG4gKlxuICogQHBhcmFtICAgU3RyaW5nICBuYW1lICBIZWFkZXIgbmFtZVxuICogQHJldHVybiAgU3RyaW5nfFVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBmaW5kKG1hcCwgbmFtZSkge1xuXHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRmb3IgKGNvbnN0IGtleSBpbiBtYXApIHtcblx0XHRpZiAoa2V5LnRvTG93ZXJDYXNlKCkgPT09IG5hbWUpIHtcblx0XHRcdHJldHVybiBrZXk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IE1BUCA9IFN5bWJvbCgnbWFwJyk7XG5jbGFzcyBIZWFkZXJzIHtcblx0LyoqXG4gICogSGVhZGVycyBjbGFzc1xuICAqXG4gICogQHBhcmFtICAgT2JqZWN0ICBoZWFkZXJzICBSZXNwb25zZSBoZWFkZXJzXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgaW5pdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkO1xuXG5cdFx0dGhpc1tNQVBdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRcdGlmIChpbml0IGluc3RhbmNlb2YgSGVhZGVycykge1xuXHRcdFx0Y29uc3QgcmF3SGVhZGVycyA9IGluaXQucmF3KCk7XG5cdFx0XHRjb25zdCBoZWFkZXJOYW1lcyA9IE9iamVjdC5rZXlzKHJhd0hlYWRlcnMpO1xuXG5cdFx0XHRmb3IgKGNvbnN0IGhlYWRlck5hbWUgb2YgaGVhZGVyTmFtZXMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCB2YWx1ZSBvZiByYXdIZWFkZXJzW2hlYWRlck5hbWVdKSB7XG5cdFx0XHRcdFx0dGhpcy5hcHBlbmQoaGVhZGVyTmFtZSwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBXZSBkb24ndCB3b3JyeSBhYm91dCBjb252ZXJ0aW5nIHByb3AgdG8gQnl0ZVN0cmluZyBoZXJlIGFzIGFwcGVuZCgpXG5cdFx0Ly8gd2lsbCBoYW5kbGUgaXQuXG5cdFx0aWYgKGluaXQgPT0gbnVsbCkgOyBlbHNlIGlmICh0eXBlb2YgaW5pdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGNvbnN0IG1ldGhvZCA9IGluaXRbU3ltYm9sLml0ZXJhdG9yXTtcblx0XHRcdGlmIChtZXRob2QgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIG1ldGhvZCAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0hlYWRlciBwYWlycyBtdXN0IGJlIGl0ZXJhYmxlJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBzZXF1ZW5jZTxzZXF1ZW5jZTxCeXRlU3RyaW5nPj5cblx0XHRcdFx0Ly8gTm90ZTogcGVyIHNwZWMgd2UgaGF2ZSB0byBmaXJzdCBleGhhdXN0IHRoZSBsaXN0cyB0aGVuIHByb2Nlc3MgdGhlbVxuXHRcdFx0XHRjb25zdCBwYWlycyA9IFtdO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHBhaXIgb2YgaW5pdCkge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgcGFpciAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhaXJbU3ltYm9sLml0ZXJhdG9yXSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRWFjaCBoZWFkZXIgcGFpciBtdXN0IGJlIGl0ZXJhYmxlJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBhaXJzLnB1c2goQXJyYXkuZnJvbShwYWlyKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcblx0XHRcdFx0XHRpZiAocGFpci5sZW5ndGggIT09IDIpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0VhY2ggaGVhZGVyIHBhaXIgbXVzdCBiZSBhIG5hbWUvdmFsdWUgdHVwbGUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5hcHBlbmQocGFpclswXSwgcGFpclsxXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHJlY29yZDxCeXRlU3RyaW5nLCBCeXRlU3RyaW5nPlxuXHRcdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhpbml0KSkge1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gaW5pdFtrZXldO1xuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKGtleSwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb3ZpZGVkIGluaXRpYWxpemVyIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG4gICogUmV0dXJuIGNvbWJpbmVkIGhlYWRlciB2YWx1ZSBnaXZlbiBuYW1lXG4gICpcbiAgKiBAcGFyYW0gICBTdHJpbmcgIG5hbWUgIEhlYWRlciBuYW1lXG4gICogQHJldHVybiAgTWl4ZWRcbiAgKi9cblx0Z2V0KG5hbWUpIHtcblx0XHRuYW1lID0gYCR7bmFtZX1gO1xuXHRcdHZhbGlkYXRlTmFtZShuYW1lKTtcblx0XHRjb25zdCBrZXkgPSBmaW5kKHRoaXNbTUFQXSwgbmFtZSk7XG5cdFx0aWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpc1tNQVBdW2tleV0uam9pbignLCAnKTtcblx0fVxuXG5cdC8qKlxuICAqIEl0ZXJhdGUgb3ZlciBhbGwgaGVhZGVyc1xuICAqXG4gICogQHBhcmFtICAgRnVuY3Rpb24gIGNhbGxiYWNrICBFeGVjdXRlZCBmb3IgZWFjaCBpdGVtIHdpdGggcGFyYW1ldGVycyAodmFsdWUsIG5hbWUsIHRoaXNBcmcpXG4gICogQHBhcmFtICAgQm9vbGVhbiAgIHRoaXNBcmcgICBgdGhpc2AgY29udGV4dCBmb3IgY2FsbGJhY2sgZnVuY3Rpb25cbiAgKiBAcmV0dXJuICBWb2lkXG4gICovXG5cdGZvckVhY2goY2FsbGJhY2spIHtcblx0XHRsZXQgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuXG5cdFx0bGV0IHBhaXJzID0gZ2V0SGVhZGVycyh0aGlzKTtcblx0XHRsZXQgaSA9IDA7XG5cdFx0d2hpbGUgKGkgPCBwYWlycy5sZW5ndGgpIHtcblx0XHRcdHZhciBfcGFpcnMkaSA9IHBhaXJzW2ldO1xuXHRcdFx0Y29uc3QgbmFtZSA9IF9wYWlycyRpWzBdLFxuXHRcdFx0ICAgICAgdmFsdWUgPSBfcGFpcnMkaVsxXTtcblxuXHRcdFx0Y2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwgbmFtZSwgdGhpcyk7XG5cdFx0XHRwYWlycyA9IGdldEhlYWRlcnModGhpcyk7XG5cdFx0XHRpKys7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG4gICogT3ZlcndyaXRlIGhlYWRlciB2YWx1ZXMgZ2l2ZW4gbmFtZVxuICAqXG4gICogQHBhcmFtICAgU3RyaW5nICBuYW1lICAgSGVhZGVyIG5hbWVcbiAgKiBAcGFyYW0gICBTdHJpbmcgIHZhbHVlICBIZWFkZXIgdmFsdWVcbiAgKiBAcmV0dXJuICBWb2lkXG4gICovXG5cdHNldChuYW1lLCB2YWx1ZSkge1xuXHRcdG5hbWUgPSBgJHtuYW1lfWA7XG5cdFx0dmFsdWUgPSBgJHt2YWx1ZX1gO1xuXHRcdHZhbGlkYXRlTmFtZShuYW1lKTtcblx0XHR2YWxpZGF0ZVZhbHVlKHZhbHVlKTtcblx0XHRjb25zdCBrZXkgPSBmaW5kKHRoaXNbTUFQXSwgbmFtZSk7XG5cdFx0dGhpc1tNQVBdW2tleSAhPT0gdW5kZWZpbmVkID8ga2V5IDogbmFtZV0gPSBbdmFsdWVdO1xuXHR9XG5cblx0LyoqXG4gICogQXBwZW5kIGEgdmFsdWUgb250byBleGlzdGluZyBoZWFkZXJcbiAgKlxuICAqIEBwYXJhbSAgIFN0cmluZyAgbmFtZSAgIEhlYWRlciBuYW1lXG4gICogQHBhcmFtICAgU3RyaW5nICB2YWx1ZSAgSGVhZGVyIHZhbHVlXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRhcHBlbmQobmFtZSwgdmFsdWUpIHtcblx0XHRuYW1lID0gYCR7bmFtZX1gO1xuXHRcdHZhbHVlID0gYCR7dmFsdWV9YDtcblx0XHR2YWxpZGF0ZU5hbWUobmFtZSk7XG5cdFx0dmFsaWRhdGVWYWx1ZSh2YWx1ZSk7XG5cdFx0Y29uc3Qga2V5ID0gZmluZCh0aGlzW01BUF0sIG5hbWUpO1xuXHRcdGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpc1tNQVBdW2tleV0ucHVzaCh2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXNbTUFQXVtuYW1lXSA9IFt2YWx1ZV07XG5cdFx0fVxuXHR9XG5cblx0LyoqXG4gICogQ2hlY2sgZm9yIGhlYWRlciBuYW1lIGV4aXN0ZW5jZVxuICAqXG4gICogQHBhcmFtICAgU3RyaW5nICAgbmFtZSAgSGVhZGVyIG5hbWVcbiAgKiBAcmV0dXJuICBCb29sZWFuXG4gICovXG5cdGhhcyhuYW1lKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9YDtcblx0XHR2YWxpZGF0ZU5hbWUobmFtZSk7XG5cdFx0cmV0dXJuIGZpbmQodGhpc1tNQVBdLCBuYW1lKSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqXG4gICogRGVsZXRlIGFsbCBoZWFkZXIgdmFsdWVzIGdpdmVuIG5hbWVcbiAgKlxuICAqIEBwYXJhbSAgIFN0cmluZyAgbmFtZSAgSGVhZGVyIG5hbWVcbiAgKiBAcmV0dXJuICBWb2lkXG4gICovXG5cdGRlbGV0ZShuYW1lKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9YDtcblx0XHR2YWxpZGF0ZU5hbWUobmFtZSk7XG5cdFx0Y29uc3Qga2V5ID0gZmluZCh0aGlzW01BUF0sIG5hbWUpO1xuXHRcdGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGVsZXRlIHRoaXNbTUFQXVtrZXldO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuICAqIFJldHVybiByYXcgaGVhZGVycyAobm9uLXNwZWMgYXBpKVxuICAqXG4gICogQHJldHVybiAgT2JqZWN0XG4gICovXG5cdHJhdygpIHtcblx0XHRyZXR1cm4gdGhpc1tNQVBdO1xuXHR9XG5cblx0LyoqXG4gICogR2V0IGFuIGl0ZXJhdG9yIG9uIGtleXMuXG4gICpcbiAgKiBAcmV0dXJuICBJdGVyYXRvclxuICAqL1xuXHRrZXlzKCkge1xuXHRcdHJldHVybiBjcmVhdGVIZWFkZXJzSXRlcmF0b3IodGhpcywgJ2tleScpO1xuXHR9XG5cblx0LyoqXG4gICogR2V0IGFuIGl0ZXJhdG9yIG9uIHZhbHVlcy5cbiAgKlxuICAqIEByZXR1cm4gIEl0ZXJhdG9yXG4gICovXG5cdHZhbHVlcygpIHtcblx0XHRyZXR1cm4gY3JlYXRlSGVhZGVyc0l0ZXJhdG9yKHRoaXMsICd2YWx1ZScpO1xuXHR9XG5cblx0LyoqXG4gICogR2V0IGFuIGl0ZXJhdG9yIG9uIGVudHJpZXMuXG4gICpcbiAgKiBUaGlzIGlzIHRoZSBkZWZhdWx0IGl0ZXJhdG9yIG9mIHRoZSBIZWFkZXJzIG9iamVjdC5cbiAgKlxuICAqIEByZXR1cm4gIEl0ZXJhdG9yXG4gICovXG5cdFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuXHRcdHJldHVybiBjcmVhdGVIZWFkZXJzSXRlcmF0b3IodGhpcywgJ2tleSt2YWx1ZScpO1xuXHR9XG59XG5IZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhlYWRlcnMucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcblx0dmFsdWU6ICdIZWFkZXJzJyxcblx0d3JpdGFibGU6IGZhbHNlLFxuXHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0Y29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoSGVhZGVycy5wcm90b3R5cGUsIHtcblx0Z2V0OiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0Zm9yRWFjaDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHNldDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGFwcGVuZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGhhczogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGRlbGV0ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGtleXM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHR2YWx1ZXM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRlbnRyaWVzOiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5cbmZ1bmN0aW9uIGdldEhlYWRlcnMoaGVhZGVycykge1xuXHRsZXQga2luZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ2tleSt2YWx1ZSc7XG5cblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGhlYWRlcnNbTUFQXSkuc29ydCgpO1xuXHRyZXR1cm4ga2V5cy5tYXAoa2luZCA9PT0gJ2tleScgPyBmdW5jdGlvbiAoaykge1xuXHRcdHJldHVybiBrLnRvTG93ZXJDYXNlKCk7XG5cdH0gOiBraW5kID09PSAndmFsdWUnID8gZnVuY3Rpb24gKGspIHtcblx0XHRyZXR1cm4gaGVhZGVyc1tNQVBdW2tdLmpvaW4oJywgJyk7XG5cdH0gOiBmdW5jdGlvbiAoaykge1xuXHRcdHJldHVybiBbay50b0xvd2VyQ2FzZSgpLCBoZWFkZXJzW01BUF1ba10uam9pbignLCAnKV07XG5cdH0pO1xufVxuXG5jb25zdCBJTlRFUk5BTCA9IFN5bWJvbCgnaW50ZXJuYWwnKTtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyc0l0ZXJhdG9yKHRhcmdldCwga2luZCkge1xuXHRjb25zdCBpdGVyYXRvciA9IE9iamVjdC5jcmVhdGUoSGVhZGVyc0l0ZXJhdG9yUHJvdG90eXBlKTtcblx0aXRlcmF0b3JbSU5URVJOQUxdID0ge1xuXHRcdHRhcmdldCxcblx0XHRraW5kLFxuXHRcdGluZGV4OiAwXG5cdH07XG5cdHJldHVybiBpdGVyYXRvcjtcbn1cblxuY29uc3QgSGVhZGVyc0l0ZXJhdG9yUHJvdG90eXBlID0gT2JqZWN0LnNldFByb3RvdHlwZU9mKHtcblx0bmV4dCgpIHtcblx0XHQvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcblx0XHRpZiAoIXRoaXMgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSBIZWFkZXJzSXRlcmF0b3JQcm90b3R5cGUpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZhbHVlIG9mIGB0aGlzYCBpcyBub3QgYSBIZWFkZXJzSXRlcmF0b3InKTtcblx0XHR9XG5cblx0XHR2YXIgX0lOVEVSTkFMID0gdGhpc1tJTlRFUk5BTF07XG5cdFx0Y29uc3QgdGFyZ2V0ID0gX0lOVEVSTkFMLnRhcmdldCxcblx0XHQgICAgICBraW5kID0gX0lOVEVSTkFMLmtpbmQsXG5cdFx0ICAgICAgaW5kZXggPSBfSU5URVJOQUwuaW5kZXg7XG5cblx0XHRjb25zdCB2YWx1ZXMgPSBnZXRIZWFkZXJzKHRhcmdldCwga2luZCk7XG5cdFx0Y29uc3QgbGVuID0gdmFsdWVzLmxlbmd0aDtcblx0XHRpZiAoaW5kZXggPj0gbGVuKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2YWx1ZTogdW5kZWZpbmVkLFxuXHRcdFx0XHRkb25lOiB0cnVlXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHRoaXNbSU5URVJOQUxdLmluZGV4ID0gaW5kZXggKyAxO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB2YWx1ZXNbaW5kZXhdLFxuXHRcdFx0ZG9uZTogZmFsc2Vcblx0XHR9O1xuXHR9XG59LCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT2JqZWN0LmdldFByb3RvdHlwZU9mKFtdW1N5bWJvbC5pdGVyYXRvcl0oKSkpKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhlYWRlcnNJdGVyYXRvclByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdHZhbHVlOiAnSGVhZGVyc0l0ZXJhdG9yJyxcblx0d3JpdGFibGU6IGZhbHNlLFxuXHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0Y29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuLyoqXG4gKiBFeHBvcnQgdGhlIEhlYWRlcnMgb2JqZWN0IGluIGEgZm9ybSB0aGF0IE5vZGUuanMgY2FuIGNvbnN1bWUuXG4gKlxuICogQHBhcmFtICAgSGVhZGVycyAgaGVhZGVyc1xuICogQHJldHVybiAgT2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGV4cG9ydE5vZGVDb21wYXRpYmxlSGVhZGVycyhoZWFkZXJzKSB7XG5cdGNvbnN0IG9iaiA9IE9iamVjdC5hc3NpZ24oeyBfX3Byb3RvX186IG51bGwgfSwgaGVhZGVyc1tNQVBdKTtcblxuXHQvLyBodHRwLnJlcXVlc3QoKSBvbmx5IHN1cHBvcnRzIHN0cmluZyBhcyBIb3N0IGhlYWRlci4gVGhpcyBoYWNrIG1ha2VzXG5cdC8vIHNwZWNpZnlpbmcgY3VzdG9tIEhvc3QgaGVhZGVyIHBvc3NpYmxlLlxuXHRjb25zdCBob3N0SGVhZGVyS2V5ID0gZmluZChoZWFkZXJzW01BUF0sICdIb3N0Jyk7XG5cdGlmIChob3N0SGVhZGVyS2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRvYmpbaG9zdEhlYWRlcktleV0gPSBvYmpbaG9zdEhlYWRlcktleV1bMF07XG5cdH1cblxuXHRyZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIEhlYWRlcnMgb2JqZWN0IGZyb20gYW4gb2JqZWN0IG9mIGhlYWRlcnMsIGlnbm9yaW5nIHRob3NlIHRoYXQgZG9cbiAqIG5vdCBjb25mb3JtIHRvIEhUVFAgZ3JhbW1hciBwcm9kdWN0aW9ucy5cbiAqXG4gKiBAcGFyYW0gICBPYmplY3QgIG9iaiAgT2JqZWN0IG9mIGhlYWRlcnNcbiAqIEByZXR1cm4gIEhlYWRlcnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSGVhZGVyc0xlbmllbnQob2JqKSB7XG5cdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXMob2JqKSkge1xuXHRcdGlmIChpbnZhbGlkVG9rZW5SZWdleC50ZXN0KG5hbWUpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkob2JqW25hbWVdKSkge1xuXHRcdFx0Zm9yIChjb25zdCB2YWwgb2Ygb2JqW25hbWVdKSB7XG5cdFx0XHRcdGlmIChpbnZhbGlkSGVhZGVyQ2hhclJlZ2V4LnRlc3QodmFsKSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChoZWFkZXJzW01BUF1bbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGhlYWRlcnNbTUFQXVtuYW1lXSA9IFt2YWxdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGhlYWRlcnNbTUFQXVtuYW1lXS5wdXNoKHZhbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCFpbnZhbGlkSGVhZGVyQ2hhclJlZ2V4LnRlc3Qob2JqW25hbWVdKSkge1xuXHRcdFx0aGVhZGVyc1tNQVBdW25hbWVdID0gW29ialtuYW1lXV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBoZWFkZXJzO1xufVxuXG5jb25zdCBJTlRFUk5BTFMkMSA9IFN5bWJvbCgnUmVzcG9uc2UgaW50ZXJuYWxzJyk7XG5cbi8vIGZpeCBhbiBpc3N1ZSB3aGVyZSBcIlNUQVRVU19DT0RFU1wiIGFyZW4ndCBhIG5hbWVkIGV4cG9ydCBmb3Igbm9kZSA8MTBcbmNvbnN0IFNUQVRVU19DT0RFUyA9IGh0dHAuU1RBVFVTX0NPREVTO1xuXG4vKipcbiAqIFJlc3BvbnNlIGNsYXNzXG4gKlxuICogQHBhcmFtICAgU3RyZWFtICBib2R5ICBSZWFkYWJsZSBzdHJlYW1cbiAqIEBwYXJhbSAgIE9iamVjdCAgb3B0cyAgUmVzcG9uc2Ugb3B0aW9uc1xuICogQHJldHVybiAgVm9pZFxuICovXG5jbGFzcyBSZXNwb25zZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBib2R5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuXHRcdGxldCBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuXHRcdEJvZHkuY2FsbCh0aGlzLCBib2R5LCBvcHRzKTtcblxuXHRcdGNvbnN0IHN0YXR1cyA9IG9wdHMuc3RhdHVzIHx8IDIwMDtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0cy5oZWFkZXJzKTtcblxuXHRcdGlmIChib2R5ICE9IG51bGwgJiYgIWhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSkge1xuXHRcdFx0Y29uc3QgY29udGVudFR5cGUgPSBleHRyYWN0Q29udGVudFR5cGUoYm9keSk7XG5cdFx0XHRpZiAoY29udGVudFR5cGUpIHtcblx0XHRcdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzW0lOVEVSTkFMUyQxXSA9IHtcblx0XHRcdHVybDogb3B0cy51cmwsXG5cdFx0XHRzdGF0dXMsXG5cdFx0XHRzdGF0dXNUZXh0OiBvcHRzLnN0YXR1c1RleHQgfHwgU1RBVFVTX0NPREVTW3N0YXR1c10sXG5cdFx0XHRoZWFkZXJzLFxuXHRcdFx0Y291bnRlcjogb3B0cy5jb3VudGVyXG5cdFx0fTtcblx0fVxuXG5cdGdldCB1cmwoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLnVybCB8fCAnJztcblx0fVxuXG5cdGdldCBzdGF0dXMoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLnN0YXR1cztcblx0fVxuXG5cdC8qKlxuICAqIENvbnZlbmllbmNlIHByb3BlcnR5IHJlcHJlc2VudGluZyBpZiB0aGUgcmVxdWVzdCBlbmRlZCBub3JtYWxseVxuICAqL1xuXHRnZXQgb2soKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLnN0YXR1cyA+PSAyMDAgJiYgdGhpc1tJTlRFUk5BTFMkMV0uc3RhdHVzIDwgMzAwO1xuXHR9XG5cblx0Z2V0IHJlZGlyZWN0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLmNvdW50ZXIgPiAwO1xuXHR9XG5cblx0Z2V0IHN0YXR1c1RleHQoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLnN0YXR1c1RleHQ7XG5cdH1cblxuXHRnZXQgaGVhZGVycygpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMV0uaGVhZGVycztcblx0fVxuXG5cdC8qKlxuICAqIENsb25lIHRoaXMgcmVzcG9uc2VcbiAgKlxuICAqIEByZXR1cm4gIFJlc3BvbnNlXG4gICovXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgUmVzcG9uc2UoY2xvbmUodGhpcyksIHtcblx0XHRcdHVybDogdGhpcy51cmwsXG5cdFx0XHRzdGF0dXM6IHRoaXMuc3RhdHVzLFxuXHRcdFx0c3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuXHRcdFx0aGVhZGVyczogdGhpcy5oZWFkZXJzLFxuXHRcdFx0b2s6IHRoaXMub2ssXG5cdFx0XHRyZWRpcmVjdGVkOiB0aGlzLnJlZGlyZWN0ZWRcblx0XHR9KTtcblx0fVxufVxuXG5Cb2R5Lm1peEluKFJlc3BvbnNlLnByb3RvdHlwZSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlc3BvbnNlLnByb3RvdHlwZSwge1xuXHR1cmw6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRzdGF0dXM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRvazogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHJlZGlyZWN0ZWQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRzdGF0dXNUZXh0OiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0aGVhZGVyczogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGNsb25lOiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXNwb25zZS5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuXHR2YWx1ZTogJ1Jlc3BvbnNlJyxcblx0d3JpdGFibGU6IGZhbHNlLFxuXHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0Y29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuY29uc3QgSU5URVJOQUxTJDIgPSBTeW1ib2woJ1JlcXVlc3QgaW50ZXJuYWxzJyk7XG5cbi8vIGZpeCBhbiBpc3N1ZSB3aGVyZSBcImZvcm1hdFwiLCBcInBhcnNlXCIgYXJlbid0IGEgbmFtZWQgZXhwb3J0IGZvciBub2RlIDwxMFxuY29uc3QgcGFyc2VfdXJsID0gVXJsLnBhcnNlO1xuY29uc3QgZm9ybWF0X3VybCA9IFVybC5mb3JtYXQ7XG5cbmNvbnN0IHN0cmVhbURlc3RydWN0aW9uU3VwcG9ydGVkID0gJ2Rlc3Ryb3knIGluIFN0cmVhbS5SZWFkYWJsZS5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBSZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSAgIE1peGVkICAgaW5wdXRcbiAqIEByZXR1cm4gIEJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNSZXF1ZXN0KGlucHV0KSB7XG5cdHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnICYmIHR5cGVvZiBpbnB1dFtJTlRFUk5BTFMkMl0gPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc0Fib3J0U2lnbmFsKHNpZ25hbCkge1xuXHRjb25zdCBwcm90byA9IHNpZ25hbCAmJiB0eXBlb2Ygc2lnbmFsID09PSAnb2JqZWN0JyAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc2lnbmFsKTtcblx0cmV0dXJuICEhKHByb3RvICYmIHByb3RvLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdBYm9ydFNpZ25hbCcpO1xufVxuXG4vKipcbiAqIFJlcXVlc3QgY2xhc3NcbiAqXG4gKiBAcGFyYW0gICBNaXhlZCAgIGlucHV0ICBVcmwgb3IgUmVxdWVzdCBpbnN0YW5jZVxuICogQHBhcmFtICAgT2JqZWN0ICBpbml0ICAgQ3VzdG9tIG9wdGlvbnNcbiAqIEByZXR1cm4gIFZvaWRcbiAqL1xuY2xhc3MgUmVxdWVzdCB7XG5cdGNvbnN0cnVjdG9yKGlucHV0KSB7XG5cdFx0bGV0IGluaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG5cdFx0bGV0IHBhcnNlZFVSTDtcblxuXHRcdC8vIG5vcm1hbGl6ZSBpbnB1dFxuXHRcdGlmICghaXNSZXF1ZXN0KGlucHV0KSkge1xuXHRcdFx0aWYgKGlucHV0ICYmIGlucHV0LmhyZWYpIHtcblx0XHRcdFx0Ly8gaW4gb3JkZXIgdG8gc3VwcG9ydCBOb2RlLmpzJyBVcmwgb2JqZWN0czsgdGhvdWdoIFdIQVRXRydzIFVSTCBvYmplY3RzXG5cdFx0XHRcdC8vIHdpbGwgZmFsbCBpbnRvIHRoaXMgYnJhbmNoIGFsc28gKHNpbmNlIHRoZWlyIGB0b1N0cmluZygpYCB3aWxsIHJldHVyblxuXHRcdFx0XHQvLyBgaHJlZmAgcHJvcGVydHkgYW55d2F5KVxuXHRcdFx0XHRwYXJzZWRVUkwgPSBwYXJzZV91cmwoaW5wdXQuaHJlZik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBjb2VyY2UgaW5wdXQgdG8gYSBzdHJpbmcgYmVmb3JlIGF0dGVtcHRpbmcgdG8gcGFyc2Vcblx0XHRcdFx0cGFyc2VkVVJMID0gcGFyc2VfdXJsKGAke2lucHV0fWApO1xuXHRcdFx0fVxuXHRcdFx0aW5wdXQgPSB7fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFyc2VkVVJMID0gcGFyc2VfdXJsKGlucHV0LnVybCk7XG5cdFx0fVxuXG5cdFx0bGV0IG1ldGhvZCA9IGluaXQubWV0aG9kIHx8IGlucHV0Lm1ldGhvZCB8fCAnR0VUJztcblx0XHRtZXRob2QgPSBtZXRob2QudG9VcHBlckNhc2UoKTtcblxuXHRcdGlmICgoaW5pdC5ib2R5ICE9IG51bGwgfHwgaXNSZXF1ZXN0KGlucHV0KSAmJiBpbnB1dC5ib2R5ICE9PSBudWxsKSAmJiAobWV0aG9kID09PSAnR0VUJyB8fCBtZXRob2QgPT09ICdIRUFEJykpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlcXVlc3Qgd2l0aCBHRVQvSEVBRCBtZXRob2QgY2Fubm90IGhhdmUgYm9keScpO1xuXHRcdH1cblxuXHRcdGxldCBpbnB1dEJvZHkgPSBpbml0LmJvZHkgIT0gbnVsbCA/IGluaXQuYm9keSA6IGlzUmVxdWVzdChpbnB1dCkgJiYgaW5wdXQuYm9keSAhPT0gbnVsbCA/IGNsb25lKGlucHV0KSA6IG51bGw7XG5cblx0XHRCb2R5LmNhbGwodGhpcywgaW5wdXRCb2R5LCB7XG5cdFx0XHR0aW1lb3V0OiBpbml0LnRpbWVvdXQgfHwgaW5wdXQudGltZW91dCB8fCAwLFxuXHRcdFx0c2l6ZTogaW5pdC5zaXplIHx8IGlucHV0LnNpemUgfHwgMFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKGluaXQuaGVhZGVycyB8fCBpbnB1dC5oZWFkZXJzIHx8IHt9KTtcblxuXHRcdGlmIChpbnB1dEJvZHkgIT0gbnVsbCAmJiAhaGVhZGVycy5oYXMoJ0NvbnRlbnQtVHlwZScpKSB7XG5cdFx0XHRjb25zdCBjb250ZW50VHlwZSA9IGV4dHJhY3RDb250ZW50VHlwZShpbnB1dEJvZHkpO1xuXHRcdFx0aWYgKGNvbnRlbnRUeXBlKSB7XG5cdFx0XHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHNpZ25hbCA9IGlzUmVxdWVzdChpbnB1dCkgPyBpbnB1dC5zaWduYWwgOiBudWxsO1xuXHRcdGlmICgnc2lnbmFsJyBpbiBpbml0KSBzaWduYWwgPSBpbml0LnNpZ25hbDtcblxuXHRcdGlmIChzaWduYWwgIT0gbnVsbCAmJiAhaXNBYm9ydFNpZ25hbChzaWduYWwpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBzaWduYWwgdG8gYmUgYW4gaW5zdGFuY2VvZiBBYm9ydFNpZ25hbCcpO1xuXHRcdH1cblxuXHRcdHRoaXNbSU5URVJOQUxTJDJdID0ge1xuXHRcdFx0bWV0aG9kLFxuXHRcdFx0cmVkaXJlY3Q6IGluaXQucmVkaXJlY3QgfHwgaW5wdXQucmVkaXJlY3QgfHwgJ2ZvbGxvdycsXG5cdFx0XHRoZWFkZXJzLFxuXHRcdFx0cGFyc2VkVVJMLFxuXHRcdFx0c2lnbmFsXG5cdFx0fTtcblxuXHRcdC8vIG5vZGUtZmV0Y2gtb25seSBvcHRpb25zXG5cdFx0dGhpcy5mb2xsb3cgPSBpbml0LmZvbGxvdyAhPT0gdW5kZWZpbmVkID8gaW5pdC5mb2xsb3cgOiBpbnB1dC5mb2xsb3cgIT09IHVuZGVmaW5lZCA/IGlucHV0LmZvbGxvdyA6IDIwO1xuXHRcdHRoaXMuY29tcHJlc3MgPSBpbml0LmNvbXByZXNzICE9PSB1bmRlZmluZWQgPyBpbml0LmNvbXByZXNzIDogaW5wdXQuY29tcHJlc3MgIT09IHVuZGVmaW5lZCA/IGlucHV0LmNvbXByZXNzIDogdHJ1ZTtcblx0XHR0aGlzLmNvdW50ZXIgPSBpbml0LmNvdW50ZXIgfHwgaW5wdXQuY291bnRlciB8fCAwO1xuXHRcdHRoaXMuYWdlbnQgPSBpbml0LmFnZW50IHx8IGlucHV0LmFnZW50O1xuXHR9XG5cblx0Z2V0IG1ldGhvZCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMl0ubWV0aG9kO1xuXHR9XG5cblx0Z2V0IHVybCgpIHtcblx0XHRyZXR1cm4gZm9ybWF0X3VybCh0aGlzW0lOVEVSTkFMUyQyXS5wYXJzZWRVUkwpO1xuXHR9XG5cblx0Z2V0IGhlYWRlcnMoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDJdLmhlYWRlcnM7XG5cdH1cblxuXHRnZXQgcmVkaXJlY3QoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDJdLnJlZGlyZWN0O1xuXHR9XG5cblx0Z2V0IHNpZ25hbCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMl0uc2lnbmFsO1xuXHR9XG5cblx0LyoqXG4gICogQ2xvbmUgdGhpcyByZXF1ZXN0XG4gICpcbiAgKiBAcmV0dXJuICBSZXF1ZXN0XG4gICovXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgUmVxdWVzdCh0aGlzKTtcblx0fVxufVxuXG5Cb2R5Lm1peEluKFJlcXVlc3QucHJvdG90eXBlKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlcXVlc3QucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcblx0dmFsdWU6ICdSZXF1ZXN0Jyxcblx0d3JpdGFibGU6IGZhbHNlLFxuXHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0Y29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUmVxdWVzdC5wcm90b3R5cGUsIHtcblx0bWV0aG9kOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0dXJsOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0aGVhZGVyczogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHJlZGlyZWN0OiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0Y2xvbmU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRzaWduYWw6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgUmVxdWVzdCB0byBOb2RlLmpzIGh0dHAgcmVxdWVzdCBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAgIFJlcXVlc3QgIEEgUmVxdWVzdCBpbnN0YW5jZVxuICogQHJldHVybiAgT2JqZWN0ICAgVGhlIG9wdGlvbnMgb2JqZWN0IHRvIGJlIHBhc3NlZCB0byBodHRwLnJlcXVlc3RcbiAqL1xuZnVuY3Rpb24gZ2V0Tm9kZVJlcXVlc3RPcHRpb25zKHJlcXVlc3QpIHtcblx0Y29uc3QgcGFyc2VkVVJMID0gcmVxdWVzdFtJTlRFUk5BTFMkMl0ucGFyc2VkVVJMO1xuXHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMocmVxdWVzdFtJTlRFUk5BTFMkMl0uaGVhZGVycyk7XG5cblx0Ly8gZmV0Y2ggc3RlcCAxLjNcblx0aWYgKCFoZWFkZXJzLmhhcygnQWNjZXB0JykpIHtcblx0XHRoZWFkZXJzLnNldCgnQWNjZXB0JywgJyovKicpO1xuXHR9XG5cblx0Ly8gQmFzaWMgZmV0Y2hcblx0aWYgKCFwYXJzZWRVUkwucHJvdG9jb2wgfHwgIXBhcnNlZFVSTC5ob3N0bmFtZSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09ubHkgYWJzb2x1dGUgVVJMcyBhcmUgc3VwcG9ydGVkJyk7XG5cdH1cblxuXHRpZiAoIS9eaHR0cHM/OiQvLnRlc3QocGFyc2VkVVJMLnByb3RvY29sKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09ubHkgSFRUUChTKSBwcm90b2NvbHMgYXJlIHN1cHBvcnRlZCcpO1xuXHR9XG5cblx0aWYgKHJlcXVlc3Quc2lnbmFsICYmIHJlcXVlc3QuYm9keSBpbnN0YW5jZW9mIFN0cmVhbS5SZWFkYWJsZSAmJiAhc3RyZWFtRGVzdHJ1Y3Rpb25TdXBwb3J0ZWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NhbmNlbGxhdGlvbiBvZiBzdHJlYW1lZCByZXF1ZXN0cyB3aXRoIEFib3J0U2lnbmFsIGlzIG5vdCBzdXBwb3J0ZWQgaW4gbm9kZSA8IDgnKTtcblx0fVxuXG5cdC8vIEhUVFAtbmV0d29yay1vci1jYWNoZSBmZXRjaCBzdGVwcyAyLjQtMi43XG5cdGxldCBjb250ZW50TGVuZ3RoVmFsdWUgPSBudWxsO1xuXHRpZiAocmVxdWVzdC5ib2R5ID09IG51bGwgJiYgL14oUE9TVHxQVVQpJC9pLnRlc3QocmVxdWVzdC5tZXRob2QpKSB7XG5cdFx0Y29udGVudExlbmd0aFZhbHVlID0gJzAnO1xuXHR9XG5cdGlmIChyZXF1ZXN0LmJvZHkgIT0gbnVsbCkge1xuXHRcdGNvbnN0IHRvdGFsQnl0ZXMgPSBnZXRUb3RhbEJ5dGVzKHJlcXVlc3QpO1xuXHRcdGlmICh0eXBlb2YgdG90YWxCeXRlcyA9PT0gJ251bWJlcicpIHtcblx0XHRcdGNvbnRlbnRMZW5ndGhWYWx1ZSA9IFN0cmluZyh0b3RhbEJ5dGVzKTtcblx0XHR9XG5cdH1cblx0aWYgKGNvbnRlbnRMZW5ndGhWYWx1ZSkge1xuXHRcdGhlYWRlcnMuc2V0KCdDb250ZW50LUxlbmd0aCcsIGNvbnRlbnRMZW5ndGhWYWx1ZSk7XG5cdH1cblxuXHQvLyBIVFRQLW5ldHdvcmstb3ItY2FjaGUgZmV0Y2ggc3RlcCAyLjExXG5cdGlmICghaGVhZGVycy5oYXMoJ1VzZXItQWdlbnQnKSkge1xuXHRcdGhlYWRlcnMuc2V0KCdVc2VyLUFnZW50JywgJ25vZGUtZmV0Y2gvMS4wICgraHR0cHM6Ly9naXRodWIuY29tL2JpdGlubi9ub2RlLWZldGNoKScpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrLW9yLWNhY2hlIGZldGNoIHN0ZXAgMi4xNVxuXHRpZiAocmVxdWVzdC5jb21wcmVzcyAmJiAhaGVhZGVycy5oYXMoJ0FjY2VwdC1FbmNvZGluZycpKSB7XG5cdFx0aGVhZGVycy5zZXQoJ0FjY2VwdC1FbmNvZGluZycsICdnemlwLGRlZmxhdGUnKTtcblx0fVxuXG5cdGxldCBhZ2VudCA9IHJlcXVlc3QuYWdlbnQ7XG5cdGlmICh0eXBlb2YgYWdlbnQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRhZ2VudCA9IGFnZW50KHBhcnNlZFVSTCk7XG5cdH1cblxuXHRpZiAoIWhlYWRlcnMuaGFzKCdDb25uZWN0aW9uJykgJiYgIWFnZW50KSB7XG5cdFx0aGVhZGVycy5zZXQoJ0Nvbm5lY3Rpb24nLCAnY2xvc2UnKTtcblx0fVxuXG5cdC8vIEhUVFAtbmV0d29yayBmZXRjaCBzdGVwIDQuMlxuXHQvLyBjaHVua2VkIGVuY29kaW5nIGlzIGhhbmRsZWQgYnkgTm9kZS5qc1xuXG5cdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRVUkwsIHtcblx0XHRtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuXHRcdGhlYWRlcnM6IGV4cG9ydE5vZGVDb21wYXRpYmxlSGVhZGVycyhoZWFkZXJzKSxcblx0XHRhZ2VudFxuXHR9KTtcbn1cblxuLyoqXG4gKiBhYm9ydC1lcnJvci5qc1xuICpcbiAqIEFib3J0RXJyb3IgaW50ZXJmYWNlIGZvciBjYW5jZWxsZWQgcmVxdWVzdHNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBBYm9ydEVycm9yIGluc3RhbmNlXG4gKlxuICogQHBhcmFtICAgU3RyaW5nICAgICAgbWVzc2FnZSAgICAgIEVycm9yIG1lc3NhZ2UgZm9yIGh1bWFuXG4gKiBAcmV0dXJuICBBYm9ydEVycm9yXG4gKi9cbmZ1bmN0aW9uIEFib3J0RXJyb3IobWVzc2FnZSkge1xuICBFcnJvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG4gIHRoaXMudHlwZSA9ICdhYm9ydGVkJztcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblxuICAvLyBoaWRlIGN1c3RvbSBlcnJvciBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIGZyb20gZW5kLXVzZXJzXG4gIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xufVxuXG5BYm9ydEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkFib3J0RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWJvcnRFcnJvcjtcbkFib3J0RXJyb3IucHJvdG90eXBlLm5hbWUgPSAnQWJvcnRFcnJvcic7XG5cbi8vIGZpeCBhbiBpc3N1ZSB3aGVyZSBcIlBhc3NUaHJvdWdoXCIsIFwicmVzb2x2ZVwiIGFyZW4ndCBhIG5hbWVkIGV4cG9ydCBmb3Igbm9kZSA8MTBcbmNvbnN0IFBhc3NUaHJvdWdoJDEgPSBTdHJlYW0uUGFzc1Rocm91Z2g7XG5jb25zdCByZXNvbHZlX3VybCA9IFVybC5yZXNvbHZlO1xuXG4vKipcbiAqIEZldGNoIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtICAgTWl4ZWQgICAgdXJsICAgQWJzb2x1dGUgdXJsIG9yIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEBwYXJhbSAgIE9iamVjdCAgIG9wdHMgIEZldGNoIG9wdGlvbnNcbiAqIEByZXR1cm4gIFByb21pc2VcbiAqL1xuZnVuY3Rpb24gZmV0Y2godXJsLCBvcHRzKSB7XG5cblx0Ly8gYWxsb3cgY3VzdG9tIHByb21pc2Vcblx0aWYgKCFmZXRjaC5Qcm9taXNlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCduYXRpdmUgcHJvbWlzZSBtaXNzaW5nLCBzZXQgZmV0Y2guUHJvbWlzZSB0byB5b3VyIGZhdm9yaXRlIGFsdGVybmF0aXZlJyk7XG5cdH1cblxuXHRCb2R5LlByb21pc2UgPSBmZXRjaC5Qcm9taXNlO1xuXG5cdC8vIHdyYXAgaHR0cC5yZXF1ZXN0IGludG8gZmV0Y2hcblx0cmV0dXJuIG5ldyBmZXRjaC5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHQvLyBidWlsZCByZXF1ZXN0IG9iamVjdFxuXHRcdGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwsIG9wdHMpO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBnZXROb2RlUmVxdWVzdE9wdGlvbnMocmVxdWVzdCk7XG5cblx0XHRjb25zdCBzZW5kID0gKG9wdGlvbnMucHJvdG9jb2wgPT09ICdodHRwczonID8gaHR0cHMgOiBodHRwKS5yZXF1ZXN0O1xuXHRcdGNvbnN0IHNpZ25hbCA9IHJlcXVlc3Quc2lnbmFsO1xuXG5cdFx0bGV0IHJlc3BvbnNlID0gbnVsbDtcblxuXHRcdGNvbnN0IGFib3J0ID0gZnVuY3Rpb24gYWJvcnQoKSB7XG5cdFx0XHRsZXQgZXJyb3IgPSBuZXcgQWJvcnRFcnJvcignVGhlIHVzZXIgYWJvcnRlZCBhIHJlcXVlc3QuJyk7XG5cdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0aWYgKHJlcXVlc3QuYm9keSAmJiByZXF1ZXN0LmJvZHkgaW5zdGFuY2VvZiBTdHJlYW0uUmVhZGFibGUpIHtcblx0XHRcdFx0cmVxdWVzdC5ib2R5LmRlc3Ryb3koZXJyb3IpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UuYm9keSkgcmV0dXJuO1xuXHRcdFx0cmVzcG9uc2UuYm9keS5lbWl0KCdlcnJvcicsIGVycm9yKTtcblx0XHR9O1xuXG5cdFx0aWYgKHNpZ25hbCAmJiBzaWduYWwuYWJvcnRlZCkge1xuXHRcdFx0YWJvcnQoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBhYm9ydEFuZEZpbmFsaXplID0gZnVuY3Rpb24gYWJvcnRBbmRGaW5hbGl6ZSgpIHtcblx0XHRcdGFib3J0KCk7XG5cdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdH07XG5cblx0XHQvLyBzZW5kIHJlcXVlc3Rcblx0XHRjb25zdCByZXEgPSBzZW5kKG9wdGlvbnMpO1xuXHRcdGxldCByZXFUaW1lb3V0O1xuXG5cdFx0aWYgKHNpZ25hbCkge1xuXHRcdFx0c2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRBbmRGaW5hbGl6ZSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZmluYWxpemUoKSB7XG5cdFx0XHRyZXEuYWJvcnQoKTtcblx0XHRcdGlmIChzaWduYWwpIHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0QW5kRmluYWxpemUpO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHJlcVRpbWVvdXQpO1xuXHRcdH1cblxuXHRcdGlmIChyZXF1ZXN0LnRpbWVvdXQpIHtcblx0XHRcdHJlcS5vbmNlKCdzb2NrZXQnLCBmdW5jdGlvbiAoc29ja2V0KSB7XG5cdFx0XHRcdHJlcVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYG5ldHdvcmsgdGltZW91dCBhdDogJHtyZXF1ZXN0LnVybH1gLCAncmVxdWVzdC10aW1lb3V0JykpO1xuXHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdH0sIHJlcXVlc3QudGltZW91dCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXEub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuXHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGByZXF1ZXN0IHRvICR7cmVxdWVzdC51cmx9IGZhaWxlZCwgcmVhc29uOiAke2Vyci5tZXNzYWdlfWAsICdzeXN0ZW0nLCBlcnIpKTtcblx0XHRcdGZpbmFsaXplKCk7XG5cdFx0fSk7XG5cblx0XHRyZXEub24oJ3Jlc3BvbnNlJywgZnVuY3Rpb24gKHJlcykge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHJlcVRpbWVvdXQpO1xuXG5cdFx0XHRjb25zdCBoZWFkZXJzID0gY3JlYXRlSGVhZGVyc0xlbmllbnQocmVzLmhlYWRlcnMpO1xuXG5cdFx0XHQvLyBIVFRQIGZldGNoIHN0ZXAgNVxuXHRcdFx0aWYgKGZldGNoLmlzUmVkaXJlY3QocmVzLnN0YXR1c0NvZGUpKSB7XG5cdFx0XHRcdC8vIEhUVFAgZmV0Y2ggc3RlcCA1LjJcblx0XHRcdFx0Y29uc3QgbG9jYXRpb24gPSBoZWFkZXJzLmdldCgnTG9jYXRpb24nKTtcblxuXHRcdFx0XHQvLyBIVFRQIGZldGNoIHN0ZXAgNS4zXG5cdFx0XHRcdGNvbnN0IGxvY2F0aW9uVVJMID0gbG9jYXRpb24gPT09IG51bGwgPyBudWxsIDogcmVzb2x2ZV91cmwocmVxdWVzdC51cmwsIGxvY2F0aW9uKTtcblxuXHRcdFx0XHQvLyBIVFRQIGZldGNoIHN0ZXAgNS41XG5cdFx0XHRcdHN3aXRjaCAocmVxdWVzdC5yZWRpcmVjdCkge1xuXHRcdFx0XHRcdGNhc2UgJ2Vycm9yJzpcblx0XHRcdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgcmVkaXJlY3QgbW9kZSBpcyBzZXQgdG8gZXJyb3I6ICR7cmVxdWVzdC51cmx9YCwgJ25vLXJlZGlyZWN0JykpO1xuXHRcdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRjYXNlICdtYW51YWwnOlxuXHRcdFx0XHRcdFx0Ly8gbm9kZS1mZXRjaC1zcGVjaWZpYyBzdGVwOiBtYWtlIG1hbnVhbCByZWRpcmVjdCBhIGJpdCBlYXNpZXIgdG8gdXNlIGJ5IHNldHRpbmcgdGhlIExvY2F0aW9uIGhlYWRlciB2YWx1ZSB0byB0aGUgcmVzb2x2ZWQgVVJMLlxuXHRcdFx0XHRcdFx0aWYgKGxvY2F0aW9uVVJMICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGhhbmRsZSBjb3JydXB0ZWQgaGVhZGVyXG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0aGVhZGVycy5zZXQoJ0xvY2F0aW9uJywgbG9jYXRpb25VUkwpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogbm9kZWpzIHNlcnZlciBwcmV2ZW50IGludmFsaWQgcmVzcG9uc2UgaGVhZGVycywgd2UgY2FuJ3QgdGVzdCB0aGlzIHRocm91Z2ggbm9ybWFsIHJlcXVlc3Rcblx0XHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnZm9sbG93Jzpcblx0XHRcdFx0XHRcdC8vIEhUVFAtcmVkaXJlY3QgZmV0Y2ggc3RlcCAyXG5cdFx0XHRcdFx0XHRpZiAobG9jYXRpb25VUkwgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEhUVFAtcmVkaXJlY3QgZmV0Y2ggc3RlcCA1XG5cdFx0XHRcdFx0XHRpZiAocmVxdWVzdC5jb3VudGVyID49IHJlcXVlc3QuZm9sbG93KSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgbWF4aW11bSByZWRpcmVjdCByZWFjaGVkIGF0OiAke3JlcXVlc3QudXJsfWAsICdtYXgtcmVkaXJlY3QnKSk7XG5cdFx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDYgKGNvdW50ZXIgaW5jcmVtZW50KVxuXHRcdFx0XHRcdFx0Ly8gQ3JlYXRlIGEgbmV3IFJlcXVlc3Qgb2JqZWN0LlxuXHRcdFx0XHRcdFx0Y29uc3QgcmVxdWVzdE9wdHMgPSB7XG5cdFx0XHRcdFx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKHJlcXVlc3QuaGVhZGVycyksXG5cdFx0XHRcdFx0XHRcdGZvbGxvdzogcmVxdWVzdC5mb2xsb3csXG5cdFx0XHRcdFx0XHRcdGNvdW50ZXI6IHJlcXVlc3QuY291bnRlciArIDEsXG5cdFx0XHRcdFx0XHRcdGFnZW50OiByZXF1ZXN0LmFnZW50LFxuXHRcdFx0XHRcdFx0XHRjb21wcmVzczogcmVxdWVzdC5jb21wcmVzcyxcblx0XHRcdFx0XHRcdFx0bWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcblx0XHRcdFx0XHRcdFx0Ym9keTogcmVxdWVzdC5ib2R5LFxuXHRcdFx0XHRcdFx0XHRzaWduYWw6IHJlcXVlc3Quc2lnbmFsLFxuXHRcdFx0XHRcdFx0XHR0aW1lb3V0OiByZXF1ZXN0LnRpbWVvdXRcblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdC8vIEhUVFAtcmVkaXJlY3QgZmV0Y2ggc3RlcCA5XG5cdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgIT09IDMwMyAmJiByZXF1ZXN0LmJvZHkgJiYgZ2V0VG90YWxCeXRlcyhyZXF1ZXN0KSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoJ0Nhbm5vdCBmb2xsb3cgcmVkaXJlY3Qgd2l0aCBib2R5IGJlaW5nIGEgcmVhZGFibGUgc3RyZWFtJywgJ3Vuc3VwcG9ydGVkLXJlZGlyZWN0JykpO1xuXHRcdFx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEhUVFAtcmVkaXJlY3QgZmV0Y2ggc3RlcCAxMVxuXHRcdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlID09PSAzMDMgfHwgKHJlcy5zdGF0dXNDb2RlID09PSAzMDEgfHwgcmVzLnN0YXR1c0NvZGUgPT09IDMwMikgJiYgcmVxdWVzdC5tZXRob2QgPT09ICdQT1NUJykge1xuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0T3B0cy5tZXRob2QgPSAnR0VUJztcblx0XHRcdFx0XHRcdFx0cmVxdWVzdE9wdHMuYm9keSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0cmVxdWVzdE9wdHMuaGVhZGVycy5kZWxldGUoJ2NvbnRlbnQtbGVuZ3RoJyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEhUVFAtcmVkaXJlY3QgZmV0Y2ggc3RlcCAxNVxuXHRcdFx0XHRcdFx0cmVzb2x2ZShmZXRjaChuZXcgUmVxdWVzdChsb2NhdGlvblVSTCwgcmVxdWVzdE9wdHMpKSk7XG5cdFx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHByZXBhcmUgcmVzcG9uc2Vcblx0XHRcdHJlcy5vbmNlKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmIChzaWduYWwpIHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0QW5kRmluYWxpemUpO1xuXHRcdFx0fSk7XG5cdFx0XHRsZXQgYm9keSA9IHJlcy5waXBlKG5ldyBQYXNzVGhyb3VnaCQxKCkpO1xuXG5cdFx0XHRjb25zdCByZXNwb25zZV9vcHRpb25zID0ge1xuXHRcdFx0XHR1cmw6IHJlcXVlc3QudXJsLFxuXHRcdFx0XHRzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxuXHRcdFx0XHRzdGF0dXNUZXh0OiByZXMuc3RhdHVzTWVzc2FnZSxcblx0XHRcdFx0aGVhZGVyczogaGVhZGVycyxcblx0XHRcdFx0c2l6ZTogcmVxdWVzdC5zaXplLFxuXHRcdFx0XHR0aW1lb3V0OiByZXF1ZXN0LnRpbWVvdXQsXG5cdFx0XHRcdGNvdW50ZXI6IHJlcXVlc3QuY291bnRlclxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gSFRUUC1uZXR3b3JrIGZldGNoIHN0ZXAgMTIuMS4xLjNcblx0XHRcdGNvbnN0IGNvZGluZ3MgPSBoZWFkZXJzLmdldCgnQ29udGVudC1FbmNvZGluZycpO1xuXG5cdFx0XHQvLyBIVFRQLW5ldHdvcmsgZmV0Y2ggc3RlcCAxMi4xLjEuNDogaGFuZGxlIGNvbnRlbnQgY29kaW5nc1xuXG5cdFx0XHQvLyBpbiBmb2xsb3dpbmcgc2NlbmFyaW9zIHdlIGlnbm9yZSBjb21wcmVzc2lvbiBzdXBwb3J0XG5cdFx0XHQvLyAxLiBjb21wcmVzc2lvbiBzdXBwb3J0IGlzIGRpc2FibGVkXG5cdFx0XHQvLyAyLiBIRUFEIHJlcXVlc3Rcblx0XHRcdC8vIDMuIG5vIENvbnRlbnQtRW5jb2RpbmcgaGVhZGVyXG5cdFx0XHQvLyA0LiBubyBjb250ZW50IHJlc3BvbnNlICgyMDQpXG5cdFx0XHQvLyA1LiBjb250ZW50IG5vdCBtb2RpZmllZCByZXNwb25zZSAoMzA0KVxuXHRcdFx0aWYgKCFyZXF1ZXN0LmNvbXByZXNzIHx8IHJlcXVlc3QubWV0aG9kID09PSAnSEVBRCcgfHwgY29kaW5ncyA9PT0gbnVsbCB8fCByZXMuc3RhdHVzQ29kZSA9PT0gMjA0IHx8IHJlcy5zdGF0dXNDb2RlID09PSAzMDQpIHtcblx0XHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2Vfb3B0aW9ucyk7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZvciBOb2RlIHY2K1xuXHRcdFx0Ly8gQmUgbGVzcyBzdHJpY3Qgd2hlbiBkZWNvZGluZyBjb21wcmVzc2VkIHJlc3BvbnNlcywgc2luY2Ugc29tZXRpbWVzXG5cdFx0XHQvLyBzZXJ2ZXJzIHNlbmQgc2xpZ2h0bHkgaW52YWxpZCByZXNwb25zZXMgdGhhdCBhcmUgc3RpbGwgYWNjZXB0ZWRcblx0XHRcdC8vIGJ5IGNvbW1vbiBicm93c2Vycy5cblx0XHRcdC8vIEFsd2F5cyB1c2luZyBaX1NZTkNfRkxVU0ggaXMgd2hhdCBjVVJMIGRvZXMuXG5cdFx0XHRjb25zdCB6bGliT3B0aW9ucyA9IHtcblx0XHRcdFx0Zmx1c2g6IHpsaWIuWl9TWU5DX0ZMVVNILFxuXHRcdFx0XHRmaW5pc2hGbHVzaDogemxpYi5aX1NZTkNfRkxVU0hcblx0XHRcdH07XG5cblx0XHRcdC8vIGZvciBnemlwXG5cdFx0XHRpZiAoY29kaW5ncyA9PSAnZ3ppcCcgfHwgY29kaW5ncyA9PSAneC1nemlwJykge1xuXHRcdFx0XHRib2R5ID0gYm9keS5waXBlKHpsaWIuY3JlYXRlR3VuemlwKHpsaWJPcHRpb25zKSk7XG5cdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlX29wdGlvbnMpO1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBmb3IgZGVmbGF0ZVxuXHRcdFx0aWYgKGNvZGluZ3MgPT0gJ2RlZmxhdGUnIHx8IGNvZGluZ3MgPT0gJ3gtZGVmbGF0ZScpIHtcblx0XHRcdFx0Ly8gaGFuZGxlIHRoZSBpbmZhbW91cyByYXcgZGVmbGF0ZSByZXNwb25zZSBmcm9tIG9sZCBzZXJ2ZXJzXG5cdFx0XHRcdC8vIGEgaGFjayBmb3Igb2xkIElJUyBhbmQgQXBhY2hlIHNlcnZlcnNcblx0XHRcdFx0Y29uc3QgcmF3ID0gcmVzLnBpcGUobmV3IFBhc3NUaHJvdWdoJDEoKSk7XG5cdFx0XHRcdHJhdy5vbmNlKCdkYXRhJywgZnVuY3Rpb24gKGNodW5rKSB7XG5cdFx0XHRcdFx0Ly8gc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzc1MTk4Mjhcblx0XHRcdFx0XHRpZiAoKGNodW5rWzBdICYgMHgwRikgPT09IDB4MDgpIHtcblx0XHRcdFx0XHRcdGJvZHkgPSBib2R5LnBpcGUoemxpYi5jcmVhdGVJbmZsYXRlKCkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRib2R5ID0gYm9keS5waXBlKHpsaWIuY3JlYXRlSW5mbGF0ZVJhdygpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2Vfb3B0aW9ucyk7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGZvciBiclxuXHRcdFx0aWYgKGNvZGluZ3MgPT0gJ2JyJyAmJiB0eXBlb2YgemxpYi5jcmVhdGVCcm90bGlEZWNvbXByZXNzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGJvZHkgPSBib2R5LnBpcGUoemxpYi5jcmVhdGVCcm90bGlEZWNvbXByZXNzKCkpO1xuXHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZV9vcHRpb25zKTtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gb3RoZXJ3aXNlLCB1c2UgcmVzcG9uc2UgYXMtaXNcblx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlX29wdGlvbnMpO1xuXHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSk7XG5cblx0XHR3cml0ZVRvU3RyZWFtKHJlcSwgcmVxdWVzdCk7XG5cdH0pO1xufVxuLyoqXG4gKiBSZWRpcmVjdCBjb2RlIG1hdGNoaW5nXG4gKlxuICogQHBhcmFtICAgTnVtYmVyICAgY29kZSAgU3RhdHVzIGNvZGVcbiAqIEByZXR1cm4gIEJvb2xlYW5cbiAqL1xuZmV0Y2guaXNSZWRpcmVjdCA9IGZ1bmN0aW9uIChjb2RlKSB7XG5cdHJldHVybiBjb2RlID09PSAzMDEgfHwgY29kZSA9PT0gMzAyIHx8IGNvZGUgPT09IDMwMyB8fCBjb2RlID09PSAzMDcgfHwgY29kZSA9PT0gMzA4O1xufTtcblxuLy8gZXhwb3NlIFByb21pc2VcbmZldGNoLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcblxuZnVuY3Rpb24gZ2V0X3BhZ2VfaGFuZGxlcihcblx0bWFuaWZlc3QsXG5cdHNlc3Npb25fZ2V0dGVyXG4pIHtcblx0Y29uc3QgZ2V0X2J1aWxkX2luZm8gPSBkZXZcblx0XHQ/ICgpID0+IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihidWlsZF9kaXIsICdidWlsZC5qc29uJyksICd1dGYtOCcpKVxuXHRcdDogKGFzc2V0cyA9PiAoKSA9PiBhc3NldHMpKEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihidWlsZF9kaXIsICdidWlsZC5qc29uJyksICd1dGYtOCcpKSk7XG5cblx0Y29uc3QgdGVtcGxhdGUgPSBkZXZcblx0XHQ/ICgpID0+IHJlYWRfdGVtcGxhdGUoc3JjX2Rpcilcblx0XHQ6IChzdHIgPT4gKCkgPT4gc3RyKShyZWFkX3RlbXBsYXRlKGJ1aWxkX2RpcikpO1xuXG5cdGNvbnN0IGhhc19zZXJ2aWNlX3dvcmtlciA9IGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKGJ1aWxkX2RpciwgJ3NlcnZpY2Utd29ya2VyLmpzJykpO1xuXG5cdGNvbnN0IHsgc2VydmVyX3JvdXRlcywgcGFnZXMgfSA9IG1hbmlmZXN0O1xuXHRjb25zdCBlcnJvcl9yb3V0ZSA9IG1hbmlmZXN0LmVycm9yO1xuXG5cdGZ1bmN0aW9uIGJhaWwocmVxLCByZXMsIGVycikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuXHRcdGNvbnN0IG1lc3NhZ2UgPSBkZXYgPyBlc2NhcGVfaHRtbChlcnIubWVzc2FnZSkgOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJztcblxuXHRcdHJlcy5zdGF0dXNDb2RlID0gNTAwO1xuXHRcdHJlcy5lbmQoYDxwcmU+JHttZXNzYWdlfTwvcHJlPmApO1xuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlX2Vycm9yKHJlcSwgcmVzLCBzdGF0dXNDb2RlLCBlcnJvcikge1xuXHRcdGhhbmRsZV9wYWdlKHtcblx0XHRcdHBhdHRlcm46IG51bGwsXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IG51bGwsIGNvbXBvbmVudDogZXJyb3Jfcm91dGUgfVxuXHRcdFx0XVxuXHRcdH0sIHJlcSwgcmVzLCBzdGF0dXNDb2RlLCBlcnJvciB8fCBuZXcgRXJyb3IoJ1Vua25vd24gZXJyb3IgaW4gcHJlbG9hZCBmdW5jdGlvbicpKTtcblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIGhhbmRsZV9wYWdlKHBhZ2UsIHJlcSwgcmVzLCBzdGF0dXMgPSAyMDAsIGVycm9yID0gbnVsbCkge1xuXHRcdGNvbnN0IGlzX3NlcnZpY2Vfd29ya2VyX2luZGV4ID0gcmVxLnBhdGggPT09ICcvc2VydmljZS13b3JrZXItaW5kZXguaHRtbCc7XG5cdFx0Y29uc3QgYnVpbGRfaW5mb1xuXG5cblxuXG4gPSBnZXRfYnVpbGRfaW5mbygpO1xuXG5cdFx0cmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuXHRcdHJlcy5zZXRIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnLCBkZXYgPyAnbm8tY2FjaGUnIDogJ21heC1hZ2U9NjAwJyk7XG5cblx0XHQvLyBwcmVsb2FkIG1haW4uanMgYW5kIGN1cnJlbnQgcm91dGVcblx0XHQvLyBUT0RPIGRldGVjdCBvdGhlciBzdHVmZiB3ZSBjYW4gcHJlbG9hZD8gaW1hZ2VzLCBDU1MsIGZvbnRzP1xuXHRcdGxldCBwcmVsb2FkZWRfY2h1bmtzID0gQXJyYXkuaXNBcnJheShidWlsZF9pbmZvLmFzc2V0cy5tYWluKSA/IGJ1aWxkX2luZm8uYXNzZXRzLm1haW4gOiBbYnVpbGRfaW5mby5hc3NldHMubWFpbl07XG5cdFx0aWYgKCFlcnJvciAmJiAhaXNfc2VydmljZV93b3JrZXJfaW5kZXgpIHtcblx0XHRcdHBhZ2UucGFydHMuZm9yRWFjaChwYXJ0ID0+IHtcblx0XHRcdFx0aWYgKCFwYXJ0KSByZXR1cm47XG5cblx0XHRcdFx0Ly8gdXNpbmcgY29uY2F0IGJlY2F1c2UgaXQgY291bGQgYmUgYSBzdHJpbmcgb3IgYW4gYXJyYXkuIHRoYW5rcyB3ZWJwYWNrIVxuXHRcdFx0XHRwcmVsb2FkZWRfY2h1bmtzID0gcHJlbG9hZGVkX2NodW5rcy5jb25jYXQoYnVpbGRfaW5mby5hc3NldHNbcGFydC5uYW1lXSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoYnVpbGRfaW5mby5idW5kbGVyID09PSAncm9sbHVwJykge1xuXHRcdFx0Ly8gVE9ETyBhZGQgZGVwZW5kZW5jaWVzIGFuZCBDU1Ncblx0XHRcdGNvbnN0IGxpbmsgPSBwcmVsb2FkZWRfY2h1bmtzXG5cdFx0XHRcdC5maWx0ZXIoZmlsZSA9PiBmaWxlICYmICFmaWxlLm1hdGNoKC9cXC5tYXAkLykpXG5cdFx0XHRcdC5tYXAoZmlsZSA9PiBgPCR7cmVxLmJhc2VVcmx9L2NsaWVudC8ke2ZpbGV9PjtyZWw9XCJtb2R1bGVwcmVsb2FkXCJgKVxuXHRcdFx0XHQuam9pbignLCAnKTtcblxuXHRcdFx0cmVzLnNldEhlYWRlcignTGluaycsIGxpbmspO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBsaW5rID0gcHJlbG9hZGVkX2NodW5rc1xuXHRcdFx0XHQuZmlsdGVyKGZpbGUgPT4gZmlsZSAmJiAhZmlsZS5tYXRjaCgvXFwubWFwJC8pKVxuXHRcdFx0XHQubWFwKChmaWxlKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgYXMgPSAvXFwuY3NzJC8udGVzdChmaWxlKSA/ICdzdHlsZScgOiAnc2NyaXB0Jztcblx0XHRcdFx0XHRyZXR1cm4gYDwke3JlcS5iYXNlVXJsfS9jbGllbnQvJHtmaWxlfT47cmVsPVwicHJlbG9hZFwiO2FzPVwiJHthc31cImA7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5qb2luKCcsICcpO1xuXG5cdFx0XHRyZXMuc2V0SGVhZGVyKCdMaW5rJywgbGluayk7XG5cdFx0fVxuXG5cdFx0bGV0IHNlc3Npb247XG5cdFx0dHJ5IHtcblx0XHRcdHNlc3Npb24gPSBhd2FpdCBzZXNzaW9uX2dldHRlcihyZXEsIHJlcyk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRyZXR1cm4gYmFpbChyZXEsIHJlcywgZXJyKTtcblx0XHR9XG5cblx0XHRsZXQgcmVkaXJlY3Q7XG5cdFx0bGV0IHByZWxvYWRfZXJyb3I7XG5cblx0XHRjb25zdCBwcmVsb2FkX2NvbnRleHQgPSB7XG5cdFx0XHRyZWRpcmVjdDogKHN0YXR1c0NvZGUsIGxvY2F0aW9uKSA9PiB7XG5cdFx0XHRcdGlmIChyZWRpcmVjdCAmJiAocmVkaXJlY3Quc3RhdHVzQ29kZSAhPT0gc3RhdHVzQ29kZSB8fCByZWRpcmVjdC5sb2NhdGlvbiAhPT0gbG9jYXRpb24pKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDb25mbGljdGluZyByZWRpcmVjdHNgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsb2NhdGlvbiA9IGxvY2F0aW9uLnJlcGxhY2UoL15cXC8vZywgJycpOyAvLyBsZWFkaW5nIHNsYXNoIChvbmx5KVxuXHRcdFx0XHRyZWRpcmVjdCA9IHsgc3RhdHVzQ29kZSwgbG9jYXRpb24gfTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogKHN0YXR1c0NvZGUsIG1lc3NhZ2UpID0+IHtcblx0XHRcdFx0cHJlbG9hZF9lcnJvciA9IHsgc3RhdHVzQ29kZSwgbWVzc2FnZSB9O1xuXHRcdFx0fSxcblx0XHRcdGZldGNoOiAodXJsLCBvcHRzKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBhcnNlZCA9IG5ldyBVcmwuVVJMKHVybCwgYGh0dHA6Ly8xMjcuMC4wLjE6JHtwcm9jZXNzLmVudi5QT1JUfSR7cmVxLmJhc2VVcmwgPyByZXEuYmFzZVVybCArICcvJyA6Jyd9YCk7XG5cblx0XHRcdFx0b3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdHMpO1xuXG5cdFx0XHRcdGNvbnN0IGluY2x1ZGVfY3JlZGVudGlhbHMgPSAoXG5cdFx0XHRcdFx0b3B0cy5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnIHx8XG5cdFx0XHRcdFx0b3B0cy5jcmVkZW50aWFscyAhPT0gJ29taXQnICYmIHBhcnNlZC5vcmlnaW4gPT09IGBodHRwOi8vMTI3LjAuMC4xOiR7cHJvY2Vzcy5lbnYuUE9SVH1gXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0aWYgKGluY2x1ZGVfY3JlZGVudGlhbHMpIHtcblx0XHRcdFx0XHRvcHRzLmhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRzLmhlYWRlcnMpO1xuXG5cdFx0XHRcdFx0Y29uc3QgY29va2llcyA9IE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHR7fSxcblx0XHRcdFx0XHRcdGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUgfHwgJycpLFxuXHRcdFx0XHRcdFx0Y29va2llLnBhcnNlKG9wdHMuaGVhZGVycy5jb29raWUgfHwgJycpXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdGNvbnN0IHNldF9jb29raWUgPSByZXMuZ2V0SGVhZGVyKCdTZXQtQ29va2llJyk7XG5cdFx0XHRcdFx0KEFycmF5LmlzQXJyYXkoc2V0X2Nvb2tpZSkgPyBzZXRfY29va2llIDogW3NldF9jb29raWVdKS5mb3JFYWNoKHN0ciA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBtYXRjaCA9IC8oW149XSspPShbXjtdKykvLmV4ZWMoc3RyKTtcblx0XHRcdFx0XHRcdGlmIChtYXRjaCkgY29va2llc1ttYXRjaFsxXV0gPSBtYXRjaFsyXTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGNvbnN0IHN0ciA9IE9iamVjdC5rZXlzKGNvb2tpZXMpXG5cdFx0XHRcdFx0XHQubWFwKGtleSA9PiBgJHtrZXl9PSR7Y29va2llc1trZXldfWApXG5cdFx0XHRcdFx0XHQuam9pbignOyAnKTtcblxuXHRcdFx0XHRcdG9wdHMuaGVhZGVycy5jb29raWUgPSBzdHI7XG5cblx0XHRcdFx0XHRpZiAoIW9wdHMuaGVhZGVycy5hdXRob3JpemF0aW9uICYmIHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24pIHtcblx0XHRcdFx0XHRcdG9wdHMuaGVhZGVycy5hdXRob3JpemF0aW9uID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZmV0Y2gocGFyc2VkLmhyZWYsIG9wdHMpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRsZXQgcHJlbG9hZGVkO1xuXHRcdGxldCBtYXRjaDtcblx0XHRsZXQgcGFyYW1zO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJvb3RfcHJlbG9hZGVkID0gbWFuaWZlc3Qucm9vdF9wcmVsb2FkXG5cdFx0XHRcdD8gbWFuaWZlc3Qucm9vdF9wcmVsb2FkLmNhbGwocHJlbG9hZF9jb250ZXh0LCB7XG5cdFx0XHRcdFx0aG9zdDogcmVxLmhlYWRlcnMuaG9zdCxcblx0XHRcdFx0XHRwYXRoOiByZXEucGF0aCxcblx0XHRcdFx0XHRxdWVyeTogcmVxLnF1ZXJ5LFxuXHRcdFx0XHRcdHBhcmFtczoge31cblx0XHRcdFx0fSwgc2Vzc2lvbilcblx0XHRcdFx0OiB7fTtcblxuXHRcdFx0bWF0Y2ggPSBlcnJvciA/IG51bGwgOiBwYWdlLnBhdHRlcm4uZXhlYyhyZXEucGF0aCk7XG5cblxuXHRcdFx0bGV0IHRvUHJlbG9hZCA9IFtyb290X3ByZWxvYWRlZF07XG5cdFx0XHRpZiAoIWlzX3NlcnZpY2Vfd29ya2VyX2luZGV4KSB7XG5cdFx0XHRcdHRvUHJlbG9hZCA9IHRvUHJlbG9hZC5jb25jYXQocGFnZS5wYXJ0cy5tYXAocGFydCA9PiB7XG5cdFx0XHRcdFx0aWYgKCFwYXJ0KSByZXR1cm4gbnVsbDtcblxuXHRcdFx0XHRcdC8vIHRoZSBkZWVwZXN0IGxldmVsIGlzIHVzZWQgYmVsb3csIHRvIGluaXRpYWxpc2UgdGhlIHN0b3JlXG5cdFx0XHRcdFx0cGFyYW1zID0gcGFydC5wYXJhbXMgPyBwYXJ0LnBhcmFtcyhtYXRjaCkgOiB7fTtcblxuXHRcdFx0XHRcdHJldHVybiBwYXJ0LnByZWxvYWRcblx0XHRcdFx0XHRcdD8gcGFydC5wcmVsb2FkLmNhbGwocHJlbG9hZF9jb250ZXh0LCB7XG5cdFx0XHRcdFx0XHRcdGhvc3Q6IHJlcS5oZWFkZXJzLmhvc3QsXG5cdFx0XHRcdFx0XHRcdHBhdGg6IHJlcS5wYXRoLFxuXHRcdFx0XHRcdFx0XHRxdWVyeTogcmVxLnF1ZXJ5LFxuXHRcdFx0XHRcdFx0XHRwYXJhbXNcblx0XHRcdFx0XHRcdH0sIHNlc3Npb24pXG5cdFx0XHRcdFx0XHQ6IHt9O1xuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cblx0XHRcdHByZWxvYWRlZCA9IGF3YWl0IFByb21pc2UuYWxsKHRvUHJlbG9hZCk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIGJhaWwocmVxLCByZXMsIGVycilcblx0XHRcdH1cblxuXHRcdFx0cHJlbG9hZF9lcnJvciA9IHsgc3RhdHVzQ29kZTogNTAwLCBtZXNzYWdlOiBlcnIgfTtcblx0XHRcdHByZWxvYWRlZCA9IFtdOyAvLyBhcHBlYXNlIFR5cGVTY3JpcHRcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0aWYgKHJlZGlyZWN0KSB7XG5cdFx0XHRcdGNvbnN0IGxvY2F0aW9uID0gVXJsLnJlc29sdmUoKHJlcS5iYXNlVXJsIHx8ICcnKSArICcvJywgcmVkaXJlY3QubG9jYXRpb24pO1xuXG5cdFx0XHRcdHJlcy5zdGF0dXNDb2RlID0gcmVkaXJlY3Quc3RhdHVzQ29kZTtcblx0XHRcdFx0cmVzLnNldEhlYWRlcignTG9jYXRpb24nLCBsb2NhdGlvbik7XG5cdFx0XHRcdHJlcy5lbmQoKTtcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwcmVsb2FkX2Vycm9yKSB7XG5cdFx0XHRcdGhhbmRsZV9lcnJvcihyZXEsIHJlcywgcHJlbG9hZF9lcnJvci5zdGF0dXNDb2RlLCBwcmVsb2FkX2Vycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlZ21lbnRzID0gcmVxLnBhdGguc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbik7XG5cblx0XHRcdC8vIFRPRE8gbWFrZSB0aGlzIGxlc3MgY29uZnVzaW5nXG5cdFx0XHRjb25zdCBsYXlvdXRfc2VnbWVudHMgPSBbc2VnbWVudHNbMF1dO1xuXHRcdFx0bGV0IGwgPSAxO1xuXG5cdFx0XHRwYWdlLnBhcnRzLmZvckVhY2goKHBhcnQsIGkpID0+IHtcblx0XHRcdFx0bGF5b3V0X3NlZ21lbnRzW2xdID0gc2VnbWVudHNbaSArIDFdO1xuXHRcdFx0XHRpZiAoIXBhcnQpIHJldHVybiBudWxsO1xuXHRcdFx0XHRsKys7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgcHJvcHMgPSB7XG5cdFx0XHRcdHN0b3Jlczoge1xuXHRcdFx0XHRcdHBhZ2U6IHtcblx0XHRcdFx0XHRcdHN1YnNjcmliZTogd3JpdGFibGUoe1xuXHRcdFx0XHRcdFx0XHRob3N0OiByZXEuaGVhZGVycy5ob3N0LFxuXHRcdFx0XHRcdFx0XHRwYXRoOiByZXEucGF0aCxcblx0XHRcdFx0XHRcdFx0cXVlcnk6IHJlcS5xdWVyeSxcblx0XHRcdFx0XHRcdFx0cGFyYW1zXG5cdFx0XHRcdFx0XHR9KS5zdWJzY3JpYmVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHByZWxvYWRpbmc6IHtcblx0XHRcdFx0XHRcdHN1YnNjcmliZTogd3JpdGFibGUobnVsbCkuc3Vic2NyaWJlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzZXNzaW9uOiB3cml0YWJsZShzZXNzaW9uKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZWdtZW50czogbGF5b3V0X3NlZ21lbnRzLFxuXHRcdFx0XHRzdGF0dXM6IGVycm9yID8gc3RhdHVzIDogMjAwLFxuXHRcdFx0XHRlcnJvcjogZXJyb3IgPyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiB7IG1lc3NhZ2U6IGVycm9yIH0gOiBudWxsLFxuXHRcdFx0XHRsZXZlbDA6IHtcblx0XHRcdFx0XHRwcm9wczogcHJlbG9hZGVkWzBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxldmVsMToge1xuXHRcdFx0XHRcdHNlZ21lbnQ6IHNlZ21lbnRzWzBdLFxuXHRcdFx0XHRcdHByb3BzOiB7fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoIWlzX3NlcnZpY2Vfd29ya2VyX2luZGV4KSB7XG5cdFx0XHRcdGxldCBsID0gMTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlLnBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdFx0Y29uc3QgcGFydCA9IHBhZ2UucGFydHNbaV07XG5cdFx0XHRcdFx0aWYgKCFwYXJ0KSBjb250aW51ZTtcblxuXHRcdFx0XHRcdHByb3BzW2BsZXZlbCR7bCsrfWBdID0ge1xuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiBwYXJ0LmNvbXBvbmVudCxcblx0XHRcdFx0XHRcdHByb3BzOiBwcmVsb2FkZWRbaSArIDFdIHx8IHt9LFxuXHRcdFx0XHRcdFx0c2VnbWVudDogc2VnbWVudHNbaV1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHsgaHRtbCwgaGVhZCwgY3NzIH0gPSBBcHAucmVuZGVyKHByb3BzKTtcblxuXHRcdFx0Y29uc3Qgc2VyaWFsaXplZCA9IHtcblx0XHRcdFx0cHJlbG9hZGVkOiBgWyR7cHJlbG9hZGVkLm1hcChkYXRhID0+IHRyeV9zZXJpYWxpemUoZGF0YSkpLmpvaW4oJywnKX1dYCxcblx0XHRcdFx0c2Vzc2lvbjogc2Vzc2lvbiAmJiB0cnlfc2VyaWFsaXplKHNlc3Npb24sIGVyciA9PiB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gc2VyaWFsaXplIHNlc3Npb24gZGF0YTogJHtlcnIubWVzc2FnZX1gKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGVycm9yOiBlcnJvciAmJiBzZXJpYWxpemVfZXJyb3IocHJvcHMuZXJyb3IpXG5cdFx0XHR9O1xuXG5cdFx0XHRsZXQgc2NyaXB0ID0gYF9fU0FQUEVSX189eyR7W1xuXHRcdFx0XHRlcnJvciAmJiBgZXJyb3I6JHtzZXJpYWxpemVkLmVycm9yfSxzdGF0dXM6JHtzdGF0dXN9YCxcblx0XHRcdFx0YGJhc2VVcmw6XCIke3JlcS5iYXNlVXJsfVwiYCxcblx0XHRcdFx0c2VyaWFsaXplZC5wcmVsb2FkZWQgJiYgYHByZWxvYWRlZDoke3NlcmlhbGl6ZWQucHJlbG9hZGVkfWAsXG5cdFx0XHRcdHNlcmlhbGl6ZWQuc2Vzc2lvbiAmJiBgc2Vzc2lvbjoke3NlcmlhbGl6ZWQuc2Vzc2lvbn1gXG5cdFx0XHRdLmZpbHRlcihCb29sZWFuKS5qb2luKCcsJyl9fTtgO1xuXG5cdFx0XHRpZiAoaGFzX3NlcnZpY2Vfd29ya2VyKSB7XG5cdFx0XHRcdHNjcmlwdCArPSBgaWYoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvciluYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignJHtyZXEuYmFzZVVybH0vc2VydmljZS13b3JrZXIuanMnKTtgO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBmaWxlID0gW10uY29uY2F0KGJ1aWxkX2luZm8uYXNzZXRzLm1haW4pLmZpbHRlcihmaWxlID0+IGZpbGUgJiYgL1xcLmpzJC8udGVzdChmaWxlKSlbMF07XG5cdFx0XHRjb25zdCBtYWluID0gYCR7cmVxLmJhc2VVcmx9L2NsaWVudC8ke2ZpbGV9YDtcblxuXHRcdFx0aWYgKGJ1aWxkX2luZm8uYnVuZGxlciA9PT0gJ3JvbGx1cCcpIHtcblx0XHRcdFx0aWYgKGJ1aWxkX2luZm8ubGVnYWN5X2Fzc2V0cykge1xuXHRcdFx0XHRcdGNvbnN0IGxlZ2FjeV9tYWluID0gYCR7cmVxLmJhc2VVcmx9L2NsaWVudC9sZWdhY3kvJHtidWlsZF9pbmZvLmxlZ2FjeV9hc3NldHMubWFpbn1gO1xuXHRcdFx0XHRcdHNjcmlwdCArPSBgKGZ1bmN0aW9uKCl7dHJ5e2V2YWwoXCJhc3luYyBmdW5jdGlvbiB4KCl7fVwiKTt2YXIgbWFpbj1cIiR7bWFpbn1cIn1jYXRjaChlKXttYWluPVwiJHtsZWdhY3lfbWFpbn1cIn07dmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTt0cnl7bmV3IEZ1bmN0aW9uKFwiaWYoMClpbXBvcnQoJycpXCIpKCk7cy5zcmM9bWFpbjtzLnR5cGU9XCJtb2R1bGVcIjtzLmNyb3NzT3JpZ2luPVwidXNlLWNyZWRlbnRpYWxzXCI7fWNhdGNoKGUpe3Muc3JjPVwiJHtyZXEuYmFzZVVybH0vY2xpZW50L3NoaW1wb3J0QCR7YnVpbGRfaW5mby5zaGltcG9ydH0uanNcIjtzLnNldEF0dHJpYnV0ZShcImRhdGEtbWFpblwiLG1haW4pO31kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO30oKSk7YDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzY3JpcHQgKz0gYHZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7dHJ5e25ldyBGdW5jdGlvbihcImlmKDApaW1wb3J0KCcnKVwiKSgpO3Muc3JjPVwiJHttYWlufVwiO3MudHlwZT1cIm1vZHVsZVwiO3MuY3Jvc3NPcmlnaW49XCJ1c2UtY3JlZGVudGlhbHNcIjt9Y2F0Y2goZSl7cy5zcmM9XCIke3JlcS5iYXNlVXJsfS9jbGllbnQvc2hpbXBvcnRAJHtidWlsZF9pbmZvLnNoaW1wb3J0fS5qc1wiO3Muc2V0QXR0cmlidXRlKFwiZGF0YS1tYWluXCIsXCIke21haW59XCIpfWRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocylgO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzY3JpcHQgKz0gYDwvc2NyaXB0PjxzY3JpcHQgc3JjPVwiJHttYWlufVwiPmA7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBzdHlsZXM7XG5cblx0XHRcdC8vIFRPRE8gbWFrZSB0aGlzIGNvbnNpc3RlbnQgYWNyb3NzIGFwcHNcblx0XHRcdC8vIFRPRE8gZW1iZWQgYnVpbGRfaW5mbyBpbiBwbGFjZWhvbGRlci50c1xuXHRcdFx0aWYgKGJ1aWxkX2luZm8uY3NzICYmIGJ1aWxkX2luZm8uY3NzLm1haW4pIHtcblx0XHRcdFx0Y29uc3QgY3NzX2NodW5rcyA9IG5ldyBTZXQoKTtcblx0XHRcdFx0aWYgKGJ1aWxkX2luZm8uY3NzLm1haW4pIGNzc19jaHVua3MuYWRkKGJ1aWxkX2luZm8uY3NzLm1haW4pO1xuXHRcdFx0XHRwYWdlLnBhcnRzLmZvckVhY2gocGFydCA9PiB7XG5cdFx0XHRcdFx0aWYgKCFwYXJ0KSByZXR1cm47XG5cdFx0XHRcdFx0Y29uc3QgY3NzX2NodW5rc19mb3JfcGFydCA9IGJ1aWxkX2luZm8uY3NzLmNodW5rc1twYXJ0LmZpbGVdO1xuXG5cdFx0XHRcdFx0aWYgKGNzc19jaHVua3NfZm9yX3BhcnQpIHtcblx0XHRcdFx0XHRcdGNzc19jaHVua3NfZm9yX3BhcnQuZm9yRWFjaChmaWxlID0+IHtcblx0XHRcdFx0XHRcdFx0Y3NzX2NodW5rcy5hZGQoZmlsZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHN0eWxlcyA9IEFycmF5LmZyb20oY3NzX2NodW5rcylcblx0XHRcdFx0XHQubWFwKGhyZWYgPT4gYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY2xpZW50LyR7aHJlZn1cIj5gKVxuXHRcdFx0XHRcdC5qb2luKCcnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0eWxlcyA9IChjc3MgJiYgY3NzLmNvZGUgPyBgPHN0eWxlPiR7Y3NzLmNvZGV9PC9zdHlsZT5gIDogJycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyB1c2VycyBjYW4gc2V0IGEgQ1NQIG5vbmNlIHVzaW5nIHJlcy5sb2NhbHMubm9uY2Vcblx0XHRcdGNvbnN0IG5vbmNlX2F0dHIgPSAocmVzLmxvY2FscyAmJiByZXMubG9jYWxzLm5vbmNlKSA/IGAgbm9uY2U9XCIke3Jlcy5sb2NhbHMubm9uY2V9XCJgIDogJyc7XG5cblx0XHRcdGNvbnN0IGJvZHkgPSB0ZW1wbGF0ZSgpXG5cdFx0XHRcdC5yZXBsYWNlKCclc2FwcGVyLmJhc2UlJywgKCkgPT4gYDxiYXNlIGhyZWY9XCIke3JlcS5iYXNlVXJsfS9cIj5gKVxuXHRcdFx0XHQucmVwbGFjZSgnJXNhcHBlci5zY3JpcHRzJScsICgpID0+IGA8c2NyaXB0JHtub25jZV9hdHRyfT4ke3NjcmlwdH08L3NjcmlwdD5gKVxuXHRcdFx0XHQucmVwbGFjZSgnJXNhcHBlci5odG1sJScsICgpID0+IGh0bWwpXG5cdFx0XHRcdC5yZXBsYWNlKCclc2FwcGVyLmhlYWQlJywgKCkgPT4gYDxub3NjcmlwdCBpZD0nc2FwcGVyLWhlYWQtc3RhcnQnPjwvbm9zY3JpcHQ+JHtoZWFkfTxub3NjcmlwdCBpZD0nc2FwcGVyLWhlYWQtZW5kJz48L25vc2NyaXB0PmApXG5cdFx0XHRcdC5yZXBsYWNlKCclc2FwcGVyLnN0eWxlcyUnLCAoKSA9PiBzdHlsZXMpO1xuXG5cdFx0XHRyZXMuc3RhdHVzQ29kZSA9IHN0YXR1cztcblx0XHRcdHJlcy5lbmQoYm9keSk7XG5cdFx0fSBjYXRjaChlcnIpIHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRiYWlsKHJlcSwgcmVzLCBlcnIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlX2Vycm9yKHJlcSwgcmVzLCA1MDAsIGVycik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZ1bmN0aW9uIGZpbmRfcm91dGUocmVxLCByZXMsIG5leHQpIHtcblx0XHRpZiAocmVxLnBhdGggPT09ICcvc2VydmljZS13b3JrZXItaW5kZXguaHRtbCcpIHtcblx0XHRcdGNvbnN0IGhvbWVQYWdlID0gcGFnZXMuZmluZChwYWdlID0+IHBhZ2UucGF0dGVybi50ZXN0KCcvJykpO1xuXHRcdFx0aGFuZGxlX3BhZ2UoaG9tZVBhZ2UsIHJlcSwgcmVzKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcGFnZXMpIHtcblx0XHRcdGlmIChwYWdlLnBhdHRlcm4udGVzdChyZXEucGF0aCkpIHtcblx0XHRcdFx0aGFuZGxlX3BhZ2UocGFnZSwgcmVxLCByZXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aGFuZGxlX2Vycm9yKHJlcSwgcmVzLCA0MDQsICdOb3QgZm91bmQnKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gcmVhZF90ZW1wbGF0ZShkaXIgPSBidWlsZF9kaXIpIHtcblx0cmV0dXJuIGZzLnJlYWRGaWxlU3luYyhgJHtkaXJ9L3RlbXBsYXRlLmh0bWxgLCAndXRmLTgnKTtcbn1cblxuZnVuY3Rpb24gdHJ5X3NlcmlhbGl6ZShkYXRhLCBmYWlsKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGRldmFsdWUoZGF0YSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGlmIChmYWlsKSBmYWlsKGVycik7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuLy8gRW5zdXJlIHdlIHJldHVybiBzb21ldGhpbmcgdHJ1dGh5IHNvIHRoZSBjbGllbnQgd2lsbCBub3QgcmUtcmVuZGVyIHRoZSBwYWdlIG92ZXIgdGhlIGVycm9yXG5mdW5jdGlvbiBzZXJpYWxpemVfZXJyb3IoZXJyb3IpIHtcblx0aWYgKCFlcnJvcikgcmV0dXJuIG51bGw7XG5cdGxldCBzZXJpYWxpemVkID0gdHJ5X3NlcmlhbGl6ZShlcnJvcik7XG5cdGlmICghc2VyaWFsaXplZCkge1xuXHRcdGNvbnN0IHsgbmFtZSwgbWVzc2FnZSwgc3RhY2sgfSA9IGVycm9yIDtcblx0XHRzZXJpYWxpemVkID0gdHJ5X3NlcmlhbGl6ZSh7IG5hbWUsIG1lc3NhZ2UsIHN0YWNrIH0pO1xuXHR9XG5cdGlmICghc2VyaWFsaXplZCkge1xuXHRcdHNlcmlhbGl6ZWQgPSAne30nO1xuXHR9XG5cdHJldHVybiBzZXJpYWxpemVkO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVfaHRtbChodG1sKSB7XG5cdGNvbnN0IGNoYXJzID0ge1xuXHRcdCdcIicgOiAncXVvdCcsXG5cdFx0XCInXCI6ICcjMzknLFxuXHRcdCcmJzogJ2FtcCcsXG5cdFx0JzwnIDogJ2x0Jyxcblx0XHQnPicgOiAnZ3QnXG5cdH07XG5cblx0cmV0dXJuIGh0bWwucmVwbGFjZSgvW1wiJyY8Pl0vZywgYyA9PiBgJiR7Y2hhcnNbY119O2ApO1xufVxuXG5mdW5jdGlvbiBtaWRkbGV3YXJlKG9wdHNcblxuXG4gPSB7fSkge1xuXHRjb25zdCB7IHNlc3Npb24sIGlnbm9yZSB9ID0gb3B0cztcblxuXHRsZXQgZW1pdHRlZF9iYXNlcGF0aCA9IGZhbHNlO1xuXG5cdHJldHVybiBjb21wb3NlX2hhbmRsZXJzKGlnbm9yZSwgW1xuXHRcdChyZXEsIHJlcywgbmV4dCkgPT4ge1xuXHRcdFx0aWYgKHJlcS5iYXNlVXJsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bGV0IHsgb3JpZ2luYWxVcmwgfSA9IHJlcTtcblx0XHRcdFx0aWYgKHJlcS51cmwgPT09ICcvJyAmJiBvcmlnaW5hbFVybFtvcmlnaW5hbFVybC5sZW5ndGggLSAxXSAhPT0gJy8nKSB7XG5cdFx0XHRcdFx0b3JpZ2luYWxVcmwgKz0gJy8nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVxLmJhc2VVcmwgPSBvcmlnaW5hbFVybFxuXHRcdFx0XHRcdD8gb3JpZ2luYWxVcmwuc2xpY2UoMCwgLXJlcS51cmwubGVuZ3RoKVxuXHRcdFx0XHRcdDogJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghZW1pdHRlZF9iYXNlcGF0aCAmJiBwcm9jZXNzLnNlbmQpIHtcblx0XHRcdFx0cHJvY2Vzcy5zZW5kKHtcblx0XHRcdFx0XHRfX3NhcHBlcl9fOiB0cnVlLFxuXHRcdFx0XHRcdGV2ZW50OiAnYmFzZXBhdGgnLFxuXHRcdFx0XHRcdGJhc2VwYXRoOiByZXEuYmFzZVVybFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRlbWl0dGVkX2Jhc2VwYXRoID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlcS5wYXRoID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmVxLnBhdGggPSByZXEudXJsLnJlcGxhY2UoL1xcPy4qLywgJycpO1xuXHRcdFx0fVxuXG5cdFx0XHRuZXh0KCk7XG5cdFx0fSxcblxuXHRcdGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKGJ1aWxkX2RpciwgJ3NlcnZpY2Utd29ya2VyLmpzJykpICYmIHNlcnZlKHtcblx0XHRcdHBhdGhuYW1lOiAnL3NlcnZpY2Utd29ya2VyLmpzJyxcblx0XHRcdGNhY2hlX2NvbnRyb2w6ICduby1jYWNoZSwgbm8tc3RvcmUsIG11c3QtcmV2YWxpZGF0ZSdcblx0XHR9KSxcblxuXHRcdGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKGJ1aWxkX2RpciwgJ3NlcnZpY2Utd29ya2VyLmpzLm1hcCcpKSAmJiBzZXJ2ZSh7XG5cdFx0XHRwYXRobmFtZTogJy9zZXJ2aWNlLXdvcmtlci5qcy5tYXAnLFxuXHRcdFx0Y2FjaGVfY29udHJvbDogJ25vLWNhY2hlLCBuby1zdG9yZSwgbXVzdC1yZXZhbGlkYXRlJ1xuXHRcdH0pLFxuXG5cdFx0c2VydmUoe1xuXHRcdFx0cHJlZml4OiAnL2NsaWVudC8nLFxuXHRcdFx0Y2FjaGVfY29udHJvbDogZGV2ID8gJ25vLWNhY2hlJyA6ICdtYXgtYWdlPTMxNTM2MDAwLCBpbW11dGFibGUnXG5cdFx0fSksXG5cblx0XHRnZXRfc2VydmVyX3JvdXRlX2hhbmRsZXIobWFuaWZlc3Quc2VydmVyX3JvdXRlcyksXG5cblx0XHRnZXRfcGFnZV9oYW5kbGVyKG1hbmlmZXN0LCBzZXNzaW9uIHx8IG5vb3ApXG5cdF0uZmlsdGVyKEJvb2xlYW4pKTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZV9oYW5kbGVycyhpZ25vcmUsIGhhbmRsZXJzKSB7XG5cdGNvbnN0IHRvdGFsID0gaGFuZGxlcnMubGVuZ3RoO1xuXG5cdGZ1bmN0aW9uIG50aF9oYW5kbGVyKG4sIHJlcSwgcmVzLCBuZXh0KSB7XG5cdFx0aWYgKG4gPj0gdG90YWwpIHtcblx0XHRcdHJldHVybiBuZXh0KCk7XG5cdFx0fVxuXG5cdFx0aGFuZGxlcnNbbl0ocmVxLCByZXMsICgpID0+IG50aF9oYW5kbGVyKG4rMSwgcmVxLCByZXMsIG5leHQpKTtcblx0fVxuXG5cdHJldHVybiAhaWdub3JlXG5cdFx0PyAocmVxLCByZXMsIG5leHQpID0+IG50aF9oYW5kbGVyKDAsIHJlcSwgcmVzLCBuZXh0KVxuXHRcdDogKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG5cdFx0XHRpZiAoc2hvdWxkX2lnbm9yZShyZXEucGF0aCwgaWdub3JlKSkge1xuXHRcdFx0XHRuZXh0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRudGhfaGFuZGxlcigwLCByZXEsIHJlcywgbmV4dCk7XG5cdFx0XHR9XG5cdFx0fTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkX2lnbm9yZSh1cmksIHZhbCkge1xuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSByZXR1cm4gdmFsLnNvbWUoeCA9PiBzaG91bGRfaWdub3JlKHVyaSwgeCkpO1xuXHRpZiAodmFsIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gdmFsLnRlc3QodXJpKTtcblx0aWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWwodXJpKTtcblx0cmV0dXJuIHVyaS5zdGFydHNXaXRoKHZhbC5jaGFyQ29kZUF0KDApID09PSA0NyA/IHZhbCA6IGAvJHt2YWx9YCk7XG59XG5cbmZ1bmN0aW9uIHNlcnZlKHsgcHJlZml4LCBwYXRobmFtZSwgY2FjaGVfY29udHJvbCB9XG5cblxuXG4pIHtcblx0Y29uc3QgZmlsdGVyID0gcGF0aG5hbWVcblx0XHQ/IChyZXEpID0+IHJlcS5wYXRoID09PSBwYXRobmFtZVxuXHRcdDogKHJlcSkgPT4gcmVxLnBhdGguc3RhcnRzV2l0aChwcmVmaXgpO1xuXG5cdGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0IHJlYWQgPSBkZXZcblx0XHQ/IChmaWxlKSA9PiBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKGJ1aWxkX2RpciwgZmlsZSkpXG5cdFx0OiAoZmlsZSkgPT4gKGNhY2hlLmhhcyhmaWxlKSA/IGNhY2hlIDogY2FjaGUuc2V0KGZpbGUsIGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCBmaWxlKSkpKS5nZXQoZmlsZSk7XG5cblx0cmV0dXJuIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuXHRcdGlmIChmaWx0ZXIocmVxKSkge1xuXHRcdFx0Y29uc3QgdHlwZSA9IGxpdGUuZ2V0VHlwZShyZXEucGF0aCk7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGZpbGUgPSBwYXRoLnBvc2l4Lm5vcm1hbGl6ZShkZWNvZGVVUklDb21wb25lbnQocmVxLnBhdGgpKTtcblx0XHRcdFx0Y29uc3QgZGF0YSA9IHJlYWQoZmlsZSk7XG5cblx0XHRcdFx0cmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgdHlwZSk7XG5cdFx0XHRcdHJlcy5zZXRIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnLCBjYWNoZV9jb250cm9sKTtcblx0XHRcdFx0cmVzLmVuZChkYXRhKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRyZXMuc3RhdHVzQ29kZSA9IDQwNDtcblx0XHRcdFx0cmVzLmVuZCgnbm90IGZvdW5kJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5leHQoKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKXt9XG5cbmV4cG9ydCB7IG1pZGRsZXdhcmUgfTtcbiIsImltcG9ydCBzaXJ2IGZyb20gJ3NpcnYnO1xuaW1wb3J0IHBvbGthIGZyb20gJ3BvbGthJztcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgKiBhcyBzYXBwZXIgZnJvbSAnQHNhcHBlci9zZXJ2ZXInO1xuXG5jb25zdCB7IFBPUlQsIE5PREVfRU5WIH0gPSBwcm9jZXNzLmVudjtcbmNvbnN0IGRldiA9IE5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuXG5wb2xrYSgpIC8vIFlvdSBjYW4gYWxzbyB1c2UgRXhwcmVzc1xuXHQudXNlKFxuXHRcdGNvbXByZXNzaW9uKHsgdGhyZXNob2xkOiAwIH0pLFxuXHRcdHNpcnYoJ3N0YXRpYycsIHsgZGV2IH0pLFxuXHRcdHNhcHBlci5taWRkbGV3YXJlKClcblx0KVxuXHQubGlzdGVuKFBPUlQsIGVyciA9PiB7XG5cdFx0aWYgKGVycikgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyKTtcblx0fSk7XG4iXSwibmFtZXMiOlsiZ2V0IiwibGluZWFyIiwicHJlbG9hZCIsImNvbXBvbmVudF8wIiwiY29tcG9uZW50XzEiLCJjb21wb25lbnRfMiIsImNvbXBvbmVudF8zIiwiY29tcG9uZW50XzQiLCJwcmVsb2FkXzQiLCJjb21wb25lbnRfNSIsInByZWxvYWRfNSIsImNvbXBvbmVudF82IiwiY29tcG9uZW50XzciLCJjb21wb25lbnRfOCIsImNvbXBvbmVudF85IiwiY29tcG9uZW50XzEwIiwiY29tcG9uZW50XzExIiwiY29tcG9uZW50XzEyIiwiY29tcG9uZW50XzEzIiwiY29tcG9uZW50XzE0IiwiY29tcG9uZW50XzE1IiwiY29tcG9uZW50XzE2IiwiY29tcG9uZW50XzE3Iiwicm9vdCIsImVycm9yIiwiZXNjYXBlZCIsIm5vb3AiLCJzYXBwZXIubWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FB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LENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMseUNBQXlDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzdz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
