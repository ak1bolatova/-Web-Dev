const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

// функция создания одной задачи
function createTask(text, completed = false) {
    const li = document.createElement("li");
    li.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;

    const span = document.createElement("span");
    span.textContent = text;
    if (completed) span.classList.add("done");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.className = "delete-btn";

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // события
    checkbox.addEventListener("change", function () {
        span.classList.toggle("done");
    });

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });
}

// добавление новой задачи из input
function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    createTask(text);
    input.value = "";
}

// начальные задачи создаются через JS
createTask("First item", true);
createTask("Second item");
createTask("Third item");
