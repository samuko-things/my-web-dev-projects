import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  // delete todo function
  const deleteTodo = async(id) => {
    try {
      const response = await fetch(`http://localhost:8080/todo/${id}`,{
        method: "DELETE"
      });
      const jsonData = await response.json();
      setTodos(todos.filter(todo => todo.id !== id));
      // window.location = "/"; // refresh page
      console.log(jsonData.message);
    } catch (err) {
      console.error(err.message);
    }
  };

  // get all todos function
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:8080/todo");
      const jsonData = await response.json();
      setTodos(jsonData.todo);
      // alert(jsonData.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  // console.log(todos);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Discription</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                {/* <td>Edit</td> */}
                <td><EditTodo todo={todo}/></td>
                <td>
                  <button className="btn btn-danger" 
                  onClick={() => deleteTodo(todo.id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;