import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'reactstrap';
import './App.css';

import UserModal from './components/user-modal/UserModal';

import { todosActionAsyncCreator, todoActionAsyncCreator } from './store/modules/todo/todo.actions';
import { usersActionAsyncCreator, userActionAsyncCreator } from './store/modules/user-ph/user.actions';

function App() {
  const todos = useSelector(store => store.todoModule.todos);
  const todo = useSelector(store => store.todoModule.todo);

  const users = useSelector(store => store.userModule.users);
  const user = useSelector(store => store.userModule.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todosActionAsyncCreator());
    dispatch(usersActionAsyncCreator());
  }, [dispatch]);

  const handlerOnTodoSelect = (obj) => {
    return (event) => {
      const { id } = obj
      dispatch(todoActionAsyncCreator(id));
    }
  }


  const handlerOnUserSelect = (obj) => {
    return (event) => {
      const { id } = obj
      dispatch(userActionAsyncCreator(id));
    }
  }

  return (
    <div className="app">
      {todos.loading && 'Cargando'}

      {!user.loading && user.data && <UserModal user={user} buttonLabel="ver usuario"/>}
    <ul>
      {todos.data.map(todo => (
        <li key={todo.id}>{todo.title} <button onClick={handlerOnTodoSelect(todo)}>Ver</button></li>
      ))}
    </ul>
    {todo.data && (
      <div>
        {todo.data.id}
      </div>
    )}
    <hr />
    <Table>
      <tbody>
      {users.data.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td><Button onClick={handlerOnUserSelect(user)}>Ver</Button></td>
        </tr>
      ))}
      </tbody>
    </Table>
    </div>
  );
}

export default App;
