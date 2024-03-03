//===================================================

const genBtn = document.getElementById('genbtn');
const copyBtn = document.getElementById('copybtn');
const hexColor = document.getElementById('hexcolor');
const genBox = document.getElementById('genbox');
const hexBox = document.getElementById('hexbox');

let chars = '1234567890avcdef'; //charcters for hex color
let output = '';
const pound = '#'; //the first part of the hex color '#'
let copyText = undefined;

genBtn.addEventListener('click', function () {
  for (let i = 0; i < 6; i++) {
    //Loops 6 times, and each time it grabs a random character from char
    output += chars[Math.floor(Math.random() * chars.length)];
  }

  hexColor.innerText = pound + output; //changes the text to the hex color output i.e #ffffff
  hexBox.style.backgroundColor = pound + output; //changes the color for the box
  hexColor.style.color = pound + output;
  output = '';

  copyText = hexColor.innerText;
});

//Allows you to copy the hexcolor to your clipboard
copyBtn.addEventListener('click', function () {
  copyText = hexColor.innerText;

  navigator.clipboard.writeText(copyText);

  console.log(`Copied: ${copyText}`);
});

//===================================================
