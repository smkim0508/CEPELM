import React from 'react'; 
import FeedTemplate from './FeedTemplate';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

function Settings() {

    return(
        <FeedTemplate>
            <br/>
            <Card sx={{ width: 1 }}>
             <CardHeader
                title="Your Settings"
                subheader="Tell us more about your story. "
            />
             <CardContent>

                 
            </CardContent>
        </Card>
        </FeedTemplate>
    );
}

export default Settings; 