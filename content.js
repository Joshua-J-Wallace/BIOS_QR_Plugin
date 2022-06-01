function QR_Img_Link(text){
    //Make text url safe and replace Space (%20) char with a +
    var urlSafe = encodeURIComponent(text).replace(/%20/g,'+');
    link = 'https://chart.googleapis.com/chart?chl=' + urlSafe + '&chs=100x100&cht=qr&chld=H%7C0';
    return link;
}

function Code128B_Img_Link(text){
    //Make text url safe
    var urlSafe = encodeURIComponent(text);
    link = 'https://www.webarcode.com/barcode/image.php?code=' + urlSafe + '&type=C128B&xres=1&height=100&width=200&font=3&output=png&style=197';
    return link;
}

function DOM_td_img_creation(imgSrc){
    let img = document.createElement('img');
    img.src = imgSrc;

    let td = document.createElement('td');
    td.appendChild(img);
    return td;
}

function main(switchCode=2){
    let DOM_Answer = document.getElementById('answer');
    let table_children = DOM_Answer.children[0].children;
    my_glob = table_children;
    for(let i=0; i < table_children.length; i++){
        const CODE_QR = 0;
        const CODE_128B = 1;
        const CODE_BOTH = 2;

        let child_row = table_children[i];
        let codeText = child_row.children[1].innerText;

        if(switchCode===CODE_QR || switchCode===CODE_BOTH){
            child_row.appendChild(DOM_td_img_creation(QR_Img_Link(codeText)));
        }
        if(switchCode===CODE_128B || switchCode===CODE_BOTH){
            child_row.appendChild(DOM_td_img_creation(Code128B_Img_Link(codeText)));
        }
        
    }
}

async function asyncMain() {
    await new Promise(resolve => {setTimeout(() => {main();resolve('resolved');}, 200);});;
}

document.getElementById('button_id').onclick = function(){asyncMain()}
