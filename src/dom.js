import'./tasks.js';

export const newTaskBtn = () => {
    const btn = document.createElement('button');
    btn.innerHTML = '+';
    btn.id = 'newTask';

    return btn;
    // btn.onclick = renderTask;

    // document.body.appendChild(btn);
}

export const renderTask = (taskNum) => {
    const task = document.createElement('div');
    const chkBox = document.createElement('button');
    const taskName = document.createElement('input');

    task.classList.add('task');

    
    taskName.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') saveTask(e.target.textContent);
    })

    task.appendChild(chkBox);
    task.appendChild(taskName);
    
    document.body.appendChild(task);
}
