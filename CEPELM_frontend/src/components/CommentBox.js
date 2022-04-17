import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Link} from 'react-router-dom';
import { Box } from "@mui/system";
import { borders } from '@mui/system';
import { Button } from '@mui/material';
import {  blue  } from '@mui/material/colors';
import TextField from '@mui/material/TextField';



function CommentBox(){

    return(
        
        <Box sx={{ borderTop: 1, borderTopColor: 'primary.main' }}>
        <CardHeader
          avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                SK
              </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Sungmin Kim"
          subheader="February 21, 2022"
        />
        <CardContent>
                <TextField
                    fullWidth
                id="user-post"
                label="Share Your Thoughts!"
                multiline
                rows={4}
                variant="filled"
                />
                <br />
                <br />
                <Button variant="contained" sx={{ bgcolor: blue[500] }}>Post</Button>
        </CardContent>
        </Box>
    )
}

export default CommentBox; 