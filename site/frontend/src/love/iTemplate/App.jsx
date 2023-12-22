import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "src/love/iTemplate/assets/theme";
import Presentation from "src/love/iTemplate/layouts/pages/presentation";

// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalLayout from "./love/eLayout/aGlobalLayout";
import AuthLayout from "./love/eLayout/bAuthLayout";
import ContentLayout from "./love/eLayout/cContentLayout";

import AboutPage from "./love/fPage/aGlobalPage/bAboutPage";
import HomePage from "./love/fPage/aGlobalPage/aHomePage";
import ContactPage from "./love/fPage/aGlobalPage/cContactPage";

import LoginPage from "./love/fPage/bAuthPage/aLoginPage";
import RegisterPage from "./love/fPage/bAuthPage/bRegisterPage";
import ForgotPasswordPage from "./love/fPage/bAuthPage/cForgotPasswordPage";
import ResetPasswordPage from "./love/fPage/bAuthPage/dResetPasswordPage";

import ProfilePage from "./love/fPage/cContentPage/aTopbarPage/aProfilePage";
import DashboardPage from "./love/fPage/cContentPage/bSidebarPage/aDashboardPage";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "./love/eLayout/aGlobalLayout/extra/State";
import RouteName from "./love/gRoute/RouteName";


export default function App() {
  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.GlobalLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};

  // Extra Render
	useEffect(() => {
		// console.log(Redux.state)
	}, [Redux.state])

  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer
        position="bottom-center"
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route element={<GlobalLayout />} >
          <Route path="" element={<HomePage ReduxUltimate={Redux} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route element={<AuthLayout ReduxUltimate={Redux} />} >
            <Route path={RouteName.Auth.LoginRoute} element={<LoginPage ReduxUltimate={Redux} />} />
            <Route path={RouteName.Auth.RegisterRoute} element={<RegisterPage ReduxUltimate={Redux} />} />
            <Route path={RouteName.Auth.ForgotPasswordRoute} element={<ForgotPasswordPage />} />
            <Route path={`${RouteName.Auth.ResetPasswordRoute}/:token`} element={<ResetPasswordPage ReduxUltimate={Redux} />} />
          </Route>

          <Route element={<ContentLayout ReduxUltimate={Redux} />} >
            <Route path="/profile" element={<ProfilePage ReduxUltimate={Redux} />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Route>
        
        {/* <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
      </Routes>
    </ThemeProvider>
  );
}
