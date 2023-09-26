import { Avatar, Box, Button, Grid, Menu, TextareaAutosize } from '@mui/material';
import { styled as muiStyled } from '@mui/system';
import { BoxContainerColMui, BoxContainerRowMui } from './auth.stylemui';
import CallIcon from '@mui/icons-material/Call';

export const BoxMessageMui = muiStyled(BoxContainerColMui)(({ theme }) => ({
    boxShadow: '#aeaeae 0 0 5px 2px',
    height: '500px',
    position: 'fixed',
    bottom: '0',
    right: '50px',
    width: '350px',
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
}));

export const FeatureMessMui = muiStyled(BoxContainerColMui)(({ theme }) => ({
    padding: '10px',
    width: '-webkit-fill-available',
    position: 'relative',
    boxShadow: '#80808099 0 3px 6px 0px',
}));

export const ContentMessageMui = muiStyled(BoxContainerColMui)(({ theme }) => ({
    height: '80%',
    overflowX: 'hidden', /* Ẩn thanh cuộn ngang */
    overflowY: 'auto',
    background: 'white',
    width: '-webkit-fill-available',
    padding: '40px 10px 10px 10px',
}));

export const FullNameMui = muiStyled(BoxContainerColMui)(({ theme }) => ({
    fontSize: '15px',
    fontWeight: '600',
}));

export const UserActiveMui = muiStyled(BoxContainerColMui)(({ theme }) => ({
    fontSize: '13px',
    fontWeight: '400',
    color: 'grey'
}));

export const TitleMessageMui = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 'auto'
}));

export const ListIconMessMui = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    right: '0',
    gap: '10px',
    float: 'left'
}));

export const GridRoundTopMui = muiStyled(Grid)(({ theme }) => ({
    marginTop: '0',
    marginLeft: '0',
    alignItems: 'center',
    '.MuiGrid-item': {
        paddingTop: '0',
        paddingLeft: '0',
        display: 'flex',
        justifyContent: 'center',
    }
}));

export const GridRoundDownMui = muiStyled(Grid)(({ theme }) => ({
    marginTop: '0',
    marginLeft: '0',
    padding: '10px',
    alignItems: 'flex-end',
    '.MuiGrid-item': {
        paddingTop: '0',
        paddingLeft: '0',
        display: 'flex',
        justifyContent: 'center',
    }
}));

export const TextareaAutosizeMui = muiStyled(TextareaAutosize)(({ theme }) => ({
    resize: 'none',
    lineHeight: '20px',
    width: 'calc(100% - 50px)',
    background: 'transparent',
    border: 'none',
    outline: 'none',
}));

export const BoxInputMessMui = muiStyled(Box)(({ theme }) => ({
    width: 'calc(100% - 20px)',
    fontSize: '18px',
    padding: '10px',
    borderRadius: '30px',
    background: '#f0f2f5',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));



export const CallIconMui = muiStyled(CallIcon)(({ theme }) => ({
    fontSize: '25px',
    color: '#bcc0c4',
    padding: '2px',
    ':hover': {
        background: '#80808036',
        borderRadius: '50%',
    }
}));

export const ContentMessageRightMui = muiStyled(Box)(({ theme }) => ({
    color: '#898989ad',
    fontSize: '13px',
    maxWidth: '70%',
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    position: 'relative',
}));

export const AvatarSizeMessMui = muiStyled(Avatar)(({ theme }) => ({
    width: '35px',
    height: '35px',
}));

export const OneMessageMui = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    width: '-webkit-fill-available',
    padding: '5px',
    alignItems: 'end',
    gap: '10px',
}));

export const MainContentMessMui = muiStyled('span')(({ theme }) => ({
    padding: '10px',
    borderRadius: '20px',
    maxWidth: '-webkit-fill-available',
    fontSize: '15px',
}));

export const NameMessageMui = muiStyled('p')(({ theme }) => ({
    fontSize: '11px',
    color: '#898989ad',
}));


export const IconEmojiMui = muiStyled('img')(({ theme }) => ({
    width: '32px',
    height: '32px',
    ':hover': {
        scale: '1.2',
        transition: 'all 0.3s'
    }
}));

export const BoxEmojiMui = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    background: '#fff',
    width: 'auto',
    padding: '8px',
    borderRadius: '30px',
    position: 'absolute',
    gap: '7px',
    top: '50%',
    transform: "translateY(-124%)",
}));

export const MenuEmoji = muiStyled(Menu)(({ theme }) => ({
    position: 'static',
    '.MuiList-root': {
        display: 'flex',
        gap: '10px',
        padding: '5px 10px'
    },
    '.MuiPaper-root': {
        borderRadius: '50px'
    },
    'li': {
        padding: "0 5px",
        ':hover': {
            background: 'transparent',
        }
    }
}));
export const ButtonEmoji = muiStyled(Button)(({ theme }) => ({
    minWidth: 'auto',
    ':hover': {
        background: 'transparent'
    }
}));

export const EmojiCount = muiStyled('img')(({ theme }) => ({
    width: '13px',
    height: '13px'
}));

export const VisuallyHiddenInput = muiStyled('input')(({ theme }) => ({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
}));

export const BoxCountEmoj = muiStyled(Box)(({ theme }) => ({
    background: '#8989892e',
    borderRadius: '30px',
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: '-15px',
    left: '-25px'
}));


