import { useRef } from "react";
import { FormGroup, TextField, Button, Typography } from '@mui/material';
import { registeration } from "../utils/authentication";

const Authentication = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSignUp = async () => {
        const success = await registeration(emailRef.current.value, passwordRef.current.value)
        console.log(success)
    }


    return (
        <form>
            <FormGroup sx={{padding: 16, width: 500, background: '#257180', borderRadius: 6, display: 'flex', flexDirection: 'column', gap: 4}}>
                <TextField
                    name='email'
                    variant="standard"
                    placeholder='Enter email'
                    inputRef={emailRef}
                />
                <TextField
                    name='password'
                    variant="standard"
                    placeholder='Enter password'
                    inputRef={passwordRef}
                />
                {/* <Typography color={"green"} paragraph sx={{fontSize: 18, fontWeight: 600, marginTop: 10}}>
                    {success ? "Registeration success": "Registeration failed"}
                </Typography> */}
                <Button onClick={handleSignUp} sx={{ fontSize: 16, fontWeight: 600, paddingY: 1, paddingX: 3, background: '#FF6500', borderRadius: 2, minWidth: 6, color: 'white'}}>Sign up</Button>
            </FormGroup>
        </form>
    )
}

export default Authentication