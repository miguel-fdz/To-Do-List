export default class Task {
    constructor(id, description) {
        this.id = id;
        this.description = description;
        this.saveTask();
    }

    saveTask() {
        //INSERT VALIDATION HERE
        localStorage.setItem(this.id, this.description);
    }

    deleteTask() {
        //INSERT VALIDATION HERE
        localStorage.removeItem(this.id);
    }
}

