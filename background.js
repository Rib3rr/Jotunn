var sites = ["danskespil.dk", "bet365.dk", "bet365.com", "bwin.dk", "betinia.dk", "leovegas.com", "mrgreen.com", "unitbet.dk", "betfair.com", "nordicbet.dk", "bet25.dk", "pokerstars.dk", "xoso.com.vn", "caliente.mx", "thaudray.com", "stake.com", "rollbit.com", "ekstrapoint.com", "pip.dk", "vindercasino.dk", "casinohouse.dk", "spilnu.dk", "spillehallen.dk", "7.dk", "happytiger.co.uk", "bingohallen.dk", "kapowcasino.dk", "dansk.bet", "csgoempire.com", "500.casino", "csgohowl.com", "csgodude.com", "skinlords.com", "csgoweb.net", "gamdom.com", "coinpoker.com", "datdrop.com", "datdrop.io"]; 

function redirectIfMatch(url, tabId) {
  var hostname = new URL(url).hostname;

  for (var i = 0; i < sites.length; i++) {
    if (hostname.includes(sites[i])) {
      chrome.tabs.update(tabId, {url: "https://ludomani.dk/"});
      break;
    }
  }
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "addSite") {
    var url = new URL(message.url);
    sites.push(url.hostname);

    
    redirectIfMatch(message.url, sender.tab.id);
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === "loading") {
    redirectIfMatch(tab.url, tabId);
  }
});
