import { addTask, doneTask, deleteTask } from './src/action/index.js';

import "./src/sass/main.scss"

const inputTask = document.querySelector('#input-task');
const taskWrapper = document.querySelector('#tasks-wrapper');
const taskPlaceholder = document.querySelector('#placeholder');
const dateTask = new Date();
const form = document.querySelector('#form');

form.addEventListener('submit', (event) => addTask(event, inputTask, dateTask, taskWrapper, taskPlaceholder))
taskWrapper.addEventListener('click', (event) => deleteTask(event, taskPlaceholder, taskWrapper));
taskWrapper.addEventListener('click', doneTask);
