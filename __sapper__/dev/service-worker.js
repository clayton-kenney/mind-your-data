(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1595974953223;

	const files = [
		"service-worker-index.html",
		"1400x450.png",
		"Ellipse-active.png",
		"Ellipse-inactive.png",
		"MYDlogo_large.png",
		"MYDlogo_large_nopwr.png",
		"MYDlogo_nav.png",
		"MYDlogo_small.png",
		"bg-group1.png",
		"bg-group2.png",
		"bg-group3.png",
		"bg-vector.png",
		"blank_circle.svg",
		"checked.svg",
		"favicon.png",
		"global.css",
		"lock-active.svg",
		"lock-inactive.svg",
		"logo-192.png",
		"logo-512.png",
		"manifest.json",
		"successkid.jpg",
		"un_checked.svg"
	];

	const shell = [
		"client/client.0bdb16c8.js",
		"client/index.5aacd689.js",
		"client/TransHelp.f60224ea.js",
		"client/index.30cbffe9.js",
		"client/index.44998259.js",
		"client/index_old.12b41d26.js",
		"client/resources.1dd5b0a2.js",
		"client/quizmain.9b13acd9.js",
		"client/q1.e736557e.js",
		"client/q2.c2673870.js",
		"client/q3.7ebc683d.js",
		"client/q4.cfc264d0.js",
		"client/q5.1f0f5699.js",
		"client/q6.4534b1f3.js",
		"client/q7.a4df1215.js",
		"client/q8.405a951d.js",
		"client/q9.f435bc3c.js",
		"client/check1.79da1420.js",
		"client/check2.68dd1d41.js",
		"client/check3.acf7e916.js",
		"client/Completion.1a421f6b.js",
		"client/store.88c3fcf3.js",
		"client/Back.b5b4bf6b.js",
		"client/Btn.fcb76e5b.js",
		"client/Detect.483edfe3.js",
		"client/review.1a66decb.js",
		"client/about.999dec14.js",
		"client/index.06930bb1.js",
		"client/[slug].06bda747.js",
		"client/q1archive.dd8a958c.js",
		"client/Progress.6963d58f.js",
		"client/q1dup.1300cf38.js",
		"client/q0.2c4ea64b.js",
		"client/quiz.e1a9d62f.js",
		"client/sapper-dev-client.1e7a4a5e.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		if (!url.protocol.startsWith('http')) return;

		// ignore dev server requests
		if (url.hostname === self.location.hostname && url.port !== self.location.port) return;

		// always serve static files and bundler-generated assets from cache
		if (url.host === self.location.host && cached.has(url.pathname)) {
			event.respondWith(caches.match(event.request));
			return;
		}

		// for pages, you might want to serve a shell `service-worker-index.html` file,
		// which Sapper has generated for you. It's not right for every
		// app, but if it's right for yours then uncomment this section
		/*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/service-worker-index.html'));
			return;
		}
		*/

		if (event.request.cache === 'only-if-cached') return;

		// for everything else, try the network first, falling back to
		// cache if the user is offline. (If the pages never change, you
		// might prefer a cache-first approach to a network-first one.)
		event.respondWith(
			caches
				.open(`offline${timestamp}`)
				.then(async cache => {
					try {
						const response = await fetch(event.request);
						cache.put(event.request, response.clone());
						return response;
					} catch(err) {
						const response = await cache.match(event.request);
						if (response) return response;

						throw err;
					}
				})
		);
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTU5NTk3NDk1MzIyMztcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCIxNDAweDQ1MC5wbmdcIixcblx0XCJFbGxpcHNlLWFjdGl2ZS5wbmdcIixcblx0XCJFbGxpcHNlLWluYWN0aXZlLnBuZ1wiLFxuXHRcIk1ZRGxvZ29fbGFyZ2UucG5nXCIsXG5cdFwiTVlEbG9nb19sYXJnZV9ub3B3ci5wbmdcIixcblx0XCJNWURsb2dvX25hdi5wbmdcIixcblx0XCJNWURsb2dvX3NtYWxsLnBuZ1wiLFxuXHRcImJnLWdyb3VwMS5wbmdcIixcblx0XCJiZy1ncm91cDIucG5nXCIsXG5cdFwiYmctZ3JvdXAzLnBuZ1wiLFxuXHRcImJnLXZlY3Rvci5wbmdcIixcblx0XCJibGFua19jaXJjbGUuc3ZnXCIsXG5cdFwiY2hlY2tlZC5zdmdcIixcblx0XCJmYXZpY29uLnBuZ1wiLFxuXHRcImdsb2JhbC5jc3NcIixcblx0XCJsb2NrLWFjdGl2ZS5zdmdcIixcblx0XCJsb2NrLWluYWN0aXZlLnN2Z1wiLFxuXHRcImxvZ28tMTkyLnBuZ1wiLFxuXHRcImxvZ28tNTEyLnBuZ1wiLFxuXHRcIm1hbmlmZXN0Lmpzb25cIixcblx0XCJzdWNjZXNza2lkLmpwZ1wiLFxuXHRcInVuX2NoZWNrZWQuc3ZnXCJcbl07XG5leHBvcnQgeyBmaWxlcyBhcyBhc3NldHMgfTsgLy8gbGVnYWN5XG5cbmV4cG9ydCBjb25zdCBzaGVsbCA9IFtcblx0XCJjbGllbnQvY2xpZW50LjBiZGIxNmM4LmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LjVhYWNkNjg5LmpzXCIsXG5cdFwiY2xpZW50L1RyYW5zSGVscC5mNjAyMjRlYS5qc1wiLFxuXHRcImNsaWVudC9pbmRleC4zMGNiZmZlOS5qc1wiLFxuXHRcImNsaWVudC9pbmRleC40NDk5ODI1OS5qc1wiLFxuXHRcImNsaWVudC9pbmRleF9vbGQuMTJiNDFkMjYuanNcIixcblx0XCJjbGllbnQvcmVzb3VyY2VzLjFkZDViMGEyLmpzXCIsXG5cdFwiY2xpZW50L3F1aXptYWluLjliMTNhY2Q5LmpzXCIsXG5cdFwiY2xpZW50L3ExLmU3MzY1NTdlLmpzXCIsXG5cdFwiY2xpZW50L3EyLmMyNjczODcwLmpzXCIsXG5cdFwiY2xpZW50L3EzLjdlYmM2ODNkLmpzXCIsXG5cdFwiY2xpZW50L3E0LmNmYzI2NGQwLmpzXCIsXG5cdFwiY2xpZW50L3E1LjFmMGY1Njk5LmpzXCIsXG5cdFwiY2xpZW50L3E2LjQ1MzRiMWYzLmpzXCIsXG5cdFwiY2xpZW50L3E3LmE0ZGYxMjE1LmpzXCIsXG5cdFwiY2xpZW50L3E4LjQwNWE5NTFkLmpzXCIsXG5cdFwiY2xpZW50L3E5LmY0MzViYzNjLmpzXCIsXG5cdFwiY2xpZW50L2NoZWNrMS43OWRhMTQyMC5qc1wiLFxuXHRcImNsaWVudC9jaGVjazIuNjhkZDFkNDEuanNcIixcblx0XCJjbGllbnQvY2hlY2szLmFjZjdlOTE2LmpzXCIsXG5cdFwiY2xpZW50L0NvbXBsZXRpb24uMWE0MjFmNmIuanNcIixcblx0XCJjbGllbnQvc3RvcmUuODhjM2ZjZjMuanNcIixcblx0XCJjbGllbnQvQmFjay5iNWI0YmY2Yi5qc1wiLFxuXHRcImNsaWVudC9CdG4uZmNiNzZlNWIuanNcIixcblx0XCJjbGllbnQvRGV0ZWN0LjQ4M2VkZmUzLmpzXCIsXG5cdFwiY2xpZW50L3Jldmlldy4xYTY2ZGVjYi5qc1wiLFxuXHRcImNsaWVudC9hYm91dC45OTlkZWMxNC5qc1wiLFxuXHRcImNsaWVudC9pbmRleC4wNjkzMGJiMS5qc1wiLFxuXHRcImNsaWVudC9bc2x1Z10uMDZiZGE3NDcuanNcIixcblx0XCJjbGllbnQvcTFhcmNoaXZlLmRkOGE5NThjLmpzXCIsXG5cdFwiY2xpZW50L1Byb2dyZXNzLjY5NjNkNThmLmpzXCIsXG5cdFwiY2xpZW50L3ExZHVwLjEzMDBjZjM4LmpzXCIsXG5cdFwiY2xpZW50L3EwLjJjNGVhNjRiLmpzXCIsXG5cdFwiY2xpZW50L3F1aXouZTFhOWQ2MmYuanNcIixcblx0XCJjbGllbnQvc2FwcGVyLWRldi1jbGllbnQuMWU3YTRhNWUuanNcIlxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcblx0eyBwYXR0ZXJuOiAvXlxcLyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9pbmRleF9vbGRcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3Jlc291cmNlc1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvcXVpem1haW5cXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3Jldmlld1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYWJvdXRcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Jsb2dcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Jsb2dcXC8oW15cXC9dKz8pXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9xdWl6XFwvcTFhcmNoaXZlXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9xdWl6XFwvUHJvZ3Jlc3NcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3F1aXpcXC9jaGVjazFcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3F1aXpcXC9jaGVjazJcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3F1aXpcXC9jaGVjazNcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3F1aXpcXC9xMWR1cFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvcXVpelxcL3EwXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9xdWl6XFwvcTFcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3F1aXpcXC9xMlxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvcXVpelxcL3EzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9xdWl6XFwvcTRcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3F1aXpcXC9xNVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvcXVpelxcL3E2XFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9xdWl6XFwvcTdcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3F1aXpcXC9xOFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvcXVpelxcL3E5XFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9xdWl6XFwvPyQvIH1cbl07IiwiaW1wb3J0IHsgdGltZXN0YW1wLCBmaWxlcywgc2hlbGwsIHJvdXRlcyB9IGZyb20gJ0BzYXBwZXIvc2VydmljZS13b3JrZXInO1xuXG5jb25zdCBBU1NFVFMgPSBgY2FjaGUke3RpbWVzdGFtcH1gO1xuXG4vLyBgc2hlbGxgIGlzIGFuIGFycmF5IG9mIGFsbCB0aGUgZmlsZXMgZ2VuZXJhdGVkIGJ5IHRoZSBidW5kbGVyLFxuLy8gYGZpbGVzYCBpcyBhbiBhcnJheSBvZiBldmVyeXRoaW5nIGluIHRoZSBgc3RhdGljYCBkaXJlY3RvcnlcbmNvbnN0IHRvX2NhY2hlID0gc2hlbGwuY29uY2F0KGZpbGVzKTtcbmNvbnN0IGNhY2hlZCA9IG5ldyBTZXQodG9fY2FjaGUpO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBldmVudCA9PiB7XG5cdGV2ZW50LndhaXRVbnRpbChcblx0XHRjYWNoZXNcblx0XHRcdC5vcGVuKEFTU0VUUylcblx0XHRcdC50aGVuKGNhY2hlID0+IGNhY2hlLmFkZEFsbCh0b19jYWNoZSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHNlbGYuc2tpcFdhaXRpbmcoKTtcblx0XHRcdH0pXG5cdCk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGV2ZW50ID0+IHtcblx0ZXZlbnQud2FpdFVudGlsKFxuXHRcdGNhY2hlcy5rZXlzKCkudGhlbihhc3luYyBrZXlzID0+IHtcblx0XHRcdC8vIGRlbGV0ZSBvbGQgY2FjaGVzXG5cdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG5cdFx0XHRcdGlmIChrZXkgIT09IEFTU0VUUykgYXdhaXQgY2FjaGVzLmRlbGV0ZShrZXkpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxmLmNsaWVudHMuY2xhaW0oKTtcblx0XHR9KVxuXHQpO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBldmVudCA9PiB7XG5cdGlmIChldmVudC5yZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcgfHwgZXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcygncmFuZ2UnKSkgcmV0dXJuO1xuXG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoZXZlbnQucmVxdWVzdC51cmwpO1xuXG5cdC8vIGRvbid0IHRyeSB0byBoYW5kbGUgZS5nLiBkYXRhOiBVUklzXG5cdGlmICghdXJsLnByb3RvY29sLnN0YXJ0c1dpdGgoJ2h0dHAnKSkgcmV0dXJuO1xuXG5cdC8vIGlnbm9yZSBkZXYgc2VydmVyIHJlcXVlc3RzXG5cdGlmICh1cmwuaG9zdG5hbWUgPT09IHNlbGYubG9jYXRpb24uaG9zdG5hbWUgJiYgdXJsLnBvcnQgIT09IHNlbGYubG9jYXRpb24ucG9ydCkgcmV0dXJuO1xuXG5cdC8vIGFsd2F5cyBzZXJ2ZSBzdGF0aWMgZmlsZXMgYW5kIGJ1bmRsZXItZ2VuZXJhdGVkIGFzc2V0cyBmcm9tIGNhY2hlXG5cdGlmICh1cmwuaG9zdCA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0ICYmIGNhY2hlZC5oYXModXJsLnBhdGhuYW1lKSkge1xuXHRcdGV2ZW50LnJlc3BvbmRXaXRoKGNhY2hlcy5tYXRjaChldmVudC5yZXF1ZXN0KSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gZm9yIHBhZ2VzLCB5b3UgbWlnaHQgd2FudCB0byBzZXJ2ZSBhIHNoZWxsIGBzZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sYCBmaWxlLFxuXHQvLyB3aGljaCBTYXBwZXIgaGFzIGdlbmVyYXRlZCBmb3IgeW91LiBJdCdzIG5vdCByaWdodCBmb3IgZXZlcnlcblx0Ly8gYXBwLCBidXQgaWYgaXQncyByaWdodCBmb3IgeW91cnMgdGhlbiB1bmNvbW1lbnQgdGhpcyBzZWN0aW9uXG5cdC8qXG5cdGlmICh1cmwub3JpZ2luID09PSBzZWxmLm9yaWdpbiAmJiByb3V0ZXMuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXR0ZXJuLnRlc3QodXJsLnBhdGhuYW1lKSkpIHtcblx0XHRldmVudC5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goJy9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sJykpO1xuXHRcdHJldHVybjtcblx0fVxuXHQqL1xuXG5cdGlmIChldmVudC5yZXF1ZXN0LmNhY2hlID09PSAnb25seS1pZi1jYWNoZWQnKSByZXR1cm47XG5cblx0Ly8gZm9yIGV2ZXJ5dGhpbmcgZWxzZSwgdHJ5IHRoZSBuZXR3b3JrIGZpcnN0LCBmYWxsaW5nIGJhY2sgdG9cblx0Ly8gY2FjaGUgaWYgdGhlIHVzZXIgaXMgb2ZmbGluZS4gKElmIHRoZSBwYWdlcyBuZXZlciBjaGFuZ2UsIHlvdVxuXHQvLyBtaWdodCBwcmVmZXIgYSBjYWNoZS1maXJzdCBhcHByb2FjaCB0byBhIG5ldHdvcmstZmlyc3Qgb25lLilcblx0ZXZlbnQucmVzcG9uZFdpdGgoXG5cdFx0Y2FjaGVzXG5cdFx0XHQub3Blbihgb2ZmbGluZSR7dGltZXN0YW1wfWApXG5cdFx0XHQudGhlbihhc3luYyBjYWNoZSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChldmVudC5yZXF1ZXN0KTtcblx0XHRcdFx0XHRjYWNoZS5wdXQoZXZlbnQucmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdFx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGUubWF0Y2goZXZlbnQucmVxdWVzdCk7XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlKSByZXR1cm4gcmVzcG9uc2U7XG5cblx0XHRcdFx0XHR0aHJvdyBlcnI7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdCk7XG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Q0FBQTtDQUNPLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUN2QztDQUNPLE1BQU0sS0FBSyxHQUFHO0NBQ3JCLENBQUMsMkJBQTJCO0NBQzVCLENBQUMsY0FBYztDQUNmLENBQUMsb0JBQW9CO0NBQ3JCLENBQUMsc0JBQXNCO0NBQ3ZCLENBQUMsbUJBQW1CO0NBQ3BCLENBQUMseUJBQXlCO0NBQzFCLENBQUMsaUJBQWlCO0NBQ2xCLENBQUMsbUJBQW1CO0NBQ3BCLENBQUMsZUFBZTtDQUNoQixDQUFDLGVBQWU7Q0FDaEIsQ0FBQyxlQUFlO0NBQ2hCLENBQUMsZUFBZTtDQUNoQixDQUFDLGtCQUFrQjtDQUNuQixDQUFDLGFBQWE7Q0FDZCxDQUFDLGFBQWE7Q0FDZCxDQUFDLFlBQVk7Q0FDYixDQUFDLGlCQUFpQjtDQUNsQixDQUFDLG1CQUFtQjtDQUNwQixDQUFDLGNBQWM7Q0FDZixDQUFDLGNBQWM7Q0FDZixDQUFDLGVBQWU7Q0FDaEIsQ0FBQyxnQkFBZ0I7Q0FDakIsQ0FBQyxnQkFBZ0I7Q0FDakIsQ0FBQyxDQUFDO0FBRUY7Q0FDTyxNQUFNLEtBQUssR0FBRztDQUNyQixDQUFDLDJCQUEyQjtDQUM1QixDQUFDLDBCQUEwQjtDQUMzQixDQUFDLDhCQUE4QjtDQUMvQixDQUFDLDBCQUEwQjtDQUMzQixDQUFDLDBCQUEwQjtDQUMzQixDQUFDLDhCQUE4QjtDQUMvQixDQUFDLDhCQUE4QjtDQUMvQixDQUFDLDZCQUE2QjtDQUM5QixDQUFDLHVCQUF1QjtDQUN4QixDQUFDLHVCQUF1QjtDQUN4QixDQUFD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
