import Task from './tasks.js';

export const newTaskBtn = () => {
    const btn = document.createElement('button');
    btn.innerHTML = '+';
    btn.id = 'newTask';

    btn.onclick = () => {
        const taskID = `task${localStorage.length + 1}`;
        //Validate it last node entered has been saved in order to render new task form

        renderTask(taskID, '');
    }

    document.body.appendChild(btn);
}

export const renderTask = (id, description) => {
    const task = document.createElement('div');
    const chkBox = document.createElement('button');
    const taskDescription = document.createElement('input');
    const taskID = id;

    taskDescription.value = description;
    taskDescription.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') new Task(e.target.parentNode.id, e.target.value);
    });

    task.appendChild(chkBox);
    task.appendChild(taskDescription);
    task.id = taskID;

    task.classList.add('task');
    document.body.appendChild(task);
}

export const renderAllTasks = () => {
    //CLEAR PREVIOUS NODES

    for (const task in localStorage) {
        //if key being accessed isnt an inherited property
        if (localStorage.hasOwnProperty(task)) renderTask(task, localStorage.getItem(task));
    }

    newTaskBtn();
}