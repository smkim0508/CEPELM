import React, { useEffect, useRef } from 'react';
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
import { red, blue, yellow, deepPurple } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, ThemeProvider } from '@mui/system';
import { ListItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { positions } from '@mui/system';
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import './ProfileCard.css';

function ProfileCard(props) { 

    return (
        <Card sx={{ width: 1 }}>
             <CardContent>
               <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Avatar sx={{ width: 100, height: 100, bgcolor: deepPurple[500] }}>
                    </Avatar>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h4">David Wang</Typography>
                    <h1>I am from Seoul, South Korea</h1>
                    <h1>I came to the US in 1989</h1>
                    <h1>I can speak Korean and English</h1>
                    <h1>You can reach out to me at davwang345@gmail.com</h1>
                </Grid>
               </Grid>

            </CardContent>
        </Card>
    );

}

/*<Typography variant="h4">{props.realname}</Typography>
    <h1>I am from {props.hometown}</h1>
    <h1>I came to the US in 1989</h1>
    <h1>I can speak Korean, English, and French</h1>
    <h1>You can reach out to me at {props.email}!</h1>
*/

export default ProfileCard; 