export function doneTask (event) {
  if (event.target.dataset.action === 'done') {
    const parentElement = event.target.closest('.tasks-wrapper__task-card');
    const taskTitle = parentElement.querySelector('.tasks-wrapper__task-text');
    taskTitle.classList.toggle('tasks-wrapper__task-text--done');
  }
}
