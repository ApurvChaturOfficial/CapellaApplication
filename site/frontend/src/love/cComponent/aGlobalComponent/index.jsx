import React from 'react'

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "src/love/iTemplate/components/MKBox";
import MKTypography from "src/love/iTemplate/components/MKTypography";
import MKSocialButton from "src/love/iTemplate/components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "src/love/iTemplate/examples/Navbars/DefaultNavbar";
import SimpleFooter from 'src/love/iTemplate/examples/Footers/SimpleFooter';

// Presentation page sections
import Counters from "src/love/iTemplate/pages/Presentation/sections/Counters";
import Information from "src/love/iTemplate/pages/Presentation/sections/Information";
import DesignBlocks from "src/love/iTemplate/pages/Presentation/sections/DesignBlocks";
import Pages from "src/love/iTemplate/pages/Presentation/sections/Pages";
import Testimonials from "src/love/iTemplate/pages/Presentation/sections/Testimonials";
import Download from "src/love/iTemplate/pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "src/love/iTemplate/pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "src/love/iTemplate/routes";
import footerRoutes from "src/love/iTemplate/footer.routes";

// Images
import bgImage from "src/love/iTemplate/assets/images/bg-presentation.jpg";

// Component
import HeaderComponent from './component/aHeaderComponent';
import brand from 'src/love/dFunction/gBrand';


const GlobalComponent = ({ Redux, LogoutAPICall, children }) => {
  // JSX
  return (
    <React.Fragment>
      <HeaderComponent
        Redux={Redux} LogoutAPICall={LogoutAPICall}
        brand={brand()}
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.creative-tim.com/product/material-kit-react",
        //   label: "free download",
        //   color: "info",
        // }}
        // sticky
        transparent
        light
      />
      { children }
    </React.Fragment>
  )
}

export default GlobalComponent