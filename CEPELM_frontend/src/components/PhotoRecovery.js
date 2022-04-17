import React, { useRef, useState, useEffect } from 'react';
import FeedTemplate from './FeedTemplate';
import Grid from '@mui/material/Grid';
import './PhotoRecovery.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { palette } from '@mui/system';

/*
const uploadImage = document.getElementById('image');

const fileStatus = document.getElementById('file-status');

uploadImage.addEventListener('change', function(){
  fileStatus.textContent = this.files[0].name
})

console.log(this.file[0])
*/

/*const handleSubmit = (event) => {
    window.location.href="/post-recovery";
}
*/

const PhotoRecovery = () => {
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
                <Grid item xs={.5}>
                </Grid>
                <Grid item xs={11}>
                    <div className="photo-recovery">
                        <h1>Photo Recovery</h1>
                        <br></br>
                        
                    </div>
                    <div className="box">
                        <Box sx={{border: 2, width:790, height:400}}>
                            <div className="text">
                                Upload your image here
                            </div>
                            
                            <div className="upload-button">
                                <form action="/post-recovery" 
                                    enctype="multipart/form-data">
                                
                                    <input type="file" class="custom-file-input"/>
                            
                                </form>
                            </div>

                            <div className="submit-button2">
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => {
                                    window.location.href="/post-recovery";
                                }}
                            >
                                Submit
                            </Button>
                            </div>
                            
                        </Box>
                    </div>
                </Grid>
                <Grid item xs={.5}>
                </Grid>

            </Grid>
        </FeedTemplate>
    )
}

export default PhotoRecovery;