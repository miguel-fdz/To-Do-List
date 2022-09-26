import Task from './tasks.js';
let taskList = [];

export const newTaskBtn = () => {
    const btn = document.createElement('button');
    btn.innerHTML = '+';
    btn.id = 'newTask';

    btn.onclick = () => {
        const taskID = `task${taskList.length + 1}`;
        renderAllTasks();
        renderTask(taskID, '');
        newTaskBtn();
    }

    document.body.appendChild(btn);
}

export const renderTask = (id, description) => {
    const task = document.createElement('div');

    const chkBox = document.createElement('input');
    chkBox.type = 'checkbox';
    chkBox.classList.add('chkBox');
    
    const taskDescription = document.createElement('input');
    taskDescription.classList.add('taskDesc');
    taskDescription.placeholder = 'Enter task description';
    taskDescription.size = 65;

    const taskID = id;
    taskDescription.value = description;

    chkBox.addEventListener('click', () => {
        task.classList.add('erasing');
        setTimeout(() => {
            taskList = taskList.filter(t => t.id != taskID);
            renderAllTasks();
            newTaskBtn();
        }, 2000);
    });

    taskDescription.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !!e.target.value) {
            const newTask = new Task(`task${taskList.length}`, e.target.value);
            
            if (!!newTask.desc) {
                taskList.push(newTask);
                localStorage.setItem('toDoList', JSON.stringify(taskList));

                task.classList.remove('editing');
                task.classList.add('saved');
            }
        }
        else task.classList.add('editing');
    });

    task.appendChild(chkBox);
    task.appendChild(taskDescription);
    task.id = taskID;

    task.classList.add('task');
    document.body.appendChild(task);
}

export const renderAllTasks = () => {
    //CLEAR PREVIOUS NODES
    document.getElementsByTagName('body')[0].textContent = '';
    
    if (!!localStorage.getItem('toDoList')) {
        taskList = JSON.parse(localStorage.getItem('toDoList'));
        for (const task of taskList) renderTask(task.id, task.desc);
    }
}