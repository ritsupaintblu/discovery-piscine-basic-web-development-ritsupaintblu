function setCookie(name, value, days) {
    let d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
    let cname = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i=0; i<ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}


function loadTodos() {
    let saved = getCookie("todos");
    if (saved) {
        let arr = JSON.parse(saved);
        arr.forEach(todo => addTodo(todo, false));
    }
}

function saveTodos() {
    let todos = [];
    document.querySelectorAll("#ft_list .todo").forEach(div => {
        todos.push(div.textContent);
    });
    setCookie("todos", JSON.stringify(todos), 7);
}

function addTodo(text, save=true) {
    if (!text) return;
    let div = document.createElement("div");
    div.className = "todo";
    div.textContent = text;

    div.onclick = function() {
        if (confirm("Do you really want to remove this TO DO?")) {
            div.remove();
            saveTodos();
        }
    };

    let list = document.getElementById("ft_list");
    list.prepend(div);

    if (save) saveTodos();
}

document.getElementById("newBtn").onclick = function() {
    let text = prompt("Enter a new TO DO:");
    if (text && text.trim() !== "") {
        addTodo(text.trim());
    }
};

window.onload = loadTodos;