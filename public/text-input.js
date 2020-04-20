/**
 * Each letter is a separate span.
 */


$("#rgb-inputs-red").on("keyup", numberGuard);
$("#rgb-inputs-green").on("keyup", numberGuard);
$("#rgb-inputs-blue").on("keyup", numberGuard);

function numberGuard() {
    if (this.value > 255) this.value = 255;
    if (this.value < 0) this.value = 0;
}



// TODO gradient text
// rgb color for [dec,dec,dec] objects
function computeRgbColor(color1,color2,percent) {
    return {
        red: color1.red + Math.floor(percent * (color2.red - color1.red)),
        green: color1.green + Math.floor(percent * (color2.green - color1.green)),
        blue: color1.blue + Math.floor(percent * (color2.blue - color1.blue))
    }
}





var nadeoInput = document.getElementById("input-nadeo-input")
var nadeoInputWarning = document.getElementById("input-nadeo-warning");
var nadeoInputWarningText = document.getElementById("input-nadeo-warning-text");
function updateNadeoInput() {
    nadeoInput.value = getNadeoInput();
    let len = nadeoInput.value.length;
    nadeoInputWarningText.innerHTML = `(warning, to long!) [${len}]`;
    if (len > 45) nadeoInputWarning.style.display = "inline";
    else nadeoInputWarning.style.display = "none";
}

var inputText = document.getElementById("input-text");
function getSelectedSpans() {

    var sel = document.getSelection();
    if (sel.type == "Range") {
        var range = sel.getRangeAt(0);

        // selection inside input-text
        if (range.startContainer.parentNode.nodeName == "SPAN"
         && range.startContainer.parentNode.parentNode == inputText
         && range.endContainer.parentNode.nodeName == "SPAN"
         && range.endContainer.parentNode.parentNode == inputText) {

            var result = [];

            // single?
            if (range.startContainer == range.endContainer) {
                result.push(range.startContainer.parentNode);
                return result;
            }

            // more than one
            let start = range.startContainer.parentNode;
            let end = range.endContainer.parentNode;
            for (let temp = start; temp!=end; temp=temp.nextSibling)
                result.push(temp);
            result.push(end);
            return result;
        }

    }

    return null;
}




var propBold = document.getElementById("prop-bold");
var propItalic = document.getElementById("prop-italic");
var propShadow = document.getElementById("prop-shadow");

propBold.addEventListener("change",function() { modifyLetters(this,'font-weight','bold','normal'); updateNadeoInput(); updateResult(); });
propItalic.addEventListener("change",function() { modifyLetters(this,'font-style','italic','normal'); updateNadeoInput(); updateResult(); });
propShadow.addEventListener("change",function() { modifyLetters(this,'text-shadow', '1px 1px 1px rgba(0, 0, 0, 0.5)','none'); updateNadeoInput(); updateResult(); });
function modifyLetters(checker,cssProp,valueOn,valueOff) {
    var chars = getSelectedSpans();
    if (chars == null) return;
    if (checker.checked) for (let span of chars) $(span).css(cssProp, valueOn);
    else for (let span of chars) $(span).css(cssProp,valueOff);
}


var propNarrow = document.getElementById("prop-narrow");
var propNormal = document.getElementById("prop-normal");
var propWide = document.getElementById("prop-wide");

propNarrow.addEventListener("change",function() { setWideness('-.1em','95%'); updateNadeoInput(); updateResult(); });
propNormal.addEventListener("change",function() { setWideness('',''); updateNadeoInput(); updateResult(); });
propWide.addEventListener("change",function() { setWideness('.1em','105%'); updateNadeoInput(); updateResult(); });
function setWideness(letterSpacing,fontSize) {
    var chars = getSelectedSpans();
    if (chars == null) return;
    for (let span of chars) {
        $(span).css("letter-spacing", letterSpacing);
        $(span).css("font-size", fontSize);
    }
    debugger;
}



// style object
const emptyStyleObject = {
    style: 'normal', // wide | narrow | normal
    color: '', // eg. $fff (3-digit hex)
    bold: false,
    italic: false,
    shadow: false
}

function getNadeoColor(span) {
    var color = span.style.color;
    if (color == "") return "";
    var rgbArr = (color.substr(4, color.length - 5).split(', '));
    let res = "$";
    for (let item of rgbArr) res += Math.floor(+item/16).toString(16);
    return res;
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}


function getWideness(span) {
    if (span.style.fontSize == '105%') return 'wide';
    if (span.style.fontSize == '95%') return 'narrow';
    return 'normal';
}

function getStyleObject(span) {
    var color = getNadeoColor(span);
    var style = getWideness(span); // TODO
    var bold = span.style.fontWeight == 'bold' ? true : false;
    var italic = span.style.fontStyle == 'italic' ? true : false;
    var shadow = span.style.textShadow != 'none' && span.style.textShadow != '';
    return { color, style, bold, italic, shadow };
}

function getNadeoInput() {

    var spans = inputText.childNodes;
    var result = "";

    let previous = emptyStyleObject;
    for (let span of spans) {
        if (span.nodeName != "SPAN") continue;
        let temp = getStyleObject(span);

        if (previous.style != temp.style) {
            if (temp.style == 'normal') {
                result += '$g'; // $g completely resets!
                previous = emptyStyleObject; // reset previous object
            }
            else if (temp.style == 'wide') result += '$w';
            else if (temp.style == 'narrow') result += '$n';
        }

        if (previous.bold != temp.bold) result += '$o';
        if (previous.italic != temp.italic) result += '$i';
        if (previous.shadow != temp.shadow) result += '$s';
        if (previous.color != temp.color) {
            if (temp.color == "") result += '$g';
            else result += temp.color;
        }

        let char = span.innerHTML;
        if (char == '&nbsp;') char = ' ';
        else if (char == '&lt;') char = '<';
        else if (char == '&gt;') char = '>';
        else if (char == '&amp;') char = '&';
        else if (char == '$') char = '$$';
        result += char;
        previous = temp;
    }

    return result;
}



var clipboardData = "";
document.addEventListener('paste', function (event) {
    clipboardData = event.clipboardData.getData('Text');
});


$("#input-text").on("beforeinput", function(e) {

    // insertText | deleteContentBackward | insertFromPaste | insertParagraph (enter) | deleteByCut
    if (e.originalEvent.inputType == "insertParagraph") {
        e.preventDefault();
    }

    if (e.originalEvent.inputType == "insertFromPaste") {

        var spans = [];
        var letters = clipboardData.split('');
        var loc = getCaretLocation(inputText);
        var nextSpan = inputText.childNodes[loc];

        for (let letter of letters) {
            var span = document.createElement('span');
            span.innerHTML = letter;
            if (nextSpan == null) inputText.appendChild(span);
            else inputText.insertBefore(span,nextSpan);
            loc += 1;
            setCaretLocation(inputText,loc);
        }

        updateNadeoInput();
        updateResult();
        e.preventDefault(); // cancel event!
    }

});



// following that solution:
// https://stackoverflow.com/questions/21654928#21655016

$("#input-text").on("input", function (){
    var loc = getCaretLocation(this);
    $(this).contents().each(function(){
        var current = this;
        if(this.nodeType == 3 || this.nodeName == "FONT"){
            $.each($(this).text().split(""), function(){
                $("<span>").text(this).insertBefore(current);
            });
            $(this).remove();
        }else{
            var crtTxt = $(current).text();
            if(crtTxt.length > 1){
                for(var i = crtTxt.length - 1; i > 0; i--){
                    $("<span>").text(crtTxt[i]).insertAfter(current);
                }
                $(current).text(crtTxt[0]);
            }
        }
    });
    setCaretLocation(this, loc);

    updateNadeoInput();
    updateResult();

});





function setCaretLocation(ele, pos){
    if (pos == 0) return;
    var range = document.createRange(),
        sel = window.getSelection();
    range.setStart(ele.childNodes[pos - 1], 1);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
}

function getCaretLocation(element) {
    var range = window.getSelection().getRangeAt(0),
        preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(element);
        preCaretRange.setEnd(range.startContainer, range.startOffset);
    return preCaretRange.toString().length;
}
