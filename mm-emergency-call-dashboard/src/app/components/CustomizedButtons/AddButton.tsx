'use client'
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const BlueButton = styled(Button)({
    backgroundColor: '#5D87FF',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    boxShadow: '0 3px 5px 2px rgba(93, 135, 255, .3)',
    '&:hover': {
        backgroundColor: '#396efe',
    },
});

const AddButton: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <BlueButton variant="contained">
            {children}
        </BlueButton>
    );
};

export default AddButton;