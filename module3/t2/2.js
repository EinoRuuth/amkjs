let list = document.getElementById("target");
let stufftoadd = ['First item', 'Second item', 'Third item'];

for (let i = 0; i < stufftoadd.length; i++) {
    let li = document.createElement('li');
    li.innerText = stufftoadd[i];
    if (i == 1) {
        li.classList.add("my-item");
    }
    list.appendChild(li);
}

