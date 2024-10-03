import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './Routes/Login';
import DashboardLayout from './Routes/DashboardLayout';
import TeachersList from './Routes/TeachersList';
import SubjectsList from './Routes/SubjectsList';
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
      { path: "/dashboard/subjects", element: <SubjectsList /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="layout">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
)
