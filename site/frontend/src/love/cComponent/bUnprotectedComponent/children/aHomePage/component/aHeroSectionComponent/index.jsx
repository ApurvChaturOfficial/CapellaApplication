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
import MKButton from 'src/love/iTemplate/components/MKButton';
import { Link } from 'react-router-dom';
import FinalRouteName from 'src/love/gRoute/FinalRouteName';
import brand from 'src/love/dFunction/gBrand';
import MKBadge from 'src/love/iTemplate/components/MKBadge';


const HeroSectionComponent = ({ Redux, ReduxUltimate }) => {
  return (
    <MKBox
      minHeight="90vh"
      width="100%"
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
        `${linearGradient(
          rgba(gradients.dark.main, 0.2),
          rgba(gradients.dark.state, 0.2)
        )}, url(${Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.image?.url})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={8}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent={Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.subtitle}
            container
            sx={{ mb: 1, mt: 2 }}
          />
          <MKTypography
            variant="h1"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.subtitle}
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
            {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.description}
          </MKTypography>
          <MKBox display="flex">
            {
              Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.webLinks?.map((each, index) => {
                return (
                  <MKBox mx={1} key={index} component="a" href={each?.url} target="_blank">
                    <MKButton color="info" >
                      {each?.title}
                    </MKButton>
                  </MKBox>
                )
              })
            }

            {
              ReduxUltimate.state.ReceivedObject?.ProfileRetrieve ? (
                <MKBox mx={1}  component={Link} to={FinalRouteName.ContentRoute.TopbarRoute.ProfileRoute} >
                  <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
                    View Profile
                  </MKButton>
                </MKBox>
              ) : (
                <MKBox mx={1}  component={Link} to={FinalRouteName.AuthRoute.RegisterRoute} >
                  <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
                    Create Account
                  </MKButton>
                </MKBox>
              )

            }
          </MKBox>
          <MKTypography variant="h6" color="white" mt={4} >
            Follow us on
          </MKTypography>
          <MKBox display="flex" justifyContent="center" alignItems="center">
            {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.socialLinks?.map((each, index) => {
              return (
                <MKTypography component="a" variant="body1" color="white" href={each?.url} mx={2} key={index}>
                  <i className={`fab fa-${each?.title?.toLowerCase()}`} />
                </MKTypography>
              )
            })}
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
)
}

export default HeroSectionComponent