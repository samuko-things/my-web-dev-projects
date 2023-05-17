import React, { Fragment, useState } from "react";

const EditTodo = ({todo}) => {

  const [description, setDescription] = useState(todo.description);

  const changeText = (event) =>{
    setDescription(event.target.value);
  }

  const updateDescription = async(event) => {
    event.preventDefault();
    try {
      const requestBody = {description};
      const response = await fetch(`http://localhost:8080/todo/${todo.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(requestBody)
      });
      console.log(response);
      window.location = "/"; // refresh page
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Fragment>
      <button type="button" className="btn btn-warning" 
      data-toggle="modal" data-target={`#id${todo.id}`} 
      onClick={() => setDescription(todo.description)}>
        Edit
      </button>

      <div className="modal" id={`id${todo.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button type="button" 
              className="close" 
              data-dismiss="modal">&times;</button>
            </div>

            <div className="modal-body">
              <input type="text" 
              className="form-control" 
              value={description} onChange={changeText}/>
            </div>

            <div className="modal-footer">
              <button type="button" 
              className="btn btn-warning" 
              data-dismiss="modal"
              onClick={updateDescription}>Edit</button>

              <button type="button" 
              className="btn btn-danger" 
              data-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditTodo;