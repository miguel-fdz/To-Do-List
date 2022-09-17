import * as dom from './dom.js' 
import './style.css';

let tasks = [];

const btn = dom.newTaskBtn();
btn.onclick = () => {
    dom.renderTask(tasks.length + 1);
}

document.body.appendChild(btn);