import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <div>
        <br />
        <Typography variant='h2' color=''>Create a Blog</Typography>
        <br /><br /><br /><br /><br />
        <TextField variant='outlined' label='Blog Name' focused color='primary' />
        <br /><br />
        <TextField variant='outlined' label='Descripiton' focused color='primary' />
        <br /><br />
        <TextField label='Author Name' color='primary' focused />

       
        <br />
        <br />
        <Button variant='outlined'>Submit</Button>
        <br /><br /><br /><br />
        

    </div>
  )
}

export default Home