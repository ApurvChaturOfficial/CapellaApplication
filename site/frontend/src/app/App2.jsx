import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

// React Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { Action } from "../love/eLayout/aGlobalLayout/extra/State";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "src/love/iTemplate/assets/theme";

// Layout
import GlobalLayout from "src/love/eLayout/aGlobalLayout";
import UnprotectedLayout from "src/love/eLayout/bUnprotectedLayout";
import ProtectedLayout from "src/love/eLayout/cProtectedLayout";
import AuthenticatedLayout from "src/love/eLayout/dAuthenticatedLayout";
import AuthorisedLayout from "src/love/eLayout/eAuthorisedLayout";
import TopbarLayout from "src/love/eLayout/fTopbarLayout";
import SidebarLayout from "src/love/eLayout/gSidebarLayout";

// Page
import HomePage from "src/love/fPage/bUnprotectedPage/aHomePage";
import AboutPage from "src/love/fPage/bUnprotectedPage/bAboutPage";
import ContactPage from "src/love/fPage/bUnprotectedPage/cContactpage";

import LoginPage from "src/love/fPage/dAuthenticatedPage/aLoginPage";
import RegisterPage from "src/love/fPage/dAuthenticatedPage/bRegisterPage";
import ForgotPasswordPage from "src/love/fPage/dAuthenticatedPage/cForgotPasswordPage";
import ResetPasswordPage from "src/love/fPage/dAuthenticatedPage/dResetPasswordPage";

import ProfileRetrievePage from "src/love/fPage/fTopbarPage/aProfileReteivePage";
import ProfileUpdatePage from "src/love/fPage/fTopbarPage/bProfileUpdatePage";
import ProfilePasswordUpdatePage from "src/love/fPage/fTopbarPage/cProfilePasswordUpdatePage";
import ProfileDeletePage from "src/love/fPage/fTopbarPage/dProfileDeletePage";
import RouteName from "src/love/gRoute/RouteName";


export default function App2() {
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

  // Not Mine
  // const { pathname } = useLocation();

  // // Setting page scroll to 0 when changing the route
  // useEffect(() => {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  // }, [pathname]);

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <ToastContainer
          position="top-center"
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}
        <Routes>
          <Route element={<GlobalLayout ReduxUltimate={Redux} />} >
              <Route element={<UnprotectedLayout ReduxUltimate={Redux} />} >
                <Route path={RouteName.GlobalRoute.HomeRoute} element={<HomePage ReduxUltimate={Redux} />} />
                <Route path={RouteName.GlobalRoute.AboutRoute} element={<AboutPage ReduxUltimate={Redux} />} />
                <Route path={RouteName.GlobalRoute.ContactRoute} element={<ContactPage ReduxUltimate={Redux} />} />
              </Route>

              <Route element={<ProtectedLayout ReduxUltimate={Redux} />} >
                <Route element={<AuthenticatedLayout ReduxUltimate={Redux} />} >
                  <Route path={RouteName.AuthRoute.LoginRoute} element={<LoginPage ReduxUltimate={Redux} />} />
                  <Route path={RouteName.AuthRoute.RegisterRoute} element={<RegisterPage ReduxUltimate={Redux} />} />
                  <Route path={RouteName.AuthRoute.ForgotPasswordRoute} element={<ForgotPasswordPage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.AuthRoute.ResetPasswordRoute}/:token`} element={<ResetPasswordPage ReduxUltimate={Redux} />} />
                </Route>

                <Route element={<AuthorisedLayout ReduxUltimate={Redux} />} >
                  <Route element={<TopbarLayout ReduxUltimate={Redux} />} >
                    <Route path={RouteName.ContentRoute.TopbarRoute.ProfileRetrieveRoute} element={<ProfileRetrievePage ReduxUltimate={Redux} />} />
                    <Route path={RouteName.ContentRoute.TopbarRoute.ProfileUpdateRoute} element={<ProfileUpdatePage ReduxUltimate={Redux} />} />
                    <Route path={RouteName.ContentRoute.TopbarRoute.ProfilePasswordUpdateRoute} element={<ProfilePasswordUpdatePage ReduxUltimate={Redux} />} />
                    <Route path={RouteName.ContentRoute.TopbarRoute.ProfileDeleteRoute} element={<ProfileDeletePage ReduxUltimate={Redux} />} />
                  </Route>

                  <Route element={<SidebarLayout ReduxUltimate={Redux} />} >
                  </Route>
                </Route>
              </Route>
            </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
