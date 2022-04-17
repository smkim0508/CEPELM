import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);

function FriendRecProfile3() {
    return(
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            olapplesauce12
          </Typography>
          <Typography variant="h5" component="div">
            Oliver Cromwell
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            42, United Kingdom
          </Typography>
          <Typography variant="body2">
            Chef, Needs help with Korean Grammar
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  );
}

export default FriendRecProfile3;
