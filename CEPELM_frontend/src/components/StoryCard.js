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

function StoryCard(props) { 

    return (
        <Card sx={{ width: 1 }}>
             <CardHeader
                title="The Story of My Life"
            />
             <CardContent>
                 Hi! I am an international adoptee who came to the U.S. at the age of 2 from South Korea. I am currently living in New Jersey with 
                 my wife and two 5-year-olds. I have had little to no memories of my birth family, and the only real connection I have to them
                 are two photographs that were besides me when I was sent for adoption.
                 I've had times in my life when my label as an "adoptee," dragged me down, but I think that over the years I've come to accept it and
                 embrace it as an important part of me. Now, I am proud to say that I am an adoptee, and I even have loving friends and a family of my own!
                 I came to this community to look for others like me who are currently struggling so that I can help them not have to experience the same things I did.
                 I am also glad to say that I've met many wonderful people through this community who helped me get better at my native language, Korean,
                 in exchange for me helping them with English. I also love the photograph recovery system this web-service provides, it really helped to clarify
                 the picture I have of my birth family and my mother. Please feel free to reach out to me using the email address in my profile if you want to chat more!
                 
            <br />
            <br />
            </CardContent>
        </Card>
    );

}

export default StoryCard; 