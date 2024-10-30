import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";
export const BackgroundContainer = styled.div`
  z-index: -10000;
  position: absolute;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
  }
`;

function App() {
  return (
    <div className="app">
      <BackgroundContainer>
        <img src="main-bg.png" />
      </BackgroundContainer>
      <Navbar />
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
  );
}

export default App;
