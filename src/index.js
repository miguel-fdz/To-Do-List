import * as dom from './dom.js'
import './style.css';

if (!!localStorage.getItem('toDoList')) dom.renderAllTasks();

dom.newTaskBtn();