import React from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function List({ data, handleEdit, handleDelete }) {
  return (
    <div className="list-group">
        {data.map((todolist)=> {
            return(
                <div className="list-group-item">
                    <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    <div className="d-flex w-120 justify-content-between">
                        
                        <input type="checkbox" className="check"/>
                        <h6>{todolist.name}</h6>
                        <div>
                            <Stack direction="row" spacing={0}>
                                <IconButton aria-label="edit" color="secondary" onClick={() => handleEdit(todolist.id)}> 
                                    <EditOutlinedIcon /> 
                                </IconButton>
                                <IconButton aria-label="delete" color="error" onClick={() => handleDelete(todolist.id)}> 
                                    <ClearIcon /> 
                                </IconButton> 
                            </Stack>
                        </div>
                    </div>
                    </CardContent>
                    </Card>
                </div>
                )
            })
        }
    </div>
  );
}