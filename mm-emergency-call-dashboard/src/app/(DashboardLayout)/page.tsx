'use client'
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

import PageContainer from '@/app/components/container/PageContainer';
import { Typography } from '@mui/material';
// components

export default function Dashboard() {

    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <PageContainer title="Dashboard" description="this is Dashboard">
            <Box mt={3}>
                <Typography>Dashboard</Typography>
            </Box>
        </PageContainer>
    )
}
