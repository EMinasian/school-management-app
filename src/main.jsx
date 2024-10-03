import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './Routes/Login';
import DashboardLayout from './Routes/DashboardLayout';
import TeachersList from './Routes/TeachersList';
import SubjectsList from './Routes/SubjectsList';
import Teacher, { loader as TeacherLoader } from './Routes/Teacher';
import Subject, { loader as SubjectLoader } from './Routes/Subject';
import { Container } from '@mui/material';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard/teachers", element: <TeachersList /> },
      { path: "/dashboard/teachers/:id", element: <Teacher />, loader: TeacherLoader },
      { path: "/dashboard/subjects", element: <SubjectsList /> },
      { path: "/dashboard/subjects/:id", element: <Subject />, loader: SubjectLoader },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container sx={{height: '100%'}}>
      <RouterProvider router={router} />
    </Container>
  </StrictMode>
)
