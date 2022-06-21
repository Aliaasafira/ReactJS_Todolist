import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./App.css";
import React from "react";
import List from "./List";
import { useState } from 'react';
import { uid } from 'uid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function App() {

  const [todo, setTodo] = useState([
  {
    id: 1,
    name: "Watering garden",
  },
  {
    id: 2,
    name: "Hangout with friend",
  },
  ]);

  const [isUpdate, setIsUpdate] = useState({
    id: null,
    status: false,
  })

  const [formData, setFormData] = useState({
    name: ""
  });

  function handleChange(event){
    let data = { ...formData };
    data[event.target.name] = event.target.value;
    setFormData(data);
  }

  function handleSubmit(event){
    event.preventDefault();
    // alert("test");
    let data = [...todo];
    
    if (formData.name === ""){
      return false;
    }

    if (isUpdate.status){
      data.forEach((todolist)=> {
        if (todolist.id === isUpdate.id){
          todolist.name = formData.name;
        }
      })
    } else {
      data.push({id: uid(), name: formData.name});
    }

    setIsUpdate({id: null, status: false});
    setTodo(data);
    setFormData({name: ""});
  }

  function handleEdit(id){
    let data = [...todo];
    let foundData = data.find((todolist) => todolist.id === id);
    setFormData({name: foundData.name});
    setIsUpdate({id: id, status: true});
  }

  function handleDelete(id){
    let data = [...todo];
    let filteredData = data.filter(todolist => todolist.id !== id);
    setTodo(filteredData);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <h4>What do you want to do?</h4>

      <Card sx={{ minWidth: 400 }}>
      <CardContent>

        <form onSubmit={handleSubmit} className="px-3 py-4">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: -0.5, width: '40ch' },
            }}
            noValidate autoComplete="off"
            onSubmit={handleSubmit}>
            <div>
              <TextField
                id="outlined-helperText"
                label="Input Activity"
                onChange={handleChange} value={formData.name} name="name"
                // defaultValue="Default Value"
                // helperText="Some important text"
              />
            </div>
          </Box>
          <div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Create
            </button>
          </div>
        </form>

      <List handleDelete={handleDelete} handleEdit={handleEdit} data={todo}/>
      </CardContent>
      </Card>
    </div>
  );
}

export default App;