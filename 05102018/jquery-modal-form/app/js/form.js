let todos = [];
const template = (todo) => `<li>${todo}</li>`;

$(document).ready(function () {

    // Read todos from localstorage ,if present
    if (!!localStorage.getItem('todos')) {
        // assign saved todos into app state
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    // Update list with app state
    todos.forEach(todo => {
        $('.todos').append($(template(todo)));
    });

    $('#form').on('submit', event => {
        event.preventDefault();
        const input = $('#label').val();
        //Add input item to app state
        todos.push(input);
        // Update list with new item
        $('.todos').append($(template(input)));
        // Save app state to localstorage
        $('#secret').val(input.toUpperCase());

        window.localStorage.setItem('todos', JSON.stringify(todos));
    });
});