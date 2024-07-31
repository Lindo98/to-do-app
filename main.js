// mark as complete
// Save to local storage

function addToTask() {
    const addNewTask =  document.getElementById("new-task").value;


    if (addNewTask === '')
    return; 

    const taskList = document.createElement('li');
    taskList.textContent = addNewTask;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', function() {
        this.parentElement.remove();
    })

    taskList.appendChild(deleteBtn);

  taskList.addEventListener('click', function() {
     console.log('hello')
       this.classList.toggle('completed');
    }
    )
   
    document.getElementById('display-list').appendChild(taskList);
    addNewTask.value = ''
}