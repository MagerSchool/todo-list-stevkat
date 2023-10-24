export function deleteTask (event, taskPlaceholder, taskWrapper) {
  if (event.target.dataset.action === 'delete') {
    const parentElement = event.target.closest('.tasks-wrapper__task-card')
    parentElement.remove()
  }

  if (taskWrapper.children.length === 1) {
    taskPlaceholder.classList.remove('tasks-wrapper__placeholder--none');
  }
}
