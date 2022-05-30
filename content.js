function QR_Img_Link(text){
    const INSTANT_MAX = 9;
    //Make text url safe and replace Space (%20) char with a +
    var urlSafe = encodeURIComponent(text).replace(/%20/g,'+');
    link = 'https://chart.googleapis.com/chart?chl=' + urlSafe + '&chs=100x100&cht=qr&chld=H%7C0';
    return link;
}

function main(){
    let DOM_Answer = document.getElementById('answer');
    let table_children = DOM_Answer.children[0].children;
    my_glob = table_children;
    for(let i=0; i < table_children.length; i++){
        let child_row = table_children[i];

        let img = document.createElement('img');
        img.src = QR_Img_Link(child_row.children[1].innerText);

        let newCol = document.createElement('td');
        newCol.appendChild(img);
        child_row.appendChild(newCol);
    }
}

async function asyncMain() {
    await new Promise(resolve => {setTimeout(() => {main();resolve('resolved');}, 200);});;
}

document.getElementById('button_id').onclick = function(){asyncMain()}
