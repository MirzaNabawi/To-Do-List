// script.js
document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskTime = document.getElementById('taskTime');
    const taskText = taskInput.value.trim();
    const taskDateValue = taskDate.value;
    const taskTimeValue = taskTime.value;

    if (taskText !== '' && taskDateValue !== '' && taskTimeValue !== '') {
        addTask(taskText, taskDateValue, taskTimeValue);
        taskInput.value = '';
        taskDate.value = '';
        taskTime.value = '';
    }
});

function addTask(taskText, taskDate, taskTime) {
    const taskList = document.getElementById('taskList');

    const taskItem = document.createElement('li');
    const taskDetails = document.createElement('span');
    taskDetails.textContent = `${taskText} - ${taskDate} ${taskTime}`;
    taskItem.appendChild(taskDetails);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}
