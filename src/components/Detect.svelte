<script>
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0 ? true : false;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined' ? true : false;

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)) ? true : false;

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode ? true : false;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia ? true : false;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime) ? true : false;

// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1) ? true : false;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS ? true : false;


let browser = 'Your browser is:';
if (isOpera){
    browser+= " Opera"
} else if (isFirefox) {
    browser+= " Firefox"
}else if (isSafari) {
    browser+= " Safari"
}else if (isIE) {
    browser+= " Internet Explorer"
}else if (isEdge) {
    browser+= " Edge"
}else if (isChrome) {
    browser+= " Chrome"
}else if (isEdgeChromium) {
    browser+= " Edge Chromium"
} else {
    browser += " We don't know???"
}
</script>
<p><strong>{browser}</strong></p>
<p></p>
{#if isOpera} 
	<ol>
        <li>Go to browser’s advanced setting</li>
        <li>Select Privacy and security > Content settings > CookiesSelect</li>
        <li>Block third-party cookies on the dropdown menu.</li>
    </ol>
{:else if isFirefox} 
	<ol>
        <li>In Firefox, click Tools > Options > Privacy</li>
        <li>Select "Use custom settings for history" in the drop-down menu at the top of the dialog box</li> 
        <li>Check "Clear history when Firefox closes" </li>
        <li>Click the Settings button </li>
        <li>In the Settings for Clearing History dialog, check the options you want to erase on exit and click OK</li>
    </ol>
{:else if isSafari }
    <ol>
        <li>Click the wrench icon in the top-right corner of the browser window and 
        <li>Choose Options > Under the Hood > Content Settings > Cookies.</li> 
        <li>Block all third-party cookies or all tracking cookies</li>
        <li>Another option in this dialog lets you delete all cookies and other site data automatically when you close the browser.</li>
    </ol>
{:else if isIE} 
	<h2>Honestly...you need to stop using internet explorer. Then we can talk. </h2>
{:else if isEdge }
        <ol>
            <li>Go to Settings</li>
            <li>Select View Advanced Settings</li>
            <li>Press the drop down arrow under Cookies</li>
            <li>Select the 'Block only third party cookies' option</li>
        </ol>
{:else if isChrome }
	<ol>
        <li>Click the wrench icon in the top-right corner of the browser window and 
        <li>Choose Options > Under the Hood > Content Settings > Cookies.</li> 
        <li>Block all third-party cookies or all tracking cookies</li>
        <li>Another option in this dialog lets you delete all cookies and other site data automatically when you close the browser.</li>
    </ol>
{:else if isEdgeChromium}
<ol>
    <li>Go to Settings</li>
    <li>Select View Advanced Settings</li>
    <li>Press the drop down arrow under Cookies</li>
    <li>Select the 'Block only third party cookies' option</li>
</ol>
{:else} 
	<p>Sorry...we don't know what kind of browser you are using, so can't provide instructions. Try searching DuckDuckGo for an answer.</p>
{/if}
<p></p>
<style>
    strong{
        font-weight: 600;
        font-size: 22px;
        text-decoration: underline;
    }
    
</style>