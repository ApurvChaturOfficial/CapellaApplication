import React from 'react'

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "src/love/iTemplate/components/MKBox";
import MKTypography from "src/love/iTemplate/components/MKTypography";
import MKInput from "src/love/iTemplate/components/MKInput";
import MKButton from "src/love/iTemplate/components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "src/love/iTemplate/examples/Navbars/DefaultNavbar";
import SimpleFooter from "src/love/iTemplate/examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "src/love/iTemplate/routes";

// Images
import bgImage from "src/love/iTemplate/assets/images/bg-sign-in-basic.jpeg";


const AuthFormComponent = ({ Data, Redux, ReduxUltimate }) => {
  return (
    <React.Fragment>
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GitHubIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>

                {
                  ReduxUltimate.state.RequiredObject?.Loading ? "Loading..."
                  :
                  <MKBox component="form" role="form">
                    {
                      Data.inputs.map((each, index) => {
                        return (
                          <React.Fragment key={index} >
                            <MKBox mb={2}>
                              <MKInput 
                                type={each.type}  
                                name={each.name}
                                label={each.label}
                                placeholder={each.placeholder} 
                                onChange={each.onChange}  
                                fullWidth 
                              />
                              <MKTypography variant="caption" color='error'>
                                {Redux.state.FormObject.FormError?.[each.name]}
                              </MKTypography>
                            </MKBox>
                          </React.Fragment>
                        )
                      })
                    }

                    {
                      Data.buttons.map((each, index) =>  {
                        return (
                          <MKBox mt={4} mb={1} key={index}>
                            <MKButton variant="gradient" color="info" fullWidth onClick={each.onClick}>
                              {each.label}
                            </MKButton>
                          </MKBox>
                        )
                      })
                    }

                    <MKBox mt={3} mb={1} textAlign="center">
                      {
                        Data.links.map((each, index) => {
                          return (
                            <MKBox mt={1} mb={1} textAlign="center" key={index}>

                              <MKTypography variant="button" color="text">
                                {each?.note}{" "}
                                <MKTypography
                                  component={Link}
                                  to={each.route}
                                  variant="button"
                                  color="info"
                                  fontWeight="medium"
                                  textGradient
                                >
                                  {each.label}
                                </MKTypography>
                              </MKTypography>
                            </MKBox>
                          )
                        })
                      }
                    </MKBox>
                  </MKBox>
                }

              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </React.Fragment>
  )
}

export default AuthFormComponent