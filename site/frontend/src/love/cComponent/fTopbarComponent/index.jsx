import React, { useState } from 'react'

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "src/love/iTemplate/components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "src/love/iTemplate/examples/Navbars/DefaultNavbar";

// Author page sections
import Profile from "src/love/iTemplate/pages/LandingPages/Author/sections/Profile";
import Posts from "src/love/iTemplate/pages/LandingPages/Author/sections/Posts";
import Contact from "src/love/iTemplate/pages/LandingPages/Author/sections/Contact";
import Footer from "src/love/iTemplate/pages/LandingPages/Author/sections/Footer";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Routes
import routes from "src/love/iTemplate/routes";

// Images
import bgImage from "src/love/iTemplate/assets/images/city-profile.jpg";
import Container from 'src/love/iTemplate/assets/theme/components/container';
import FinalRouteName from 'src/love/gRoute/FinalRouteName';
import { Link } from 'react-router-dom';


const TopbarComponent = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  // JSX
  return (
    <React.Fragment>
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Grid container item justifyContent="center" xs={4} lg={6} mx="auto">
            <AppBar position="static">
              <Tabs value={activeTab} onChange={handleTabType} >
                <Tab label="My Profile" component={Link} to={FinalRouteName.ContentRoute.TopbarRoute.ProfileRoute} />
                <Tab label="Update Profile" component={Link} to={FinalRouteName.ContentRoute.TopbarRoute.ProfileUpdateRoute} />
                <Tab label="Update Password" component={Link} to={FinalRouteName.ContentRoute.TopbarRoute.ProfilePasswordUpdateRoute} />
                <Tab label="Close Account" component={Link} to={FinalRouteName.ContentRoute.TopbarRoute.ProfileDeleteRoute} />
              </Tabs>
            </AppBar>
          </Grid>
        </MKBox>

        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          { children }
        </Card>
      </MKBox>
    </React.Fragment>
  )
}

export default TopbarComponent