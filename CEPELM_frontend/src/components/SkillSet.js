import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 1,
    p: 0,
};

function SkillSet(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <Box display={'flex'} flexDirection={'row'}>
            {props.list.map((item, i) => (
                 <div>
                     <Box
                    component={Card}
                    borderRadius={2}
                    padding={1}
                    width={100}
                    height={100}
                    sx={{mr:2}}
                    key={i}
                    bgcolor={item.bgcolor}
                    alignItems="center"
                    justifyContent="center"
                    onClick={handleOpen}
                    >
                    <Typography color="common.white">{item.name}</Typography>
                    </Box>
                    <Modal //pop-up screen when you click on skillcard
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box sx={style}>
                        {item.description}
                    </Box>
                    </Modal>
                 </div>
                 
            ))}
        </Box>

    );
}



export default SkillSet;