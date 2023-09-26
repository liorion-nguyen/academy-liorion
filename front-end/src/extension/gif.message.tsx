import { Box, ImageList, ImageListItem, Tab, Tabs } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export default function Gif() {
    const gifs = [
        {
            name: 'Stay at home',
            gif: [
                {
                    name: 'entertainment',
                    src: 'https://cdn-icons-png.flaticon.com/256/4105/4105443.png'
                },
                {
                    name: 'exercise',
                    src: 'https://cdn-icons-png.flaticon.com/256/4105/4105444.png'
                },
                {
                    name: 'drink tea',
                    src: 'https://cdn-icons-png.flaticon.com/256/4105/4105445.png'
                },
                {
                    name: 'play with animals',
                    src: 'https://cdn-icons-png.flaticon.com/256/4105/4105446.png'
                },
                {
                    name: 'play guita',
                    src: 'https://cdn-icons-png.flaticon.com/256/4105/4105454.png'
                },
            ]
        },
        {
            name: 'Love',
            gif: [
                {
                    name: 'love music',
                    src: 'https://cdn-icons-png.flaticon.com/256/4289/4289408.png'
                },
                {
                    name: 'love you',
                    src: 'https://cdn-icons-png.flaticon.com/256/4289/4289409.png'
                },
                {
                    name: 'bow and arrow of love',
                    src: 'https://cdn-icons-png.flaticon.com/256/4289/4289420.png'
                },
                {
                    name: 'love letter',
                    src: 'https://cdn-icons-png.flaticon.com/256/4289/4289411.png'
                },
                {
                    name: 'i love you',
                    src: 'https://cdn-icons-png.flaticon.com/256/4289/4289414.png'
                },
            ]
        },
        {
            name: 'Birthday',
            gif: [
                {
                    name: 'birthday hat',
                    src: 'https://cdn-icons-png.flaticon.com/256/4213/4213641.png'
                },
                {
                    name: 'birthday hat',
                    src: 'https://cdn-icons-png.flaticon.com/256/4213/4213646.png'
                },
                {
                    name: 'gift box',
                    src: 'https://cdn-icons-png.flaticon.com/256/4213/4213650.png'
                },
                {
                    name: 'birthday cake',
                    src: 'https://cdn-icons-png.flaticon.com/256/4213/4213654.png'
                },
                {
                    name: 'birthday cake',
                    src: 'https://cdn-icons-png.flaticon.com/256/4213/4213661.png'
                },
            ]
        }
    ]

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{
            maxWidth: { xs: 180, sm: 250 },
            padding: '3px 7px',
            boxShadow: '#80808061 0 0 8px 5px',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            position: 'absolute',
            bottom: '30px',
            right: '0',
            zIndex: '1000',     
            background: '#fff',   
        }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
            >

                {
                    gifs.map((gif, index) => (
                        <Tab label={gif.name} key={index} />
                    ))
                }
            </Tabs>

            <Box
                sx={{
                    width: 'calc(100% - 14px)',
                    background: '#ebebeb78',
                    padding: '10px',
                    borderRadius: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <SearchIcon
                    sx={{
                        marginLeft: '9px',
                        color: '#4c4a4ade',
                    }}
                />
                <input placeholder="Search for stickers..."
                    style={{
                        border: 'none',
                        outline: 'none',
                        background: 'transparent',
                        width: '85%',
                        fontSize: '16px',
                        color: '#4c4a4ade',
                    }}
                />
            </Box>

            <Box
                sx={{
                    height: '300px'
                }}
            >
                <ImageList sx={{ width: '100%', maxHeight: '300px' }} cols={4} rowHeight={70}>
                    {gifs[value].gif.map((gif) => (
                        <ImageListItem key={gif.src} className="gif-detail">
                            <img
                                srcSet={`${gif.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${gif.src}?w=164&h=164&fit=crop&auto=format`}
                                alt={gif.name}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
}