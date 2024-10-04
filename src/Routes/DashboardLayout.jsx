import { Outlet } from "react-router-dom";
import { Container } from '@mui/material';
import HeaderComponent from "../Components/HeaderComponent";

const HEADER_ITEMS = [
  { href: '/dashboard/teachers', label: 'Teachers'},
  { href: '/dashboard/subjects', label: 'Subjects'}
]

const DashboardLayout = () => {
    return (
        <>
          <HeaderComponent items={HEADER_ITEMS} />
          <Container maxWidth='lg' sx={{backgroundColor: '#257180', height: '100%', paddingTop: '36px', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <Outlet />
          </Container>
        </>
      );
}

export default DashboardLayout