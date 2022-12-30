/**
 * common-scripts.js
 *
 * Other scripts, rather not connected with other modules.
 *
 */

// ----- START ----- //
(function start() {
    checkIfIE();
    initSpecialCharacters();
    updateNadeoInput();
    updateResult();
})();

function getCharSet(name, from, to) {
    var str = `<div id='${name}'>`;
    str += `<b>${name}</b><br/>`;
    for (let i=parseInt(from); i<=parseInt(to); i++)
        str += `&\#${i}; `;
    str += '</div>';
    return str;
}

function copyToClipboard() {
    var copyText = document.getElementById("input-nadeo-input");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    copyText.setSelectionRange(0, 0);
}

function updateResult() {
    var val = $("#input-nadeo-input").val();
    $("#result").html(MPStyle.Parser.toHTML(val));
    // save text-input in cookie
    $.cookie('nick', $("#input-text").html() , {expires: 365});
}

function initSpecialCharacters() {

    function update(set) {
        let text = getCharSet(set[0],set[1],set[2]);
        var characters = document.getElementById("characters");
        characters.innerHTML = text;
    }

    var select = document.getElementById("special-characters");
    var sets = [
        ['Latin 1',    '0x0020','0x007F'],
        ['Latin 2',    '0x00A1','0x00BF'],
        ['Latin 3',    '0x0100','0x017F'],
        ['Latin 4',    '0x0180','0x024F'],
        ['Greek',      '0x0370','0x03FF'],
        ['Cyrillic',   '0x0400','0x04FF'],
        ['Armenian',   '0x0530','0x058F'],
        ['Hebrew',     '0x0590','0x05FF'],
        ['Arabian 1',  '0x0600','0x06FF'],
        ['Arabian 2',  '0x0750','0x077F'],
        ['Devanagari', '0x0900','0x097F'],
        ['Bengali',    '0x0980','0x09FF'],
        ['Gurmukhi',   '0x0A00','0x0A7F'],
        ['Gujarati',   '0x0A80','0x0AFF'],
        ['Oriya',      '0x0B00','0x0B7F'],
        ['Tamil',      '0x0B80','0x0BFF'],
        ['Thai',       '0x0E00','0x0E7F'],
        ['Hangul Jamo','0x1100','0x117F']
        // TODO checked until Batak 1BC0-1BFF
    ];

    for (let i = 0; i<sets.length; i++) {
        let set = sets[i];
        var opt = document.createElement('option');
        opt.value = i;
        opt.text = set[0];
        select.appendChild(opt);
    }

    select.addEventListener('change', function() {
        let set = sets[this.value];
        update(set);
    });

    //default
    update(sets[0]);
}

function checkIfIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');
    if (msie > 0 || trident > 0) {
        alert("You are using Internet Explorer browser. The website won't work correctly! Please, download other browser.");
    }
}
