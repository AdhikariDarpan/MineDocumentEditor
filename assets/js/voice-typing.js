import { speechToText } from "https://unpkg.com/speech-into-text@2.0.0/index.js";

const voiceTyping = document.getElementById("voiceTyping");
let Clicked = true;
voiceTyping.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  let content = `
  <div class="text-content">Voice Typing Language Selection</div>
  <div style="display:flex; align-items:center;">
    <label for="selectLang">Choose Your Language:</label>
    <select id="selectLang"></select>
  </div>
  <div class="btns">
    <button id="startVoiceTyping">Start/Stop</button>
  </div>`;
  showDialog(content);
  speechToText('text-field', '', 'startVoiceTyping', '', 'selectLang'); 
  typingFunction();
});

function typingFunction(){
  document.getElementById('text-field').blur();
}

