import { BoxContainerColMui, EmailOutlinedIconMui, FacebookIconMui, GoogleIconMui, SocialBoxMui, SocialSpanMui } from "../../../styleMui/auth.stylemui";
import '../../../StyleCss/auth.css'
import { Divider, Stack } from "@mui/material";
import { useState } from "react";


export default function External() {
    const [mode, setMode] = useState(localStorage.getItem('mode') === 'true' || false);
    return (
        <BoxContainerColMui className={`${mode ? 'dark' : 'light'} w-100`}>
            <SocialBoxMui>
                <SocialSpanMui>or connect with</SocialSpanMui>
            </SocialBoxMui>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >
                <FacebookIconMui />
                <GoogleIconMui />
                <EmailOutlinedIconMui />
            </Stack>
        </BoxContainerColMui>
    );
}