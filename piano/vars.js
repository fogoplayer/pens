const whiteKeyboard = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
];
const blackKeyboard = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
];
const scale = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

function whiteKey(pitch, key) {
  return `<button id="key-${key}" class="key white-key" tabindex="-1" onclick="playTone(tone['${pitch}'])"><div class="pitch-label">${pitch}</div><div class="key-label">${key}</div></button>`;
}

function blackKey(pitch, key) {
  return `<div class="anchor"><button id="key-${key}" class="key black-key" tabindex="-1" onclick="playTone(tone['${pitch}'])"><div class="pitch-label">${pitch}</div><div class="key-label">${key}</div></button></div>`;
}