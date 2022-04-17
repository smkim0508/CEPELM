import * as React from 'react';
import FriendRecProfile from './FriendRecProfile';
import FriendRecProfile2 from './FriendRecProfile2';
import FriendRecProfile3 from './FriendRecProfile3';
import FriendRecProfile4 from './FriendRecProfile4';
import FriendRecProfile5 from './FriendRecProfile5';
import FriendRecProfile6 from './FriendRecProfile6';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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


function FriendRec() {


    const [age, setAge] = React.useState('');
    const [location, setLocation] = React.useState('') 
    const [language, setLanguage] = React.useState('')

    const handleAge = (event) => {
        setAge(event.target.value);
    };

    const handleLocation = (event) => {
        setLocation(event.target.value);
    }

    const handleLanguage = (event) => {
        setLanguage(event.target.value);
    }


    return (
        <div>
            <br />
            <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={age}
                label="Age *"
                onChange={handleAge}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={40}>40</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={60}>60</MenuItem>
                <MenuItem value="">
                    <em>More</em>
                </MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-required-label">Location</InputLabel>
                <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={location}
                label="Age *"
                onChange={handleLocation}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"Seoul"}>Seoul</MenuItem>
                <MenuItem value={"Busan"}>Busan</MenuItem>
                <MenuItem value={"Gyeonggi"}>Gyeonggi</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-required-label">Language</InputLabel>
                <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={language}
                label="Age *"
                onChange={handleLanguage}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"Seoul"}>English</MenuItem>
                <MenuItem value={"Busan"}>Korean</MenuItem>
                <MenuItem value={"Gyeonggi"}>Both</MenuItem>
                </Select>
            </FormControl>
            </div>


            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(1)).map((_, index) => ( //controls number of rec shown
                <Grid item xs={2} sm={4} md={4} key={index}>
                     <FriendRecProfile />
                </Grid>
            ))}
            {Array.from(Array(1)).map((_, index) => ( 
                <Grid item xs={2} sm={4} md={4} key={index}>
                     <FriendRecProfile2 />
                </Grid>
            ))}
            {Array.from(Array(1)).map((_, index) => ( 
                <Grid item xs={2} sm={4} md={4} key={index}>
                     <FriendRecProfile3 />
                </Grid>
            ))}
            {Array.from(Array(1)).map((_, index) => ( 
                <Grid item xs={2} sm={4} md={4} key={index}>
                     <FriendRecProfile4 />
                </Grid>
            ))}
            {Array.from(Array(1)).map((_, index) => ( 
                <Grid item xs={2} sm={4} md={4} key={index}>
                     <FriendRecProfile5 />
                </Grid>
            ))}
            {Array.from(Array(1)).map((_, index) => ( 
                <Grid item xs={2} sm={4} md={4} key={index}>
                     <FriendRecProfile6 />
                </Grid>
            ))}
            </Grid>

        </div>


        
    )
}

export default FriendRec;