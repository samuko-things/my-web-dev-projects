import React, {Fragment, useState} from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const updateText = (event) =>{
    setDescription(event.target.value);
  }

  const onSubmitForm = async(event) => {
    event.preventDefault(); // i.e dont refresh page
    try {
      const requestBody = {description};
      const response = await fetch("http://localhost:8080/todo", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(requestBody)
      });
      console.log(response);
      window.location = "/"; // refresh page
    } catch (err) {
      console.error(err.message);
    }
  }

  return(
    <Fragment>
      <h1 className="text-center mt-5">PERN Todo List</h1>
      <form className="form-group d-flex flex-row mt-5" 
      onSubmit={onSubmitForm}>
        <input type='text' className="form-control"
          value={description} onChange={updateText}/>
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )
};

export default InputTodo;