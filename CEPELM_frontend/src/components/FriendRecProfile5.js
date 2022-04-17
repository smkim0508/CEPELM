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

function FriendRecProfile5() {
    return(
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            yeshbball25
          </Typography>
          <Typography variant="h5" component="div">
            Yesh Kavadia
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            19, India
          </Typography>
          <Typography variant="body2">
            Basketball Player, Needs help with Math
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  );
}

export default FriendRecProfile5;
