'use client'
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
const GrayButton = styled(Button)({
    backgroundColor: '#efefef', 
    color: 'black',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    '&:hover': {
        backgroundColor: '9AA6B2', 
    },
});

const CancelButton: React.FC<{ onClick: () => void }> = ({onClick }) => {
    return (
        <GrayButton variant="contained" onClick={onClick}>
            <Typography>Cancel</Typography>
        </GrayButton>
    );
};

export default CancelButton;