import React, { useRef, useState, useEffect } from 'react';
import FeedTemplate from './FeedTemplate';
import Grid from '@mui/material/Grid';
import './PostRecovery.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { palette } from '@mui/system';

const PostRecovery = () => {
    return(
        <FeedTemplate>
            <Grid container 
             spacing={2}
             justifyContent="center"
             >
                <Grid item xs={12}>
                    <Box sx={{border:0, height:30}}>

                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <div className="before-recovery">
                        <h1>Before Recovery</h1>
                        <br></br>
                    </div>
                    <div className="box">
                        <Box sx={{border: 2, width:390, height:297}}>
                            <div className="image-before">
                            <img src="image-before.jpeg"
                             alt="Input Image"
                             width="390"
                             height="400"/>
                            </div>
                        </Box>
                    </div>
                </Grid>

                <Grid item xs={2}>
                </Grid>

                <Grid item xs={5}>
                    <div className = "after-recovery">
                        <h1>After Recovery</h1>
                        <br></br>
                    </div>
                    <div className = "box">
                        <Box sx={{border: 2, width:390, height:297}}> 
                        <div className="image-after">
                            <img src="image-after.jpeg"
                             alt="Output Image"
                             width = "390"
                             height= "400"/>
                        </div>
                        </Box>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="try-again">
                    <Button
                        size="large"
                        type="submit"
                        variant="contained"
                        sx={{ mt: 4, mb: 2 }}
                        onClick={() => {
                        window.location.href="/post-recovery";
                        }}
                    >
                    Try another!
                    </Button>
                    </div>
                    <div className="save">
                    <Button
                        size="large"
                        type="submit"
                        variant="contained"
                        sx={{ mt: 0, mb: 2 }}
                        onClick={() => {
                        window.location.href="/post-recovery";
                        }}
                    >
                    Download Recovered Image
                    </Button>
                    </div>
                </Grid>
            </Grid>
        </FeedTemplate>
    )
}

export default PostRecovery;