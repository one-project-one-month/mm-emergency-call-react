import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { toggleSidebar, toggleMobileSidebar } from '@/lib/customizer/CustomizerSlice';
import { IconMenu2 } from '@tabler/icons-react';
import Notifications from './Notification';
import Profile from './Profile';
import Language from './Language';
import { AppState } from '@/lib/store';

const Header = () => {
    const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
    const lgDown = useMediaQuery((theme: any) => theme.breakpoints.down('lg'));

    // drawer
    const customizer = useAppSelector((state: AppState) => state.customizer);
    const dispatch = useAppDispatch();

    const AppBarStyled = styled(AppBar)(({ theme }) => ({
        boxShadow: 'none',
        background: theme.palette.background.paper,
        justifyContent: 'center',
        backdropFilter: 'blur(4px)',
        [theme.breakpoints.up('lg')]: {
            minHeight: customizer.TopbarHeight,
        },
    }));
    const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
        width: '100%',
        color: theme.palette.text.secondary,
    }));

    return (
        <AppBarStyled position="sticky" color="default">
            <ToolbarStyled>
                {/* ------------------------------------------- */}
                {/* Toggle Button Sidebar */}
                {/* ------------------------------------------- */}
                <IconButton
                    color="inherit"
                    aria-label="menu"
                    onClick={lgUp ? () => dispatch(toggleSidebar()) : () => dispatch(toggleMobileSidebar())}
                >
                    <IconMenu2 size="20" />
                </IconButton>

                <Box flexGrow={1} />
                <Stack spacing={1} direction="row" alignItems="center">
                    <Language />
                    <Notifications />
                    <Profile />
                </Stack>
            </ToolbarStyled>
        </AppBarStyled>
    );
};

export default Header;
