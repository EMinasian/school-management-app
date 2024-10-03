import { Outlet } from "react-router-dom";
import { Container } from '@mui/material';

const DashboardLayout = () => {
    return (
        <>
          <p>Some header</p>
          <Container maxWidth='lg' sx={{backgroundColor: '#1E3E62', height: '100%', paddingTop: '36px', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <Outlet />
          </Container>
        </>
      );
}

export default DashboardLayout