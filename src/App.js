import { Route, Routes, Link } from "react-router-dom";
import { routes } from "./routes";
import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="app" style={{ backgroundColor: "#121214" }}>
      <Navbar></Navbar>
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
