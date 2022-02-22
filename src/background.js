chrome.runtime.onMessageExternal.addListener(
    function(request, _, sendResponse) {
        if (request.methodName == 'callRestart') {
            chrome.runtime.restart();
            sendResponse({response: "restarted"});
        }
    }
  );