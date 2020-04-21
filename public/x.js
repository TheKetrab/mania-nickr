
function getCharSet(name,from,to) {
    let str = `<div id='${name}'>`;
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



function f() {
    alert(1);
    var range = document.getSelection().getRangeAt(0);
    console.log(`startContainer: ${range.startContainer}`);
    console.log(`startOffset: ${range.startOffset}`);
    console.log(`endContainer: ${range.endContainer}`);
    console.log(`endOffset: ${range.endOffset}`);

    var fragment = range.extractContents();

    for (let child of fragment.childNodes) {
        console.log(`${child.nodeType} ${child.nodeName} : ${child.nodeValue}`);
    }
}

$("#input-nadeo").keyup(function() {
    updateResult();
});

function updateResult() {
    var val = $("#input-nadeo-input").val();
    $("#result").html(MPStyle.Parser.toHTML(val));

    debugger;
    // save text-input in cookie
    $.cookie('nick', $("#input-text").html() , 2147483647);
    debugger;
}


// --------------------------------------------------------------------------------------------


function initSpecialCharacters() {

    function update(set) {
        let text = getCharSet(set[0],set[1],set[2]);
        var characters = document.getElementById("characters");
        characters.innerHTML = text;
    }

    var select = document.getElementById("specialCharacters");
    var sets = [
        ['Latino 1',   '0x0020','0x007F'],
        ['Latino 2',   '0x00A1','0x00BF'],
        ['Latino 3',   '0x0100','0x017F'],
        ['Latino 4',   '0x0180','0x024F'],
        ['Greek',      '0x0370','0x03FF'],
        ['Cyrylic',    '0x0400','0x04FF'],
        ['Ormian',     '0x0530','0x058F'],
        ['Hebraian',   '0x0590','0x05FF'],
        ['Arabian 1',  '0x0600','0x06FF'],
        ['Arabian 2',  '0x0750','0x077F'],
        ['Devanagari', '0x0900','0x097F'],
        ['Bengal',     '0x0980','0x09FF'],
        ['Gurmukhi',   '0x0A00','0x0A7F'],
        ['Gujarati',   '0x0A80','0x0AFF'],
        ['Orija',      '0x0B00','0x0B7F'],
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









initSpecialCharacters();
updateNadeoInput();
updateResult();



