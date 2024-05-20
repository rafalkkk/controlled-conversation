chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url === 'about:blank' || changeInfo.url.startsWith('edge://newtab')) {
        chrome.tabs.update(tabId, {url: 'http://www.google.com'});
    }
});

