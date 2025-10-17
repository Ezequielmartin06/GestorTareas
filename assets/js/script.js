const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const btnSearch = document.getElementById('btn-search');

function addTask (e) {
    e.preventDefault();
    const taskName = taskInput.value;
    if (taskName === '') return;
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = taskName;
    taskList.appendChild(li);
}

btnSearch.addEventListener ("click", addTask);