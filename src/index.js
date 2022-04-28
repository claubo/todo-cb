import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

//todoList.todos.forEach(todo => crearTodoHtml( todo ));
todoList.todos.forEach( crearTodoHtml );

//const newTodo = new Todo('jdhfkasjdhfkjasdh');
//todoList.nuevoTodo( newTodo);


//newTodo.imprimirClase();
//todoList.nuevoTodo( tarea );

//console.log(todoList);

//crearTodoHtml( tarea);
//todoList.todos[0].imprimirClase();

/*
localStorage.setItem('mi-key','abcweqweqe');

setTimeout( ()=>{
    localStorage.removeItem('mi-key');

},2000);

*/



console.log('todos',todoList.todos);