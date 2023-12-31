import { Outlet } from 'react-router-dom';

import Sidebar from '../components/navigation/Sidebar';

const RootLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default RootLayout;
