/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let restartButton = document.createElement('div');
restartButton.className = 'extension-button';
restartButton.id = 'extension-button';
document.body.appendChild(restartButton);

let buttonText = document.createElement('p');
buttonText.className = 'button-text';
buttonText.innerText = 'Restart App';
restartButton.appendChild(buttonText);

const STATIC_EXTENSION_ID = 'mygeneratedid';
restartButton.addEventListener('click', () => {
    chrome.runtime.sendMessage(
        STATIC_EXTENSION_ID,
        {
         methodName: 'callRestart',
        });
});