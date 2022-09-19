import * as dom from './dom.js'
import './style.css';

if (localStorage.length > 0) dom.renderAllTasks()
else dom.newTaskBtn();