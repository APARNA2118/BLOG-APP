import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <div>
        <br /><br />
        <Typography variant='h2' color=''>CREATE YOUR BLOG</Typography>
        <br /><br /><br /><br /><br />
        <TextField variant='outlined' label='Blog Name' focused color='primary' />
        <br /><br />
        <TextField variant='outlined' label='Blog Descripiton' focused color='primary' />
        <br /><br />
        <TextField variant='outlined' label='Author Name' focused color='primary' />
        <br /><br />
        <Button variant='outlined'>SUBMIT</Button>
        <br /><br /><br /><br />
    </div>
  )
}

export default Home