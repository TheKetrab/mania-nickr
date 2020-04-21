/**
 * color-picker.js
 *
 * Nickr uses IRO color picker widget: https://iro.js.org/
 * Here is the implementation for ManiaNickr
 */

var colorPicker = new iro.ColorPicker('#picker', {
  display: "flex",
  layout: [
    {
      component: iro.ui.Box,
      options: { width: 100, handleRadius: 5, borderWidth: 1, borderColor: "#222" }
    },
    {
      component: iro.ui.Slider,
      options: {
        borderWidth: 1, borderColor: "#222", sliderSize: 10, handleRadius: 5,
        width: 100, sliderType: "value", layoutDirection: "horizontal"
      }
    },
    {
      component: iro.ui.Slider,
      options: {
        borderWidth: 1, borderColor: "#222", sliderSize: 10, handleRadius: 5,
        width: 100, sliderType: "saturation", layoutDirection: "horizontal"
      }
    },
    {
      component: iro.ui.Slider,
      options: {
        borderWidth: 1, borderColor: "#222", sliderSize: 10, handleRadius: 5,
        width: 100, sliderType: "hue", layoutDirection: "horizontal"
      }
    }
  ]
});

// variables
var rgbInputsRed = document.getElementById('rgb-inputs-red');
var rgbInputsGreen = document.getElementById('rgb-inputs-green');
var rgbInputsBlue = document.getElementById('rgb-inputs-blue');
var colorHexInput = document.getElementById('color-hex-input');
var buttonApplyColor = document.getElementById('button-apply-color');

// events
colorPicker.on(["color:init", "color:change"], onChangeColor);
buttonApplyColor.addEventListener("click",setColor);
$(rgbInputsRed).on("keyup change",updateRgb);
$(rgbInputsGreen).on("keyup change",updateRgb);
$(rgbInputsBlue).on("keyup change",updateRgb);
$(colorHexInput).on("keyup change",updateViaHex);

function onChangeColor(color) {
  rgbInputsRed.value = color.rgb.r;
  rgbInputsGreen.value = color.rgb.g;
  rgbInputsBlue.value = color.rgb.b;
  if (colorHexInput != document.activeElement) colorHexInput.value = color.hexString;
}

function updateRgb() {
    colorPicker.color.rgb = {
        r: rgbInputsRed.value,
        g: rgbInputsGreen.value,
        b: rgbInputsBlue.value
    }
}

function updateViaHex() {
  this.value = parseHex(this.value);
  var valueChars = this.value.split('');
  var hexArr = ['0','0','0','0','0','0'];

  for (let i=1; i<valueChars.length; i++)
    hexArr[i-1] = valueChars[i];

  let n = valueChars.length;
  if (n>2 && !(n%2))
    [hexArr[n-1],hexArr[n-2]] = [hexArr[n-2],hexArr[n-1]];

  rgbInputsRed.value = parseInt(hexArr[0]+hexArr[1],16);
  rgbInputsGreen.value = parseInt(hexArr[2]+hexArr[3],16);
  rgbInputsBlue.value = parseInt(hexArr[4]+hexArr[5],16);

  updateRgb();
}

function parseHex(hexString) {
  var result = "#";
  var i = 0;
  var arr = hexString.toLowerCase().split('');
  for (let c of arr) {
    if (isHexDigit(c)) {
      result += c;
      i += 1;
      if (i >= 6) break;
    }
  }
  return result;
}

function isHexDigit(char) {
  let ascii = char.charCodeAt(0);
  return (ascii>=48 && ascii<=57) || (ascii>=97 && ascii<=102);
}

function setColor() {
  var chars = getSelectedSpans();
  if (chars == null) return;
  for (let span of chars) $(span).css('color',colorPicker.color.hexString);
  updateNadeoInput();
  updateResult();
}
