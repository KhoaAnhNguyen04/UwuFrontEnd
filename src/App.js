import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";
export const AppContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh; /* Make sure the container takes up the full viewport height */
  overflow: hidden; /* Disable scrolling for the outer container */
`;

export const BackgroundContainer = styled.div`
  .main_img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1000;
    object-fit: cover;
  }

  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
  }
`;

function App() {
  return (
    <AppContainer>
      <BackgroundContainer className="content">
        <img className="main_img" src="main-bg.png" />
        <Navbar />
        <div className="content">
          <Routes>
            {routes.map((route, index) => {
              const Layout = route.layout ? route.layout : Fragment;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </BackgroundContainer>
    </AppContainer>
  );
}

export default App;
