import { BottomNavigationActionMui, BoxContainerColMui, BoxLoginMui, BoxLogoMui, ImgMui, PMui } from "../../styleMui/auth.stylemui";
import textLogo from '../../image/logo-page/text_logo.png';
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import Login from "./login";
import SignUp from "./signup";
import '../../StyleCss/auth.css'

export default function Auth() {
    const [value, setValue] = useState(0);
    const [mode, setMode] = useState(localStorage.getItem('mode') === 'true' || false);

    return (
        <BoxContainerColMui className={`${mode ? 'dark' : 'light'} pd-20 gap-30`}>
            <BoxLogoMui>
                <ImgMui src={textLogo} />
            </BoxLogoMui>

            <PMui>Study and practice with Liorion</PMui>

            <BoxLoginMui>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationActionMui label="Login" className={`${value === 0 ? 'select' : ''}`} />
                    <BottomNavigationActionMui label="Sign Up" className={`${value === 1 ? 'select' : ''}`} />
                </BottomNavigation>
                {value === 0 && <Login />}
                {value === 1 && <SignUp />}
            </BoxLoginMui>
        </BoxContainerColMui>
    );
}