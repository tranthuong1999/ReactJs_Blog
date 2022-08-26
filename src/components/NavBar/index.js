

import  React ,{useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useHistory  } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import "./style.css"
import {useSelector, useDispatch} from 'react-redux'
import { getBlog } from '../../redux/api';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function NavBar() {
  const history = useHistory();

  const dispatch = useDispatch();

  const listPosts = useSelector( state => state.posts.content)
  
  useEffect( () =>{

    getBlog(dispatch);

  },[])

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" onClick= { () => history.push('/post')} >New</Button>
          </Typography>
          <Button color="inherit" onClick= { () => history.push('/login')} >Login</Button>
          <span></span>
          <Button color="inherit" onClick= { () => history.push('/register')}>Register</Button>

        </Toolbar>
      </AppBar>
    </Box>
    <div>
        {
         listPosts[0]?.map((listPost ,index) =>{
            return(
                <div>{listPost.title}</div>
            )
         })
        }
 
    </div>
    </div>

  );
}
