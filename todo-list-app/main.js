import "./src/sass/main.scss"

const inputTask = document.querySelector('#input-task');
const taskWrapper = document.querySelector('#tasks-wrapper');
const taskPlaceholder = document.querySelector('#placeholder');
const dateTask = new Date();
const form = document.querySelector('#form');

form.addEventListener('submit', addTask);
taskWrapper.addEventListener('click', deleteTask);
taskWrapper.addEventListener('click', doneTask);

function addTask (event) {
    event.preventDefault();

    const taskText = inputTask.value;

    const taskHTML = `
    <div class="tasks-wrapper__task-card">
          <div class="tasks-wrapper__task-content-wrap">
            <span class="tasks-wrapper__task-text">${taskText}</span>
            <span class="tasks-wrapper__task-date">${dateTask.toLocaleString()}</span>
          </div>
          <div class="tasks-wrapper__square-button-wrap">
            <button class="tasks-wrapper__square-button square-button" data-action="done">
              <svg class="square-button--img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12L12 17L22 7M2 12L7 17M12 12L17 7" stroke="#29B650" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="tasks-wrapper__square-button square-button" data-action="delete">
              <svg class="square-button--img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7H20M10 11V17M14 11V17M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7" stroke="#B62929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
    `;

    taskWrapper.insertAdjacentHTML('beforeend', taskHTML)

    //отчистка инпута
    inputTask.value = '';

    if (taskWrapper.children.length > 1) {
        taskPlaceholder.classList.add('tasks-wrapper__placeholder--none');
    }
}

function deleteTask (event) {
    if (event.target.dataset.action === 'delete') {
        const parentElement = event.target.closest('.tasks-wrapper__task-card')
        parentElement.remove()
    }

    if (taskWrapper.children.length === 1) {
        taskPlaceholder.classList.remove('tasks-wrapper__placeholder--none');
    }
}

function doneTask (event) {
    if (event.target.dataset.action === 'done') {
        const parentElement = event.target.closest('.tasks-wrapper__task-card');
        const taskTitle = parentElement.querySelector('.tasks-wrapper__task-text');
        taskTitle.classList.toggle('tasks-wrapper__task-text--done');
    }
}