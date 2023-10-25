// Define an array to store the tasks
const tasks = [];

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('task');
  const taskText = taskInput.value.trim();

  if (taskText) {
    tasks.push(taskText);
    renderTasks();
    taskInput.value = '';
  }
}

// Function to edit a task
function editTask(index) {
  const updatedTaskText = prompt('Edit the task:', tasks[index]);
  if (updatedTaskText) {
    tasks[index] = updatedTaskText;
    renderTasks();
  }
}

// Function to delete a task
function deleteTask(index) {
  if (confirm('Are you sure you want to delete this task?')) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

// Function to render tasks in the UI
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = task;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(index));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(index));

    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
  });
}

// Initialize your application
document.getElementById('addButton').addEventListener('click', addTask);
renderTasks();
