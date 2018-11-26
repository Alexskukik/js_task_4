window.onload = function () {
    var List = [];
    document.getElementById("add_task").onclick = function () {
        var task = document.getElementById("task").value;
        var date = document.getElementById("date").value;
        var tmp = {};
        tmp.task = task;
        tmp.date = date;
        List[List.length] = tmp;
        console.log(List);
        fillInfo();
    }

    function fillInfo() {
        document.getElementById("list").innerHTML = "";
        for (let i = 0; i < List.length; i++) {
            let button = document.createElement('input');
            button.type = "button";
            button.className = "del";
            button.value = "Delete";
            let div = document.createElement('div');
            let divChild = document.createElement('div');
            div.className = "block";
            let innerHTML = '<input type = "checkbox" class = "check">';
            innerHTML += '<div class = "date_and_task">';
            innerHTML += '<div class = "date_value">' + List[i].date + '</div>';
            innerHTML += '<div class = "space"> </div>'
            innerHTML += '<div class = "task_value">' + List[i].task + '</div>';
            innerHTML += '</div>';
            div.innerHTML = innerHTML;
            div.appendChild(button);
            var li = document.createElement('li');
            li.className = "mytask";
            document.getElementById("list").appendChild(li);
            document.getElementById("list").lastChild.appendChild(div);

            button.onclick = function () {
                console.log(i);
                List.splice(i, 1);
                fillInfo();
            }
        }

    }
    document.getElementById('clear').onclick = function () {
        List = [];
        fillInfo();
    }
}

