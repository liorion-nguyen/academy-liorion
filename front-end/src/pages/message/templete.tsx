import { Avatar, Box, Button, Grid, Menu, MenuItem } from "@mui/material";
import { AvatarSizeMessMui, BoxCountEmoj, BoxEmojiMui, BoxInputMessMui, BoxMessageMui, ButtonEmoji, ContentMessageMui, ContentMessageRightMui, EmojiCount, FeatureMessMui, FullNameMui, GridRoundDownMui, GridRoundTopMui, IconEmojiMui, ListIconMessMui, MainContentMessMui, MenuEmoji, NameMessageMui, OneMessageMui, TextareaAutosizeMui, TitleMessageMui, UserActiveMui, VisuallyHiddenInput } from "../../styleMui/message";
import SendIcon from '@mui/icons-material/Send';
import { Fragment, useEffect, useRef, useState } from "react";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ImageIcon from '@mui/icons-material/Image';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import ClearIcon from '@mui/icons-material/Clear';
import ReplyIcon from '@mui/icons-material/Reply';
import { BoxMessage, Message } from "../../schema/box-message.schema";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Like from '../../image/emoji/like.png';
import Love from '../../image/emoji/love.png';
import Haha from '../../image/emoji/haha.png';
import Sad from '../../image/emoji/sad.png';
import Wow from '../../image/emoji/wow.png';
import Gif from "../../extension/gif.message";
import Icon from "../../extension/icon.message";
import { useDispatch, useSelector } from "react-redux";


export default function TemplateMessage(props: BoxMessage) {
    const { messages, author, audiences } = props;

    const dispatch = useDispatch();
    const [inpMess, setInpMess] = useState(false);
    const [checkBoxClick, setCheckBoxClick] = useState(true);
    const [valueMess, setValueMess] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [reply, setReply] = useState<Message>({});
    const [emoji, setEmoji] = useState(-1);
    const [gif, setGif] = useState(false);
    const [icon, setIcon] = useState(false);
    const [detailContact, setDetailContact] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
    const messageListRef = useRef<HTMLTextAreaElement | null>(null);
    const BoxMessageRef = useRef<HTMLTextAreaElement | null>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const inpicon = useSelector((state: any) => state.message.icon);


    const handleBoxClick = () => {
        if (checkBoxClick) {
            setInpMess(true);
            setCheckBoxClick(false);
            inputRef.current?.focus();
        }
    }

    const handleInputKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            setOutputValue(outputValue + valueMess + '<br>');
        }
    };

    const handleReply = (message: object) => {
        inputRef.current?.focus();
        setReply(message)

    }

    const handleDeleteReply = () => {
        setReply({})
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
        setEmoji(id);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setEmoji(-1)
        setAnchorEl(null);
    };

    const [anchorElBoxDetail, setAnchorElBoxDetail] = useState<null | HTMLElement>(null);
    const openBoxDetail = Boolean(anchorElBoxDetail);
    const handleClickBoxDetail = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElBoxDetail(event.currentTarget);
    };
    const handleCloseBoxDetail = () => {
        setAnchorElBoxDetail(null);
    };

    const [anchorElBoxGif, setAnchorElBoxGif] = useState<null | HTMLElement>(null);
    const openBoxGif = Boolean(anchorElBoxGif);
    const handleClickBoxGif = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElBoxGif(event.currentTarget);
    };
    const handleCloseBoxGif = () => {
        setAnchorElBoxGif(null);
    };

    const formatDateTime = (inputDateTime: string) => {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };

        const formattedDateTime = new Date(inputDateTime).toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);

        return formattedDateTime;
    }

    useEffect(() => {
        if (inpicon) {
            let inp = valueMess + inpicon;
            setValueMess(inp);
            inputRef.current?.focus();
        }
    }, [inpicon])
    


    return (
        <BoxMessageMui onClick={handleBoxClick} ref={BoxMessageRef}>

            <FeatureMessMui>
                <GridRoundTopMui container spacing={2}>
                    <Grid item xs={4} md={2}>
                        <Avatar alt={audiences.name} src={audiences.avt} />
                    </Grid>
                    <Grid item xs={4} md={6} className="extendBox">
                        <TitleMessageMui onClick={handleClickBoxDetail}>
                            <FullNameMui>{audiences.name}</FullNameMui>
                            <UserActiveMui>Is active</UserActiveMui>
                        </TitleMessageMui>
                        <ExpandMoreIcon className={inpMess ? 'iconActive' : 'iconInactive'} />
                        <Menu
                            id="basic-menu-BoxDetail"
                            anchorEl={anchorElBoxDetail}
                            open={openBoxDetail}
                            onClose={handleCloseBoxDetail}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleCloseBoxDetail}>Profile</MenuItem>
                            <MenuItem onClick={handleCloseBoxDetail}>My account</MenuItem>
                            <MenuItem onClick={handleCloseBoxDetail}>Logout</MenuItem>
                        </Menu>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <ListIconMessMui>
                            <CallIcon className={inpMess ? 'iconActive' : 'iconInactive'} />
                            <VideocamIcon className={inpMess ? 'iconActive' : 'iconInactive'} />
                            <ClearIcon className={inpMess ? 'iconActive' : 'iconInactive'} />
                        </ListIconMessMui>
                    </Grid>
                </GridRoundTopMui>
            </FeatureMessMui>

            <ContentMessageMui ref={messageListRef}>
                {messages.map((message, index) => (
                    <OneMessageMui key={message.id} className={message.creator ? 'me' : 'you'}>
                        <AvatarSizeMessMui alt={audiences.name} src={audiences.avt} />
                        <Box className="main-right">
                            <ContentMessageRightMui className={message.creator ? 'me' : 'you'}>
                                <NameMessageMui className="nameAuthor">{audiences.name}</NameMessageMui>
                                <MainContentMessMui dangerouslySetInnerHTML={{ __html: message.content || "" }} className="contentMessage"></MainContentMessMui>
                                {(message.emoji?.length || 0) > 0 &&
                                    <BoxCountEmoj>
                                        <p>{message.emoji?.length}</p>
                                        {message.emoji && message.emoji.map((typeEmoji, index) => (
                                            <Fragment key={index}>
                                                {typeEmoji.type === "Love" && <EmojiCount src={Love} alt="Love" />}
                                                {typeEmoji.type === "Like" && <EmojiCount src={Like} alt="Like" />}
                                                {typeEmoji.type === "Haha" && <EmojiCount src={Haha} alt="Haha" />}
                                                {typeEmoji.type === "Sad" && <EmojiCount src={Sad} alt="Sad" />}
                                                {typeEmoji.type === "Wow" && <EmojiCount src={Wow} alt="Wow" />}
                                            </Fragment>
                                        ))}
                                    </BoxCountEmoj>
                                }
                                <p className="details-time-message">{formatDateTime(message.createAt || "")}</p>
                            </ContentMessageRightMui>
                            <Box className="extension">
                                <ButtonEmoji className="extensionChird"
                                    onClick={(e) => handleClick(e, index)}
                                >
                                    <p className="details-extensionChird">Flying to oranges</p>
                                    <SentimentSatisfiedAltIcon className="iconInactive" />
                                </ButtonEmoji>
                                <MenuEmoji
                                    className="emoji"
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open && index === emoji}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <IconEmojiMui src={Like} onClick={handleClose} />
                                    <IconEmojiMui src={Love} onClick={handleClose} />
                                    <IconEmojiMui src={Haha} onClick={handleClose} />
                                    <IconEmojiMui src={Sad} onClick={handleClose} />
                                    <IconEmojiMui src={Wow} onClick={handleClose} />
                                </MenuEmoji>
                                <Box className="extensionChird">
                                    <p className="details-extensionChird">Reply</p>
                                    <ReplyIcon className="iconInactive" onClick={() => handleReply(message)} />
                                </Box>
                                <Box className="extensionChird">
                                    <p className="details-extensionChird">See more</p>
                                    <MoreVertIcon className="iconInactive" />
                                </Box>
                            </Box>
                        </Box>
                    </OneMessageMui>
                ))}
            </ContentMessageMui>

            <FeatureMessMui>
                <Box className={Object.keys(reply).length !== 0 ? 'show-reply reply' : 'reply'}>
                    <Box className="replyTitle">
                        <p>Answering <b>{reply.creator ? 'self' : audiences.name}</b></p>
                        <ClearIcon className="iconInactive" onClick={handleDeleteReply} />
                    </Box>
                    <p className="replyContent" dangerouslySetInnerHTML={{ __html: reply.content || "" }}></p>
                </Box>
                <GridRoundDownMui container spacing={2}>
                    <Grid item xs={4} md={valueMess.length == 0 ? 5 : 1} className="p-10">
                        <ListIconMessMui>
                            <Button
                                sx={{
                                    'span': {
                                        marginLeft: '0',
                                        marginRight: '0',
                                    },
                                    minWidth: 'auto',
                                    padding: '0'
                                }}
                                component="label" startIcon={<AddCircleOutlineIcon className={inpMess ? 'iconActive' : 'iconInactive'} />}>
                            </Button>

                            {
                                valueMess.length == 0 && (
                                    <>
                                        <Button
                                            sx={{
                                                'span': {
                                                    marginLeft: '0',
                                                    marginRight: '0',
                                                },
                                                minWidth: 'auto',
                                                padding: '0'
                                            }}
                                            component="label" startIcon={<AttachFileIcon className={inpMess ? 'iconActive' : 'iconInactive'} />}>
                                            <VisuallyHiddenInput type="file" />
                                        </Button>
                                        <Button
                                            sx={{
                                                'span': {
                                                    marginLeft: '0',
                                                    marginRight: '0',
                                                },
                                                minWidth: 'auto',
                                                padding: '0'
                                            }}
                                            component="label" startIcon={<ImageIcon className={inpMess ? 'iconActive' : 'iconInactive'} />}>
                                            <VisuallyHiddenInput type="file" accept="image/*" />
                                        </Button>
                                        <Button
                                            sx={{
                                                'span': {
                                                    marginLeft: '0',
                                                    marginRight: '0',
                                                },
                                                minWidth: 'auto',
                                                padding: '0'
                                            }}
                                            component="label" startIcon={<GifBoxOutlinedIcon className={inpMess ? 'iconActive' : 'iconInactive'} onClick={() => setGif(!gif)} />}>
                                            {gif && <Gif />}
                                        </Button>

                                    </>
                                )
                            }
                        </ListIconMessMui>
                    </Grid>
                    <Grid item xs={4} md={valueMess.length == 0 ? 5.5 : 9.5}>
                        <BoxInputMessMui>
                            <TextareaAutosizeMui
                                minRows={1}
                                maxRows={5}
                                placeholder="Aa"
                                value={valueMess}
                                ref={inputRef}
                                onFocus={() => setInpMess(true)}
                                onBlur={() => setInpMess(false)}
                                onChange={(e) => setValueMess(e.target.value)}
                                onKeyPress={handleInputKeyPress}
                            />
                            <SentimentSatisfiedAltIcon className={inpMess ? 'iconActive' : 'iconInactive'} onClick={() => setIcon(!icon)} />
                            {icon && <Icon />}
                        </BoxInputMessMui>
                    </Grid>
                    <Grid item xs={4} md={1.5} className="p-10">
                        <SendIcon className={valueMess.length > 0 ? 'iconActive' : 'iconInactive'} />
                    </Grid>
                </GridRoundDownMui>
            </FeatureMessMui>
        </BoxMessageMui>
    );
}