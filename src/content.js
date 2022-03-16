let restartButton = document.createElement('div');
restartButton.className = 'extension-fab';
restartButton.id = 'extension-fab';
document.body.appendChild(restartButton);

let buttonText = document.createElement('p');
buttonText.className = 'button-text';
buttonText.innerText = 'click me ' + version;
restartButton.appendChild(buttonText);

const STATIC_EXTENSION_ID = 'mygeneratedid';
restartButton.addEventListener('click', () => {
    chrome.runtime.sendMessage(
        STATIC_EXTENSION_ID,
        {
         methodName: 'callRestart',
        });
});