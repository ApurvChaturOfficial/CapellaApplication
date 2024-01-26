/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "src/love/iTemplate/components/MKBox";
import MKTypography from "src/love/iTemplate/components/MKTypography";
import MKAvatar from "src/love/iTemplate/components/MKAvatar";
import FinalRouteName from "src/love/gRoute/FinalRouteName";
import defaultUser from "src/love/iTemplate/assets/images/default-user-image.jpg";


function NavbarDropdown({
  Redux,
  name,
  icon,
  children,
  collapseStatus,
  light,
  href,
  route,
  collapse,
  ...rest
}) {
  const linkComponent = {
    component: "a",
    href,
    target: "_blank",
    rel: "noreferrer",
  };

  const routeComponent = {
    component: Link,
    to: route,
  };

  return (
    <>
      <MKBox
        {...rest}
        mx={1}
        p={1}
        display="flex"
        alignItems="center"
        color={light ? "white" : "dark"}
        sx={{ cursor: "pointer", userSelect: "none" }}
        {...(route && routeComponent)}
        {...(href && linkComponent)}
      >
        <MKBox display="flex" alignItems="center" lineHeight={0.5} >
          <MKAvatar src={Redux.state.ReceivedObject?.ProfileRetrieve?.eImage?.url || defaultUser} size="sm" />
          <MKBox ml={1} lineHeight={0.5} display={{ lg: "inline-block" }} >
            <MKTypography display="block" variant="button" fontWeight="medium" color={light ? "white" : "dark"}>
              {`${Redux.state.ReceivedObject?.ProfileRetrieve?.eFirstName} ${Redux.state.ReceivedObject?.ProfileRetrieve?.eLastName}`}
            </MKTypography>
            <MKTypography variant="caption" color={light ? "white" : "secondary"}>
              {Redux.state.ReceivedObject?.ProfileRetrieve?.eEmail}
            </MKTypography>
          </MKBox>
        </MKBox>
        <MKTypography variant="body2" color={light ? "white" : "dark"} ml="auto">
          <Icon sx={{ fontWeight: "normal", verticalAlign: "middle" }}>
            {collapse && "keyboard_arrow_down"}
          </Icon>
        </MKTypography>
      </MKBox>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of NavbarDropdown
NavbarDropdown.defaultProps = {
  children: false,
  collapseStatus: false,
  light: false,
  href: "",
  route: "",
};

// Typechecking props for the NavbarDropdown
NavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  collapse: PropTypes.bool.isRequired,
};

export default NavbarDropdown;
