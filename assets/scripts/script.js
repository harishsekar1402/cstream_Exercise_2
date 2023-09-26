function addtask(){
    var x = document.getElementById('input').value;
    var li = document.createElement('li');
    var txt = document.createTextNode(x);
    var btn = document.createElement('button');
    var btn_txt = document.createTextNode("X");
    btn.appendChild(btn_txt);
    li.appendChild(txt);
    li.appendChild(btn);
    
    var arr = [];
    arr += document.getElementById('output').appendChild(li);
    btn.addEventListener('click',()=>li.remove())
}