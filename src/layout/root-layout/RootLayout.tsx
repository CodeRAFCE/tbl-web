import { Outlet } from "react-router-dom";
import { MainWrapper, RootLayoutWrapper } from "./RootLayout.style";
import Navbar from "../../components/navbar/Navbar";

const RootLayout = () => {
  return (
      <RootLayoutWrapper>
        <Navbar />
          <MainWrapper>
            <Outlet />
          </MainWrapper>
      </RootLayoutWrapper>
  );
};

export default RootLayout;