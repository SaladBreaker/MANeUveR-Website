function copyText(textToCopy) {
   // Copy the text inside the text field
  navigator.clipboard.writeText(textToCopy);
}

async function copyText1() {
  // Copy the text inside the text field
  copyText("{option1}");
  await afterCopy("button-1")
}

async function copyText2() {
   // Copy the text inside the text field
  copyText("{option1}");
  await afterCopy("button-2")
}

async function copyText3() {
   // Copy the text inside the text field
  copyText("{option1}");
  await afterCopy("button-3")
}

async function afterCopy(buttonId) {
  var button = document.getElementById(buttonId);
  var initialText = button.innerText;
  button.innerText = "Copied!";
  await new Promise(r => setTimeout(r, 2000));
  button.innerText = initialText;
}
