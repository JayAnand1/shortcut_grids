chrome.runtime.onInstalled.addListener(function (details) {
    // This gets once the extension is installed on browser
});
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // Get called when page URL is updated or refreshed
});
// To dynamically change extension icon
chrome.browserAction.setIcon({
    path: {
        "16": "/logo192.png",
        "48": "/logo192.png",
        "128": "/logo192.png",
    }
});