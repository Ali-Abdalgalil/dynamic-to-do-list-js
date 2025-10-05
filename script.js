document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function createTaskElement(taskText) {
        const li = document.createElement('li');

        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;
        li.appendChild(textSpan);

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.className = 'remove-btn';
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('aria-label', `Remove task: ${taskText}`);

        removeButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(removeButton);
        return li;
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (!taskText) {
            alert('Please enter a task!');
            return;
        }

        const taskItem = createTaskElement(taskText);
        taskList.appendChild(taskItem);

        taskInput.value = '';
        taskInput.focus();
    }


    addButton.addEventListener('click', addTask);


    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    });
});
