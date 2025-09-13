$(document).ready(function() {
    const list = $("#ft_list");
    const saved = getCookie("todos");

    if (saved) {
        const todos = JSON.parse(saved);
        todos.forEach(task => addTodo(task, false));
    }

    function addTodo(text, save) {
        const div = $("<div>").text(text).click(function() {
            if (confirm("Do you want to remove this TO DO?")) {
                $(this).remove();
                saveTodos();
            }
        });
        list.prepend(div);
        if (save) saveTodos();
    }

    function newTodo() {
        const task = prompt("Enter a new TO DO:");
        if (task && task.trim() !== "") {
            addTodo(task.trim(), true);
        }
    }

    $("#newtodo").on("click", newTodo);

    function saveTodos() {
        const todos = [];
        list.find("div").each(function() {
            todos.push($(this).text());
        });
        setCookie("todos", JSON.stringify(todos), 7);
    }

    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days*24*60*60*1000));
        const expires = "expires="+ d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const cname = name + "=";
        const decoded = decodeURIComponent(document.cookie);
        const ca = decoded.split(';');
        for(let c of ca) {
            c = c.trim();
            if (c.indexOf(cname) === 0) return c.substring(cname.length);
        }
        return "";
    }
});