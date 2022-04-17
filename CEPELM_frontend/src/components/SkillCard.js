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
import SkillSet from './SkillSet';


const skills = [
    {
        name: "English", 
        description: "I am Experienced in English Reading, Writing, and Speaking!",
        bgcolor: "error.main"
    },
    {
        name: "K-Music", 
        description: "I am Interested in KPOP and other genres of Korean music!",
        bgcolor: "info.main"
    }
];

function SkillCard(props) { 

    return (
        <Card sx={{ width: 1 }}>
             <CardHeader
                title="Things I am Proficient at"
                subheader="Click to See Details"
            />
             <CardContent>
                 <SkillSet list={skills}/>
            </CardContent>
        </Card>
    );

}

export default SkillCard; 