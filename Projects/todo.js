function addTask() {
    // Get the task input value
    let taskInput = document.getElementById('InputBox').value;

    // Check if the input is empty
    if (taskInput === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    let li = document.createElement('li');
    li.textContent = taskInput;

    // Add the new list item to the task list
    document.getElementById('Troubles').appendChild(li);

    // Clear the input field
    document.getElementById('InputBox').write = '';
}