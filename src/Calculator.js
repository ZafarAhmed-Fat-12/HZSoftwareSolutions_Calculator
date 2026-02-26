const display = document.getElementById("display");

function adjustFontSize() {
  const display = document.getElementById("display");
  const length = display.value.length;

  if (length > 12) {
    display.style.fontSize = "1.5rem";
  } else if (length > 8) {
    display.style.fontSize = "2.2rem";
  } else if (length > 5) {
    display.style.fontSize = "3rem";
  } else {
    display.style.fontSize = "4rem";
  }
}

function appendToDisplay(input) {
  display.value === "0" ? (display.value = input) : (display.value += input);
  adjustFontSize();
  updatePreview();
}
function clearDisplay() {
  display.value = "0";
  document.getElementById("preview").innerText = "";
  adjustFontSize();
}

function updatePreview() {
  const preview = document.getElementById("preview");
  try {
    let val = display.value.replace(/%/g, "/100");

    if (!isNaN(display.value.slice(-1))) {
      preview.innerText = new Function("return " + val)();
    }
  } catch (e) {
    preview.innerText = "";
  }
}

function backspace() {
  display.value = display.value.length > 1 ? display.value.slice(0, -1) : "0";
  adjustFontSize();
  updatePreview();
}
function calculateSquareRoot() {
  try {
    const result = Math.sqrt(eval(display.value.replace(/%/g, "/100")));
    display.value = result;
  } catch (error) {
    display.value = "Error";
    setTimeout(clearDisplay, 1500);
  }
}

function calculateResult() {
  const preview = document.getElementById("preview");
  if (preview.innerText !== "") {
    display.value = preview.innerText;
    preview.innerText = "";
  }
}
