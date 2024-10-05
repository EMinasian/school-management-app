import { Container, TextField, Button } from '@mui/material';

const Login = () => {
    return (
        <Container sx={{padding: 16, width: 500, background: '#257180', borderRadius: 6, display: 'flex', flexDirection: 'column', gap: 4}}>
            <TextField label='Username' placeholder='Enter username' fullWidth required sx={{color: 'white'}}/>
            <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
            <Button type='submit' sx={{ fontSize: 24, fontWeight: 600, paddingY: 1, paddingX: 3, background: '#FF6500', borderRadius: 2, minWidth: 6, color: 'white'}} fullWidth>Sign in</Button>
        </Container>
    )
}

export default Login