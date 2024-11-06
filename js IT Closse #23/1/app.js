class TodoModel {
    constructor() {
        this.todos = [];
        this.onTodoListChanged = null;
    }

    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
    }

    _commit(todos) {
        this.onTodoListChanged(todos);
    }

    addTodo(todoText) {
        this.todos.push(todoText);
        this._commit(this.todos);
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
        this._commit(this.todos);
    }

    editTodo(index, newText) {
        this.todos[index] = newText;
        this._commit(this.todos);
    }
}

class TodoView {
    constructor() {
        this.app = document.querySelector('body');
        this.todoList = document.getElementById('todoList');
        this.input = document.getElementById('newTodo');
        this.addButton = document.getElementById('addTodoBtn');
    }

    getTodoText() {
        return this.input.value;
    }

    clearInput() {
        this.input.value = '';
    }

    displayTodos(todos) {
        this.todoList.innerHTML = '';

        todos.forEach((todo, index) => {
            const li = document.createElement('li');

            const todoText = document.createElement('span');
            todoText.textContent = todo;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Видалити';
            deleteButton.addEventListener('click', () => {
                this.onDeleteButtonClick(index);
            });

            li.appendChild(todoText);
            li.appendChild(deleteButton);
            this.todoList.appendChild(li);
        });
    }

    bindAddTodo(handler) {
        this.addButton.addEventListener('click', () => {
            if (this.getTodoText()) {
                handler(this.getTodoText());
                this.clearInput();
            }
        });
    }

    bindDeleteTodo(handler) {
        this.onDeleteButtonClick = handler;
    }
}

class TodoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);

        this.onTodoListChanged(this.model.todos);
    }

    onTodoListChanged = (todos) => {
        this.view.displayTodos(todos);
    };

    handleAddTodo = (todoText) => {
        this.model.addTodo(todoText);
    };

    handleDeleteTodo = (index) => {
        this.model.deleteTodo(index);
    };
}

const app = new TodoController(new TodoModel(), new TodoView());