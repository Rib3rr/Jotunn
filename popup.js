document.getElementById('Block').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.runtime.sendMessage({
      action: "addSite",
      url: activeTab.url
    });
  });
});
