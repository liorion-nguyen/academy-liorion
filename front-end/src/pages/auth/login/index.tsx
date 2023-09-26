import { Checkbox, FormControl, FormControlLabel, InputAdornment, InputLabel, Link, OutlinedInput } from "@mui/material";
import { BoxContainerColMui, BoxFloatRightMui, BoxMui, BtnSubmitMui, CheckBoxMui, LinkMui } from "../../../styleMui/auth.stylemui";
import '../../../StyleCss/auth.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import External from "../external-external";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SnackbarActions } from "../../../redux/snackbar";

export default function Login() {
    const [mode, setMode] = useState(localStorage.getItem('mode') === 'true' || false);
    const dispatch = useDispatch();
    const snackbar = useSelector((state: any) => state.snackbar);

    const handleSubmit = () => {
        dispatch(SnackbarActions.OnSnackbar({
            mode: true,
            content: "Haven't made a database yet",
            type: 'error'
        }))
    }
    return (
        <BoxContainerColMui className={`${mode ? 'dark' : 'light'} pd-20`}>
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Your username or email</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start"><PermIdentityIcon /></InputAdornment>}
                    label="Your username or email"
                />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="standard-adornment-password">Your password</InputLabel>
                <OutlinedInput
                    type="password"
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start"><HttpsOutlinedIcon /></InputAdornment>}
                    label="Your password"
                />
            </FormControl>

            <BoxMui className="jc-sb ai-ct">
                <CheckBoxMui control={<Checkbox defaultChecked />} label="Remember me" />
                <LinkMui href="#" underline="hover">
                    {'Forgot your password?'}
                </LinkMui>
            </BoxMui>

            <BoxFloatRightMui>
                <BtnSubmitMui className="btnSubmit" onClick={handleSubmit}>Log In</BtnSubmitMui>
            </BoxFloatRightMui>

            <External />

        </BoxContainerColMui>
    );
}