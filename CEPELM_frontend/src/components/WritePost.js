import React, { useRef } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, blue, yellow } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, ThemeProvider } from '@mui/system';
import { ListItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { positions } from '@mui/system';
import Cookies from 'universal-cookie';
import { useCookies } from 'react-cookie';


function WritePost() { 

    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    const postRef = useRef(); 

    function addPost(){
        console.log(postRef.current.value);
        var cookieUserId = cookies.user.userId;
        
        axios.post('http://localhost:3000/community/addPost', {
            userId: cookieUserId, 
            content: postRef.current.value
        }).then((response) => {
            console.log("success");
        }).catch((error) => {
            console.log(error); 
        })
    }

    var publishPost
    if (cookies.user == undefined){
        publishPost = '';
    }

    else {

        if (cookies.user.isLogin == true){
            publishPost = <Card sx={{ width: 1 }}>
                     <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="user">
                            SK
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Sungmin Kim"
                        subheader="Current Time"
                    />
                     <CardContent>
        
                     <TextField
                     fullWidth
                    id="user-post"
                    label="Share Your Thoughts!"
                    multiline
                    rows={10}
                    variant="filled"
                    inputRef={postRef}
                    />
                    <br />
                    <br />
                    <Button variant="contained" sx={{ bgcolor: blue[500] }} onClick={addPost}>Post</Button>
                    </CardContent>
                </Card>
        }
        else{
            publishPost = '';
        }
        
    }
    return (<div>{publishPost}</div>);

}

export default WritePost; 