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
import DefaultFooter from "src/love/iTemplate/examples/Footers/DefaultFooter";
import FilledInfoCard from "src/love/iTemplate/examples/Cards/InfoCards/FilledInfoCard";

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
import HeroSectionComponent from './component/aHeroSectionComponent';
import CounterSectionComponent from './component/bCounterSectionComponent';
import AboutAndServiceSectionComponent from './component/cAboutAndServiceSectionComponent';
import BranchSectionComponent from './component/dBranchSectionComponent';
import ProjectSectionComponent from './component/eProjectSectionComponent';


const HomePageComponent = ({ Redux, ReduxUltimate }) => {
  return (
    <React.Fragment>
      {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve && <HeroSectionComponent Redux={Redux} ReduxUltimate={ReduxUltimate} />}

      {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve &&
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
          {Redux.state.ReceivedObject?.Retrieve?.CounterList && <CounterSectionComponent Redux={Redux} />}
          {
            Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve && 
            Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually && 
            Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively && 
            Redux.state.ReceivedObject?.Retrieve?.ServiceList && 
              <AboutAndServiceSectionComponent Redux={Redux} />
          }
          {Redux.state.ReceivedObject?.Retrieve?.BranchRetrieve && <BranchSectionComponent Redux={Redux} />}
          {Redux.state.ReceivedObject?.Retrieve?.ProjectSectionRetrieve && <ProjectSectionComponent Redux={Redux} />}
          <MKBox pt={18} pb={6}>
            <Container>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                  <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                    Thank you for your support!
                  </MKTypography>
                  <MKTypography variant="body1" color="text">
                    We deliver the best web products
                  </MKTypography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  my={{ xs: 5, lg: "auto" }}
                  mr={{ xs: 0, lg: "auto" }}
                  sx={{ textAlign: { xs: "center", lg: "right" } }}
                >
                  <MKSocialButton
                    component="a"
                    href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                    target="_blank"
                    color="twitter"
                    sx={{ mr: 1 }}
                  >
                    <i className="fab fa-twitter" />
                    &nbsp;Tweet
                  </MKSocialButton>
                  <MKSocialButton
                    component="a"
                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                    color="facebook"
                    sx={{ mr: 1 }}
                  >
                    <i className="fab fa-facebook" />
                    &nbsp;Share
                  </MKSocialButton>
                  <MKSocialButton
                    component="a"
                    href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                    color="pinterest"
                  >
                    <i className="fab fa-pinterest" />
                    &nbsp;Pin it
                  </MKSocialButton>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </Card>
      }
    </React.Fragment>
  )
}

export default HomePageComponent