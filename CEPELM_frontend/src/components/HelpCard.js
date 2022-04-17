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
        name: "Korean Grammar", 
        description: "I would like help on learning more about Korean Grammar",
        bgcolor: "success.main"
    },
    {
        name: "Korean Speaking", 
        description: "I would like help on getting better at Public Speaking in Korean",
        bgcolor: "info.main"
    },
    {
        name: "Korean Writing",
        description: "I would like help on getting better at Korean Writing",
        bgcolor: "warning.main"
    }
];


function HelpCard(props) { 
    return (
        <Card sx={{ width: 1 }}>
             <CardHeader
                title="Things I Need Help With"
                subheader="Click to See Details"
            />
             <CardContent>

                 <SkillSet list={skills}></SkillSet>
            </CardContent>
        </Card>
    );

}

export default HelpCard; 