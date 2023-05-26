import { Navigate, Route, Routes } from "react-router-dom";

import { AboutPage, HomePage, LoginPage, NavBar, UserProvider } from "./";

export const MainApp = () => {
  const routes = [
    {
      name: "Home Page",
      path: "/",
      component: <HomePage />,
    },
    {
      name: "About Page",
      path: "about",
      component: <AboutPage />,
    },
    {
      name: "Login Page",
      path: "login",
      component: <LoginPage />,
    },
  ];

  return (
    <UserProvider>
      <div className="my-5">
        <h2>Main App</h2>
        <hr />

        <NavBar routes={routes} />

        <div className="border border-top-0 rounded-bottom bg-white p-5">
          <Routes>
            {routes.map((route) => (
              <Route
                path={route.path}
                element={route.component}
                key={route.path}
              />
            ))}
            <Route path="/" element={<Navigate to="login" />} />
            <Route path="/*" element={<Navigate to="login" />} />
          </Routes>
        </div>
      </div>
    </UserProvider>
  );
};
