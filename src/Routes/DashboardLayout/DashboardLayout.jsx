import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <>
          <p>Some header</p>
          <main className="main-container">
            <Outlet />
          </main>
        </>
      );
}

export default DashboardLayout