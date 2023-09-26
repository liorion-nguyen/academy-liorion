import { BottomNavigationAction, Box, Button, FormControl, FormControlLabel, Grid, Link } from '@mui/material';
import { styled as muiStyled } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const BoxLogoMui = muiStyled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        marginTop: '20px',
        width: '50%',
    },
    [theme.breakpoints.up('sm')]: {
        width: '35%',
        marginTop: '40px',
    },
    [theme.breakpoints.up('lg')]: {
        width: '15%',
        marginTop: '50px',
    },
}));

export const ImgMui = muiStyled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
}));

export const PMui = muiStyled('p')(({ theme }) => ({
    margin: '0',
    [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '17px'
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '16px'
    },
}));

export const BoxMui = muiStyled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
}));

export const BoxContainerRowMui = muiStyled(Box)(({ theme }) => ({
    width: '100vw',
    display: 'flex',
    justifyContent: 'center'
}));

export const BoxContainerColMui = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

export const BoxFloatRightMui = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'right'
}));

export const BoxLoginMui = muiStyled(Box)(({ theme }) => ({
    boxShadow: '#aeaeae 0 0 5px 2px',
    '.MuiBottomNavigation-root': {
        backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('sm')]: {
        width: '90%',
    },
    [theme.breakpoints.up('sm')]: {
        width: '70%',
    },
    [theme.breakpoints.up('lg')]: {
        width: '30%',
    },
}));

export const SocialBoxMui = muiStyled(Box)(({ theme }) => ({
    position: 'relative',
    marginTop: '-0.5px',
    width: '100%',
    margin: '30px 0'
}));

export const SocialSpanMui = muiStyled('span')(({ theme }) => ({
    position: 'absolute',
    zIndex: '1',
    left: '50%',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    padding: '5px 20px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '15px',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '16px',
    },
}));

export const BtnSubmitMui = muiStyled(Button)(({ theme }) => ({
    background: '#d1e6d1',
    margin: '10px 0',
    ':hover': {
        background: '#44c144'
    }
}));

export const FacebookIconMui = muiStyled(FacebookIcon)(({ theme }) => ({
    color: '#0a80ec !important',
    ':hover': {
        cursor: 'pointer'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '35px',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '37.5px',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '40px',
    },
}));

export const GoogleIconMui = muiStyled(GoogleIcon)(({ theme }) => ({
    color: '#fbbd05 !important',
    ':hover': {
        cursor: 'pointer'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '35px',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '37.5px',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '40px',
    },
}));

export const EmailOutlinedIconMui = muiStyled(EmailOutlinedIcon)(({ theme }) => ({
    color: '#ea4336 !important',
    ':hover': {
        cursor: 'pointer'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '35px',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '37.5px',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '40px',
    },
}));

export const CheckBoxMui = muiStyled(FormControlLabel)(({ theme }) => ({
    '.MuiTypography-root': {
        color: '#5c5c5c',
        [theme.breakpoints.down('sm')]: {
            fontSize: '13px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '14px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '15px',
        },
    }
}));

export const LinkMui = muiStyled(Link)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        fontSize: '13px',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '14px',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '15px',
    },
}));

export const BottomNavigationActionMui = muiStyled(BottomNavigationAction)(({ theme }) => ({
    '.MuiBottomNavigationAction-label': {
        fontSize: '1.1rem !important',
        fontWeight: 600,
    }
}));






