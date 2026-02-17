const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    // create elements
    const li = document.createElement("li");

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // append elements
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(span);

    li.appendChild(taskDiv);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // mark as done
    checkbox.addEventListener("change", function() {
        span.classList.toggle("done");
    });

    // delete task
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    input.value = "";
}
