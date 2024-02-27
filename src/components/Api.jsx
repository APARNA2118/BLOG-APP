import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {
    var [user,setUser] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            console.log(response.data);
            setUser(response.data);
        })
    })
  return (
    <div>
        <h1>Blog Dashboard</h1>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'blue',fontWeight:'bold'}}>ID</TableCell>
                        <TableCell style={{color:'blue',fontWeight:'bold'}}>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val,i) =>{
                        return(
                            <TableRow>
                                <TableCell>{val.id}</TableCell>
                                <TableCell>{val.title}</TableCell>
                            </TableRow>
                        )
                    } )}

                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Api