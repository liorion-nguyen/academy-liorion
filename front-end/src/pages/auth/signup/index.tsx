import { Checkbox, FormControl, FormControlLabel, InputAdornment, InputLabel, Link, OutlinedInput } from "@mui/material";
import { BoxContainerColMui, BoxFloatRightMui, BoxMui, BtnSubmitMui, CheckBoxMui } from "../../../styleMui/auth.stylemui";
import '../../../StyleCss/auth.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import External from "../external-external";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SnackbarActions } from "../../../redux/snackbar";

export default function SignUp() {
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
                <InputLabel htmlFor="outlined-adornment-amount">First & Last Name</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start"><AssignmentIndOutlinedIcon /></InputAdornment>}
                    label="Your username or email"
                />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Username</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start"><PermIdentityIcon /></InputAdornment>}
                    label="Username"
                />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>}
                    label="Email"
                />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Password</InputLabel>
                <OutlinedInput
                    type="password"
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start"><HttpsOutlinedIcon /></InputAdornment>}
                    label="Password"
                />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Confirm Password</InputLabel>
                <OutlinedInput
                    type="password"
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start"><ConfirmationNumberOutlinedIcon /></InputAdornment>}
                    label="Confirm Password"
                />
            </FormControl>

            <BoxMui className="jc-sb ai-ct">
                <CheckBoxMui control={<Checkbox defaultChecked />} label="I agree to AcanemyLiorion Terms of Service and Privacy Policy." />
            </BoxMui>

            <BoxFloatRightMui>
                <BtnSubmitMui className="btnSubmit" onClick={handleSubmit}>Create An Account</BtnSubmitMui>
            </BoxFloatRightMui>

            <External />
        </BoxContainerColMui>
    );
}